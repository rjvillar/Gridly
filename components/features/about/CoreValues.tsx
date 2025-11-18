import { coreValues } from "@/lib/data/about";

export default function CoreValues() {
  return (
    <section className="scroll-mt-24 bg-[#0f1f14] py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">
            Why Gridly exists
          </h2>
          <p className="text-base leading-relaxed text-white/70">
            Regional clean-energy projects often stall because teams cannot find
            reliable collaborators fast enough. Gridly closes that gap with a
            centralized, continuously vetted directory and shared intelligence
            hub. The result: less guesswork, more installed capacity, and
            communities that feel ownership over the solutions around them.
          </p>
          <p className="text-base leading-relaxed text-white/70">
            Since 2017 we have supported projects ranging from island microgrids
            to enterprise decarbonization programs. Each deployment gives us new
            data, stories, and partnerships we can reinvest back into the
            network.
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
  );
}
