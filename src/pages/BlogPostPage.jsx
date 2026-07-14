import { Fragment } from "react";
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

function renderInlineContent(parts, keyPrefix) {
  return parts.map((part, index) => {
    if (typeof part === "string") {
      return <Fragment key={`${keyPrefix}-text-${index}`}>{part}</Fragment>;
    }

    if (part.type === "externalLink") {
      return (
        <a key={`${keyPrefix}-link-${index}`} href={part.href} target="_blank" rel="noopener noreferrer">
          {part.text}
        </a>
      );
    }

    return null;
  });
}

function renderSectionContent(section, sectionIndex) {
  if (!section.content) {
    return section.text ? <p>{section.text}</p> : null;
  }

  return section.content.map((block, blockIndex) => {
    const keyPrefix = `section-${sectionIndex}-block-${blockIndex}`;

    if (block.type === "list") {
      return (
        <ul key={keyPrefix} className="article-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }

    if (block.type === "paragraph") {
      return (
        <p key={keyPrefix}>
          {block.parts ? renderInlineContent(block.parts, keyPrefix) : block.text}
        </p>
      );
    }

    return null;
  });
}

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
        title={post.seoTitle || `${post.title} | Ömeroğulları Nakliyat Blog`}
        description={post.metaDescription || post.excerpt}
        path={`/blog/${post.slug}`}
        image={coverImage}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription || post.excerpt,
          datePublished: post.publishedAt || post.date,
          dateModified: post.updatedAt || post.publishedAt || post.date,
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
          {post.sections.map((section, index) => (
            <article key={section.heading || `${post.slug}-${index}`} className="detail-card reveal">
              {section.heading ? <h2>{section.heading}</h2> : null}
              {renderSectionContent(section, index)}
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
