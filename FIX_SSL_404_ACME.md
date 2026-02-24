# Corriger l’erreur SSL : 404 sur /.well-known/acme-challenge

## Problème

Dans le log Let's Encrypt vous voyez :

```
Invalid response from http://elp.webglobal.me/.well-known/acme-challenge/...: 404
```

Let's Encrypt appelle **http://elp.webglobal.me/.well-known/acme-challenge/TOKEN**. Nginx Proxy Manager envoie cette requête vers votre site (port 3080). Le site Next.js ne gère pas ce chemin → **404** → certificat refusé.

## Solution

NPM doit **servir les fichiers** depuis `/data/letsencrypt-acme-challenge` (où Certbot écrit le défi), **sans** proxy vers le site ni vers 127.0.0.1. Une **Custom Location** avec Forward 127.0.0.1:80 fait un **proxy** : Let's Encrypt reçoit alors la réponse du service cible (souvent 404). Il faut un bloc **Advanced** avec `root` pour servir depuis le disque.

### Ordre à respecter

1. **Supprimer** la Custom Location `/.well-known/acme-challenge/` si elle existe (éviter le proxy).
2. Ajouter la config **Advanced** ci-dessous, puis **Save**.
3. **Après** avoir sauvegardé, redemander le certificat (onglet SSL).

### Étapes dans NPM

1. Ouvrez **Nginx Proxy Manager** (http://VOTRE_IP:81).
2. **Hosts** → **Proxy Hosts** → cliquez sur **elp.webglobal.me** (ou l’icône crayon pour éditer).
3. Passez à l’onglet **Advanced**.
5. Dans la zone **Custom Nginx Configuration**, collez :

```nginx
location ^~ /.well-known/acme-challenge/ {
    default_type "text/plain";
    root /data/letsencrypt-acme-challenge;
}
```

5. Cliquez sur **Save** (en bas). Vérifiez qu’il n’y a pas d’erreur (sinon le bloc est refusé).

### Redemander le certificat SSL

1. Restez dans l’édition du Proxy Host **elp.webglobal.me**.
2. Onglet **SSL**.
3. **SSL Certificate** : **Request a new SSL Certificate (Let's Encrypt)**.
4. Email + **I Agree to the Let's Encrypt Terms of Service**.
5. **Force SSL**, **HTTP/2**, **HSTS** si vous le souhaitez.
6. **Save**.

Attendez quelques secondes. Let's Encrypt pourra cette fois récupérer le fichier de défi sur `http://elp.webglobal.me/.well-known/acme-challenge/...` et le certificat devrait être délivré.

### Vérification rapide (optionnel)

Avant de redemander le certificat, vous pouvez vérifier que NPM sert bien le défi :

- Après avoir sauvegardé le bloc Advanced, demandez le certificat dans NPM.
- Pendant la demande, Certbot écrit un fichier dans `/data/letsencrypt-acme-challenge/.well-known/acme-challenge/` dans le conteneur NPM.
- Ensuite, dans un navigateur ou avec `curl http://elp.webglobal.me/.well-known/acme-challenge/test` vous ne verrez peut-être qu’une 404 pour "test", mais lors du vrai défi Let's Encrypt, l’URL contiendra le bon token et NPM servira le fichier créé par Certbot.

L’important est d’avoir ajouté le bloc **Advanced** ci-dessus, puis de redemander le certificat.
