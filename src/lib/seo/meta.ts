/**
 * SEO Metadata Utilities
 * Generate Open Graph, Twitter cards, and page metadata
 */

import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import type { Post, Page } from '@/lib/wp/helpers';

/**
 * Generate metadata for homepage
 */
export function generateHomeMetadata(): Metadata {
  return {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    openGraph: {
      title: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      images: [`${SITE_CONFIG.url}/og-image.jpg`],
    },
  };
}

/**
 * Generate metadata for blog posts
 */
export function generatePostMetadata(post: Post): Metadata {
  const title = post.seo?.title || post.title;
  const description = post.seo?.metaDesc || post.excerpt;
  const ogImage =
    post.seo?.opengraphImage?.sourceUrl ||
    post.featuredImage ||
    `${SITE_CONFIG.url}/og-image.jpg`;

  return {
    title,
    description,
    openGraph: {
      title: post.seo?.opengraphTitle || title,
      description: post.seo?.opengraphDescription || description,
      url: `${SITE_CONFIG.url}/${post.slug}`,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_GB',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author.node.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.opengraphTitle || title,
      description: post.seo?.opengraphDescription || description,
      images: [ogImage],
    },
  };
}

/**
 * Generate metadata for pages
 */
export function generatePageMetadata(page: Page): Metadata {
  const title = page.seo?.title || page.title;
  const description = page.seo?.metaDesc || SITE_CONFIG.description;
  const ogImage =
    page.seo?.opengraphImage?.sourceUrl ||
    page.featuredImage?.node.sourceUrl ||
    `${SITE_CONFIG.url}/og-image.jpg`;

  return {
    title,
    description,
    openGraph: {
      title: page.seo?.opengraphTitle || title,
      description: page.seo?.opengraphDescription || description,
      url: `${SITE_CONFIG.url}/${page.slug}`,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seo?.opengraphTitle || title,
      description: page.seo?.opengraphDescription || description,
      images: [ogImage],
    },
  };
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  return `${SITE_CONFIG.url}${path}`;
}

/**
 * Strip HTML tags from string
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength = 155): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}
