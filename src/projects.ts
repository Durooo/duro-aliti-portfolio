export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
  theme: string;
  year: string;
  role: string;
  focus: string;
}
export const projects: Project[] = [
  {
    number: "01",
    name: "EuroLaser",
    category: "Industrial / Corporate Website",
    description:
      "A modern corporate website for EuroLaser, combining a clean Swiss-inspired design language with an industrial identity. The site presents the company's services, work and business information through a responsive, structured and professional interface.",
    url: "https://euro-laser.vercel.app/",
    image: "euro-laser",
    theme: "king",
    year: "2026",
    role: "Web Development · UI Implementation",
    focus: "Responsive Design · Corporate Website · Multilingual Experience · Deployment",
  },
  {
    number: "02",
    name: "The Spot",
    category: "Restaurant & Online Ordering",
    description:
      "A responsive restaurant website featuring menu browsing, offers, multilingual support, reviews, cart functionality and an online ordering experience.",
    url: "https://the-spot-five.vercel.app/",
    image: "the-spot",
    theme: "spot",
    year: "2026",
    role: "Web Development",
    focus: "Responsive Design · Online Ordering · Deployment",
  },
  {
    number: "03",
    name: "KuchenFaben",
    category: "Kitchen Design / Business Website",
    description:
      "A premium website for a kitchen business, designed to showcase completed projects through strong photography, minimal typography and an elegant visual experience.",
    url: "https://kuchen-faben.vercel.app/",
    image: "kuchen-faben",
    theme: "spot",
    year: "2026",
    role: "Web Development · UI Implementation",
    focus: "Responsive Design · Project Showcase · Business Website · Deployment",
  },
  {
    number: "04",
    name: "Doner King",
    category: "Restaurant Website",
    description:
      "A modern digital presence for Doner King in Tetovo, designed around clear navigation, menu discovery, multilingual accessibility, business information, customer reviews and online ordering.",
    url: "https://doner-king-kappa.vercel.app/",
    image: "doner-king",
    theme: "king",
    year: "2026",
    role: "Web Development",
    focus: "Responsive Design · Business Website · Deployment",
  },
];
