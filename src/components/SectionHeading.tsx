import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ label, title, description, centered = true }: SectionHeadingProps) => (
  <ScrollReveal className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
    {label && (
      <span className="inline-block mb-3 px-4 py-1.5 rounded-xl text-sm font-medium bg-secondary/10 text-secondary tracking-wide uppercase">
        {label}
      </span>
    )}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </ScrollReveal>
);

export default SectionHeading;
