export default function PageHero({ eyebrow, title, description, compact = false }) {
  return (
    <section className={`page-hero${compact ? " compact" : ""}`}>
      <div className="section-shell">
        {eyebrow ? <p className="eyebrow reveal">{eyebrow}</p> : null}
        <h1 className="section-title reveal">{title}</h1>
        <p className="section-text reveal">{description}</p>
      </div>
    </section>
  );
}
