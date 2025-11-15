"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0f1f14] text-white">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 lg:pb-5">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-flex w-fit">
              <Image
                src="/images/gridly-logo-vertical-light.png"
                alt="Gridly"
                width={100}
                height={100}
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Connecting communities to the clean energy experts they need.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Site Map */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Site Map
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/"
                className="text-sm text-white/70 transition hover:text-white hover:underline"
              >
                Homepage
              </Link>
              <Link
                href="/grid-map"
                className="text-sm text-white/70 transition hover:text-white hover:underline"
              >
                Technology
              </Link>
              <Link
                href="/about"
                className="text-sm text-white/70 transition hover:text-white hover:underline"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-white/70 transition hover:text-white hover:underline"
              >
                Resources & news
              </Link>
              <Link
                href="/contact"
                className="text-sm text-white/70 transition hover:text-white hover:underline"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-sm text-white/70 transition hover:text-white hover:underline"
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-white/70 transition hover:text-white hover:underline"
              >
                Portal
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/privacy"
                className="text-sm text-white/70 transition hover:text-white hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/70 transition hover:text-white hover:underline"
              >
                Terms of Services
              </Link>
              <Link
                href="/legal"
                className="text-sm text-white/70 transition hover:text-white hover:underline"
              >
                Lawyer&apos;s Corners
              </Link>
            </nav>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-16 flex items-center justify-center border-t border-white/10 pt-8">
          <Button
            onClick={scrollToTop}
            variant="ghost"
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <ArrowUp className="h-4 w-4 transition group-hover:-translate-y-0.5" />
            BACK TO TOP
          </Button>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-white/50">
            Copyright © 2025, Gridly. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
