import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  delay?: number;
}

const BlogCard = ({ title, excerpt, date, category, slug, delay = 0 }: BlogCardProps) => (
  <ScrollReveal delay={delay}>
    <div className="glass-card rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <div className="h-48 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
          {category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm flex-1">{excerpt}</p>
        <Link to={`/blog/${slug}`} className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-secondary hover:gap-3 transition-all">
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </ScrollReveal>
);

export default BlogCard;
