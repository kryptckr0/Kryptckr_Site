import { useEffect, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { GitBranch, Menu, Moon, Sun, X } from 'lucide-react'
import Home from './pages/Home'
import About from './pages/About'
import Labs from './pages/Labs'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Now from './pages/Now'

const links = [['About', '/about'], ['Labs', '/labs'], ['Projects', '/projects'], ['Blog', '/blog'], ['Now', '/now'], ['Contact', '/contact']]

const pageTitles = {
  '/': 'Kryptckr — Build. Break. Secure. Automate.',
  '/about': 'About — Kryptckr',
  '/labs': 'Labs — Kryptckr',
  '/projects': 'Projects — Kryptckr',
  '/blog': 'Field Notes — Kryptckr',
  '/now': 'Now / Status — Kryptckr',
  '/contact': 'Contact — Kryptckr',
}

function Layout() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const location = useLocation()
  useEffect(() => {
    const saved = localStorage.getItem('kryptckr-theme')
    const preferred = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(preferred)
  }, [])
  useEffect(() => {
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('kryptckr-theme', theme)
  }, [theme])
  useEffect(() => {
    document.title = pageTitles[location.pathname] || (location.pathname.startsWith('/projects/') ? 'Project detail — Kryptckr' : location.pathname.startsWith('/blog/') ? 'Field Note — Kryptckr' : 'Kryptckr')
  }, [location.pathname])
  return <div className={`site ${theme === 'light' ? 'light' : ''}`}>
    <div className="grid-bg" />
    <header className={open ? 'nav nav-open' : 'nav'}>
      <Link className="brand" to="/" onClick={() => setOpen(false)}><i className="tricolor-mark" aria-hidden="true"/>KRYPT<span>CKR</span></Link>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{links.map(([label, path]) => <NavLink key={path} className={({ isActive }) => isActive ? 'active' : undefined} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>
      <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Activer le mode ${theme === 'dark' ? 'clair' : 'sombre'}`} title={`Mode ${theme === 'dark' ? 'clair' : 'sombre'}`}>
        {theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}
        <span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
      </button>
      <a className="github" href="https://github.com/kryptckr0" target="_blank" rel="noreferrer"><GitBranch size={17}/> GitHub</a>
    </header>
    <main className="page-transition" key={location.pathname}><Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/labs" element={<Labs/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/projects/:slug" element={<ProjectDetail/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:slug" element={<BlogPost/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/now" element={<Now/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes></main>
    <footer><span>© 2026 KRYPTCKR</span><span>BUILT WITH REACT + VITE</span><span>NO MATRIX. JUST SYSTEMS.</span></footer>
  </div>
}

export default function App() {
  return <BrowserRouter><Layout/></BrowserRouter>
}
