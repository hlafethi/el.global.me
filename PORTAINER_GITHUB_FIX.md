
# Portainer : "Invalid username or token" – À faire

## 1. Vérifier le **nom d’utilisateur** GitHub

GitHub est **sensible à la casse**. Utilisez **exactement** le même login que sur GitHub, en **minuscules** si c’est le cas.

- **À utiliser dans Portainer** : `hlafethi` (tout en minuscules)
- **À ne pas utiliser** : `HLAFETHI` ou `Hlafethi`

Pour vérifier : allez sur https://github.com/hlafethi – l’URL vous donne le bon username.

---

## 2. Utiliser un **nouveau token** GitHub

Si l’ancien token a été révoqué ou partagé, il ne fonctionne plus. Créez-en un **nouveau** :

1. **https://github.com/settings/tokens**
2. **Generate new token** → **Generate new token (classic)**
3. **Note** : `Portainer el.global.me`
4. **Expiration** : 90 days (ou No expiration)
5. **Scopes** : cocher **uniquement** :
   - **repo** (tout le bloc : repo:status, repo_deployment, public_repo, repo:invite, security_events)
6. **Generate token**
7. **Copier le token** (il ne s’affichera plus qu’une fois).
8. Dans Portainer, coller ce token dans le champ **Password** (sans espace avant/après).

---

## 3. Renseigner Portainer

Dans la stack (Add stack ou Edit) :

| Champ | Valeur |
|--------|--------|
| **Repository URL** | `https://github.com/hlafethi/el.global.me.git` |
| **Username** | `hlafethi` (minuscules) |
| **Password** | Le **nouveau** token (coller, pas d’espace) |

- Ne pas mettre votre mot de passe GitHub dans **Password**, uniquement le token.
- Vérifier qu’il n’y a pas d’espace en trop au début ou à la fin du token.

---

## 4. Si ça bloque encore : dépôt **public**

Sans auth, plus d’erreur de clone :

1. **https://github.com/hlafethi/el.global.me** → **Settings**
2. **Danger Zone** → **Change repository visibility** → **Public**
3. Dans Portainer : supprimer **Username** et **Password** (laisser vides), puis **Deploy** / **Pull and redeploy**.

---

## Résumé

1. **Username** : `hlafethi` (minuscules).
2. **Password** : **nouveau** token avec scope **repo**, collé sans espace.
3. Si besoin : passer le dépôt en **public** et ne plus remplir l’auth dans Portainer.
