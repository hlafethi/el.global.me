# Guide de personnalisation du site E & L PROPRETE

Ce guide vous explique comment personnaliser facilement votre site sans connaissances techniques approfondies.

## 📋 Checklist de personnalisation

### 1️⃣ Informations de contact (PRIORITAIRE)

**Fichier à modifier** : `src/config/siteConfig.ts`

#### Téléphone

```typescript
phone: '+33612345678',        // ← Remplacer par votre numéro au format international
phoneDisplay: '06 12 34 56 78', // ← Format d'affichage pour les visiteurs
```

**Exemple** : Si votre numéro est 06 78 45 32 10
- `phone: '+33678453210'`
- `phoneDisplay: '06 78 45 32 10'`

#### Email

```typescript
email: 'contact@el-proprete.fr', // ← Remplacer par votre email
```

#### WhatsApp

**Comment obtenir votre lien WhatsApp :**

1. **Via WhatsApp Business App :**
   - Ouvrir WhatsApp Business sur votre téléphone
   - Aller dans **Outils > Liens**
   - Cliquer sur **Créer un lien d'appel**
   - Copier le lien généré (exemple : `https://wa.me/33678453210`)

2. **Manuellement :**
   - Format : `https://wa.me/VOTRE_NUMERO_COMPLET`
   - Exemple : `https://wa.me/33678453210`
   - ⚠️ Pas d'espaces, pas de zéros en début sauf le préfixe international (+33)

```typescript
whatsappLink: 'https://wa.me/33612345678', // ← Remplacer par votre lien
```

### 2️⃣ Informations légales

**Fichier à modifier** : `src/config/siteConfig.ts`

```typescript
businessInfo: {
  siret: '123 456 789 00012',  // ← Ajouter votre SIRET
  nafCode: '8121Z',             // ← Normalement correct, vérifier si besoin
  legalForm: 'SARL',            // ← Adapter (SARL, SAS, EURL, Auto-entreprise, etc.)
}
```

### 3️⃣ Horaires d'ouverture

**Fichier à modifier** : `src/config/siteConfig.ts`

```typescript
openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-12:00',
```

**Format** : Utiliser le format standardisé pour le SEO
- `Mo` = Lundi, `Tu` = Mardi, `We` = Mercredi, `Th` = Jeudi, `Fr` = Vendredi, `Sa` = Samedi, `Su` = Dimanche
- Exemple fermé le dimanche : `'Mo-Fr 08:00-18:00, Sa 09:00-17:00'`
- Exemple 7j/7 : `'Mo-Su 08:00-20:00'`

### 4️⃣ Logo et Favicon

#### Ajouter votre logo

1. Préparer votre logo :
   - Format PNG recommandé (fond transparent)
   - Taille : environ 200x80 pixels
   - Nom du fichier : `logo.png`

2. Placer dans le dossier `public/` :
   ```
   public/
   └── logo.png
   ```

3. Le logo s'affichera automatiquement dans le header

#### Ajouter votre favicon

1. Créer un favicon :
   - Utiliser [favicon.io](https://favicon.io/) pour générer depuis votre logo
   - Télécharger le pack de fichiers

2. Placer dans le dossier `public/` :
   ```
   public/
   ├── favicon.ico
   ├── favicon-16x16.png
   ├── favicon-32x32.png
   └── apple-touch-icon.png
   ```

### 5️⃣ Zone d'intervention

**Fichier à modifier** : `src/config/siteConfig.ts`

```typescript
serviceArea: [
  'Saint-Priest',
  'Mions',
  'Bron',
  // Ajouter ou retirer des villes selon votre zone
]
```

Vous pouvez ajouter ou retirer des villes selon votre zone d'intervention réelle.

### 6️⃣ Coordonnées géographiques (pour Google Maps)

**Fichier à modifier** : `src/config/siteConfig.ts`

```typescript
geo: {
  latitude: 45.6947,   // ← Coordonnées de Saint-Priest
  longitude: 4.9437,   // ← À adapter si vous n'êtes pas exactement à cette adresse
}
```

**Comment obtenir vos coordonnées GPS :**

1. Aller sur [Google Maps](https://www.google.com/maps)
2. Chercher votre adresse : "13 chemin du Charbonnier, Saint-Priest"
3. Faire un clic droit sur votre emplacement
4. Cliquer sur les coordonnées pour les copier (format : 45.6947, 4.9437)

### 7️⃣ URL du site

**Fichier à modifier** : `src/config/siteConfig.ts`

```typescript
url: 'https://www.el-proprete.fr', // ← Remplacer par votre nom de domaine
```

⚠️ **Important** : Modifier aussi dans les fichiers suivants une fois votre nom de domaine acheté :
- `public/sitemap.xml` : remplacer toutes les occurrences de `https://www.el-proprete.fr`
- `public/robots.txt` : ligne `Sitemap:`

## 🎨 Personnalisation du design

### Modifier les couleurs principales

**Fichier à modifier** : `tailwind.config.ts`

```typescript
colors: {
  primary: {
    // Couleur principale (bleu par défaut)
    500: '#1890ff',  // ← Changer cette valeur
    600: '#096dd9',  // ← Un ton plus foncé
    700: '#0050b3',  // ← Encore plus foncé
  },
  success: {
    // Couleur secondaire (vert par défaut, pour WhatsApp)
    500: '#38a169',  // ← Changer si besoin
    600: '#2f855a',  // ← Un ton plus foncé
  },
}
```

**Outils pour choisir des couleurs :**
- [Coolors.co](https://coolors.co/) - Générateur de palettes
- [Adobe Color](https://color.adobe.com/) - Roue chromatique

### Modifier le texte du header (nom de l'entreprise)

**Fichier à modifier** : `src/components/Header.tsx`

Par défaut, le nom provient de `siteConfig.name`, mais vous pouvez le personnaliser directement :

```typescript
<div className="text-2xl font-bold text-primary-600">
  {siteConfig.name}  // ← Ou remplacer par un texte fixe
</div>
```

## 📝 Personnalisation du contenu

### Modifier les avis clients

**Fichier à modifier** : `src/app/page.tsx`

Chercher la section "Avis clients" et modifier :

```typescript
<TestimonialCard
  name="Votre Client"           // ← Nom du client
  role="Sa profession/entreprise" // ← Contexte
  rating={5}                      // ← Note sur 5
  text="Le témoignage complet"    // ← Avis du client
/>
```

### Modifier les services proposés

**Fichiers à modifier** :
- `src/app/page.tsx` - Services sur la page d'accueil
- `src/app/professionnels/page.tsx` - Services pour professionnels
- `src/app/particuliers/page.tsx` - Services pour particuliers

Chercher les composants `<ServiceCard>` et adapter :

```typescript
<ServiceCard
  icon={<FaBroom />}              // ← Icône (voir liste ci-dessous)
  title="Titre du service"        // ← Nom du service
  description="Description..."    // ← Description détaillée
/>
```

**Icônes disponibles** (importées depuis `react-icons/fa`) :
- `FaBuilding` - Bâtiment
- `FaHome` - Maison
- `FaBroom` - Balai
- `FaTools` - Outils
- `FaTruck` - Camion
- `FaStore` - Magasin
- `FaIndustry` - Industrie
- `FaHospital` - Hôpital

[Liste complète sur react-icons.github.io](https://react-icons.github.io/react-icons/icons?name=fa)

## 📧 Configurer le formulaire de contact

### Option 1 : EmailJS (Recommandé pour débuter)

1. **Créer un compte** sur [emailjs.com](https://www.emailjs.com/)

2. **Créer un service email** :
   - Choisir votre fournisseur (Gmail, Outlook, etc.)
   - Configurer avec votre email

3. **Créer un template** :
   - Variables à utiliser : `{{name}}`, `{{email}}`, `{{phone}}`, `{{serviceType}}`, `{{message}}`

4. **Récupérer les identifiants** :
   - Service ID
   - Template ID
   - Public Key

5. **Créer un fichier `.env.local`** à la racine :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

6. **Modifier** `src/components/ContactForm.tsx` :

```typescript
import emailjs from '@emailjs/browser'

// Dans handleSubmit :
emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    serviceType: formData.serviceType,
    message: formData.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
)
```

### Option 2 : Formspree (Plus simple)

1. **Créer un compte** sur [formspree.io](https://formspree.io/)
2. **Créer un formulaire** et récupérer l'URL
3. **Modifier** `src/components/ContactForm.tsx` pour pointer vers cette URL

## 🔍 Configuration SEO avancée

### Google Search Console

1. Créer un compte sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter votre site
3. Choisir la méthode de vérification "Balise HTML"
4. Copier le code de vérification
5. **Modifier** `src/app/layout.tsx` :

```typescript
verification: {
  google: 'votre_code_de_verification',
}
```

### Google My Business

1. Créer un profil sur [business.google.com](https://business.google.com/)
2. Ajouter votre entreprise
3. Vérifier par courrier postal
4. Ajouter photos, horaires, services
5. Lier avec votre site web

## 📱 Réseaux sociaux

**Fichier à modifier** : `src/config/siteConfig.ts`

```typescript
socialMedia: {
  facebook: 'https://facebook.com/votre-page',
  instagram: 'https://instagram.com/votre-compte',
  linkedin: 'https://linkedin.com/company/votre-entreprise',
}
```

Ces liens apparaîtront automatiquement dans le footer.

## 🚀 Mise en ligne

### Acheter un nom de domaine

**Hébergeurs recommandés :**
- OVH (français)
- Ionos (français)
- Gandi (français)
- Namecheap (international)

**Suggestions de noms de domaine :**
- el-proprete.fr
- elproprete.fr
- el-proprete-saintpriest.fr
- nettoyage-el-proprete.fr

### Déployer sur Vercel (Gratuit)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Connecter votre compte GitHub
3. Pousser votre code sur GitHub
4. Importer le projet dans Vercel
5. Déployer (automatique)
6. Lier votre nom de domaine

## ❓ Questions fréquentes

### Comment ajouter une nouvelle page ?

1. Créer un dossier dans `src/app/`
2. Ajouter un fichier `page.tsx`
3. Ajouter le lien dans `src/components/Header.tsx`

### Comment modifier le footer ?

Éditer le fichier `src/components/Footer.tsx`

### Le formulaire ne fonctionne pas

Vérifier que vous avez bien configuré EmailJS ou une alternative (voir section "Configurer le formulaire")

### Comment ajouter Google Analytics ?

1. Créer une propriété sur [analytics.google.com](https://analytics.google.com)
2. Récupérer l'ID de mesure (format : G-XXXXXXXXXX)
3. Installer le package `@next/third-parties`
4. Ajouter dans `src/app/layout.tsx`

## 📞 Besoin d'aide ?

Consultez :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/)

---

**Dernier conseil** : Testez toujours vos modifications localement avec `npm run dev` avant de déployer en production !
