import { BarChart3, CloudRain, MapPin } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const problemCards = [
  {
    title: "Tourist Concentration",
    description:
      "Most travelers visit only a few famous attractions, leaving many local communities unseen.",
    icon: MapPin,
  },
  {
    title: "Seasonal Income",
    description:
      "During the Green Season, many local businesses experience a significant drop in visitors and income.",
    icon: CloudRain,
  },
  {
    title: "Limited Insights",
    description:
      "Government agencies lack real-time data to understand tourist behavior and measure tourism distribution.",
    icon: BarChart3,
  },
]

export default function Problem() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(15,118,110,0.09),transparent_30%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_72%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Why NAN FLOW?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Tourism today creates opportunities, but they are not equally
            distributed.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problemCards.map((card) => {
            const Icon = card.icon

            return (
              <Card
                key={card.title}
                className="group flex h-full rounded-xl border-gray-100 bg-white/90 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="flex h-full p-7">
                  <span className="mb-6 flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-[#0F766E] shadow-sm transition-colors duration-300 group-hover:bg-[#0F766E] group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-2xl font-bold tracking-tight text-gray-950">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="mt-3 text-base leading-7 text-gray-600">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-xl font-semibold leading-8 text-gray-950">
          Tourism shouldn&apos;t only benefit popular destinations. It should
          create opportunities for every community.
        </p>
      </div>
    </section>
  )
}
