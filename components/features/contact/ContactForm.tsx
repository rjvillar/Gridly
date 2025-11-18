import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactFormSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Or fill out the form below
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Share your project details and we&apos;ll connect you with the right
            renewable energy partners.
          </p>
        </div>

        <form className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_18px_40px_rgba(15,47,24,0.08)] md:p-10">
          {/* Inquiry Purpose & Description dropdowns */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="inquiry-purpose"
                className="text-sm font-semibold text-slate-700"
              >
                Inquiry Purpose<span className="text-red-500">*</span>
              </Label>
              <Select name="inquiry-purpose" required>
                <SelectTrigger
                  id="inquiry-purpose"
                  className="w-full rounded-2xl border-slate-200 bg-slate-50/80 px-4 py-3 text-sm focus:border-[#36a03d] focus:ring-2 focus:ring-[#36a03d]/20"
                >
                  <SelectValue placeholder="Choose one option..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="partnership">
                    Partnership Inquiry
                  </SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="collaboration">
                    Collaboration Proposal
                  </SelectItem>
                  <SelectItem value="general">General Question</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-semibold text-slate-700"
              >
                Description that fits you
                <span className="text-red-500">*</span>
              </Label>
              <Select name="description" required>
                <SelectTrigger
                  id="description"
                  className="w-full rounded-2xl border-slate-200 bg-slate-50/80 px-4 py-3 text-sm focus:border-[#36a03d] focus:ring-2 focus:ring-[#36a03d]/20"
                >
                  <SelectValue placeholder="Choose one option..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="developer">RE Developer/EPC</SelectItem>
                  <SelectItem value="municipality">
                    Local Government/Municipality
                  </SelectItem>
                  <SelectItem value="enterprise">
                    Enterprise/Corporate
                  </SelectItem>
                  <SelectItem value="community">
                    Community Organization
                  </SelectItem>
                  <SelectItem value="consultant">Consultant/Advisor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Fields */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="full-name"
                className="text-sm font-semibold text-slate-700"
              >
                Full Name
              </Label>
              <Input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Enter your full name..."
                className="rounded-2xl border-slate-200 bg-slate-50/80 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-[#36a03d] focus:ring-2 focus:ring-[#36a03d]/20"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-slate-700"
              >
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address..."
                className="rounded-2xl border-slate-200 bg-slate-50/80 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-[#36a03d] focus:ring-2 focus:ring-[#36a03d]/20"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="organization"
                className="text-sm font-semibold text-slate-700"
              >
                Organization
              </Label>
              <Input
                type="text"
                id="organization"
                name="organization"
                placeholder="Enter your organization..."
                className="rounded-2xl border-slate-200 bg-slate-50/80 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-[#36a03d] focus:ring-2 focus:ring-[#36a03d]/20"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-semibold text-slate-700"
              >
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number..."
                className="rounded-2xl border-slate-200 bg-slate-50/80 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-[#36a03d] focus:ring-2 focus:ring-[#36a03d]/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-semibold text-slate-700"
            >
              Message<span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Enter your message here..."
              className="resize-none rounded-2xl border-slate-200 bg-slate-50/80 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-[#36a03d] focus:ring-2 focus:ring-[#36a03d]/20"
            />
          </div>

          <div className="justify-center pt-2">
            <Button
              type="submit"
              className="w-full rounded-full bg-[#36a03d] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#36a03d]/20 transition hover:bg-[#2e8230] md:w-auto md:px-12"
              size="lg"
            >
              Submit Form
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          We typically respond within 48 hours during business days. For urgent
          matters, please call us directly at{" "}
          <a
            href="tel:+12345789000"
            className="font-medium text-[#2e8230] hover:underline"
          >
            +123 45 789 000
          </a>
          .
        </p>
      </div>
    </section>
  );
}
