import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle2, BarChart3, Users, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: Phone, title: "Predictive Dialing", desc: "AI-powered predictive dialing that maximizes agent talk time and minimizes idle periods." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Live dashboards showing call metrics, conversion rates, and agent performance." },
  { icon: Users, title: "CRM Integration", desc: "Seamless integration with Salesforce, HubSpot, Zoho, and custom CRM platforms." },
  { icon: Zap, title: "Power Dialing", desc: "High-speed power dialing with automatic voicemail drop and call disposition." },
];

const benefits = [
  "Increase connect rates by up to 300%",
  "Reduce agent idle time by 85%",
  "Automated lead prioritization",
  "Real-time call recording & monitoring",
  "Compliance with TCPA & DNC regulations",
  "Custom workflow automation",
];

const CRMDialer = () => (
  <>
    <SEOHead title="CRM Dialer Solutions" description="Advanced CRM dialer solutions with predictive dialing, power dialing, and seamless CRM integration. Boost your sales team's productivity."  />

    <section className="gradient-hero particle-bg section-padding text-center">
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">Service</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">CRM Dialer Solutions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Supercharge your sales team with AI-powered dialing integrated directly into your CRM.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="Features" title="Built for Sales Teams" description="Every feature is designed to maximize your team's efficiency and close rates." />
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 hover:border-secondary/20 transition-all duration-500 group h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <f.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="Benefits" title="Why Choose Our CRM Dialer" />
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8 lg:p-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="gradient-hero rounded-3xl p-10 lg:p-14 text-center border border-border/30 particle-bg">
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">Ready to Boost Your Sales?</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">Get a personalized demo and see how our CRM dialer can transform your sales process.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1">
                Request Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default CRMDialer;
