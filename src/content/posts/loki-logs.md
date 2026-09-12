---
slug: loki-logs
title: "Centraliser ses logs avec Loki"
date: "2026-09-06"
tag: "OBSERVABILITY"
excerpt: "Construire une recherche de logs simple pour diagnostiquer plus vite les incidents."
---

# Centraliser ses logs avec Loki

Les logs sont souvent le premier endroit où l’on cherche une explication. Sans structure ni contexte, ils deviennent pourtant difficiles à exploiter.

## Collecter avant d’optimiser

Un premier pipeline doit répondre à trois questions : d’où vient le log, quand a-t-il été produit et quel service est concerné ?

Loki permet de conserver une approche légère en indexant les labels plutôt que tout le contenu. Cela oblige à choisir une nomenclature utile dès le départ.

La prochaine étape consiste à corréler un pic de latence, une métrique et les logs associés.
