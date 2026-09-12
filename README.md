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
| Containerisation | Docker |
| Web server | Nginx |
| CI | GitHub Actions |
| Versioning | Git / GitHub |

## 🗺️ Architecture du site

```text
Kryptckr_Site/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── components/
│   │   ├── ProjectCard.jsx
│   │   ├── SectionLabel.jsx
│   │   └── SkillCard.jsx
│   ├── data/
│   │   └── site.js
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

L'architecture évoluera vers une organisation par pages, composants réutilisables et contenu technique indépendant du code de présentation.

## 🚀 Lancer le projet en local

### Prérequis

- Node.js 22+
- npm
- Git

### Installation

```bash
git clone https://github.com/kryptckr0/Kryptckr_Site.git
cd Kryptckr_Site
npm install
```

### Développement

```bash
npm run dev
```

Vite affiche ensuite l'URL locale du serveur de développement.

### Build de production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

## 🐳 Docker

Le projet peut être construit comme une image de production servie par Nginx :

```bash
docker build -t kryptckr-site .
docker run --rm -p 8080:80 kryptckr-site
```

Le site est alors accessible sur `http://localhost:8080`.

> Le Dockerfile utilise actuellement `npm install`/`npm ci` selon l'état du lockfile. Dès qu'un `package-lock.json` sera versionné, le pipeline pourra être durci autour de `npm ci` pour obtenir des installations reproductibles.

## ⚙️ CI/CD

Le workflow GitHub Actions situé dans `.github/workflows/ci.yml` s'exécute sur les push et pull requests vers `main`.

Pipeline actuel :

```text
Git push / Pull Request
        │
        ▼
GitHub Actions
        │
        ├── Checkout
        ├── Setup Node 22
        ├── npm install
        └── npm run build
```

La prochaine étape est de faire évoluer ce pipeline vers une chaîne complète :

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
   ▼
Kubernetes / K3s
```

## 🔬 Labs prévus

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

Le blog aura pour vocation de documenter les problèmes rencontrés et les solutions mises en œuvre, avec une approche orientée terrain :

- Kubernetes & cloud-native
- Linux & infrastructure
- Docker & conteneurs
- CI/CD
- Observabilité
- Réseau
- Cybersécurité
- Retours d'expérimentation

Chaque article devra privilégier les commandes, architectures, erreurs rencontrées et enseignements plutôt qu'un simple contenu théorique.

## 🧭 Roadmap

### Phase 1 — Foundation

- [x] Initialiser le projet React / Vite
- [x] Créer l'identité visuelle Kryptckr
- [x] Structurer les données du site
- [x] Ajouter les sections principales
- [x] Ajouter Docker + Nginx
- [x] Ajouter GitHub Actions

### Phase 2 — Site engineering

- [ ] Ajouter un vrai routing
- [ ] Créer les pages About / Labs / Projects / Blog / Contact
- [ ] Créer les pages détaillées des projets
- [ ] Ajouter les articles Markdown
- [ ] Ajouter SEO et métadonnées
- [ ] Ajouter favicon / identité graphique Kryptckr
- [ ] Améliorer les animations et interactions

### Phase 3 — DevOps

- [ ] Ajouter Docker Compose
- [ ] Publier l'image dans un registry
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

Le dépôt évolue progressivement avec l'apprentissage, les labs et les expérimentations. Certaines briques de la roadmap sont volontairement laissées ouvertes afin que le site reflète la progression réelle du projet.

## 🔗 Repository

GitHub : https://github.com/kryptckr0/Kryptckr_Site

---

© 2026 Kryptckr — Technical Lab / Infrastructure / DevOps