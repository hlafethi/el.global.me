# 🚀 Démarrage rapide - E & L PROPRETE

Guide ultra-rapide pour lancer votre site en 5 minutes.

## ⚡ Démarrage immédiat

### 1. Installation (déjà fait ✅)

Les dépendances sont déjà installées. Si ce n'est pas le cas :

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur **http://localhost:3000**

### 3. Personnalisation minimale (OBLIGATOIRE)

Ouvrir le fichier **`src/config/siteConfig.ts`** et modifier :

```typescript
// ⚠️ À CHANGER ABSOLUMENT :

phone: '+33612345678',              // Votre numéro
phoneDisplay: '06 12 34 56 78',     // Format affiché
email: 'contact@el-proprete.fr',    // Votre email
whatsappLink: 'https://wa.me/33612345678',  // Votre lien WhatsApp

// Informations légales :
siret: 'VOTRE_SIRET',               // Ajouter
```

**C'est tout pour commencer !** Le site fonctionnera avec ces modifications.

## 📄 Pages disponibles

Une fois lancé, visitez :

- **http://localhost:3000/** - Page d'accueil
- **http://localhost:3000/professionnels** - Services B2B
- **http://localhost:3000/particuliers** - Ménage à domicile
- **http://localhost:3000/cheques-cesu** - Explication CESU

## 🎨 Vérifications visuelles

### Sur la page d'accueil :

✅ Le nom de l'entreprise apparaît dans le header
✅ Le bouton WhatsApp est visible en bas à droite
✅ Le formulaire de contact s'affiche correctement
✅ Toutes les sections sont présentes

### Tests mobile :

1. Ouvrir les outils de développement (F12)
2. Cliquer sur l'icône mobile (Ctrl+Shift+M)
3. Tester avec différentes tailles d'écran

## 🔧 Prochaines étapes

### Étape 1 : Informations complètes

Compléter dans **`src/config/siteConfig.ts`** :

- ✅ Téléphone et email
- ✅ Lien WhatsApp
- ✅ SIRET
- ✅ Horaires réels
- ✅ URL du site (une fois le domaine acheté)

### Étape 2 : Logo et images

1. Ajouter votre logo dans **`public/logo.png`**
2. Ajouter le favicon dans **`public/favicon.ico`**

### Étape 3 : Formulaire de contact

Le formulaire est actuellement en mode "démo". Pour le rendre fonctionnel :

**Option rapide** : [EmailJS](https://www.emailjs.com/) (gratuit, 200 emails/mois)

1. Créer un compte
2. Configurer un service
3. Suivre le guide dans **`GUIDE_PERSONNALISATION.md`**

### Étape 4 : Contenu personnalisé

**Optionnel** mais recommandé :

- Modifier les avis clients (fichier `src/app/page.tsx`)
- Adapter les services si besoin
- Ajouter vos propres photos

## 🚀 Mise en ligne

### Étape 1 : Build de production

```bash
npm run build
```

Si des erreurs apparaissent, les corriger avant de continuer.

### Étape 2 : Déploiement gratuit sur Vercel

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Installer Vercel CLI : `npm i -g vercel`
3. Lancer : `vercel`
4. Suivre les instructions

Votre site sera en ligne en 2 minutes ! 🎉

### Étape 3 : Nom de domaine

1. Acheter un domaine (ex: el-proprete.fr)
2. Le configurer dans Vercel
3. Modifier `siteConfig.ts` avec la vraie URL
4. Redéployer

## ⚠️ Checklist avant mise en ligne

- [ ] Toutes les infos de contact sont correctes
- [ ] Le lien WhatsApp fonctionne
- [ ] Le formulaire de contact est configuré
- [ ] Le logo est ajouté
- [ ] Le SIRET est renseigné
- [ ] Les horaires sont corrects
- [ ] Le site est testé sur mobile
- [ ] Aucune erreur dans la console (F12)

## 📚 Documentation complète

Pour aller plus loin :

- **`README.md`** - Documentation technique complète
- **`GUIDE_PERSONNALISATION.md`** - Guide détaillé de personnalisation
- **Commentaires dans le code** - Tous les endroits à modifier ont un commentaire `// TODO:`

## 🆘 Problèmes courants

### Le site ne démarre pas

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreur "Port 3000 déjà utilisé"

Changer le port :

```bash
npm run dev -- -p 3001
```

### Modifications non visibles

1. Arrêter le serveur (Ctrl+C)
2. Relancer : `npm run dev`
3. Vider le cache du navigateur (Ctrl+Shift+R)

### Erreur TypeScript

Vérifier que vous avez bien modifié les bons fichiers et que la syntaxe est correcte.

## 💡 Conseils

1. **Toujours tester localement** avant de déployer
2. **Faire des sauvegardes régulières** de votre code
3. **Commencer simple** puis améliorer progressivement
4. **Tester sur mobile** régulièrement

## 📞 Besoin d'aide ?

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- Chercher sur [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**Bon courage pour la personnalisation et la mise en ligne !** 🚀
