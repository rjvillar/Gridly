import Image from "next/image";
import { Button } from "@/components/ui/button";

const companyStats = [
  { label: "Years advancing clean energy", value: "8+" },
  { label: "Local partners onboarded", value: "85" },
  { label: "Communities supported", value: "120+" },
  { label: "Mentors and advisors", value: "30" },
];

const teamMembers = [
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

const coreValues = [
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-[#f5faf4] to-white text-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-slate-100/80 bg-white/90">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-[#36a03d]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2e8230]">
              About Gridly
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              We build bridges between energy innovators and the communities
              they power.
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

      {/* Story Section */}
      <section className="scroll-mt-24 bg-[#0f1f14] py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              Why Gridly exists
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Regional clean-energy projects often stall because teams cannot
              find reliable collaborators fast enough. Gridly closes that gap
              with a centralized, continuously vetted directory and shared
              intelligence hub. The result: less guesswork, more installed
              capacity, and communities that feel ownership over the solutions
              around them.
            </p>
            <p className="text-base leading-relaxed text-white/70">
              Since 2017 we have supported projects ranging from island
              microgrids to enterprise decarbonization programs. Each deployment
              gives us new data, stories, and partnerships we can reinvest back
              into the network.
            </p>
          </div>
          <div className="grow rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_40px_rgba(14,35,25,0.08)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
              Core values
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              {coreValues.map((value) => (
                <li
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-base font-semibold text-white">
                    {value.title}
                  </p>
                  <p className="mt-1">{value.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="border-y border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2e8230]">
              Meet the team
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              The humans connecting technology and impact.
            </h2>
            <p className="mx-auto max-w-3xl text-base text-slate-600">
              We champion flexibility—remote collaboration with periodic
              on-ground immersion across Luzon, Visayas, and Mindanao—to stay
              close to the communities we serve.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4 text-center shadow-[0_18px_35px_rgba(15,35,25,0.08)]"
              >
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-white">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={220}
                    height={220}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-600">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-4xl border border-[#36a03d]/15 bg-linear-to-br from-white via-[#f4faf2] to-white px-8 py-12 shadow-[0_18px_60px_rgba(15,47,24,0.08)]">
          <div className="flex flex-col gap-6 text-center md:text-left md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2e8230]">
                Work with us
              </p>
              <h3 className="text-3xl font-semibold text-slate-900">
                Have a question or project in mind?
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Our team loves helping cities, cooperatives, and climate-forward
                companies find the right partners. Share a few details and we
                will reply within two business days.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:w-64">
              <Button className="rounded-full bg-[#36a03d] text-white hover:bg-[#2e8230]">
                Book a discovery call
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
  );
}
