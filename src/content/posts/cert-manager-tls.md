---
slug: cert-manager-tls
title: "Automatiser le TLS avec cert-manager"
date: "2026-09-02"
tag: "SECURITY"
excerpt: "Remplacer les certificats manuels par un cycle de renouvellement observable."
---

# Automatiser le TLS avec cert-manager

Un certificat qui expire est un incident prévisible. L’automatiser ne signifie pas oublier le sujet : cela signifie rendre le cycle visible et contrôlable.

## Le cycle de vie

cert-manager demande, stocke et renouvelle les certificats selon des ressources Kubernetes déclaratives.

Le lab doit vérifier autant l’émission que le renouvellement, les erreurs DNS et les alertes. Un TLS automatique reste une brique d’exploitation.
