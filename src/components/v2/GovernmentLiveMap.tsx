"use client"

import type { V2GovernmentMapPoint } from "@/lib/v2-demo-data"

type GovernmentLiveMapProps = {
  points: readonly V2GovernmentMapPoint[]
}

const toneClasses: Record<V2GovernmentMapPoint["tone"], { dot: string; ring: string; label: string }> = {
  high: {
    dot: "bg-red-500",
    ring: "shadow-[0_0_0_14px_rgba(239,68,68,0.16),0_0_36px_rgba(239,68,68,0.48)]",
    label: "text-red-200",
  },
  medium: {
    dot: "bg-orange-400",
    ring: "shadow-[0_0_0_14px_rgba(251,146,60,0.14),0_0_32px_rgba(251,146,60,0.36)]",
    label: "text-orange-200",
  },
  low: {
    dot: "bg-emerald-400",
    ring: "shadow-[0_0_0_14px_rgba(74,222,128,0.14),0_0_32px_rgba(74,222,128,0.34)]",
    label: "text-emerald-200",
  },
}

export function GovernmentLiveMap({ points }: GovernmentLiveMapProps) {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_28%_20%,rgba(16,185,129,0.16),transparent_24%),radial-gradient(circle_at_72%_70%,rgba(239,68,68,0.12),transparent_26%),linear-gradient(135deg,#06101a,#0c1722_55%,#06101a)] p-4 shadow-[0_24px_84px_rgba(2,8,23,0.42)]">
      <div className="mb-4 flex items-center justify-between gap-3 text-white">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
            Map-first view
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">
            การเคลื่อนตัวของนักท่องเที่ยวแบบ Simulated
          </h3>
        </div>
        <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">
          Live Mock
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.14),transparent_24%),radial-gradient(circle_at_70%_70%,rgba(15,118,110,0.12),transparent_26%),linear-gradient(135deg,#0a1520,#111f2d_52%,#0a1520)]">
        <svg viewBox="0 0 1000 680" className="h-[520px] w-full" aria-label="Government heat map mock">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>

          <path
            d="M 170 160 C 260 120, 350 140, 420 210 S 560 340, 650 300 S 800 180, 850 240"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray="16 12"
            opacity="0.88"
          />

          <path
            d="M 170 160 C 260 120, 350 140, 420 210 S 560 340, 650 300 S 800 180, 850 240"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <circle r="9" fill="#ef4444">
            <animateMotion dur="7s" repeatCount="indefinite" path="M 170 160 C 260 120, 350 140, 420 210 S 560 340, 650 300 S 800 180, 850 240" />
          </circle>
          <circle r="7" fill="#fb923c">
            <animateMotion dur="8s" repeatCount="indefinite" begin="1s" path="M 850 240 S 760 330, 650 300 S 520 180, 420 210 S 300 140, 170 160" />
          </circle>

          {points.map((point) => {
            const tone = toneClasses[point.tone]

            return (
              <g key={point.id}>
                <circle
                  cx={point.x * 10}
                  cy={point.y * 10}
                  r={point.tone === "high" ? 26 : point.tone === "medium" ? 22 : 18}
                  fill={point.tone === "high" ? "rgba(239,68,68,0.22)" : point.tone === "medium" ? "rgba(251,146,60,0.18)" : "rgba(74,222,128,0.14)"}
                />
                <circle
                  cx={point.x * 10}
                  cy={point.y * 10}
                  r={point.tone === "high" ? 10 : point.tone === "medium" ? 8 : 7}
                  className={`${tone.dot} ${tone.ring}`}
                />
                <text x={point.x * 10 + 28} y={point.y * 10 - 10} fill="#e2e8f0" fontSize="24" fontWeight="700">
                  {point.name}
                </text>
                <text x={point.x * 10 + 28} y={point.y * 10 + 20} fill={tone.label} fontSize="16" fontWeight="600">
                  {point.tone === "high" ? "หนาแน่นสูง" : point.tone === "medium" ? "เริ่มหนาแน่น" : "ยังรองรับได้"}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {points.map((point) => {
          const tone = toneClasses[point.tone]

          return (
            <div key={point.id} className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm font-semibold text-slate-100">
              <span className={`mr-2 inline-block size-2 rounded-full ${tone.dot}`} />
              {point.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}
