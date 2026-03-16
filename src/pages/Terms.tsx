import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  { title: "Acceptance of Terms", content: "By accessing and using the Voxentro Consulting website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services." },
  { title: "Services", content: "Voxentro Consulting provides technology consulting services including CRM dialer solutions, IVR systems, AI-powered customer support, cloud telephony, call center setup, and business automation. The scope, deliverables, and pricing of specific services will be outlined in individual service agreements." },
  { title: "Intellectual Property", content: "All content on this website, including text, graphics, logos, icons, images, and software, is the property of Voxentro Consulting and is protected by international copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent." },
  { title: "Limitation of Liability", content: "Voxentro Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim." },
  { title: "Confidentiality", content: "Both parties agree to maintain the confidentiality of any proprietary or confidential information exchanged during the course of the business relationship. This obligation survives the termination of any agreement." },
  { title: "Termination", content: "Either party may terminate the service agreement with 30 days written notice. Upon termination, all outstanding fees become due, and each party shall return or destroy the other's confidential information." },
  { title: "Governing Law", content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles." },
  { title: "Contact", content: "For questions regarding these Terms and Conditions, contact us at sales@voxentroconsulting.in." },
];

const Terms = () => (
  <>
    <SEOHead title="Terms & Conditions" description="Read the Terms and Conditions for Voxentro Consulting services and website usage." />
    <section className="gradient-hero particle-bg section-padding text-center">
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: March 2026</p>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-wide max-w-4xl mx-auto space-y-8">
        {sections.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.05}>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-bold text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.content}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </>
);

export default Terms;
