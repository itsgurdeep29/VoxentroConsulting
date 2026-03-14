import { Target, Eye, Award, Globe, Users, Lightbulb } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const expertise = [
  { icon: Target, title: "CRM & Dialer Technology", desc: "Deep expertise in deploying CRM systems with advanced auto-dialing capabilities." },
  { icon: Lightbulb, title: "AI & Machine Learning", desc: "Cutting-edge AI implementations for predictive analytics and customer insights." },
  { icon: Globe, title: "Cloud Infrastructure", desc: "Scalable cloud telephony and infrastructure solutions for global operations." },
  { icon: Users, title: "Customer Experience", desc: "Designing end-to-end customer journeys that drive satisfaction and retention." },
];

const About = () => (
  <>
    <SEOHead title="About Us" description="Learn about Voxentro Consulting — a global technology consultancy specializing in CRM, AI automation, IVR, and cloud telephony solutions." />

    <section className="gradient-hero particle-bg section-padding text-center">
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">About Voxentro</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">Driving Innovation Globally</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We are a team of technology experts dedicated to transforming how businesses communicate, sell, and serve their customers.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide grid md:grid-cols-2 gap-8">
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8 h-full hover:border-secondary/20 transition-all duration-500 group">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
              <Target className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">To empower businesses worldwide with innovative AI, CRM, and communication technology solutions that drive efficiency, enhance customer engagement, and accelerate growth.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="glass-card rounded-2xl p-8 h-full hover:border-secondary/20 transition-all duration-500 group">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
              <Eye className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">To become the world's most trusted technology consulting partner, delivering cutting-edge CRM and AI solutions that redefine customer connections.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="Expertise" title="What We Excel At" description="Years of experience across industries have sharpened our capabilities." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((e, i) => (
            <ScrollReveal key={e.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center h-full hover:border-secondary/20 hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <e.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide text-center">
        <SectionHeading label="Global Reach" title="Serving Clients Worldwide" />
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "25+", label: "Countries" },
              { value: "500+", label: "Clients" },
              { value: "50+", label: "Team Members" },
              { value: "8+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-6 hover:border-secondary/20 transition-all duration-500">
                <div className="text-3xl font-extrabold gradient-text">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="Why Us" title="Why Voxentro Consulting" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Industry-Leading Technology", desc: "We partner with top technology providers to deliver best-in-class solutions." },
            { title: "Custom Solutions", desc: "No cookie-cutter approaches — every solution is designed for your business." },
            { title: "Rapid Deployment", desc: "Our agile methodology ensures quick implementation without compromising quality." },
            { title: "Ongoing Support", desc: "24/7 technical support and continuous optimization keep your systems running smoothly." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="flex gap-4 p-6 glass-card rounded-2xl hover:border-secondary/20 transition-all duration-500">
                <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
