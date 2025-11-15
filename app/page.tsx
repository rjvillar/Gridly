import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Droplet,
  Leaf,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";

const energyCategories = [
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

const howItWorks = [
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

const impactStats = [
  { label: "Active RE partners", value: "85+" },
  { label: "Communities served", value: "120+" },
  { label: "Tons of CO₂ offset", value: "40.9B" },
  { label: "Avg. response time", value: "48h" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f3f7f0] to-white text-slate-900">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/gridly-logo.png"
              alt="Gridly"
              width={40}
              height={40}
              priority
            />
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <Button variant="ghost" className="text-sm" asChild>
              <a href="#">Home</a>
            </Button>
            <Button variant="ghost" className="text-sm" asChild>
              <a href="#about">About</a>
            </Button>
            <Button variant="ghost" className="text-sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Button
              className="rounded-full bg-[#36a03d] px-6 font-semibold text-white shadow-lg shadow-[#36a03d]/20 transition hover:bg-[#2e8230]"
              asChild
            >
              <a href="#map">Launch Map</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-image.avif"
              alt="Wind turbines"
              fill
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
          </div>
          <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:py-28">
            <div className="max-w-2xl space-y-6 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur">
                Renewable Intelligence Platform
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Connecting communities to the clean energy experts they need.
              </h1>
              <p className="text-base md:text-lg text-white/80">
                Gridly is the fastest way to discover renewable energy
                developers, EPCs, suppliers, installers, and consultants near
                you—so every project can move from idea to implementation with
                confidence.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  className="rounded-full bg-[#36a03d] px-7 text-sm font-semibold tracking-tight text-white shadow-lg shadow-[#36a03d]/20 transition hover:bg-[#2e8230]"
                  size="lg"
                >
                  Find Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-full border border-white/40 bg-white/10 text-sm font-semibold text-white hover:bg-white/20"
                  size="lg"
                  asChild
                >
                  <a href="#about">Learn More</a>
                </Button>
              </div>
              <div className="grid gap-2 text-sm text-white/70 sm:grid-cols-2">
                <span>• 100% verified partners across the Philippines</span>
                <span>• Project-ready insights updated in real time</span>
              </div>
            </div>
            <div className="flex w-full max-w-sm flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 text-white/80 backdrop-blur">
              <h2 className="text-lg font-semibold text-white">
                Project Pulse
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                  <span>Active briefs</span>
                  <span className="text-base font-semibold text-white">32</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                  <span>Average ROI uplift</span>
                  <span className="text-base font-semibold text-white">
                    18%
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                  <span>Time to match</span>
                  <span className="text-base font-semibold text-white">
                    48 hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Gridly Section */}
        <section id="about" className="scroll-mt-24 bg-white py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#36a03d]">
                Why Gridly
              </span>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Clean energy guidance for every community and business.
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Whether you are launching a solar cooperative, scaling a wind
                farm, or modernizing municipal infrastructure, Gridly bridges
                the gap between ambition and trusted execution. Gain clarity on
                who can help, what they deliver, and how quickly they can
                mobilize.
              </p>
              <ul className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
                <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  Verified developer and EPC directory across Luzon, Visayas,
                  and Mindanao.
                </li>
                <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  Shared experience hub featuring benchmarks, case studies, and
                  policy updates.
                </li>
                <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  Collaboration workflows to align government, private sector,
                  and community leads.
                </li>
                <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  Real-time support from energy strategists ready to advise and
                  accelerate.
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-slate-900/10 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#36a03d]/20 via-transparent to-transparent" />
              <Image
                src="/images/detail-image.avif"
                alt="Clean energy site"
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/85 p-4 text-sm text-slate-700 shadow-lg backdrop-blur">
                “We believe clean energy is not just technology—it’s a movement
                for a better world.”
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Ronald, Founder & CEO, Gridly
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How Gridly Works Section */}
        <section
          id="map"
          className="scroll-mt-24 bg-[#0f1f14] py-20 text-white"
        >
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
              {howItWorks.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/25 hover:bg-white/10"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#36a03d]/20 blur-3xl transition group-hover:bg-[#36a03d]/30" />
                  <div className="relative flex flex-col gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Categories Section */}
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
                Gridly’s directory spans solar installers, hydro developers,
                biomass innovators, and geothermal pioneers so you can assemble
                the exact team your project requires.
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
                  <h3 className="text-xl font-semibold text-slate-900">
                    {label}
                  </h3>
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

        {/* Featured Projects Section */}
        <section className="scroll-mt-24 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  "/images/renewable-hub.avif",
                  "/images/solar-panels.avif",
                  "/images/hero-image.avif",
                  "/images/detail-image.avif",
                ].map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="group relative overflow-hidden rounded-3xl bg-slate-200"
                  >
                    <Image
                      src={image}
                      alt={`Renewable energy showcase ${index + 1}`}
                      width={480}
                      height={360}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition group-hover:opacity-90" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
                      <div>
                        <p className="text-sm font-medium">Project focus</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                          Clean energy in action
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                ))}
              </div>
              <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,47,24,0.08)]">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2e8230]">
                  Insights
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                  &ldquo;The world can’t wait. Gridly shows why clean energy now
                  makes sense for every region.&rdquo;
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Dive into market intelligence, policy updates, and technology
                  spotlights that help leaders plan for resilient, equitable
                  energy transitions.
                </p>
                <Button
                  className="mt-6 w-full rounded-full bg-[#36a03d] text-white hover:bg-[#2e8230]"
                  asChild
                >
                  <a href="#contact">Request a briefing</a>
                </Button>
              </aside>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-5xl rounded-4xl border border-[#36a03d]/15 bg-gradient-to-br from-white via-[#f4faf2] to-white px-8 py-12 shadow-[0_18px_60px_rgba(15,47,24,0.08)]">
            <div className="flex flex-col gap-8 text-center md:text-left md:gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2e8230]">
                  Partner With Gridly
                </span>
                <h3 className="text-3xl font-semibold text-slate-900">
                  Ready to build the next wave of renewable energy?
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Share your project scope or service offering and we will
                  connect you with verified partners, collaborative communities,
                  and tailored resources.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:w-64">
                <Button className="rounded-full bg-[#36a03d] text-white hover:bg-[#2e8230]">
                  Start a Conversation
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  asChild
                >
                  <a href="mailto:hello@gridly.ph">hello@gridly.ph</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
