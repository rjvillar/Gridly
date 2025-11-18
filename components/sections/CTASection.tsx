import { Button } from "@/components/ui/button";

interface CTASectionProps {
  badge?: string;
  heading: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export default function CTASection({
  badge,
  heading,
  description,
  primaryButtonText,
  primaryButtonHref,
  primaryButtonOnClick,
  secondaryButtonText = "hello@gridly.ph",
  secondaryButtonHref = "mailto:hello@gridly.ph",
  className = "py-20",
}: CTASectionProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-5xl rounded-4xl border border-[#36a03d]/15 bg-linear-to-br from-white via-[#f4faf2] to-white px-8 py-12 shadow-[0_18px_60px_rgba(15,47,24,0.08)]">
        <div className="flex flex-col gap-6 text-center md:text-left md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            {badge && (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2e8230]">
                {badge}
              </p>
            )}
            <h3 className="text-3xl font-semibold text-slate-900">{heading}</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 md:w-64">
            {primaryButtonHref ? (
              <Button
                className="rounded-full bg-[#36a03d] text-white hover:bg-[#2e8230]"
                asChild
              >
                <a href={primaryButtonHref}>{primaryButtonText}</a>
              </Button>
            ) : (
              <Button
                className="rounded-full bg-[#36a03d] text-white hover:bg-[#2e8230]"
                onClick={primaryButtonOnClick}
              >
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                variant="ghost"
                className="rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                asChild
              >
                <a href={secondaryButtonHref}>{secondaryButtonText}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
