export default function Hero({ contactInfo, onHeroSubmit }) {
  return (
    <section className="hero-section" id="anasayfa">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow reveal">Kayseri'den tüm Türkiye'ye profesyonel nakliyat</p>
          <h1 className="reveal">Eşyalarınızı değil, yükünüzü üstleniyoruz.</h1>
          <p className="hero-text reveal">
            Ömeroğulları Nakliyat; ev taşıma, ofis taşıma, asansörlü nakliyat ve eşya depolama süreçlerini planlı, hızlı ve güvenli şekilde yönetir.
            Taşınma gününü stres olmaktan çıkarır, düzenli bir operasyon haline getirir.
          </p>

          <div className="hero-actions reveal">
            <a className="btn btn-primary" href="#teklif">
              Ücretsiz Teklif Al
            </a>
            <a
              className="btn btn-secondary"
              href={`https://wa.me/${contactInfo.whatsappRaw}?text=Merhaba,%20nakliyat%20için%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp'tan Yaz
            </a>
            <a className="btn btn-secondary" href={`tel:+${contactInfo.callRaw}`}>
              Hemen Ara
            </a>
          </div>

          <div className="hero-contact-strip reveal">
            <a href={`tel:+${contactInfo.callRaw}`}>{contactInfo.callDisplay}</a>
            <span>{contactInfo.email}</span>
            <span>{contactInfo.address}</span>
          </div>

          <ul className="hero-points reveal" aria-label="Güven unsurları">
            <li>Sigortalı taşıma planı</li>
            <li>Deneyimli ekip ve düzenli paketleme</li>
            <li>Şehir içi ve şehirlerarası hizmet</li>
          </ul>

          <div className="stats-grid reveal">
            <article className="stat-card">
              <strong>15+</strong>
              <span>Yıllık saha deneyimi</span>
            </article>
            <article className="stat-card">
              <strong>5000+</strong>
              <span>Tamamlanan taşıma süreci</span>
            </article>
            <article className="stat-card">
              <strong>7/24</strong>
              <span>Bilgilendirme ve destek</span>
            </article>
          </div>
        </div>

        <aside className="quote-card reveal">
          <div className="quote-badge">Aynı gün geri dönüş</div>
          <h2>Hızlı teklif formu</h2>
          <p>Bilgilerinizi bırakın, taşınma planınıza en uygun çözüm için sizi arayalım.</p>

          <form id="heroForm" className="quote-form" onSubmit={onHeroSubmit} noValidate>
            <label>
              <span>Ad Soyad</span>
              <input id="hname" name="name" type="text" placeholder="Adınız soyadınız" required />
            </label>
            <label>
              <span>Telefon</span>
              <input id="hphone" name="phone" type="tel" placeholder="05xx xxx xx xx" required />
            </label>
            <label>
              <span>Nereden alınacak?</span>
              <input id="hfrom" name="from" type="text" placeholder="Örn. Kayseri / Talas" required />
            </label>
            <label>
              <span>Nereye taşınacak?</span>
              <input id="hto" name="to" type="text" placeholder="Örn. Ankara / Çankaya" required />
            </label>
            <div className="field-grid two-columns">
              <label>
                <span>Hizmet tipi</span>
                <select id="hservice" name="service">
                  <option value="">Seçiniz</option>
                  <option>Evden eve taşıma</option>
                  <option>Asansörlü taşıma</option>
                  <option>Ofis taşıma</option>
                  <option>Şehirlerarası nakliyat</option>
                  <option>Depolama</option>
                </select>
              </label>
              <label>
                <span>Oda tipi</span>
                <select id="hrooms" name="rooms">
                  <option value="">Seçiniz</option>
                  <option>1+1</option>
                  <option>2+1</option>
                  <option>3+1</option>
                  <option>4+1 ve üzeri</option>
                  <option>Ofis / iş yeri</option>
                </select>
              </label>
            </div>
            <label>
              <span>Taşınma tarihi</span>
              <input id="hdate" name="date" type="date" />
            </label>
            <button className="btn btn-primary btn-full" type="submit">
              WhatsApp ile Gönder
            </button>
            <p className="form-footnote">Form gönderildiğinde mesajınız WhatsApp üzerinden hazır şekilde açılır.</p>
          </form>
        </aside>
      </div>
    </section>
  );
}
