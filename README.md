# E & L PROPRETE - Site Vitrine

Site web moderne et optimisé SEO pour E & L PROPRETE, entreprise de nettoyage à Saint-Priest (69800).

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec rendu côté serveur
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS** - Framework CSS utilitaire pour un design moderne
- **React Icons** - Bibliothèque d'icônes

## 📦 Installation

### Prérequis

- Node.js 18.x ou supérieur
- npm ou yarn

### Étapes d'installation

1. **Cloner ou télécharger le projet**

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Informations à personnaliser

Avant de mettre en production, vous **devez** modifier les informations suivantes dans le fichier `src/config/siteConfig.ts` :

#### 1. Coordonnées de contact

```typescript
contact: {
  // TODO: Remplacer par le vrai numéro de téléphone
  phone: '+33612345678', // Format international
  phoneDisplay: '06 12 34 56 78', // Format d'affichage
  
  // TODO: Remplacer par l'adresse email réelle
  email: 'contact@el-proprete.fr',
  
  // TODO: Remplacer par le vrai lien WhatsApp
  // Pour créer un lien d'appel WhatsApp : https://wa.me/<NUMERO_AVEC_INDICATIF>
  // Exemple : https://wa.me/33612345678
  whatsappLink: 'https://wa.me/33612345678',
}
```

**Comment créer un lien d'appel WhatsApp ?**

1. Rendez-vous sur WhatsApp Business
2. Allez dans Outils > Liens
3. Créez un lien d'appel
4. Copiez-collez le lien généré dans `whatsappLink`

#### 2. Horaires d'ouverture

```typescript
// TODO: Adapter les horaires réels
openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-12:00',
```

#### 3. Informations légales

```typescript
businessInfo: {
  siret: '', // TODO: Ajouter le SIRET
  nafCode: '8121Z',
  legalForm: 'SARL', // TODO: Vérifier la forme juridique
}
```

#### 4. Réseaux sociaux (optionnel)

```typescript
socialMedia: {
  // TODO: Ajouter les liens réels vers les réseaux sociaux si disponibles
  facebook: '',
  instagram: '',
  linkedin: '',
}
```

#### 5. URL du site

```typescript
url: 'https://www.el-proprete.fr', // TODO: Remplacer par l'URL réelle
```

### Formulaire de contact

Le formulaire de contact dans `src/components/ContactForm.tsx` est actuellement en mode "démo". Pour le rendre fonctionnel, vous devez :

1. **Option 1 : Utiliser EmailJS** (recommandé pour débuter)
   - Créer un compte sur [emailjs.com](https://www.emailjs.com/)
   - Configurer un service email
   - Remplacer le code dans la fonction `handleSubmit`

2. **Option 2 : Créer votre propre API**
   - Créer une route API dans `src/app/api/contact/route.ts`
   - Utiliser nodemailer ou un service d'emailing

3. **Option 3 : Utiliser Formspree**
   - Créer un compte sur [formspree.io](https://formspree.io/)
   - Remplacer l'action du formulaire

### SEO et meta tags

Dans `src/app/layout.tsx`, ajoutez vos codes de vérification :

```typescript
verification: {
  // TODO: Ajouter les codes de vérification Google Search Console, Bing, etc.
  google: '',
}
```

### Logo et images

Pour ajouter votre logo :

1. Placez votre logo dans le dossier `public/`
2. Nommez-le `logo.png` (ou modifiez le chemin dans `siteConfig.ts`)
3. Pour le favicon, ajoutez `favicon.ico` dans `public/`

## 📄 Structure du site

### Pages créées

- **/** - Page d'accueil (landing page)
- **/professionnels** - Services pour professionnels
- **/particuliers** - Services pour particuliers (ménage à domicile)
- **/cheques-cesu** - Explications sur les chèques CESU

### Composants réutilisables

- `Header` - En-tête avec navigation
- `Footer` - Pied de page avec liens et informations
- `WhatsAppButton` - Bouton d'appel WhatsApp (3 variantes)
- `ContactForm` - Formulaire de demande de devis
- `ServiceCard` - Carte de présentation de service
- `TestimonialCard` - Carte d'avis client

## 🎨 Personnalisation du design

### Couleurs

Les couleurs peuvent être modifiées dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    // Bleu principal
    500: '#1890ff',
    600: '#096dd9',
    // ...
  },
  success: {
    // Vert pour WhatsApp et actions
    500: '#38a169',
    600: '#2f855a',
    // ...
  },
}
```

### Classes CSS personnalisées

Des classes utilitaires sont définies dans `src/app/globals.css` :

- `.btn-primary` - Bouton principal
- `.btn-secondary` - Bouton secondaire
- `.btn-outline` - Bouton avec bordure
- `.container-custom` - Container responsive

## 🔍 Optimisation SEO

### Contenu déjà optimisé

✅ Balises title et meta description uniques par page
✅ Structure H1, H2, H3 cohérente
✅ Contenu riche (800-1000 mots par page)
✅ Mots-clés locaux intégrés naturellement
✅ Schema JSON-LD LocalBusiness
✅ robots.txt et sitemap.xml

### Pour améliorer davantage le SEO

1. **Créer un compte Google Search Console**
   - Ajouter et vérifier le site
   - Soumettre le sitemap

2. **Créer un compte Google My Business**
   - Ajouter l'entreprise
   - Lier avec le site web

3. **Ajouter des images optimisées**
   - Photos des locaux
   - Photos d'équipe
   - Avant/après de prestations
   - Compresser les images (max 200Ko)

4. **Créer du contenu additionnel**
   - Blog avec articles sur le nettoyage
   - Page FAQ détaillée
   - Galerie photos

## 🚀 Déploiement

### Option 1 : Vercel (Recommandé)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Connecter votre repository Git
3. Vercel détectera automatiquement Next.js
4. Déployer en un clic

### Option 2 : Netlify

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Importer le projet
3. Configurer la commande de build : `npm run build`
4. Configurer le dossier de publication : `.next`

### Option 3 : Hébergement classique

```bash
npm run build
npm run start
```

## 📱 Responsive

Le site est entièrement responsive et optimisé pour :

- 📱 Mobile (320px et plus)
- 📱 Tablette (768px et plus)
- 💻 Desktop (1024px et plus)

## ♿ Accessibilité

- Contrastes de couleurs respectés (WCAG AA)
- Navigation au clavier fonctionnelle
- Attributs `aria-label` sur les boutons d'action
- Structure sémantique HTML5

## 📊 Performance

Le site est optimisé pour :

- ⚡ Core Web Vitals (Google)
- 🚀 Chargement rapide (< 3 secondes)
- 📦 Code splitting automatique (Next.js)
- 🖼️ Images optimisées (Next.js Image)

## 🛠️ Commandes disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm run start

# Linter
npm run lint
```

## 📝 Todo avant la mise en production

- [ ] Remplacer les informations de contact dans `siteConfig.ts`
- [ ] Ajouter le vrai lien WhatsApp
- [ ] Configurer le formulaire de contact
- [ ] Ajouter le SIRET et les informations légales
- [ ] Ajouter le logo et le favicon
- [ ] Vérifier et adapter les horaires d'ouverture
- [ ] Tester le site sur mobile
- [ ] Configurer Google Search Console
- [ ] Créer un compte Google My Business
- [ ] Ajouter des images de qualité

## 📞 Support

Pour toute question ou assistance, consultez la documentation Next.js :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)

---

**Note importante** : Tous les textes du site ont été rédigés de manière unique et optimisée pour le SEO local. Les commentaires `TODO` dans le code indiquent les endroits où vous devez ajouter vos vraies informations.
