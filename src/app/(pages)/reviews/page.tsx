import type { Metadata } from "next";
import { ReviewCard } from "@/components/features/ReviewCard";
import { getReviews } from "@/lib/wp/helpers";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Honest reviews of UK investing platforms, ISA providers, and dividend tools. No hype, just real experiences.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function ReviewsPage() {
  // Fetch reviews from WordPress
  const reviewsData = await getReviews();

  // Transform WordPress data to match ReviewCard props
  const reviews = reviewsData.map((review: any) => ({
    title: review.title,
    excerpt: review.excerpt || "",
    rating: review.reviewFields?.rating || 5,
    pros: review.reviewFields?.pros?.map((p: any) => p.proItem) || [],
    cons: review.reviewFields?.cons?.map((c: any) => c.conItem) || [],
    affiliateLink: review.reviewFields?.affiliateLink || "#",
    reviewLink: `/reviews/${review.slug}`,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0E2A3B] mb-4">
          Platform Reviews
        </h1>
        <p className="text-lg text-[#34495E] max-w-3xl">
          Honest, unbiased reviews of UK investing platforms and tools. All
          reviews are based on real usage and testing. Affiliate links are
          clearly marked.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => <ReviewCard key={review.title} {...review} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-gray-600">
              No reviews found. Create your first review post in WordPress with
              the "Reviews" category.
            </p>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 bg-[#F5F7F9] rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#0E2A3B] mb-2">
          Affiliate Disclosure
        </h3>
        <p className="text-sm text-[#34495E]">
          Some links on this page are affiliate links. If you sign up through
          these links, I may earn a small commission at no extra cost to you.
          This helps support the site. All opinions are my own and based on real
          experience.
        </p>
      </div>
    </div>
  );
}
