import { Link, useLocation } from "react-router-dom";

function renderSectionHref(pathname, href) {
  return pathname === "/" ? href : `/${href}`;
}

export default function Footer({ sectionLinks, pageLinks, contactInfo, contactMeta, footerServiceAreas }) {
  const location = useLocation();

  return (
    <>
      <footer className="site-footer">
        <div className="section-shell footer-layout">
          <div className="footer-column">
            <img className="footer-logo" src="/branding/logo-horizontal.png" alt="Ömeroğulları Nakliyat yatay logo" />
            <p className="footer-text">Kayseri'de güvenli, planlı ve profesyonel taşımacılık hizmeti.</p>
            <div className="footer-contact-list">
              <a href={`tel:+${contactInfo.callRaw}`}>{contactInfo.callDisplay}</a>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <span>{contactMeta.addressLine}</span>
              <span>{contactMeta.hours}</span>
            </div>
          </div>

          <div className="footer-column">
            <strong className="footer-heading">Sayfalar</strong>
            <div className="footer-links">
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
            </div>
          </div>

          <div className="footer-column">
            <strong className="footer-heading">Hizmet Alanı</strong>
            <div className="footer-chip-grid">
              {footerServiceAreas.map((item) => (
                <span key={item} className="footer-chip">
                  {item}
                </span>
              ))}
            </div>
            <a
              className="footer-whatsapp"
              href={`https://wa.me/${contactInfo.whatsappRaw}?text=Merhaba,%20nakliyat%20için%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ile yaz
            </a>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={`https://wa.me/${contactInfo.whatsappRaw}?text=Merhaba,%20nakliyat%20için%20teklif%20almak%20istiyorum.`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden iletişime geç"
      >
        WA
      </a>

      <div className="mobile-cta-bar">
        <a href={`tel:+${contactInfo.callRaw}`}>Ara</a>
        <a
          href={`https://wa.me/${contactInfo.whatsappRaw}?text=Merhaba,%20nakliyat%20için%20bilgi%20almak%20istiyorum.`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <a href={renderSectionHref(location.pathname, "#teklif")}>Teklif Al</a>
      </div>
    </>
  );
}
