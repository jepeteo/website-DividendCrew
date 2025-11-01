import type { Metadata } from "next";
import { ToolCard } from "@/components/features/ToolCard";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tools & Trackers",
  description:
    "Free dividend tracking spreadsheets, calculators, and tools for UK investors.",
};

export default function ToolsPage() {
  const tools = [
    {
      title: "Dividend Tracker Spreadsheet",
      description:
        "Track all your dividend stocks, payments, and total income. Works in Excel and Google Sheets.",
      downloadLink: "/downloads/dividend-tracker.xlsx",
      features: [
        "Track unlimited stocks",
        "Auto-calculate yield",
        "Monthly income chart",
        "Tax year summaries",
      ],
    },
    {
      title: "Portfolio Analyzer",
      description:
        "Analyze your portfolio allocation, sector exposure, and dividend concentration.",
      downloadLink: "/downloads/portfolio-analyzer.xlsx",
      features: [
        "Sector breakdown",
        "Geographic allocation",
        "Dividend safety scores",
        "Rebalancing suggestions",
      ],
    },
    {
      title: "Dividend Tax Calculator",
      description:
        "Calculate your UK dividend tax liability including the £500 allowance.",
      downloadLink: "/tools/tax-calculator",
      features: [
        "2025/26 tax rates",
        "ISA vs taxable comparison",
        "Multiple income bands",
        "Instant results",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0E2A3B] mb-4">
          Free Dividend Tools & Trackers
        </h1>
        <p className="text-lg text-[#34495E] max-w-3xl">
          Download free spreadsheets and use our calculators to manage your
          dividend portfolio like a pro. No signup required.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>

      {/* Premium Tools Coming Soon */}
      <div className="mt-16 bg-gradient-to-r from-[#0E2A3B] to-[#16A085] text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Premium Tools Coming Soon</h2>
        <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
          Advanced portfolio tracking, dividend forecasting, and tax
          optimization tools. Get early access by joining our newsletter.
        </p>
        <Link href="/subscribe">
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-[#0E2A3B] hover:bg-gray-100"
          >
            Join Waitlist
          </Button>
        </Link>
      </div>

      {/* How to Use */}
      <div className="mt-12 bg-[#F5F7F9] rounded-lg p-8">
        <h3 className="text-2xl font-bold text-[#0E2A3B] mb-4">
          How to Use These Tools
        </h3>
        <div className="space-y-4 text-[#34495E]">
          <p>
            <strong>1. Download:</strong> Click the download button for any tool
            above.
          </p>
          <p>
            <strong>2. Open:</strong> Use Microsoft Excel, Google Sheets, or
            LibreOffice.
          </p>
          <p>
            <strong>3. Customize:</strong> Enter your own stocks, dividends, and
            dates.
          </p>
          <p>
            <strong>4. Track:</strong> Update regularly to see your passive
            income grow!
          </p>
        </div>
      </div>
    </div>
  );
}
