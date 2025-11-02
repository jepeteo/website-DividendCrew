import type { Metadata } from "next";
import { NewsletterForm } from "@/components/features/NewsletterForm";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "New to dividend investing? Start your journey with our 3-step guide to building passive income with UK stocks.",
};

export default function StartHerePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0E2A3B] mb-4">
          Start Your Dividend Journey
        </h1>
        <p className="text-xl text-[#34495E]">
          Follow these 3 simple steps to begin building reliable passive income
          with UK dividend stocks.
        </p>
      </div>

      {/* Step 1 */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-start">
          <div className="bg-[#16A085] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0 mr-6">
            1
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-3">
              Learn the Basics
            </h2>
            <p className="text-[#34495E] mb-4">
              Understand what dividends are, how they're taxed in the UK, and
              why they're a powerful way to build wealth over time.
            </p>
            <Link href="/guides">
              <Button variant="secondary" size="md">
                Browse Guides →
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-start">
          <div className="bg-[#16A085] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0 mr-6">
            2
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-3">
              Open the Right Accounts
            </h2>
            <p className="text-[#34495E] mb-4">
              Set up a Stocks & Shares ISA to maximize your tax-free dividend
              income. We'll show you the best platforms for UK investors.
            </p>
            <Link href="/reviews">
              <Button variant="secondary" size="md">
                Compare Platforms →
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="flex items-start">
          <div className="bg-[#16A085] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0 mr-6">
            3
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-3">
              Build Your Portfolio
            </h2>
            <p className="text-[#34495E] mb-4">
              Start with our free dividend tracker and follow our monthly
              updates to see real portfolio examples and strategies.
            </p>
            <div className="flex gap-4">
              <Link href="/tools">
                <Button variant="secondary" size="md">
                  Get Free Tools →
                </Button>
              </Link>
              <Link href="/dividend-updates">
                <Button variant="outline" size="md">
                  View Updates →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16">
        <NewsletterForm
          variant="inline"
          title="Get the Dividend Starter Pack"
          description="Instant access to our beginner's guide, portfolio template, and dividend tracker spreadsheet."
        />
      </div>
    </div>
  );
}
