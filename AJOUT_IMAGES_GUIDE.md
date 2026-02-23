# 📸 Guide rapide - Ajouter vos images

## ✅ Image region-lyonnaise.jpg - CORRIGÉE

Votre image `region-lyonnaise.jpg` est maintenant correctement référencée.

**Emplacement actuel** : `public/region-lyonnaise.jpg` ✅
**Référence dans le code** : Mise à jour vers `/region-lyonnaise.jpg` ✅

## 📍 Comment ajouter les autres images

Vous avez **2 options** pour organiser vos images :

### Option 1 : Toutes les images dans `public/` (SIMPLE)

**Structure** :
```
public/
├── logo.png ✅ (déjà mis)
├── region-lyonnaise.jpg ✅ (déjà mis)
├── bureau-propre.jpg ← À ajouter
├── satisfaction-client.jpg ← À ajouter
├── menage-domicile.jpg ← À ajouter
└── equipe-nettoyage.jpg ← À ajouter
```

**Si vous choisissez cette option**, je dois modifier le code pour pointer vers :
- `/bureau-propre.jpg`
- `/satisfaction-client.jpg`
- `/menage-domicile.jpg`
- `/equipe-nettoyage.jpg`

### Option 2 : Images dans `public/images/` (ORGANISÉ)

**Structure** :
```
public/
├── logo.png ✅
└── images/
    ├── region-lyonnaise.jpg ← Déplacer ici
    ├── bureau-propre.jpg ← À ajouter
    ├── satisfaction-client.jpg ← À ajouter
    ├── menage-domicile.jpg ← À ajouter
    └── equipe-nettoyage.jpg ← À ajouter
```

**Si vous choisissez cette option** :
1. Créez le dossier `public/images/`
2. Déplacez `region-lyonnaise.jpg` dedans
3. Ajoutez les autres images
4. Je modifierai le code pour pointer vers `/images/nom-fichier.jpg`

## 🎯 Recommandation

Je recommande **Option 1** (tout dans `public/`) car :
- ✅ Plus simple
- ✅ Moins de dossiers
- ✅ Votre image est déjà là

## 📝 Liste des images à ajouter

Pour que toutes les sections aient des images, ajoutez ces **4 fichiers** dans `public/` :

1. **`bureau-propre.jpg`**
   - Photo d'un bureau professionnel propre
   - Utilisée dans : Section "Nettoyage de bureaux"

2. **`satisfaction-client.jpg`**
   - Photo d'un hall d'immeuble ou cage d'escalier propre
   - Utilisée dans : Section "Copropriétés"

3. **`menage-domicile.jpg`**
   - Photo d'un intérieur de maison/appartement propre
   - Utilisée dans : Section "Ménage à domicile"

4. **`equipe-nettoyage.jpg`**
   - Photo de votre équipe
   - Utilisée dans : Section "Notre équipe"

## ⚡ Action immédiate

**Confirmez-moi votre choix** :

**Option A** : "Je vais mettre toutes mes images dans `public/`"
→ Je modifierai le code pour pointer vers `/nom-fichier.jpg`

**Option B** : "Je préfère organiser dans `public/images/`"
→ Je modifierai le code pour pointer vers `/images/nom-fichier.jpg`

## 🔧 Une fois vos images ajoutées

Dites-moi simplement : **"J'ai ajouté les images"**

Je mettrai automatiquement à jour tous les chemins dans le code.

## 💡 Rappel important

- ✅ Noms de fichiers **sans espaces** (utilisez des tirets)
- ✅ Extensions en **minuscules** (.jpg et non .JPG)
- ✅ Format recommandé : JPG pour les photos
- ✅ Poids : Moins de 500 Ko par image (compresser sur tinypng.com)

## 🔍 Vérifier que l'image actuelle s'affiche

1. Actualisez votre navigateur : **Ctrl + Shift + R**
2. Scrollez jusqu'à la section "Région Lyonnaise"
3. L'image `region-lyonnaise.jpg` devrait maintenant s'afficher ✅

Si elle ne s'affiche toujours pas :
- Vérifiez que le fichier est bien dans `public/region-lyonnaise.jpg`
- Le nom doit être exactement : `region-lyonnaise.jpg` (avec le tiret)

---

**Dites-moi quelle option vous préférez et je m'occupe du reste !** 🚀
