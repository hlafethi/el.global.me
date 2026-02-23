# Voir les logs Nginx Proxy Manager (NPM) sur le VPS

NPM tourne dans un conteneur Docker. À exécuter en **SSH sur le VPS**.

---

## Voir les logs en direct (recommandé pour déboguer SSL)

```bash
docker logs nginx-proxy-manager -f --tail 200
```

- `-f` : suit les logs en continu (Ctrl+C pour quitter).
- `--tail 200` : affiche les 200 dernières lignes puis continue.

---

## Voir les 100 dernières lignes (sans suivre)

```bash
docker logs nginx-proxy-manager --tail 100
```

---

## Voir tous les logs (souvent long)

```bash
docker logs nginx-proxy-manager
```

---

## Si le conteneur ne s’appelle pas exactement `nginx-proxy-manager`

Lister les conteneurs pour trouver le bon nom :

```bash
docker ps -a | grep -i nginx
```

Puis remplacer `nginx-proxy-manager` par le nom affiché (ex. `npm_app_1` ou `nginxproxymanager_app_1`) :

```bash
docker logs NOM_DU_CONTENEUR -f --tail 200
```

---

## Exemple avec Docker Compose (si NPM a été lancé en stack)

Si NPM est dans une stack (ex. `nginx-proxy-manager`) :

```bash
cd /chemin/vers/nginx-proxy-manager   # dossier du docker-compose NPM
docker compose logs -f --tail 200
```

Ou en une commande depuis n’importe où, si vous connaissez le nom du service :

```bash
docker compose -f /chemin/vers/docker-compose.yml logs -f npm
```

---

## Ce qu’il faut regarder pour une erreur SSL

Dans les logs, cherchez des lignes contenant par exemple :

- `certbot`
- `Let's Encrypt`
- `acme`
- `error` / `failed`
- `elp.webglobal.me`

C’est souvent là que se trouve la cause de l’**Internal Error** (domaine non joignable, rate limit Let’s Encrypt, problème de droits, etc.).

---

## Résumé rapide

```bash
# Logs en direct (pour déboguer SSL)
docker logs nginx-proxy-manager -f --tail 200
```

Puis tentez à nouveau de sauvegarder le SSL dans NPM et regardez ce qui s’affiche dans le terminal.
