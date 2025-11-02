import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for DividendCrew - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 2025";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0E2A3B] mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DividendCrew ("we", "our", or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website{" "}
              <a
                href={SITE_CONFIG.url}
                className="text-[#16A085] hover:underline"
              >
                {SITE_CONFIG.url}
              </a>{" "}
              and subscribe to our newsletter.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you agree to the collection and use of
              information in accordance with this policy. If you do not agree
              with our policies and practices, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-[#0E2A3B] mb-3">
              Personal Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Subscribe to our newsletter</li>
              <li>Download free tools and resources</li>
              <li>Contact us via email</li>
              <li>Comment on our content (if applicable)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Email address</li>
              <li>Name (if provided)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0E2A3B] mb-3">
              Automatically Collected Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain
              information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Click data and navigation patterns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Send you our newsletter and portfolio updates</li>
              <li>Provide you with requested resources and tools</li>
              <li>Improve our website content and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure website security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity
              on our website and store certain information. Cookies are small
              data files stored on your device.
            </p>

            <h3 className="text-xl font-semibold text-[#0E2A3B] mb-3">
              Types of Cookies We Use
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors use our website (Google Analytics)
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Track visitors across
                websites to display relevant advertisements
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use third-party services that may collect information used to
              identify you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Google Analytics:</strong> To analyze website traffic
                and user behavior
              </li>
              <li>
                <strong>Email Service Provider:</strong> To manage and send our
                newsletter (e.g., MailerLite, ConvertKit)
              </li>
              <li>
                <strong>WordPress:</strong> Our content management system hosted
                on a separate subdomain
              </li>
              <li>
                <strong>Vercel:</strong> Website hosting and performance
                optimization
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required by law.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Newsletter subscribers' email addresses are retained until you
              unsubscribe. Analytics data is retained according to our analytics
              provider's retention policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Your Data Protection Rights (UK GDPR)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a resident of the UK or European Economic Area (EEA),
              you have certain data protection rights:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Right to Access:</strong> You can request copies of your
                personal data
              </li>
              <li>
                <strong>Right to Rectification:</strong> You can request
                correction of inaccurate data
              </li>
              <li>
                <strong>Right to Erasure:</strong> You can request deletion of
                your personal data
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> You can request
                limitation of how we use your data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> You can request
                transfer of your data to another service
              </li>
              <li>
                <strong>Right to Object:</strong> You can object to our
                processing of your personal data
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise any of these rights, please contact us using the
              information provided at the end of this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Email Communications and Unsubscribe
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you subscribe to our newsletter, you will receive:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Monthly portfolio updates and dividend reports</li>
              <li>Stock analysis and investment insights</li>
              <li>Free tools and resources</li>
              <li>
                Occasional promotional content for recommended products (clearly
                marked)
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can unsubscribe at any time by clicking the "unsubscribe" link
              at the bottom of any email we send, or by contacting us directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Security of Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use administrative, technical, and physical security measures
              to protect your personal information. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While we strive to use commercially acceptable means to protect
              your personal information, we cannot guarantee its absolute
              security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you become aware that a child has provided us with personal
              information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Links to Other Websites
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website contains links to third-party websites, including
              affiliate links to investing platforms and services. We are not
              responsible for the privacy practices of these external sites.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We encourage you to read the privacy policies of every website you
              visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes are effective when posted on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0E2A3B] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or wish to
              exercise your data protection rights, please contact us:
            </p>
            <div className="bg-[#F5F7F9] p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@dividendcrew.com
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{" "}
                <a
                  href={SITE_CONFIG.url}
                  className="text-[#16A085] hover:underline"
                >
                  {SITE_CONFIG.url}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
