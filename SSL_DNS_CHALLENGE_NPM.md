# SSL avec défi DNS (DNS Challenge) dans NPM

Quand un **proxy devant le VPS** (ex. OpenResty chez l’hébergeur) répond à la place du VPS sur le port 80, le défi **HTTP-01** échoue (404). En utilisant le **défi DNS**, Let's Encrypt vérifie le domaine via un enregistrement **TXT** dans le DNS, sans appeler `http://elp.webglobal.me/.well-known/acme-challenge/`.

---

## Prérequis

- Le domaine **elp.webglobal.me** (ou **webglobal.me**) doit être géré chez un fournisseur DNS que NPM peut piloter via API (Cloudflare, OVH, etc.), **ou** vous acceptez de créer à la main l’enregistrement TXT (selon la version de NPM).
- Attendre la fin du **rate limit** Let's Encrypt (message du type « retry after 2026-02-24 12:50:55 UTC ») avant de redemander un certificat.

---

## Dans Nginx Proxy Manager

1. **Hosts** → **Proxy Hosts** → éditer **elp.webglobal.me**.
2. Onglet **SSL**.
3. **SSL Certificate** : **Request a new SSL Certificate**.
4. Activer **Use DNS Challenge** (ou **DNS Challenge**).
5. Choisir le **DNS Provider** correspondant à l’endroit où est géré le DNS de **webglobal.me** :
   - **Cloudflare** : si le DNS est chez Cloudflare (API Token avec droit Zone:DNS:Edit).
   - **OVH** : si le DNS est chez OVH (credentials OVH).
   - **Autre** : selon la liste proposée par NPM (ex. Aliyun, AWS Route53, etc.).
6. Renseigner les champs demandés (API key, token, etc.) selon la doc du provider.
7. **Save**.

NPM demandera le certificat ; Certbot utilisera le défi **dns-01** : il créera un enregistrement TXT temporaire (via l’API du DNS), Let's Encrypt vérifiera ce TXT, puis le certificat sera délivré. Aucune requête HTTP sur le port 80 n’est nécessaire.

---

## Si votre DNS n’est pas dans la liste NPM

Certaines versions de NPM ne proposent pas tous les fournisseurs ou pas de mode « manuel ». Options :

- Déplacer le DNS du domaine (ou seulement le sous-domaine) vers **Cloudflare** (gratuit), puis utiliser le DNS Challenge avec Cloudflare dans NPM.
- Ou attendre que l’hébergeur (Hostinger) permette que le port 80 public soit directement géré par votre VPS (sans proxy OpenResty devant), puis réessayer le défi HTTP-01 après la fin du rate limit.

---

## Rate limit Let's Encrypt

Après trop d’échecs, Let's Encrypt renvoie :

```text
too many failed authorizations (5) for "elp.webglobal.me" in the last 1h0m0s, retry after 2026-02-24 12:50:55 UTC
```

**À faire** : ne pas redemander de certificat pour **elp.webglobal.me** avant l’heure indiquée (environ 1 h après la dernière tentative). Ensuite, une seule nouvelle demande (de préférence en DNS Challenge).
