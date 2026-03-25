import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import RegionsPage from "./pages/RegionsPage";
import RegionDetailPage from "./pages/RegionDetailPage";
import {
  blogPosts,
  contactInfo,
  contactMeta,
  conversionHighlights,
  enrichedCitySeoPages,
  enrichedSeoPages,
  enrichedServices,
  faqs,
  footerServiceAreas,
  galleryItems,
  localSeoBlocks,
  pageLinks,
  processSteps,
  sectionLinks,
  serviceAreaGroups,
  testimonials,
  trustBadges,
  trustItems,
  whyUsCards
} from "./data/siteData";

function normalizePhone(phone) {
  return phone.replace(/[^\d+]/g, "");
}

function validatePhone(phone) {
  const normalized = normalizePhone(phone);
  return /^(?:\+90|0)?5\d{9}$/.test(normalized) || /^\+?\d{10,15}$/.test(normalized);
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener");
}

function AppShell() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toast, setToast] = useState("");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => observer.observe(element));
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    ["hdate", "fdate"].forEach((id) => {
      const input = document.getElementById(id);
      if (input) {
        input.min = today;
      }
    });
  }, [today]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timer = window.setTimeout(() => setToast(""), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function handleHeroSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const from = String(form.get("from") || "").trim();
    const to = String(form.get("to") || "").trim();
    const service = String(form.get("service") || "").trim();
    const rooms = String(form.get("rooms") || "").trim();
    const date = String(form.get("date") || "").trim();

    if (!name || !phone || !from || !to) {
      setToast("Lütfen gerekli alanları doldurun.");
      return;
    }

    if (!validatePhone(phone)) {
      setToast("Geçerli bir telefon numarası girin.");
      return;
    }

    const message = [
      "Merhaba, hızlı nakliyat teklifi almak istiyorum.",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Nereden: ${from}`,
      `Nereye: ${to}`,
      service ? `Hizmet Türü: ${service}` : "",
      rooms ? `Oda Tipi: ${rooms}` : "",
      date ? `Tarih: ${date}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(message);
    setToast("WhatsApp penceresi hazırlanıyor.");
  }

  function handleDetailSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.querySelector("#fname")?.value.trim() || "";
    const phone = form.querySelector("#fphone")?.value.trim() || "";
    const from = form.querySelector("#ffrom")?.value.trim() || "";
    const to = form.querySelector("#fto")?.value.trim() || "";
    const date = form.querySelector("#fdate")?.value.trim() || "";
    const type = form.querySelector("#ftype")?.value.trim() || "";
    const service = form.querySelector("#fservice")?.value.trim() || "";
    const floorFrom = form.querySelector("#ffloorfrom")?.value.trim() || "";
    const floorTo = form.querySelector("#ffloorto")?.value.trim() || "";
    const elevator = form.querySelector("#felevator")?.value.trim() || "";
    const rooms = form.querySelector("#frooms")?.value.trim() || "";
    const callback = form.querySelector("#fcallback")?.value.trim() || "";
    const note = form.querySelector("#fnote")?.value.trim() || "";

    if (!name || !phone || !from || !to || !date) {
      setToast("Lütfen formdaki zorunlu alanları tamamlayın.");
      return;
    }

    if (!validatePhone(phone)) {
      setToast("Telefon numarasını kontrol edin.");
      return;
    }

    const message = [
      "Merhaba, detaylı nakliyat teklifi rica ediyorum.",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Nereden: ${from}`,
      `Nereye: ${to}`,
      `Tarih: ${date}`,
      type ? `Konut Tipi: ${type}` : "",
      service ? `Hizmet Türü: ${service}` : "",
      floorFrom ? `Çıkış Katı: ${floorFrom}` : "",
      floorTo ? `Varış Katı: ${floorTo}` : "",
      elevator ? `Asansör Durumu: ${elevator}` : "",
      rooms ? `Oda Sayısı: ${rooms}` : "",
      callback ? `Geri Dönüş Tercihi: ${callback}` : "",
      note ? `Ek Not: ${note}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(message);
    form.reset();
    setToast("Teklif mesajınız WhatsApp'ta hazırlandı.");
  }

  return (
    <>
      <ScrollManager />
      <Header
        sectionLinks={sectionLinks}
        pageLinks={pageLinks}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((value) => !value)}
        onCloseMenu={() => setMobileMenuOpen(false)}
        scrolled={scrolled}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              contactInfo={contactInfo}
              contactMeta={contactMeta}
              trustItems={trustItems}
              trustBadges={trustBadges}
              conversionHighlights={conversionHighlights}
              localSeoBlocks={localSeoBlocks}
              serviceAreaGroups={serviceAreaGroups}
              footerServiceAreas={footerServiceAreas}
              services={enrichedServices}
              processSteps={processSteps}
              whyUsCards={whyUsCards}
              testimonials={testimonials}
              faqs={faqs}
              blogPosts={blogPosts}
              seoPages={enrichedSeoPages}
              citySeoPages={enrichedCitySeoPages}
              onHeroSubmit={handleHeroSubmit}
              onDetailSubmit={handleDetailSubmit}
            />
          }
        />
        <Route path="/hizmetler" element={<ServicesPage services={enrichedServices} />} />
        <Route path="/hizmetler/:slug" element={<ServiceDetailPage services={enrichedServices} />} />
        <Route path="/galeri" element={<GalleryPage galleryItems={galleryItems} />} />
        <Route path="/blog" element={<BlogPage blogPosts={blogPosts} />} />
        <Route path="/blog/:slug" element={<BlogPostPage blogPosts={blogPosts} />} />
        <Route
          path="/bolgeler"
          element={
            <RegionsPage
              seoPages={enrichedSeoPages}
              seoTitle="Hizmet Bölgeleri | Ömeroğulları Nakliyat"
              heroEyebrow="Hizmet Bölgeleri"
              heroTitle="İlçe ve hizmet türüne göre hazırlanan bölgesel sayfalar"
              heroDescription="Kayseri'nin farklı bölgelerindeki yapı tipi ve taşıma ihtiyaçlarına göre hazırlanmış sayfaları inceleyin."
              basePath="/bolgeler"
            />
          }
        />
        <Route path="/bolgeler/:slug" element={<RegionDetailPage seoPages={enrichedSeoPages} listPath="/bolgeler" buttonLabel="Tüm bölgelere dön" />} />
        <Route
          path="/sehirler"
          element={
            <RegionsPage
              seoPages={enrichedCitySeoPages}
              seoTitle="Şehirlerarası Nakliyat Sayfaları | Ömeroğulları Nakliyat"
              heroEyebrow="Şehirlerarası"
              heroTitle="Kayseri çıkışlı ve varışlı şehirlerarası nakliyat sayfaları"
              heroDescription="Farklı şehir hatları için hazırlanan SEO odaklı içeriklerde rota bazlı taşınma ihtiyaçlarını inceleyin."
              basePath="/sehirler"
            />
          }
        />
        <Route
          path="/sehirler/:slug"
          element={<RegionDetailPage seoPages={enrichedCitySeoPages} listPath="/sehirler" buttonLabel="Tüm şehir sayfalarına dön" />}
        />
      </Routes>

      <Footer
        sectionLinks={sectionLinks}
        pageLinks={pageLinks}
        contactInfo={contactInfo}
        contactMeta={contactMeta}
        footerServiceAreas={footerServiceAreas}
      />
      <div id="toast" className={toast ? "show" : ""} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
