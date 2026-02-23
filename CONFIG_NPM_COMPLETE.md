# Configuration complète Nginx Proxy Manager (NPM) – elp.webglobal.me

Guide pas à pas pour configurer NPM pour le site **E & L PROPRETE** sur **https://elp.webglobal.me**.

---

## Prérequis

- Le conteneur **el-proprete** tourne dans Portainer (port **3080**).
- Le DNS **elp.webglobal.me** pointe vers l’**IP publique de votre VPS** (enregistrement A).
- NPM est accessible (souvent `http://VOTRE_IP_VPS:81`).

---

## 1. Connexion à Nginx Proxy Manager

1. Ouvrez : **http://VOTRE_IP_VPS:81**
2. Connectez-vous avec votre compte admin NPM.
3. Si premier accès : identifiants par défaut `admin@example.com` / `changeme` → à changer immédiatement.

---

## 2. Créer le Proxy Host (site principal)

### 2.1 Ouvrir l’assistant

- Menu **Hosts** → **Proxy Hosts**
- Bouton **Add Proxy Host**

### 2.2 Onglet « Details »

Renseigner **exactement** :

| Champ | Valeur |
|--------|--------|
| **Domain Names** | `elp.webglobal.me` |
| **Scheme** | `http` |
| **Forward Hostname / IP** | `172.17.0.1` |
| **Forward Port** | `3080` |
| **Cache Assets** | Optionnel : coché si vous voulez mettre en cache les images/CSS/JS |
| **Block Common Exploits** | Recommandé : coché |
| **Websockets Support** | Laisser décoché (site statique) |

**À propos de Forward Hostname / IP :**

- NPM et el-proprete sont sur le **même VPS**.
- Sur Linux, les conteneurs atteignent l’hôte via l’IP du bridge Docker : **`172.17.0.1`**.
- Si **172.17.0.1** ne fonctionne pas (erreur 502), testez avec l’**IP publique du VPS** (celle du DNS).

Cliquez sur **Save**.

---

## 2.3 (Important) Autoriser le défi Let's Encrypt – éviter la 404

Quand vous demandez un certificat SSL, Let's Encrypt appelle **http://elp.webglobal.me/.well-known/acme-challenge/xxx**. Si NPM envoie tout vers le site (port 3080), ce chemin n’existe pas côté site → **404** et échec du certificat. Il faut que NPM réponde lui-même pour `/.well-known/acme-challenge/`.

### Nouvelle version NPM : onglet **Custom Locations**

Il faut **tout remplir** dans une Custom Location :

1. **Hosts** → **Proxy Hosts** → éditer **elp.webglobal.me**.
2. Onglet **Custom Locations** → **Add Location** (ou modifier la location existante).
3. Renseigner :
   - **Location** : `/.well-known/acme-challenge/`
   - **Scheme** : `http`
   - **Forward Hostname / IP** : `127.0.0.1`
   - **Forward Port** : `80`
4. Dans le **bloc Nginx** (Configuration avancée de cette location), coller :

```nginx
location ^~ /.well-known/acme-challenge/ {
    default_type "text/plain";
    root /data/letsencrypt-acme-challenge;
}
```

5. **Save** (puis **Save** en bas de la fenêtre du Proxy Host).

Si vous avez une erreur « Internal Error », essayer dans le bloc Nginx **uniquement** :
```nginx
default_type "text/plain";
root /data/letsencrypt-acme-challenge;
```

Détail et dépannage : **`NPM_CUSTOM_LOCATION_ACME.md`**.

### Ancienne version NPM : onglet **Advanced**

Si votre Proxy Host a un onglet **Advanced** (au même niveau que Details / SSL), coller le bloc complet ci‑dessus dans **Custom Nginx Configuration**, puis **Save**.

---

## 3. Activer le SSL (HTTPS)

### 3.1 Éditer le Proxy Host

- **Hosts** → **Proxy Hosts** → clic sur **elp.webglobal.me** (ou l’icône crayon).

### 3.2 Onglet « SSL »

1. Cocher **SSL Certificate**.
2. Choisir **Request a new SSL Certificate (Let's Encrypt)**.
3. Renseigner :
   - **Domain names** : doit contenir `elp.webglobal.me` (souvent pré-rempli).
   - **Email Address for Let's Encrypt** : votre email (ex. `contact@webglobal.me`).
   - **I Agree to the Let's Encrypt Terms of Service** : coché.
4. Options recommandées :
   - **Force SSL** : coché (redirige HTTP → HTTPS).
   - **HTTP/2 Support** : coché.
   - **HSTS Enabled** : coché (sécurité renforcée).
5. **Save**.

Attendre quelques secondes : NPM demande le certificat à Let’s Encrypt. Si le DNS pointe bien vers le VPS, le certificat est créé et le site passe en **https://elp.webglobal.me**.

---

## 4. (Optionnel) Redirection www → non-www

Si vous voulez que **www.elp.webglobal.me** redirige vers **elp.webglobal.me** :

### 4.1 Créer un « Redirect Host »

- **Hosts** → **Redirect Hosts** → **Add Redirect Host**

| Champ | Valeur |
|--------|--------|
| **Domain Names** | `www.elp.webglobal.me` |
| **Scheme** | `https` (ou laisser par défaut) |
| **Forward Hostname / IP** | `elp.webglobal.me` |
| **Forward Port** | `443` |
| **Forward Scheme** | `https` |
| **Preserve Path** | coché |
| **Preserve Query String** | coché |

- **Save**.

### 4.2 DNS

Ajouter un enregistrement **A** ou **CNAME** pour **www** :

- **A** : `www` → IP du VPS  
ou  
- **CNAME** : `www` → `elp.webglobal.me`

---

## 5. (Optionnel) Bloc « Custom locations » ou « Advanced »

Pour ce site statique Next.js, la config par défaut suffit. Si plus tard vous ajoutez une API ou un sous-chemin :

- **Custom locations** : pour une règle sur un chemin (ex. `/api`).
- **Advanced** : pour coller du Nginx custom (gzip, headers, etc.).

Exemple **Advanced** (optionnel, pour cache et sécurité) :

```nginx
# Cache des assets statiques
location /_next/static/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
}
location ~* \.(ico|css|js|gif|jpeg|jpg|png|svg|woff|woff2)$ {
    add_header Cache-Control "public, max-age=86400";
}
# Sécurité
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
```

- **Hosts** → **elp.webglobal.me** → onglet **Advanced** → coller → **Save**.

---

## 6. Vérifications

| Test | Attendu |
|------|--------|
| **http://elp.webglobal.me** | Redirection vers **https://elp.webglobal.me** |
| **https://elp.webglobal.me** | Site E & L PROPRETE, cadenas vert |
| **https://elp.webglobal.me/professionnels** | Page Professionnels |
| **https://elp.webglobal.me/particuliers** | Page Particuliers |
| **https://elp.webglobal.me/cheques-cesu** | Page Chèques CESU |

---

## 7. Récapitulatif des valeurs NPM

**Proxy Host – Details**

- Domain Names : `elp.webglobal.me`
- Scheme : `http`
- Forward Hostname / IP : `172.17.0.1` (ou IP publique du VPS si 502)
- Forward Port : `3080`

**Proxy Host – SSL**

- Request a new SSL Certificate (Let's Encrypt)
- Email : votre email
- Force SSL : oui
- HTTP/2 Support : oui
- HSTS Enabled : oui

**Si 502 Bad Gateway**

- Vérifier que le conteneur **el-proprete** est bien **running** dans Portainer.
- Vérifier que le port publié est bien **3080** (Stacks → el-proprete → voir le port mappé).
- Tester **http://VOTRE_IP_VPS:3080** dans le navigateur (doit afficher le site).
- Changer **Forward Hostname / IP** en **IP publique du VPS** et **Forward Port** **3080**, puis **Save**.

---

## 8. Schéma

```
Internet (https://elp.webglobal.me)
    ↓
NPM (port 443/80) → Let's Encrypt SSL
    ↓
Forward 172.17.0.1:3080 (ou IP_VPS:3080)
    ↓
Conteneur el-proprete (port 80)
    ↓
Site E & L PROPRETE (fichiers statiques)
```

Une fois ces étapes faites, NPM est paramétré de façon complète pour **elp.webglobal.me** en HTTPS avec Let’s Encrypt.
