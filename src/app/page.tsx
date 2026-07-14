import { ArrowRight, BarChart3, Building2, ChevronDown, CircleCheckBig, Compass, Globe2, Leaf, MapPinned, ShieldCheck, Sparkles, TrendingUp, Users, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const problemCards = [
  {
    title: "Tourists are concentrated in only a few destinations.",
    icon: MapPinned,
  },
  {
    title: "Local communities lose income during Green Season.",
    icon: Leaf,
  },
  {
    title: "Government lacks real-time tourism distribution insights.",
    icon: ShieldCheck,
  },
];

const solutionSteps = [
  "Choose Persona",
  "AI generates personalized quests",
  "Support local communities while tracking tourism impact",
];

const personas = [
  {
    icon: "🏃",
    title: "Active Explorer",
    description: "Adventure-first routes with movement, viewpoints, and trail moments.",
  },
  {
    icon: "☕",
    title: "Lifestyle",
    description: "Slow itineraries for cafes, crafts, and premium local experiences.",
  },
  {
    icon: "💻",
    title: "Digital Nomad",
    description: "Balanced work-and-travel quests built around connectivity and comfort.",
  },
  {
    icon: "🌿",
    title: "Wellness",
    description: "Restorative journeys focused on nature, breathing, and renewal.",
  },
];

const dashboardMetrics = [
  {
    title: "Community Visits",
    value: "18.4K",
    detail: "+24% week over week",
    icon: Users,
  },
  {
    title: "Opportunity Score",
    value: "87",
    detail: "High potential zones identified",
    icon: BarChart3,
  },
  {
    title: "Economic Impact",
    value: "4.8M THB",
    detail: "Estimated local spending uplift",
    icon: TrendingUp,
  },
  {
    title: "Quest Completion",
    value: "72%",
    detail: "Travelers finishing curated routes",
    icon: CircleCheckBig,
  },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Tourist App",
    description: "Launch the traveler experience with persona onboarding and quests.",
    icon: Compass,
  },
  {
    phase: "Phase 2",
    title: "Community Portal",
    description: "Enable local partners to publish offers, stories, and availability.",
    icon: Building2,
  },
  {
    phase: "Phase 3",
    title: "Government Dashboard",
    description: "Surface live distribution, impact, and seasonal tourism patterns.",
    icon: ShieldCheck,
  },
  {
    phase: "Phase 4",
    title: "CITY FLOW Platform",
    description: "Scale the model into a city-wide sustainable tourism operating layer.",
    icon: Globe2,
  },
];

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
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-800">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(20,83,45,0.12),transparent_28%),linear-gradient(to_bottom,#f8fafc,#f8fafc)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-112 bg-[linear-gradient(135deg,rgba(220,252,231,0.85),rgba(255,255,255,0)_65%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 py-6 sm:px-6 lg:px-8 lg:py-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-white/80 px-5 py-8 shadow-[0_30px_120px_rgba(15,118,110,0.08)] backdrop-blur sm:px-8 sm:py-12 lg:px-12 lg:py-16">
          <div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-lime-200/50 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-900 shadow-sm">
                <span className="inline-flex size-2 rounded-full bg-emerald-600" />
                NAN FLOW
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Explore Beyond Seasons
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                AI-powered tourism platform helping travelers discover local communities while supporting sustainable tourism in Nan.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="h-12 rounded-full bg-[#0F766E] px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-all duration-300 hover:scale-105 hover:bg-[#0b645d]">
                  Start Journey
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button variant="outline" className="h-12 rounded-full border-emerald-900/15 bg-white px-6 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:border-emerald-900/25 hover:bg-emerald-50">
                  View Dashboard
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#DCFCE7] px-4 py-2">
                  <Sparkles className="size-4 text-emerald-700" />
                  Personalized quests
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-emerald-950/8">
                  <Leaf className="size-4 text-emerald-700" />
                  Sustainable tourism impact
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <Card className="overflow-hidden border-emerald-950/10 bg-slate-950 text-white shadow-[0_30px_120px_rgba(2,6,23,0.2)] transition-all duration-300 hover:scale-105">
                <CardHeader className="gap-4 border-b border-white/10 bg-linear-to-br from-emerald-900 via-emerald-950 to-slate-950 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-emerald-100/80">Government insight</p>
                      <CardTitle className="mt-1 text-2xl text-white">Live seasonal balance</CardTitle>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3">
                      <Waves className="size-6 text-emerald-200" />
                    </div>
                  </div>
                  <CardDescription className="max-w-md text-emerald-50/80">
                    Track where travelers go, which communities benefit, and how Green Season activity shifts across Nan.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
                  {dashboardMetrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                      <div key={metric.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm text-emerald-100/75">{metric.title}</p>
                          <Icon className="size-4 text-emerald-200" />
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                        <p className="mt-1 text-sm text-emerald-100/70">{metric.detail}</p>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Problem"
            title="Tourism demand is uneven, seasonal, and hard to act on"
            description="NAN FLOW addresses the visibility gap between travelers, local communities, and government teams with a simple AI-driven distribution layer."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {problemCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="group h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_24px_70px_rgba(15,118,110,0.12)]">
                  <CardHeader className="p-6">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#0F766E] transition-all duration-300 group-hover:bg-[#0F766E] group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="mt-5 text-xl text-slate-950">{card.title}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Solution"
            title="How NAN FLOW works"
            description="A lightweight flow that turns traveler intent into better distribution, stronger community income, and clearer impact tracking."
          />

          <Card className="overflow-hidden border-emerald-950/10 bg-linear-to-br from-white to-emerald-50/70">
            <CardContent className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-4">
              {solutionSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex min-h-24 flex-1 items-center rounded-3xl border border-emerald-950/10 bg-white p-5 shadow-sm transition-all duration-300 hover:scale-105">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                        Step {index + 1}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">{step}</p>
                    </div>
                  </div>
                  {index < solutionSteps.length - 1 ? (
                    <div className="hidden items-center justify-center text-emerald-700 lg:flex">
                      <ChevronDown className="size-6 rotate-90 lg:rotate-0" />
                    </div>
                  ) : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Persona Preview"
            title="Four traveler personas, one adaptive engine"
            description="The same platform feels different for each traveler, while staying aligned with local community opportunity."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {personas.map((persona) => (
              <Card key={persona.title} className="group transition-all duration-300 hover:scale-105 hover:border-emerald-900/20 hover:shadow-[0_24px_70px_rgba(15,118,110,0.12)]">
                <CardHeader className="p-6">
                  <div className="flex size-14 items-center justify-center rounded-3xl bg-[#DCFCE7] text-3xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                    {persona.icon}
                  </div>
                  <CardTitle className="mt-5 text-xl text-slate-950">{persona.title}</CardTitle>
                  <CardDescription>{persona.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Dashboard Preview"
            title="Government-ready data snapshots"
            description="Use mock metrics to illustrate tourism flow, economic benefits, and quest engagement without any API wiring."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dashboardMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <Card key={metric.title} className="transition-all duration-300 hover:scale-105 hover:shadow-[0_24px_70px_rgba(15,118,110,0.12)]">
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <CardDescription className="text-sm font-medium text-slate-500">{metric.title}</CardDescription>
                        <CardTitle className="mt-3 text-3xl text-slate-950">{metric.value}</CardTitle>
                      </div>
                      <div className="rounded-2xl bg-[#DCFCE7] p-3 text-[#0F766E]">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{metric.detail}</p>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="space-y-8 pb-6">
          <SectionHeading
            eyebrow="Roadmap"
            title="From tourist app to city platform"
            description="A staged rollout that keeps the experience simple now while leaving room to expand across future destinations."
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {roadmapPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card key={phase.title} className="group transition-all duration-300 hover:scale-105 hover:shadow-[0_24px_70px_rgba(15,118,110,0.12)]">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                        {phase.phase}
                      </p>
                      <div className="rounded-2xl bg-[#DCFCE7] p-3 text-[#0F766E] transition-all duration-300 group-hover:bg-[#0F766E] group-hover:text-white">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <CardTitle className="mt-5 text-xl text-slate-950">{phase.title}</CardTitle>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-900">
                        {index + 1}
                      </span>
                      Strategic release
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <footer className="border-t border-emerald-950/10 py-6 text-center text-sm font-medium text-slate-600">
          Nan Beyond Seasons Challenge 2026
        </footer>
      </div>
    </main>
  );
}
