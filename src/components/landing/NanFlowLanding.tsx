"use client"

import Link from "next/link"
import { Mountain } from "lucide-react"

import LanguageSwitcher from "@/components/LanguageSwitcher"
import DashboardPreview from "@/components/landing/DashboardPreview"
import Footer from "@/components/landing/Footer"
import GovernmentDashboardPreview from "@/components/landing/GovernmentDashboardPreview"
import Hero from "@/components/landing/Hero"
import PersonaPreview from "@/components/landing/PersonaPreview"
import Problem from "@/components/landing/Problem"
import Roadmap from "@/components/landing/Roadmap"
import Solution from "@/components/landing/Solution"
import { useLanguage } from "@/contexts/LanguageContext"

const navItems = [
  { key: "home", href: "#home" },
  { key: "problem", href: "#problem" },
  { key: "solution", href: "#solution" },
  { key: "dashboard", href: "#dashboard" },
  { key: "government", href: "#government" },
  { key: "roadmap", href: "#roadmap" },
] as const

export default function NanFlowLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-gray-950">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <PersonaPreview />
      <DashboardPreview />
      <GovernmentDashboardPreview />
      <Roadmap />
      <Footer />
    </main>
  )
}

function Navbar() {
  const { t } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/65 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={t.common.homeAria}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_12px_30px_rgba(15,118,110,0.24)]">
            <Mountain className="size-5" />
          </span>
          <span className="text-sm font-bold tracking-[0.18em] text-gray-950">
            {t.common.brand}
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#0F766E]"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            href="/onboarding"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-[#0F766E] px-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)] transition-all duration-300 hover:bg-[#0b625c] sm:px-4"
          >
            <span className="sm:hidden">
              {t.common.startJourney.split(" ")[0]}
            </span>
            <span className="hidden sm:inline">{t.common.startJourney}</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
