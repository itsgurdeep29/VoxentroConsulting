import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  delay?: number;
}

const TestimonialCard = ({ name, role, company, quote }: TestimonialCardProps) => (
  <div className="glass-card rounded-xl p-6 lg:p-8 h-full flex flex-col">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
      ))}
    </div>

    <p className="text-foreground leading-relaxed flex-1 italic">
      "{quote}"
    </p>

    <div className="mt-6 pt-4 border-t border-border">
      <p className="font-semibold text-foreground">{name}</p>
      <p className="text-sm text-muted-foreground">
        {role}, {company}
      </p>
    </div>
  </div>
);

export default TestimonialCard;
