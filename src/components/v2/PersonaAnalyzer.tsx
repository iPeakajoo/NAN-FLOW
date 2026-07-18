"use client"

import { ArrowRight, CheckCircle2, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { V2Question } from "@/lib/v2-demo-data"

type PersonaAnalyzerProps = {
  questions: readonly V2Question[]
  currentStep: number
  answers: Record<string, string>
  onAnswer: (questionId: string, value: string) => void
  onBack: () => void
  onAnalyze: () => void
}

export function PersonaAnalyzer({
  questions,
  currentStep,
  answers,
  onAnswer,
  onBack,
  onAnalyze,
}: PersonaAnalyzerProps) {
  const question = questions[currentStep]
  const isFinalStep = currentStep === questions.length - 1
  const isComplete = questions.every((item) => Boolean(answers[item.id]))

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_28px_100px_rgba(2,8,23,0.48)] backdrop-blur-2xl sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
            AI Traveler Persona
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            เข้าใจตัวตนการเดินทางของคุณ
          </h2>
        </div>

        <div className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-100 backdrop-blur-xl">
          {currentStep + 1}/{questions.length}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {questions.map((item, index) => (
          <span
            key={item.id}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index <= currentStep ? "w-10 bg-[#10B981]" : "w-2.5 bg-white/12"
            }`}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-white/10 bg-gray-950/68 shadow-none">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-200/70">
                  คำถาม {currentStep + 1}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  {question.label}
                </h3>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100/70">
                Choose one
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {question.options.map((option) => {
                const isSelected = answers[question.id] === option

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onAnswer(question.id, option)}
                    className={`rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${
                      isSelected
                        ? "border-[#10B981] bg-[#0F766E] text-white shadow-[0_18px_48px_rgba(15,118,110,0.22)]"
                        : "border-white/10 bg-white/6 text-slate-100 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-base font-semibold">{option}</span>
                      {isSelected ? <CheckCircle2 className="size-5 text-emerald-100" /> : null}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={onBack}
                className="h-11 rounded-xl border-white/10 bg-white/6 px-4 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="size-4" />
                ย้อนกลับ
              </Button>

              {isFinalStep ? (
                <Button
                  onClick={onAnalyze}
                  disabled={!isComplete}
                  className="h-11 rounded-xl bg-[#0F766E] px-5 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(15,118,110,0.28)] hover:bg-[#0b625c] disabled:opacity-50"
                >
                  ให้ AI วิเคราะห์ตัวตนของฉัน
                  <ArrowRight className="size-4" />
                </Button>
              ) : null}
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/8 shadow-none backdrop-blur-xl">
          <CardContent className="p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
              Persona Snapshot
            </p>
            <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-gray-950/68 p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200/70">
                Current Selection
              </p>
              <div className="mt-4 space-y-3">
                {questions.map((item, index) => (
                  <div key={item.id} className="flex items-center justify-between gap-3 rounded-2xl bg-white/6 px-3 py-2">
                    <span className="text-sm font-medium text-slate-300">{index + 1}. {item.label}</span>
                    <span className="max-w-36 truncate text-sm font-semibold text-white">
                      {answers[item.id] ?? "ยังไม่เลือก"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-[1.4rem] border border-emerald-400/15 bg-[#0F766E]/12 p-4 text-white">
              <p className="text-sm font-semibold text-emerald-100/80">
                เป้าหมายของขั้นนี้
              </p>
              <p className="mt-2 text-base leading-7 text-slate-200">
                เก็บสัญญาณหลักให้ครบ 5 ข้อ เพื่อส่งต่อไปยัง AI Processing State อย่างเร็วที่สุด
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
