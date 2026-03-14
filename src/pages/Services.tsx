import { Link } from "react-router-dom";
import { Phone, Headphones, Bot, Cloud, Settings, Zap, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Phone,
    title: "CRM Dialer Solutions",
    description: "Advanced auto-dialing systems integrated with your CRM for maximum sales efficiency.",
    href: "/services/crm-dialer",
    features: ["Predictive & Power Dialing", "CRM Integration", "Call Recording & Analytics", "Lead Prioritization"],
  },
  {
    icon: Headphones,
    title: "IVR Systems",
    description: "Interactive voice response systems that route calls intelligently and improve customer experience.",
    href: "/services/ivr-systems",
    features: ["Multi-level IVR Design", "Natural Language Processing", "Self-service Options", "Real-time Reporting"],
  },
  {
    icon: Bot,
    title: "AI Powered Customer Support",
    description: "Intelligent chatbots and AI-driven customer support that works around the clock.",
    href: "/services/ai-support",
    features: ["AI Chatbots", "Sentiment Analysis", "Automated Ticket Routing", "Predictive Support"],
  },
  {
    icon: Cloud,
    title: "Cloud Telephony",
    description: "Scalable cloud-based phone systems for businesses of any size, anywhere in the world.",
    href: "/services/cloud-telephony",
    features: ["Virtual Phone Numbers", "SIP Trunking", "WebRTC Integration", "Global Number Provisioning"],
  },
  {
    icon: Settings,
    title: "Call Center Setup",
    description: "End-to-end call center infrastructure design, deployment, and management.",
    href: "/services/call-center",
    features: ["Infrastructure Design", "Agent Desktop Setup", "Quality Monitoring", "Workforce Management"],
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Streamline operations with intelligent automation across your business workflows.",
    href: "/services/automation",
    features: ["Workflow Automation", "API Integrations", "Data Synchronization", "Process Optimization"],
  },
];

const Services = () => (
  <>
    <SEOHead
      title="Services"
      description="Explore Voxentro Consulting's services: CRM Dialer Solutions, IVR Systems, AI Support, Cloud Telephony, Call Center Setup, and Business Automation."
    />

    <section className="gradient-hero particle-bg section-padding text-center">
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            Technology Solutions That Deliver
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive consulting services designed to optimize your communication technology stack.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide space-y-8">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.05}>
            <div className="glass-card rounded-2xl p-8 lg:p-10 hover:border-secondary/20 transition-all duration-500 group">
              <div className={`flex flex-col lg:flex-row gap-8 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-accent transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </>
);

export default Services;
