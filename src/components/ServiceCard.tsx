import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, href, delay = 0 }: ServiceCardProps) => (
  <ScrollReveal delay={delay}>
    <div className="glass-card rounded-2xl p-6 lg:p-8 group hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/5 h-full relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500">
          <Icon className="w-6 h-6 text-accent-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm mb-4">{description}</p>
        {href && (
          <Link to={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-accent transition-colors duration-300 group/link">
            Learn More <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        )}
      </div>
    </div>
  </ScrollReveal>
);

export default ServiceCard;
