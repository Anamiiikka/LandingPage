'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
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
              Terms and Conditions
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              These Terms and Conditions govern your use of Adalabs' services and website. By accessing our site, you agree to these terms.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/80 text-base">
                By using our website or services, you agree to comply with these Terms and Conditions. If you do not agree, please do not use our services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">2. Use of Services</h2>
              <p className="text-white/80 text-base">
                You may use our services for lawful purposes only. Unauthorized use, including attempts to disrupt or hack our systems, is prohibited.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">3. Intellectual Property</h2>
              <p className="text-white/80 text-base">
                All content on our website, including text, images, and code, is owned by Adalabs and protected by copyright laws.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">4. Limitation of Liability</h2>
              <p className="text-white/80 text-base">
                Adalabs is not liable for any damages arising from the use of our services, including indirect or consequential damages.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">5. Changes to Terms</h2>
              <p className="text-white/80 text-base">
                We may update these Terms and Conditions at any time. Continued use of our services constitutes acceptance of the updated terms.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">6. Contact Us</h2>
              <p className="text-white/80 text-base">
                For questions about these Terms and Conditions, please contact us at:
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