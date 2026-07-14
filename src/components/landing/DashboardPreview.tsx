"use client"

import { ArrowDown, ArrowRight, Clock3, MapPinned, Sparkles } from "lucide-react"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const heatmapCells = [
  "bg-[#0F766E]",
  "bg-[#10B981]",
  "bg-emerald-300",
  "bg-emerald-200",
  "bg-emerald-100",
  "bg-gray-100",
  "bg-gray-100",
]

export default function DashboardPreview() {
  const { t } = useLanguage()

  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_84%_70%,rgba(15,118,110,0.11),transparent_30%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_52%,#ffffff_100%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/75 px-3 py-1.5 text-sm font-semibold text-[#0F766E] shadow-sm backdrop-blur">
            <Sparkles className="size-4" />
            {t.dashboardPreview.badge}
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            {t.dashboardPreview.titleLine1}
            <span className="block text-[#0F766E]">
              {t.dashboardPreview.titleLine2}
            </span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t.dashboardPreview.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl rounded-[2rem] bg-gray-950 p-2 shadow-[0_36px_120px_rgba(15,23,42,0.24)]">
          <div className="overflow-hidden rounded-[1.65rem] border border-white/70 bg-white/88 p-4 shadow-inner backdrop-blur-xl sm:p-5 lg:p-6">
            <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-gray-950">
                  {t.dashboardPreview.journeyLabel}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {t.dashboardPreview.journeySubtitle}
                </p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-[#0F766E] ring-1 ring-emerald-900/10">
                <span className="size-2 rounded-full bg-[#10B981]" />
                {t.dashboardPreview.confidence}
              </div>
            </div>

            <div className="grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.dashboardPreview.stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="group rounded-2xl border-gray-100 bg-white/82 p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold text-gray-500">{stat.label}</p>
                    <p className="mt-4 text-3xl font-bold tracking-tight text-gray-950">
                      {stat.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <Card className="rounded-2xl border-gray-100 bg-[#F8FAFC]/92 shadow-sm">
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#0F766E]">
                        {t.dashboardPreview.routeLabel}
                      </p>
                      <CardTitle className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
                        {t.dashboardPreview.routeTitle}
                      </CardTitle>
                    </div>
                    <span className="flex size-11 items-center justify-center rounded-xl bg-white text-[#0F766E] shadow-sm ring-1 ring-gray-950/5">
                      <MapPinned className="size-5" />
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="space-y-3">
                    {t.dashboardPreview.routeStops.map((stop, index) => (
                      <div key={stop}>
                        <div className="flex items-center gap-3 rounded-2xl bg-white/82 px-4 py-3 shadow-sm ring-1 ring-gray-950/5">
                          <span className="size-3 rounded-full bg-[#10B981] shadow-[0_0_0_6px_rgba(16,185,129,0.13)]" />
                          <p className="font-semibold text-gray-950">{stop}</p>
                        </div>
                        {index < t.dashboardPreview.routeStops.length - 1 ? (
                          <ArrowDown className="ml-4 mt-2 size-4 text-[#10B981]" />
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/82 p-4 shadow-sm ring-1 ring-gray-950/5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                        <Clock3 className="size-4 text-[#0F766E]" />
                        {t.dashboardPreview.estimatedTime}
                      </div>
                      <p className="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {t.dashboardPreview.estimatedTimeValue}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/82 p-4 shadow-sm ring-1 ring-gray-950/5">
                      <p className="text-sm font-semibold text-gray-500">
                        {t.dashboardPreview.difficulty}
                      </p>
                      <p className="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {t.dashboardPreview.difficultyValue}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4">
                <Card className="rounded-2xl border-gray-100 bg-gray-950 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
                  <CardHeader className="p-6">
                    <p className="text-sm font-semibold text-emerald-100/80">
                      {t.dashboardPreview.missionLabel}
                    </p>
                    <CardTitle className="mt-2 text-3xl font-bold tracking-tight">
                      {t.dashboardPreview.missionTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 px-6 pb-6">
                    {t.dashboardPreview.missionItems.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-4 rounded-2xl bg-white/8 px-4 py-3 ring-1 ring-white/10"
                      >
                        <span className="text-sm font-medium text-white/62">{label}</span>
                        <span className="text-sm font-bold text-white">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="rounded-2xl border-gray-100 bg-white/82 shadow-sm">
                    <CardContent className="p-5">
                      <p className="text-sm font-bold text-gray-950">
                        {t.dashboardPreview.communityActivity}
                      </p>
                      <div
                        className="mt-4 flex gap-1.5"
                        aria-label={t.dashboardPreview.heatmapAria}
                      >
                        {heatmapCells.map((color, index) => (
                          <span
                            key={`${color}-${index}`}
                            className={`h-8 flex-1 rounded-lg ${color}`}
                          />
                        ))}
                      </div>
                      <div className="mt-4 flex justify-between text-xs font-semibold text-gray-500">
                        {t.dashboardPreview.heatmap.map((label) => (
                          <span key={label}>{label}</span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-gray-100 bg-[linear-gradient(135deg,#ecfdf5,#ffffff)] shadow-sm">
                    <CardContent className="p-5">
                      <p className="text-sm font-bold text-gray-950">
                        {t.dashboardPreview.todaysImpact}
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-3xl font-bold tracking-tight text-[#0F766E]">
                            +4
                          </p>
                          <p className="mt-1 text-xs font-semibold text-gray-500">
                            {t.dashboardPreview.communities}
                          </p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold tracking-tight text-[#0F766E]">
                            +฿3,250
                          </p>
                          <p className="mt-1 text-xs font-semibold text-gray-500">
                            {t.dashboardPreview.localEconomy}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <Card className="mt-4 rounded-2xl border-gray-100 bg-white/82 shadow-sm">
              <CardContent className="p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-950">
                      {t.dashboardPreview.recentAchievements}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {t.dashboardPreview.achievementSubtitle}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {t.dashboardPreview.achievements.map((achievement) => (
                      <div
                        key={achievement.label}
                        className="rounded-2xl bg-[#F8FAFC] px-3 py-3 text-center ring-1 ring-gray-950/5"
                      >
                        <span className="text-2xl" aria-hidden="true">
                          {achievement.icon}
                        </span>
                        <p className="mt-2 text-xs font-bold text-gray-600">
                          {achievement.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            {t.dashboardPreview.ctaText}
          </p>
          <Link
            href="/dashboard"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0F766E] px-6 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.25)] transition-all duration-300 hover:bg-[#0b625c]"
          >
            {t.dashboardPreview.ctaButton}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
