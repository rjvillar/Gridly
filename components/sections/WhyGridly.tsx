import Image from "next/image";

export default function WhyGridlySection() {
  return (
    <section id="learn-more" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#36a03d]">
            Why Gridly
          </span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Clean energy guidance for every community and business.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Whether you are launching a solar cooperative, scaling a wind farm,
            or modernizing municipal infrastructure, Gridly bridges the gap
            between ambition and trusted execution. Gain clarity on who can
            help, what they deliver, and how quickly they can mobilize.
          </p>
          <ul className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              Verified developer and EPC directory across Luzon, Visayas, and
              Mindanao.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              Shared experience hub featuring benchmarks, case studies, and
              policy updates.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              Collaboration workflows to align government, private sector, and
              community leads.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              Real-time support from energy strategists ready to advise and
              accelerate.
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-slate-900/10 shadow-xl">
          <div className="absolute inset-0 bg-linear-to-tr from-[#36a03d]/20 via-transparent to-transparent" />
          <Image
            src="/images/detail-img.avif"
            alt="Clean energy site"
            width={640}
            height={480}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/85 p-4 text-sm text-slate-700 shadow-lg backdrop-blur">
            &ldquo;We believe clean energy is not just technology—it&apos;s a
            movement for a better world.&rdquo;
            <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Ronald, Founder & CEO, Gridly
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
