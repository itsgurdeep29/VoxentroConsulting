import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2, ArrowRight, Sparkles, Mail, Phone, Clock,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";

const ThankYou = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <>
      <SEOHead
        title="Thank You - Voxentro Consulting"
        description="Thank you for reaching out to Voxentro Consulting. We'll get back to you shortly."
      />

      {/* Particle Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-secondary/20 to-accent/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              filter: "blur(1px)"
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="container-wide max-w-4xl mx-auto relative z-10">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.8 
            }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {/* Outer Rings */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-secondary/20"
                style={{ width: '120px', height: '120px', left: '-10px', top: '-10px' }}
              />
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 rounded-full bg-accent/20"
                style={{ width: '140px', height: '140px', left: '-20px', top: '-20px' }}
              />
              
              {/* Check Circle */}
              <div className="w-32 h-32 rounded-full gradient-accent flex items-center justify-center relative z-10">
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-accent-foreground" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Thank You Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-xl text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
              <Sparkles className="w-4 h-4" /> Message Sent Successfully
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground mb-6">
              Thank You for{" "}
              <span className="gradient-text">Reaching Out!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've received your message and our team will get back to you within 24 hours. 
              We're excited to discuss how Voxentro can transform your business.
            </p>
          </motion.div>

          {/* What Happens Next */}
          <ScrollReveal>
            <div className="glass-card rounded-3xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                What Happens Next?
              </h2>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { 
                    icon: Mail, 
                    title: "1. Check Your Inbox", 
                    desc: "You'll receive a confirmation email with details of your request",
                    color: "from-blue-500 to-indigo-500"
                  },
                  { 
                    icon: Phone, 
                    title: "2. Discovery Call", 
                    desc: "Our expert will schedule a call to understand your needs",
                    color: "from-purple-500 to-pink-500"
                  },
                  { 
                    icon: Clock, 
                    title: "3. Custom Solution", 
                    desc: "We'll prepare a tailored solution for your business",
                    color: "from-amber-500 to-orange-500"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    whileHover={{ y: -5 }}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 border border-border/50"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center mx-auto mb-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                    
                    {/* Connector Line (except last) */}
                    {index < 2 && (
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="hidden sm:block absolute top-1/2 -right-3 text-secondary"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 group"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className="mt-4 text-sm text-muted-foreground">
              Our team typically responds within 24 hours. We appreciate your patience!
            </p>
          </motion.div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full blur-3xl -z-10" />
        </div>
      </section>
    </>
  );
};

export default ThankYou;