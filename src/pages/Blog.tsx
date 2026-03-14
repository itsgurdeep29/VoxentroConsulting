import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";

const posts = [
  { title: "How AI is Revolutionizing CRM Systems in 2025", excerpt: "Discover how artificial intelligence is transforming customer relationship management with predictive analytics.", date: "March 10, 2025", category: "AI & CRM", slug: "ai-revolutionizing-crm-2025" },
  { title: "The Complete Guide to IVR System Design", excerpt: "Learn best practices for designing IVR systems that reduce wait times and improve satisfaction.", date: "March 5, 2025", category: "IVR", slug: "guide-ivr-system-design" },
  { title: "Cloud Telephony vs Traditional PBX", excerpt: "A detailed comparison of cloud-based and on-premise telephony solutions.", date: "February 28, 2025", category: "Cloud Telephony", slug: "cloud-telephony-vs-pbx" },
  { title: "5 Ways AI Chatbots Improve Retention", excerpt: "Explore how intelligent chatbots help businesses retain customers through personalized support.", date: "February 20, 2025", category: "AI", slug: "ai-chatbots-customer-retention" },
  { title: "Optimizing Call Center KPIs", excerpt: "Use data-driven insights to improve AHT, FCR, and CSAT scores.", date: "February 15, 2025", category: "Call Center", slug: "call-center-kpis-analytics" },
  { title: "The Future of Sales Automation", excerpt: "From AI-powered lead scoring to automated follow-ups — trends shaping sales.", date: "February 10, 2025", category: "Automation", slug: "future-sales-automation-trends" },
];

const Blog = () => (
  <>
    <SEOHead title="Blog" description="Read the latest insights on CRM, AI automation, IVR systems, cloud telephony, and call center technology."/>

    <section className="gradient-hero particle-bg section-padding text-center">
      <div className="container-wide relative z-10">
        <ScrollReveal>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">Blog & Insights</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">Technology Insights & Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Stay ahead with expert articles on CRM, AI, cloud telephony, and automation.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="Latest Articles" title="From Our Experts" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} {...post} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
