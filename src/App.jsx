import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Github, Menu, X } from 'lucide-react'
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
  return <div className="site">
    <div className="grid-bg" />
    <header className="nav">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>KRYPT<span>CKR</span></Link>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, path]) => <Link key={path} to={path} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
      <a className="github" href="https://github.com/kryptckr0" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
    </header>
    <main><Routes>
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
