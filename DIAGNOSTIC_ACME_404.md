# Diagnostic : 404 sur /.well-known/acme-challenge (VPS)

Si Let's Encrypt renvoie toujours une 404 pour `http://elp.webglobal.me/.well-known/acme-challenge/TOKEN`, exécutez ces commandes **sur le VPS** pour vérifier que NPM sert bien ce chemin.

## 1. Créer un fichier de test

```bash
docker exec nginx-proxy-manager mkdir -p /data/letsencrypt-acme-challenge/.well-known/acme-challenge
docker exec nginx-proxy-manager sh -c 'echo "acme-test-ok" > /data/letsencrypt-acme-challenge/.well-known/acme-challenge/test-verif'
```

## 2. Tester depuis le VPS

```bash
curl -H "Host: elp.webglobal.me" http://127.0.0.1:80/.well-known/acme-challenge/test-verif
```

- **Si la réponse affiche `acme-test-ok`** : le bloc Advanced est bien appliqué. Le problème peut venir d’un cache, d’un pare-feu, ou du fait que Let's Encrypt tape sur une autre IP. Réessayez la demande de certificat.
- **Si vous avez une 404 ou une autre page** : NPM ne sert pas ce chemin pour `elp.webglobal.me`. Il faut :
  1. Éditer le **Proxy Host elp.webglobal.me** (et pas un autre host).
  2. Onglet **Advanced** → coller le bloc :
     ```nginx
     location ^~ /.well-known/acme-challenge/ {
         default_type "text/plain";
         root /data/letsencrypt-acme-challenge;
     }
     ```
  3. **Custom Locations** : supprimer toute location `/.well-known/acme-challenge/` (sinon le proxy prend le dessus).
  4. **Save**, puis redemander le certificat (onglet SSL).

Si NPM écoute sur un autre port que 80 en local (ex. 8181), remplacez `127.0.0.1:80` par le bon port dans la commande `curl`.

## 3. Vérifier la config Nginx générée

```bash
docker exec nginx-proxy-manager cat /data/nginx/proxy_host/*.conf 2>/dev/null | grep -B1 -A6 "well-known"
```

Vous devez voir un bloc contenant `root /data/letsencrypt-acme-challenge` pour le serveur qui gère `elp.webglobal.me`. S’il n’apparaît pas, le bloc Advanced n’a pas été enregistré pour ce host.

## 4. Nettoyer le fichier de test

```bash
docker exec nginx-proxy-manager rm -f /data/letsencrypt-acme-challenge/.well-known/acme-challenge/test-verif
```

---

## 5. 127.0.0.1 OK mais IP publique → 404 (OpenResty)

Si `curl` vers **127.0.0.1:80** renvoie `acme-test-ok` mais `curl` vers **VOTRE_IP_PUBLIQUE:80** renvoie une 404 avec **&lt;center&gt;openresty&lt;/center&gt;** (ou nginx), alors **ce n’est pas NPM** qui répond sur le port 80 public. Un autre service (OpenResty, Nginx sur l’hôte, ou un autre conteneur) écoute sur le port 80 et envoie le trafic vers les backends sans gérer `/.well-known/acme-challenge/`.

### Vérifier qui écoute sur le port 80

```bash
ss -tlnp | grep :80
```

ou

```bash
netstat -tlnp | grep :80
```

- Si vous voyez **docker-proxy** (ou le PID du conteneur NPM) sur **0.0.0.0:80** : NPM reçoit bien tout le trafic. Alors le problème est ailleurs (pare-feu, autre).
- Si vous voyez **nginx**, **openresty** ou un autre processus sur **0.0.0.0:80** : ce service reçoit le trafic avant NPM. Let's Encrypt appelle l’IP publique → ce service répond → 404 pour le défi ACME.

### Que faire

**Option A – Faire écouter NPM sur le port 80 (recommandé)**  
Arrêter ou désactiver le service (OpenResty / Nginx) qui écoute sur le port 80 de l’hôte, et s’assurer que **NPM** publie bien les ports 80 et 443 (conteneur NPM : mapping 80:80, 443:443 vers l’hôte). Ainsi, tout le trafic HTTP/HTTPS vers le VPS passera par NPM.

**Option B – Garder OpenResty devant NPM**  
Si vous devez garder ce reverse proxy en frontal, il faut qu’il transmette les requêtes pour **elp.webglobal.me** (y compris `/.well-known/acme-challenge/`) à **NPM**, et non directement au site. Ou ajouter dans la config OpenResty un bloc qui sert le dossier de défi ACME (équivalent du bloc Advanced de NPM).
