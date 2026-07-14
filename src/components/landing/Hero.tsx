import { ArrowRight, BarChart3, Leaf, MapPinned, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const insightItems = [
  {
    label: "Community match",
    value: "96%",
    icon: Sparkles,
  },
  {
    label: "Green route",
    value: "Pua",
    icon: MapPinned,
  },
  {
    label: "Impact signal",
    value: "+24%",
    icon: BarChart3,
  },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f8fffb_0%,#e7f7ee_42%,#d9f2e4_100%)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(16,185,129,0.24),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(20,184,166,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.2))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.86))]" />

      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-emerald-950 shadow-sm shadow-emerald-950/5 backdrop-blur-md">
            <Leaf className="size-4 text-emerald-600" />
            AI-powered sustainable tourism in Nan
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
            NAN FLOW
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">
            Explore Beyond Seasons
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg lg:text-xl">
            AI-powered tourism platform helping travelers discover local
            communities while supporting sustainable tourism in Nan.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 rounded-full bg-emerald-950 px-6 text-base font-semibold text-white shadow-[0_18px_45px_rgba(6,78,59,0.28)] hover:bg-emerald-900">
              Start Journey
              <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border-emerald-950/15 bg-white/70 px-6 text-base font-semibold text-emerald-950 shadow-sm backdrop-blur-md hover:bg-white hover:text-emerald-950"
            >
              Government Dashboard
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-6 -z-10 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/62 shadow-[0_28px_90px_rgba(15,23,42,0.16)] backdrop-blur-2xl">
            <div className="border-b border-emerald-950/10 bg-white/50 px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-emerald-800">
                    Tourism flow preview
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Low-season opportunity routing
                  </p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-950 text-white">
                  <Sparkles className="size-5" />
                </div>
              </div>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="rounded-2xl border border-emerald-950/10 bg-emerald-950 p-5 text-white shadow-[0_18px_45px_rgba(6,78,59,0.24)]">
                <p className="text-sm text-emerald-100/75">Recommended quest</p>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Village Coffee Trail
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-emerald-50/72">
                      Guide travelers from crowded city routes into community
                      experiences with measurable local impact.
                    </p>
                  </div>
                  <span className="hidden rounded-full bg-white/12 px-3 py-1 text-sm font-semibold text-emerald-50 sm:inline-flex">
                    Live
                  </span>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {insightItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-emerald-950/10 bg-white/72 p-4 shadow-sm"
                    >
                      <Icon className="size-4 text-emerald-700" />
                      <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="rounded-2xl border border-emerald-950/10 bg-white/72 p-4">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-medium text-slate-600">
                    Distribution balance
                  </span>
                  <span className="font-semibold text-emerald-800">
                    Improving
                  </span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-emerald-100">
                  <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#064e3b,#10b981,#99f6e4)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
