import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description?: string;
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = 'Kernova Developer Workspace is an early-stage Linux-first developer environment for C/C++ build workflows, compiler diagnostics, and AI-assisted debugging.',
  canonicalPath = '',
}) => {
  useEffect(() => {
    // Update Document Title
    const fullTitle = title.includes('KERNOVA') ? title : `${title} | KERNOVA`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    // Update OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://kernova.click${canonicalPath}`);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, canonicalPath]);

  return null;
};
