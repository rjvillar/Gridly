import AboutHero from "@/components/sections/AboutHero";
import CoreValues from "@/components/features/about/CoreValues";
import TeamGrid from "@/components/features/about/TeamGrid";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-[#f5faf4] to-white text-slate-900">
      <AboutHero />
      <CoreValues />
      <TeamGrid />
      <CTASection
        badge="Work with us"
        heading="Have a question or project in mind?"
        description="Our team loves helping cities, cooperatives, and climate-forward companies find the right partners. Share a few details and we will reply within two business days."
        primaryButtonText="Book a discovery call"
        className="py-20"
      />
    </main>
  );
}
