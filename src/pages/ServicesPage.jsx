import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";

export default function ServicesPage({ services }) {
  return (
    <>
      <Seo
        title="Ömeroğulları Nakliyat | Hizmetler"
        description="Evden eve, ofis taşıma, asansörlü nakliyat, depolama ve şehirlerarası hizmet detayları."
        path="/hizmetler"
      />
      <PageHero
        eyebrow="Hizmetler"
        title="Taşınmanın her aşamasına uygun profesyonel çözümler"
        description="İhtiyacınıza göre doğru hizmet modelini seçebilmeniz için tüm taşıma başlıklarını detaylı şekilde bir araya getirdik."
      />
      <section className="section-block">
        <div className="section-shell service-list-grid">
          {services.map((service) => (
            <article key={service.slug} className="preview-card reveal">
              <span className="preview-tag">Hizmet</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="detail-bullets">
                {service.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <Link to={`/hizmetler/${service.slug}`}>Hizmet detayını aç</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
