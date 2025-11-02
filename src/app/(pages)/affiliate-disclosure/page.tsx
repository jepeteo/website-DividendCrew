import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "DividendCrew affiliate disclosure - transparency about our affiliate partnerships and how we earn commissions.",
};

export default function AffiliateDisclosurePage() {
  const lastUpdated = "November 2025";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0E2A3B] mb-4">
            Affiliate Disclosure
          </h1>
          <p className="text-lg text-gray-600">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Our Commitment to Transparency
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At DividendCrew, transparency and honesty are fundamental to
              everything we do. This page explains our affiliate relationships
              and how we may earn commissions when you use our links.
            </p>
            <div className="bg-[#16A085]/10 border-l-4 border-[#16A085] p-6 rounded-r-lg mb-6">
              <p className="text-[#0E2A3B] font-semibold mb-2">
                ✓ We only recommend products and services we genuinely believe
                in
              </p>
              <p className="text-gray-700">
                Our recommendations are based on personal experience, thorough
                research, and honest assessment—not commission rates.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              What Are Affiliate Links?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Affiliate links are special tracking links that allow us to earn a
              commission when you sign up for a service or make a purchase
              through our recommendation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important:</strong> Using our affiliate links does NOT
              cost you anything extra. In many cases, you may receive better
              pricing or exclusive bonuses through our partnerships.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Products and Services We May Promote
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may earn affiliate commissions when you sign up for or
              purchase:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Investment Platforms:</strong> Trading 212, Freetrade,
                InvestEngine, Interactive Brokers, and other UK investing apps
              </li>
              <li>
                <strong>Financial Tools:</strong> Portfolio tracking software,
                stock screeners, and research platforms
              </li>
              <li>
                <strong>Educational Products:</strong> Investment courses,
                books, and training programs
              </li>
              <li>
                <strong>Web Services:</strong> Hosting, email marketing tools,
                and website platforms we use
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              All affiliate relationships will be clearly disclosed on the
              relevant review or recommendation page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              How We Choose What to Recommend
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our recommendation process is rigorous and honest:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-[#0E2A3B] mb-2">
                  1. Personal Use & Testing
                </h3>
                <p className="text-gray-700 text-sm">
                  We personally use and test platforms before recommending them.
                  Our portfolio is managed using the platforms we review.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-[#0E2A3B] mb-2">
                  2. Research & Comparison
                </h3>
                <p className="text-gray-700 text-sm">
                  We thoroughly research features, fees, customer service, and
                  user reviews before forming opinions.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-[#0E2A3B] mb-2">
                  3. Honest Assessment
                </h3>
                <p className="text-gray-700 text-sm">
                  We highlight both pros and cons. If a platform has issues, we
                  tell you—even if it means lower commissions.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-[#0E2A3B] mb-2">
                  4. UK Focus
                </h3>
                <p className="text-gray-700 text-sm">
                  We prioritize platforms suitable for UK dividend investors,
                  considering tax efficiency, ISA availability, and UK stock
                  access.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Financial Promotions & FCA Compliance
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-4">
              <p className="text-red-900 font-semibold mb-2">
                ⚠️ Important Legal Disclaimer
              </p>
              <p className="text-gray-700 text-sm">
                DividendCrew is NOT authorised or regulated by the Financial
                Conduct Authority (FCA). We do not provide financial advice.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What we provide:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Educational content about dividend investing</li>
              <li>
                Personal portfolio updates showing our own investment decisions
              </li>
              <li>
                Honest reviews of investment platforms based on our experience
              </li>
              <li>Free tools to help you research and track investments</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What we DO NOT provide:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                Personalized investment advice tailored to your circumstances
              </li>
              <li>Recommendations on specific investments you should make</li>
              <li>Financial planning or tax advice</li>
              <li>Guarantees of investment returns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Understanding Investment Risks
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Capital at Risk:</strong> The value of investments can
                go down as well as up, and you may get back less than you
                invested. Past performance is not a reliable indicator of future
                results.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Before making any investment decisions, you should consider
              seeking independent financial advice from an FCA-regulated advisor
              who can assess your personal circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Amazon Associates Program
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DividendCrew is a participant in the Amazon Services LLC
              Associates Program, an affiliate advertising program designed to
              provide a means for sites to earn advertising fees by advertising
              and linking to Amazon.co.uk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              How We Identify Affiliate Links
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We clearly mark affiliate content in several ways:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Disclosure Statements:</strong> Articles containing
                affiliate links include a clear disclosure at the top
              </li>
              <li>
                <strong>Link Attributes:</strong> All affiliate links use proper
                rel="sponsored" or rel="nofollow" attributes
              </li>
              <li>
                <strong>Visual Indicators:</strong> Some affiliate links may be
                marked with an asterisk (*) or note
              </li>
              <li>
                <strong>Review Pages:</strong> Platform reviews clearly state
                our affiliate relationship
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Our Editorial Independence
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we may earn commissions, our content is editorially
              independent:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We write honest reviews, including negative points</li>
              <li>Commission rates do not influence our rankings</li>
              <li>We regularly update reviews based on platform changes</li>
              <li>We'll tell you when a competitor offers better features</li>
              <li>
                We decline partnerships with platforms we wouldn't personally
                use
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Sponsored Content Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Occasionally, we may publish sponsored content or paid
              partnerships. When we do:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                It will be clearly labeled as "Sponsored," "Paid Partnership,"
                or "Advertisement"
              </li>
              <li>We maintain editorial control over all sponsored content</li>
              <li>We only partner with brands aligned with our values</li>
              <li>Sponsorships do not affect our regular editorial content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Questions About Our Affiliates?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our affiliate relationships,
              commissions we earn, or how we choose what to recommend, please
              don't hesitate to ask.
            </p>
            <div className="bg-[#F5F7F9] p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> affiliates@dividendcrew.com
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{" "}
                <a
                  href={SITE_CONFIG.url}
                  className="text-[#16A085] hover:underline"
                >
                  {SITE_CONFIG.url}
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Compliance Standards
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our affiliate disclosure practices comply with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                UK Consumer Protection from Unfair Trading Regulations 2008
              </li>
              <li>
                Competition and Markets Authority (CMA) guidance on endorsements
              </li>
              <li>Advertising Standards Authority (ASA) CAP Code</li>
              <li>
                FTC guidelines on endorsements and testimonials (US readers)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Changes to This Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Affiliate Disclosure from time to time to
              reflect new partnerships or changes in regulations. The "Last
              updated" date at the top of this page indicates when the most
              recent changes were made.
            </p>
          </section>

          <div className="bg-[#16A085]/10 border-2 border-[#16A085] rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
              Thank You for Your Trust
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your support through affiliate links helps us continue providing
              free content, tools, and portfolio updates. We take this
              responsibility seriously and are committed to maintaining your
              trust through honest, transparent recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
