---
slug: docker-nginx-react
title: "Déployer une application React avec Docker et Nginx"
date: "2026-09-10"
tag: "CONTAINERS"
excerpt: "Passer d’un build Vite à une image de production servie par Nginx."
---

# Déployer une application React avec Docker et Nginx

Une application frontend ne s’arrête pas au `npm run build`. Il faut aussi produire une image légère, servir les fichiers statiques et gérer correctement les routes côté client.

## Le principe

Le build est réalisé dans une première étape Node, puis les artefacts sont copiés dans une image Nginx. Cette séparation évite d’embarquer les dépendances de développement dans l’image finale.

```text
source → build Vite → artefacts statiques → Nginx
```

## Le point d’attention : le routing

Avec React Router, Nginx doit renvoyer les routes inconnues vers `index.html`. Sans cette règle, un rechargement direct de `/projects` peut retourner une erreur 404 alors que la navigation interne fonctionne.

Cette petite différence entre développement et production est exactement le type de détail qu’un pipeline doit rendre visible tôt.
