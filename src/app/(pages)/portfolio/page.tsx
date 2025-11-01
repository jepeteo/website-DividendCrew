import type { Metadata } from "next";
import { Table } from "@/components/ui/Table";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View my live dividend portfolio holdings and performance.",
};

export default function PortfolioPage() {
  // Example portfolio data - in production, this would come from WordPress ACF
  const portfolioData = [
    {
      ticker: "LLOY",
      name: "Lloyds Banking Group",
      shares: 2500,
      avgPrice: "0.45",
      currentPrice: "0.52",
      value: "£1,300",
      yield: "5.2%",
      annualIncome: "£67.60",
    },
    {
      ticker: "BP",
      name: "BP plc",
      shares: 350,
      avgPrice: "4.80",
      currentPrice: "5.12",
      value: "£1,792",
      yield: "4.8%",
      annualIncome: "£86.02",
    },
    {
      ticker: "GSK",
      name: "GlaxoSmithKline",
      shares: 120,
      avgPrice: "14.50",
      currentPrice: "15.80",
      value: "£1,896",
      yield: "3.6%",
      annualIncome: "£68.26",
    },
  ];

  const columns = [
    { key: "ticker", header: "Ticker" },
    { key: "name", header: "Company" },
    { key: "shares", header: "Shares" },
    { key: "currentPrice", header: "Price" },
    { key: "value", header: "Value" },
    { key: "yield", header: "Yield" },
    { key: "annualIncome", header: "Annual Income" },
  ];

  const totalValue = "£4,988";
  const totalIncome = "£221.88";
  const averageYield = "4.5%";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#0E2A3B] mb-4">
          My Dividend Portfolio
        </h1>
        <p className="text-lg text-[#34495E]">
          A transparent look at my UK dividend portfolio. Updated monthly with
          real holdings and performance.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-sm text-[#34495E] mb-1">Total Value</div>
          <div className="text-3xl font-bold text-[#0E2A3B]">{totalValue}</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-sm text-[#34495E] mb-1">Annual Income</div>
          <div className="text-3xl font-bold text-[#2ECC71]">{totalIncome}</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-sm text-[#34495E] mb-1">Average Yield</div>
          <div className="text-3xl font-bold text-[#16A085]">
            {averageYield}
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-[#0E2A3B] mb-6">Holdings</h2>
        <Table columns={columns} data={portfolioData} striped />
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This is for educational purposes only and
          not financial advice. I'm not authorised by the FCA. Past performance
          is not indicative of future results. Do your own research before
          investing.
        </p>
      </div>
    </div>
  );
}
