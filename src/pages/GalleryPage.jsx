import PageHero from "../components/PageHero";
import Seo from "../components/Seo";

const galleryImageMap = {
  "asansorlu-yuksek-kat-operasyonu": "/images/galeri-paketleme-1.webp",
  "duzenli-ofis-tasima": "/images/galeri-paketleme-2.jpg",
  "paketleme-ve-koruma": "/images/galeri-paketleme-3.jpeg",
  "sehirlerarasi-yukleme": "/images/galeri-paketleme-4.jpg",
  "villa-tasima-duzeni": "/images/galeri-paketleme-5.jpg",
  "depolama-hazirligi": "/images/galeri-paketleme-6.jpg"
};

export default function GalleryPage({ galleryItems }) {
  return (
    <>
      <Seo
        title="Ömeroğulları Nakliyat | Galeri"
        description="Operasyon türleri, çalışma düzeni ve taşıma senaryolarını gösteren galeri bölümü."
        path="/galeri"
      />
      <PageHero
        eyebrow="Galeri"
        title="Saha düzenimizi anlatan çalışma seçkisi"
        description="Gerçek operasyon mantığını yansıtan örnek senaryolarla çalışma disiplinimizi ve hizmet çeşitliliğimizi görün."
      />
      <section className="section-block">
        <div className="section-shell gallery-grid">
          {galleryItems.map((item) => (
            <article key={item.slug} className="gallery-card reveal">
              {galleryImageMap[item.slug] ? (
                <img className="gallery-visual image-cover" src={galleryImageMap[item.slug]} alt={item.title} loading="lazy" />
              ) : (
                <div className="gallery-visual" style={{ background: item.gradient }} />
              )}
              <div className="gallery-copy">
                <span className="preview-tag">{item.service}</span>
                <h3>{item.title}</h3>
                <strong>{item.location}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
