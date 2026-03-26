export function QuoteSection({ onDetailSubmit }) {
  return (
    <section className="section-block cta-band" id="teklif">
      <div className="section-shell cta-layout">
        <div className="reveal">
          <p className="eyebrow">Teklif Alın</p>
          <h2 className="section-title">Taşınma planınızı birlikte netleştirelim</h2>
          <p className="section-text">
            Formu doldurun ya da doğrudan WhatsApp üzerinden yazın. Uygun ekip, tarih ve taşıma modelini size hızlıca iletelim.
          </p>
          <div className="quote-side-list">
            <div className="mini-info-card">
              <strong>Daha doğru fiyatlandırma</strong>
              <p>Kat, asansör ve oda bilgisi sayesinde ön teklif daha gerçekçi olur.</p>
            </div>
            <div className="mini-info-card">
              <strong>Yerel planlama avantajı</strong>
              <p>Kayseri merkez ve ilçelerde saha koşullarına göre daha net operasyon planı kurulur.</p>
            </div>
          </div>
        </div>

        <form id="detailForm" className="detail-form reveal" onSubmit={onDetailSubmit} noValidate>
          <div className="field-grid two-columns">
            <label>
              <span>Ad Soyad</span>
              <input id="fname" type="text" required />
            </label>
            <label>
              <span>Telefon</span>
              <input id="fphone" type="tel" required />
            </label>
          </div>
          <div className="field-grid two-columns">
            <label>
              <span>Nereden</span>
              <input id="ffrom" type="text" required />
            </label>
            <label>
              <span>Nereye</span>
              <input id="fto" type="text" required />
            </label>
          </div>
          <div className="field-grid three-columns">
            <label>
              <span>Tarih</span>
              <input id="fdate" type="date" required />
            </label>
            <label>
              <span>Konut tipi</span>
              <select id="ftype">
                <option value="">Seçiniz</option>
                <option>1+1</option>
                <option>2+1</option>
                <option>3+1</option>
                <option>4+1 ve üzeri</option>
                <option>Ofis / iş yeri</option>
              </select>
            </label>
            <label>
              <span>Hizmet türü</span>
              <select id="fservice">
                <option value="">Seçiniz</option>
                <option>Evden eve taşıma</option>
                <option>Asansörlü taşıma</option>
                <option>Şehirlerarası nakliyat</option>
                <option>Ofis taşıma</option>
                <option>Depolama</option>
              </select>
            </label>
          </div>
          <div className="field-grid three-columns">
            <label>
              <span>Çıkış katı</span>
              <input id="ffloorfrom" type="text" placeholder="Örn. 3. kat" />
            </label>
            <label>
              <span>Varış katı</span>
              <input id="ffloorto" type="text" placeholder="Örn. 2. kat" />
            </label>
            <label>
              <span>Asansör durumu</span>
              <select id="felevator">
                <option value="">Seçiniz</option>
                <option>Her iki adreste var</option>
                <option>Sadece çıkışta var</option>
                <option>Sadece varışta var</option>
                <option>Yok</option>
              </select>
            </label>
          </div>
          <div className="field-grid two-columns">
            <label>
              <span>Oda sayısı</span>
              <select id="frooms">
                <option value="">Seçiniz</option>
                <option>1+1</option>
                <option>2+1</option>
                <option>3+1</option>
                <option>4+1</option>
                <option>5+1 ve üzeri</option>
                <option>Ofis / parça eşya</option>
              </select>
            </label>
            <label>
              <span>Geri dönüş tercihi</span>
              <select id="fcallback">
                <option value="">Seçiniz</option>
                <option>Telefon ile aranmak istiyorum</option>
                <option>WhatsApp üzerinden yazılsın</option>
                <option>Fark etmez</option>
              </select>
            </label>
          </div>
          <label>
            <span>Ek not</span>
            <textarea id="fnote" rows="4" placeholder="Kat bilgisi, asansör durumu, eşya yoğunluğu gibi detayları yazabilirsiniz." />
          </label>
          <button className="btn btn-primary btn-full" type="submit">
            Teklifi WhatsApp'ta Hazırla
          </button>
        </form>
      </div>
    </section>
  );
}

export function ContactSection({ contactInfo, contactMeta, footerServiceAreas }) {
  return (
    <section className="section-block contact-block" id="iletisim">
      <div className="section-shell contact-layout">
        <div className="contact-copy reveal">
          <p className="eyebrow">İletişim</p>
          <h2 className="section-title">Bize en hızlı şekilde ulaşın</h2>
          <p className="section-text">Kayseri merkezli hizmet veriyoruz. Hızlı teklif, keşif ve planlama için bize hemen ulaşabilirsiniz.</p>
          <div className="contact-list">
            <a href={`tel:+${contactInfo.callRaw}`}>Telefon: {contactInfo.callDisplay}</a>
            <a href={`mailto:${contactInfo.email}`}>E-posta: {contactInfo.email}</a>
            <span>Adres: {contactInfo.address}</span>
            <span>Çalışma saatleri: {contactMeta.hours}</span>
            <span>Hizmet alanı: {contactMeta.serviceRadius}</span>
          </div>
          <div className="chip-grid">
            {footerServiceAreas.map((item) => (
              <span key={item} className="chip-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="map-card reveal">
          <iframe
            title="Kayseri konum haritası"
            src={`https://www.google.com/maps?q=${encodeURIComponent(contactMeta.mapQuery)}&z=11&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
