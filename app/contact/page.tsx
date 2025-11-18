import ContactMethodsGrid from "@/components/features/contact/ContactMethodsGrid";
import ContactForm from "@/components/features/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-[#f5faf4] to-white text-slate-900">
      <ContactMethodsGrid />
      <ContactForm />
    </main>
  );
}
