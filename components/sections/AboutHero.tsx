import Image from "next/image";
import { Button } from "@/components/ui/button";

const companyStats = [
  { label: "Years advancing clean energy", value: "8+" },
  { label: "Local partners onboarded", value: "85" },
  { label: "Communities supported", value: "120+" },
  { label: "Mentors and advisors", value: "30" },
];

export default function AboutHeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-100/80 bg-white/90">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full bg-[#36a03d]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2e8230]">
            About Gridly
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            We build bridges between energy innovators and the communities they
            power.
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            Gridly is a renewable-energy locator built in the Philippines. Our
            hybrid team of engineers, climate advocates, and community
            organizers helps municipalities and businesses discover trusted
            partners—from EPCs to installers—without the guesswork.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="rounded-full bg-[#36a03d] px-6 text-white shadow-lg shadow-[#36a03d]/20 hover:bg-[#2e8230]"
              size="lg"
            >
              Meet the Team
            </Button>
            <Button
              variant="ghost"
              className="rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-900 hover:bg-slate-50"
              size="lg"
              asChild
            >
              <a href="mailto:team@gridly.ph">team@gridly.ph</a>
            </Button>
          </div>
          <dl className="grid gap-4 rounded-3xl border border-slate-100 bg-slate-50/80 p-6 text-sm text-slate-600 sm:grid-cols-2">
            {companyStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-semibold text-[#1f4d29]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative rounded-3xl border border-slate-100 bg-slate-100/40 shadow-[0_25px_60px_rgba(14,35,25,0.12)]">
          <Image
            src="/images/team-hero.avif"
            alt="Gridly collaboration"
            width={900}
            height={640}
            className="h-full w-full rounded-3xl object-cover"
            priority
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
            <p className="text-sm font-semibold text-slate-900">
              Together we are strong
            </p>
            <p className="text-xs text-slate-600">
              Every pilot we launch pairs technical excellence with
              community-led decision making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
