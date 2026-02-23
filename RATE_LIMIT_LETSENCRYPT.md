# Rate limit Let's Encrypt – trop d’échecs

## Message reçu

```
too many failed authorizations (5) for "elp.webglobal.me" in the last 1h0m0s,
retry after 2026-02-23 16:20:36 UTC
```

Let's Encrypt bloque temporairement les nouvelles demandes de certificat pour **elp.webglobal.me** après 5 échecs en 1 heure.

---

## Ce qu’il faut faire

### 1. Attendre l’heure indiquée

- **Ne plus demander** de certificat SSL pour **elp.webglobal.me** avant :  
  **2026-02-23 16:20:36 UTC**
- En France (UTC+1) : **17h20** environ.
- Attendre **au moins 15–20 minutes** après cette heure pour être sûr.

### 2. Vérifier la config NPM avant de réessayer

Pour que la prochaine tentative réussisse :

1. **Custom Location** pour `/.well-known/acme-challenge/` bien en place (voir **NPM_CUSTOM_LOCATION_ACME.md**).
2. Tous les champs remplis : Location, Scheme, Forward Hostname `127.0.0.1`, Forward Port `80`, bloc Nginx avec `root /data/letsencrypt-acme-challenge`.
3. **Une seule** nouvelle demande SSL dans NPM après l’heure de déblocage.

### 3. Redemander le certificat une seule fois

- Après **17h25** (heure française) : éditer le Proxy Host **elp.webglobal.me** → onglet **SSL** → **Request a new SSL Certificate** → **Save**.
- Ne pas cliquer plusieurs fois ; attendre la fin du traitement (succès ou message d’erreur).

---

## En résumé

| Action | Quand |
|--------|--------|
| Attendre | Jusqu’à **16:20:36 UTC** (17h20 en France) |
| Vérifier la Custom Location ACME | Avant de redemander |
| Redemander le certificat | **Une seule fois** après 17h25 |

Après ce délai, une nouvelle demande avec la bonne config devrait permettre d’obtenir le certificat.
