"use client"

import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import type { V2GovernmentFilter } from "@/lib/v2-demo-data"

type GovernmentMetricsProps = {
  badge: string
  kpis: readonly { label: string; value: string }[]
  filters: readonly V2GovernmentFilter[]
  alert: string
  opportunity: string
}

export function GovernmentMetrics({
  badge,
  kpis,
  filters,
  alert,
  opportunity,
}: GovernmentMetricsProps) {
  const [activeFilter, setActiveFilter] = useState<V2GovernmentFilter>(filters[0])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => {
          const isActive = filter === activeFilter

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "border-[#10B981] bg-[#0F766E] text-white shadow-[0_14px_32px_rgba(15,118,110,0.26)]"
                  : "border-white/10 bg-white/6 text-slate-200 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      <div className="inline-flex rounded-full border border-emerald-400/20 bg-white/8 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100 backdrop-blur-xl">
        {badge}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="border-white/10 bg-white/8 shadow-none backdrop-blur-xl">
            <CardContent className="p-5">
              <p className="text-sm font-semibold text-slate-300">{kpi.label}</p>
              <p className="mt-3 text-4xl font-bold tracking-tight text-white">{kpi.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-white/10 bg-gray-950/68 shadow-none">
        <CardContent className="p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
            AI Alert
          </p>
          <p className="mt-3 whitespace-pre-line text-base leading-8 text-slate-200 sm:text-lg">
            {alert}
          </p>
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/8 shadow-none backdrop-blur-xl">
        <CardContent className="p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
            Opportunity
          </p>
          <p className="mt-3 whitespace-pre-line text-base leading-8 text-slate-200 sm:text-lg">
            {opportunity}
          </p>
          <div className="mt-5 flex items-center justify-between rounded-2xl border border-emerald-400/15 bg-[#0F766E]/12 px-4 py-3 text-white">
            <span className="text-sm font-semibold text-emerald-100/80">Active Filter</span>
            <span className="text-sm font-bold">{activeFilter}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
