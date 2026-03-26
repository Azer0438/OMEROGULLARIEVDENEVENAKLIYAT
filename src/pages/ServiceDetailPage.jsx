import { Link, Navigate, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { contactInfo } from "../data/siteData";

export default function ServiceDetailPage({ services }) {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/hizmetler" replace />;
  }

  return (
    <>
      <Seo
        title={service.metaTitle || `${service.title} | Ömeroğulları Nakliyat`}
        description={service.metaDescription || service.summary}
        path={`/hizmetler/${service.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }}
      />
      <PageHero eyebrow="Hizmet Detayı" title={service.title} description={service.hero} />

      <section className="section-block">
        <div className="section-shell detail-layout">
          <article className="detail-card reveal">
            <h2>Bu hizmet kimler için uygun?</h2>
            <p>{service.summary}</p>
            {service.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="detail-bullets">
              {service.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </div>
          </article>

          <article className="detail-card reveal">
            <h2>Hizmete dahil başlıklar</h2>
            <div className="detail-bullets">
              {service.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </div>
          </article>
        </div>
      </section>

      {service.cta ? (
        <section className="section-block">
          <div className="section-shell">
            <article className="detail-card reveal cta-inline-card">
              <span className="preview-tag">Hizmet CTA</span>
              <h2>{service.cta.title}</h2>
              <p>{service.cta.text}</p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={`https://wa.me/${contactInfo.whatsappRaw}?text=${encodeURIComponent(`Merhaba, ${service.title} hakkında bilgi ve teklif almak istiyorum.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {service.cta.primaryLabel}
                </a>
                <a className="btn btn-secondary alt-dark" href="/#teklif">
                  Teklif formuna git
                </a>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      <section className="section-block section-soft">
        <div className="section-shell faq-list">
          {service.faqs.map((item) => (
            <details key={item.question} className="faq-item reveal">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-shell preview-action reveal">
          <Link className="btn btn-primary" to="/hizmetler">
            Tüm hizmetlere dön
          </Link>
        </div>
      </section>
    </>
  );
}
