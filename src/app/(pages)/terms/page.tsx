import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for DividendCrew - Legal terms governing your use of our website and services.",
};

export default function TermsPage() {
  const lastUpdated = "November 2025";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0E2A3B] mb-4">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using DividendCrew ({SITE_CONFIG.url}), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Use apply to all visitors, users, and others who access or use the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Educational Content Only - Not Financial Advice
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-4">
              <p className="text-red-900 font-semibold mb-3">
                ⚠️ CRITICAL DISCLAIMER
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                DividendCrew is NOT a financial advisor and is NOT authorised or regulated by the Financial Conduct Authority (FCA).
              </p>
              <p className="text-gray-700 leading-relaxed">
                All content on this website is for educational and informational purposes only and should NOT be considered financial advice, investment recommendations, or an inducement to trade.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What we provide:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Educational articles about dividend investing strategies</li>
              <li>Personal portfolio updates documenting our own investment journey</li>
              <li>Reviews of investment platforms based on personal experience</li>
              <li>Free tools and resources for research and tracking</li>
              <li>General information about UK investing and dividend stocks</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What we DO NOT provide:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Personalized financial advice tailored to your situation</li>
              <li>Specific investment recommendations for your portfolio</li>
              <li>Tax planning or legal advice</li>
              <li>Predictions or guarantees about investment performance</li>
              <li>Professional financial planning services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Investment Risk Warning
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Capital at Risk:</strong> Investing in stocks, shares, and other securities carries risk. The value of your investments can go down as well as up, and you may get back less than you invested.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Past Performance:</strong> Past performance is not a reliable indicator of future results. Any historical returns, expected returns, or probability projections are not guaranteed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Seek Professional Advice:</strong> Before making any investment decisions, you should consider seeking advice from an independent FCA-regulated financial advisor who can assess your personal circumstances and risk tolerance.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Use License
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily access and view the content on DividendCrew for personal, non-commercial use only. This license does not include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Modifying or copying our materials without permission</li>
              <li>Using materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software on this website</li>
              <li>Removing any copyright or proprietary notations</li>
              <li>Transferring materials to another person or server</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This license shall automatically terminate if you violate any of these restrictions. Upon termination, you must destroy any downloaded materials in your possession.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Intellectual Property Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unless otherwise stated, DividendCrew owns the intellectual property rights for all material on this website, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Website design, layout, and user interface</li>
              <li>Original articles, blog posts, and written content</li>
              <li>Graphics, logos, and branding materials</li>
              <li>Spreadsheets, calculators, and downloadable tools</li>
              <li>Portfolio tracking templates and resources</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You may share our content with proper attribution and a link back to the original source. You may not republish, redistribute, or sell our content without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              User-Generated Content and Comments
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If we enable comments or user submissions on our website, you agree that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>You grant us a non-exclusive license to use, reproduce, and publish your submissions</li>
              <li>Your content does not violate any third-party rights</li>
              <li>You will not post spam, offensive content, or promotional material</li>
              <li>We reserve the right to remove or modify any user-generated content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Third-Party Links and Affiliate Relationships
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DividendCrew contains links to third-party websites and may earn affiliate commissions when you use these links. Please note:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We are not responsible for the content or practices of linked websites</li>
              <li>Affiliate relationships are disclosed in accordance with our <a href="/affiliate-disclosure" className="text-[#16A085] hover:underline">Affiliate Disclosure</a></li>
              <li>Commission earnings do not affect our editorial independence</li>
              <li>You should review the terms and privacy policies of any third-party sites you visit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Accuracy of Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive to provide accurate and up-to-date information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We make no warranties about the completeness, reliability, or accuracy of information</li>
              <li>Stock prices, dividend yields, and financial data may be delayed or inaccurate</li>
              <li>Tax laws and investment regulations change regularly</li>
              <li>Platform features and fees may change after publication</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for verifying any information before making investment decisions. Always check current data directly with the relevant platform or financial institution.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, DividendCrew and its operators shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Any investment losses or financial damages resulting from use of our content</li>
              <li>Errors, omissions, or inaccuracies in our information</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Third-party conduct or content on linked websites</li>
              <li>Service interruptions, delays, or technical issues</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You use this website entirely at your own risk. We provide content on an "as is" and "as available" basis without warranties of any kind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless DividendCrew, its operators, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your use of the website, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Newsletter and Email Communications
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By subscribing to our newsletter, you agree that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We may send you regular portfolio updates, educational content, and promotional emails</li>
              <li>You can unsubscribe at any time via the link in each email</li>
              <li>Your email address will be processed in accordance with our <a href="/privacy-policy" className="text-[#16A085] hover:underline">Privacy Policy</a></li>
              <li>We comply with UK GDPR and data protection regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Prohibited Uses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not use our website:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>For any unlawful purpose or to solicit unlawful activity</li>
              <li>To impersonate any person or entity</li>
              <li>To upload viruses, malware, or other malicious code</li>
              <li>To harvest or collect user information without consent</li>
              <li>To interfere with or disrupt our servers or networks</li>
              <li>To create derivative works without permission</li>
              <li>To scrape content using automated tools or bots</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Use are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this page with an updated "Last updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Severability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining terms remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms of Use, please contact us:
            </p>
            <div className="bg-[#F5F7F9] p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> legal@dividendcrew.com
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{" "}
                <a href={SITE_CONFIG.url} className="text-[#16A085] hover:underline">
                  {SITE_CONFIG.url}
                </a>
              </p>
            </div>
          </section>

          <div className="bg-[#0E2A3B] text-white rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-3">
              Your Responsibility
            </h3>
            <p className="text-white/90 leading-relaxed">
              By using DividendCrew, you acknowledge that you are solely responsible for your investment decisions. We provide education and information, but the ultimate responsibility for researching, evaluating, and making financial decisions rests with you. Always conduct your own due diligence and consider seeking professional financial advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
