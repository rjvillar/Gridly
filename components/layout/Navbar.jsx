import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Gridly home"
        >
          <Image
            src="/images/gridly-logo.png"
            alt="Gridly"
            width={40}
            height={40}
            priority
          />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className="text-sm hover:text-slate-900"
              asChild
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-slate-700" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-l border-slate-200/80 bg-white/98 p-0 backdrop-blur-xl sm:max-w-md"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <SheetHeader className="border-b border-slate-100 px-6 pb-5 pt-8">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/gridly-logo-horizontal.png"
                      alt="Gridly"
                      width={85}
                      height={85}
                    />
                    <SheetTitle className="text-left text-xl font-semibold tracking-tight text-slate-900 hidden">
                      Gridly
                    </SheetTitle>
                  </div>
                </SheetHeader>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-6">
                  <div className="space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center rounded-2xl px-5 py-4 text-base font-medium text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

                  {/* CTA Button */}
                  <div className="space-y-3 px-2">
                    <Button
                      className="w-full rounded-full bg-[#36a03d] py-6 text-base font-semibold text-white shadow-lg shadow-[#36a03d]/20 transition-all hover:bg-[#2e8230] hover:shadow-xl hover:shadow-[#36a03d]/30 active:scale-[0.98]"
                      asChild
                    >
                      <Link href="/#map">Launch Map</Link>
                    </Button>
                    <p className="px-2 text-center text-xs text-slate-500">
                      Discover renewable energy experts across the Philippines
                    </p>
                  </div>
                </nav>

                {/* Footer */}
                <div className="border-t border-slate-100 bg-slate-50/80 px-6 py-5">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>© 2025 Gridly</span>
                    <a
                      href="mailto:hello@gridly.ph"
                      className="font-medium text-[#36a03d] transition hover:text-[#2e8230]"
                    >
                      hello@gridly.ph
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button
            className="rounded-full bg-[#36a03d] px-6 font-semibold text-white shadow-lg shadow-[#36a03d]/20 transition hover:bg-[#2e8230] hidden md:inline-flex"
            asChild
          >
            <Link href="/#map">Launch Map</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
