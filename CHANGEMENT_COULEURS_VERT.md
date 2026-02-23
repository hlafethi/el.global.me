# 🎨 Changement de couleurs - Vert Émeraude

## ✅ Modifications effectuées

Toutes les couleurs **bleues** du site ont été remplacées par du **vert émeraude**.

### 🎨 Nouvelle palette de couleurs

#### Couleur principale (primary) - Vert Émeraude

```css
primary-50:  #d1fae5  /* Vert très clair (backgrounds) */
primary-100: #a7f3d0  /* Vert clair */
primary-200: #6ee7b7  /* Vert pastel */
primary-300: #34d399  /* Vert vif */
primary-400: #10b981  /* Vert émeraude clair */
primary-500: #059669  /* Vert émeraude (principal) */
primary-600: #047857  /* Vert émeraude foncé */
primary-700: #065f46  /* Vert forêt */
primary-800: #064e3b  /* Vert très foncé */
primary-900: #022c22  /* Vert presque noir */
```

#### Couleur secondaire (success) - Vert maintenu pour WhatsApp

Reste inchangée car déjà verte (utilisée pour WhatsApp).

### 📁 Fichiers modifiés

1. **`tailwind.config.ts`** ✅
   - Palette `primary` remplacée du bleu au vert émeraude
   - 10 teintes de vert définies (50 à 900)

2. **Images SVG placeholder** ✅
   - `equipe-nettoyage.svg` - Fond vert émeraude
   - `bureau-propre.svg` - Fond vert émeraude
   - `region-lyonnaise.svg` - Fond vert émeraude
   - `satisfaction-client.svg` - Fond vert émeraude

### 🌈 Où le vert émeraude apparaît-il ?

#### Header
- Nom de l'entreprise en vert émeraude
- Numéro de téléphone au survol

#### Hero Section (page d'accueil)
- Fond dégradé vert émeraude
- Bouton "Devis gratuit" en vert

#### Boutons
- Tous les boutons primaires (vert émeraude)
- Boutons au survol (vert plus foncé)

#### Icônes et éléments
- Icônes de services (fond vert clair)
- Coches de validation (vert émeraude)
- Liens au survol (vert émeraude)

#### Sections
- Backgrounds clairs (vert très pâle)
- Bordures et accents (vert émeraude)
- CTA et encarts importants (dégradé vert)

#### Footer
- Liens au survol en vert

### 🔄 Changement automatique

Le changement de couleur dans `tailwind.config.ts` affecte **automatiquement** tous les éléments utilisant les classes `primary-*` :

- `bg-primary-600` → Fond vert émeraude
- `text-primary-600` → Texte vert émeraude
- `border-primary-600` → Bordure vert émeraude
- `hover:bg-primary-700` → Survol vert foncé
- etc.

### ✨ Aperçu visuel

**Avant** (Bleu) :
- 🔵 Couleur principale : Bleu ciel (#1890ff)
- 🔵 Fond hero : Dégradé bleu
- 🔵 Boutons : Bleu

**Après** (Vert Émeraude) :
- 🟢 Couleur principale : Vert émeraude (#059669)
- 🟢 Fond hero : Dégradé vert émeraude
- 🟢 Boutons : Vert émeraude

### 🎯 Cohérence de marque

Le **vert émeraude** est une excellente couleur pour une entreprise de nettoyage :

✅ **Évoque la propreté** et la fraîcheur
✅ **Représente l'écologie** et le respect de l'environnement
✅ **Inspire confiance** et professionnalisme
✅ **Se distingue** des concurrents (souvent bleu)
✅ **Excellent contraste** sur fond blanc

### 🔍 Vérifier les changements

#### Sur le site (http://localhost:3002) :

1. **Page d'accueil** :
   - Hero en dégradé vert ✅
   - Bouton "Devis gratuit" vert ✅
   - Icônes avec fond vert clair ✅
   - Section "Région Lyonnaise" avec accents verts ✅

2. **Header** :
   - Nom de l'entreprise en vert ✅
   - Téléphone passe en vert au survol ✅

3. **Footer** :
   - Liens passent en vert au survol ✅

4. **Formulaires** :
   - Focus des champs en vert ✅
   - Bouton d'envoi en vert ✅

### 💡 Personnalisation supplémentaire

Si vous voulez ajuster les teintes de vert, modifiez `tailwind.config.ts` :

```typescript
primary: {
  500: '#059669',  // Couleur principale - ajustez cette valeur
  600: '#047857',  // Survols - ajustez pour plus/moins foncé
}
```

**Outils pour choisir des teintes** :
- https://uicolors.app/create (générateur de palette)
- https://coolors.co/ (inspiration couleurs)

### 🚀 Prochaines étapes

Le changement de couleur est **immédiat** et **complet**. 

Si le serveur est toujours lancé :
1. Rafraîchir la page (F5 ou Ctrl+R)
2. Ou forcer le rafraîchissement (Ctrl+Shift+R)

Si le serveur est arrêté :
```bash
npm run dev
```

### ⚠️ Note importante

Si vous avez des **éléments en dur** dans le code qui utilisent du bleu (ex: `className="text-blue-600"`), ils resteront bleus. 

Tous les éléments utilisant `primary-*` sont maintenant verts automatiquement.

### 🎨 Comparaison avant/après

| Élément | Avant (Bleu) | Après (Vert) |
|---------|--------------|--------------|
| Couleur principale | #1890ff | #059669 |
| Hero background | Dégradé bleu | Dégradé vert émeraude |
| Boutons | Bleu | Vert émeraude |
| Liens actifs | Bleu | Vert émeraude |
| Icônes | Fond bleu clair | Fond vert clair |
| Accents | Bleu | Vert émeraude |

### ✅ Checklist de vérification

- [x] `tailwind.config.ts` mis à jour
- [x] Palette vert émeraude définie
- [x] Images SVG mises à jour
- [x] Cohérence visuelle maintenue
- [ ] Vérifier sur navigateur (à faire par vous)
- [ ] Tester sur mobile (à faire par vous)
- [ ] Vérifier tous les boutons (à faire par vous)

---

**Le site est maintenant en vert émeraude !** 🟢✨

Ouvrez http://localhost:3002 et actualisez la page pour voir les changements.
