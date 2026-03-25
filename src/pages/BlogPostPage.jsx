import { Link, Navigate, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";

const blogCoverImages = [
  "/images/blog-kapak-1.jpg",
  "/images/blog-kapak-2.webp",
  "/images/blog-kapak-3.jpg",
  "/images/blog-kapak-4.jpeg",
  "/images/blog-kapak-5.jpeg"
];

export default function BlogPostPage({ blogPosts }) {
  const { slug } = useParams();
  const postIndex = blogPosts.findIndex((item) => item.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const coverImage = blogCoverImages[postIndex % blogCoverImages.length];

  return (
    <>
      <Seo
        title={`${post.title} | Ömeroğulları Nakliyat Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={coverImage}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            "@type": "Organization",
            name: "Ömeroğulları Nakliyat"
          },
          publisher: {
            "@type": "Organization",
            name: "Ömeroğulları Nakliyat"
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://omerogullarinakliyat.com.tr/blog/${post.slug}`
          }
        }}
      />
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} compact />
      <section className="section-block">
        <div className="section-shell article-layout">
          <div className="blog-cover large reveal media-cover">
            <img src={coverImage} alt={post.title} loading="eager" />
            <span>{post.cover?.label || post.category}</span>
          </div>
          <div className="post-meta reveal">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          {post.sections.map((section) => (
            <article key={section.heading} className="detail-card reveal">
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </article>
          ))}
          <div className="preview-action reveal">
            <Link className="btn btn-primary" to="/blog">
              Blog listesine dön
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
