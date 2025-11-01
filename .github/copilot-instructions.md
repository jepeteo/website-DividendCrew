# Copilot Instructions — DividendCrew.com

You are an AI programming assistant for the DividendCrew project.  
When asked for your name, respond with **GitHub Copilot**.

---

## Project Context

- **Frontend:** Next.js 15 (App Router, TypeScript, Tailwind CSS v3)
- **CMS:** Headless WordPress via WPGraphQL + ACF
- **Hosting:** Vercel (frontend) + Cloudways/SiteGround (backend)
- **Goal:** Build a fast, SEO-focused dividend investing site with affiliate and newsletter monetization.
- **Tone:** Clean, trustworthy, non-hype investment resource

---

## Folder Structure

```
src/
├── app/
│   ├── (pages)/
│   │   ├── start-here/
│   │   ├── guides/
│   │   ├── reviews/
│   │   ├── dividend-updates/
│   │   └── tools/
│   └── api/
├── components/
│   ├── ui/         # Buttons, inputs, cards, alerts
│   ├── layout/     # Header, Footer, Breadcrumbs
│   ├── features/   # NewsletterForm, ReviewCard, TOC
│   └── blocks/     # InlineCTA, EndCTA, AuthorBox
├── lib/
│   ├── wp/         # GraphQL queries, API utils
│   ├── hooks/      # usePosts, useAffiliateLinks, useFormSubmit
│   ├── seo/        # schema + metadata utilities
│   └── constants/  # URLs, events, colors
```

---

## Coding Standards

- **TypeScript only** (no `any` allowed)
- Functional components with hooks
- Atomic composition pattern (no monolithic pages)
- Accessibility by default (aria labels, focus states)
- Use `next/image`, `next/link` and `next/script` properly
- Async/await for API calls
- Minimal external libraries (prefer native solutions)
- CSS via Tailwind utilities (consistent 8px spacing grid)

---

## GraphQL Queries

Use WPGraphQL to fetch posts, pages, and taxonomies.

Example:

```typescript
export const GET_POSTS = gql`
  query AllPosts {
    posts(first: 10) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
```

---

## API Utilities

- Create `/lib/wp/fetcher.ts` for GraphQL calls
- Cache results using Next.js revalidation
- Add helper functions:
  - `getGuides()`, `getReviews()`, `getMonthlyUpdates()`
  - `getPostBySlug(slug: string)`

---

## SEO Utilities

- Create `/lib/seo/schema.ts` and `/lib/seo/meta.ts`
- Automate Open Graph + Twitter cards
- Add FAQ and Review schema via JSON-LD
- Use RankMath output when available

---

## Components

### UI Components

- `Button`, `Card`, `Alert`, `Input`, `Table`

### Feature Components

- `NewsletterForm` → integrates Fluent Forms or MailerLite API
- `InlineCTA`, `EndCTA` → reusable opt-in blocks
- `ReviewCard` → TL;DR, pros/cons, CTA
- `TOC` → auto-generated via headings extraction
- `AuthorBox` → from post author meta

---

## Hooks

```typescript
export const useAffiliateLinks = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/go/"]');
    links.forEach((link) => {
      link.setAttribute("rel", "nofollow sponsored");
      link.addEventListener("click", () => {
        window.dataLayer?.push({ event: "affiliate_click", url: link.href });
      });
    });
  }, []);
};
```

---

## Forms & Email

- Use Fluent Forms on WP or React form with MailerLite API
- Add tracking (`newsletter_submit`) via GTM
- Validate all inputs (Zod or built-in checks)
- Double opt-in flow with thank-you page

---

## Performance Targets

- LCP < 2.5s
- Total bundle < 250KB
- CLS < 0.1
- Mobile Lighthouse ≥ 90
- Revalidate static pages every 24h (`revalidate: 86400`)

---

## Pre-commit Hooks

```json
{
  "scripts": {
    "lint": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "analyze": "ANALYZE=true next build"
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

---

## Accessibility Requirements

- WCAG 2.1 AA compliance
- All images must have alt text
- Keyboard navigation works globally
- Forms announce errors via ARIA
- Use semantic HTML (header, main, nav, article)

---

## Deployment Workflow

1. Push to `main` → deploy to Vercel
2. Preview branch builds → staging
3. Content synced via WordPress (GraphQL fetch)
4. Cloudflare cache purged on new deploys
5. Lighthouse audit post-deploy

---

## Environment Variables

```bash
NEXT_PUBLIC_WORDPRESS_API_URL=
MAILERLITE_API_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_SITE_URL=
```

---

## Junior Developer Tips

- Use components from `/components/ui` before creating new ones
- Check existing GraphQL fragments to avoid redundancy
- Always add loading and error states
- Document your functions with JSDoc
- Keep components under 150 lines

---

**Author:** AI Development Agent  
**Version:** 1.0 (November 2025)  
**Status:** Active Development
