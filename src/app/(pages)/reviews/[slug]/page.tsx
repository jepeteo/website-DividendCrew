import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/wp/helpers";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "reviews");

  if (!post) {
    return {
      title: "Review Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || "",
  };
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "reviews");

  if (!post) {
    notFound();
  }

  const rating = post.reviewFields?.rating || 5;
  const pros = post.reviewFields?.pros?.map((p: any) => p.proItem) || [];
  const cons = post.reviewFields?.cons?.map((c: any) => c.conItem) || [];
  const affiliateLink = post.reviewFields?.affiliateLink || "#";
  const platformName = post.reviewFields?.platformName || post.title;
  const buttonText = post.reviewFields?.buttonText || "Visit Platform";

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-[#16A085]">
          Home
        </Link>
        <span className="mx-2">→</span>
        <Link href="/reviews" className="hover:text-[#16A085]">
          Reviews
        </Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0E2A3B] mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < rating ? "text-[#2ECC71]" : "text-gray-300"}
              >
                ★
              </span>
            ))}
          </div>
          {post.date && (
            <time className="text-gray-600" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      {/* TL;DR / Quick Summary */}
      {(pros.length > 0 || cons.length > 0) && (
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pros */}
          {pros.length > 0 && (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✓</span> Pros
              </h3>
              <ul className="space-y-2">
                {pros.map((pro: string, index: number) => (
                  <li
                    key={index}
                    className="text-green-800 flex items-start gap-2"
                  >
                    <span className="text-green-600 mt-1">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cons */}
          {cons.length > 0 && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✗</span> Cons
              </h3>
              <ul className="space-y-2">
                {cons.map((con: string, index: number) => (
                  <li
                    key={index}
                    className="text-red-800 flex items-start gap-2"
                  >
                    <span className="text-red-600 mt-1">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Affiliate CTA */}
      <div className="mb-8 p-6 bg-gradient-to-br from-[#16A085] to-[#2ECC71] rounded-xl text-white text-center">
        <h3 className="text-2xl font-bold mb-2">{platformName}</h3>
        <p className="text-lg mb-4 opacity-95">
          Ready to get started? Click below to visit {platformName}
        </p>
        <a
          href={affiliateLink}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block"
        >
          <Button
            size="lg"
            className="bg-white text-[#16A085] hover:bg-gray-100"
          >
            {buttonText} →
          </Button>
        </a>
        <p className="text-sm mt-3 opacity-75">
          Affiliate link - I may earn a commission at no cost to you
        </p>
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none
          prose-headings:text-[#0E2A3B] prose-headings:font-bold
          prose-a:text-[#16A085] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[#0E2A3B]
          prose-ul:list-disc prose-ol:list-decimal
          prose-li:text-gray-700
          prose-p:text-gray-700 prose-p:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />

      {/* Back Link */}
      <div className="mt-8">
        <Link
          href="/reviews"
          className="inline-flex items-center text-[#16A085] hover:text-[#0E2A3B] font-medium"
        >
          ← Back to All Reviews
        </Link>
      </div>
    </article>
  );
}
