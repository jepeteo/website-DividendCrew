/**
 * DividendCrew Constants
 * Central configuration for URLs, colors, events, and site-wide settings
 */

// Site Configuration
export const SITE_CONFIG = {
  name: 'DividendCrew',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dividendcrew.com',
  wpUrl: 'https://wp.dividendcrew.com',
  description: 'Help UK investors grow reliable dividend income with honest monthly updates, simple tools, and no hype.',
  author: 'DividendCrew Team',
  locale: 'en-GB',
  currency: 'GBP',
} as const;

// WordPress API
export const WP_CONFIG = {
  apiUrl: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://wp.dividendcrew.com/graphql',
  revalidate: 86400, // 24 hours in seconds
} as const;

// Design System Colors
export const COLORS = {
  navy: '#0E2A3B',
  teal: '#16A085',
  green: '#2ECC71',
  lightGray: '#F5F7F9',
  textGray: '#34495E',
} as const;

// Navigation Links
export const NAV_LINKS = [
  { label: 'Start Here', href: '/start-here' },
  { label: 'Dividend Updates', href: '/dividend-updates' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Tools & Trackers', href: '/tools' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Guides', href: '/guides' },
  { label: 'About', href: '/about' },
] as const;

// GTM Custom Events
export const GTM_EVENTS = {
  NEWSLETTER_SUBMIT: 'newsletter_submit',
  AFFILIATE_CLICK: 'affiliate_click',
  DOWNLOAD_TRACKER: 'download_tracker',
  CTA_CLICK: 'cta_click',
  VIDEO_ENGAGEMENT: 'video_engagement',
} as const;

// Email Service Provider
export const ESP_CONFIG = {
  apiKey: process.env.MAILERLITE_API_KEY || '',
  groupId: process.env.MAILERLITE_GROUP_ID || '',
} as const;

// Analytics
export const ANALYTICS_CONFIG = {
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
} as const;

// Affiliate Link Prefix
export const AFFILIATE_PREFIX = '/go/';

// Content Types
export const CONTENT_TYPES = {
  GUIDE: 'guide',
  REVIEW: 'review',
  MONTHLY_UPDATE: 'monthly_update',
  TOOL: 'tool',
  PAGE: 'page',
} as const;

// SEO Defaults
export const SEO_DEFAULTS = {
  titleTemplate: '%s | DividendCrew',
  description: SITE_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    handle: '@dividendcrew',
    site: '@dividendcrew',
    cardType: 'summary_large_image',
  },
} as const;

// Performance Targets (Core Web Vitals)
export const PERFORMANCE_TARGETS = {
  LCP: 2500, // ms
  TTFB: 900, // ms
  CLS: 0.1,
  INP: 200, // ms
} as const;
