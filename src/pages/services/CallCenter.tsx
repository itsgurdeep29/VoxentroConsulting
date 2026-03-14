import { Link } from "react-router-dom";
import { Settings, ArrowRight, CheckCircle2, Monitor, Users, BarChart3 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: Settings, title: "Infrastructure Design", desc: "Complete call center infrastructure from network architecture to agent workstations." },
  { icon: Monitor, title: "Agent Desktop", desc: "Unified agent desktop with CRM, dialer, and knowledge base in a single interface." },
  { icon: Users, title: "Workforce Management", desc: "AI-powered scheduling, forecasting, and performance tracking for your team." },
  { icon: BarChart3, title: "Quality Monitoring", desc: "Automated QA scoring, call recording, and compliance monitoring." },
];

const benefits = ["Turnkey call center solutions", "Inbound & outbound capabilities", "Remote agent support", "Custom reporting dashboards", "Scalable seat licensing", "Training & onboarding support"];

const CallCenter = () => (
  <>
    <SEOHead title="Call Center Setup" description="End-to-end call center setup with infrastructure design, agent desktops, workforce management, and quality monitoring." />
    <section className="gradient-hero particle-bg section-padding text-center">
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">Service</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">Call Center Setup</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Complete call center solutions from design to deployment and beyond.</p>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-padding"><div className="container-wide"><SectionHeading label="Features" title="Complete Call Center Solutions" /><div className="grid sm:grid-cols-2 gap-6">{features.map((f, i) => (<ScrollReveal key={f.title} delay={i * 0.1}><div className="glass-card rounded-2xl p-8 hover:border-secondary/20 transition-all duration-500 group h-full"><div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500"><f.icon className="w-6 h-6 text-accent-foreground" /></div><h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3><p className="text-muted-foreground">{f.desc}</p></div></ScrollReveal>))}</div></div></section>
    <section className="section-padding"><div className="container-wide"><SectionHeading label="Benefits" title="Built to Scale" /><ScrollReveal><div className="glass-card rounded-2xl p-8 lg:p-10"><div className="grid sm:grid-cols-2 gap-4">{benefits.map((b) => (<div key={b} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" /><span className="text-foreground">{b}</span></div>))}</div></div></ScrollReveal></div></section>
    <section className="section-padding"><div className="container-wide"><ScrollReveal><div className="gradient-hero rounded-3xl p-10 lg:p-14 text-center border border-border/30 particle-bg"><div className="relative z-10"><h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">Launch Your Call Center</h2><p className="text-muted-foreground max-w-lg mx-auto mb-8">From planning to launch, we handle every detail.</p><Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1">Get Started <ArrowRight className="w-4 h-4" /></Link></div></div></ScrollReveal></div></section>
  </>
);

export default CallCenter;
