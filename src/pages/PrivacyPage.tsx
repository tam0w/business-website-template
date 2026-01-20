import { Footer } from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <article className="w-full">
      <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
        <header className="px-4 md:px-6 pt-32 pb-12">
          <h1 className="text-4xl font-display font-bold md:text-5xl text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mt-4">Last updated: January 2025</p>
        </header>

        <div className="border-separator" />

        <div className="px-4 md:px-6 py-12 space-y-12 max-w-3xl">
          <section>
            <h2 className="text-xl font-display font-bold mb-4">Information We Collect</h2>
            <p className="text-foreground leading-relaxed mb-4">
              When you contact us or use our services, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Contact information (name, email, phone number)</li>
              <li>Company information (company name, role, website)</li>
              <li>Communication history and project details</li>
              <li>Usage data when you visit our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">How We Use Your Information</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Respond to your inquiries and provide our services</li>
              <li>Send relevant updates about our work together</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Information Sharing</h2>
            <p className="text-foreground leading-relaxed">
              We do not sell your personal information. We may share information with service
              providers who help us operate our business (hosting, email, analytics), but only
              as necessary to provide our services to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Cookies</h2>
            <p className="text-foreground leading-relaxed">
              Our website uses essential cookies to function properly and analytics cookies to
              understand how visitors use our site. You can control cookie preferences through
              your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Data Security</h2>
            <p className="text-foreground leading-relaxed">
              We implement appropriate security measures to protect your information. However,
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Your Rights</h2>
            <p className="text-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal information.
              Contact us at hello@ryebrim.com to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold mb-4">Contact</h2>
            <p className="text-foreground leading-relaxed">
              Questions about this policy? Contact us at hello@ryebrim.com.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </article>
  )
}
