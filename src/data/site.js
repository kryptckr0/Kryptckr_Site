export const navItems = [{ label: 'About', id: 'about' }, { label: 'Labs', id: 'labs' }, { label: 'Projects', id: 'projects' }, { label: 'Blog', id: 'blog' }, { label: 'Contact', id: 'contact' }]

export const skills = [
  { number: '01', icon: 'boxes', title: 'Infrastructure', text: 'Linux, virtualization, networking, containers and reproducible environments.' },
  { number: '02', icon: 'terminal', title: 'DevOps', text: 'CI/CD, automation, Git, Kubernetes and the tooling that connects it all.' },
  { number: '03', icon: 'cloud', title: 'Cloud', text: 'Cloud-native patterns, reverse proxies, TLS, observability and deployment.' },
  { number: '04', icon: 'shield', title: 'Security', text: 'Hardening, monitoring, access control and security-minded infrastructure.' },
]

export const projects = [
  { tag: 'KUBERNETES', title: 'K3s homelab', text: 'A compact cloud-native lab with Traefik, Helm, cert-manager and observability.', stack: ['K3s', 'Traefik', 'Helm'] },
  { tag: 'OBSERVABILITY', title: 'Monitoring stack', text: 'Prometheus, Grafana and Loki assembled into a practical monitoring platform.', stack: ['Prometheus', 'Grafana', 'Loki'] },
  { tag: 'AUTOMATION', title: 'CI/CD pipeline', text: 'From Git push to container build and deployment: automate the boring parts.', stack: ['Git', 'Docker', 'CI/CD'] },
]
