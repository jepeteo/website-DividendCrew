/**
 * useAffiliateLinks Hook
 * Automatically adds rel attributes and tracking to affiliate links
 */

'use client';

import { useEffect } from 'react';
import { AFFILIATE_PREFIX, GTM_EVENTS } from '@/lib/constants';

/**
 * Hook to handle affiliate link tracking and attributes
 */
export function useAffiliateLinks() {
  useEffect(() => {
    // Find all affiliate links
    const links = document.querySelectorAll(`a[href^="${AFFILIATE_PREFIX}"]`);

    links.forEach((link) => {
      const anchor = link as HTMLAnchorElement;

      // Add rel attributes
      anchor.setAttribute('rel', 'nofollow sponsored');
      anchor.setAttribute('target', '_blank');

      // Add click tracking
      const handleClick = () => {
        // Push to dataLayer for GTM
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: GTM_EVENTS.AFFILIATE_CLICK,
            url: anchor.href,
            text: anchor.textContent,
          });
        }
      };

      anchor.addEventListener('click', handleClick);

      // Cleanup
      return () => {
        anchor.removeEventListener('click', handleClick);
      };
    });
  }, []);
}

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}
