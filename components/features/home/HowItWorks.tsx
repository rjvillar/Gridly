import FeatureCard from "@/components/ui/cards/FeatureCard";
import { howItWorksSteps } from "@/lib/data/home";

export default function HowItWorks() {
  return (
    <section className="scroll-mt-24 bg-[#0f1f14] py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-4 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-1 text-sm font-medium text-white/80">
            How Gridly Works
          </span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            A guided journey from idea to implementation.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-white/70">
            Designed for teams balancing sustainability targets with
            on-the-ground realities. Each step keeps projects on pace,
            stakeholders aligned, and communities informed.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {howItWorksSteps.map((step, index) => (
            <FeatureCard
              key={step.title}
              index={index}
              title={step.title}
              description={step.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
