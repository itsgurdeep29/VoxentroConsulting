import { useState, FormEvent, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
    company: "",
    service: "Select a service",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });
  
  const navigate = useNavigate();

  // Validation function
  const validateForm = () => {
    const isValidName = formData.name.trim().length >= 2;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidPhone = /^[0-9+\-\s]{10,}$/.test(formData.phone); // Basic phone validation
    const isValidMessage = formData.message.trim().length >= 10;
    
    return isValidName && isValidEmail && isValidPhone && isValidMessage;
  };

  const isFormValid = validateForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isFormValid || isSubmitting) return;
    
    setIsSubmitting(true);
  
    try {
      await emailjs.sendForm(
        "service_49rhv4v",
        "template_2oflncg",
        e.currentTarget,
        "IRAqAz_at_pmtz6Na"
      );
      
      setShowModal(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Select a service",
        message: ""
      });
      
      setTouched({
        name: false,
        email: false,
        phone: false,
        message: false
      });
  
      // Navigate to thank you page after modal shows
      setTimeout(() => {
        setShowModal(false);
        navigate("/thank-you");
      }, 2000);
      
    } catch (error) {
      console.log("Email error:", error);
      setIsSubmitting(false);
    }
  };

  // Get field error status
  const getFieldError = (field: keyof typeof formData, value: string) => {
    if (!touched[field as keyof typeof touched]) return null;
    
    switch(field) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : null;
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : null;
      case 'phone':
        return !/^[0-9+\-\s]{10,}$/.test(value) ? 'Invalid phone number' : null;
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : null;
      default:
        return null;
    }
  };
  
  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with Voxentro Consulting for CRM, AI, IVR, and cloud telephony solutions." />

      <section className="gradient-hero particle-bg section-padding text-center">
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">Let's Start a Conversation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ready to transform your business? Reach out and we'll respond within 24 hours.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <SectionHeading title="Get in Touch" centered={false} />
              {[
                { icon: Mail, label: "Email", value: "sales@voxentroconsulting.in" },
                { icon: Phone, label: "Phone", value: "+91 99259 76535" },
                { icon: MapPin, label: "Location", value: "Mathura Kunja Nagar Near Bypass Road, Mathura, Uttar Pradesh, India 281001" },
                { icon: MessageCircle, label: "Support", value: "24/7 Support Available" },
              ].map((item) => (
                <ScrollReveal key={item.label}>
                  <div className="flex items-start gap-4 p-4 glass-card rounded-xl hover:border-secondary/20 transition-all duration-500">
                    <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="glass-card rounded-2xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name Field */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={() => handleBlur('name')}
                          required
                          className={`w-full px-4 py-3 rounded-xl bg-muted border ${
                            touched.name && getFieldError('name', formData.name)
                              ? 'border-red-500 focus:ring-red-500/50'
                              : 'border-border focus:ring-secondary/50'
                          } focus:outline-none focus:ring-2 focus:border-secondary/50 text-foreground transition-all duration-300`}
                          placeholder="Your Name"
                        />
                        {touched.name && getFieldError('name', formData.name) && (
                          <p className="text-red-500 text-xs mt-1">{getFieldError('name', formData.name)}</p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={() => handleBlur('email')}
                          required
                          className={`w-full px-4 py-3 rounded-xl bg-muted border ${
                            touched.email && getFieldError('email', formData.email)
                              ? 'border-red-500 focus:ring-red-500/50'
                              : 'border-border focus:ring-secondary/50'
                          } focus:outline-none focus:ring-2 focus:border-secondary/50 text-foreground transition-all duration-300`}
                          placeholder="Your Email Address"
                        />
                        {touched.email && getFieldError('email', formData.email) && (
                          <p className="text-red-500 text-xs mt-1">{getFieldError('email', formData.email)}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur('phone')}
                        required
                        className={`w-full px-4 py-3 rounded-xl bg-muted border ${
                          touched.phone && getFieldError('phone', formData.phone)
                            ? 'border-red-500 focus:ring-red-500/50'
                            : 'border-border focus:ring-secondary/50'
                        } focus:outline-none focus:ring-2 focus:border-secondary/50 text-foreground transition-all duration-300`}
                        placeholder="Your Number"
                      />
                      {touched.phone && getFieldError('phone', formData.phone) && (
                        <p className="text-red-500 text-xs mt-1">{getFieldError('phone', formData.phone)}</p>
                      )}
                    </div>

                    {/* Company Field */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                      <input
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 text-foreground transition-all duration-300"
                        placeholder="Your Company (Optional)"
                      />
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 text-foreground transition-all duration-300"
                      >
                        <option>Select a service</option>
                        <option>CRM Dialer Solutions</option>
                        <option>IVR Systems</option>
                        <option>AI Powered Support</option>
                        <option>Cloud Telephony</option>
                        <option>Call Center Setup</option>
                        <option>Business Automation</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={() => handleBlur('message')}
                        required
                        rows={4}
                        className={`w-full px-4 py-3 rounded-xl bg-muted border ${
                          touched.message && getFieldError('message', formData.message)
                            ? 'border-red-500 focus:ring-red-500/50'
                            : 'border-border focus:ring-secondary/50'
                        } focus:outline-none focus:ring-2 focus:border-secondary/50 text-foreground resize-none transition-all duration-300`}
                        placeholder="Tell us about your project... (min. 10 characters)"
                      />
                      {touched.message && getFieldError('message', formData.message) && (
                        <p className="text-red-500 text-xs mt-1">{getFieldError('message', formData.message)}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                        !isFormValid || isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed opacity-50'
                          : 'gradient-accent text-accent-foreground hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal with Animation */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background rounded-2xl p-8 max-w-sm text-center border border-border relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl"
              />
              
              {/* Success Icon with animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
                className="relative z-10"
              >
                <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center mx-auto mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <CheckCircle2 className="w-10 h-10 text-accent-foreground" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold mb-3 relative z-10"
              >
                Message Sent!
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground relative z-10"
              >
                Thank you for contacting Voxentro. We'll get back to you within 24 hours.
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "linear" }}
                className="h-1 bg-gradient-to-r from-secondary to-accent rounded-full mt-6 relative z-10"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs text-muted-foreground mt-4 relative z-10"
              >
                Redirecting to thank you page...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Location" title="Find Us" />
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-border/30">
              <iframe
                src="https://maps.google.com/maps?q=Mathura%20Kunja%20Nagar%20Near%20Bypass%20Road%20Mathura%20Uttar%20Pradesh%20281001&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Voxentro Consulting Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;