import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bike,
  Coffee,
  Compass,
  Gauge,
  Leaf,
  LineChart,
  MapPinned,
  Mountain,
  Route,
  ShieldCheck,
  Sparkles,
  Sprout,
  TrendingUp,
  UsersRound,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const navItems = ["About", "Features", "Government", "Roadmap"];

const problems = [
  {
    title: "Tourist Concentration",
    description:
      "Popular spots stay crowded while high-potential villages remain invisible during low season.",
    metric: "72%",
    label: "traffic around core routes",
    icon: MapPinned,
  },
  {
    title: "Community Income",
    description:
      "Local businesses need better demand signals, not just another listing on a map.",
    metric: "+24%",
    label: "projected local uplift",
    icon: Sprout,
  },
  {
    title: "Government Insights",
    description:
      "Policy teams need measurable distribution, opportunity, and impact data in one place.",
    metric: "4.8x",
    label: "faster decision loop",
    icon: BarChart3,
  },
];

const steps = [
  {
    title: "Choose Persona",
    description: "Travelers begin with intent, pace, energy, and the kind of Nan they want to discover.",
    icon: Compass,
  },
  {
    title: "AI Recommendation",
    description: "NAN FLOW weighs weather, seasonality, crowding, and community opportunity signals.",
    icon: Sparkles,
  },
  {
    title: "Support Local Communities",
    description: "Dynamic quests guide demand into villages, shops, guides, trails, and wellness routes.",
    icon: UsersRound,
  },
];

const personas = [
  {
    name: "Active Explorer",
    emoji: "🏃",
    description: "Trail runs, bike routes, sunrise climbs, and reward quests.",
    icon: Bike,
  },
  {
    name: "Lifestyle",
    emoji: "☕",
    description: "Coffee villages, slow markets, craft stops, and local stories.",
    icon: Coffee,
  },
  {
    name: "Digital Nomad",
    emoji: "💻",
    description: "Quiet work spots, long stays, nature breaks, and community cafes.",
    icon: Waves,
  },
  {
    name: "Wellness",
    emoji: "🌿",
    description: "Healing forests, mindful routes, farms, and low-impact retreats.",
    icon: Leaf,
  },
];

const dashboardMetrics = [
  { label: "Community Visits", value: "18.4K", change: "+31%" },
  { label: "Opportunity Score", value: "86", change: "+12" },
  { label: "Quest Completion", value: "64%", change: "+18%" },
  { label: "Economic Impact", value: "฿4.2M", change: "+27%" },
];

const govMetrics = [
  { label: "Opportunity Index", value: "82.6", icon: Gauge },
  { label: "Low Season Lift", value: "+28%", icon: TrendingUp },
  { label: "Active Communities", value: "47", icon: ShieldCheck },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Tourist App",
    description: "Persona onboarding, AI quests, reputation, and traveler impact loops.",
  },
  {
    phase: "Phase 2",
    title: "Community Portal",
    description: "Local merchants create promotions, quests, and seasonal experiences.",
  },
  {
    phase: "Phase 3",
    title: "Government Dashboard",
    description: "KPI monitoring, opportunity maps, trend analytics, and policy signals.",
  },
  {
    phase: "Phase 4",
    title: "CITY FLOW Platform",
    description: "A reusable tourism distribution platform for other provinces and cities.",
  },
];

export default function NanFlowLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-gray-900">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <PersonaSection />
      <DashboardPreviewSection />
      <GovernmentSection />
      <RoadmapSection />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/55 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="NAN FLOW home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_12px_30px_rgba(15,118,110,0.24)]">
            <Mountain className="size-5" />
          </span>
          <span className="text-sm font-bold tracking-[0.18em] text-gray-950">
            NAN FLOW
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#0F766E]"
            >
              {item}
            </a>
          ))}
        </div>

        <Button className="h-10 rounded-xl bg-[#0F766E] px-4 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)] hover:bg-[#0b625c]">
          Start Journey
        </Button>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="about"
      className="relative isolate pt-28 sm:pt-32 lg:min-h-screen lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_12%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(15,118,110,0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#F8FAFC_82%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[linear-gradient(110deg,rgba(15,118,110,0.10),rgba(16,185,129,0.06),transparent)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-3 py-1.5 text-sm font-semibold text-[#0F766E] shadow-sm backdrop-blur">
            <Sparkles className="size-4" />
            Nan Beyond Seasons Challenge
          </div>

          <h1 className="mt-8 max-w-4xl text-6xl font-bold tracking-tight text-gray-950 sm:text-7xl lg:text-8xl">
            Explore Beyond Seasons
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            AI-powered tourism platform helping travelers discover local
            communities while supporting sustainable tourism in Nan.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 rounded-xl bg-[#0F766E] px-6 text-base font-semibold text-white shadow-[0_20px_48px_rgba(15,118,110,0.25)] hover:bg-[#0b625c]">
              Start Journey
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-xl border-emerald-900/10 bg-white/70 px-6 text-base font-semibold text-gray-900 shadow-sm backdrop-blur hover:bg-white hover:text-[#0F766E]"
            >
              Government Dashboard
            </Button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 text-sm text-gray-500">
            {["AI Routes", "Low Season", "Local Impact"].map((item) => (
              <div key={item} className="rounded-xl bg-white/60 px-3 py-3 shadow-sm ring-1 ring-gray-950/5 backdrop-blur">
                <p className="font-semibold text-gray-950">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="absolute -inset-6 -z-10 rounded-full bg-[#10B981]/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] bg-white/70 p-3 shadow-[0_28px_90px_rgba(15,23,42,0.14)] ring-1 ring-white/80 backdrop-blur-2xl">
        <div className="relative min-h-[480px] overflow-hidden rounded-[1.55rem] bg-[linear-gradient(160deg,#ecfdf5_0%,#f8fafc_44%,#d1fae5_100%)]">
          <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,transparent,rgba(15,118,110,0.13))]" />
          <div className="absolute bottom-20 left-0 h-44 w-full bg-[#0F766E]/20 [clip-path:polygon(0_62%,18%_40%,36%_58%,54%_24%,74%_52%,100%_18%,100%_100%,0_100%)]" />
          <div className="absolute bottom-12 left-0 h-40 w-full bg-[#0F766E]/35 [clip-path:polygon(0_54%,18%_24%,34%_44%,52%_10%,72%_42%,100%_26%,100%_100%,0_100%)]" />
          <div className="absolute bottom-0 left-0 h-32 w-full bg-white/75 [clip-path:polygon(0_44%,18%_36%,35%_50%,50%_38%,70%_55%,100%_42%,100%_100%,0_100%)]" />

          <div className="absolute left-6 top-6 rounded-2xl bg-white/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.10)] ring-1 ring-gray-950/5 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#0F766E] text-white">
                <Route className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-gray-950">AI route</p>
                <p className="text-xs font-medium text-gray-500">Pua coffee loop</p>
              </div>
            </div>
          </div>

          <div className="absolute right-6 top-20 w-44 rounded-2xl bg-white/82 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.10)] ring-1 ring-gray-950/5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Live signal
            </p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-950">86</p>
            <p className="mt-1 text-xs text-gray-500">Opportunity score</p>
          </div>

          <div className="absolute bottom-8 left-6 right-6 rounded-2xl bg-gray-950/88 p-5 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)] backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-emerald-100/80">Recommended quest</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">Village Tea & Trail</h2>
                <p className="mt-2 text-sm leading-6 text-white/64">
                  Move travelers from crowded city stops into nature, community meals, and measurable local spend.
                </p>
              </div>
              <span className="rounded-full bg-[#10B981]/20 px-3 py-1 text-sm font-semibold text-emerald-100">
                +31%
              </span>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-[linear-gradient(90deg,#10B981,#99f6e4)]" />
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0F766E]/15 bg-white/30 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10B981] shadow-[0_0_0_14px_rgba(16,185,129,0.13),0_0_0_30px_rgba(16,185,129,0.07)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <section id="features" className="px-5 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why NAN FLOW"
        title="Tourism growth should reach more than the obvious places."
        description="NAN FLOW turns travel intent into distributed community opportunity, creating a better experience for visitors and clearer signals for decision makers."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
        {problems.map((problem) => {
          const Icon = problem.icon;

          return (
            <Card
              key={problem.title}
              className="group rounded-xl border-white/70 bg-white p-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
            >
              <CardHeader className="p-6">
                <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-[#0F766E] transition-colors group-hover:bg-[#0F766E] group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <CardTitle className="text-2xl font-bold tracking-tight text-gray-950">
                  {problem.title}
                </CardTitle>
                <CardDescription className="text-base leading-7 text-gray-600">
                  {problem.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="flex items-end justify-between gap-4 rounded-xl bg-[#F8FAFC] p-4">
                  <p className="text-4xl font-bold tracking-tight text-[#0F766E]">
                    {problem.metric}
                  </p>
                  <p className="max-w-28 text-right text-sm font-medium leading-5 text-gray-500">
                    {problem.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/72 px-5 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-white/80 backdrop-blur sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="How it works"
          title="From personal travel intent to community impact."
          description="The flow is simple enough for travelers and robust enough to become a policy instrument."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="relative">
                {index < steps.length - 1 ? (
                  <div className="absolute right-[-1.15rem] top-16 z-10 hidden lg:block">
                    <ArrowRight className="size-5 text-[#10B981]" />
                  </div>
                ) : null}
                <Card className="h-full rounded-xl border-emerald-900/5 bg-white/88 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="p-7">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-[0_14px_32px_rgba(15,118,110,0.22)]">
                      <Icon className="size-5" />
                    </span>
                    <p className="pt-3 text-sm font-semibold text-[#10B981]">
                      Step {index + 1}
                    </p>
                    <CardTitle className="text-2xl font-bold tracking-tight">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7 text-gray-600">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
                {index < steps.length - 1 ? (
                  <ArrowDown className="mx-auto mt-5 size-5 text-[#10B981] lg:hidden" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PersonaSection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Persona preview"
        title="Four ways to unlock a different Nan."
        description="Each persona becomes a dynamic quest engine that blends traveler preference with community opportunity."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {personas.map((persona) => {
          const Icon = persona.icon;

          return (
            <Card
              key={persona.name}
              className="group rounded-xl border-white/70 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(15,118,110,0.16)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl" aria-hidden="true">
                  {persona.emoji}
                </span>
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0F766E] transition-colors group-hover:bg-[#0F766E] group-hover:text-white">
                  <Icon className="size-5" />
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-950">
                {persona.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {persona.description}
              </p>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-emerald-50">
                <div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#0F766E,#10B981)] transition-all duration-300 group-hover:w-full" />
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function DashboardPreviewSection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0F766E]">
            Dashboard preview
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            A traveler experience that quietly measures impact.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Mocked but investor-ready: the tourist dashboard shows the metrics
            judges need to understand distribution, quest behavior, and local value.
          </p>
        </div>

        <div className="rounded-[2rem] bg-gray-950 p-3 shadow-[0_34px_110px_rgba(15,23,42,0.24)]">
          <div className="overflow-hidden rounded-[1.45rem] bg-white">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div>
                <p className="text-sm font-bold text-gray-950">Traveler impact</p>
                <p className="text-xs text-gray-500">Active Explorer route</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-[#0F766E]">
                Live mock
              </span>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2">
              {dashboardMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl bg-[#F8FAFC] p-4">
                  <p className="text-sm font-medium text-gray-500">{metric.label}</p>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <p className="text-3xl font-bold tracking-tight text-gray-950">
                      {metric.value}
                    </p>
                    <p className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-[#0F766E]">
                      {metric.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-4 p-4 pt-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-xl bg-[#F8FAFC] p-5">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-gray-950">Quest completion</p>
                  <LineChart className="size-5 text-[#0F766E]" />
                </div>
                <div className="mt-6 flex h-36 items-end gap-2">
                  {[42, 58, 51, 68, 63, 82, 76, 91].map((height, index) => (
                    <div
                      key={height + index}
                      className="flex-1 rounded-t-lg bg-[linear-gradient(180deg,#10B981,#0F766E)]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-[#0F766E] p-5 text-white">
                <p className="text-sm font-medium text-emerald-100">Today&apos;s quest</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">
                  Forest craft loop
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  3 community stops, 1 local guide, estimated spend routed to village businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GovernmentSection() {
  return (
    <section id="government" className="px-5 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Government dashboard"
        title="Policy-grade visibility without the enterprise weight."
        description="A beautiful analytics layer for heatmaps, low-season movement, community opportunity, and measurable economic impact."
      />

      <div className="mx-auto mt-14 max-w-7xl rounded-[2rem] bg-white p-4 shadow-[0_30px_100px_rgba(15,23,42,0.12)] ring-1 ring-gray-950/5">
        <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="space-y-4">
            {govMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div key={metric.label} className="rounded-xl bg-[#F8FAFC] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-500">{metric.label}</p>
                    <Icon className="size-5 text-[#0F766E]" />
                  </div>
                  <p className="mt-5 text-4xl font-bold tracking-tight text-gray-950">
                    {metric.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="min-h-[310px] rounded-xl bg-[radial-gradient(circle_at_30%_22%,rgba(16,185,129,0.58),transparent_16%),radial-gradient(circle_at_68%_42%,rgba(15,118,110,0.42),transparent_18%),radial-gradient(circle_at_42%_72%,rgba(20,184,166,0.32),transparent_16%),linear-gradient(135deg,#ecfdf5,#ffffff)] p-5">
              <p className="text-sm font-bold text-gray-950">Heatmap placeholder</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Community demand, opportunity gaps, and route balancing visualized for Nan.
              </p>
              <div className="mt-20 grid grid-cols-5 gap-2 opacity-80">
                {Array.from({ length: 25 }).map((_, index) => (
                  <span
                    key={index}
                    className="aspect-square rounded-lg bg-white/60 ring-1 ring-white/80"
                    style={{ opacity: 0.25 + ((index % 7) * 0.1) }}
                  />
                ))}
              </div>
            </div>

            <div className="min-h-[310px] rounded-xl bg-gray-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">Charts placeholder</p>
                  <p className="mt-2 text-sm text-white/56">Low-season trend</p>
                </div>
                <BarChart3 className="size-5 text-[#10B981]" />
              </div>
              <div className="mt-12 space-y-5">
                {[
                  ["Pua", "88%"],
                  ["Bo Kluea", "72%"],
                  ["Santisuk", "64%"],
                  ["Mae Charim", "56%"],
                ].map(([name, width]) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm">
                      <span>{name}</span>
                      <span className="text-emerald-200">{width}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#10B981,#99f6e4)]"
                        style={{ width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="px-5 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Roadmap"
        title="Built for a hackathon demo, shaped for a province-scale platform."
        description="The MVP tells a complete story today while leaving a credible expansion path."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {roadmap.map((item, index) => (
          <Card
            key={item.phase}
            className="rounded-xl bg-white p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-sm font-bold text-[#10B981]">{item.phase}</p>
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-gray-950">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">{item.description}</p>
            <div className="mt-8 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#0F766E] text-sm font-bold text-white">
                {index + 1}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#0F766E]/35 to-transparent" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-gray-950/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#0F766E] text-white">
            <Mountain className="size-5" />
          </span>
          <p className="font-bold tracking-[0.18em] text-gray-950">NAN FLOW</p>
        </div>
        <p className="text-sm font-medium text-gray-500">
          Nan Beyond Seasons Challenge · 2026
        </p>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0F766E]">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-gray-600">{description}</p>
    </div>
  );
}
