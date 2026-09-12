export const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Labs', id: 'labs' },
  { label: 'Projects', id: 'projects' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
]

export const skills = [
  { number: '01', icon: 'boxes', title: 'Infrastructure', text: 'Linux, virtualization, networking, containers and reproducible environments.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=82' },
  { number: '02', icon: 'terminal', title: 'DevOps', text: 'CI/CD, automation, Git, Kubernetes and the tooling that connects it all.', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=82' },
  { number: '03', icon: 'cloud', title: 'Cloud', text: 'Cloud-native patterns, reverse proxies, TLS, observability and deployment.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=82' },
  { number: '04', icon: 'shield', title: 'Security', text: 'Hardening, monitoring, access control and security-minded infrastructure.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=82' },
]

export const projects = [
  { slug: 'k3s-homelab', tag: 'KUBERNETES', title: 'K3s homelab', text: 'A compact cloud-native lab with Traefik, Helm, cert-manager and observability.', stack: ['K3s', 'Traefik', 'Helm'], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82' },
  { slug: 'monitoring-stack', tag: 'OBSERVABILITY', title: 'Monitoring stack', text: 'Prometheus, Grafana and Loki assembled into a practical monitoring platform.', stack: ['Prometheus', 'Grafana', 'Loki'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82' },
  { slug: 'ci-cd-pipeline', tag: 'AUTOMATION', title: 'CI/CD pipeline', text: 'From Git push to container build and deployment: automate the boring parts.', stack: ['Git', 'Docker', 'CI/CD'], image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=82' },
]
