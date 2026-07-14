"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const personaGradients = [
  "from-emerald-50 via-white to-teal-50",
  "from-lime-50 via-white to-emerald-50",
  "from-cyan-50 via-white to-emerald-50",
  "from-green-50 via-white to-teal-50",
]

export default function PersonaPreview() {
  const { t } = useLanguage()

  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(15,118,110,0.10),transparent_30%),linear-gradient(180deg,#F8FAFC_0%,#ffffff_52%,#F8FAFC_100%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/75 px-3 py-1.5 text-sm font-semibold text-[#0F766E] shadow-sm backdrop-blur">
            {t.persona.badge}
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            {t.persona.titleLine1}
            <span className="block text-[#0F766E]">
              {t.persona.titleLine2}
            </span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t.persona.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
          {t.persona.cards.map((persona, index) => (
            <Card
              key={persona.title}
              className={`group relative overflow-hidden rounded-2xl border-gray-100 bg-gradient-to-br ${personaGradients[index]} shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="absolute -right-16 -top-16 size-44 rounded-full bg-[#10B981]/16 blur-3xl transition-transform duration-500 group-hover:scale-125" />
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0F766E,#10B981,#14b8a6)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <CardHeader className="relative p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-5xl leading-none" aria-hidden="true">
                    {persona.emoji}
                  </span>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#0F766E] shadow-sm ring-1 ring-emerald-900/10 backdrop-blur">
                    {persona.badge}
                  </span>
                </div>

                <CardTitle className="mt-8 text-2xl font-bold tracking-tight text-gray-950">
                  {persona.title}
                </CardTitle>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-sm font-medium leading-6 text-gray-600">
                  {persona.description.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl bg-white/62 px-3 py-2 ring-1 ring-gray-950/5 backdrop-blur"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardHeader>

              <CardContent className="relative px-7 pb-7">
                <Link
                  href="/onboarding"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-emerald-900/10 bg-white/80 px-4 font-semibold text-gray-950 shadow-sm backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#0F766E]"
                >
                  {t.persona.viewJourney}
                  <ArrowRight className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            {t.persona.bottomTitle}
            <span className="block text-[#0F766E]">
              {t.persona.bottomHighlight}
            </span>
          </h3>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t.persona.bottomSubtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
