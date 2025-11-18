import { ArrowRight } from "lucide-react";
import { energyCategories, impactStats } from "@/lib/data/home";

export default function EnergyCategories() {
  return (
    <section className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <div className="flex flex-col gap-4 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#36a03d]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2e8230]">
            Renewable Network
          </span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Discover trusted experts across every renewable discipline.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600">
            Gridly&apos;s directory spans solar installers, hydro developers,
            biomass innovators, and geothermal pioneers so you can assemble the
            exact team your project requires.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {energyCategories.map(({ label, description, Icon }) => (
            <div
              key={label}
              className="group flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,47,24,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,47,24,0.12)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#36a03d]/10 text-[#2e8230]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{label}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {description}
              </p>
              <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#2e8230] transition group-hover:translate-x-1">
                Explore specialists
                <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          ))}
        </div>
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-inner md:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 text-center md:text-left"
            >
              <span className="text-3xl font-semibold text-[#1b4724] md:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
