import { LucideIcon, Phone, Mail, MapPin } from "lucide-react";

export interface ContactMethod {
  icon: LucideIcon;
  label: string;
  primary: string;
  secondary: string;
}

export const contactMethods: ContactMethod[] = [
  {
    icon: Phone,
    label: "Phone",
    primary: "+123 45 789 000",
    secondary: "+123 45 789 000",
  },
  {
    icon: Mail,
    label: "Email",
    primary: "inquiry@gridly.ph",
    secondary: "help@gridly.ph",
  },
  {
    icon: MapPin,
    label: "Office",
    primary: "Ortigas Center, Pasig City",
    secondary: "Metro Manila, PH",
  },
];
