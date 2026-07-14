"use client"

import { BarChart3, CloudRain, MapPinned } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const problemIcons = [MapPinned, CloudRain, BarChart3]

export default function Problem() {
  const { t } = useLanguage()

  return (
    <section id="features" className="relative isolate overflow-hidden bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(15,118,110,0.09),transparent_30%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_78%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/75 px-3 py-1.5 text-sm font-semibold text-[#0F766E] shadow-sm backdrop-blur">
            {t.problem.badge}
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            {t.problem.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t.problem.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.problem.cards.map((card, index) => {
            const Icon = problemIcons[index]

            return (
              <Card
                key={card.title}
                className="group flex h-full animate-in fade-in slide-in-from-bottom-3 flex-col rounded-xl border-gray-100 bg-white/90 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="flex flex-1 p-7">
                  <span className="mb-7 flex size-14 items-center justify-center rounded-xl bg-emerald-50 text-[#0F766E] shadow-sm transition-colors duration-300 group-hover:bg-[#0F766E] group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-2xl font-bold tracking-tight text-gray-950">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="mt-4 text-base leading-7 text-gray-600">
                    {card.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-7 pb-7">
                  <div className="rounded-xl bg-[#F8FAFC] px-4 py-3 text-sm font-bold text-gray-700 ring-1 ring-gray-950/5">
                    {card.highlight}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center text-2xl font-semibold leading-9 tracking-tight text-gray-950 sm:text-3xl">
          {t.problem.statementBefore}{" "}
          <span className="text-[#0F766E]">
            {t.problem.statementHighlight}
          </span>
          , {t.problem.statementAfter}
        </p>
      </div>
    </section>
  )
}
