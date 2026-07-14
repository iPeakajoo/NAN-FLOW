"use client"

import { Mountain } from "lucide-react"

import { useLanguage } from "@/contexts/LanguageContext"

const footerLinks = [
  { key: "github", href: "https://github.com" },
  { key: "team", href: "#about" },
  { key: "contact", href: "mailto:team@nanflow.ai" },
] as const

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative overflow-hidden bg-white px-5 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-900/15 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 rounded-[2rem] bg-[#F8FAFC]/78 p-6 shadow-sm ring-1 ring-gray-950/5 backdrop-blur sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)]">
                <Mountain className="size-5" />
              </span>
              <p className="text-sm font-bold tracking-[0.18em] text-gray-950">
                {t.common.brand}
              </p>
            </div>
            <p className="mt-5 text-base font-medium text-gray-600">
              {t.footer.tagline}
            </p>
            <p className="mt-2 text-sm font-semibold text-[#0F766E]">
              {t.footer.challenge}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-3 sm:justify-end"
            aria-label={t.footer.aria}
          >
            {footerLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-gray-950/5 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#0F766E] hover:shadow-md"
              >
                {t.footer.links[link.key]}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
