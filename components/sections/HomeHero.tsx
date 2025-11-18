import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.avif"
          alt="Wind turbines"
          fill
          priority
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-black/30" />
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
            Gridly is the fastest way to discover renewable energy developers,
            EPCs, suppliers, installers, and consultants near you—so every
            project can move from idea to implementation with confidence.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="rounded-full bg-[#36a03d] px-7 text-sm font-semibold tracking-tight text-white shadow-lg shadow-[#36a03d]/20 transition hover:bg-[#2e8230]"
              size="lg"
            >
              <Link href="/grid-map">Find Experts</Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="rounded-full border border-white/40 bg-white/10 text-sm font-semibold text-white hover:bg-white/20"
              size="lg"
              asChild
            >
              <a href="#learn-more">Learn More</a>
            </Button>
          </div>
          <div className="grid gap-2 text-sm text-white/70 sm:grid-cols-2">
            <span>• 100% verified partners across the Philippines</span>
            <span>• Project-ready insights updated in real time</span>
          </div>
        </div>
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 text-white/80 backdrop-blur">
          <h2 className="text-lg font-semibold text-white">Project Pulse</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
              <span>Active briefs</span>
              <span className="text-base font-semibold text-white">32</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
              <span>Average ROI uplift</span>
              <span className="text-base font-semibold text-white">18%</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
              <span>Time to match</span>
              <span className="text-base font-semibold text-white">48 hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
