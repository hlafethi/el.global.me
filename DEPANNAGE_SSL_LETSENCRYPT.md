# Dépannage SSL Let's Encrypt – "Some challenges have failed"

Let's Encrypt utilise le **défi HTTP-01** : il appelle **http://elp.webglobal.me/.well-known/acme-challenge/xxx** pour vérifier que le domaine pointe bien vers votre serveur. Si cet appel échoue, le certificat n’est pas délivré.

---

## 0. Erreur « DNS problem: NXDOMAIN » (prioritaire)

Si le message contient : **Type:** `dns` et **Detail:** `DNS problem: NXDOMAIN looking up A for elp.webglobal.me` (ou AAAA).

**Cause :** le nom **elp.webglobal.me** n'existe pas encore en DNS. Aucun enregistrement A n'est configuré.

**À faire :**
1. Aller chez l'hébergeur du domaine **webglobal.me** (Hostinger, Cloudflare, OVH, etc.).
2. Gestion **DNS** du domaine → **Créer un enregistrement A** :
   - **Nom / Sous-domaine :** `elp` (pas « elp.webglobal.me », juste `elp`).
   - **Valeur / Target :** l'**IP publique de votre VPS**.
   - **TTL :** 300 ou 3600.
3. Sauvegarder, puis attendre **5 à 30 min** (propagation).
4. Vérifier : `nslookup elp.webglobal.me` → doit afficher l'IP du VPS. Si NXDOMAIN, le DNS n'est pas propagé ou le nom est incorrect (`elp` et non `el`).
5. **Après** que le DNS résout correctement, redemander le certificat dans NPM (Proxy Host → SSL → Request a new SSL Certificate → Save).

---

## 1. Vérifier le DNS

**elp.webglobal.me doit pointer vers l’IP publique de votre VPS.**

### Depuis votre PC

```bash
nslookup elp.webglobal.me
```

ou

```bash
ping elp.webglobal.me
```

- **Attendu** : l’IP affichée est celle de votre VPS Hostinger.
- Si l’IP est différente ou « introuvable », corrigez l’enregistrement **A** chez votre hébergeur DNS (webglobal.me) : **nom** = `elp`, **valeur** = **IP du VPS**. Attendez 5–30 min (propagation).

---

## 2. Vérifier les ports 80 et 443 (pare-feu)

Let's Encrypt a besoin que **le port 80** soit accessible depuis Internet.

### Sur le VPS (SSH)

```bash
sudo ufw status
```

Si UFW est actif, les ports 80 et 443 doivent être autorisés :

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw reload
```

### Côté Hostinger

- Dans le panneau Hostinger (VPS / Firewall), vérifier que les ports **80** et **443** sont ouverts (entrée TCP).

---

## 3. Vérifier que le site répond en HTTP **avant** de demander le SSL

1. Dans un navigateur, ouvrez : **http://elp.webglobal.me**
2. Vous devez voir soit le site E & L PROPRETE, soit une page NPM / erreur 502, mais **pas** « site inaccessible » ou « connexion refusée ».

Si **http://elp.webglobal.me** ne répond pas :
- Let's Encrypt ne pourra pas faire le défi HTTP.
- Vérifiez dans NPM que le **Proxy Host** pour **elp.webglobal.me** existe, avec **Forward Port** = **3080**, et qu’il est bien actif (pas désactivé).
- Vérifiez que le conteneur **el-proprete** tourne (Portainer) et écoute sur 3080.

---

## 4. Lire le log détaillé Certbot (dans le conteneur NPM)

Le message « Some challenges have failed » est résumé. La cause exacte est dans le log Certbot.

### Entrer dans le conteneur NPM

```bash
docker exec -it nginx-proxy-manager sh
```

(Si le conteneur a un autre nom, utilisez `docker ps | grep nginx` pour le trouver.)

### Lire le log Let's Encrypt

```bash
cat /data/logs/letsencrypt.log
```

ou les dernières lignes :

```bash
tail -100 /data/logs/letsencrypt.log
```

### Quitter le conteneur

```bash
exit
```

Dans le log, cherchez des lignes contenant **error**, **failed**, **timeout**, **connection refused**, **invalid** ou **unauthorized**. Souvent on y voit :
- **Connection refused** → port 80 fermé ou mauvais service derrière.
- **Timeout** → pare-feu ou DNS (Let's Encrypt ne peut pas joindre le serveur).
- **Invalid response** / **unauthorized** → problème de config NPM (webroot, proxy).

---

## 5. Rate limit Let's Encrypt

Après plusieurs échecs, Let's Encrypt peut appliquer une **limite temporaire** (souvent 1 h pour le même domaine).

- **À faire** : attendre **environ 1 heure** sans relancer de demande de certificat pour **elp.webglobal.me**.
- Ensuite, revérifier les points 1, 2 et 3, puis **une seule** nouvelle demande SSL dans NPM.

---

## 6. Ordre recommandé dans NPM

1. **Créer le Proxy Host** pour **elp.webglobal.me** (Details : Forward 3080, **sans** SSL pour l’instant).
2. **Tester** : http://elp.webglobal.me doit afficher le site.
3. **Ensuite** éditer le même Proxy Host → onglet **SSL** → Request a new Certificate (Let's Encrypt) → Save.

Si vous demandez le certificat **avant** que le Proxy Host réponde correctement en HTTP, le défi échoue souvent.

---

## 7. (Optionnel) Utiliser le défi DNS

Si vous avez un accès API à votre DNS (Cloudflare, OVH, etc.), vous pouvez utiliser le **DNS Challenge** dans NPM au lieu du HTTP :

- Onglet SSL → **Use DNS Challenge** : activé.
- Choisir le **DNS Provider** (ex. Cloudflare).
- Renseigner les identifiants/API demandés.

Let's Encrypt vérifiera alors via un enregistrement DNS au lieu d’appeler http://elp.webglobal.me. Utile si le port 80 reste bloqué ou si le HTTP-01 échoue malgré tout.

---

## Récapitulatif

| Étape | Vérification |
|--------|----------------|
| 1 | `nslookup elp.webglobal.me` → IP = IP du VPS |
| 2 | Ports 80 et 443 ouverts (UFW + Hostinger) |
| 3 | http://elp.webglobal.me répond (site ou 502, pas « connexion refusée ») |
| 4 | Lire `/data/logs/letsencrypt.log` dans le conteneur NPM pour l’erreur exacte |
| 5 | Attendre ~1 h en cas de rate limit, puis une seule nouvelle tentative SSL |
| 6 | Proxy Host créé et OK en HTTP **avant** de demander le certificat SSL |

En suivant ces points, vous identifierez la cause du « Some challenges have failed » et pourrez corriger la config (DNS, pare-feu ou NPM) avant de redemander le certificat.
