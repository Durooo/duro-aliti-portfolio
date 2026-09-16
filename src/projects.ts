export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
  theme: string;
}
export const projects: Project[] = [
  {
    number: "01",
    name: "Doner King",
    category: "Restaurant Website",
    description:
      "A modern digital presence for Doner King in Tetovo, designed around clear navigation, menu discovery, multilingual accessibility, business information, customer reviews, and online ordering.",
    url: "https://doner-king-kappa.vercel.app/",
    image: "doner-king",
    theme: "king",
  },
  {
    number: "02",
    name: "The Spot",
    category: "Restaurant & Online Ordering",
    description:
      "A responsive restaurant website featuring menu browsing, offers, multilingual support, reviews, cart functionality, and an online ordering experience.",
    url: "https://the-spot-five.vercel.app/",
    image: "the-spot",
    theme: "spot",
  },
];
