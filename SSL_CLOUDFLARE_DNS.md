# SSL avec Cloudflare (DNS Challenge) – Hostinger sans plugin

Si votre domaine est chez **Hostinger** et que NPM ne propose pas Hostinger dans les DNS providers, vous pouvez **déléguer le DNS à Cloudflare** (gratuit). Ensuite, NPM pourra utiliser le **DNS Challenge** avec Cloudflare pour obtenir le certificat Let's Encrypt.

---

## 1. Créer un compte Cloudflare (gratuit)

- Aller sur **https://www.cloudflare.com** → Sign up (gratuit).
- Vérifier votre email.

---

## 2. Ajouter le domaine dans Cloudflare

1. Dans Cloudflare : **Add a site** (ou **Websites** → **Add a site**).
2. Saisir **webglobal.me** (le domaine racine, pas seulement elp).
3. Choisir le plan **Free** → **Continue**.
4. Cloudflare affiche une analyse des enregistrements DNS. Vérifier que les enregistrements existants (ex. **A** pour `elp` → IP du VPS) sont listés. Si besoin, les ajouter ou les corriger pour que **elp** pointe vers l’IP de votre VPS.
5. **Continue** → Cloudflare vous donne **2 nameservers**, par exemple :
   - `ada.ns.cloudflare.com`
   - `bob.ns.cloudflare.com`
   (les vrais noms vous sont donnés dans l’interface.)

---

## 3. Changer les nameservers chez Hostinger

1. Se connecter à **Hostinger** (hPanel).
2. Aller dans **Domaines** → sélectionner **webglobal.me**.
3. Chercher **Nameservers** / **Serveurs de noms** / **DNS**.
4. Remplacer les nameservers actuels par ceux fournis par Cloudflare (les 2 adresses du type `xxx.ns.cloudflare.com`).
5. Enregistrer. La propagation peut prendre de quelques minutes à 24–48 h (souvent 15–30 min).

---

## 4. Activer Cloudflare (dans Cloudflare)

1. Revenir dans Cloudflare → site **webglobal.me**.
2. Suivre les étapes pour confirmer que le domaine est actif (Cloudflare vérifie les nameservers). Quand c’est « Active », le DNS est géré par Cloudflare.

---

## 5. Créer un token API Cloudflare (pour NPM)

1. Dans Cloudflare : **My Profile** (icône profil en haut à droite) → **API Tokens** (ou aller sur **https://dash.cloudflare.com/profile/api-tokens**).
2. **Create Token**.
3. Utiliser le template **Edit zone DNS** (ou **Create Custom Token** avec les permissions suivantes) :
   - **Permissions** : Zone → DNS → Edit ; Zone → Zone → Read.
   - **Zone Resources** : Include → Specific zone → **webglobal.me**.
4. **Continue to summary** → **Create Token**.
5. **Copier le token** (il ne s’affichera plus qu’une fois). Le coller dans un endroit sûr.

---

## 6. Configurer NPM (DNS Challenge avec Cloudflare)

1. **Nginx Proxy Manager** → **Hosts** → **Proxy Hosts** → éditer **elp.webglobal.me**.
2. Onglet **SSL** :
   - **SSL Certificate** : **Request a new Certificate**.
   - **Use DNS Challenge** : activé.
   - **DNS Provider** : **Cloudflare**.
3. Les champs Cloudflare (selon la version de NPM) sont en général :
   - **API Token** : coller le token créé à l’étape 5.
   - (Parfois **Email** + **Global API Key** à la place du token ; si seul « API Token » est demandé, le token suffit.)
4. **Save**.

NPM utilisera le DNS Challenge via Cloudflare ; Let's Encrypt vérifiera le TXT et délivrera le certificat. Plus besoin que le port 80 soit atteignable par Let's Encrypt (le proxy devant le VPS ne pose plus de problème).

---

## 7. Vérifier les enregistrements DNS après migration

Dans Cloudflare → **webglobal.me** → **DNS** → **Records** :

- Un enregistrement **A** : nom **elp**, valeur = **IP de votre VPS**, Proxy status (nuage) **Proxied** ou **DNS only** selon que vous vouliez passer le trafic par Cloudflare ou directement vers le VPS. Pour un VPS avec NPM, **DNS only** (gris) est souvent utilisé pour éviter un double proxy.

---

## Résumé

| Étape | Où | Action |
|--------|-----|--------|
| 1 | Cloudflare | Compte gratuit + ajouter site webglobal.me |
| 2 | Cloudflare | Noter les 2 nameservers |
| 3 | Hostinger | Remplacer les nameservers du domaine par ceux de Cloudflare |
| 4 | Cloudflare | Attendre que le domaine soit « Active » |
| 5 | Cloudflare | API Tokens → Create Token (Zone DNS Edit) → copier le token |
| 6 | NPM | SSL → DNS Challenge → Provider **Cloudflare** → coller le token → Save |

Après cela, le certificat pour **elp.webglobal.me** peut être demandé via NPM sans dépendre de Hostinger ni du port 80 public.
