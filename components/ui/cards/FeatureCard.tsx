import { cn } from "@/lib/utils";

interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  index,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/25 hover:bg-white/10",
        className
      )}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#36a03d]/20 blur-3xl transition group-hover:bg-[#36a03d]/30" />
      <div className="relative flex flex-col gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
  );
}
