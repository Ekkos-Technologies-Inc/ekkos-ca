import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security | ekkOS',
  description: 'Enterprise-grade security for AI memory infrastructure. Verified. Audited. Production-ready.',
}

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full mb-6">
            <span className="text-green-400 font-semibold">Verification Status: 20/20 Passed</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Security First
          </h1>
          <p className="text-xl text-neutral-300">
            Enterprise-grade security verified through comprehensive production audits
          </p>
        </div>
      </Section>

      {/* Security Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Security Verification</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">&#10003;</span>
                </div>
                <h3 className="text-xl font-bold">Authentication Verified</h3>
              </div>
              <p className="text-neutral-600">
                All API endpoints require authentication. Invalid tokens rejected.
                Rate limiting enforced per tier.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">&#10003;</span>
                </div>
                <h3 className="text-xl font-bold">Encryption Verified</h3>
              </div>
              <p className="text-neutral-600">
                AES-256-GCM encryption at rest. TLS 1.3 in transit.
                Secrets never stored in plaintext.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">&#10003;</span>
                </div>
                <h3 className="text-xl font-bold">Data Isolation Verified</h3>
              </div>
              <p className="text-neutral-600">
                Row-level security policies active on all tables.
                Complete tenant isolation. Zero cross-user data access.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">&#10003;</span>
                </div>
                <h3 className="text-xl font-bold">Monitoring Active</h3>
              </div>
              <p className="text-neutral-600">
                Real-time error tracking. Complete audit trails.
                Evidence chains for all write operations.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Security Headers */}
      <Section variant="dark-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Infrastructure Security</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-lg font-bold mb-3">Transport Security</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>HTTPS enforced everywhere</li>
                <li>HSTS with preload</li>
                <li>Content Security Policy</li>
                <li>X-Frame-Options protection</li>
              </ul>
            </Card>
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-lg font-bold mb-3">Access Control</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>API key authentication</li>
                <li>OAuth 2.0 support</li>
                <li>Role-based permissions</li>
                <li>Trust hierarchy enforcement</li>
              </ul>
            </Card>
            <Card className="bg-navy-800 border-navy-700 text-white">
              <h3 className="text-lg font-bold mb-3">Compliance</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>SOC 2 Type II (in progress)</li>
                <li>GDPR compliant</li>
                <li>Data residency options</li>
                <li>Self-hosted available</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Enterprise CTA */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Enterprise Security Review</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Detailed security verification reports available to enterprise partners under NDA.
            Our team is ready to walk through every security measure with your security team.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-navy-950 text-white font-semibold rounded-lg hover:bg-navy-900 transition-colors"
          >
            Request Security Review
          </a>
        </div>
      </Section>
    </>
  )
}
