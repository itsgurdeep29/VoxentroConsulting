import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Globe, Zap, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const partners = [
  { name: "Zoho", desc: "Leading dialer and communication platform for outbound sales teams worldwide.", category: "Dialer Technology" },
  { name: "Teleforce", desc: "Cloud communication solutions powering businesses across industries.", category: "Cloud Communications" },
  { name: "TeleCMI", desc: "Enterprise-grade cloud telephony and contact center platform.", category: "Contact Center" },
  { name: "CRMgrow", desc: "All-in-one CRM and sales automation for growing businesses.", category: "CRM Platform" },
  { name: "Salesforce", desc: "The world's #1 CRM platform for sales, service, marketing, and more.", category: "Enterprise CRM" },
  { name: "More Partners", desc: "We continuously expand our partner ecosystem to deliver the best solutions.", category: "Growing Network" },
];

const benefits = [
  { icon: Handshake, title: "Trusted Partnerships", desc: "We partner with industry leaders to ensure you get the best technology stack." },
  { icon: Globe, title: "Global Coverage", desc: "Our partner network spans across continents for localized support." },
  { icon: Zap, title: "Seamless Integration", desc: "Pre-built integrations with partner platforms for rapid deployment." },
  { icon: Shield, title: "Certified Experts", desc: "Our team holds certifications across all partner platforms." },
];

const Partners = () => (
  <>
    <SEOHead title="Partners & Integrations" description="Voxentro Consulting partners with Daldo, Teleforce, TeleCMI, CRMgrow, Salesforce, and more to deliver best-in-class solutions." />

    <section className="gradient-hero particle-bg section-padding text-center">
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">Partners</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">Our Technology Partners</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We collaborate with global technology leaders to deliver unmatched solutions.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="Ecosystem" title="Partner Network" description="Our partnerships enable us to deliver comprehensive, best-in-class technology solutions." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-8 hover:border-secondary/20 transition-all duration-500 group h-full text-center">
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500">
                  <span className="text-accent-foreground font-bold text-xl">{p.name[0]}</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-secondary font-semibold">{p.category}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="Why Partner With Us" title="Partnership Benefits" />
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 hover:border-secondary/20 transition-all duration-500 group flex gap-5">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <b.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="gradient-hero rounded-3xl p-10 lg:p-14 text-center border border-border/30 particle-bg">
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">Become a Partner</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">Interested in partnering with Voxentro? Let's explore how we can grow together.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Partners;
