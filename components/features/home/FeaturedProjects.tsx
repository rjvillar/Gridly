import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/lib/data/home";

export default function FeaturedProjects() {
  return (
    <section className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div
                key={`${project.src}-${index}`}
                className="group relative overflow-hidden rounded-3xl bg-slate-200"
              >
                <Image
                  src={project.src}
                  alt={`${project.title}`}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-80 transition group-hover:opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
                  <div>
                    <p className="text-sm font-medium">{project.title}</p>
                    <p className="text-xs tracking-wide text-white/70">
                      {project.description}
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
              &ldquo;The world can&apos;t wait. Gridly shows why clean energy
              now makes sense for every region.&rdquo;
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Dive into market intelligence, policy updates, and technology
              spotlights that help leaders plan for resilient, equitable energy
              transitions.
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
  );
}
