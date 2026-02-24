# Portainer : "pull access denied for el-proprete"

## Erreur

```
Failed to pull images of the stack: compose pull operation failed:
Error response from daemon: pull access denied for el-proprete,
repository does not exist or may require 'docker login'
```

## Cause

L’image **el-proprete** n’est **pas** sur Docker Hub. Elle est **construite localement** à partir du `Dockerfile` du dépôt Git. Si Portainer tente de **pull** (télécharger) au lieu de **build** (construire), cette erreur apparaît.

Cela arrive en général quand la stack a été créée avec **Web editor** (coller le `docker-compose.yml` à la main) au lieu de **Git repository**. Sans dépôt Git, Portainer n’a pas le code pour construire l’image et fait un `docker compose pull` → échec.

## Solution

### 1. Recréer la stack avec Git (recommandé)

1. Dans Portainer : **Stacks** → ouvrir la stack **el-proprete** (ou le nom utilisé).
2. Noter la configuration actuelle (nom, variables, etc.) si besoin.
3. **Remove the stack** (supprimer la stack). Les conteneurs et l’ancienne config sont retirés.
4. **Add stack** à nouveau, en suivant **strictement** :
   - **Build method** : **Git repository** (pas Web editor).
   - **Repository URL** : `https://github.com/hlafethi/el.global.me.git`
   - **Repository reference** : `main`
   - **Compose path** : `docker-compose.yml`
   - Si le dépôt est privé : **Username** = `hlafethi`, **Password** = token GitHub (voir `PORTAINER_GITHUB_FIX.md`).
   - Si le dépôt est public : laisser Username/Password vides.
5. **Deploy the stack**.

Portainer va **cloner** le dépôt, **construire** l’image avec le Dockerfile, puis lancer le conteneur. Plus de pull sur Docker Hub.

### 2. Mises à jour plus tard (Pull and redeploy)

Quand vous cliquez sur **Pull and redeploy** pour une stack créée depuis Git, Portainer doit :

- faire un **git pull** du dépôt ;
- **reconstruire** l’image (build) ;
- redémarrer le conteneur.

Si votre version de Portainer fait uniquement un « pull d’images » et pas de build, vous obtiendrez à nouveau « pull access denied ». Dans ce cas :

- Utilisez **Editor** → **Pull and redeploy** (cela déclenche en général un nouveau clone + build), ou
- Supprimez la stack et redéployez comme à l’étape 1 en pointant sur la même URL Git.

### 3. Vérification rapide

Après déploiement réussi :

- **Stacks** → **el-proprete** → les conteneurs sont « running ».
- Dans **Images** : une image **el-proprete:latest** (ou **el-proprete_web**) doit apparaître, créée localement (pas « pulled »).
- Test : `http://VOTRE_IP_VPS:3080` ou **https://elp.webglobal.me** (si NPM est configuré).

## Résumé

| Problème | Action |
|----------|--------|
| « pull access denied for el-proprete » | Créer la stack avec **Build method: Git repository** + URL du dépôt, pas Web editor. |
| Mise à jour du site | Push sur GitHub, puis dans Portainer : **Pull and redeploy** (clone + build). |

L’image **el-proprete** est toujours **build** depuis le repo, jamais **pull** depuis un registre.
