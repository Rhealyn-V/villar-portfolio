import { useEffect } from "react";
import { seo, site } from "../data/site";

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

// Per-route <title>, description, canonical and OG/Twitter tags.
export default function usePageMeta({ title, description, path = "/" } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : seo.title;
    const desc = description || seo.description;
    const url = `${site.url}${path}`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", desc);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", desc);
  }, [title, description, path]);
}
