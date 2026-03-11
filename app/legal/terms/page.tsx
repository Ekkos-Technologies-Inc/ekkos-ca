import { Section } from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Ekkos Technologies Inc.',
  description: 'Terms of service for Ekkos Technologies Inc. and ekkOS.',
}

export default function TermsPage() {
  return (
    <>
      <Section variant="dark" className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Terms of Service
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
                  <li><a href="#acceptance" className="text-neutral-600 hover:text-neutral-900">Acceptance</a></li>
                  <li><a href="#services" className="text-neutral-600 hover:text-neutral-900">Services</a></li>
                  <li><a href="#accounts" className="text-neutral-600 hover:text-neutral-900">Accounts</a></li>
                  <li><a href="#use-restrictions" className="text-neutral-600 hover:text-neutral-900">Use Restrictions</a></li>
                  <li><a href="#intellectual-property" className="text-neutral-600 hover:text-neutral-900">Intellectual Property</a></li>
                  <li><a href="#privacy" className="text-neutral-600 hover:text-neutral-900">Privacy</a></li>
                  <li><a href="#termination" className="text-neutral-600 hover:text-neutral-900">Termination</a></li>
                  <li><a href="#disclaimers" className="text-neutral-600 hover:text-neutral-900">Disclaimers</a></li>
                  <li><a href="#limitation-liability" className="text-neutral-600 hover:text-neutral-900">Limitation of Liability</a></li>
                  <li><a href="#changes" className="text-neutral-600 hover:text-neutral-900">Changes</a></li>
                  <li><a href="#contact" className="text-neutral-600 hover:text-neutral-900">Contact</a></li>
                </ul>
              </nav>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <section id="acceptance">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-neutral-700">
                  By accessing or using ekkOS, you agree to be bound by these Terms of Service. If you 
                  disagree with any part of these terms, you may not access the service.
                </p>
              </section>

              <section id="services">
                <h2 className="text-2xl font-bold mb-4">2. Services</h2>
                <p className="text-neutral-700 mb-4">
                  ekkOS provides cognitive infrastructure services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                  <li>Event-sourced memory storage</li>
                  <li>Learning episode generation</li>
                  <li>Pattern intelligence and extraction</li>
                  <li>APIs and SDKs for integration</li>
                </ul>
              </section>

              <section id="accounts">
                <h2 className="text-2xl font-bold mb-4">3. Accounts</h2>
                <p className="text-neutral-700 mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                  <li>Maintaining the security of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section id="use-restrictions">
                <h2 className="text-2xl font-bold mb-4">4. Use Restrictions</h2>
                <p className="text-neutral-700 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                  <li>Use the service for any illegal purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Attempt to gain unauthorized access</li>
                  <li>Use the service to harm others or violate their rights</li>
                </ul>
              </section>

              <section id="intellectual-property">
                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                <p className="text-neutral-700">
                  The service and its original content, features, and functionality are owned by Ekkos 
                  Technologies Inc. and are protected by international copyright, trademark, and other 
                  intellectual property laws.
                </p>
              </section>

              <section id="privacy">
                <h2 className="text-2xl font-bold mb-4">6. Privacy</h2>
                <p className="text-neutral-700">
                  Your use of the service is also governed by our Privacy Policy. Please review our 
                  Privacy Policy to understand our practices.
                </p>
              </section>

              <section id="termination">
                <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                <p className="text-neutral-700">
                  We may terminate or suspend your account and access to the service immediately, without 
                  prior notice, for conduct that we believe violates these Terms of Service or is harmful 
                  to other users, us, or third parties.
                </p>
              </section>

              <section id="disclaimers">
                <h2 className="text-2xl font-bold mb-4">8. Disclaimers</h2>
                <p className="text-neutral-700">
                  The service is provided "as is" and "as available" without warranties of any kind, 
                  either express or implied. We do not warrant that the service will be uninterrupted, 
                  secure, or error-free.
                </p>
              </section>

              <section id="limitation-liability">
                <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                <p className="text-neutral-700">
                  In no event shall Ekkos Technologies Inc. be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including without limitation, loss of 
                  profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
                <p className="text-neutral-700">
                  We reserve the right to modify these terms at any time. We will notify users of any 
                  material changes by posting the new terms on this page and updating the "Last updated" date.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                <p className="text-neutral-700">
                  If you have questions about these Terms of Service, please contact us at{' '}
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




















































































































































































































