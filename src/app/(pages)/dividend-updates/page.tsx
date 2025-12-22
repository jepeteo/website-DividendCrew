import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { getMonthlyUpdates } from "@/lib/wp/helpers";

export const metadata: Metadata = {
  title: "Dividend Updates",
  description:
    "Monthly dividend income reports with full transparency. See exactly what I earn and how my portfolio performs.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function DividendUpdatesPage() {
  // Fetch updates from WordPress
  const updatesData = await getMonthlyUpdates();

  // Transform WordPress data
  const updates = updatesData.map((update) => ({
    month: update.title,
    income: update.dividendUpdateFields?.totalDividends
      ? `£${update.dividendUpdateFields.totalDividends}`
      : "£0.00",
    excerpt: update.excerpt || "",
    slug: update.slug,
  }));

  // Calculate totals if we have data
  const totalYTD =
    updates.length > 0
      ? `£${updates
          .reduce((sum: number, u: typeof updates[number]) => {
            const amount = parseFloat(u.income.replace("£", "")) || 0;
            return sum + amount;
          }, 0)
          .toFixed(2)}`
      : "£0.00";

  const monthlyAverage =
    updates.length > 0
      ? `£${(parseFloat(totalYTD.replace("£", "")) / updates.length).toFixed(
          2
        )}`
      : "£0.00";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0E2A3B] mb-4">
          Monthly Dividend Updates
        </h1>
        <p className="text-lg text-[#34495E] max-w-3xl">
          Full transparency into my dividend portfolio. Every month, I share
          exactly how much I earned, what I bought or sold, and lessons learned.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-sm text-[#34495E] mb-2">Year-to-Date Total</div>
          <div className="text-4xl font-bold text-[#2ECC71]">{totalYTD}</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-sm text-[#34495E] mb-2">Monthly Average</div>
          <div className="text-4xl font-bold text-[#16A085]">
            {monthlyAverage}
          </div>
        </div>
      </div>

      {/* Updates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {updates && updates.length > 0 ? (
          updates.map((update) => (
            <Card
              key={update.slug}
              title={update.month}
              description={update.excerpt}
              href={`/dividend-updates/${update.slug}`}
              footer={
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#2ECC71]">
                    {update.income}
                  </span>
                  <span className="text-sm text-[#16A085] font-medium">
                    Read Update →
                  </span>
                </div>
              }
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-gray-600">
              No dividend updates found. Create your first update post in
              WordPress with the "Dividend Updates" category.
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-[#0E2A3B] text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Get Updates Straight to Your Inbox
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Subscribe to get monthly dividend reports + exclusive insights before
          they're published.
        </p>
        <Link
          href="/subscribe"
          className="inline-block bg-[#16A085] text-white px-8 py-3 rounded-lg hover:bg-[#2ECC71] transition-colors font-medium"
        >
          Subscribe Now
        </Link>
      </div>
    </div>
  );
}
