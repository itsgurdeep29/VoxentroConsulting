import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "CRM Dialer Solutions", href: "/services/crm-dialer" },
  { name: "IVR Systems", href: "/services/ivr-systems" },
  { name: "AI Customer Support", href: "/services/ai-support" },
  { name: "Cloud Telephony", href: "/services/cloud-telephony" },
  { name: "Call Center Setup", href: "/services/call-center" },
  { name: "Business Automation", href: "/services/automation" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "Solutions", href: "/solutions" },
  { name: "Partners", href: "/partners" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] lg:h-[90px] px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center group">
          <img
            src="/images/voxco.png"
            alt="Voxentro Consulting"
            className="h-20 lg:h-[92px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-60 glass-card rounded-xl p-2 shadow-xl border border-border/50"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.name}
                          to={s.href}
                          className="block px-4 py-2.5 rounded-lg text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 rounded-xl gradient-accent text-accent-foreground text-sm font-semibold hover:shadow-lg hover:shadow-ai-purple/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-card border-t border-border/50"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:bg-muted"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:bg-muted hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                )
              )}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 px-4 py-3 rounded-xl gradient-accent text-accent-foreground text-sm font-semibold text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
