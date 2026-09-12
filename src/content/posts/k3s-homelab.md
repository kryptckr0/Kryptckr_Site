---
slug: k3s-homelab
title: "Mon premier cluster K3s : de zéro à l’ingress"
date: "2026-09-12"
tag: "KUBERNETES"
excerpt: "Les premières briques d’un homelab cloud-native : cluster, service et ingress."
---

# Mon premier cluster K3s : de zéro à l’ingress

Un homelab utile commence par une question simple : **qu’est-ce que je veux comprendre en construisant ce système ?**

Pour ce premier lab, l’objectif est de suivre le trajet complet d’une application :

```text
workload → service → ingress → TLS → observabilité
```

## Pourquoi K3s ?

K3s permet de travailler avec les primitives Kubernetes sans commencer par une plateforme trop lourde. Le but n’est pas de reproduire immédiatement une production, mais de disposer d’un environnement assez réaliste pour apprendre :

- déployer un workload ;
- exposer un service ;
- comprendre le rôle d’un ingress controller ;
- observer ce qui se passe quand quelque chose casse.

## La première boucle

La méthode Kryptckr reste la même : **build, break, understand, secure, automate**. Chaque changement doit être reproductible et documenté, même lorsqu’il commence par une commande lancée à la main.

La prochaine étape sera d’ajouter Traefik, cert-manager et un premier dashboard de métriques.
