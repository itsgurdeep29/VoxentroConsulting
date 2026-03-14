import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  { title: "Information We Collect", content: "We collect information you provide directly, such as your name, email address, phone number, and company details when you fill out our contact forms, request a consultation, or subscribe to our newsletter. We also automatically collect certain technical information including IP address, browser type, device information, and browsing behavior on our website." },
  { title: "How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services; communicate with you about our services, updates, and promotions; respond to your inquiries and provide customer support; analyze website usage to improve user experience; and comply with legal obligations." },
  { title: "Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential." },
  { title: "Data Security", content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure data storage, and regular security audits." },
  { title: "Cookies", content: "Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, although this may limit some functionality of our website." },
  { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by contacting us or using the unsubscribe link in our emails." },
  { title: "Contact Us", content: "If you have questions about this Privacy Policy, please contact us at sales@voxentroconsulting.in." },
];

const PrivacyPolicy = () => (
  <>
    <SEOHead title="Privacy Policy" description="Read Voxentro Consulting's privacy policy. Learn how we collect, use, and protect your personal information." />
    <section className="gradient-hero particle-bg section-padding text-center">
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: March 2025</p>
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

export default PrivacyPolicy;
