'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="floating-orb top-1/4 left-1/4 w-64 h-64 bg-white/[0.02]" />
        <div className="floating-orb bottom-1/3 right-1/4 w-96 h-96 bg-white/[0.01]" />

        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="text-sm font-medium text-white/80">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              At Adalabs, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">1. Information We Collect</h2>
              <p className="text-white/80 text-base">
                We may collect personal information such as your name, email address, and contact details when you interact with our website, services, or contact forms. We also collect non-personal data like browsing behavior via cookies.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">2. How We Use Your Information</h2>
              <p className="text-white/80 text-base">
                Your information is used to provide and improve our services, respond to inquiries, and personalize your experience. We may also use it for marketing purposes with your consent.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">3. Data Sharing</h2>
              <p className="text-white/80 text-base">
                We do not sell or share your personal information with third parties, except as required by law or with your explicit consent.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">4. Data Security</h2>
              <p className="text-white/80 text-base">
                We implement industry-standard security measures to protect your data from unauthorized access, use, or disclosure.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">5. Your Rights</h2>
              <p className="text-white/80 text-base">
                You have the right to access, correct, or delete your personal information. Contact us at info@adalabs.in to exercise these rights.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">6. Contact Us</h2>
              <p className="text-white/80 text-base">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email: info@adalabs.in
                <br />
                Phone: +91 5678970000
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}