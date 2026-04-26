export function TrustStrip({ items }) {
  return (
    <section className="trust-strip">
      <div className="section-shell trust-grid">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </section>
  );
}

export function ServicesSection({ services }) {
  return (
    <section className="section-block" id="hizmetler">
      <div className="section-shell">
        <p className="eyebrow reveal">Hizmetler</p>
        <h2 className="section-title reveal">Taşınmanın her adımı için tek ekip, net çözüm</h2>
        <p className="section-text reveal">
          Sadece taşıma değil, ön hazırlık, paketleme, indirme-bindirme, yerleştirme ve operasyon planlamasını birlikte yönetiyoruz.
        </p>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card reveal">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ steps }) {
  return (
    <section className="section-block section-dark" id="surec">
      <div className="section-shell">
        <p className="eyebrow reveal">Nasıl Çalışıyoruz?</p>
        <h2 className="section-title reveal">Taşınma gününü şansa bırakmayan çalışma düzeni</h2>
        <div className="process-grid">
          {steps.map((step) => (
            <article key={step.number} className="process-card reveal">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUsSection({ cards }) {
  return (
    <section className="section-block" id="neden-biz">
      <div className="section-shell split-layout">
        <div className="reveal">
          <p className="eyebrow">Neden Biz?</p>
          <h2 className="section-title">Sadece taşıyan değil, süreci yöneten bir ekip</h2>
          <p className="section-text">
            Nakliyatta güven; doğru ekipman, deneyimli personel ve açık iletişimle oluşur. Ömeroğulları Nakliyat olarak bu üç alanı birlikte yönetiyoruz.
          </p>
        </div>

        <div className="feature-stack">
          {cards.map((card) => (
            <article key={card.title} className="feature-card reveal">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalPartnerSection() {
  return (
    <section className="section-block local-partner-section">
      <div className="section-shell local-partner-card reveal">
        <div>
          <p className="eyebrow">Yerel Çözüm Ağı</p>
          <h2>Kayseri'de farklı taşıma ihtiyaçları için güvenilir bağlantı</h2>
          <p>
            Kayseri'de ev taşıma, şehirlerarası nakliyat veya asansörlü taşıma araştıran ziyaretçilerimiz,
            yerel çözüm seçeneklerini karşılaştırmak için{" "}
            <a
              href="https://www.azrevdenevenakliyat.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              title="AZR Evden Eve Nakliyat Kayseri hizmetlerini incele"
            >
              AZR Evden Eve Nakliyat
            </a>{" "}
            hizmetlerini de inceleyebilir.
          </p>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ testimonials }) {
  return (
    <section className="section-block section-soft" id="yorumlar">
      <div className="section-shell">
        <p className="eyebrow reveal">Müşteri Yorumu</p>
        <h2 className="section-title reveal">Memnuniyet, en güçlü referansımız</h2>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card reveal">
              <p>"{item.quote}"</p>
              <strong>{item.name}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConversionSection({ highlights }) {
  return (
    <section className="section-block section-soft">
      <div className="section-shell">
        <p className="eyebrow reveal">Teklif Avantajı</p>
        <h2 className="section-title reveal">Formu dolduran ziyaretçi ne kazanıyor?</h2>
        <div className="service-grid">
          {highlights.map((item) => (
            <article key={item.title} className="service-card reveal">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalSeoSection({ blocks, badges }) {
  return (
    <section className="section-block">
      <div className="section-shell">
        <p className="eyebrow reveal">Yerel SEO</p>
        <h2 className="section-title reveal">Kayseri odaklı güçlü yerel sinyaller</h2>
        <p className="section-text reveal">
          Site yapısı hem kullanıcıya doğru hizmet sayfasını gösteriyor hem de arama motorlarına hizmet bölgelerini ve hizmet türlerini daha açık anlatıyor.
        </p>
        <div className="detail-layout">
          {blocks.map((item) => (
            <article key={item.title} className="detail-card reveal">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="badge-cloud reveal">
          {badges.map((item) => (
            <span key={item} className="preview-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaSection({ groups }) {
  return (
    <section className="section-block section-soft">
      <div className="section-shell">
        <p className="eyebrow reveal">Hizmet Alanı</p>
        <h2 className="section-title reveal">Kayseri'den rota bazlı taşıma ağı</h2>
        <div className="preview-grid">
          {groups.map((group) => (
            <article key={group.title} className="preview-card reveal">
              <h3>{group.title}</h3>
              <div className="chip-grid">
                {group.items.map((item) => (
                  <span key={item} className="chip-item">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ faqs }) {
  return (
    <section className="section-block" id="sss">
      <div className="section-shell">
        <p className="eyebrow reveal">Sık Sorulanlar</p>
        <h2 className="section-title reveal">Karar vermeden önce en çok merak edilenler</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item reveal">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
