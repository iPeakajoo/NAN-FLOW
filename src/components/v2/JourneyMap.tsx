"use client"

import type { V2JourneyStop } from "@/lib/v2-demo-data"

type JourneyMapProps = {
  stops: readonly V2JourneyStop[]
  activeStopId: string
  onStopSelect: (stopId: string) => void
}

export function JourneyMap({ stops, activeStopId, onStopSelect }: JourneyMapProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.18),transparent_24%),radial-gradient(circle_at_68%_68%,rgba(15,118,110,0.18),transparent_26%),linear-gradient(135deg,#07111a,#0d1b27_55%,#07111a)] p-4 shadow-[0_24px_84px_rgba(2,8,23,0.42)]">
      <svg viewBox="0 0 1000 700" className="h-[420px] w-full" aria-label="Journey map mock">
        <defs>
          <linearGradient id="journeyStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#99f6e4" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
        </defs>

        <path
          d="M 140 280 C 260 220, 300 210, 380 300 S 560 460, 650 380 S 800 180, 840 310"
          fill="none"
          stroke="url(#journeyStroke)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="18 14"
          opacity="0.92"
        />
        <path
          d="M 140 280 C 260 220, 300 210, 380 300 S 560 460, 650 380 S 800 180, 840 310"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle r="10" fill="#10B981">
          <animateMotion dur="6s" repeatCount="indefinite" path="M 140 280 C 260 220, 300 210, 380 300 S 560 460, 650 380 S 800 180, 840 310" />
        </circle>

        {stops.map((stop) => {
          const isActive = stop.id === activeStopId

          return (
            <g key={stop.id} onClick={() => onStopSelect(stop.id)} style={{ cursor: "pointer" }}>
              <circle
                cx={stop.x * 10}
                cy={stop.y * 10}
                r={isActive ? 24 : 16}
                fill={isActive ? "rgba(16,185,129,0.25)" : "rgba(255,255,255,0.06)"}
                stroke={isActive ? "#10B981" : "rgba(255,255,255,0.18)"}
                strokeWidth={2}
              />
              <circle
                cx={stop.x * 10}
                cy={stop.y * 10}
                r={isActive ? 9 : 7}
                fill={isActive ? "#10B981" : "#99f6e4"}
                className="shadow-[0_0_0_14px_rgba(16,185,129,0.12)]"
              />
              <text x={stop.x * 10 + 28} y={stop.y * 10 - 10} fill="#e2e8f0" fontSize="28" fontWeight="700">
                {stop.letter}
              </text>
              <text x={stop.x * 10 + 28} y={stop.y * 10 + 22} fill="#94a3b8" fontSize="18" fontWeight="600">
                {stop.name}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="mt-2 grid gap-2 sm:grid-cols-4">
        {stops.map((stop) => {
          const isActive = stop.id === activeStopId

          return (
            <button
              key={stop.id}
              type="button"
              onClick={() => onStopSelect(stop.id)}
              className={`rounded-2xl border px-3 py-2 text-left transition-all duration-300 ${
                isActive
                  ? "border-[#10B981] bg-[#0F766E] text-white shadow-[0_12px_34px_rgba(15,118,110,0.26)]"
                  : "border-white/10 bg-white/6 text-slate-200 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold">{stop.letter}. {stop.name}</span>
                <span className="text-xs font-semibold text-emerald-100/80">{stop.time}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
