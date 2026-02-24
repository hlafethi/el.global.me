# NPM (nouvelle version) – Custom Location pour Let's Encrypt

Dans la nouvelle version de Nginx Proxy Manager, la config ACME se fait via **Custom Locations**. Remplir **tous** les champs comme ci‑dessous.

---

## Onglet « Custom Locations »

1. **Hosts** → **Proxy Hosts** → éditer **elp.webglobal.me**.
2. Aller dans l’onglet **Custom Locations**.
3. Cliquer sur **Add Location** (ou éditer la location existante).
4. Remplir **exactement** :

### Champs à remplir

| Champ | Valeur |
|--------|--------|
| **Location** | `/.well-known/acme-challenge/` (obligatoire : **le point** après le premier `/` — pas `/well-known/` sans point) |
| **Scheme** | `http` |
| **Forward Hostname / IP** | `127.0.0.1` |
| **Forward Port** | `80` |

**Important :** le **bloc Nginx** ci-dessous (avec `root /data/letsencrypt-acme-challenge`) est indispensable. Sans lui, NPM forward la requête au site et vous gardez une 404. Ce dossier est celui où Certbot écrit les fichiers de défi.

### Bloc Nginx (Configuration avancée / Nginx Configuration Block)

Dans la zone de configuration Nginx de **cette** location, mettre **soit** le bloc complet, **soit** uniquement les directives internes, selon ce que NPM accepte.

**Option A – Bloc complet** (si NPM l’accepte tel quel) :

```nginx
location ^~ /.well-known/acme-challenge/ {
    default_type "text/plain";
    root /data/letsencrypt-acme-challenge;
}
```

**Option B – Directives seules** (si NPM enveloppe déjà dans un `location` à partir du champ **Location**) :

```nginx
default_type "text/plain";
root /data/letsencrypt-acme-challenge;
```

5. **Save** (en bas de la fenêtre).

---

## Si « Internal Error » apparaît

- Vérifier qu’il n’y a pas d’espace en trop dans **Location** (ex. `/.well-known/acme-challenge/` sans espace avant/après).
- **Location** : doit être `/.well-known/acme-challenge/` **avec le point** (pas `/well-known/` sans point).
- Essayer **Option B** pour le bloc Nginx (directives seules, sans `location ^~ ...`) si **Option A** provoque une erreur.
- Si la nouvelle version a un onglet **Advanced** au niveau du Proxy Host (à côté de Details / SSL), coller **uniquement** le bloc **Option A** dans cet onglet Advanced et ne pas créer de Custom Location pour ACME.

---

## Après avoir enregistré

1. Onglet **SSL** → **Request a new SSL Certificate (Let's Encrypt)**.
2. Email + accord aux conditions + **Save**.

Let's Encrypt pourra alors accéder à `http://elp.webglobal.me/.well-known/acme-challenge/...` et le certificat pourra être délivré.
