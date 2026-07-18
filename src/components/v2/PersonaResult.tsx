"use client"

import { ArrowRight, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { v2DemoData } from "@/lib/v2-demo-data"

type PersonaResultProps = {
  onGenerateJourney: () => void
  onBack: () => void
}

export function PersonaResult({ onGenerateJourney, onBack }: PersonaResultProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_28px_100px_rgba(2,8,23,0.48)] backdrop-blur-2xl sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
            AI Result
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Persona ของคุณพร้อมแล้ว
          </h2>
        </div>

        <Button
          variant="outline"
          onClick={onBack}
          className="h-11 rounded-xl border-white/10 bg-white/6 px-4 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
        >
          <ChevronLeft className="size-4" />
          ย้อนกลับ
        </Button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="border-white/10 bg-gray-950/68 shadow-none">
          <CardContent className="p-6 sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/70">
              Slow Nature Explorer
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
              {v2DemoData.persona.result.name}
            </h3>
            <p className="mt-4 whitespace-pre-line text-base leading-8 text-slate-300">
              {v2DemoData.persona.result.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {v2DemoData.persona.result.profile.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-sm font-semibold text-slate-300">{item.label}</p>
                  <p className="mt-3 text-4xl font-bold tracking-tight text-white">{item.value}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/8 shadow-none backdrop-blur-xl">
          <CardContent className="p-6 sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
              Interest Profile
            </p>
            <div className="mt-6 space-y-4">
              {v2DemoData.persona.result.profile.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between gap-4 text-white">
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-sm font-semibold text-emerald-200">{item.value}%</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#0F766E,#10B981,#99f6e4)]"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.4rem] border border-emerald-400/15 bg-[#0F766E]/12 p-4 text-white">
              <p className="text-sm font-semibold text-emerald-100/80">
                เหตุผลของ Persona นี้
              </p>
              <p className="mt-2 whitespace-pre-line text-base leading-7 text-slate-200">
                เมื่อผู้ใช้เลือกธรรมชาติและจังหวะสบาย ๆ ระบบจะสรุปว่าเหมาะกับเส้นทางที่สงบและเชื่อมชุมชนท้องถิ่น
              </p>
            </div>

            <Button
              onClick={onGenerateJourney}
              className="mt-6 h-12 w-full rounded-xl bg-[#0F766E] px-6 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.28)] hover:bg-[#0b625c]"
            >
              {v2DemoData.persona.result.cta}
              <ArrowRight className="size-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
