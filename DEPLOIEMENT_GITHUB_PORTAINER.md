# Déploiement : GitHub + Portainer (méthode simple)

**Dépôt GitHub :** https://github.com/hlafethi/el.global.me.git  
**Sous-domaine :** elp.webglobal.me

---

## Partie 1 : Envoyer le projet sur GitHub (sur votre PC)

À faire **une seule fois**, depuis le dossier du projet sur votre PC.

### 1.1 Ouvrir un terminal dans le dossier du projet

Exemple : `d:\Dev\app\EL PROPRETE`

### 1.2 Initialiser Git et pousser vers GitHub

```bash
git init
git add .
git commit -m "Site E & L PROPRETE - initial"
git branch -M main
git remote add origin https://github.com/hlafethi/el.global.me.git
git push -u origin main
```

- Si le dépôt **existe déjà** et contient des fichiers (ex. README), faites d’abord :
  ```bash
  git pull origin main --allow-unrelated-histories
  ```
  puis :
  ```bash
  git push -u origin main
  ```
- Si GitHub demande un **token** au lieu du mot de passe :  
  Paramètres GitHub → Developer settings → Personal access tokens → créer un token avec droit `repo` → l’utiliser comme mot de passe.

Une fois le `git push` terminé, le code est sur :  
https://github.com/hlafethi/el.global.me

---

## Partie 2 : Déployer depuis Portainer (sur le VPS)

### 2.1 Ouvrir Portainer

- URL : `http://VOTRE_IP_VPS:9443` (ou le port de Portainer).
- Se connecter.

### 2.2 Créer une Stack à partir de Git

1. Menu **Stacks** → **Add stack**.

2. **Name** : `el-proprete` (ou autre nom).

3. **Build method** : **Git repository**.

4. **Repository URL** :
   ```
   https://github.com/hlafethi/el.global.me.git
   ```

5. **Repository reference** : `main` (ou `master` si votre branche s’appelle comme ça).

6. **Compose path** : `docker-compose.yml`  
   (Portainer va utiliser ce fichier pour builder et lancer le conteneur.)

7. Optionnel : cocher **Pull and redeploy** si vous voulez pouvoir redéployer depuis l’interface plus tard.

8. Cliquer sur **Deploy the stack**.  
   Si vous voyez **« pull access denied for el-proprete »** : la stack a été créée sans Git (ex. Web editor). Il faut la supprimer et la recréer avec **Build method: Git repository**. Voir **PORTAINER_PULL_ACCESS_DENIED.md**.

Portainer va :
- cloner le dépôt ;
- construire l’image avec le `Dockerfile` ;
- lancer le conteneur (port **3080** sur l’hôte → 80 dans le conteneur).

### 2.3 Vérifier que le site répond

- Dans le navigateur : `http://VOTRE_IP_VPS:3080`  
Vous devez voir le site E & L PROPRETE.

---

## Partie 3 : Nginx Proxy Manager (HTTPS pour elp.webglobal.me)

### 3.1 DNS

Chez l’hébergeur du domaine **webglobal.me** :

- Enregistrement **A** : nom `elp` → **IP du VPS** (TTL 300 ou 3600).

### 3.2 Nginx Proxy Manager

1. Ouvrir NPM : `http://VOTRE_IP_VPS:81`.

2. **Hosts** → **Proxy Hosts** → **Add Proxy Host**.

3. **Details** :
   - **Domain Names** : `elp.webglobal.me`
   - **Scheme** : `http`
   - **Forward Hostname / IP** : `172.17.0.1` ou **IP publique du VPS** (si NPM tourne dans Docker).
   - **Forward Port** : `3080`

4. **SSL** : cocher **SSL** → **Request a new SSL Certificate** → **Force SSL** si proposé → **Save**.

5. Tester : **https://elp.webglobal.me**

---

## Mises à jour du site plus tard

### Sur votre PC

Après avoir modifié le code :

```bash
git add .
git commit -m "Description des changements"
git push origin main
```

### Dans Portainer

1. **Stacks** → ouvrir la stack **el-proprete**.
2. Cliquer sur **Pull and redeploy** (ou **Update the stack** si l’option est proposée).

Portainer re-clone le dépôt, rebuild l’image et redémarre le conteneur. Le site **elp.webglobal.me** affiche alors la nouvelle version.

---

## Récapitulatif

| Étape | Où | Action |
|-------|-----|--------|
| 1 | PC | `git init` → `git add .` → `git commit` → `git remote add origin` → `git push -u origin main` |
| 2 | Portainer | Stacks → Add stack → Git → URL repo → Compose path `docker-compose.yml` → Deploy |
| 3 | DNS | Enregistrement A : `elp` → IP du VPS |
| 4 | NPM | Proxy Host : `elp.webglobal.me` → `172.17.0.1:3080` (ou IP VPS:3080) + SSL. **Guide détaillé :** `CONFIG_NPM_COMPLETE.md` |

Résultat : site en **https://elp.webglobal.me** déployé depuis GitHub via Portainer.
