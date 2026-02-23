# Déploiement sur VPS Hostinger – Docker, Portainer, Nginx Proxy Manager

**Sous-domaine de test :** `el.webglobal.me`

---

## Vue d’ensemble

1. Transférer le projet sur le VPS (ou le construire en local et envoyer l’image Docker).
2. Construire l’image Docker du site (Next.js export statique + Nginx).
3. Lancer le conteneur avec Portainer.
4. Configurer Nginx Proxy Manager pour exposer `el.webglobal.me` vers ce conteneur.

---

## Étape 1 : Transférer le projet sur le VPS

### Option A : Depuis votre PC (recommandé si vous n’avez pas Git sur le VPS)

1. **Sur votre PC**, créez une archive du projet (sans `node_modules` ni `.next`) :
   - Exclure : `node_modules`, `.next`, `out`, `.git`
   - Ou, à la racine du projet :
     ```bash
     # PowerShell (Windows)
     Compress-Archive -Path * -DestinationPath el-proprete.zip -Force
     ```
   - Vous pouvez aussi zipper à la main en excluant `node_modules`, `.next`, `out`.

2. **Envoi vers le VPS** (SFTP/SCP ou outil type FileZilla, WinSCP) :
   - Hôte : IP de votre VPS Hostinger
   - Utilisateur : `root` ou l’utilisateur fourni par Hostinger
   - Envoyer `el-proprete.zip` dans un dossier, par ex. `/root/` ou `/home/el-proprete/`

3. **Sur le VPS** (SSH) :
   ```bash
   cd /root   # ou le dossier où vous avez mis le ZIP
   unzip el-proprete.zip -d el-proprete
   cd el-proprete
   ```

### Option B : Avec Git sur le VPS

Si le projet est sur GitHub/GitLab :

```bash
cd /root
git clone https://github.com/VOTRE_USER/VOTRE_REPO.git el-proprete
cd el-proprete
```

---

## Étape 2 : Vérifier les fichiers nécessaires sur le VPS

Dans le dossier du projet (`el-proprete`), vous devez avoir au minimum :

- `Dockerfile`
- `nginx.conf`
- `package.json`
- `next.config.js`
- Dossier `src/`
- Dossier `public/`

Vérification rapide :

```bash
ls -la Dockerfile nginx.conf package.json
ls -la src/ public/
```

---

## Étape 3 : Construire l’image Docker

Toujours dans le dossier du projet sur le VPS :

```bash
cd /root/el-proprete   # adapter si votre chemin est différent

docker build -t el-proprete:latest .
```

- Premier build : quelques minutes (téléchargement Node, npm install, build Next.js).
- En cas d’erreur, lire le message (souvent problème de chemin ou fichier manquant).

Vérifier que l’image existe :

```bash
docker images | grep el-proprete
```

Vous devez voir une ligne du type : `el-proprete   latest   ...`

---

## Étape 4 : Lancer le conteneur avec Portainer

### Option A : Via Portainer (interface graphique)

#### 4.1 Ouvrir Portainer

- URL : `http://VOTRE_IP_VPS:9443` ou le port que vous avez configuré pour Portainer.
- Connexion avec votre compte Portainer.

#### 4.2 Créer le conteneur

1. **Containers** → **Add container**.

2. **Name** : `el-proprete` (ou un autre nom clair).

3. **Image** : `el-proprete:latest` (c’est l’image construite à l’étape 3).

4. **Port mapping** :
   - **Published port** : par ex. `3000` (ou `8080` si 3000 est déjà pris).
   - **Container port** : `80` (Nginx écoute sur 80 dans le conteneur).

   En résumé : port **3000** (ou 8080) sur l’hôte → port **80** dans le conteneur.

5. **Restart policy** : `Always` (recommandé).

6. Cliquez sur **Deploy the container**.

#### 4.3 Vérifier que le site répond

- Dans un navigateur : `http://VOTRE_IP_VPS:3000` (ou le port que vous avez publié).
- Vous devez voir le site E & L PROPRETE.

Si ça ne s’affiche pas : dans Portainer, ouvrir le conteneur → **Logs** pour voir les erreurs Nginx éventuelles.

---

### Option B : Via Docker Compose (ligne de commande)

Si vous préférez la ligne de commande sur le VPS :

```bash
cd /root/el-proprete
docker compose up -d
```

Cela crée et démarre le conteneur `el-proprete` sur le port **3000**. Le fichier `docker-compose.yml` est déjà dans le projet.

Pour arrêter : `docker compose down`  
Pour reconstruire après une mise à jour : `docker compose up -d --build`

---

## Étape 5 : Configurer Nginx Proxy Manager (NPM) pour el.webglobal.me

Objectif : faire pointer le sous-domaine **el.webglobal.me** vers le conteneur (port 3000 ou 8080 sur le VPS).

### 5.1 DNS du sous-domaine

Chez votre hébergeur de domaine (là où est géré webglobal.me) :

- Créer un enregistrement **A** :
  - **Nom / sous-domaine** : `el` (pour el.webglobal.me).
  - **Valeur / cible** : **IP publique de votre VPS Hostinger**.
  - TTL : 300 ou 3600.

Attendre quelques minutes (jusqu’à propagation DNS).

### 5.2 Connexion à Nginx Proxy Manager

- URL : `http://VOTRE_IP_VPS:81` (port par défaut de NPM).
- Identifiants : ceux que vous avez définis à l’installation de NPM.

### 5.3 Créer un Proxy Host

1. **Hosts** → **Proxy Hosts** → **Add Proxy Host**.

2. **Details** :
   - **Domain Names** : `el.webglobal.me`
   - **Scheme** : `http`
   - **Forward Hostname / IP** :
     - Si NPM est installé **directement sur le VPS** (sans Docker) : `127.0.0.1`
     - Si NPM tourne **dans Docker** (comme Portainer) : utilisez l’IP de l’hôte vue depuis Docker, par ex. `172.17.0.1` (gateway Docker sur Linux) ou l’**IP publique du VPS**. En cas de doute, tester avec l’IP publique du VPS.
   - **Forward Port** : `3000` (ou le port publié du conteneur à l’étape 4).

3. **SSL** (recommandé) :
   - Cocher **SSL**.
   - **SSL Certificate** : **Request a new SSL Certificate**.
   - Cocher **Force SSL** et **HTTP/2** si proposé.
   - Valider (Let’s Encrypt sera utilisé si le domaine pointe bien vers le VPS).

4. Enregistrer (**Save**).

### 5.4 Test

Dans un navigateur : **https://el.webglobal.me**

- Vous devez voir le site E & L PROPRETE en HTTPS.

Si erreur 502 Bad Gateway : le conteneur n’est pas joignable sur le port indiqué. Vérifier dans Portainer que le conteneur tourne et que le port mappé (ex. 3000) est bien celui renseigné dans NPM.

---

## Récapitulatif des étapes

| Étape | Action | Où |
|-------|--------|-----|
| 1 | Transférer le projet (ZIP ou Git) | VPS |
| 2 | Vérifier Dockerfile, nginx.conf, src/, public/ | VPS, dossier projet |
| 3 | `docker build -t el-proprete:latest .` | VPS, dossier projet |
| 4 | Créer conteneur dans Portainer (image el-proprete:latest, port 3000→80) | Portainer |
| 5 | DNS : el.webglobal.me → IP du VPS | Hébergeur DNS |
| 6 | NPM : Proxy Host el.webglobal.me → 127.0.0.1:3000 + SSL | Nginx Proxy Manager |

---

## Mise à jour du site plus tard

1. Modifier le code (en local ou sur le VPS).
2. Reconstruire l’image et recréer le conteneur :

```bash
cd /root/el-proprete
docker build -t el-proprete:latest .
```

Dans Portainer :

- Arrêter et supprimer l’ancien conteneur `el-proprete`.
- Recréer un conteneur comme à l’étape 4 (même image `el-proprete:latest`, même mapping de port).

Le domaine **el.webglobal.me** continuera de pointer vers le nouveau conteneur.

---

## Dépannage rapide

- **502 Bad Gateway** : conteneur arrêté ou mauvais port dans NPM → vérifier Portainer et Forward Port.
- **Page blanche / 404** : vérifier les logs du conteneur (Portainer → Logs) et que le build Next.js a bien généré le dossier `out/` dans l’image.
- **SSL ne se crée pas** : vérifier que el.webglobal.me pointe bien vers l’IP du VPS (ping, ou outil type https://dnschecker.org).
- **Connexion refusée sur le port** : pare-feu (ufw/iptables) ou sécurité Hostinger : ouvrir les ports 80, 443 et celui de Portainer (ex. 9443).

Une fois ces étapes suivies, votre site est servi en HTTPS sur **el.webglobal.me** depuis votre VPS Hostinger avec Docker, Portainer et Nginx Proxy Manager.
