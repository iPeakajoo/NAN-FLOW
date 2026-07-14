"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Coffee,
  Laptop,
  Leaf,
  Loader2,
  Mountain,
  Sparkles,
} from "lucide-react"

import LanguageSwitcher from "@/components/LanguageSwitcher"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const personaMeta = [
  {
    id: "active",
    icon: Mountain,
    gradient: "from-emerald-50 via-white to-teal-50",
  },
  {
    id: "lifestyle",
    icon: Coffee,
    gradient: "from-lime-50 via-white to-emerald-50",
  },
  {
    id: "nomad",
    icon: Laptop,
    gradient: "from-cyan-50 via-white to-emerald-50",
  },
  {
    id: "wellness",
    icon: Leaf,
    gradient: "from-green-50 via-white to-teal-50",
  },
] as const

export default function OnboardingPage() {
  const { t } = useLanguage()
  const [step, setStep] = useState(1)
  const [selectedPersonaId, setSelectedPersonaId] = useState("active")
  const [selectedPreferenceIndexes, setSelectedPreferenceIndexes] = useState<number[]>([
    0,
    1,
  ])
  const [isGenerated, setIsGenerated] = useState(false)

  const personas = t.onboardingPage.personas.map((persona, index) => ({
    ...persona,
    icon: personaMeta[index].icon,
    gradient: personaMeta[index].gradient,
  }))

  const selectedPersona =
    personas.find((persona) => persona.id === selectedPersonaId) ?? personas[0]

  useEffect(() => {
    if (step !== 3) return

    const timer = window.setTimeout(() => {
      setIsGenerated(true)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [step, selectedPersonaId, selectedPreferenceIndexes])

  function moveToStep(nextStep: number) {
    if (nextStep === 3) {
      setIsGenerated(false)
    }

    setStep(nextStep)
  }

  function togglePreference(preferenceIndex: number) {
    setSelectedPreferenceIndexes((current) =>
      current.includes(preferenceIndex)
        ? current.filter((item) => item !== preferenceIndex)
        : [...current, preferenceIndex],
    )
  }

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#F8FAFC] px-5 py-6 text-gray-950 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(15,118,110,0.13),transparent_30%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_58%,#ffffff_100%)]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#10B981]/10 blur-3xl" />

      <section className="relative z-10 mx-auto flex w-full max-w-[calc(100vw-2.5rem)] flex-col sm:max-w-5xl">
        <header className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3" aria-label={t.common.homeAria}>
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)]">
              <Mountain className="size-5" />
            </span>
            <span className="text-sm font-bold tracking-[0.18em]">
              {t.common.brand}
            </span>
          </Link>
          <LanguageSwitcher />
        </header>

        <div className="mx-auto mt-8 w-full max-w-3xl">
          <div className="rounded-[2rem] border border-white/70 bg-white/78 p-4 shadow-[0_30px_100px_rgba(15,23,42,0.10)] backdrop-blur-2xl sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-[#0F766E]">
                  {t.onboardingPage.step} {step} / 3
                </p>
                <p className="mt-1 text-lg font-bold tracking-tight text-gray-950">
                  {t.onboardingPage.stepTitles[step - 1]}
                </p>
              </div>

              <div className="flex gap-2">
                {[1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      item <= step ? "w-10 bg-[#0F766E]" : "w-2.5 bg-emerald-100"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-5xl flex-1 py-10 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/75 px-3 py-1.5 text-sm font-semibold text-[#0F766E] shadow-sm backdrop-blur">
              <Sparkles className="size-4" />
              {t.onboardingPage.badge}
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-950 sm:text-6xl">
              <span className="block">{t.onboardingPage.titleLine1}</span>
              <span className="block text-[#0F766E]">
                {t.onboardingPage.titleLine2}
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-80 text-base leading-8 text-gray-600 sm:max-w-2xl sm:text-lg">
              {t.onboardingPage.subtitle}
            </p>
          </div>

          {step === 1 ? (
            <div className="mx-auto mt-10 max-w-4xl">
              <p className="text-center text-lg font-bold text-gray-950">
                {t.onboardingPage.chooseStyle}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {personas.map((persona) => {
                  const Icon = persona.icon
                  const isSelected = selectedPersonaId === persona.id

                  return (
                    <button
                      key={persona.id}
                      type="button"
                      onClick={() => setSelectedPersonaId(persona.id)}
                      className={`group rounded-2xl border p-0 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                        isSelected
                          ? "border-[#10B981] bg-white shadow-[0_24px_80px_rgba(16,185,129,0.22)] ring-4 ring-emerald-100 sm:scale-105"
                          : "border-gray-100 bg-white/86"
                      }`}
                    >
                      <Card
                        className={`h-full rounded-2xl border-0 bg-gradient-to-br ${persona.gradient} shadow-none hover:translate-y-0 hover:shadow-none`}
                      >
                        <CardHeader className="p-5 sm:p-6">
                          <div className="flex items-start justify-between gap-4">
                            <span
                              className={`flex size-14 items-center justify-center rounded-2xl ${
                                isSelected ? "bg-[#0F766E] text-white" : "bg-white/82 text-[#0F766E]"
                              } shadow-sm ring-1 ring-gray-950/5 transition-all duration-300`}
                            >
                              <Icon className="size-7" />
                            </span>
                            {isSelected ? (
                              <span className="flex size-8 items-center justify-center rounded-full bg-[#10B981] text-white shadow-lg">
                                <Check className="size-4" />
                              </span>
                            ) : null}
                          </div>
                          <CardTitle className="mt-7 text-2xl font-bold tracking-tight text-gray-950">
                            {persona.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <div className="grid gap-2 sm:grid-cols-2">
                            {persona.description.map((item) => (
                              <span
                                key={item}
                                className="rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold text-gray-600 ring-1 ring-gray-950/5"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </button>
                  )
                })}
              </div>

              <div className="mt-9 flex justify-center">
                <Button
                  onClick={() => moveToStep(2)}
                  className="h-12 rounded-xl bg-[#0F766E] px-7 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.25)] hover:bg-[#0b625c]"
                >
                  {t.onboardingPage.continueJourney}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="mx-auto mt-10 max-w-3xl">
              <Card className="rounded-[2rem] border-gray-100 bg-white/86 shadow-[0_30px_100px_rgba(15,23,42,0.10)] backdrop-blur">
                <CardHeader className="p-6 text-center sm:p-8">
                  <CardTitle className="text-3xl font-bold tracking-tight text-gray-950">
                    {t.onboardingPage.preferencesTitle}
                  </CardTitle>
                  <p className="mt-3 text-base leading-7 text-gray-600">
                    {t.onboardingPage.preferencesSubtitle}
                  </p>
                </CardHeader>
                <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <div className="flex flex-wrap justify-center gap-3">
                    {t.onboardingPage.preferences.map((preference, index) => {
                      const isSelected = selectedPreferenceIndexes.includes(index)

                      return (
                        <Button
                          key={preference}
                          type="button"
                          variant="outline"
                          onClick={() => togglePreference(index)}
                          className={`h-12 rounded-full px-5 text-base font-semibold transition-all duration-300 ${
                            isSelected
                              ? "scale-105 border-[#10B981] bg-emerald-50 text-[#0F766E] shadow-[0_14px_40px_rgba(16,185,129,0.16)]"
                              : "border-gray-200 bg-white text-gray-600 hover:text-[#0F766E]"
                          }`}
                        >
                          {isSelected ? <Check className="size-4" /> : null}
                          {preference}
                        </Button>
                      )
                    })}
                  </div>

                  <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-gray-950/5">
                    <p className="text-sm font-bold text-[#0F766E]">
                      {t.onboardingPage.selectedPersona}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-gray-950">
                      {selectedPersona.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {t.onboardingPage.selectedPersonaText}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button
                      variant="outline"
                      onClick={() => moveToStep(1)}
                      className="h-12 rounded-xl border-emerald-900/10 bg-white/80 px-6 text-base font-semibold text-gray-950 shadow-sm hover:text-[#0F766E]"
                    >
                      {t.onboardingPage.back}
                    </Button>
                    <Button
                      onClick={() => moveToStep(3)}
                      className="h-12 rounded-xl bg-[#0F766E] px-7 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.25)] hover:bg-[#0b625c]"
                    >
                      {t.onboardingPage.continueJourney}
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="mx-auto mt-10 max-w-3xl">
              <Card className="overflow-hidden rounded-[2rem] border-gray-100 bg-white/88 shadow-[0_30px_110px_rgba(15,23,42,0.14)] backdrop-blur">
                <div className="h-1.5 bg-[linear-gradient(90deg,#0F766E,#10B981,#99f6e4)]" />
                <CardContent className="p-7 text-center sm:p-10">
                  <div className="relative mx-auto flex size-28 items-center justify-center">
                    <div className="absolute inset-0 animate-ping rounded-full bg-[#10B981]/18" />
                    <div className="absolute inset-3 rounded-full bg-emerald-50" />
                    <div className="relative flex size-16 items-center justify-center rounded-2xl bg-[#0F766E] text-white shadow-[0_20px_60px_rgba(15,118,110,0.28)]">
                      {isGenerated ? (
                        <Check className="size-8" />
                      ) : (
                        <Loader2 className="size-8 animate-spin" />
                      )}
                    </div>
                  </div>

                  <h2 className="mt-7 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                    {isGenerated
                      ? t.onboardingPage.generatedTitle
                      : t.onboardingPage.generatingTitle}
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
                    {t.onboardingPage.generatingSubtitle}
                  </p>

                  <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                    {t.onboardingPage.analyzingSignals.map((signal, index) => (
                      <div
                        key={signal}
                        className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-left ring-1 ring-gray-950/5"
                      >
                        <span
                          className={`flex size-8 items-center justify-center rounded-full ${
                            isGenerated || index < 2
                              ? "bg-[#10B981] text-white"
                              : "bg-emerald-100 text-[#0F766E]"
                          }`}
                        >
                          {isGenerated || index < 2 ? (
                            <Check className="size-4" />
                          ) : (
                            <span className="size-2 rounded-full bg-[#0F766E]" />
                          )}
                        </span>
                        <div>
                          <p className="text-xs font-bold uppercase text-[#0F766E]">
                            {t.onboardingPage.analyzing}
                          </p>
                          <p className="font-bold text-gray-950">{signal}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-gray-950 p-5 text-left text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
                    <p className="text-sm font-semibold text-emerald-100/76">
                      {t.onboardingPage.aiMatched}
                    </p>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-3xl font-bold tracking-tight">
                          {selectedPersona.shortTitle}{" "}
                          {t.onboardingPage.travelerSuffix}
                        </p>
                        <p className="mt-2 text-sm text-white/62">
                          {selectedPreferenceIndexes
                            .map((index) => t.onboardingPage.preferences[index])
                            .join(" • ")}
                        </p>
                      </div>
                      <p className="text-4xl font-bold text-[#10B981]">96%</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button
                      variant="outline"
                      onClick={() => moveToStep(2)}
                      className="h-12 rounded-xl border-emerald-900/10 bg-white/80 px-6 text-base font-semibold text-gray-950 shadow-sm hover:text-[#0F766E]"
                    >
                      {t.onboardingPage.back}
                    </Button>
                    {isGenerated ? (
                      <Link
                        href="/dashboard"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0F766E] px-7 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.25)] transition-all duration-300 hover:bg-[#0b625c]"
                      >
                        {t.onboardingPage.exploreJourney}
                        <ArrowRight className="size-4" />
                      </Link>
                    ) : (
                      <Button
                        disabled
                        className="h-12 rounded-xl bg-[#0F766E] px-7 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.25)]"
                      >
                        {t.onboardingPage.aiThinking}
                        <Loader2 className="size-4 animate-spin" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  )
}
