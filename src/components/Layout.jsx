import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="brand-link" onClick={close}><Logo /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
        <nav className={open ? 'main-nav open' : 'main-nav'}>
          <NavLink to="/8am" onClick={close}>8AM</NavLink>
          <NavLink to="/architect" onClick={close}>Architect</NavLink>
          <a href="/#ecosystem" onClick={close}>Products</a>
          <a href="/#how" onClick={close}>How it works</a>
          <NavLink className="nav-cta" to="/contact" onClick={close}>Join early access</NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div><Logo /><p>Intelligence for the way work gets done.</p></div>
        <div className="footer-links"><Link to="/8am">BlueForge 8AM</Link><Link to="/architect">Architect</Link><Link to="/contact">Contact</Link></div>
        <p className="copyright">© 2026 BlueForge Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
