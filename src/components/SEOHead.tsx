import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
}

const SEOHead = ({ title, description }: SEOHeadProps) => {
  useEffect(() => {
    document.title = `${title} | Voxentro Consulting`;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setCanonical = (url: string) => {
      let link: HTMLLinkElement | null = document.querySelector(
        "link[rel='canonical']"
      );
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", url);
    };

    const fullTitle = `${title} | Voxentro Consulting`;
    const url = window.location.href;

    const staticKeywords =
      "CRM dialer solutions, IVR solutions, AI call center, cloud telephony, CRM consulting, call center software, Voxentro Consulting";

    setMeta("description", description);
    setMeta("keywords", staticKeywords);

    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Voxentro Consulting", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    setCanonical(url);
  }, [title, description]);

  return null;
};

export default SEOHead;
