"use client"

import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bot,
  MapPinned,
  UserRound,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const stepIcons = [UserRound, Bot, MapPinned, BarChart3]

export default function Solution() {
  const { t } = useLanguage()

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.12),transparent_26%),radial-gradient(circle_at_80%_24%,rgba(15,118,110,0.08),transparent_28%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/75 px-3 py-1.5 text-sm font-semibold text-[#0F766E] shadow-sm backdrop-blur">
            {t.solution.badge}
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            {t.solution.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t.solution.subtitle}
          </p>
        </div>

        <div className="mt-16 border-y border-gray-200/70 py-10">
          <div className="grid gap-6 lg:grid-cols-4">
            {t.solution.steps.map((step, index) => {
              const Icon = stepIcons[index]

              return (
                <div
                  key={step.title}
                  className="relative animate-in fade-in slide-in-from-bottom-3"
                >
                  {index < t.solution.steps.length - 1 ? (
                    <div className="absolute right-[-1.4rem] top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="size-6 animate-pulse text-[#10B981]" />
                    </div>
                  ) : null}

                  <Card className="group h-full rounded-xl border-gray-100 bg-white/82 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardHeader className="p-7">
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex size-12 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)] transition-transform duration-300 group-hover:scale-105">
                          <Icon className="size-5" />
                        </span>
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-[#0F766E]">
                          {t.solution.stepLabel} {index + 1}
                        </span>
                      </div>
                      <CardTitle className="mt-6 text-2xl font-bold tracking-tight text-gray-950">
                        {step.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-7 text-gray-600">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  {index < t.solution.steps.length - 1 ? (
                    <ArrowDown className="mx-auto mt-5 size-5 animate-bounce text-[#10B981] lg:hidden" />
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>

        <Card className="mt-16 rounded-xl border-gray-100 bg-white/78 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <CardHeader className="mx-auto max-w-3xl p-7 text-center sm:p-8">
            <CardTitle className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              {t.solution.benefitsTitle}
              <span className="block text-[#0F766E]">
                {t.solution.benefitsHighlight}
              </span>
            </CardTitle>
          </CardHeader>

          <CardContent className="grid gap-4 px-7 pb-7 sm:grid-cols-2 sm:px-8 sm:pb-8 lg:grid-cols-4">
            {t.solution.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl bg-[#F8FAFC]/85 p-5 shadow-sm ring-1 ring-gray-950/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <span className="text-3xl" aria-hidden="true">
                  {benefit.emoji}
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-gray-950">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
