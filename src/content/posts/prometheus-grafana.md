---
slug: prometheus-grafana
title: "Mettre en place une première stack Prometheus + Grafana"
date: "2026-09-08"
tag: "OBSERVABILITY"
excerpt: "Passer de métriques dispersées à une première vue exploitable de son infrastructure."
---

# Mettre en place une première stack Prometheus + Grafana

Observer un système commence par savoir quelles questions on veut pouvoir poser quand il ralentit ou tombe.

## Les premiers signaux

CPU, mémoire, espace disque et disponibilité sont de bons points de départ. L’objectif n’est pas d’empiler des dashboards, mais de relier chaque métrique à une décision opérationnelle.

## Le rôle de Grafana

Grafana transforme les séries temporelles en contexte. Un dashboard utile montre une tendance, un seuil et une action possible.

La suite sera d’ajouter Loki pour rapprocher les métriques des logs et comprendre les causes plutôt que les seuls symptômes.
