import { Link, Navigate, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { contactInfo } from "../data/siteData";

export default function RegionDetailPage({ seoPages, listPath, buttonLabel }) {
  const { slug } = useParams();
  const page = seoPages.find((item) => item.slug === slug);

  if (!page) {
    return <Navigate to={listPath} replace />;
  }

  return (
    <>
      <Seo
        title={page.metaTitle || `${page.title} | Ömeroğulları Nakliyat`}
        description={page.metaDescription || page.summary}
        path={`${listPath}/${page.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }}
      />
      <PageHero eyebrow={page.district} title={page.title} description={page.summary} compact />

      <section className="section-block">
        <div className="section-shell detail-layout">
          <article className="detail-card reveal">
            <h2>Bölgesel yaklaşım</h2>
            <p>{page.intro}</p>
            {page.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <article className="detail-card reveal">
            <h2>Öne çıkan avantajlar</h2>
            <div className="detail-bullets">
              {page.advantages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </div>
          </article>
        </div>
      </section>

      {page.cta ? (
        <section className="section-block">
          <div className="section-shell">
            <article className="detail-card reveal cta-inline-card">
              <span className="preview-tag">{page.focus}</span>
              <h2>{page.cta.title}</h2>
              <p>{page.cta.text}</p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={`https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(`Merhaba, ${page.title} için teklif almak istiyorum.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {page.cta.primaryLabel}
                </a>
                <a className="btn btn-secondary alt-dark" href="/#teklif">
                  Teklif formuna geç
                </a>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      {page.reference ? (
        <section className="section-block section-soft">
          <div className="section-shell">
            <article className="detail-card reveal">
              <span className="preview-tag">Mini Referans</span>
              <h2>{page.reference.title}</h2>
              <p>{page.reference.text}</p>
            </article>
          </div>
        </section>
      ) : null}

      <section className="section-block section-soft">
        <div className="section-shell faq-list">
          {page.faqs.map((item) => (
            <details key={item.question} className="faq-item reveal">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-shell preview-action reveal">
          <Link className="btn btn-primary" to={listPath}>
            {buttonLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
