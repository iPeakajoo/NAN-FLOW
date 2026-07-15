"use client"

import {
  Activity,
  ArrowRight,
  Building2,
  ShoppingBag,
  Smartphone,
} from "lucide-react"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const phaseIcons = [Smartphone, Building2, Activity, ShoppingBag]

const statusClasses = [
  "bg-emerald-50 text-[#0F766E] ring-emerald-900/10",
  "bg-teal-50 text-teal-700 ring-teal-900/10",
  "bg-cyan-50 text-cyan-700 ring-cyan-900/10",
  "bg-slate-100 text-slate-700 ring-slate-900/10",
]

export default function Roadmap() {
  const { t } = useLanguage()

  return (
    <section
      id="roadmap"
      className="relative isolate overflow-hidden bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_62%,rgba(15,118,110,0.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_48%,#ffffff_100%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="scroll-fade-up mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/75 px-3 py-1.5 text-sm font-semibold text-[#0F766E] shadow-sm backdrop-blur">
            {t.roadmap.badge}
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            {t.roadmap.titleLine1}
            <span className="block text-[#0F766E]">
              {t.roadmap.titleLine2}
            </span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t.roadmap.subtitle}
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#10B981] via-[#0F766E]/35 to-transparent md:block lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-5">
            {t.roadmap.phases.map((phase, index) => {
              const Icon = phaseIcons[index]
              const isEven = index % 2 === 0

              return (
                <div
                  key={phase.title}
                  className={`scroll-fade-up relative grid gap-5 lg:grid-cols-2 ${
                    isEven ? "" : "lg:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div className="absolute left-6 top-8 z-10 hidden size-4 rounded-full bg-[#10B981] shadow-[0_0_0_8px_rgba(16,185,129,0.14),0_0_34px_rgba(16,185,129,0.45)] md:block lg:left-1/2 lg:-translate-x-1/2" />

                  <Card className="group overflow-hidden rounded-2xl border-gray-100 bg-white/86 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:ml-16 lg:ml-0">
                    <div className="h-1 bg-[linear-gradient(90deg,#0F766E,#10B981,#99f6e4)] transition-all duration-500 group-hover:h-1.5" />
                    <CardHeader className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-[#0F766E] ring-1 ring-emerald-900/10">
                            {phase.phase}
                          </span>
                          {"year" in phase ? (
                            <span className="rounded-full bg-gray-950 px-3 py-1 text-sm font-bold text-white">
                              {phase.year}
                            </span>
                          ) : null}
                        </div>
                        <span className="flex size-12 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_16px_36px_rgba(15,118,110,0.22)] transition-transform duration-300 group-hover:scale-105">
                          <Icon className="size-5" />
                        </span>
                      </div>
                      <CardTitle className="mt-8 text-2xl font-bold tracking-tight text-gray-950">
                        {phase.title}
                      </CardTitle>
                      <span
                        className={`mt-4 w-fit rounded-full px-3 py-1 text-xs font-bold ring-1 ${statusClasses[index]}`}
                      >
                        {phase.status}
                      </span>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <div className="grid gap-2">
                        {phase.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] px-3 py-2 text-sm font-semibold text-gray-600 ring-1 ring-gray-950/5"
                          >
                            <span className="size-1.5 rounded-full bg-[#10B981]" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        <Card className="scroll-fade-up mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] border-gray-100 bg-white/88 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0F766E,#10B981,#99f6e4)]" />
          <CardContent className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-[#0F766E] ring-1 ring-emerald-900/10">
                <ShoppingBag className="size-5" />
              </div>
              <h3 className="mt-6 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                {t.roadmap.ctaTitle}
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                {t.roadmap.ctaSubtitle}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/onboarding"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0F766E] px-6 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.25)] transition-all duration-300 hover:bg-[#0b625c]"
              >
                {t.common.startJourney}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/government"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-emerald-900/10 bg-white/80 px-6 text-base font-semibold text-gray-950 shadow-sm backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#0F766E]"
              >
                {t.common.governmentDashboard}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
