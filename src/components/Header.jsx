import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function renderSectionHref(pathname, href) {
  return pathname === "/" ? href : `/${href}`;
}

export default function Header({ sectionLinks, pageLinks, mobileMenuOpen, onToggleMenu, onCloseMenu, scrolled }) {
  const location = useLocation();

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
        <Link to="/" className="brand" aria-label="Ömeroğulları Nakliyat ana sayfa">
          <span className="brand-mark image-brand-mark">
            <img src="/branding/favicon.png" alt="Ömeroğulları Nakliyat favicon" />
          </span>
          <span className="brand-text">
            <span className="brand-title">Ömeroğulları Nakliyat</span>
            <span className="brand-subtitle">Kayseri Evden Eve Taşımacılık</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Ana menü">
          {sectionLinks.map((link) => (
            <a key={link.href} href={renderSectionHref(location.pathname, link.href)}>
              {link.label}
            </a>
          ))}
          {pageLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
          <a href={renderSectionHref(location.pathname, "#teklif")} className="nav-cta">
            Teklif Al
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobileMenu"
          aria-label="Menüyü aç"
          onClick={onToggleMenu}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`} id="mobileMenu" aria-label="Mobil menü">
        {sectionLinks.map((link) => (
          <a key={link.href} href={renderSectionHref(location.pathname, link.href)} onClick={onCloseMenu}>
            {link.label}
          </a>
        ))}
        {pageLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={onCloseMenu}>
            {link.label}
          </Link>
        ))}
        <a href={renderSectionHref(location.pathname, "#teklif")} className="mobile-menu-cta" onClick={onCloseMenu}>
          Hızlı Teklif Al
        </a>
      </div>
    </>
  );
}
