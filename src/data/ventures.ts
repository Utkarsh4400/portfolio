export type Venture = {
  id: string;
  name: string;
  role: string;
  description: string;
  tint: string;
  image?: string;
  url: string;
};

export const ventures: Venture[] = [
  {
    id: "skate-supply-india",
    name: "Skate Supply India",
    role: "E-commerce, SEO & CRO",
    description:
      "Managing and optimizing the Shopify storefront with intuitive mega-menu navigation, SEO improvements, content optimization, and conversion-focused UX enhancements to drive sales and increase average order value.",
    tint: "var(--s-pink)",
    image: "/images/projects/skate-supply-placeholder.webp",
    url: "#PROJECT_SKATE_SUPPLY",
  },
  {
    id: "the-hearty-way",
    name: "The Hearty Way",
    role: "E-commerce, SEO & CRO",
    description:
      "Building and optimizing the online storefront, managing SEO and content, and improving conversion rates through UX enhancements, product merchandising, and checkout optimization.",
    tint: "var(--s-yellow)",
    image: "/images/projects/the-hearty-way-placeholder.webp",
    url: "#PROJECT_HEARTY_WAY",
  },
  {
    id: "bubbleskatzz",
    name: "Bubbleskatzz",
    role: "E-commerce, SEO & CRO",
    description:
      "Driving the brand’s digital growth through online store development, SEO optimization, content strategy, and conversion-focused improvements to increase conversions and average order value.",
    tint: "var(--s-mint)",
    url: "#PROJECT_BUBBLESKATZZ",
  },
];
