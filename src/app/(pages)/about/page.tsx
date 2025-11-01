import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DividendCrew and my journey building passive income through UK dividend investing.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0E2A3B] mb-6">
          About DividendCrew
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Welcome! I'm building a dividend portfolio in the UK and sharing every
          step of the journey with full transparency.
        </p>
      </div>

      {/* Story Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">My Story</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            I started DividendCrew to document my journey towards financial
            independence through dividend investing in the UK. Unlike other
            finance sites with hypothetical portfolios or affiliate-driven
            recommendations, I share my real portfolio, real dividends, and real
            lessons learned.
          </p>
          <p>
            Every month, I publish detailed updates showing exactly how much I
            earned in dividends, which stocks I bought or sold, and why I made
            those decisions. No BS, no hype, just honest reporting.
          </p>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E2A3B] mb-6">
          What You'll Find Here
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-xl font-bold text-[#0E2A3B] mb-2">
              Monthly Portfolio Updates
            </h3>
            <p className="text-gray-600">
              Full transparency on dividends received, portfolio performance,
              and investment decisions.
            </p>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-[#0E2A3B] mb-2">
              Practical Guides
            </h3>
            <p className="text-gray-600">
              Step-by-step tutorials on dividend investing, ISAs, tax
              optimization, and more.
            </p>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="text-xl font-bold text-[#0E2A3B] mb-2">
              Honest Reviews
            </h3>
            <p className="text-gray-600">
              Real reviews of UK investing platforms, ISA providers, and
              dividend tools I actually use.
            </p>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="text-xl font-bold text-[#0E2A3B] mb-2">
              Free Tools
            </h3>
            <p className="text-gray-600">
              Download spreadsheets and calculators to track your own dividend
              portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
          My Investment Philosophy
        </h2>
        <div className="bg-[#F5F7F9] rounded-lg p-8">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#2ECC71] text-xl mt-1">✓</span>
              <span>
                <strong>Long-term focus:</strong> I'm building wealth over
                decades, not chasing quick gains.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2ECC71] text-xl mt-1">✓</span>
              <span>
                <strong>Diversification:</strong> Spread across sectors, company
                sizes, and UK/international stocks.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2ECC71] text-xl mt-1">✓</span>
              <span>
                <strong>Quality over yield:</strong> Sustainable dividends from
                profitable companies, not just high yields.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2ECC71] text-xl mt-1">✓</span>
              <span>
                <strong>Reinvest dividends:</strong> Compound returns by
                reinvesting dividends into more shares.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2ECC71] text-xl mt-1">✓</span>
              <span>
                <strong>Keep learning:</strong> Markets change, and I adapt my
                strategy based on results.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
          Important Disclaimer
        </h2>
        <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
          <p className="text-sm text-gray-700">
            <strong>This is not financial advice.</strong> I'm not a financial
            advisor. Everything on this site is for educational purposes only
            and reflects my personal experience and opinions. Your situation is
            unique - always do your own research and consider consulting a
            qualified financial advisor before making investment decisions.
          </p>
          <p className="text-sm text-gray-700 mt-3">
            <strong>Affiliate disclosure:</strong> Some links on this site are
            affiliate links. If you sign up through these links, I may earn a
            small commission at no extra cost to you. This helps support the
            site. All opinions are my own and based on real experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-br from-[#16A085] to-[#2ECC71] rounded-xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Join the DividendCrew Community
        </h2>
        <p className="text-lg mb-8 opacity-95">
          Get monthly updates, exclusive insights, and free tools delivered to
          your inbox
        </p>
        <Link href="/">
          <Button
            size="lg"
            className="bg-white text-[#16A085] hover:bg-gray-100"
          >
            Subscribe Free →
          </Button>
        </Link>
      </section>
    </div>
  );
}
