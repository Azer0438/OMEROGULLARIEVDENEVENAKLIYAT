import Hero from "../components/Hero";
import {
  ConversionSection,
  FaqSection,
  LocalSeoSection,
  ProcessSection,
  ServiceAreaSection,
  ServicesSection,
  TestimonialsSection,
  TrustStrip,
  WhyUsSection
} from "../components/Sections";
import { ContactSection, QuoteSection } from "../components/QuoteAndContact";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

function PreviewSection({ title, description, items, linkBase, linkLabel }) {
  return (
    <section className="section-block">
      <div className="section-shell">
        <p className="eyebrow reveal">Öne Çıkanlar</p>
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-text reveal">{description}</p>
        <div className="preview-grid">
          {items.map((item) => (
            <article key={item.slug} className="preview-card reveal">
              <span className="preview-tag">{item.category || item.service || item.district}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt || item.summary || item.description}</p>
              <Link to={`${linkBase}/${item.slug}`}>Detayı incele</Link>
            </article>
          ))}
        </div>
        <div className="preview-action reveal">
          <Link className="btn btn-primary" to={linkLabel.to}>
            {linkLabel.text}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage({
  contactInfo,
  contactMeta,
  trustItems,
  trustBadges,
  conversionHighlights,
  localSeoBlocks,
  serviceAreaGroups,
  footerServiceAreas,
  services,
  processSteps,
  whyUsCards,
  testimonials,
  faqs,
  blogPosts,
  seoPages,
  citySeoPages,
  onHeroSubmit,
  onDetailSubmit
}) {
  return (
    <>
      <Seo
        title="Ömeroğulları Nakliyat | Kayseri Evden Eve Taşımacılık"
        description="Kayseri merkezli Ömeroğulları Nakliyat ile evden eve taşımacılık, asansörlü taşıma, ofis taşıma ve şehirlerarası nakliyat çözümleri."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Ömeroğulları Nakliyat",
            description: "Kayseri merkezli evden eve taşımacılık, ofis taşıma, asansörlü taşıma ve şehirlerarası nakliyat hizmetleri.",
            areaServed: contactMeta.serviceRadius,
            telephone: "+90 505 081 0238",
            email: contactInfo.email,
            openingHours: contactMeta.hoursIso,
            address: {
              "@type": "PostalAddress",
              streetAddress: contactMeta.addressLine,
              addressLocality: contactMeta.city,
              addressCountry: "TR"
            },
            url: "https://omerogullarinakliyat.com.tr"
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer
              }
            }))
          }
        ]}
      />
      <Hero contactInfo={contactInfo} onHeroSubmit={onHeroSubmit} />
      <TrustStrip items={trustItems} />
      <ConversionSection highlights={conversionHighlights} />
      <ServicesSection services={services} />
      <LocalSeoSection blocks={localSeoBlocks} badges={trustBadges} />
      <ProcessSection steps={processSteps} />
      <WhyUsSection cards={whyUsCards} />
      <ServiceAreaSection groups={serviceAreaGroups} />
      <TestimonialsSection testimonials={testimonials} />
      <PreviewSection
        title="Nakliyat rehberleri ve güncel içerikler"
        description="Taşınma planlaması, hizmet seçimi ve uzun yol operasyonları için hazırladığımız rehber yazıları inceleyin."
        items={blogPosts}
        linkBase="/blog"
        linkLabel={{ to: "/blog", text: "Tüm Blog Yazıları" }}
      />
      <PreviewSection
        title="Kayseri ilçelerine özel hizmet sayfaları"
        description="İlçe ve hizmet türüne göre hazırlanmış SEO odaklı sayfalarda bölgesel taşıma ihtiyaçlarını daha net inceleyin."
        items={seoPages}
        linkBase="/bolgeler"
        linkLabel={{ to: "/bolgeler", text: "Tüm Hizmet Bölgeleri" }}
      />
      <PreviewSection
        title="Şehirlerarası hatlara özel SEO sayfaları"
        description="Kayseri dışı şehirler için hazırlanan nakliyat sayfalarında rota bazlı ihtiyaçları inceleyin."
        items={citySeoPages}
        linkBase="/sehirler"
        linkLabel={{ to: "/sehirler", text: "Tüm Şehirlerarası Sayfalar" }}
      />
      <FaqSection faqs={faqs} />
      <QuoteSection onDetailSubmit={onDetailSubmit} />
      <ContactSection contactInfo={contactInfo} contactMeta={contactMeta} footerServiceAreas={footerServiceAreas} />
    </>
  );
}
