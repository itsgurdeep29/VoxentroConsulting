import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Bot,
  Cloud,
  Headphones,
  Settings,
  Zap,
  Globe,
  Shield,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const services = [
  {
    icon: Phone,
    title: "CRM Dialer Solutions",
    description:
      "Advanced auto-dialing systems integrated with your CRM for maximum sales efficiency.",
    href: "/services/crm-dialer",
  },
  {
    icon: Headphones,
    title: "IVR Systems",
    description:
      "Interactive voice response systems that route calls intelligently and improve customer experience.",
    href: "/services/ivr-systems",
  },
  {
    icon: Bot,
    title: "AI Powered Support",
    description:
      "Intelligent chatbots and AI-driven customer support that works 24/7.",
    href: "/services/ai-support",
  },
  {
    icon: Cloud,
    title: "Cloud Telephony",
    description:
      "Scalable cloud-based phone systems for businesses of any size, anywhere.",
    href: "/services/cloud-telephony",
  },
  {
    icon: Settings,
    title: "Call Center Setup",
    description:
      "End-to-end call center infrastructure design, deployment, and management.",
    href: "/services/call-center",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Streamline operations with intelligent automation across your business workflows.",
    href: "/services/automation",
  },
];

const stats = [
  { value: "60+", label: "Global Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "25+", label: "Countries Served" },
  { value: "10k+", label: "Calls Processed" },
];

const whyUs = [
  {
    icon: Globe,
    title: "Global Expertise",
    desc: "Operations spanning 25+ countries with localized solutions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Bank-grade security protocols and compliance standards.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock technical assistance for all clients.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "Expert teams assigned to understand your unique needs.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow Inc. (USA)",
    quote:
      "Voxentro transformed our call center operations. We saw a 40% increase in efficiency within the first quarter.",
  },
  {
    name: "James Morrison",
    role: "CEO",
    company: "GlobalReach Ltd. (UK)",
    quote:
      "Their AI automation solutions have saved us thousands of hours in manual work. Truly game-changing.",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    company: "InnovateTech (India)",
    quote:
      "The CRM dialer integration was seamless. Our sales team's productivity doubled after implementing Voxentro.",
  },
  {
    name: "Rahul Verma",
    role: "Operations Head",
    company: "TeleConnect Solutions (India)",
    quote:
      "Our outbound calling efficiency increased dramatically after deploying Voxentro's dialer system.",
  },
  {
    name: "Amit Patel",
    role: "Director",
    company: "CloudServe Pvt Ltd (India)",
    quote:
      "Their IVR and cloud telephony setup was extremely reliable and easy to scale.",
  },
  {
    name: "Daniel Costa",
    role: "Product Manager",
    company: "NextWave Tech (Brazil)",
    quote:
      "Voxentro delivered a powerful AI support automation system that improved our customer response times.",
  },
];

const partners = ["Zoho", "Yellow Buddy", "TeleCMI", "CRMgrow", "SalesNayak", "WaGuru"];

const Home = () => (
  <>
    <SEOHead
      title="AI & CRM Technology Consulting"
      description="Voxentro Consulting empowers global businesses with AI, CRM dialers, IVR systems, cloud telephony and call center technology solutions."
    />

    {/* Hero */}
    <section className="gradient-hero particle-bg relative overflow-hidden min-h-[95vh] flex items-center">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ai-purple/5 rounded-full blur-[120px]"
        />
      </div>
      <div className="container-wide section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-xl text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
                <Sparkles className="w-4 h-4" /> Global Technology Consulting
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]"
            >
              Empowering Global Businesses with{" "}
              <span className="gradient-text">AI & CRM Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              We deliver cutting-edge CRM dialers, IVR systems, AI automation,
              and cloud telephony solutions to businesses worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl gradient-accent text-accent-foreground font-semibold hover:shadow-xl transition-all"
              >
                Get Free Consultation
              </Link>

              <Link
                to="/services"
                className="px-8 py-4 rounded-xl border border-border font-semibold hover:bg-muted"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE WORKFLOW */}
          {/* RIGHT SIDE - ENHANCED ANIMATED WORKFLOW */}
          <div className="relative flex justify-center items-center h-[600px]">
            {/* Central Pulsing Core - Represents Voxentro Hub */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(139, 92, 246, 0.4)",
                  "0 0 0 20px rgba(139, 92, 246, 0)",
                  "0 0 0 0 rgba(139, 92, 246, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-28 h-28 rounded-2xl gradient-accent flex items-center justify-center z-10"
            >
              <div className="text-center">
                <Zap className="w-8 h-8 text-accent-foreground mx-auto" />
                <span className="text-xs font-semibold text-accent-foreground mt-1 block">
                  Voxentro
                </span>
              </div>
            </motion.div>

            {/* Orbiting Cards with Theme Colors */}

            {/* CRM Dialer - Top */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-5 rounded-2xl w-[240px] absolute border border-secondary/20 hover:border-secondary/40 transition-all"
              style={{ top: "5%", right: "15%" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">CRM Dialer</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Smart Calling • Auto-dialer
                  </p>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="mt-3 w-full bg-secondary/10 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-secondary to-transparent"
                />
              </div>
            </motion.div>

            {/* AI Automation - Right */}
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="glass-card p-5 rounded-2xl w-[240px] absolute border border-accent/20 hover:border-accent/40 transition-all"
              style={{ top: "30%", right: "-5%" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">
                      AI Automation
                    </p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                      AI
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Smart Workflows • ML
                  </p>
                </div>
              </div>

              {/* AI Pulse Animation */}
              <div className="mt-3 flex gap-1 justify-center">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="w-2 h-2 rounded-full bg-accent"
                  />
                ))}
              </div>
            </motion.div>

            {/* Cloud Telephony - Bottom Right */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, -20, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="glass-card p-5 rounded-2xl w-[240px] absolute border border-secondary/20 hover:border-secondary/40 transition-all"
              style={{ bottom: "15%", right: "10%" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">
                    Cloud Telephony
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Global • Scalable
                  </p>
                </div>
              </div>

              {/* Cloud Connection Animation */}
              <div className="mt-3 flex justify-center gap-2">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-1 rounded-full bg-secondary"
                />
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="w-1 h-1 rounded-full bg-secondary"
                />
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="w-1 h-1 rounded-full bg-secondary"
                />
              </div>
            </motion.div>

            {/* Business Automation - Left */}
            <motion.div
              animate={{
                x: [0, -25, 0],
                y: [0, 15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="glass-card p-5 rounded-2xl w-[240px] absolute border border-accent/20 hover:border-accent/40 transition-all"
              style={{ top: "25%", left: "0%" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Automation</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Process • Workflow
                  </p>
                </div>
              </div>

              {/* Rotating Automation Indicator */}
              <div className="mt-3 flex justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-3 h-3 border-2 border-accent border-t-transparent rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-3 h-3 border-2 border-secondary border-b-transparent rounded-full"
                />
              </div>
            </motion.div>

            {/* IVR Systems - Bottom Left */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 15, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="glass-card p-5 rounded-2xl w-[240px] absolute border border-secondary/20 hover:border-secondary/40 transition-all"
              style={{ bottom: "20%", left: "5%" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">IVR Systems</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Smart Routing
                  </p>
                </div>
              </div>

              {/* Voice Wave Animation */}
              <div className="mt-3 flex items-center justify-center gap-0.5">
                {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, h * 4, 4] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    className="w-1 bg-secondary rounded-full"
                    style={{ height: "4px" }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Connection Lines SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Animated Connection Lines */}
              <motion.path
                d="M 200,150 L 280,200 L 220,300 L 150,250 Z"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="8 8"
                animate={{ strokeDashoffset: [0, 50] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                filter="url(#glow)"
              />

              {/* Central Connections */}
              <motion.circle
                cx="50%"
                cy="50%"
                r="60"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5 5"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center" }}
              />
            </svg>

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.sin(i) * 80, 0],
                  y: [0, Math.cos(i) * 80, 0],
                  scale: [0, 0.8, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: i % 2 === 0 ? "#8b5cf6" : "#ec4899",
                  left: "50%",
                  top: "50%",
                  filter: "blur(1px)",
                }}
              />
            ))}

            {/* Data Flow Indicators */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-32 h-32 rounded-full border border-secondary/20"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute w-48 h-48 rounded-full border border-accent/20"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Partners Strip */}
    <section className="relative -mt-8 z-10 container-wide px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 justify-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            Trusted Partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((p) => (
              <span
                key={p}
                className="text-foreground/50 font-display font-bold text-lg hover:text-secondary transition-colors duration-300"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>

    {/* Stats */}
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center hover:border-secondary/20 transition-all duration-500">
                <div className="text-3xl lg:text-4xl font-extrabold gradient-text">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          label="About Us"
          title="Your Trusted Technology Partner"
          description="Voxentro Consulting is a global consultancy specializing in CRM, AI, and communication technology."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Innovation First",
              desc: "We leverage the latest in AI and cloud technology to deliver future-proof solutions.",
            },
            {
              title: "Client Centric",
              desc: "Every solution is tailored to your specific business needs and growth objectives.",
            },
            {
              title: "Proven Results",
              desc: "Our track record speaks for itself — measurable ROI and lasting partnerships.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center hover:border-secondary/20 transition-all duration-500 group">
                <CheckCircle2 className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Technology Solutions"
          description="From CRM dialers to AI automation, we offer end-to-end technology consulting services."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding particle-bg">
      <div className="container-wide relative z-10">
        <SectionHeading label="Why Voxentro" title="Why Choose Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center p-6 glass-card rounded-2xl hover:border-secondary/20 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        <SectionHeading label="Testimonials" title="What Our Clients Say" />

        <div className="relative mt-12 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[350px] flex-shrink-0">
                <TestimonialCard {...t} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="gradient-hero rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden particle-bg border border-border/30">
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                Let's discuss how our technology solutions can drive growth and
                efficiency for your organization.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1"
              >
                Schedule a Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Home;
