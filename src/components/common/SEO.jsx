import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';

const SEO = ({ pageKey = 'home', customTitle, customDescription, customKeywords }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { lang } = useParams();
  
  const baseUrl = 'https://empasy.io';
  const currentUrl = `${baseUrl}${location.pathname}`;
  const siteName = t('siteTitle', '엠파시 (Empasy)');
  
  const title = customTitle || t(`seo.${pageKey}.title`, { defaultValue: t('hero.title') });
  const description = customDescription || t(`seo.${pageKey}.description`, { defaultValue: t('hero.subtitle') });
  const keywords = customKeywords || t(`seo.${pageKey}.keywords`, { defaultValue: 'AI-DLC, Hydra, MSA, SyncBoot, SyncEta, SyncCMS, API Management, Digital Transformation' });
  
  const fullTitle = pageKey === 'home' ? `${siteName} - ${title}` : `${title} | ${siteName}`;

  // Structured Data (JSON-LD) for AEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Empasy",
    "alternateName": "엠파시",
    "url": baseUrl,
    "logo": `${baseUrl}/empasy-logo.svg`,
    "sameAs": [
      "https://github.com/empasy"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "contact@empasy.io"
    }
  };

  const softwareSchema = pageKey !== 'home' ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "operatingSystem": "Web, Cloud",
    "applicationCategory": "BusinessApplication",
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      <html lang={lang || i18n.language} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/favicon.png`} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/favicon.png`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {softwareSchema && (
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
