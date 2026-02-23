# 🚀 Déploiement : GitHub + Vercel ou hébergement mutualisé ?

## Réponse courte

**Vous avez 2 options valides :**

| Option | Quand l'utiliser | Difficulté |
|--------|------------------|------------|
| **Hébergement mutualisé** | Vous avez déjà un hébergeur (OVH, o2switch, etc.) et voulez tout gérer au même endroit | ⭐⭐ Moyenne |
| **GitHub + Vercel** | Vous voulez gratuit, rapide, HTTPS auto, mises à jour faciles | ⭐ Très simple |

**Pour un site vitrine comme le vôtre : les deux fonctionnent.**  
Le site a été configuré pour pouvoir être exporté en **fichiers statiques** (HTML, CSS, JS) et déployé sur **n'importe quel hébergement mutualisé**.

---

## Option 1 : Hébergement mutualisé (sans GitHub)

### ✅ C'est possible

Votre site Next.js peut être **exporté en fichiers statiques** et déposé sur un hébergement mutualisé classique (OVH, o2switch, o2switch, LWS, etc.).

### Comment ça marche

1. **En local**, vous lancez une commande qui génère un dossier `out/` contenant des fichiers HTML, CSS et JS.
2. Vous **uploadez** ce dossier `out/` sur votre hébergement (FTP ou gestionnaire de fichiers).
3. Le site fonctionne comme un site classique, sans besoin de Node.js sur le serveur.

### Avantages

- Pas besoin de GitHub ni de compte Vercel/Netlify.
- Vous utilisez l’hébergement que vous avez déjà.
- Tout (site + email, etc.) au même endroit.
- Pas de limite de bande passante liée à un service gratuit.

### Inconvénients

- Mise à jour = refaire un export puis re-upload des fichiers (FTP ou file manager).
- HTTPS et redirections à configurer vous-même (souvent proposé par l’hébergeur).
- Pas de déploiement automatique à chaque modification.

### Étapes pour hébergement mutualisé

1. **Générer le site statique** (sur votre PC) :
   ```bash
   npm run build
   ```
   Un dossier **`out/`** est créé à la racine du projet.

2. **Uploader** tout le contenu du dossier **`out/`** à la **racine du site web** (souvent `www/`, `public_html/` ou `htdocs/`) :
   - Soit par **FTP** (FileZilla, WinSCP, etc.)
   - Soit via le **gestionnaire de fichiers** de votre hébergeur.

3. **Configurer le nom de domaine** dans le panneau de l’hébergeur (et activer HTTPS si proposé).

4. **Important** :  
   - Fichier d’entrée = **`index.html`** (il est dans `out/`).  
   - Vérifier que l’hébergeur sert bien `index.html` pour la racine du site.

### À savoir

- Pas besoin de Node.js, PHP ou base de données sur l’hébergement.
- Le formulaire de contact ne pourra pas envoyer d’emails **directement** depuis le site : il faudra soit une API (sur un autre hébergement), soit un service type Formspree/EmailJS côté navigateur (déjà prévu dans le projet).

---

## Option 2 : GitHub + Vercel (recommandé pour la simplicité)

### Pourquoi c’est souvent choisi pour un site vitrine

- **Gratuit** pour un site perso/pro.
- **HTTPS** automatique.
- **Déploiement automatique** à chaque push sur GitHub.
- **CDN** : site rapide partout.
- Pas de FTP : vous modifiez le code, vous poussez sur GitHub, le site se met à jour tout seul.

### Comment ça marche

1. Vous mettez le projet sur **GitHub** (création d’un dépôt + push du code).
2. Vous connectez ce dépôt à **Vercel** (ou Netlify).
3. À chaque modification poussée sur GitHub, Vercel rebuild et redéploie le site.

### Étapes rapides

1. **Créer un dépôt sur GitHub** (github.com → New repository).
2. **Sur votre PC**, dans le dossier du projet :
   ```bash
   git init
   git add .
   git commit -m "Premier commit - site E&L PROPRETE"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
   git push -u origin main
   ```
3. **Sur Vercel** (vercel.com) : "Import Project" → choisir le dépôt GitHub → déployer.
4. **Lier votre nom de domaine** dans les paramètres du projet Vercel (DNS chez votre registrar).

### Avantages

- Gratuit, rapide à mettre en place.
- Mises à jour = push Git, pas de FTP.
- SSL/HTTPS et CDN inclus.

### Inconvénients

- Il faut un compte GitHub et un compte Vercel.
- Pour un nom de domaine perso, vous le configurez dans Vercel (souvent simple).

---

## Comparatif rapide

| Critère | Hébergement mutualisé | GitHub + Vercel |
|---------|------------------------|-----------------|
| Coût | Inclus si vous avez déjà l’hébergement | Gratuit (Vercel free tier) |
| Mise en ligne | Export + upload FTP/fichiers | Push Git → déploiement auto |
| HTTPS | À activer chez l’hébergeur | Automatique |
| Mises à jour | Refaire export + upload | Push sur GitHub |
| Technique | Fichiers statiques uniquement | Next.js géré par Vercel |

---

## Recommandation pour votre site E & L PROPRETE

- **Si vous avez déjà un hébergement mutualisé** et que vous préférez tout garder au même endroit → **Option 1 (hébergement mutualisé)** : on a préparé le projet pour un export statique, vous n’avez pas besoin de GitHub pour ça.
- **Si vous voulez le plus simple et le plus moderne** (gratuit, HTTPS, mises à jour sans FTP) → **Option 2 (GitHub + Vercel)**.

**Vous n’êtes pas obligé de mettre le site sur GitHub** pour le mettre en ligne sur un hébergement mutualisé : il suffit de faire `npm run build`, puis d’uploader le contenu du dossier **`out/`** sur votre hébergement.

Si vous me dites quelle option vous choisissez (mutualisé ou Vercel), je peux vous détailler les étapes exactes (y compris la config `output: 'export'` si ce n’est pas déjà fait).
