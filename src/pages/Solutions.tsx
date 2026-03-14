import { BarChart3, TrendingUp, MessageCircle, Bot, PhoneCall, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const solutions = [
  { icon: BarChart3, title: "Lead Management Systems", description: "Capture, track, and nurture leads with intelligent systems that score prospects and guide your sales team to close more deals." },
  { icon: TrendingUp, title: "Sales Automation", description: "Automate repetitive sales tasks — from follow-up emails to pipeline management — so your team can focus on relationships." },
  { icon: MessageCircle, title: "Customer Engagement Tools", description: "Omnichannel engagement platforms that connect with customers via voice, chat, email, SMS, and social media." },
  { icon: Bot, title: "AI Chatbots", description: "Deploy intelligent conversational AI that handles inquiries, qualifies leads, and provides instant support." },
  { icon: PhoneCall, title: "Call Center Optimization", description: "Optimize call center performance with analytics, workforce management, and intelligent routing." },
  {
    icon: Phone,
    title: "Cloud Telephony & IVR Systems",
    description: "Deploy scalable cloud telephony and intelligent IVR solutions that automate call routing, enhance customer experience, and streamline communication for modern businesses."
  }  
];

const Solutions = () => (
  <>
    <SEOHead title="Solutions" description="Discover Voxentro Consulting's business solutions: Lead Management, Sales Automation, Customer Engagement, AI Chatbots, and Call Center Optimization." />

    <section className="gradient-hero particle-bg section-padding text-center">
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">Solutions</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">Business Solutions Built for Growth</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">End-to-end business solutions that streamline operations and elevate customer experiences.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="What We Solve" title="Tailored for Your Business Needs" description="Each solution is customized to your industry, scale, and growth goals." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="Our Process" title="How We Work" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "We analyze your business needs, challenges, and objectives." },
            { step: "02", title: "Strategy", desc: "We design a tailored technology roadmap aligned with your goals." },
            { step: "03", title: "Implementation", desc: "Our team deploys and integrates solutions with minimal disruption." },
            { step: "04", title: "Optimization", desc: "Continuous monitoring and refinement for peak performance." },
          ].map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center h-full hover:border-secondary/20 transition-all duration-500 group">
                <div className="text-4xl font-extrabold gradient-text mb-3">{item.step}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Solutions;
