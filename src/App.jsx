import { useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { GitBranch, Menu, X } from 'lucide-react'
import Home from './pages/Home'
import About from './pages/About'
import Labs from './pages/Labs'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const links = [['About', '/about'], ['Labs', '/labs'], ['Projects', '/projects'], ['Blog', '/blog'], ['Contact', '/contact']]

function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  return <div className="site">
    <div className="grid-bg" />
    <header className={open ? 'nav nav-open' : 'nav'}>
      <Link className="brand" to="/" onClick={() => setOpen(false)}>KRYPT<span>CKR</span></Link>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{links.map(([label, path]) => <NavLink key={path} className={({ isActive }) => isActive ? 'active' : undefined} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>
      <a className="github" href="https://github.com/kryptckr0" target="_blank" rel="noreferrer"><GitBranch size={17}/> GitHub</a>
    </header>
    <main className="page-transition" key={location.pathname}><Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/labs" element={<Labs/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/projects/:slug" element={<ProjectDetail/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes></main>
    <footer><span>© 2026 KRYPTCKR</span><span>BUILT WITH REACT + VITE</span><span>NO MATRIX. JUST SYSTEMS.</span></footer>
  </div>
}

export default function App() {
  return <BrowserRouter><Layout/></BrowserRouter>
}
