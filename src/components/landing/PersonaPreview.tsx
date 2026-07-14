import { Bike, Coffee, Leaf, Laptop } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const personas = [
  {
    title: "Active Explorer",
    description:
      "Trail runs, bike routes, sunrise viewpoints, and adventure quests built around local stops.",
    signal: "Trail + Quest",
    icon: Bike,
  },
  {
    title: "Lifestyle",
    description:
      "Slow cafes, craft villages, markets, photo routes, and community stories with a softer pace.",
    signal: "Cafe + Craft",
    icon: Coffee,
  },
  {
    title: "Digital Nomad",
    description:
      "Quiet work-friendly cafes, long-stay routes, nature breaks, and local discovery between focus sessions.",
    signal: "Work + Nature",
    icon: Laptop,
  },
  {
    title: "Wellness",
    description:
      "Mindful forest routes, healing farms, low-impact retreats, and calm community experiences.",
    signal: "Restore + Local",
    icon: Leaf,
  },
]

export default function PersonaPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(15,118,110,0.10),transparent_30%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0F766E]">
            Persona preview
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Four ways to discover a different Nan.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Each persona gives the AI a clearer signal, turning traveler intent
            into routes that match personal style and community opportunity.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((persona) => {
            const Icon = persona.icon

            return (
              <Card
                key={persona.title}
                className="group relative overflow-hidden rounded-xl border-white/70 bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_96px_rgba(15,118,110,0.16)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0F766E,#10B981,#14b8a6)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute -right-12 -top-12 size-32 rounded-full bg-[#10B981]/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                <CardHeader className="relative p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-[#0F766E] transition-all duration-300 group-hover:bg-[#0F766E] group-hover:text-white group-hover:shadow-[0_16px_36px_rgba(15,118,110,0.24)]">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-bold text-gray-500 ring-1 ring-gray-950/5 transition-colors duration-300 group-hover:text-[#0F766E]">
                      {persona.signal}
                    </span>
                  </div>

                  <CardTitle className="mt-8 text-2xl font-bold tracking-tight text-gray-950">
                    {persona.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-gray-600">
                    {persona.description}
                  </CardDescription>

                  <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-emerald-50">
                    <div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#0F766E,#10B981)] transition-all duration-300 group-hover:w-full" />
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
