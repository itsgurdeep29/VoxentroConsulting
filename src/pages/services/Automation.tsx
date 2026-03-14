import { Link } from "react-router-dom";
import { Zap, ArrowRight, CheckCircle2, Workflow, Database, RefreshCw } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: Zap, title: "Workflow Automation", desc: "Automate complex business processes with intelligent workflow engines." },
  { icon: Workflow, title: "API Integrations", desc: "Connect all your tools and platforms with seamless API integrations." },
  { icon: Database, title: "Data Synchronization", desc: "Keep data consistent across all systems with real-time synchronization." },
  { icon: RefreshCw, title: "Process Optimization", desc: "Identify bottlenecks and optimize processes for maximum efficiency." },
];

const benefits = ["Eliminate manual data entry", "Reduce operational costs by 40%", "Error-free process execution", "Cross-platform integration", "Custom automation rules", "Real-time process monitoring"];

const Automation = () => (
  <>
    <SEOHead title="Business Automation" description="Streamline operations with intelligent workflow automation, API integrations, and process optimization."  />
    <section className="gradient-hero particle-bg section-padding text-center">
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">Service</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">Business Automation</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Free your team to focus on high-value work with intelligent automation.</p>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-padding"><div className="container-wide"><SectionHeading label="Features" title="Automate Everything" /><div className="grid sm:grid-cols-2 gap-6">{features.map((f, i) => (<ScrollReveal key={f.title} delay={i * 0.1}><div className="glass-card rounded-2xl p-8 hover:border-secondary/20 transition-all duration-500 group h-full"><div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500"><f.icon className="w-6 h-6 text-accent-foreground" /></div><h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3><p className="text-muted-foreground">{f.desc}</p></div></ScrollReveal>))}</div></div></section>
    <section className="section-padding"><div className="container-wide"><SectionHeading label="Benefits" title="Measurable Impact" /><ScrollReveal><div className="glass-card rounded-2xl p-8 lg:p-10"><div className="grid sm:grid-cols-2 gap-4">{benefits.map((b) => (<div key={b} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" /><span className="text-foreground">{b}</span></div>))}</div></div></ScrollReveal></div></section>
    <section className="section-padding"><div className="container-wide"><ScrollReveal><div className="gradient-hero rounded-3xl p-10 lg:p-14 text-center border border-border/30 particle-bg"><div className="relative z-10"><h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">Automate & Grow</h2><p className="text-muted-foreground max-w-lg mx-auto mb-8">Let us design automation solutions that save time and money.</p><Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1">Get Started <ArrowRight className="w-4 h-4" /></Link></div></div></ScrollReveal></div></section>
  </>
);

export default Automation;
