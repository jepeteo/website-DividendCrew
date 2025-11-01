import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/wp/helpers";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "guides");

  if (!post) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || "",
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "guides");

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-[#16A085]">
          Home
        </Link>
        <span className="mx-2">→</span>
        <Link href="/guides" className="hover:text-[#16A085]">
          Guides
        </Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0E2A3B] mb-4">
          {post.title}
        </h1>
        {post.date && (
          <time className="text-gray-600" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
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

      {/* CTA */}
      <div className="mt-12 p-8 bg-gradient-to-br from-[#16A085] to-[#2ECC71] rounded-xl text-white">
        <h3 className="text-2xl font-bold mb-3">
          Want More Dividend Insights?
        </h3>
        <p className="text-lg mb-6 opacity-95">
          Get weekly tips, portfolio updates, and free tools delivered to your
          inbox.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-[#16A085] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Subscribe Free →
        </Link>
      </div>

      {/* Back Link */}
      <div className="mt-8">
        <Link
          href="/guides"
          className="inline-flex items-center text-[#16A085] hover:text-[#0E2A3B] font-medium"
        >
          ← Back to All Guides
        </Link>
      </div>
    </article>
  );
}
