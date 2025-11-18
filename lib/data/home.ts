import {
  LucideIcon,
  Sun,
  Droplet,
  Wind,
  Leaf,
  Thermometer,
} from "lucide-react";

export interface EnergyCategory {
  label: string;
  description: string;
  Icon: LucideIcon;
}

export const energyCategories: EnergyCategory[] = [
  {
    label: "Solar",
    description: "Photovoltaic, hybrid, and utility-scale solar providers.",
    Icon: Sun,
  },
  {
    label: "Hydro",
    description: "Run-of-river, micro, and large-scale hydro partners.",
    Icon: Droplet,
  },
  {
    label: "Wind",
    description: "Onshore and offshore wind specialists and consultants.",
    Icon: Wind,
  },
  {
    label: "Biomass",
    description: "Waste-to-energy, biofuel, and agricultural solution teams.",
    Icon: Leaf,
  },
  {
    label: "Geothermal",
    description: "Exploration, drilling, and plant optimization experts.",
    Icon: Thermometer,
  },
];

export interface ImpactStat {
  label: string;
  value: string;
}

export const impactStats: ImpactStat[] = [
  { label: "Active RE partners", value: "85+" },
  { label: "Communities served", value: "120+" },
  { label: "Tons of CO₂ offset", value: "40.9B" },
  { label: "Avg. response time", value: "48h" },
];

export interface HowItWorksStep {
  title: string;
  body: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    title: "Explore the Atlas",
    body: "Scan the national Gridly map to locate renewable energy developers in seconds.",
  },
  {
    title: "Filter by Need",
    body: "Refine by province, technology, or project scale to surface the right partners.",
  },
  {
    title: "Request a Match",
    body: "Share your project goals and receive curated matches aligned to your requirements.",
  },
  {
    title: "Collaborate & Launch",
    body: "Open conversations, scope engagements, and accelerate clean energy adoption.",
  },
];

export interface FeaturedProject {
  src: string;
  title: string;
  description: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    src: "/images/renewable-hub.avif",
    title: "Community Renewable Hub",
    description:
      "Microgrid program delivering reliable power to underserved barangays.",
  },
  {
    src: "/images/solar-panels.avif",
    title: "Rooftop Solar Program",
    description:
      "Commercial and industrial rooftops cutting costs and grid load.",
  },
  {
    src: "/images/thermal-plant.avif",
    title: "Biomass Thermal Plant",
    description:
      "Agricultural waste converted into clean, dispatchable baseload.",
  },
  {
    src: "/images/windmill-projects.avif",
    title: "Coastal Wind Expansion",
    description: "Onshore turbines optimized for local monsoon wind profiles.",
  },
];
