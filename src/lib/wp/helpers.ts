/**
 * WordPress Helper Functions
 * Convenience functions for fetching specific content types
 */

import { fetchAPI } from './fetcher';
import {
  GET_ALL_POSTS,
  GET_POST_BY_SLUG,
  GET_POSTS_BY_CATEGORY,
  GET_GUIDES,
  GET_REVIEWS,
  GET_MONTHLY_UPDATES,
  GET_PAGE_BY_SLUG,
  GET_ALL_POST_SLUGS,
} from './queries';

// Types
export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  modified: string;
  author: {
    node: {
      name: string;
      description?: string;
      avatar: {
        url: string;
      };
    };
  };
  featuredImage?: string;
  categories: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  seo?: {
    title: string;
    metaDesc: string;
    opengraphTitle: string;
    opengraphDescription: string;
    opengraphImage?: {
      sourceUrl: string;
    };
  };
  // ACF Fields (GraphQL Type Name based)
  reviewFields?: {
    rating?: number;
    pros?: Array<{ proItem: string }>;
    cons?: Array<{ conItem: string }>;
    affiliateLink?: string;
    platformName?: string;
    buttonText?: string;
  };
  dividendUpdateFields?: {
    totalDividends?: number;
    holdingsCount?: number;
    portfolioGrowth?: string;
  };
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  content: string;
  modified: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    };
  };
  seo?: {
    title: string;
    metaDesc: string;
    opengraphTitle: string;
    opengraphDescription: string;
    opengraphImage?: {
      sourceUrl: string;
    };
  };
}

/**
 * Transform raw GraphQL post to typed Post
 */
function transformPost(rawPost: RawPost): Post {
  return {
    ...rawPost,
    featuredImage: rawPost.featuredImage?.node?.sourceUrl || undefined
  };
}

interface RawPost extends Omit<Post, 'featuredImage'> {
  featuredImage?: {
    node?: {
      sourceUrl: string;
    };
  };
}

interface RawCategory {
  slug: string;
  name: string;
}

/**
 * Get all posts
 */
export async function getAllPosts(first = 10): Promise<Post[]> {
  const data = await fetchAPI<{ posts: { nodes: RawPost[] } }>(GET_ALL_POSTS, {
    first,
  });
  return data.posts.nodes.map(transformPost);
}

/**
 * Get post by slug (optionally filtered by category)
 */
export async function getPostBySlug(slug: string, category?: string): Promise<Post | null> {
  const data = await fetchAPI<{ post: RawPost }>(GET_POST_BY_SLUG, { slug });
  const rawPost = data.post || null;
  
  if (!rawPost) return null;
  
  // If category filter is provided, check if post belongs to that category
  if (category) {
    const hasCategory = rawPost.categories?.nodes?.some(
      (cat: RawCategory) => cat.slug === category || cat.name.toLowerCase().replace(/\s+/g, '-') === category
    );
    if (!hasCategory) {
      return null;
    }
  }
  
  // Transform featuredImage to simple string if it exists
  const post: Post = {
    ...rawPost,
    featuredImage: rawPost.featuredImage?.node?.sourceUrl || undefined
  };
  
  return post;
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(
  category: string,
  first = 10
): Promise<Post[]> {
  const data = await fetchAPI<{ posts: { nodes: RawPost[] } }>(
    GET_POSTS_BY_CATEGORY,
    { category, first }
  );
  return data.posts.nodes.map(transformPost);
}

/**
 * Get guides
 */
export async function getGuides(first = 10): Promise<Post[]> {
  const data = await fetchAPI<{ posts: { nodes: RawPost[] } }>(GET_GUIDES, {
    first,
  });
  return data.posts.nodes.map(transformPost);
}

/**
 * Get reviews
 */
export async function getReviews(first = 10): Promise<Post[]> {
  const data = await fetchAPI<{ posts: { nodes: RawPost[] } }>(GET_REVIEWS, {
    first,
  });
  return data.posts.nodes.map(transformPost);
}

/**
 * Get monthly updates
 */
export async function getMonthlyUpdates(first = 12): Promise<Post[]> {
  const data = await fetchAPI<{ posts: { nodes: RawPost[] } }>(
    GET_MONTHLY_UPDATES,
    { first }
  );
  return data.posts.nodes.map(transformPost);
}

/**
 * Get page by slug
 */
export async function getPageBySlug(slug: string): Promise<Page | null> {
  const data = await fetchAPI<{ page: Page }>(GET_PAGE_BY_SLUG, { slug });
  return data.page || null;
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const data = await fetchAPI<{ posts: { nodes: Array<{ slug: string }> } }>(
    GET_ALL_POST_SLUGS
  );
  return data.posts.nodes.map((node) => node.slug);
}
