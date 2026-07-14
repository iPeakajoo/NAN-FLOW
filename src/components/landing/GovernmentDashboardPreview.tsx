"use client"

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Coins,
  MapPinned,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const kpiIcons = [Users, MapPinned, Coins, TrendingUp]

const mapPointPositions = [
  "left-[28%] top-[34%]",
  "left-[46%] top-[26%]",
  "left-[64%] top-[38%]",
  "left-[36%] top-[50%]",
  "left-[48%] top-[72%]",
]

export default function GovernmentDashboardPreview() {
  const { t } = useLanguage()

  return (
    <section id="government" className="relative isolate overflow-hidden bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(15,118,110,0.13),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(16,185,129,0.12),transparent_26%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_48%,#ffffff_100%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="scroll-fade-up mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/75 px-3 py-1.5 text-sm font-semibold text-[#0F766E] shadow-sm backdrop-blur">
            <Sparkles className="size-4" />
            {t.governmentPreview.badge}
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            {t.governmentPreview.titleLine1}
            <span className="block text-[#0F766E]">
              {t.governmentPreview.titleLine2}
            </span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t.governmentPreview.subtitle}
          </p>
        </div>

        <div className="scroll-fade-up mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.governmentPreview.kpis.map((kpi, index) => {
            const Icon = kpiIcons[index]

            return (
              <Card
                key={kpi.label}
                className="group rounded-2xl border-gray-100 bg-white/84 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-500">{kpi.label}</p>
                      <p className="mt-4 text-3xl font-bold tracking-tight text-gray-950">
                        {kpi.value}
                      </p>
                    </div>
                    <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-[#0F766E] transition-colors duration-300 group-hover:bg-[#0F766E] group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <p className="mt-5 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-[#0F766E] ring-1 ring-emerald-900/10">
                    {kpi.change}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="scroll-fade-up mt-5 grid gap-5 lg:grid-cols-[2fr_1fr]">
          <Card className="relative overflow-hidden rounded-2xl border-gray-100 bg-white/86 shadow-lg backdrop-blur">
            <div className="absolute right-8 top-8 z-20 hidden w-60 rounded-2xl border border-amber-200/70 bg-white/88 p-4 shadow-[0_22px_70px_rgba(15,23,42,0.16)] backdrop-blur lg:block">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-700">
                <AlertTriangle className="size-4" />
                {t.governmentPreview.alertTitle}
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-950">
                {t.governmentPreview.alertIssue}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {t.governmentPreview.alertLocation}
              </p>
              <div className="mt-4 rounded-xl bg-emerald-50 p-3 ring-1 ring-emerald-900/10">
                <p className="text-xs font-bold uppercase text-[#0F766E]">
                  {t.governmentPreview.alertRecommendationLabel}
                </p>
                <p className="mt-1 text-sm font-bold text-gray-950">
                  {t.governmentPreview.alertRecommendation}
                </p>
              </div>
            </div>

            <CardHeader className="p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#0F766E]">
                    {t.governmentPreview.province}
                  </p>
                  <CardTitle className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
                    {t.governmentPreview.mapTitle}
                  </CardTitle>
                </div>
                <div className="grid gap-2 text-sm font-semibold text-gray-600 sm:min-w-44">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#0F766E]" />
                    {t.governmentPreview.legend[0]}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#10B981]" />
                    {t.governmentPreview.legend[1]}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-emerald-200" />
                    {t.governmentPreview.legend[2]}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-6 sm:px-7 sm:pb-7">
              <div className="relative min-h-[440px] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.18),transparent_24%),radial-gradient(circle_at_68%_68%,rgba(15,118,110,0.14),transparent_28%),linear-gradient(135deg,#ecfdf5,#ffffff_50%,#f0fdfa)] ring-1 ring-gray-950/5">
                <div className="absolute left-1/2 top-1/2 h-[330px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[46%_54%_42%_58%/31%_38%_62%_69%] bg-[linear-gradient(145deg,rgba(16,185,129,0.22),rgba(15,118,110,0.10))] shadow-[inset_0_0_0_1px_rgba(15,118,110,0.12),0_32px_90px_rgba(15,118,110,0.12)]" />
                <div className="absolute left-[32%] top-[18%] h-[300px] w-[260px] rotate-[-14deg] rounded-[50%] border border-[#0F766E]/10" />
                <div className="absolute left-[44%] top-[28%] h-[260px] w-[190px] rotate-[18deg] rounded-[50%] border border-[#10B981]/16" />

                {t.governmentPreview.mapPoints.map((point, index) => (
                  <div
                    key={point.name}
                    className={`absolute ${mapPointPositions[index]} group/point`}
                  >
                    <span className="absolute left-1 top-1 size-3 rounded-full bg-[#10B981] shadow-[0_0_0_10px_rgba(16,185,129,0.16),0_0_34px_rgba(16,185,129,0.55)]" />
                    <div className="ml-7 min-w-32 rounded-2xl bg-white/86 px-3 py-2 shadow-lg ring-1 ring-gray-950/5 backdrop-blur transition-all duration-300 group-hover/point:-translate-y-1">
                      <p className="text-sm font-bold text-gray-950">{point.name}</p>
                      <p className="mt-0.5 text-xs font-semibold text-[#0F766E]">
                        {point.activity}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-gray-950/88 p-4 text-white shadow-[0_22px_70px_rgba(15,23,42,0.22)] backdrop-blur">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-emerald-100/78">
                        {t.governmentPreview.opportunityAlert}
                      </p>
                      <p className="mt-1 text-xl font-bold">
                        {t.governmentPreview.opportunityTitle}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-4xl font-bold tracking-tight text-[#10B981]">
                        92%
                      </p>
                      <p className="text-xs font-semibold text-white/54">
                        {t.governmentPreview.opportunityReadiness}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-5">
            <Card className="rounded-2xl border-gray-100 bg-white/86 shadow-lg backdrop-blur">
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-bold tracking-tight text-gray-950">
                  {t.governmentPreview.suggestionsTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-6 pb-6">
                {t.governmentPreview.suggestions.map((suggestion) => (
                  <div
                    key={suggestion.title}
                    className="group rounded-2xl bg-[#F8FAFC] p-4 ring-1 ring-gray-950/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-7 items-center justify-center rounded-full bg-emerald-50 text-[#0F766E]">
                        <CheckCircle2 className="size-4" />
                      </span>
                      <div>
                        <p className="font-bold text-gray-950">{suggestion.title}</p>
                        <p
                          className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
                            suggestion.label === "HIGH"
                              ? "bg-emerald-50 text-[#0F766E] ring-1 ring-emerald-900/10"
                              : "text-[#0F766E]"
                          }`}
                        >
                          {suggestion.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-gray-100 bg-gray-950 text-white shadow-[0_26px_80px_rgba(15,23,42,0.20)]">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-emerald-100/74">
                  {t.governmentPreview.decisionSignal}
                </p>
                <p className="mt-4 text-3xl font-bold tracking-tight">
                  {t.governmentPreview.decisionText}
                </p>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-[linear-gradient(90deg,#10B981,#99f6e4)]" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {t.governmentPreview.economicMetrics.map((metric) => (
            <Card
              key={metric.label}
              className="rounded-2xl border-gray-100 bg-white/86 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-gray-500">{metric.label}</p>
                <p className="mt-4 text-4xl font-bold tracking-tight text-gray-950">
                  {metric.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-[linear-gradient(135deg,#0F766E,#10B981)] p-1 shadow-[0_32px_100px_rgba(15,118,110,0.24)]">
          <div className="rounded-[1.8rem] bg-white/92 px-6 py-10 text-center backdrop-blur sm:px-10">
            <h3 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              {t.governmentPreview.bottomTitleLine1}
              <span className="block text-[#0F766E]">
                {t.governmentPreview.bottomTitleLine2}
              </span>
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              {t.governmentPreview.bottomSubtitle}
            </p>
            <Link
              href="/government"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0F766E] px-6 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.25)] transition-all duration-300 hover:bg-[#0b625c]"
            >
              {t.governmentPreview.ctaButton}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
