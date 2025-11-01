import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { getGuides } from "@/lib/wp/helpers";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Comprehensive guides on dividend investing, ISAs, tax planning, and building passive income in the UK.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function GuidesPage() {
  // Fetch guides from WordPress
  const guides = await getGuides();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0E2A3B] mb-4">
          Dividend Investing Guides
        </h1>
        <p className="text-lg text-[#34495E] max-w-3xl">
          Learn everything you need to know about dividend investing in the UK.
          From beginner basics to advanced strategies, these guides will help
          you build reliable passive income.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides && guides.length > 0 ? (
          guides.map((guide) => (
            <Card
              key={guide.slug}
              title={guide.title}
              description={guide.excerpt || ""}
              href={`/guides/${guide.slug}`}
              footer={
                <span className="text-sm text-[#16A085] font-medium">
                  Read Guide →
                </span>
              }
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-gray-600">
              No guides found. Create your first guide post in WordPress with
              the "Guides" category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
