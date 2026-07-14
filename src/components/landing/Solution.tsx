import { ArrowDown, ArrowRight, Compass, Sparkles, UsersRound } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const solutionSteps = [
  {
    title: "Choose Persona",
    description:
      "Travelers start by selecting the way they want to experience Nan, from active routes to slower local discovery.",
    icon: Compass,
  },
  {
    title: "AI Recommendation",
    description:
      "NAN FLOW combines persona, season, weather, and community opportunity to shape the best route.",
    icon: Sparkles,
  },
  {
    title: "Support Communities",
    description:
      "Dynamic quests guide travelers toward villages, local businesses, guides, farms, and cultural experiences.",
    icon: UsersRound,
  },
]

export default function Solution() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.12),transparent_26%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />

      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/76 px-5 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-white/80 backdrop-blur sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0F766E]">
            Solution
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            From traveler intent to community impact.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            A simple three-step flow turns every journey into a smarter
            recommendation and a more distributed tourism economy.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {solutionSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={step.title} className="relative">
                {index < solutionSteps.length - 1 ? (
                  <div className="absolute right-[-1.15rem] top-16 z-10 hidden lg:block">
                    <ArrowRight className="size-5 text-[#10B981]" />
                  </div>
                ) : null}

                <Card className="group h-full rounded-xl border-emerald-900/5 bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,118,110,0.14)]">
                  <CardHeader className="p-7">
                    <div className="flex items-start justify-between gap-5">
                      <span className="flex size-12 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)] transition-transform duration-300 group-hover:scale-105">
                        <Icon className="size-5" />
                      </span>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-[#0F766E]">
                        Step {index + 1}
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

                {index < solutionSteps.length - 1 ? (
                  <ArrowDown className="mx-auto mt-5 size-5 text-[#10B981] lg:hidden" />
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
