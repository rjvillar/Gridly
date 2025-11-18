import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  secondaryText?: string;
  className?: string;
  iconClassName?: string;
}

export default function IconCard({
  icon: Icon,
  title,
  description,
  secondaryText,
  className,
  iconClassName,
}: IconCardProps) {
  return (
    <div
      className={cn(
        "group rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-[0_12px_30px_rgba(15,47,24,0.06)] transition hover:shadow-[0_18px_40px_rgba(15,47,24,0.12)]",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#36a03d]/10 text-[#2e8230]",
          iconClassName
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        {title}
      </h3>
      <p className="mb-1 text-base font-medium text-slate-900">{description}</p>
      {secondaryText && (
        <p className="text-sm text-slate-600">{secondaryText}</p>
      )}
    </div>
  );
}
