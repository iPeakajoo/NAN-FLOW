"use client"

import {
  AlertTriangle,
  BarChart3,
  MapPinned,
  Mountain,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

import LanguageSwitcher from "@/components/LanguageSwitcher"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const kpiIcons = [Users, MapPinned, TrendingUp, Sparkles]

const mapPointMeta = [
  {
    className: "left-[29%] top-[34%]",
    dot: "bg-[#0F766E] shadow-[0_0_0_12px_rgba(15,118,110,0.14),0_0_42px_rgba(15,118,110,0.45)]",
  },
  {
    className: "left-[52%] top-[43%]",
    dot: "bg-[#10B981] shadow-[0_0_0_14px_rgba(16,185,129,0.18),0_0_48px_rgba(16,185,129,0.55)]",
  },
  {
    className: "left-[65%] top-[60%]",
    dot: "bg-emerald-300 shadow-[0_0_0_11px_rgba(110,231,183,0.20),0_0_36px_rgba(16,185,129,0.42)]",
  },
]

export default function GovernmentPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-gray-950">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(16,185,129,0.13),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(15,118,110,0.11),transparent_28%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_52%,#ffffff_100%)]" />

      <section className="mx-auto w-full max-w-[calc(100vw-2.5rem)] px-0 py-8 sm:max-w-6xl sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="flex items-center gap-3" aria-label={t.common.homeAria}>
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)]">
                <Mountain className="size-5" />
              </span>
              <span className="text-sm font-bold tracking-[0.18em]">
                {t.common.brand}
              </span>
            </Link>
            <LanguageSwitcher />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/78 px-3 py-1.5 text-sm font-semibold text-[#0F766E] shadow-sm backdrop-blur">
              <BarChart3 className="size-4" />
              {t.governmentPage.badge}
            </div>
            <Link
              href="/dashboard"
              className="inline-flex h-9 items-center justify-center rounded-full border border-emerald-900/10 bg-white/78 px-3 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:text-[#0F766E]"
            >
              {t.governmentPage.travelerDashboard}
            </Link>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-950 sm:text-6xl">
            <span className="block">{t.governmentPage.titleLine1}</span>
            <span className="block text-[#0F766E]">
              {t.governmentPage.titleLine2}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-80 text-base leading-8 text-gray-600 sm:max-w-2xl sm:text-lg">
            {t.governmentPage.subtitle}
          </p>
        </header>

        <Card className="mt-12 animate-in fade-in slide-in-from-bottom-2 rounded-[2rem] border-gray-100 bg-white/88 shadow-[0_26px_90px_rgba(15,23,42,0.10)] backdrop-blur">
          <CardContent className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
            {t.governmentPage.kpis.map((kpi, index) => {
              const Icon = kpiIcons[index]

              return (
                <div
                  key={kpi.label}
                  className="rounded-2xl bg-[#F8FAFC] p-5 text-center ring-1 ring-gray-950/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0F766E] ring-1 ring-emerald-900/10">
                    <Icon className="size-5" />
                  </div>
                  <p className="mt-4 text-4xl font-bold tracking-tight text-gray-950">
                    {kpi.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-gray-500">
                    {kpi.label}
                  </p>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <Card className="mt-6 animate-in fade-in slide-in-from-bottom-2 overflow-hidden rounded-[2rem] border-gray-100 bg-white/88 shadow-[0_26px_90px_rgba(15,23,42,0.10)] backdrop-blur">
          <div className="h-1.5 bg-[linear-gradient(90deg,#0F766E,#10B981,#99f6e4)]" />
          <CardHeader className="p-6 text-center sm:p-8">
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t.governmentPage.mapTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-5 pb-5 sm:px-8 sm:pb-8">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_36%_28%,rgba(16,185,129,0.20),transparent_23%),radial-gradient(circle_at_62%_62%,rgba(15,118,110,0.14),transparent_26%),linear-gradient(135deg,#ecfdf5,#ffffff_50%,#f0fdfa)] ring-1 ring-gray-950/5">
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[48%_52%_43%_57%/32%_38%_62%_68%] bg-[linear-gradient(145deg,rgba(16,185,129,0.20),rgba(15,118,110,0.09))] shadow-[inset_0_0_0_1px_rgba(15,118,110,0.12),0_28px_80px_rgba(15,118,110,0.12)]" />
              <div className="absolute left-[24%] top-[18%] h-[280px] w-[280px] rotate-[-14deg] rounded-full border border-[#0F766E]/10" />
              <div className="absolute left-[43%] top-[25%] h-[240px] w-[200px] rotate-[18deg] rounded-full border border-[#10B981]/16" />

              {t.governmentPage.mapPoints.map((point, index) => (
                <div
                  key={point.name}
                  className={`absolute ${mapPointMeta[index].className} group/map-point`}
                >
                  <span
                    className={`absolute left-1 top-1 size-3 animate-pulse rounded-full ${mapPointMeta[index].dot}`}
                  />
                  <div className="ml-8 min-w-36 rounded-2xl bg-white/90 px-4 py-3 shadow-lg ring-1 ring-gray-950/5 backdrop-blur transition-all duration-300 group-hover/map-point:-translate-y-1">
                    <p className="font-bold text-gray-950">{point.name}</p>
                    <p className="mt-1 text-xs font-semibold text-[#0F766E]">
                      {point.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 animate-in fade-in slide-in-from-bottom-2 rounded-[2rem] border-gray-100 bg-white/88 shadow-[0_26px_90px_rgba(15,23,42,0.10)] backdrop-blur">
          <CardHeader className="p-6 text-center sm:p-8">
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t.governmentPage.insightsTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 px-5 pb-5 sm:px-8 sm:pb-8 lg:grid-cols-3">
            {t.governmentPage.insights.map((insight) => (
              <div
                key={insight.title}
                className="rounded-2xl bg-[#F8FAFC] p-5 text-center ring-1 ring-gray-950/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <span className="text-4xl" aria-hidden="true">
                  {insight.icon}
                </span>
                <p className="mt-4 text-lg font-bold text-gray-950">
                  {insight.title}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="mt-6 animate-in fade-in slide-in-from-bottom-2 rounded-[2rem] border-gray-100 bg-white/88 shadow-[0_26px_90px_rgba(15,23,42,0.10)] backdrop-blur">
          <CardContent className="grid gap-4 p-5 sm:grid-cols-3 sm:p-6">
            {t.governmentPage.analytics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-[#F8FAFC] p-5 text-center ring-1 ring-gray-950/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <p className="text-4xl font-bold tracking-tight text-gray-950">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="mb-12 mt-6 animate-in fade-in slide-in-from-bottom-2 overflow-hidden rounded-[2rem] border-amber-200/70 bg-white/90 shadow-[0_26px_90px_rgba(15,23,42,0.10)] backdrop-blur">
          <div className="h-1.5 bg-[linear-gradient(90deg,#f59e0b,#10B981)]" />
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="flex size-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200/70">
                <AlertTriangle className="size-5" />
              </span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                  {t.governmentPage.alertTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                  {t.governmentPage.alertText}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
