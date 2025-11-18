import IconCard from "@/components/ui/cards/IconCard";
import { contactMethods } from "@/lib/data/contact";

export default function ContactMethodsGrid() {
  return (
    <section className="border-b border-slate-100 bg-white/90 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s Get In Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Have questions about renewable energy partnerships, technical
            support, or collaboration opportunities? Reach out—we&apos;re here
            to help accelerate your clean energy goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactMethods.map((method) => (
            <IconCard
              key={method.label}
              icon={method.icon}
              title={method.label}
              description={method.primary}
              secondaryText={method.secondary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
