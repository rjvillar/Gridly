import HomeHero from "@/components/sections/HomeHero";
import WhyGridly from "@/components/sections/WhyGridly";
import HowItWorks from "@/components/features/home/HowItWorks";
import EnergyCategories from "@/components/features/home/EnergyCategories";
import FeaturedProjects from "@/components/features/home/FeaturedProjects";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-[#f3f7f0] to-white text-slate-900">
      {/* Main Content */}
      <main className="pb-24">
        <HomeHero />
        <WhyGridly />
        <HowItWorks />
        <EnergyCategories />
        <FeaturedProjects />
        <CTASection
          badge="Partner With Gridly"
          heading="Ready to build the next wave of renewable energy?"
          description="Share your project scope or service offering and we will connect you with verified partners, collaborative communities, and tailored resources."
          primaryButtonText="Start a Conversation"
          className="scroll-mt-24 py-20"
        />
      </main>
    </div>
  );
}
