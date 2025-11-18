export interface CompanyStat {
  label: string;
  value: string;
}

export const companyStats: CompanyStat[] = [
  { label: "Years advancing clean energy", value: "8+" },
  { label: "Local partners onboarded", value: "85" },
  { label: "Communities supported", value: "120+" },
  { label: "Mentors and advisors", value: "30" },
];

export interface CoreValue {
  title: string;
  copy: string;
}

export const coreValues: CoreValue[] = [
  {
    title: "Transparency",
    copy: "We keep communities informed with open data, measurable goals, and regular reporting.",
  },
  {
    title: "Co-creation",
    copy: "Projects move faster when local governments, private sector, and residents build together.",
  },
  {
    title: "Impact first",
    copy: "We prioritize initiatives that reduce emissions while creating long-term livelihood pathways.",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ronald John Villar",
    role: "Founder & CEO",
    photo: "/images/team-ronaldj.jpg",
  },
  {
    name: "Maja Salvador",
    role: "Head of Partnerships",
    photo: "/images/team-maja.png",
  },
  {
    name: "Macoy Dubs",
    role: "Design Lead",
    photo: "/images/team-macoy.png",
  },
  {
    name: "Sassa Gurl",
    role: "Policy & Research",
    photo: "/images/team-sassa.png",
  },
  {
    name: "Sophie Prime",
    role: "Community Programs",
    photo: "/images/team-sophie.jpg",
  },
  {
    name: "Baus Rufo",
    role: "Lead Engineer",
    photo: "/images/team-baus.png",
  },
];
