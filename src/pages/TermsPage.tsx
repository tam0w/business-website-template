import { Footer } from '@/components/Footer'

export default function TermsPage() {
  return (
    <article className="w-full">
      <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
        <header className="px-4 md:px-6 pt-32 pb-12">
          <h1 className="text-4xl font-display font-bold md:text-5xl text-foreground">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mt-4">Last updated: January 2025</p>
        </header>

        <div className="border-separator" />

        <div className="px-4 md:px-6 py-12 space-y-12 max-w-3xl">
          <section>
            <h2 className="text-xl font-display font-bold mb-4">Agreement to Terms</h2>
            <p className="text-foreground leading-relaxed">
              By accessing our website or engaging our services, you agree to these Terms of
              Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-foreground leading-relaxed">
              {companyName} provides content marketing, LinkedIn management, and business
              automation services for B2B technology companies. Specific deliverables, timelines,
              and pricing are defined in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Client Responsibilities</h2>
            <p className="text-foreground leading-relaxed mb-4">
              When working with us, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Provide accurate information about your company and requirements</li>
              <li>Review and provide timely feedback on deliverables</li>
              <li>Ensure you have rights to any materials you provide to us</li>
              <li>Pay invoices according to agreed terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Intellectual Property</h2>
            <p className="text-foreground leading-relaxed">
              Upon full payment, you own the content we create specifically for you. We retain
              ownership of our tools, processes, templates, and any pre-existing materials. We
              may use anonymized case studies of our work together for marketing purposes unless
              otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Confidentiality</h2>
            <p className="text-foreground leading-relaxed">
              We treat all client information as confidential. We will not disclose your
              proprietary information to third parties without your consent, except as required
              by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Limitation of Liability</h2>
            <p className="text-foreground leading-relaxed">
              Our liability is limited to the fees paid for the specific services in question.
              We are not liable for indirect, consequential, or incidental damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Termination</h2>
            <p className="text-foreground leading-relaxed">
              Either party may terminate a service engagement with 30 days written notice.
              Fees for work completed prior to termination remain due.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Governing Law</h2>
            <p className="text-foreground leading-relaxed">
              These terms are governed by the laws of India. Any disputes will be resolved
              in the courts of Karnataka, India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Contact</h2>
            <p className="text-foreground leading-relaxed">
              Questions about these terms? Contact us at hello@ryebrim.com.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </article>
  )
}
