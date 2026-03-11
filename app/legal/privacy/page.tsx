import { Section } from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ekkos Technologies Inc.',
  description: 'Privacy policy for Ekkos Technologies Inc. and ekkOS.',
}

export default function PrivacyPage() {
  return (
    <>
      <Section variant="dark" className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <nav className="sticky top-24">
                <h2 className="text-sm font-semibold text-neutral-900 mb-4">Contents</h2>
                <ul className="space-y-2 text-sm">
                  <li><a href="#introduction" className="text-neutral-600 hover:text-neutral-900">Introduction</a></li>
                  <li><a href="#data-collection" className="text-neutral-600 hover:text-neutral-900">Data Collection</a></li>
                  <li><a href="#data-use" className="text-neutral-600 hover:text-neutral-900">How We Use Data</a></li>
                  <li><a href="#data-sharing" className="text-neutral-600 hover:text-neutral-900">Data Sharing</a></li>
                  <li><a href="#security" className="text-neutral-600 hover:text-neutral-900">Security</a></li>
                  <li><a href="#your-rights" className="text-neutral-600 hover:text-neutral-900">Your Rights</a></li>
                  <li><a href="#changes" className="text-neutral-600 hover:text-neutral-900">Changes</a></li>
                  <li><a href="#contact" className="text-neutral-600 hover:text-neutral-900">Contact</a></li>
                </ul>
              </nav>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <section id="introduction">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-neutral-700 mb-4">
                  Ekkos Technologies Inc. ("we", "our", or "us") operates ekkOS, a cognitive infrastructure 
                  platform. This Privacy Policy explains how we collect, use, and protect your information.
                </p>
                <p className="text-neutral-700">
                  We are committed to protecting your privacy and ensuring the security of your data. Our 
                  platform is built with privacy-first principles, including row-level security and zero 
                  company access to raw user memory.
                </p>
              </section>

              <section id="data-collection">
                <h2 className="text-2xl font-bold mb-4">2. Data Collection</h2>
                <p className="text-neutral-700 mb-4">
                  We collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                  <li>Account information (name, email, company)</li>
                  <li>Usage data (events, interactions, patterns)</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                  <li>Communication data (support requests, feedback)</li>
                </ul>
              </section>

              <section id="data-use">
                <h2 className="text-2xl font-bold mb-4">3. How We Use Data</h2>
                <p className="text-neutral-700 mb-4">
                  We use your data to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Process events and generate learning episodes</li>
                  <li>Extract and share patterns (with privacy controls)</li>
                  <li>Respond to support requests</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </section>

              <section id="data-sharing">
                <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
                <p className="text-neutral-700 mb-4">
                  We do not sell your data. We may share data only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and security</li>
                  <li>With service providers under strict confidentiality agreements</li>
                </ul>
              </section>

              <section id="security">
                <h2 className="text-2xl font-bold mb-4">5. Security</h2>
                <p className="text-neutral-700">
                  We implement industry-standard security measures, including encryption, row-level security, 
                  and regular security audits. Your data is protected by strict access controls and privacy 
                  boundaries that even our team cannot bypass.
                </p>
              </section>

              <section id="your-rights">
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="text-neutral-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your data</li>
                  <li>Export your data</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent</li>
                </ul>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
                <p className="text-neutral-700">
                  We may update this Privacy Policy from time to time. We will notify you of any material 
                  changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                <p className="text-neutral-700">
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="/contact" className="text-electric-500 hover:underline">our contact page</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}




















































































































































































































