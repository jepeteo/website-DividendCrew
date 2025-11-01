/**
 * WordPress GraphQL Queries
 * Centralized GraphQL queries for all content types
 */

// Fragment for featured image
export const FEATURED_IMAGE_FRAGMENT = `
  fragment FeaturedImageFields on MediaItem {
    sourceUrl
    altText
    mediaDetails {
      width
      height
    }
  }
`;

// Fragment for post fields
export const POST_FIELDS_FRAGMENT = `
  fragment PostFields on Post {
    id
    slug
    title
    excerpt
    date
    modified
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
    featuredImage {
      node {
        ...FeaturedImageFields
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
  ${FEATURED_IMAGE_FRAGMENT}
`;

/**
 * Get all posts (paginated)
 */
export const GET_ALL_POSTS = `
  query AllPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...PostFields
      }
    }
  }
  ${POST_FIELDS_FRAGMENT}
`;

/**
 * Get post by slug
 */
export const GET_POST_BY_SLUG = `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      content
      excerpt
      date
      modified
      author {
        node {
          name
          description
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          ...FeaturedImageFields
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      reviewFields {
        rating
        pros {
          proItem
        }
        cons {
          conItem
        }
        affiliateLink
        platformName
        buttonText
      }
      dividendUpdateFields {
        totalDividends
        holdingsCount
        portfolioGrowth
      }
    }
  }
  ${FEATURED_IMAGE_FRAGMENT}
`;

/**
 * Get posts by category
 */
export const GET_POSTS_BY_CATEGORY = `
  query PostsByCategory($category: String!, $first: Int = 10) {
    posts(where: { categoryName: $category }, first: $first) {
      nodes {
        ...PostFields
      }
    }
  }
  ${POST_FIELDS_FRAGMENT}
`;

/**
 * Get guides
 */
export const GET_GUIDES = `
  query GetGuides($first: Int = 10) {
    posts(where: { categoryName: "guides" }, first: $first) {
      nodes {
        ...PostFields
      }
    }
  }
  ${POST_FIELDS_FRAGMENT}
`;

/**
 * Get reviews
 */
export const GET_REVIEWS = `
  query GetReviews($first: Int = 10) {
    posts(where: { categoryName: "reviews" }, first: $first) {
      nodes {
        ...PostFields
        reviewFields {
          rating
          pros {
            proItem
          }
          cons {
            conItem
          }
          affiliateLink
          platformName
          buttonText
        }
      }
    }
  }
  ${POST_FIELDS_FRAGMENT}
`;

/**
 * Get monthly updates
 */
export const GET_MONTHLY_UPDATES = `
  query GetMonthlyUpdates($first: Int = 12) {
    posts(where: { categoryName: "dividend-updates" }, first: $first) {
      nodes {
        ...PostFields
        dividendUpdateFields {
          totalDividends
          holdingsCount
          portfolioGrowth
        }
      }
    }
  }
  ${POST_FIELDS_FRAGMENT}
`;

/**
 * Get page by slug
 */
export const GET_PAGE_BY_SLUG = `
  query PageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      slug
      title
      content
      modified
      featuredImage {
        node {
          ...FeaturedImageFields
        }
      }
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
  ${FEATURED_IMAGE_FRAGMENT}
`;

/**
 * Get all post slugs for static generation
 */
export const GET_ALL_POST_SLUGS = `
  query AllPostSlugs {
    posts(first: 10000) {
      nodes {
        slug
      }
    }
  }
`;

/**
 * Get site settings
 */
export const GET_SITE_SETTINGS = `
  query SiteSettings {
    generalSettings {
      title
      description
      url
    }
  }
`;
