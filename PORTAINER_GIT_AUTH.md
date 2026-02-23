# Portainer : "Repository not found" / "authentication required"

L’erreur vient du fait que le dépôt GitHub est **privé** et que Portainer n’a pas les droits pour le cloner.

Vous avez **2 solutions** :

---

## Solution 1 : Rendre le dépôt public (le plus simple)

1. Allez sur : **https://github.com/hlafethi/el.global.me**
2. Onglet **Settings**
3. Tout en bas, section **Danger Zone**
4. **Change repository visibility** → **Change visibility**
5. Choisir **Public** → confirmer

Ensuite dans Portainer : **Stacks** → ouvrir votre stack → **Pull and redeploy** (sans rien changer à l’URL ni à l’auth). Le clone devrait passer.

---

## Solution 2 : Garder le dépôt privé et ajouter l’auth dans Portainer

### 2.1 Créer un token GitHub

1. GitHub → **Settings** (votre profil, pas le repo) → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. **Generate new token (classic)**
3. **Note** : ex. `Portainer el.global.me`
4. **Expiration** : 90 days ou No expiration
5. Cocher au minimum : **repo** (accès aux dépôts privés)
6. **Generate token** → **copier le token** (il ne s’affichera plus qu’une fois)

### 2.2 Configurer l’auth dans Portainer

1. **Stacks** → **Add stack** (ou éditer la stack existante)
2. **Build method** : **Git repository**
3. **Repository URL** : `https://github.com/hlafethi/el.global.me.git`
4. **Repository reference** : `main`
5. **Compose path** : `docker-compose.yml`
6. Déplier **Authentication** (ou **Advanced options** selon la version)
7. Renseigner :
   - **Username** : votre identifiant GitHub (ex. `hlafethi`)
   - **Password** : **coller le token** (pas votre mot de passe GitHub)
8. **Deploy the stack** (ou **Update the stack**)

Portainer pourra alors cloner le dépôt privé.

---

## Résumé

| Option | Avantage | Inconvénient |
|--------|----------|--------------|
| **1. Dépôt public** | Aucune config d’auth dans Portainer | Code visible par tous sur GitHub |
| **2. Token GitHub** | Dépôt reste privé | Gérer le token (expiration, révocation) |

Pour un site vitrine, la **solution 1** (dépôt public) est en général suffisante.
