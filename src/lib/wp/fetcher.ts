/**
 * WordPress GraphQL Fetcher
 * Handles all API communication with headless WordPress
 */

import { WP_CONFIG } from '@/lib/constants';

interface GraphQLResponse<T = unknown> {
  data?: T;
  errors?: Array<{ message: string }>;
}

/**
 * Fetches data from WordPress GraphQL API
 */
export async function fetchAPI<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Add authentication if available
  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  try {
    const response = await fetch(WP_CONFIG.apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      next: {
        revalidate: WP_CONFIG.revalidate,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json: GraphQLResponse<T> = await response.json();

    if (json.errors) {
      console.error('GraphQL Errors:', JSON.stringify(json.errors, null, 2));
      throw new Error(`GraphQL Error: ${json.errors.map(e => e.message).join(', ')}`);
    }

    return json.data as T;
  } catch (error) {
    console.error('Error fetching from WordPress:', error);
    throw error;
  }
}

/**
 * Preview mode fetcher (no cache)
 */
export async function fetchAPIPreview<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const response = await fetch(WP_CONFIG.apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: 'no-store',
  });

  const json: GraphQLResponse<T> = await response.json();

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data as T;
}
