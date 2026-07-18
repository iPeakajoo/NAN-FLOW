"use client"

import { ChevronLeft, ArrowRight, CircleDot, Clock3, MapPinned } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { V2JourneyStop } from "@/lib/v2-demo-data"
import { JourneyMap } from "@/components/v2/JourneyMap"

type JourneyExplorerProps = {
  title: string
  summary: string
  metrics: readonly { label: string; value: string }[]
  stops: readonly V2JourneyStop[]
  timeline: readonly { time: string; label: string }[]
  activeStopId: string
  onStopSelect: (stopId: string) => void
  onGoGovernment: () => void
  onBack: () => void
}

export function JourneyExplorer({
  title,
  summary,
  metrics,
  stops,
  timeline,
  activeStopId,
  onStopSelect,
  onGoGovernment,
  onBack,
}: JourneyExplorerProps) {
  const activeStop = stops.find((stop) => stop.id === activeStopId) ?? stops[0]
  const timelineActiveMap: Record<string, string[]> = {
    a: ["จุดชมวิว"],
    b: ["ร้านกาแฟ"],
    c: ["อาหาร", "กิจกรรม", "หมู่บ้าน"],
    d: ["พระอาทิตย์"],
  }

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_28px_100px_rgba(2,8,23,0.48)] backdrop-blur-2xl sm:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
            AI Journey
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={onBack}
            className="h-11 rounded-xl border-white/10 bg-white/6 px-4 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft className="size-4" />
            ย้อนกลับ
          </Button>
          <Button
            onClick={onGoGovernment}
            className="h-11 rounded-xl bg-[#0F766E] px-4 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(15,118,110,0.28)] hover:bg-[#0b625c]"
          >
            ดูผลกระทบในภาพรวม
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.label} className="border-white/10 bg-gray-950/68 shadow-none">
            <CardContent className="p-4">
              <p className="text-sm font-semibold text-slate-300">{metric.label}</p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-white">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
        <div className="space-y-4">
          <Card className="border-white/10 bg-white/8 shadow-none backdrop-blur-xl">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                    ทำไม AI เลือก Journey นี้
                  </p>
                  <p className="mt-3 whitespace-pre-line text-base leading-8 text-slate-200 sm:text-lg">
                    {summary}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-3 text-emerald-200">
                  <MapPinned className="size-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <JourneyMap stops={stops} activeStopId={activeStopId} onStopSelect={onStopSelect} />
        </div>

        <div className="space-y-4">
          <Card className="border-white/10 bg-white/8 shadow-none backdrop-blur-xl">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                    Active Stop
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    {activeStop.name}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-[#0F766E] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {activeStop.letter}
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4 text-white">
                  <p className="text-sm font-semibold text-slate-300">เวลา</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight">{activeStop.time}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4 text-white">
                  <p className="text-sm font-semibold text-slate-300">จุดบนแผนที่</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight">
                    {activeStop.letter}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-gray-950/68 shadow-none">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center gap-2 text-emerald-200/80">
                <Clock3 className="size-4" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Timeline
                </p>
              </div>

              <div className="mt-4 space-y-3">
                {timeline.map((item) => {
                  const isActive = timelineActiveMap[activeStop.id]?.some((keyword) =>
                    item.label.includes(keyword),
                  ) ?? false

                  return (
                    <button
                      key={`${item.time}-${item.label}`}
                      type="button"
                      onClick={() => {
                        if (item.label.includes("จุดชมวิว")) onStopSelect("a")
                        if (item.label.includes("ร้านกาแฟ")) onStopSelect("b")
                        if (item.label.includes("อาหาร")) onStopSelect("c")
                        if (item.label.includes("กิจกรรม")) onStopSelect("c")
                        if (item.label.includes("พระอาทิตย์")) onStopSelect("d")
                      }}
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                        isActive
                          ? "border-[#10B981] bg-[#0F766E] text-white"
                          : "border-white/10 bg-white/6 text-slate-200 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <span className="text-sm font-semibold">{item.time}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                      <CircleDot className={`size-4 ${isActive ? "text-emerald-100" : "text-slate-400"}`} />
                    </button>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
