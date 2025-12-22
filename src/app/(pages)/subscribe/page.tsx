/**
 * Subscribe Page
 * Newsletter signup with benefits and social proof
 */

import { NewsletterForm } from "@/components/features/NewsletterForm";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe to Free Newsletter",
  description:
    "Join 1,000+ UK investors receiving weekly dividend insights, portfolio updates, and free tools. Get the Dividend Starter Pack when you subscribe.",
  openGraph: {
    title: "Subscribe to DividendCrew Newsletter",
    description:
      "Weekly dividend insights, portfolio updates, and free tools for UK investors",
    url: `${SITE_CONFIG.url}/subscribe`,
  },
};

export default function SubscribePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0E2A3B] via-[#0E2A3B] to-[#16A085] text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-[#2ECC71] rounded-full text-sm font-semibold">
              100% Free • No Spam • Unsubscribe Anytime
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Join 1,000+ UK Investors Building Dividend Income
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get weekly insights, portfolio updates, and free tools delivered
              straight to your inbox. Plus, instant access to the Dividend
              Starter Pack.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-xl mx-auto">
            <div className="mb-6">
              <NewsletterForm variant="hero" title="" description="" />
            </div>
            <p className="text-sm text-gray-300 text-center">
              By subscribing, you agree to receive our weekly newsletter. You
              can unsubscribe at any time. See our{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:text-white"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A3B] mb-4">
              What You'll Receive
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build and track your dividend portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#16A085] transition-all">
              <div className="w-16 h-16 bg-[#16A085]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Monthly Portfolio Updates
              </h3>
              <p className="text-gray-600">
                See every stock I own, every dividend payment received, and the
                reasoning behind each investment decision. Complete
                transparency.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#16A085] transition-all">
              <div className="w-16 h-16 bg-[#16A085]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Stock Analysis & Tips
              </h3>
              <p className="text-gray-600">
                Weekly deep dives into UK dividend stocks, including financial
                analysis, dividend safety ratings, and growth potential.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#16A085] transition-all">
              <div className="w-16 h-16 bg-[#16A085]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Free Tracking Tools
              </h3>
              <p className="text-gray-600">
                Downloadable spreadsheets for tracking dividends, calculating
                tax, and forecasting future income. Updated regularly.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#16A085] transition-all">
              <div className="w-16 h-16 bg-[#16A085]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">💷</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                UK Tax Guidance
              </h3>
              <p className="text-gray-600">
                Understand dividend allowances, ISA strategies, and tax-efficient
                investing tailored specifically for UK residents.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#16A085] transition-all">
              <div className="w-16 h-16 bg-[#16A085]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Exclusive Guides
              </h3>
              <p className="text-gray-600">
                Subscriber-only content including beginner guides, advanced
                strategies, and platform comparison checklists.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#16A085] transition-all">
              <div className="w-16 h-16 bg-[#16A085]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🔔</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Market Updates
              </h3>
              <p className="text-gray-600">
                Stay informed about dividend cuts, special dividends, and market
                changes that affect UK dividend investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Pack Preview */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#16A085] to-[#2ECC71] rounded-2xl p-12 text-white shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  Instant Download
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get the Dividend Starter Pack
                </h2>
                <p className="text-xl text-white/90">
                  Instant access when you subscribe (worth £47)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📋</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Portfolio Tracker Spreadsheet
                      </h3>
                      <p className="text-white/90 text-sm">
                        Track all your holdings, dividends, and performance in
                        one place
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📊</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Dividend Forecasting Tool
                      </h3>
                      <p className="text-white/90 text-sm">
                        Project future income based on your current portfolio
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📘</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Beginner's Guide PDF
                      </h3>
                      <p className="text-white/90 text-sm">
                        Complete introduction to dividend investing in the UK
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✅</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Stock Research Checklist
                      </h3>
                      <p className="text-white/90 text-sm">
                        Analyze stocks like a pro with our evaluation framework
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/90 mb-4">
                  👆 Scroll up to subscribe and get instant access
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A3B] mb-4">
              Join Successful UK Dividend Investors
            </h2>
            <p className="text-lg text-gray-600">
              What subscribers are saying about DividendCrew
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#2ECC71] text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The monthly updates are brilliant. Finally, someone sharing
                their real portfolio with actual numbers. The free spreadsheets
                saved me hours."
              </p>
              <div className="font-semibold text-[#0E2A3B]">
                — James M., London
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#2ECC71] text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Best UK dividend resource I've found. No hype, just practical
                advice and tools. Worth subscribing just for the portfolio
                tracker alone."
              </p>
              <div className="font-semibold text-[#0E2A3B]">
                — Sarah T., Manchester
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#2ECC71] text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Clear, honest, and genuinely helpful. The UK tax guidance alone
                is worth it. Highly recommend for any dividend investor."
              </p>
              <div className="font-semibold text-[#0E2A3B]">
                — David R., Birmingham
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A3B] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Is the newsletter really free?
              </h3>
              <p className="text-gray-600">
                Yes, 100% free forever. No hidden costs, no upsells. I may
                recommend products through affiliate links, but all core content
                and tools are completely free.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                How often will I receive emails?
              </h3>
              <p className="text-gray-600">
                You'll receive one main email per week, plus monthly portfolio
                updates. I respect your inbox and will never spam you.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Can I unsubscribe anytime?
              </h3>
              <p className="text-gray-600">
                Absolutely. Every email has an unsubscribe link. One click and
                you're out. No questions asked.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Is this financial advice?
              </h3>
              <p className="text-gray-600">
                No. I'm not a financial advisor and not regulated by the FCA.
                This is educational content only. I share my personal journey and
                research, but you must make your own investment decisions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                What makes DividendCrew different?
              </h3>
              <p className="text-gray-600">
                Complete transparency. I share my real portfolio with actual
                numbers, not hypothetical returns. Everything is focused on UK
                investors with practical, actionable content. No hype, no fake
                gurus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0E2A3B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Dividend Income?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 1,000+ UK investors and get your free Starter Pack today
          </p>
          <div className="max-w-xl mx-auto">
            <NewsletterForm variant="hero" title="" description="" />
          </div>
        </div>
      </section>
    </div>
  );
}
