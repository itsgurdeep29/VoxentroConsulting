import { useParams, Link, useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";

const blogContent: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
  heroEmoji: string;
  content: { type: "h2" | "h3" | "p" | "ul" | "ol" | "quote"; text?: string; items?: string[] }[];
}> = {
  "ai-revolutionizing-crm-2025": {
    title: "How AI is Revolutionizing CRM Systems in 2025",
    excerpt: "Discover how artificial intelligence is transforming customer relationship management with predictive analytics, intelligent automation, and hyper-personalization at scale.",
    date: "March 10, 2025",
    category: "AI & CRM",
    readTime: "8 min read",
    author: "Rahul Sharma",
    authorRole: "Head of AI Products",
    heroEmoji: "🤖",
    content: [
      { type: "p", text: "Artificial intelligence is no longer a futuristic concept in CRM — it's the driving force behind how modern businesses understand, engage, and retain their customers. In 2025, AI-powered CRM platforms have moved far beyond simple contact management to become intelligent systems that anticipate customer needs before they arise." },
      { type: "h2", text: "Predictive Analytics: Knowing Before Asking" },
      { type: "p", text: "The most significant shift in CRM technology is the move from reactive to predictive engagement. AI models trained on historical interaction data can now forecast which leads are most likely to convert, which customers are at risk of churning, and what the ideal next action is for any given account." },
      { type: "ul", items: ["Lead scoring with 94%+ accuracy using behavioral signals", "Churn prediction 30–60 days in advance with proactive intervention", "Next-best-action recommendations surfaced directly in rep workflows", "Revenue forecasting with real-time pipeline adjustments"] },
      { type: "h2", text: "Conversational AI and CRM Integration" },
      { type: "p", text: "Modern CRM systems now embed conversational AI directly into the customer journey. From AI-powered chatbots that qualify leads to voice assistants that update records in real time, the integration between conversation and CRM data has become seamless." },
      { type: "quote", text: "The future CRM doesn't just store relationships — it actively nurtures them through intelligent, context-aware automation that feels human." },
      { type: "h2", text: "Hyper-Personalization at Scale" },
      { type: "p", text: "With AI, personalization has scaled from thousands to millions of customers. Recommendation engines analyze purchase history, browsing behavior, and support interactions to craft messages that feel individually tailored — even when sent to massive audiences." },
      { type: "h3", text: "Key Capabilities Driving This Shift" },
      { type: "ol", items: ["Natural language processing for sentiment-aware customer segmentation", "Dynamic content generation for emails, SMS, and in-app messaging", "Automated A/B testing that optimizes itself without human intervention", "Real-time CRM data enrichment from public and partner data sources"] },
      { type: "h2", text: "What This Means for Your Business" },
      { type: "p", text: "Organizations that adopt AI-driven CRM in 2025 are reporting 35–50% improvements in sales productivity, significant reductions in customer acquisition costs, and measurable lifts in customer lifetime value. The companies that treat CRM as a living intelligence layer — not just a database — are the ones pulling ahead." },
      { type: "p", text: "Whether you're evaluating a new CRM platform or looking to augment your existing stack with AI capabilities, the time to act is now. The competitive gap between AI-enabled and traditional CRM users is widening every quarter." },
    ],
  },
  "guide-ivr-system-design": {
    title: "The Complete Guide to IVR System Design",
    excerpt: "Learn best practices for designing IVR systems that reduce wait times, improve first-call resolution, and deliver exceptional customer experiences.",
    date: "March 5, 2025",
    category: "IVR",
    readTime: "10 min read",
    author: "Priya Nair",
    authorRole: "Telephony Solutions Architect",
    heroEmoji: "📞",
    content: [
      { type: "p", text: "Interactive Voice Response systems are often the first point of contact between a business and its customers. A well-designed IVR can dramatically improve efficiency and satisfaction — while a poorly designed one drives customers to hang up and never return. This guide covers everything you need to build IVR flows that actually work." },
      { type: "h2", text: "The Golden Rules of IVR Design" },
      { type: "ul", items: ["Keep menus to 5 options or fewer at any level", "Always offer a path to a live agent within two menu levels", "Use plain, conversational language — avoid jargon", "Test every flow with real users before going live", "Measure and iterate using completion rate and drop-off data"] },
      { type: "h2", text: "Structuring Your Menu Hierarchy" },
      { type: "p", text: "The most common IVR mistake is over-engineering the menu tree. Businesses try to account for every possible call type, resulting in sprawling hierarchies that confuse and frustrate callers. Instead, design around the top 5–7 reasons customers call — those typically account for 80% of volume." },
      { type: "quote", text: "Every additional menu level reduces completion rates by approximately 15%. Depth is the enemy of IVR usability." },
      { type: "h2", text: "Speech Recognition vs. DTMF: Choosing the Right Input" },
      { type: "p", text: "Modern IVR systems support both touch-tone (DTMF) and natural speech recognition. For enterprise deployments, a hybrid approach works best — use DTMF for structured inputs like account numbers and PINs, and speech recognition for open-ended queries." },
      { type: "h3", text: "When to Use Each Mode" },
      { type: "ol", items: ["DTMF: Account verification, PIN entry, numeric selections", "Speech: Intent detection, open queries, name recognition", "Hybrid: Multi-step authentication with flexible confirmation"] },
      { type: "h2", text: "Measuring IVR Performance" },
      { type: "p", text: "An IVR system is only as good as the data you collect from it. Track containment rate (calls resolved without agent transfer), menu abandonment rate by node, and post-call CSAT scores linked to IVR path taken. These metrics tell you exactly where to optimize." },
    ],
  },
  "cloud-telephony-vs-pbx": {
    title: "Cloud Telephony vs Traditional PBX",
    excerpt: "A detailed comparison of cloud-based and on-premise telephony solutions to help you make the right infrastructure decision for your business.",
    date: "February 28, 2025",
    category: "Cloud Telephony",
    readTime: "7 min read",
    author: "Arjun Mehta",
    authorRole: "Infrastructure Consultant",
    heroEmoji: "☁️",
    content: [
      { type: "p", text: "The telephony landscape has shifted dramatically over the past decade. What was once a hardware-dominated domain is now fiercely contested between legacy PBX vendors and cloud-native communication platforms. Choosing the right infrastructure isn't just a technical decision — it has strategic and financial implications for years to come." },
      { type: "h2", text: "Total Cost of Ownership: The Real Numbers" },
      { type: "p", text: "On paper, traditional PBX systems appear cheaper over a 5-year horizon when hardware costs are amortized. In practice, maintenance contracts, upgrade cycles, and on-site IT labor tell a different story. Cloud telephony typically shows 30–45% lower TCO when all operational costs are factored in." },
      { type: "ul", items: ["Cloud: Zero hardware CapEx, predictable per-seat OpEx", "PBX: High upfront hardware investment, periodic refresh cycles", "Cloud: Automatic software updates included in subscription", "PBX: Paid upgrade paths, often requiring specialist vendors"] },
      { type: "h2", text: "Scalability and Remote Work" },
      { type: "p", text: "Cloud telephony wins decisively on scalability. Spinning up new numbers, adding seats, or expanding to new geographies takes minutes instead of weeks. For organizations with distributed or remote workforces, this flexibility is non-negotiable." },
      { type: "quote", text: "In a world where teams can be on three continents, the idea of routing calls through a physical box in a server room is increasingly absurd." },
      { type: "h2", text: "When Traditional PBX Still Makes Sense" },
      { type: "p", text: "PBX isn't dead — it's contextual. Organizations with strict data sovereignty requirements, limited internet connectivity, or highly specialized legacy integrations may still find on-premise deployments appropriate. Regulated industries like defense and certain government sectors often mandate local call routing." },
      { type: "h2", text: "The Hybrid Path Forward" },
      { type: "p", text: "Many enterprises are adopting SIP trunking as a bridge — keeping their PBX hardware while routing calls through cloud providers. This hybrid approach offers cost savings on call termination while preserving existing infrastructure investments during a phased migration." },
    ],
  },
  "ai-chatbots-customer-retention": {
    title: "5 Ways AI Chatbots Improve Customer Retention",
    excerpt: "Explore how intelligent chatbots help businesses retain customers through personalized support, proactive engagement, and always-on availability.",
    date: "February 20, 2025",
    category: "AI",
    readTime: "6 min read",
    author: "Sneha Kapoor",
    authorRole: "Customer Success Lead",
    heroEmoji: "💬",
    content: [
      { type: "p", text: "Customer retention is the lifeblood of sustainable growth. Acquiring a new customer costs 5–7x more than keeping an existing one — yet most businesses invest disproportionately in acquisition. AI chatbots have emerged as one of the most cost-effective tools for improving retention at scale." },
      { type: "h2", text: "1. Instant, 24/7 Support Without Staffing Costs" },
      { type: "p", text: "Customer frustration peaks when help isn't available. AI chatbots eliminate wait times and after-hours black holes. Customers who receive immediate responses — even from a bot — report significantly higher satisfaction than those who wait hours for a human." },
      { type: "h2", text: "2. Proactive Outreach Based on Behavioral Signals" },
      { type: "p", text: "Modern AI chatbots don't just react — they initiate. By analyzing user behavior (session length, feature usage, support ticket history), they can proactively reach out when a customer shows signs of disengagement. A well-timed check-in message can re-engage a user before they churn." },
      { type: "quote", text: "The best retention strategy is preventing the moment a customer even considers leaving. Proactive AI makes that possible at scale." },
      { type: "h2", text: "3. Personalized Product and Feature Discovery" },
      { type: "p", text: "Many customers churn not because they're unhappy — but because they never discovered the value they were paying for. AI chatbots can guide users to features relevant to their use case, surfacing capabilities they didn't know existed and deepening product adoption." },
      { type: "h2", text: "4. Seamless Escalation to Human Agents" },
      { type: "p", text: "The best AI chatbot systems know their limits. When sentiment analysis detects frustration or a query exceeds the bot's confidence threshold, a smooth handoff to a human agent — with full context transferred — prevents the jarring experience of starting over." },
      { type: "h2", text: "5. Post-Resolution Follow-Up and Feedback Loops" },
      { type: "p", text: "AI chatbots can automate post-interaction follow-ups — collecting CSAT scores, surfacing knowledge base articles for similar issues, and flagging unresolved concerns for human review. Closing the loop signals to customers that their experience matters." },
    ],
  },
  "call-center-kpis-analytics": {
    title: "Optimizing Call Center KPIs with Data Analytics",
    excerpt: "Use data-driven insights to improve Average Handle Time, First Call Resolution, and Customer Satisfaction scores across your contact center operations.",
    date: "February 15, 2025",
    category: "Call Center",
    readTime: "9 min read",
    author: "Vikram Singh",
    authorRole: "Contact Center Analytics Lead",
    heroEmoji: "📊",
    content: [
      { type: "p", text: "Call center performance is a complex web of interdependent metrics. Improve one KPI naively and you often degrade another. Understanding how AHT, FCR, CSAT, and agent utilization relate to each other is the foundation of a truly optimized contact center." },
      { type: "h2", text: "The Core KPI Triad" },
      { type: "p", text: "Three metrics dominate most contact center dashboards — and they exist in constant tension. Average Handle Time (AHT) measures efficiency. First Call Resolution (FCR) measures effectiveness. Customer Satisfaction (CSAT) measures perceived value. Optimizing all three simultaneously requires data, not intuition." },
      { type: "ul", items: ["AHT benchmark: 6 minutes for B2C, 8–12 for B2B complex queries", "FCR industry average: 74% — top quartile achieves 85%+", "CSAT correlation: Each 1% improvement in FCR drives ~1.4% CSAT increase"] },
      { type: "h2", text: "Diagnosing AHT Without Destroying FCR" },
      { type: "p", text: "The classic mistake is optimizing AHT by rushing agents — which tanks FCR and ultimately increases volume (customers call back). Instead, target AHT reduction through better tools: real-time knowledge bases, AI-suggested responses, and screen pop data that eliminates repetitive authentication." },
      { type: "quote", text: "Cutting AHT by improving agent tools creates a virtuous cycle. Cutting it by pressuring agents creates a vicious one." },
      { type: "h2", text: "Building a Real-Time Analytics Stack" },
      { type: "p", text: "Modern call centers instrument every interaction — call recordings, screen capture, CRM event logs, and chat transcripts all feed into a unified analytics layer. Speech analytics tools can automatically tag calls by topic, sentiment, and compliance risk, surfacing insights that would take human reviewers thousands of hours to find." },
      { type: "h3", text: "Essential Analytics Capabilities" },
      { type: "ol", items: ["Real-time queue dashboards with SLA breach alerts", "Agent-level scorecards with coaching trigger automation", "Root cause analysis for repeat callers (linked to CRM data)", "Forecast models for staffing optimization by hour and day"] },
    ],
  },
  "future-sales-automation-trends": {
    title: "The Future of Sales Automation",
    excerpt: "From AI-powered lead scoring to automated follow-ups — explore the trends shaping the next generation of sales technology and what they mean for your team.",
    date: "February 10, 2025",
    category: "Automation",
    readTime: "7 min read",
    author: "Ananya Reddy",
    authorRole: "Sales Technology Strategist",
    heroEmoji: "🚀",
    content: [
      { type: "p", text: "Sales automation has evolved from simple email sequencers and CRM reminders into an intelligent ecosystem that can qualify leads, personalize outreach, predict deal outcomes, and coach reps in real time. The question is no longer whether to automate — it's how far to go." },
      { type: "h2", text: "AI Lead Scoring: Beyond Firmographics" },
      { type: "p", text: "Traditional lead scoring weighted firmographic data — company size, industry, title. Modern AI scoring layers in behavioral signals: email engagement patterns, website visit depth, content downloads, and product usage data. The result is a dynamic score that updates in real time as prospects move through their buyer journey." },
      { type: "h2", text: "Automated Outreach That Doesn't Feel Automated" },
      { type: "p", text: "The biggest risk in sales automation is the uncanny valley — outreach so clearly templated that it signals 'mass email' before the recipient reads a word. AI-powered personalization engines now pull from LinkedIn activity, recent company news, and job change signals to craft opening lines that feel genuinely researched." },
      { type: "quote", text: "The goal of sales automation isn't to replace the human touch — it's to free humans to apply their touch where it matters most." },
      { type: "h2", text: "Conversation Intelligence and Deal Coaching" },
      { type: "p", text: "Platforms like conversation intelligence tools record and analyze every sales call — identifying objection patterns, competitor mentions, and sentiment shifts. Managers receive automated flags when deals show risk signals, and reps get post-call coaching without waiting for a 1:1." },
      { type: "h2", text: "The Autonomous SDR: How Close Are We?" },
      { type: "p", text: "Fully autonomous AI sales development representatives — able to prospect, qualify, and book meetings without human input — are no longer theoretical. Several companies are already deploying these in high-volume, well-defined sales motions. The role of the human SDR is evolving toward complex multi-stakeholder deals that require genuine relationship intelligence." },
      { type: "ul", items: ["AI SDRs currently handle 60–70% of top-of-funnel qualification at leading tech firms", "Human SDRs increasingly focus on enterprise and strategic accounts", "Hybrid models (AI qualifies, human closes) showing strongest conversion rates", "Ethical and transparency considerations becoming key differentiators"] },
    ],
  },
};

const allSlugs = Object.keys(blogContent);

const CategoryBadge = ({ category }: { category: string }) => (
  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">
    {category}
  </span>
);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="text-6xl mb-4">📭</p>
        <h1 className="text-3xl font-bold text-foreground mb-2">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">This post doesn't exist or has been moved.</p>
        <Link to="/blog" className="btn-primary">← Back to Blog</Link>
      </div>
    );
  }

  const currentIndex = allSlugs.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevPost = prevSlug ? blogContent[prevSlug] : null;
  const nextPost = nextSlug ? blogContent[nextSlug] : null;

  return (
    <>
      <SEOHead title={post.title} description={post.excerpt} />

      {/* Hero */}
      <section className="gradient-hero particle-bg section-padding text-center">
        <div className="container-wide relative z-10 max-w-3xl mx-auto">
          <ScrollReveal>
            <CategoryBadge category={post.category} />
            <div className="text-6xl my-6">{post.heroEmoji}</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xs">
                  {post.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-xs">{post.author}</p>
                  <p className="text-xs">{post.authorRole}</p>
                </div>
              </div>
              <span className="text-muted-foreground/40">•</span>
              <span>{post.date}</span>
              <span className="text-muted-foreground/40">•</span>
              <span>{post.readTime}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding">
        <div className="container-wide max-w-2xl mx-auto">
          <ScrollReveal>
            <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              {post.content.map((block, i) => {
                if (block.type === "h2") return (
                  <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4 border-l-4 border-secondary pl-4">
                    {block.text}
                  </h2>
                );
                if (block.type === "h3") return (
                  <h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">
                    {block.text}
                  </h3>
                );
                if (block.type === "p") return (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-5">
                    {block.text}
                  </p>
                );
                if (block.type === "quote") return (
                  <blockquote key={i} className="my-8 border-l-4 border-secondary bg-secondary/5 px-6 py-4 rounded-r-xl italic text-foreground/80 text-lg">
                    "{block.text}"
                  </blockquote>
                );
                if (block.type === "ul") return (
                  <ul key={i} className="my-5 space-y-2">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
                if (block.type === "ol") return (
                  <ol key={i} className="my-5 space-y-2 counter-reset">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-secondary/10 text-secondary text-xs font-bold flex items-center justify-center mt-0.5">
                          {j + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                );
                return null;
              })}
            </article>
          </ScrollReveal>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-border/40">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline underline-offset-4 transition-colors"
            >
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      {(prevPost || nextPost) && (
        <section className="pb-16">
          <div className="container-wide max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
            {prevPost && prevSlug ? (
              <button
                onClick={() => navigate(`/blog/${prevSlug}`)}
                className="group text-left p-5 rounded-2xl border border-border/40 hover:border-secondary/40 bg-card/50 hover:bg-secondary/5 transition-all"
              >
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">← Previous</p>
                <p className="font-semibold text-foreground text-sm group-hover:text-secondary transition-colors line-clamp-2">{prevPost.title}</p>
              </button>
            ) : <div />}
            {nextPost && nextSlug ? (
              <button
                onClick={() => navigate(`/blog/${nextSlug}`)}
                className="group text-right p-5 rounded-2xl border border-border/40 hover:border-secondary/40 bg-card/50 hover:bg-secondary/5 transition-all"
              >
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Next →</p>
                <p className="font-semibold text-foreground text-sm group-hover:text-secondary transition-colors line-clamp-2">{nextPost.title}</p>
              </button>
            ) : <div />}
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPost;