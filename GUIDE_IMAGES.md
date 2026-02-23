# 📸 Guide pour remplacer les images placeholder

Ce guide vous explique comment remplacer les images SVG placeholder par vos vraies photos.

## 📁 Images à remplacer

Le site contient actuellement 5 images placeholder (format SVG) à remplacer par vos vraies photos :

### Liste des images

1. **`/public/images/region-lyonnaise.svg`**
   - **Utilisation** : Section "Région lyonnaise" sur la page d'accueil
   - **Suggestion** : Photo de Lyon, vue aérienne de Saint-Priest, ou paysage de la région
   - **Dimensions recommandées** : 1200x900 pixels minimum

2. **`/public/images/bureau-propre.svg`**
   - **Utilisation** : Section "Nettoyage de bureaux" 
   - **Suggestion** : Photo d'un bureau professionnel propre et bien rangé
   - **Dimensions recommandées** : 1000x750 pixels minimum

3. **`/public/images/satisfaction-client.svg`**
   - **Utilisation** : Section "Entretien de copropriétés"
   - **Suggestion** : Hall d'immeuble propre, cage d'escalier bien entretenue
   - **Dimensions recommandées** : 1000x750 pixels minimum

4. **`/public/images/menage-domicile.svg`**
   - **Utilisation** : Section "Ménage à domicile"
   - **Suggestion** : Intérieur de maison/appartement propre, salon ou cuisine
   - **Dimensions recommandées** : 1000x750 pixels minimum

5. **`/public/images/equipe-nettoyage.svg`**
   - **Utilisation** : Section "Notre équipe"
   - **Suggestion** : Photo de votre équipe en tenue professionnelle
   - **Dimensions recommandées** : 1200x900 pixels minimum

## 🎨 Préparer vos photos

### Format recommandé

- **Format** : JPG (meilleur pour les photos)
- **Poids** : Entre 100 Ko et 300 Ko maximum (important pour la vitesse du site)
- **Résolution** : 1200x900 pixels pour les grandes images, 1000x750 pour les moyennes

### Outils de compression

Pour optimiser vos images (réduire le poids sans perdre en qualité) :

1. **TinyPNG** : https://tinypng.com/
   - Glissez-déposez vos images
   - Téléchargez les versions compressées

2. **Squoosh** : https://squoosh.app/
   - Plus d'options de compression
   - Prévisualisation avant/après

3. **ImageOptim** (Mac) : https://imageoptim.com/
   - Application gratuite et très efficace

### Conseils pour de belles photos

#### Pour les locaux (bureaux, copropriétés, maisons)
- ✅ Lumière naturelle si possible
- ✅ Angles larges pour montrer l'espace
- ✅ Objets bien rangés
- ✅ Netteté maximale
- ❌ Éviter les zones sombres
- ❌ Éviter le flou

#### Pour l'équipe
- ✅ Tenues professionnelles
- ✅ Sourire naturel
- ✅ Fond neutre ou sur lieu de travail
- ✅ Photo en haute résolution
- ❌ Éviter les selfies
- ❌ Éviter les arrière-plans encombrés

## 🔧 Remplacer les images

### Méthode 1 : Remplacement direct (Simple)

1. **Préparer vos images** :
   - Renommer vos photos avec les mêmes noms que les fichiers existants
   - Exemples de noms :
     ```
     region-lyonnaise.jpg
     bureau-propre.jpg
     satisfaction-client.jpg
     menage-domicile.jpg
     equipe-nettoyage.jpg
     ```

2. **Remplacer les fichiers** :
   - Aller dans le dossier `public/images/`
   - Supprimer les fichiers `.svg`
   - Copier vos photos `.jpg` au même endroit

3. **Mettre à jour l'extension dans le code** :
   
   Ouvrir le fichier `src/app/page.tsx` et remplacer `.svg` par `.jpg` :

   ```typescript
   // AVANT
   src="/images/region-lyonnaise.svg"
   
   // APRÈS
   src="/images/region-lyonnaise.jpg"
   ```

   À faire pour toutes les images (rechercher `.svg` dans le fichier).

### Méthode 2 : Nouveaux noms de fichiers

Si vous préférez garder vos propres noms de fichiers :

1. **Copier vos images** dans `public/images/`

2. **Modifier les chemins** dans `src/app/page.tsx`

   Exemple :
   ```typescript
   // AVANT
   <Image
     src="/images/region-lyonnaise.svg"
     alt="Région lyonnaise"
     fill
   />
   
   // APRÈS
   <Image
     src="/images/ma-photo-lyon.jpg"
     alt="Région lyonnaise"
     fill
   />
   ```

## 📱 Optimisation Next.js

Next.js optimise automatiquement les images JPG/PNG. Aucune action supplémentaire n'est nécessaire.

### Formats supportés

- ✅ JPG / JPEG (recommandé pour photos)
- ✅ PNG (si transparence nécessaire)
- ✅ WebP (moderne, bien supporté)
- ✅ AVIF (très moderne, excellent poids)

### Dimensions multiples

Next.js génère automatiquement plusieurs tailles de votre image pour s'adapter aux différents écrans (mobile, tablette, desktop).

## 🎯 Images additionnelles recommandées

Au-delà des 5 images placeholder, vous pouvez ajouter d'autres photos :

### Section "Nos services"
Ajouter des photos pour chaque service :
- Nettoyage après travaux
- Débarras
- Nettoyage de commerces

### Galerie "Avant/Après"
Créer une section avec photos comparatives :
- Bureau avant/après nettoyage
- Appartement avant/après déménagement
- Commerce avant/après

### Témoignages clients
Ajouter des photos de locaux clients (avec leur autorisation).

## 📋 Checklist finale

Avant de valider vos images :

- [ ] Toutes les images sont au format JPG/PNG
- [ ] Poids < 300 Ko par image
- [ ] Résolution suffisante (min 1000x750 px)
- [ ] Photos nettes et bien cadrées
- [ ] Lumière correcte (pas trop sombre)
- [ ] Fichiers renommés correctement
- [ ] Extensions mises à jour dans le code (.svg → .jpg)
- [ ] Test sur le site en local (npm run dev)
- [ ] Vérification sur mobile

## 🆘 Problèmes courants

### L'image ne s'affiche pas

1. **Vérifier le chemin** :
   ```typescript
   src="/images/nom-fichier.jpg"  // ✅ Correct
   src="images/nom-fichier.jpg"   // ❌ Manque le /
   src="/public/images/..."       // ❌ Ne pas inclure /public
   ```

2. **Vérifier l'extension** :
   - Si votre fichier est `photo.jpg`, ne pas écrire `photo.png`
   - Extensions sensibles à la casse : `photo.JPG` ≠ `photo.jpg`

3. **Redémarrer le serveur** :
   ```bash
   # Arrêter (Ctrl+C)
   # Relancer
   npm run dev
   ```

### L'image est déformée

Utiliser `object-cover` dans la className :
```typescript
<Image
  src="/images/photo.jpg"
  alt="Description"
  fill
  className="object-cover"  // ✅ Garde les proportions
/>
```

### L'image est trop lourde (site lent)

1. Compresser avec TinyPNG ou Squoosh
2. Redimensionner avant upload (pas besoin de 4000x3000 px)
3. Préférer JPG à PNG pour les photos

## 💡 Banques d'images gratuites

Si vous n'avez pas encore de photos, vous pouvez utiliser temporairement des images libres de droits :

### Sites recommandés

1. **Unsplash** : https://unsplash.com/
   - Recherche : "office cleaning", "clean home", "cleaning team"
   - Qualité professionnelle, gratuit

2. **Pexels** : https://www.pexels.com/
   - Nombreuses photos de nettoyage et bureaux
   - Gratuit et libre de droits

3. **Pixabay** : https://pixabay.com/
   - Photos et illustrations
   - Gratuit

### Recherches utiles (en anglais)

- "office cleaning"
- "clean office"
- "cleaning team"
- "apartment cleaning"
- "building maintenance"
- "Lyon city" (pour région lyonnaise)
- "professional cleaners"

## 🚀 Photos personnalisées = Meilleur impact

Les photos de **votre équipe** et de **vos réalisations réelles** ont beaucoup plus d'impact que des photos génériques. Prévoyez :

1. **Session photo professionnelle** (fortement recommandé)
   - Budget : 300-500€ pour quelques heures
   - ROI important pour l'image de marque

2. **Photos smartphone de qualité**
   - Utiliser le mode portrait
   - Beaucoup de lumière naturelle
   - Stabiliser le téléphone
   - Prendre plusieurs angles

3. **Photos "avant/après"** de vos chantiers
   - Puissant pour montrer votre travail
   - Demander autorisation aux clients
   - Très bon pour les réseaux sociaux

---

**Besoin d'aide ?** N'hésitez pas à consulter la documentation Next.js sur les images : https://nextjs.org/docs/app/api-reference/components/image
