# ✅ Checklist finale avant mise en production

Cette checklist vous assure de ne rien oublier avant de mettre votre site en ligne.

## 🔴 PRIORITÉ ABSOLUE (À faire en premier)

### 1. Coordonnées de contact

**Fichier** : `src/config/siteConfig.ts`

- [ ] Téléphone (formats `phone` et `phoneDisplay`)
- [ ] Email de contact
- [ ] Lien WhatsApp fonctionnel (testé)
- [ ] SIRET complet
- [ ] Forme juridique correcte

### 2. Formulaire de contact

**Fichier** : `src/components/ContactForm.tsx`

- [ ] Service d'envoi configuré (EmailJS, Formspree, ou API custom)
- [ ] Test d'envoi effectué et réceptionné
- [ ] Message de confirmation fonctionnel

### 3. Horaires

**Fichier** : `src/config/siteConfig.ts`

- [ ] Horaires d'ouverture vérifiés
- [ ] Format correct pour le SEO

## 🟠 IMPORTANT (Avant le lancement)

### 4. Logo et visuels

- [ ] Logo ajouté dans `public/logo.png`
- [ ] Favicon ajouté dans `public/favicon.ico`
- [ ] Images optimisées (< 200Ko chacune)
- [ ] Formats adaptés (PNG pour logo, ICO pour favicon)

### 5. Informations légales

**Fichier** : `src/config/siteConfig.ts`

- [ ] SIRET vérifié
- [ ] Code NAF vérifié (8121Z)
- [ ] Adresse complète et exacte
- [ ] Coordonnées GPS correctes

### 6. URL et domaine

**Fichiers** : `src/config/siteConfig.ts`, `public/sitemap.xml`, `public/robots.txt`

- [ ] Nom de domaine acheté
- [ ] URL mise à jour dans `siteConfig.ts`
- [ ] Sitemap.xml mis à jour avec la vraie URL
- [ ] Robots.txt mis à jour

## 🟡 RECOMMANDÉ (Pour un meilleur référencement)

### 7. SEO et référencement

- [ ] Google Search Console configuré
- [ ] Code de vérification ajouté dans `src/app/layout.tsx`
- [ ] Sitemap soumis à Google
- [ ] Google My Business créé et vérifié
- [ ] Fiche GMB complète (photos, horaires, services)

### 8. Contenu personnalisé

**Fichiers** : pages dans `src/app/`

- [ ] Avis clients modifiés avec de vrais témoignages
- [ ] Services adaptés à votre offre réelle
- [ ] Zone d'intervention vérifiée et complète
- [ ] Textes relus et vérifiés (orthographe)

### 9. Tests techniques

- [ ] Build de production réussi (`npm run build`)
- [ ] Test sur Chrome / Firefox / Safari
- [ ] Test sur mobile (plusieurs tailles)
- [ ] Test sur tablette
- [ ] Tous les liens fonctionnent
- [ ] Bouton WhatsApp fonctionne
- [ ] Formulaire fonctionne
- [ ] Aucune erreur dans la console (F12)

## 🟢 OPTIONNEL (Améliorations)

### 10. Analytics et suivi

- [ ] Google Analytics installé
- [ ] Tag Manager configuré (si besoin)
- [ ] Pixels Facebook/Instagram (si campagnes prévues)

### 11. Réseaux sociaux

**Fichier** : `src/config/siteConfig.ts`

- [ ] Pages Facebook/Instagram créées
- [ ] Liens ajoutés dans la config
- [ ] Boutons sociaux visibles dans le footer

### 12. Performance

- [ ] Images compressées
- [ ] Score Lighthouse > 90 (Performance)
- [ ] Score Lighthouse > 90 (SEO)
- [ ] Score Lighthouse > 90 (Accessibility)

**Tester avec** : Ouvrir Chrome DevTools (F12) > Onglet Lighthouse > Generate Report

### 13. Sécurité

- [ ] HTTPS activé (automatique avec Vercel)
- [ ] Formulaire protégé contre le spam (Captcha si besoin)
- [ ] Variables sensibles dans `.env.local` (non commitées)

## 🧪 Tests avant lancement

### Test 1 : Navigation

- [ ] Toutes les pages sont accessibles
- [ ] Menu fonctionne sur mobile
- [ ] Liens du footer fonctionnent
- [ ] Retour à l'accueil fonctionne

### Test 2 : Contact

- [ ] Click sur téléphone lance l'appel
- [ ] Click sur email ouvre le client mail
- [ ] Click sur WhatsApp ouvre l'application
- [ ] Formulaire envoie bien les emails

### Test 3 : SEO

- [ ] Chaque page a un titre unique
- [ ] Chaque page a une meta description
- [ ] URLs sont propres (pas de localhost)
- [ ] Sitemap accessible sur `/sitemap.xml`
- [ ] Robots.txt accessible sur `/robots.txt`

### Test 4 : Responsive

- [ ] iPhone (375px)
- [ ] Android standard (360px)
- [ ] Tablette portrait (768px)
- [ ] Tablette paysage (1024px)
- [ ] Desktop standard (1920px)

## 📋 Checklist de déploiement

### Avant le déploiement

- [ ] `npm run build` sans erreur
- [ ] Tous les TODO résolus dans le code
- [ ] `.env.local` créé avec les vraies valeurs
- [ ] `.gitignore` contient `.env.local`

### Déploiement Vercel

- [ ] Compte Vercel créé
- [ ] Projet importé
- [ ] Variables d'environnement ajoutées
- [ ] Premier déploiement réussi
- [ ] Site accessible via URL Vercel

### Configuration DNS

- [ ] Enregistrements A/CNAME configurés
- [ ] Propagation DNS vérifiée (24-48h)
- [ ] SSL automatique activé
- [ ] Redirection www/non-www configurée

### Après le déploiement

- [ ] Site accessible avec le vrai domaine
- [ ] HTTPS fonctionne
- [ ] Tous les tests refaits en production
- [ ] Google Search Console mis à jour
- [ ] Sitemap resoumis

## 🎯 Checklist marketing

- [ ] Page Google My Business publiée
- [ ] Première publication sur réseaux sociaux
- [ ] Email aux clients existants
- [ ] Impression de cartes de visite avec URL
- [ ] Ajout URL sur véhicules/documents

## 📊 Suivi post-lancement

### Semaine 1

- [ ] Vérifier indexation Google (site:votredomaine.fr)
- [ ] Vérifier Analytics (visites)
- [ ] Tester tous les formulaires
- [ ] Répondre aux premiers emails

### Mois 1

- [ ] Analyser pages les plus visitées
- [ ] Vérifier taux de conversion formulaire
- [ ] Ajuster contenu si besoin
- [ ] Ajouter avis clients réels

### Mois 2-3

- [ ] Créer du contenu additionnel (blog)
- [ ] Obtenir backlinks locaux
- [ ] Demander avis Google à clients satisfaits
- [ ] Optimiser pages selon Analytics

## 🆘 En cas de problème

### Site inaccessible

1. Vérifier DNS (outil : whatsmydns.net)
2. Vérifier déploiement Vercel
3. Vérifier certificat SSL

### Formulaire ne fonctionne pas

1. Vérifier console navigateur (F12)
2. Vérifier config EmailJS/Formspree
3. Tester avec email perso

### Mauvais positionnement Google

1. Patience (3-6 mois pour SEO local)
2. Vérifier Google My Business
3. Obtenir avis clients
4. Créer backlinks locaux

## 📞 Ressources utiles

- **Next.js** : https://nextjs.org/docs
- **Vercel** : https://vercel.com/docs
- **Google Search Console** : https://search.google.com/search-console
- **Google My Business** : https://business.google.com
- **Test SEO** : https://www.seobility.net/fr/
- **Test vitesse** : https://pagespeed.web.dev/
- **Validation HTML** : https://validator.w3.org/

## ✅ Validation finale

Une fois TOUTES les cases cochées :

- [ ] Site testé par 3 personnes différentes
- [ ] Aucun bug critique
- [ ] Performances satisfaisantes
- [ ] Contenu validé
- [ ] SEO optimisé

**Votre site est prêt pour la production ! 🚀**

---

**Date de mise en ligne** : _______________

**Version** : 1.0.0

**Notes** : 
_________________________________________________
_________________________________________________
_________________________________________________
