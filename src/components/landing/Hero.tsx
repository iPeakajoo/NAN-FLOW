import {
  ArrowRight,
  BarChart3,
  Bot,
  Gauge,
  Leaf,
  MapPinned,
  Route,
  Sparkles,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const insightItems = [
  {
    label: "AI match",
    value: "96%",
    icon: Sparkles,
  },
  {
    label: "Impact measured",
    value: "86",
    icon: MapPinned,
  },
  {
    label: "More local visits",
    value: "+24%",
    icon: BarChart3,
  },
]

const routeStops = ["Nan City", "Pua", "Forest", "Craft"]

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#F8FAFC]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(16,185,129,0.20),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(15,118,110,0.18),transparent_28%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_72%,#ecfdf5_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[38rem] w-[72rem] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,rgba(15,118,110,0.10),rgba(16,185,129,0.14),rgba(20,184,166,0.08))] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-[linear-gradient(180deg,transparent,rgba(248,250,252,0.96))]" />

      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-14 px-5 py-24 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/75 px-3 py-1.5 text-sm font-semibold text-[#0F766E] shadow-[0_10px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <span className="flex size-6 items-center justify-center rounded-full bg-emerald-50">
              <Leaf className="size-3.5 text-[#10B981]" />
            </span>
            AI recommends destinations. Communities gain visitors.
          </div>

          <p className="mt-9 text-sm font-bold uppercase tracking-[0.28em] text-[#0F766E]">
            NAN FLOW
          </p>
          <p className="mt-3 text-sm font-semibold text-gray-500">
            AI-powered Tourism Distribution Platform
          </p>
          <h1 className="mt-4 max-w-5xl text-6xl font-bold leading-[0.95] tracking-tight text-gray-950 sm:text-7xl lg:text-8xl">
            Explore Beyond
            <span className="block bg-[linear-gradient(90deg,#0F766E,#10B981,#14b8a6)] bg-clip-text text-transparent">
              Seasons
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            Helping travelers discover hidden communities while enabling
            governments to distribute tourism more sustainably.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 rounded-xl bg-[#0F766E] px-6 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.25)] hover:bg-[#0b625c]">
              Start Journey
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-xl border-emerald-900/10 bg-white/75 px-6 text-base font-semibold text-gray-950 shadow-sm backdrop-blur-xl hover:bg-white hover:text-[#0F766E]"
            >
              Government Dashboard
            </Button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {["🌿 Green Season", "🤖 AI Recommendation", "📊 Government KPI"].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white/70 px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-950/5 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-8 -z-10 rounded-full bg-[#10B981]/20 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] bg-white/70 p-3 shadow-[0_30px_100px_rgba(15,23,42,0.16)] ring-1 ring-white/80 backdrop-blur-2xl">
            <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(160deg,#ecfdf5_0%,#f8fafc_45%,#d1fae5_100%)]">
              <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(180deg,transparent,rgba(15,118,110,0.12))]" />
              <div className="absolute bottom-24 left-0 h-48 w-full bg-[#0F766E]/18 [clip-path:polygon(0_64%,18%_42%,36%_58%,54%_22%,74%_52%,100%_18%,100%_100%,0_100%)]" />
              <div className="absolute bottom-12 left-0 h-44 w-full bg-[#0F766E]/30 [clip-path:polygon(0_54%,18%_24%,34%_44%,52%_10%,72%_42%,100%_26%,100%_100%,0_100%)]" />
              <div className="absolute bottom-0 left-0 h-36 w-full bg-white/78 [clip-path:polygon(0_44%,18%_36%,35%_50%,50%_38%,70%_55%,100%_42%,100%_100%,0_100%)]" />

              <div className="absolute left-5 top-28 rounded-2xl bg-white/86 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.10)] ring-1 ring-gray-950/5 backdrop-blur-xl sm:left-7">
                <p className="text-xs font-bold text-gray-950">☔ Rain Today</p>
                <p className="mt-1 text-xs font-semibold text-[#0F766E]">
                  Perfect Time to Visit Pua
                </p>
              </div>

              <div className="absolute left-5 top-5 rounded-2xl bg-white/82 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.10)] ring-1 ring-gray-950/5 backdrop-blur-xl sm:left-7 sm:top-7">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#0F766E] text-white">
                    <Bot className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-950">
                      AI recommends next stop
                    </p>
                    <p className="text-xs font-medium text-gray-500">
                      Persona, weather, community need
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-5 top-24 w-44 rounded-2xl bg-white/82 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.10)] ring-1 ring-gray-950/5 backdrop-blur-xl sm:right-7">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                    Impact
                  </p>
                  <Gauge className="size-4 text-[#10B981]" />
                </div>
                <p className="mt-3 text-4xl font-bold tracking-tight text-gray-950">
                  86
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  Government score
                </p>
              </div>

              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0F766E]/15 bg-white/30 backdrop-blur-sm">
                <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10B981] shadow-[0_0_0_14px_rgba(16,185,129,0.14),0_0_0_32px_rgba(16,185,129,0.08),0_0_0_58px_rgba(16,185,129,0.04)]" />
              </div>

              <div className="absolute bottom-7 left-5 right-5 rounded-2xl bg-gray-950/90 p-5 text-white shadow-[0_22px_70px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:left-7 sm:right-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-emerald-100/80">
                      Today&apos;s AI Journey
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight">
                      Village Coffee Trail
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-white/64">
                      Recommended to increase visits for local farms, guides,
                      cafes, and craft communities.
                    </p>
                  </div>
                  <span className="hidden rounded-full bg-[#10B981]/20 px-3 py-1 text-sm font-semibold text-emerald-100 sm:inline-flex">
                    Live AI
                  </span>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-4">
                  {routeStops.map((stop, index) => (
                    <div key={stop} className="flex items-center gap-2">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-emerald-100">
                        {index + 1}
                      </span>
                      <span className="truncate text-xs font-medium text-white/70">
                        {stop}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-end justify-between rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
                  <div>
                    <p className="text-xs font-medium text-white/56">
                      Estimated Spending
                    </p>
                    <p className="mt-1 text-xl font-bold tracking-tight text-white">
                      1,850 THB
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-emerald-100/60">Impact</p>
                    <p className="mt-1 text-2xl font-bold text-[#10B981]">↓ +72%</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-72 left-5 right-5 grid gap-3 sm:grid-cols-3">
                {insightItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white/78 p-4 shadow-[0_16px_38px_rgba(15,23,42,0.10)] ring-1 ring-gray-950/5 backdrop-blur-xl"
                    >
                      <Icon className="size-4 text-[#0F766E]" />
                      <p className="mt-4 text-2xl font-bold tracking-tight text-gray-950">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-gray-500">
                        {item.label}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="absolute left-7 top-44 hidden w-52 rounded-2xl bg-white/72 p-3 shadow-[0_14px_32px_rgba(15,23,42,0.08)] ring-1 ring-gray-950/5 backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F766E]">
                  <TrendingUp className="size-4" />
                  AI matched 96% Lifestyle Traveler
                </div>
              </div>

              <div className="absolute right-7 top-60 hidden rounded-full bg-white/72 p-3 shadow-[0_14px_32px_rgba(15,23,42,0.08)] ring-1 ring-gray-950/5 backdrop-blur-xl sm:block">
                <Route className="size-5 text-[#0F766E]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
