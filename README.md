# KRYPTCKR

> **BUILD. BREAK. SECURE. AUTOMATE.**

Kryptckr est mon portfolio technique et mon laboratoire public autour de l'infrastructure, du DevOps, du cloud, de l'observabilité et de la cybersécurité.

L'objectif n'est pas simplement de présenter des compétences : le site sert lui-même de terrain d'expérimentation. Code, conteneurisation, CI/CD, déploiement et documentation font partie du projet.

## 🎯 Objectifs

- Construire une identité technique personnelle autour de Kryptckr
- Documenter mes labs, projets et expérimentations
- Montrer une progression concrète de l'IT support vers l'Ops / DevOps
- Expérimenter les pratiques cloud-native et Infrastructure as Code
- Publier progressivement des articles techniques
- Transformer le site en projet DevOps de bout en bout

## 🧱 Stack actuelle

| Domaine | Technologie |
|---|---|
| Frontend | React + Vite |
| UI | CSS custom + Lucide React |
| Langage | JavaScript / JSX |
| Routing | React Router |
| Containerisation | Docker |
| Web server | Nginx |
| CI | GitHub Actions |
| Versioning | Git / GitHub |

## 🗺️ Architecture du site

```text
Kryptckr_Site/
├── .github/workflows/ci.yml
├── src/
│   ├── components/
│   │   ├── ProjectCard.jsx
│   │   ├── SectionLabel.jsx
│   │   └── SkillCard.jsx
│   ├── data/site.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Labs.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── nginx.conf
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Le site utilise maintenant un routing client avec des pages dédiées. Les projets disposent également de routes de détail réutilisables.

## 🧭 Routes

| Route | Rôle |
|---|---|
| `/` | Accueil / présentation |
| `/about` | Profil et approche |
| `/labs` | Laboratoire technique |
| `/projects` | Liste des projets |
| `/projects/:slug` | Détail d'un projet |
| `/blog` | Notes et articles techniques |
| `/contact` | Canaux de contact |

## 🚀 Lancer le projet en local

### Prérequis

- Node.js 22+
- npm
- Git

### Installation

```bash
git clone https://github.com/kryptckr0/Kryptckr_Site.git
cd Kryptckr_Site
npm ci
```

### Développement

```bash
npm run dev
```

### Build de production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

### Docker Compose

Pour construire et lancer le site avec Docker Compose :

```bash
docker compose up --build
```

Le site est alors accessible sur `http://localhost:8080`. Pour utiliser un autre port
si `8080` est déjà occupé :

```bash
SITE_PORT=8081 docker compose up --build
```

Arrêter les conteneurs :

```bash
docker compose down
```

## 🐳 Docker

Le projet peut être construit comme une image de production servie par Nginx :

```bash
docker build -t kryptckr-site .
docker run --rm -p 8080:80 kryptckr-site
```

Le site est alors accessible sur `http://localhost:8080`.

Le Dockerfile utilise `npm ci` avec le lockfile versionné afin de garantir des installations reproductibles.

Après une fusion dans `main`, la CI publie automatiquement l'image dans GitHub Container
Registry :

```text
ghcr.io/kryptckr0/kryptckr-site:latest
```

L'image est publiée pour les architectures `linux/amd64` et `linux/arm64`.

Pour la télécharger :

```bash
docker pull ghcr.io/kryptckr0/kryptckr-site:latest
```

## ⚙️ CI/CD

Le workflow GitHub Actions situé dans `.github/workflows/ci.yml` s'exécute sur chaque
push de branche et sur les pull requests vers `main`.

Pipeline actuel :

```text
Git push / Pull Request
        │
        ▼
GitHub Actions
        │
        ├── Checkout
        ├── Setup Node 22
        ├── npm ci
        ├── Lint
        ├── Tests contenu
        └── npm run build
        └── Build image Docker
        └── Publication GHCR (main uniquement)
```

Cible de la chaîne de delivery :

```text
Git push
   │
   ▼
Test / Lint
   │
   ▼
Build React
   │
   ▼
Build image Docker
   │
   ▼
Registry
   │
   ▼
Déploiement
   │
   ├── VPS + Docker Compose (prochaine étape)
   └── Kubernetes / K3s (évolution prévue)
```

### État actuel

- **Release GitHub** : `v0.3.0`
- **CI** : lint, tests, build Vite et build Docker validés sur `main`
- **Registry** : image publiée sur GHCR
- **Architectures** : `linux/amd64` et `linux/arm64`
- **Déploiement public** : à réaliser sur un VPS

### Déploiement VPS prévu

Le VPS sera la prochaine cible de déploiement. Il devra disposer d'une IP publique et
des ports `80` et `443` accessibles. La procédure prévue est :

```text
VPS Ubuntu
   ↓
Docker + Docker Compose
   ↓
Image GHCR
   ↓
Reverse proxy HTTPS
   ↓
Domaine Kryptckr
```

Une fois le VPS prêt, le déploiement utilisera l'image publiée :

```bash
docker pull ghcr.io/kryptckr0/kryptckr-site:latest
docker compose pull
docker compose up -d
```

Le domaine, le reverse proxy et HTTPS ne sont pas encore configurés.

## 🔬 Labs

Le site documentera progressivement plusieurs environnements et expérimentations :

- **Kubernetes / K3s** — déploiements, namespaces, services, ingress et Helm
- **Traefik** — reverse proxy et ingress controller
- **cert-manager** — automatisation des certificats TLS
- **Prometheus / Grafana** — métriques et dashboards
- **Loki** — centralisation des logs
- **Docker** — images, réseaux, volumes et bonnes pratiques
- **Proxmox** — virtualisation et infrastructure de lab
- **Linux** — administration, services, réseau et hardening
- **CI/CD** — automatisation des builds et déploiements
- **Infrastructure as Code** — Terraform / Ansible à mesure de leur intégration dans le lab

## 📚 Blog technique

Le blog documentera les problèmes rencontrés et les solutions mises en œuvre, avec une approche orientée terrain : commandes, architectures, erreurs, diagnostics et enseignements.

Thèmes prévus :

- Kubernetes & cloud-native
- Linux & infrastructure
- Docker & conteneurs
- CI/CD
- Observabilité
- Réseau
- Cybersécurité
- Retours d'expérimentation

## 🧭 Roadmap

### Phase 1 — Foundation

- [x] Initialiser React / Vite
- [x] Créer l'identité visuelle Kryptckr
- [x] Structurer les données du site
- [x] Ajouter les sections principales
- [x] Ajouter Docker + Nginx
- [x] Ajouter GitHub Actions

### Phase 2 — Site engineering

- [x] Ajouter un vrai routing
- [x] Créer About / Labs / Projects / Blog / Contact
- [x] Créer les pages détaillées des projets
- [x] Ajouter les articles Markdown
- [x] Ajouter SEO et métadonnées
- [x] Ajouter favicon / identité graphique Kryptckr
- [x] Améliorer les animations et interactions
- [x] Ajouter une page Now / Status

### Phase 3 — DevOps

- [x] Ajouter Docker Compose
- [x] Rendre l'installation reproductible avec `package-lock.json` et `npm ci`
- [x] Ajouter lint, tests de contenu et build Docker dans la CI
- [x] Publier l'image dans GitHub Container Registry
- [x] Publier une image multi-architecture (`amd64` / `arm64`)
- [x] Créer la release GitHub `v0.3.0`
- [ ] Déployer le site sur un environnement de lab
- [ ] Ajouter HTTPS automatisé
- [ ] Ajouter monitoring et logs
- [ ] Ajouter une stratégie de déploiement automatisée

### Phase 4 — Production

- [ ] Domaine Kryptckr
- [ ] Déploiement Kubernetes / K3s
- [ ] Traefik
- [ ] cert-manager / Let's Encrypt
- [ ] Prometheus / Grafana
- [ ] Loki
- [ ] Alerting
- [ ] Documentation de l'architecture complète

## 🛡️ Philosophie

Kryptckr suit une approche simple :

```text
BUILD
  ↓
BREAK
  ↓
UNDERSTAND
  ↓
SECURE
  ↓
AUTOMATE
  ↓
OBSERVE
  ↓
IMPROVE
```

Un système intéressant n'est pas seulement un système qui fonctionne. C'est un système que l'on peut comprendre, observer, sécuriser, reproduire et faire évoluer.

## 📌 Statut

**Projet actif — construction en cours.**

Le dépôt évolue progressivement avec l'apprentissage, les labs et les expérimentations. Certaines briques de la roadmap restent volontairement ouvertes afin que le site reflète la progression réelle du projet.

## 🔗 Repository

GitHub : https://github.com/kryptckr0/Kryptckr_Site

---

© 2026 Kryptckr — Technical Lab / Infrastructure / DevOps
