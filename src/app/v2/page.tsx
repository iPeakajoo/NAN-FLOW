"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ChevronLeft, RotateCcw, Mountain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import { V2Hero } from "@/components/v2/V2Hero"
import { PersonaAnalyzer } from "@/components/v2/PersonaAnalyzer"
import { PersonaResult } from "@/components/v2/PersonaResult"
import { JourneyExplorer } from "@/components/v2/JourneyExplorer"
import { GovernmentLiveMap } from "@/components/v2/GovernmentLiveMap"
import { GovernmentMetrics } from "@/components/v2/GovernmentMetrics"
import { v2DemoData } from "@/lib/v2-demo-data"

type V2View = "hero" | "persona" | "analyzing" | "persona-result" | "journey" | "government"

const demoViewOrder: V2View[] = ["hero", "persona", "analyzing", "persona-result", "journey", "government"]

export default function V2Page() {
  const { t } = useLanguage()
  const [view, setView] = useState<V2View>("hero")
  const [personaStep, setPersonaStep] = useState(0)
  const [personaAnswers, setPersonaAnswers] = useState<Record<string, string>>({})
  const [activeStopId, setActiveStopId] = useState<string>(v2DemoData.journey.stops[0].id)

  const canAnalyze = useMemo(
    () => v2DemoData.persona.questions.every((question) => Boolean(personaAnswers[question.id])),
    [personaAnswers],
  )

  useEffect(() => {
    if (view !== "analyzing") {
      return
    }

    const timer = window.setTimeout(() => {
      setView("persona-result")
    }, 2000)

    return () => window.clearTimeout(timer)
  }, [view])

  function resetDemo() {
    setView("hero")
    setPersonaStep(0)
    setPersonaAnswers({})
    setActiveStopId(v2DemoData.journey.stops[0].id)
  }

  function goBack() {
    const currentIndex = demoViewOrder.indexOf(view)

    if (currentIndex <= 0) {
      return
    }

    const previousView = demoViewOrder[currentIndex - 1]

    if (previousView === "hero") {
      setView("hero")
      return
    }

    if (previousView === "persona") {
      setPersonaStep(Math.max(0, v2DemoData.persona.questions.length - 1))
    }

    setView(previousView)
  }

  function handlePersonaAnswer(questionId: string, value: string) {
    setPersonaAnswers((current) => ({
      ...current,
      [questionId]: value,
    }))

    if (personaStep < v2DemoData.persona.questions.length - 1) {
      setPersonaStep((current) => current + 1)
    }
  }

  function handleLaunchPersona() {
    setPersonaStep(0)
    setPersonaAnswers({})
    setActiveStopId(v2DemoData.journey.stops[0].id)
    setView("persona")
  }

  function handleResumePersona() {
    setView("persona")
  }

  function handleAnalyzePersona() {
    if (!canAnalyze) {
      return
    }

    setView("analyzing")
  }

  function handleGenerateJourney() {
    setActiveStopId(v2DemoData.journey.stops[0].id)
    setView("journey")
  }

  function handleViewGovernment() {
    setView("government")
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#06111a] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_12%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(15,118,110,0.16),transparent_28%),linear-gradient(180deg,#06111a_0%,#07111a_55%,#050d15_100%)]" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-3 rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <Link href="/" className="flex items-center gap-3" aria-label={t.common.homeAria}>
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)]">
              <Mountain className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold tracking-[0.18em] text-white">{t.common.brand}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/70">
                Vision Demo / Route /v2
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {v2DemoData.hero.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold text-slate-200">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {view !== "hero" ? (
              <Button
                variant="outline"
                onClick={goBack}
                className="h-10 rounded-xl border-white/10 bg-white/6 px-4 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="size-4" />
                ย้อนกลับ
              </Button>
            ) : null}
            <Button
              variant="outline"
              onClick={resetDemo}
              className="h-10 rounded-xl border-white/10 bg-white/6 px-4 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <RotateCcw className="size-4" />
              เริ่มใหม่
            </Button>
          </div>
        </header>

        <div className="mt-4 grid flex-1 gap-4 lg:grid-cols-[1fr]">
          {view === "hero" ? (
            <V2Hero onCreateJourney={handleLaunchPersona} onViewGovernment={handleViewGovernment} />
          ) : null}

          {view === "persona" ? (
            <PersonaAnalyzer
              questions={v2DemoData.persona.questions}
              currentStep={personaStep}
              answers={personaAnswers}
              onAnswer={handlePersonaAnswer}
              onBack={goBack}
              onAnalyze={handleAnalyzePersona}
            />
          ) : null}

          {view === "analyzing" ? (
            <section className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_28px_100px_rgba(2,8,23,0.48)] backdrop-blur-2xl sm:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
                    AI Processing
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    AI กำลังทำความเข้าใจการเดินทางของคุณ
                  </h2>
                </div>
                <Button
                  variant="outline"
                  onClick={goBack}
                  className="h-11 rounded-xl border-white/10 bg-white/6 px-4 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <ChevronLeft className="size-4" />
                  ย้อนกลับ
                </Button>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <Card className="border-white/10 bg-gray-950/68 shadow-none">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-[#0F766E] text-white shadow-[0_16px_36px_rgba(15,118,110,0.24)]">
                        <span className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-emerald-200/70">ประมาณ 2 วินาที</p>
                        <p className="mt-1 text-lg font-bold text-white">กำลังประมวลผลด้วยโมเดลจำลอง</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {v2DemoData.persona.processingSteps.map((step) => (
                        <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-slate-100">
                          <span className="size-2.5 rounded-full bg-[#10B981] shadow-[0_0_0_8px_rgba(16,185,129,0.12)]" />
                          <span className="text-sm font-semibold">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-white/10 bg-white/8 shadow-none backdrop-blur-xl">
                  <CardContent className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                      Signals
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {Object.entries(personaAnswers).map(([key, value]) => (
                        <div key={key} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-white">
                          <p className="text-sm font-semibold text-slate-300">{key}</p>
                          <p className="mt-2 text-lg font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          ) : null}

          {view === "persona-result" ? (
            <PersonaResult onGenerateJourney={handleGenerateJourney} onBack={handleResumePersona} />
          ) : null}

          {view === "journey" ? (
            <JourneyExplorer
              title={v2DemoData.journey.title}
              summary={v2DemoData.journey.summary}
              metrics={v2DemoData.journey.metrics}
              stops={v2DemoData.journey.stops}
              timeline={v2DemoData.journey.timeline}
              activeStopId={activeStopId}
              onStopSelect={setActiveStopId}
              onGoGovernment={handleViewGovernment}
              onBack={goBack}
            />
          ) : null}

          {view === "government" ? (
            <section className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_28px_100px_rgba(2,8,23,0.48)] backdrop-blur-2xl sm:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
                    Government Intelligence
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {v2DemoData.government.header}
                  </h2>
                </div>
                <Button
                  variant="outline"
                  onClick={goBack}
                  className="h-11 rounded-xl border-white/10 bg-white/6 px-4 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <ChevronLeft className="size-4" />
                  ย้อนกลับ
                </Button>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <GovernmentLiveMap points={v2DemoData.government.mapPoints} />
                <GovernmentMetrics
                  badge={v2DemoData.government.badge}
                  kpis={v2DemoData.government.kpis}
                  filters={v2DemoData.government.filters}
                  alert={v2DemoData.government.alert}
                  opportunity={v2DemoData.government.opportunity}
                />
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  )
}
