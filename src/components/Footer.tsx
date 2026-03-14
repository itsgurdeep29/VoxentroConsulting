import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="gradient-hero text-foreground border-t border-border/30">
    <div className="container-wide section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/">
          <div className="flex items-center gap-3 mb-0">
            <img
              src="/images/Voxentro.png"
              alt="Voxentro Consulting"
              className="h-24 w-auto"
            />
          </div>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Transforming customer communication with AI-powered CRM, intelligent dialers, IVR, and cloud telephony solutions for modern businesses.
                    </p>

          {/* <div className="flex gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div> */}
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Solutions", href: "/solutions" },
              { name: "Partners", href: "/partners" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="hover:text-accent transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Services</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[
              { name: "CRM Dialer Solutions", href: "/services/crm-dialer" },
              { name: "IVR Systems", href: "/services/ivr-systems" },
              { name: "AI Automation", href: "/services/ai-support" },
              { name: "Cloud Telephony", href: "/services/cloud-telephony" },
              { name: "Call Center Setup", href: "/services/call-center" },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="hover:text-accent transition-colors duration-200">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-secondary" />
              sales@voxentroconsulting.in
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-secondary" />
              +91 99259 76535
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-8 h-8 mt-0.5 text-secondary" />
              Mathura Kunja Nagar Near Bypass Road, Mathura, Uttar Pradesh, India 281001
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2025 Voxentro Consulting. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors duration-200">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors duration-200">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
