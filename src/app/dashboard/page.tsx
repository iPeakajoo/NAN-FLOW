import {
  Clock3,
  Coffee,
  Leaf,
  MapPinned,
  Mountain,
  Navigation,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Wind,
} from "lucide-react"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const kpis = [
  {
    label: "AI Match",
    value: "96%",
    icon: Sparkles,
  },
  {
    label: "Quest Progress",
    value: "4 / 7",
    icon: Target,
  },
  {
    label: "Community Impact",
    value: "+24%",
    icon: TrendingUp,
  },
  {
    label: "Green Points",
    value: "320",
    icon: Leaf,
  },
]

const routeStops = [
  "Nan City",
  "Pua Coffee Trail",
  "Local Craft Village",
  "Forest Experience",
]

const journeyDetails = [
  {
    label: "Duration",
    value: "6 hours",
    icon: Clock3,
  },
  {
    label: "Distance",
    value: "28 km",
    icon: Navigation,
  },
  {
    label: "Best Time",
    value: "Green Season",
    icon: Leaf,
  },
]

const impactMetrics = [
  {
    label: "Local Businesses Supported",
    value: "12",
    icon: Store,
  },
  {
    label: "Estimated Local Spending",
    value: "฿3,250",
    icon: TrendingUp,
  },
  {
    label: "CO2 Reduced",
    value: "18 kg",
    icon: Wind,
  },
  {
    label: "Communities Discovered",
    value: "4",
    icon: MapPinned,
  },
]

const achievements = [
  {
    icon: "🌿",
    title: "Green Traveler",
    helper: "Low-impact journey",
  },
  {
    icon: "☕",
    title: "Coffee Explorer",
    helper: "Nan coffee culture",
  },
  {
    icon: "📷",
    title: "Culture Collector",
    helper: "Local stories saved",
  },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-gray-950">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_16%_10%,rgba(16,185,129,0.15),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(15,118,110,0.11),transparent_30%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_52%,#ffffff_100%)]" />

      <section className="mx-auto w-full max-w-[calc(100vw-2.5rem)] px-0 py-6 sm:max-w-7xl sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="NAN FLOW home">
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)]">
              <Mountain className="size-5" />
            </span>
            <span className="text-sm font-bold tracking-[0.18em]">NAN FLOW</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/onboarding"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-900/10 bg-white/78 px-3 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:text-[#0F766E]"
            >
              Onboarding
            </Link>
            <Link
              href="/government"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-[#0F766E] px-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)] transition-all duration-300 hover:bg-[#0b625c]"
            >
              Government Dashboard
            </Link>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
              Lifestyle Explorer
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-6xl">
              <span className="block">Good morning,</span>
              <span className="block">Explorer 👋</span>
            </h1>
            <p className="mt-5 max-w-80 text-base leading-8 text-gray-600 sm:max-w-2xl sm:text-lg">
              Your AI-powered journey in Nan is ready.
            </p>
          </div>

          <Card className="animate-in fade-in slide-in-from-bottom-2 rounded-[2rem] border-gray-100 bg-white/86 shadow-[0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#0F766E]">Today&apos;s signal</p>
                  <p className="mt-3 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                    Perfect weather for Pua
                  </p>
                </div>
                <span className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-[#0F766E] ring-1 ring-emerald-900/10">
                  <Coffee className="size-5" />
                </span>
              </div>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-emerald-50">
                <div className="h-full w-[96%] rounded-full bg-[linear-gradient(90deg,#0F766E,#10B981,#99f6e4)]" />
              </div>
              <p className="mt-4 max-w-80 text-sm leading-6 text-gray-600 sm:max-w-none">
                NAN FLOW matched local cafe culture, Green Season comfort and
                community opportunity.
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="mt-10">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                Section 1
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                Journey Overview
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon

              return (
                <Card
                  key={kpi.label}
                  className="animate-in fade-in slide-in-from-bottom-2 rounded-2xl border-gray-100 bg-white/86 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-500">
                          {kpi.label}
                        </p>
                        <p className="mt-4 text-4xl font-bold tracking-tight text-gray-950">
                          {kpi.value}
                        </p>
                      </div>
                      <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-[#0F766E] ring-1 ring-emerald-900/10">
                        <Icon className="size-5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <Card className="animate-in fade-in slide-in-from-bottom-2 overflow-hidden rounded-[2rem] border-gray-100 bg-white/88 shadow-[0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur">
            <div className="h-1.5 bg-[linear-gradient(90deg,#0F766E,#10B981,#99f6e4)]" />
            <CardHeader className="p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                    AI Recommended Route
                  </p>
                  <CardTitle className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
                    Today&apos;s Recommended Journey
                  </CardTitle>
                </div>
                <span className="flex size-12 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_16px_36px_rgba(15,118,110,0.22)]">
                  <MapPinned className="size-5" />
                </span>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-6 sm:px-7 sm:pb-7">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-gray-950/5">
                  <div className="space-y-3">
                    {routeStops.map((stop, index) => (
                      <div key={stop}>
                        <div className="flex items-center gap-3 rounded-2xl bg-white/82 px-4 py-3 shadow-sm ring-1 ring-gray-950/5">
                          <span className="size-3 rounded-full bg-[#10B981] shadow-[0_0_0_7px_rgba(16,185,129,0.14)]" />
                          <p className="font-bold text-gray-950">{stop}</p>
                        </div>
                        {index < routeStops.length - 1 ? (
                          <div className="ml-5 mt-2 h-5 w-px bg-[#10B981]/35" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {journeyDetails.map((detail) => {
                      const Icon = detail.icon

                      return (
                        <div
                          key={detail.label}
                          className="rounded-2xl bg-[#F8FAFC] p-4 ring-1 ring-gray-950/5"
                        >
                          <Icon className="size-5 text-[#0F766E]" />
                          <p className="mt-4 text-sm font-semibold text-gray-500">
                            {detail.label}
                          </p>
                          <p className="mt-1 text-2xl font-bold tracking-tight">
                            {detail.value}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  <div className="rounded-2xl bg-gray-950 p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.20)]">
                    <p className="text-sm font-semibold text-emerald-100/74">
                      AI Reason
                    </p>
                    <p className="mt-3 text-xl font-bold leading-8">
                      &quot;Perfect match for your lifestyle and today&apos;s weather.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card id="quest" className="animate-in fade-in slide-in-from-bottom-2 rounded-[2rem] border-gray-100 bg-white/88 shadow-lg backdrop-blur">
            <CardHeader className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                Today&apos;s Quest
              </p>
              <div className="mt-4 flex items-start gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#0F766E] ring-1 ring-emerald-900/10">
                  <Coffee className="size-7" />
                </span>
                <div>
                  <CardTitle className="text-2xl font-bold tracking-tight">
                    Visit Local Coffee Community
                  </CardTitle>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Support local farmers and experience Nan coffee culture.
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-6">
              <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-900/10">
                <p className="text-sm font-semibold text-gray-500">Reward</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-[#0F766E]">
                  +120 Green Points
                </p>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-sm font-semibold text-gray-600">
                  <span>Progress</span>
                  <span>2/3 completed</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#0F766E,#10B981)]" />
                </div>
              </div>

              <Link
                href="#impact"
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0F766E] text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.25)] transition-all duration-300 hover:bg-[#0b625c]"
              >
                Start Quest
                <Target className="size-4" />
              </Link>
            </CardContent>
          </Card>
        </section>

        <section id="impact" className="mt-5">
          <Card className="animate-in fade-in slide-in-from-bottom-2 rounded-[2rem] border-gray-100 bg-white/88 shadow-lg backdrop-blur">
            <CardHeader className="p-6 sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                Impact Dashboard
              </p>
              <CardTitle className="mt-3 text-3xl font-bold tracking-tight">
                Your Journey Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 px-6 pb-6 sm:grid-cols-2 sm:px-7 sm:pb-7 lg:grid-cols-4">
              {impactMetrics.map((metric) => {
                const Icon = metric.icon

                return (
                  <div
                    key={metric.label}
                    className="rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-gray-950/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    <Icon className="size-5 text-[#0F766E]" />
                    <p className="mt-5 text-4xl font-bold tracking-tight text-gray-950">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-gray-500">
                      {metric.label}
                    </p>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </section>

        <section className="mt-5 pb-12">
          <Card className="animate-in fade-in slide-in-from-bottom-2 overflow-hidden rounded-[2rem] border-gray-100 bg-white/88 shadow-lg backdrop-blur">
            <CardContent className="grid gap-6 p-6 sm:p-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                  Achievements
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
                  Badges unlocked today
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="rounded-2xl bg-[#F8FAFC] p-5 text-center ring-1 ring-gray-950/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    <span className="text-4xl" aria-hidden="true">
                      {achievement.icon}
                    </span>
                    <p className="mt-4 font-bold text-gray-950">{achievement.title}</p>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                      {achievement.helper}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  )
}
