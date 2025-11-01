/**
 * SEO Schema Utilities
 * JSON-LD schema generation for articles, reviews, FAQs, and organization
 */

import { SITE_CONFIG } from '@/lib/constants';
import type { Post } from '@/lib/wp/helpers';

/**
 * Organization schema for homepage
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    sameAs: [
      'https://twitter.com/dividendcrew',
      'https://www.facebook.com/dividendcrew',
    ],
  };
}

/**
 * Article schema for blog posts and guides
 */
export function generateArticleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage || '',
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      '@type': 'Person',
      name: post.author.node.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
  };
}

/**
 * Review schema for product/service reviews
 */
export interface ReviewSchemaData {
  itemName: string;
  ratingValue: number;
  ratingCount?: number;
  pros: string[];
  cons: string[];
}

export function generateReviewSchema(post: Post, reviewData: ReviewSchemaData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: reviewData.itemName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewData.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: post.author.node.name,
    },
    datePublished: post.date,
    reviewBody: post.excerpt,
    positiveNotes: {
      '@type': 'ItemList',
      itemListElement: reviewData.pros.map((pro, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: pro,
      })),
    },
    negativeNotes: {
      '@type': 'ItemList',
      itemListElement: reviewData.cons.map((con, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: con,
      })),
    },
  };
}

/**
 * FAQ schema
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Breadcrumb schema
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Convert schema to JSON-LD string
 */
export function schemaToString(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}
