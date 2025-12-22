import { Button } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/features/NewsletterForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0E2A3B] via-[#0E2A3B] to-[#16A085] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              🇬🇧 UK Dividend Investing Made Simple
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display text-white leading-tight">
              Build Reliable{" "}
              <span className="text-[#2ECC71]">Dividend Income</span> with UK
              Stocks
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Monthly portfolio updates, honest platform reviews, and free tools
              to help you grow passive income. No hype, just real dividend
              investing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-here">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Start Here →
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#0E2A3B]"
                >
                  View My Portfolio
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-[#2ECC71] text-xl">✓</span>
                <span>Real Portfolio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2ECC71] text-xl">✓</span>
                <span>Monthly Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2ECC71] text-xl">✓</span>
                <span>Free Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0E2A3B] mb-2">£487</div>
              <div className="text-gray-600">Last Month&apos;s Dividends</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0E2A3B] mb-2">23</div>
              <div className="text-gray-600">Holdings in Portfolio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0E2A3B] mb-2">
                1,000+
              </div>
              <div className="text-gray-600">Newsletter Subscribers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DividendCrew Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A3B] mb-4">
              Why DividendCrew?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real portfolio, real results, real learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#16A085]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Transparent Portfolio
              </h3>
              <p className="text-gray-600">
                Every stock, every dividend, every decision shared openly. No
                fake portfolios or hypothetical returns.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#16A085]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Practical Guides
              </h3>
              <p className="text-gray-600">
                Step-by-step tutorials on UK dividend investing, tax
                optimization, and portfolio building.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#16A085]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                Free Tools
              </h3>
              <p className="text-gray-600">
                Download spreadsheets and calculators to track dividends,
                analyze stocks, and plan your income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0E2A3B] to-[#16A085]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <div className="text-white">
              <div className="inline-block mb-4 px-3 py-1 bg-[#2ECC71] rounded-full text-sm font-semibold">
                Free Resource Pack
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get the Dividend Starter Pack
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Join 1,000+ UK investors receiving weekly insights, portfolio
                updates, and exclusive tools.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#2ECC71] text-xl mt-1">✓</span>
                  <div>
                    <div className="font-semibold mb-1">
                      Monthly Portfolio Updates
                    </div>
                    <div className="text-white/90 text-sm">
                      See every dividend payment and investment decision
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#2ECC71] text-xl mt-1">✓</span>
                  <div>
                    <div className="font-semibold mb-1">
                      Stock Analysis & Tips
                    </div>
                    <div className="text-white/90 text-sm">
                      UK dividend stock research delivered weekly
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#2ECC71] text-xl mt-1">✓</span>
                  <div>
                    <div className="font-semibold mb-1">
                      Free Tracking Spreadsheets
                    </div>
                    <div className="text-white/90 text-sm">
                      Download tools to manage your dividend portfolio
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div>
              <NewsletterForm variant="hero" title="" description="" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A3B] mb-4">
              Start Learning
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build dividend income in the UK
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/guides" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 h-full hover:border-[#16A085] hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#16A085]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#16A085] transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    🚀
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0E2A3B] mb-3 group-hover:text-[#16A085] transition-colors">
                  Getting Started with Dividend Investing
                </h3>
                <p className="text-gray-600">
                  Learn the basics of building a dividend portfolio in the UK.
                  Perfect for beginners.
                </p>
              </div>
            </Link>
            <Link href="/guides" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 h-full hover:border-[#16A085] hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#16A085]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#16A085] transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    💷
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0E2A3B] mb-3 group-hover:text-[#16A085] transition-colors">
                  Understanding Dividend Tax UK
                </h3>
                <p className="text-gray-600">
                  Complete guide to dividend tax allowances, rates, and
                  calculations for UK investors.
                </p>
              </div>
            </Link>
            <Link href="/guides" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 h-full hover:border-[#16A085] hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#16A085]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#16A085] transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    ⭐
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0E2A3B] mb-3 group-hover:text-[#16A085] transition-colors">
                  Best Dividend Stocks for Beginners
                </h3>
                <p className="text-gray-600">
                  Top UK dividend stocks for new investors in 2025. Start
                  building today.
                </p>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link href="/guides">
              <Button variant="outline" size="lg">
                View All Guides →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A3B] mb-2">
                Latest Portfolio Updates
              </h2>
              <p className="text-lg text-gray-600">
                Transparent monthly reports on my dividend journey
              </p>
            </div>
            <Link
              href="/dividend-updates"
              className="mt-4 md:mt-0 inline-flex items-center text-[#16A085] hover:text-[#0E2A3B] font-semibold transition-colors"
            >
              View All Updates →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link href="/dividend-updates" className="block">
              <article className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 bg-[#16A085]/10 text-[#16A085] rounded-full text-sm font-semibold">
                    Latest Update
                  </span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      Monthly Dividends
                    </div>
                    <div className="text-3xl font-bold text-[#2ECC71]">
                      £487+
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0E2A3B] mb-3">
                  Latest Portfolio Update
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Portfolio performance analysis, dividend payments, and
                  strategy adjustments. See the full breakdown of holdings and
                  returns.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>📊 23 Holdings</span>
                    <span>📈 Growing</span>
                  </div>
                  <span className="inline-flex items-center text-[#16A085] hover:text-[#0E2A3B] font-semibold transition-colors">
                    Read Updates →
                  </span>
                </div>
              </article>
            </Link>
            <Link href="/portfolio" className="block">
              <article className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 bg-[#16A085]/10 text-[#16A085] rounded-full text-sm font-semibold">
                    Full Portfolio
                  </span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">YTD Returns</div>
                    <div className="text-3xl font-bold text-[#2ECC71]">
                      +12.5%
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0E2A3B] mb-3">
                  View Complete Portfolio
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  See all holdings, allocation percentages, dividend yields, and
                  performance metrics. Complete transparency.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>� Real Portfolio</span>
                    <span>� Live Data</span>
                  </div>
                  <span className="inline-flex items-center text-[#16A085] hover:text-[#0E2A3B] font-semibold transition-colors">
                    View Portfolio →
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A3B] mb-4">
              Platform Reviews
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Honest reviews of UK investing platforms for dividend investors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/reviews" className="block">
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#16A085] hover:shadow-lg transition-all h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">🏆</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#2ECC71]">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                  Trading 212
                </h3>
                <p className="text-gray-600 mb-6">
                  Zero commission trading with excellent dividend reinvestment
                  features.
                </p>
                <span className="inline-flex items-center text-[#16A085] hover:text-[#0E2A3B] font-semibold">
                  Read Review →
                </span>
              </div>
            </Link>
            <Link href="/reviews" className="block">
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#16A085] hover:shadow-lg transition-all h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">💼</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-[#2ECC71]">
                        ★
                      </span>
                    ))}
                    <span className="text-gray-300">★</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                  Freetrade
                </h3>
                <p className="text-gray-600 mb-6">
                  Simple UK investing app with ISA accounts and low fees for
                  dividend stocks.
                </p>
                <span className="inline-flex items-center text-[#16A085] hover:text-[#0E2A3B] font-semibold">
                  Read Review →
                </span>
              </div>
            </Link>
            <Link href="/reviews" className="block">
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#16A085] hover:shadow-lg transition-all h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">🎯</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-[#2ECC71]">
                        ★
                      </span>
                    ))}
                    <span className="text-gray-300">★</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0E2A3B] mb-3">
                  InvestEngine
                </h3>
                <p className="text-gray-600 mb-6">
                  ETF-focused platform perfect for diversified dividend
                  portfolio building.
                </p>
                <span className="inline-flex items-center text-[#16A085] hover:text-[#0E2A3B] font-semibold">
                  Read Review →
                </span>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button variant="outline" size="lg">
                View All Reviews →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools CTA */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#16A085] to-[#2ECC71] rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-12 lg:p-16 text-white">
                <div className="inline-block mb-6 px-3 py-1 bg-[#0E2A3B] rounded-full text-sm font-semibold">
                  100% Free Forever
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Free Dividend Tracking Tools
                </h2>
                <p className="text-lg mb-8 text-white">
                  Professional spreadsheets to track dividends, analyze stocks,
                  and plan your financial future.
                </p>
                <ul className="space-y-4 mb-8 text-white">
                  <li className="flex items-start gap-3">
                    <span className="text-white text-xl">✓</span>
                    <span className="font-medium">
                      Portfolio tracker with automatic calculations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white text-xl">✓</span>
                    <span className="font-medium">
                      Dividend income forecasting tool
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white text-xl">✓</span>
                    <span className="font-medium">
                      Tax calculation spreadsheet for UK investors
                    </span>
                  </li>
                </ul>
                <Link href="/tools">
                  <Button
                    size="lg"
                    className="bg-[#0E2A3B] text-white hover:bg-[#0E2A3B]/90 shadow-lg font-semibold"
                  >
                    Download Free Tools →
                  </Button>
                </Link>
              </div>

              {/* Right side - Visual */}
              <div className="bg-white/10 backdrop-blur-sm p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6">📊</div>
                  <div className="text-white/90 text-lg">
                    <div className="font-bold text-2xl mb-2">500+</div>
                    <div>Downloads This Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0E2A3B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Dividend Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the DividendCrew community and start building reliable passive
            income with UK stocks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-here">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Started Free →
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#0E2A3B]"
              >
                View My Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
