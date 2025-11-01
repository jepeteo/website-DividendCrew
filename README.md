# DividendCrew.com

A content-driven affiliate website for UK dividend investors built with Next.js 15 and headless WordPress.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS v3** for styling (Windows-compatible)
- **Headless WordPress** via WPGraphQL + ACF
- **SEO-optimized** with schema markup and metadata
- **Performance-first** (LCP < 2.5s target)
- **Accessible** (WCAG 2.1 AA compliant)
- **Newsletter integration** with MailerLite/ConvertKit
- **Affiliate link management** with tracking

## 📁 Project Structure

```
src/
├── app/
│   ├── (pages)/         # Route groups
│   │   ├── start-here/
│   │   ├── guides/
│   │   ├── reviews/
│   │   ├── dividend-updates/
│   │   ├── tools/
│   │   └── portfolio/
│   ├── api/             # API routes
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── ui/              # Base UI components (Button, Card, Input, Table, Alert)
│   ├── layout/          # Layout components (Header, Footer, Breadcrumbs)
│   ├── features/        # Feature components (NewsletterForm, ReviewCard, TOC, AuthorBox)
│   └── blocks/          # Content blocks (InlineCTA, EndCTA)
└── lib/
    ├── wp/              # WordPress GraphQL (fetcher, queries, helpers)
    ├── hooks/           # Custom React hooks (useAffiliateLinks, useFormSubmit)
    ├── seo/             # SEO utilities (schema, meta)
    └── constants/       # Site configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- WordPress site with WPGraphQL + ACF plugins (optional for development)
- MailerLite or ConvertKit account (optional for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dividendcrew.com.git
cd dividendcrew.com
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your credentials:
```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
MAILERLITE_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Lint and fix code
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Design System

### Colors
- Navy: `#0E2A3B` (Primary)
- Teal: `#16A085` (Secondary)
- Green: `#2ECC71` (Success)
- Light Gray: `#F5F7F9` (Background)
- Text Gray: `#34495E` (Body text)

### Typography
- Headings: Poppins (600-700)
- Body: Inter (400)
- 8px spacing grid

## 📊 Performance Targets

- LCP: < 2.5s
- TTFB: < 0.9s
- CLS: < 0.1
- INP: < 200ms
- Lighthouse: ≥ 90 (mobile)

## 🔒 Security & Privacy

- 2FA for WordPress admins
- Daily backups (14-30 days retention)
- Cloudflare WAF enabled
- GDPR compliant (cookie consent)
- HTTPS enforced

## 📈 SEO Features

- Automatic sitemap generation
- JSON-LD schema (Article, Review, FAQ, Organization)
- Open Graph tags
- Twitter cards
- Breadcrumbs
- Semantic HTML

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

The site will automatically deploy on every push to the main branch.

## 📚 Documentation

- [Product Requirements Document](./docs/PRD.md)
- [Copilot Instructions](./.github/copilot-instructions.md)

## 🤝 Contributing

This is a personal project, but suggestions and bug reports are welcome via issues.

## ⚖️ Legal

- **Not Financial Advice**: All content is for educational purposes only.
- **FCA Disclaimer**: Not authorised by the Financial Conduct Authority.
- **Affiliate Disclosure**: Contains affiliate links (clearly marked).

## 📄 License

© 2025 DividendCrew. All rights reserved.

---

**Built with ❤️ for UK dividend investors**
