---
slug: traefik-ingress
title: "Traefik : comprendre le rôle d’un ingress controller"
date: "2026-09-04"
tag: "NETWORKING"
excerpt: "Faire le lien entre une URL publique, un service Kubernetes et une application."
---

# Traefik : comprendre le rôle d’un ingress controller

Un service Kubernetes peut fonctionner parfaitement sans être accessible depuis l’extérieur. L’ingress controller devient alors le point de rencontre entre réseau et application.

## Du host au service

Traefik reçoit la requête, lit les règles d’Ingress puis la transmet au bon service. Cette chaîne mérite d’être comprise avant d’être automatisée.

Les erreurs de routage sont souvent des erreurs de contrat : mauvais host, mauvais port ou mauvais namespace. Les rendre visibles fait partie du lab.
