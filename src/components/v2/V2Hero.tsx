"use client"

import { ArrowRight, Route, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { v2DemoData } from "@/lib/v2-demo-data"

type V2HeroProps = {
  onCreateJourney: () => void
  onViewGovernment: () => void
}

export function V2Hero({ onCreateJourney, onViewGovernment }: V2HeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(15,118,110,0.18),transparent_28%),linear-gradient(180deg,#06121c_0%,#0b1724_45%,#07111a_100%)] p-5 shadow-[0_32px_110px_rgba(2,8,23,0.55)] sm:p-8 lg:p-10">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%,rgba(16,185,129,0.05))]" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-70">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 760" fill="none" aria-hidden="true">
          <path
            d="M140 590 C 260 510, 330 500, 430 430 S 650 290, 770 280 S 940 240, 1040 170"
            stroke="rgba(16,185,129,0.34)"
            strokeWidth="2"
            strokeDasharray="10 12"
          />
          <circle cx="140" cy="590" r="7" fill="#10B981" />
          <circle cx="430" cy="430" r="7" fill="#0F766E" />
          <circle cx="770" cy="280" r="7" fill="#10B981" />
          <circle cx="1040" cy="170" r="7" fill="#99f6e4" />
          <circle r="8" fill="#10B981">
            <animateMotion dur="8s" repeatCount="indefinite" path="M140 590 C 260 510, 330 500, 430 430 S 650 290, 770 280 S 940 240, 1040 170" />
          </circle>
        </svg>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/8 px-3 py-1.5 text-sm font-semibold text-emerald-100 backdrop-blur-xl">
            <Sparkles className="size-4" />
            NAN FLOW Vision Demo
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {v2DemoData.hero.title.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {v2DemoData.hero.description.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={onCreateJourney}
              className="h-12 rounded-xl bg-[#0F766E] px-6 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.28)] hover:bg-[#0b625c]"
            >
              {v2DemoData.hero.ctas.journey}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              onClick={onViewGovernment}
              className="h-12 rounded-xl border-white/12 bg-white/8 px-6 text-base font-semibold text-white backdrop-blur-xl hover:bg-white/12 hover:text-white"
            >
              {v2DemoData.hero.ctas.intelligence}
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {v2DemoData.hero.badges.map((badge) => (
              <div
                key={badge}
                className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-xl"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-[#10B981]/12 blur-3xl" />
          <Card className="relative overflow-hidden border-white/10 bg-white/8 shadow-[0_28px_100px_rgba(2,8,23,0.48)] backdrop-blur-2xl">
            <CardContent className="p-4 sm:p-5">
              <div className="relative min-h-[520px] overflow-hidden rounded-[1.6rem] border border-white/8 bg-[radial-gradient(circle_at_24%_24%,rgba(16,185,129,0.22),transparent_20%),radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.12),transparent_18%),linear-gradient(180deg,#08111b_0%,#0f1d2a_55%,#09121b_100%)]">
                <div className="absolute inset-x-8 top-10 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
                <div className="absolute inset-x-8 bottom-28 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-2xl border border-emerald-400/20 bg-white/8 px-4 py-3 text-white shadow-lg backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
                    AI Match
                  </p>
                  <p className="mt-2 text-4xl font-bold tracking-tight">96%</p>
                </div>

                <div className="absolute right-5 top-5 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white shadow-lg backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                    Crowd
                  </p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-emerald-200">
                    Low
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/10 bg-gray-950/78 p-4 text-white shadow-[0_18px_58px_rgba(2,8,23,0.42)] backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-emerald-200/70">
                        Journey Preview
                      </p>
                      <h2 className="mt-2 text-2xl font-bold tracking-tight">
                        เส้นทางที่ AI เลือกให้คุณ
                      </h2>
                    </div>
                    <Route className="size-5 text-emerald-200" />
                  </div>

                  <div className="mt-5 grid gap-2 sm:grid-cols-3">
                    {v2DemoData.hero.badges.map((badge) => (
                      <div key={badge} className="rounded-2xl bg-white/8 px-3 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/10">
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/20 bg-white/8 shadow-[0_0_0_36px_rgba(16,185,129,0.05)]">
                  <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10B981] shadow-[0_0_0_14px_rgba(16,185,129,0.16),0_0_0_34px_rgba(16,185,129,0.08)]" />
                </div>

                <div className="absolute left-[16%] top-[34%] h-16 w-16 rounded-full border border-white/10 bg-[#0F766E]/30 shadow-[0_0_0_16px_rgba(15,118,110,0.08)]" />
                <div className="absolute left-[38%] top-[46%] h-4 w-4 rounded-full bg-[#10B981] shadow-[0_0_0_12px_rgba(16,185,129,0.14)]" />
                <div className="absolute left-[64%] top-[34%] h-4 w-4 rounded-full bg-emerald-200 shadow-[0_0_0_12px_rgba(167,243,208,0.12)]" />
                <div className="absolute left-[84%] top-[22%] h-4 w-4 rounded-full bg-white shadow-[0_0_0_12px_rgba(255,255,255,0.10)]" />

                <div className="absolute left-[10%] top-[56%] right-[10%] h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />
                <div className="absolute left-[18%] top-[38%] h-px w-[56%] -rotate-12 bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
