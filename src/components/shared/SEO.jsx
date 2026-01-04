import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Tasty Creations | Food Content Creator";
  const siteDescription = description || "Delicious recipes, cooking tutorials, and kitchen essentials from a professional food content creator.";
  const siteKeywords = keywords || "food creator, recipes, cooking tutorials, kitchen essentials, culinary";
  const siteImage = image || "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80";
  const siteUrl = url || "https://tastycreations.com";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="title" content={title || siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content="Tasty Creations" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
      
      {/* Additional */}
      <link rel="canonical" href={siteUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#f97316" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Tasty Creations",
          "description": siteDescription,
          "url": siteUrl,
          "author": {
            "@type": "Person",
            "name": "Food Creator",
            "jobTitle": "Food Content Creator"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Tasty Creations"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;