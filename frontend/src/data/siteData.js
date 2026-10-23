import {
  Boxes,
  LifeBuoy,
  Compass,
  RefreshCcw,
  Cloud,
  Sparkles,
  Headphones,
  Users,
  Code2,
  BrainCircuit,
  Factory,
  HeartPulse,
  Pill,
  Bot,
  Zap,
  Car,
  ShoppingBag,
  RadioTower,
  PlugZap,
} from "lucide-react";

export const IMAGES = {
  heroTech:
    "https://images.unsplash.com/photo-1637166185518-058f5896a2e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwc2VydmVyJTIwbmV0d29yayUyMGNsb3VkfGVufDB8fHx8MTc5MjcxNjQzM3ww&ixlib=rb-4.1.0&q=85",
  serverRack:
    "https://images.pexels.com/photos/17489157/pexels-photo-17489157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  serverNetwork:
    "https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  roboticsArm:
    "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBlbmdpbmVlcmluZyUyMHJvYm90aWNzJTIwbWFudWZhY3R1cmluZyUyMGhlYWx0aGNhcmUlMjBhdXRvbW90aXZlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3OTI3MTY0MzN8MA&ixlib=rb-4.1.0&q=85",
  factory:
    "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBlbmdpbmVlcmluZyUyMHJvYm90aWNzJTIwbWFudWZhY3R1cmluZyUyMGhlYWx0aGNhcmUlMjBhdXRvbW90aXZlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3OTI3MTY0MzN8MA&ixlib=rb-4.1.0&q=85",
  automotive:
    "https://images.pexels.com/photos/5506047/pexels-photo-5506047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  healthcare:
    "https://images.unsplash.com/photo-1578496480240-32d3e0c04525?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMGxhYiUyMHNjaWVudGlzdCUyMHBoYXJtYWN5JTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3OTI3MTY0NDF8MA&ixlib=rb-4.1.0&q=85",
  pharmacy:
    "https://images.pexels.com/photos/8442098/pexels-photo-8442098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  team:
    "https://images.pexels.com/photos/1181618/pexels-photo-1181618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  executive:
    "https://images.pexels.com/photos/1181735/pexels-photo-1181735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const SERVICES = [
  {
    num: "01",
    title: "Supply Chain & Sourcing",
    icon: Boxes,
    blurb:
      "End-to-end supply chain engineering — demand planning, sourcing strategy, and logistics platforms that keep global operations moving.",
    tags: ["Demand Planning", "Procurement", "Logistics Platforms"],
  },
  {
    num: "02",
    title: "Managed Services & Support",
    icon: LifeBuoy,
    blurb:
      "24×7 operations for mission-critical estates. We run, monitor, and optimise your systems so your teams can build what's next.",
    tags: ["24×7 NOC", "SLA-driven", "ITSM"],
  },
  {
    num: "03",
    title: "Consulting",
    icon: Compass,
    blurb:
      "Technology strategy grounded in engineering reality — roadmaps, architecture reviews, and operating models that survive contact with production.",
    tags: ["Strategy", "Architecture", "Operating Models"],
  },
  {
    num: "04",
    title: "Digital Transformation",
    icon: RefreshCcw,
    blurb:
      "Legacy estates rebuilt into modern digital cores — process by process, platform by platform, without stopping the business.",
    tags: ["Modernisation", "Process Re-engineering", "Change"],
  },
  {
    num: "05",
    title: "Cloud Services",
    icon: Cloud,
    blurb:
      "Design, migration, and FinOps across AWS, Azure, and GCP — cloud estates engineered for scale, resilience, and cost discipline.",
    tags: ["Migration", "Kubernetes", "FinOps"],
  },
  {
    num: "06",
    title: "CX Transformation",
    icon: Sparkles,
    blurb:
      "Customer experience rebuilt around data — journey design, personalisation engines, and service models that measurably lift loyalty.",
    tags: ["Journey Design", "Personalisation", "VoC Analytics"],
  },
  {
    num: "07",
    title: "CX Contact Center",
    icon: Headphones,
    blurb:
      "Omnichannel contact centers with AI-assist, intelligent routing, and workforce tooling — engineered for resolution on first contact.",
    tags: ["Omnichannel", "AI Assist", "WFM"],
  },
  {
    num: "08",
    title: "Staffing & Recruitment Consulting",
    icon: Users,
    blurb:
      "Precision technical staffing — vetted engineers, architects, and delivery leaders embedded into your teams at the speed of the roadmap.",
    tags: ["Contract", "Permanent", "Embedded Teams"],
  },
  {
    num: "09",
    title: "Product, Software Development, Quality & Engineering",
    icon: Code2,
    blurb:
      "Full-lifecycle product engineering — from discovery to delivery — with quality engineered in, not tested on.",
    tags: ["Product Build", "QA Automation", "DevOps"],
  },
  {
    num: "10",
    title: "AI, Analytics & ML",
    icon: BrainCircuit,
    blurb:
      "Applied AI that ships — data platforms, ML models in production, and decision systems wired into real workflows.",
    tags: ["Data Platforms", "MLOps", "GenAI"],
  },
];

export const INDUSTRIES = [
  {
    title: "Manufacturing",
    icon: Factory,
    image: IMAGES.factory,
    blurb:
      "Smart-factory platforms, predictive maintenance, and supply visibility across the production line.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    image: IMAGES.healthcare,
    blurb:
      "Interoperable clinical systems, patient-experience platforms, and compliant data engineering.",
  },
  {
    title: "Pharmacy",
    icon: Pill,
    image: IMAGES.pharmacy,
    blurb:
      "Validated systems for dispensing, inventory, and regulatory-grade traceability.",
  },
  {
    title: "Robotics",
    icon: Bot,
    image: IMAGES.roboticsArm,
    blurb:
      "Control software, telemetry, and fleet orchestration for autonomous and collaborative systems.",
  },
  {
    title: "Cloud & Power Infrastructure",
    icon: Zap,
    image: IMAGES.serverRack,
    blurb:
      "High-density compute and energy estates — monitored, automated, and run for uptime.",
  },
  {
    title: "Automotive",
    icon: Car,
    image: IMAGES.automotive,
    blurb:
      "Connected-vehicle platforms, manufacturing IT, and dealer-experience systems.",
  },
  {
    title: "Consumer",
    icon: ShoppingBag,
    image: null,
    blurb:
      "Commerce platforms, demand sensing, and loyalty engineering for consumer brands.",
  },
  {
    title: "Communications",
    icon: RadioTower,
    image: IMAGES.serverNetwork,
    blurb:
      "OSS/BSS modernisation, network analytics, and subscriber-experience platforms.",
  },
  {
    title: "Industrial & Power Industries",
    icon: PlugZap,
    image: null,
    blurb:
      "SCADA-adjacent analytics, asset performance, and field-service digitalisation.",
  },
];

export const NAV = [
  { name: "Home", path: "/", testid: "nav-link-home" },
  {
    name: "Who We Are",
    path: "/who-we-are",
    testid: "nav-link-who-we-are",
    dropdown: "who",
    items: [
      { label: "About Us", to: "/who-we-are", testid: "nav-sub-about" },
      { label: "Join Us / Careers", to: "/who-we-are#careers", testid: "nav-sub-careers" },
    ],
  },
  {
    name: "What We Do",
    path: "/what-we-do",
    testid: "nav-link-what-we-do",
    dropdown: "what",
  },
  {
    name: "Industries",
    path: "/industries",
    testid: "nav-link-industries",
    dropdown: "industries",
  },
  { name: "Contact", path: "/contact", testid: "nav-link-contact" },
];
