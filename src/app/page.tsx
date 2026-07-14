import { ArrowRight, Bot, ChevronDown, CloudSun, Coffee, Landmark, Leaf, MapPin, MapPinned, ShieldCheck, Sparkles, Store, UserRound, Waves, Award, Route, Users } from "lucide-react";

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
  "Persona selection",
  "AI recommendation",
  "Dynamic Quest",
  "Tourist Dashboard",
  "Government Dashboard",
];

const personas = [
  {
    icon: "🏃",
    title: "Active",
    description: "Adventure, running, and nature-led routes for high-energy travelers.",
  },
  {
    icon: "☕",
    title: "Lifestyle",
    description: "Cafe, photography, and craft experiences with a softer pace.",
  },
  {
    icon: "💻",
    title: "Focus",
    description: "Digital nomad-friendly quests with coffee, coworking, and focus time.",
  },
  {
    icon: "🌿",
    title: "Wellness",
    description: "Family, health, and relaxation journeys designed to restore energy.",
  },
];

const benefits = [
  {
    title: "Tourists",
    description: "Discover personalized community quests, better local experiences, and a more meaningful trip.",
    icon: UserRound,
  },
  {
    title: "Communities",
    description: "Receive more visitors during low season and unlock new income opportunities.",
    icon: Store,
  },
  {
    title: "Government",
    description: "See tourism distribution clearly with mock KPI insights and seasonal balance indicators.",
    icon: Landmark,
  },
];

const challengeCards = [
  {
    title: "Tourist Crowding",
    description: "Visitors cluster in a few famous destinations, leaving the wider province underused.",
    icon: MapPinned,
  },
  {
    title: "Low Season",
    description: "When the weather turns, travel demand drops and communities lose momentum.",
    icon: Leaf,
  },
  {
    title: "Uneven Community Income",
    description: "Some areas benefit from tourism while others see little economic spillover.",
    icon: Landmark,
  },
];

const journeySteps = [
  {
    title: "Choose Persona",
    description: "Pick a traveler style that reflects intent, pace, and interests.",
    icon: Users,
  },
  {
    title: "Receive AI Quest",
    description: "The platform generates a dynamic route based on opportunities and context.",
    icon: Sparkles,
  },
  {
    title: "Visit Community",
    description: "Travelers are guided toward local experiences outside the crowded center.",
    icon: MapPinned,
  },
  {
    title: "Gain Reputation",
    description: "Completion rewards create engagement and encourage more meaningful travel.",
    icon: Award,
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "MVP",
    description: "Launch the core traveler flow with persona selection and AI quests.",
  },
  {
    phase: "Phase 2",
    title: "Community Portal",
    description: "Let local partners publish opportunities, experiences, and availability.",
  },
  {
    phase: "Phase 3",
    title: "Government Dashboard",
    description: "Surface distribution, impact, and seasonal tourism insight for officials.",
  },
  {
    phase: "Phase 4",
    title: "Provincial Platform",
    description: "Scale NAN FLOW into a broader tourism operating layer for the province.",
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(20,83,45,0.18),transparent_28%),linear-gradient(to_bottom,#07140f_0%,#0b1f17_28%,#f8fafc_100%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 py-6 sm:px-6 lg:px-8 lg:py-10">
        <section className="relative min-h-screen overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-5 py-6 shadow-[0_30px_120px_rgba(2,6,23,0.24)] backdrop-blur-xl sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,12,0.35),rgba(4,18,12,0.55)),radial-gradient(circle_at_50%_10%,rgba(34,197,94,0.24),transparent_45%)]" />
          <div className="absolute inset-0 opacity-95">
            <svg className="h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="mountainSky" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#081712" />
                  <stop offset="55%" stopColor="#123123" />
                  <stop offset="100%" stopColor="#dff6e7" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect width="1440" height="900" fill="url(#mountainSky)" />
              <path d="M0 620L140 520L270 580L420 430L575 560L720 390L890 560L1040 450L1170 530L1440 360V900H0Z" fill="#0d251b" opacity="0.95" />
              <path d="M0 700L180 610L330 660L520 520L700 630L910 500L1130 620L1260 560L1440 640V900H0Z" fill="#123726" opacity="0.92" />
              <path d="M0 770L220 700L380 740L560 650L760 740L980 680L1170 730L1440 690V900H0Z" fill="#163e2d" opacity="0.9" />
            </svg>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_26%)]" />

          <div className="relative z-10 flex h-full flex-col">
            <header className="mb-8 flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white shadow-[0_8px_40px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <span className="text-sm font-semibold tracking-[0.18em]">NF</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-50">NAN FLOW</p>
                  <p className="text-xs text-white/60">Nan Beyond Seasons Hackathon</p>
                </div>
              </div>
              <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
                <span>Problem</span>
                <span>Solution</span>
                <span>Quest</span>
                <span>Dashboard</span>
              </nav>
            </header>

            <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative z-10 max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 shadow-sm backdrop-blur-md">
                  <span className="inline-flex size-2 rounded-full bg-emerald-300" />
                  AI-powered Tourism Beyond Seasons
                </div>

                <h1 className="mt-6 font-serif text-6xl font-semibold tracking-tight text-white sm:text-7xl lg:text-[5.5rem] lg:leading-none">
                  NAN FLOW
                </h1>

                <p className="mt-5 max-w-2xl text-2xl leading-tight text-white/90 sm:text-3xl lg:text-4xl">
                    Explore Beyond Seasons.
                    <br />
                    Empower Local Communities.
                </p>

                  <div className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg">
                    An AI-powered tourism platform that helps distribute travelers to local communities during the low and green season while providing measurable impact through a government dashboard.
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button className="h-12 rounded-full bg-[#0F766E] px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:scale-105 hover:bg-[#0b645d]">
                    Start Journey
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                  <Button variant="outline" className="h-12 rounded-full border-white/20 bg-white/10 px-6 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:text-white">
                    Explore Dynamic Quest
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <Sparkles className="size-4 text-emerald-300" />
                    AI-generated quests
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <Leaf className="size-4 text-emerald-300" />
                    Community-first distribution
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <Card className="overflow-hidden border-white/15 bg-white/10 text-white shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader className="gap-4 border-b border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-emerald-50/70">AI assistant</p>
                        <CardTitle className="mt-1 text-2xl text-white">Recommendation Preview</CardTitle>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                        <Bot className="size-6 text-emerald-200" />
                      </div>
                    </div>
                    <CardDescription className="max-w-md text-white/70">
                      A live-style preview of what the AI recommends based on weather, crowding, and community opportunity.
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 p-6">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <CloudSun className="size-4" />
                          Current Weather
                        </div>
                        <p className="mt-2 text-lg font-semibold text-white">Rainy</p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <MapPin className="size-4" />
                          Crowded Area
                        </div>
                        <p className="mt-2 text-lg font-semibold text-white">Nan City</p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                      <p className="text-sm text-white/70">AI Recommendation</p>
                      <div className="mt-3 space-y-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="font-semibold text-white">Morning Trail Run</p>
                              <p className="text-sm text-white/70">Weather: Cloudy · Location: Pua District</p>
                            </div>
                            <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                              96% match
                            </span>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="font-semibold text-white">Coffee Workshop</p>
                              <p className="text-sm text-white/70">Opportunity: High</p>
                            </div>
                            <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                              High
                            </span>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="font-semibold text-white">Handcraft Experience</p>
                              <p className="text-sm text-white/70">Reward: Reputation +25</p>
                            </div>
                            <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                              +25
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-semibold text-emerald-900">
                        Community-first
                      </span>
                      <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-semibold text-emerald-900">
                        Dynamic Quest AI
                      </span>
                      <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-semibold text-emerald-900">
                        Opportunity scoring
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Problem"
            title="The Challenge"
            description="Nan’s tourism pattern is uneven, so the landing page should show the issue immediately and simply."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {challengeCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="group border-white/15 bg-white/10 text-white shadow-[0_24px_70px_rgba(2,6,23,0.18)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                  <CardHeader className="p-6">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-emerald-200 backdrop-blur-md transition-all duration-300 group-hover:bg-white/15">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="mt-5 text-xl text-white">{card.title}</CardTitle>
                    <CardDescription className="text-white/70">{card.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Solution"
            title="How NAN FLOW Works"
            description="AI-powered Dynamic Quest distributes travelers into local communities through a clear flow."
          />

          <Card className="border-white/15 bg-white/10 shadow-[0_24px_70px_rgba(2,6,23,0.18)] backdrop-blur-xl">
            <CardContent className="grid gap-4 p-6 sm:p-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
              {[
                "Traveler Persona",
                "AI Recommendation",
                "Dynamic Quest",
                "Community Impact",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex min-h-24 flex-1 items-center rounded-3xl border border-white/10 bg-white/10 p-5 text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    <p className="text-lg font-semibold">{step}</p>
                  </div>
                  {index < 3 ? (
                    <div className="hidden items-center justify-center text-emerald-100/80 lg:flex">
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
            eyebrow="User Journey"
            title="A traveler’s path from discovery to reward"
            description="The journey cards keep the story concrete for judges and easy to scan on mobile."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {journeySteps.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="group border-white/15 bg-white/10 text-white shadow-[0_24px_70px_rgba(2,6,23,0.18)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                  <CardHeader className="p-6">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-emerald-200 backdrop-blur-md transition-all duration-300 group-hover:bg-white/15">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="mt-5 text-xl text-white">{item.title}</CardTitle>
                    <CardDescription className="text-white/70">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Future Roadmap"
            title="From MVP to provincial platform"
            description="The roadmap keeps the hackathon scope clear while suggesting the next steps after launch."
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {roadmap.map((item, index) => (
              <Card key={item.title} className="group border-white/15 bg-white/10 text-white shadow-[0_24px_70px_rgba(2,6,23,0.18)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/80">{item.phase}</p>
                    <span className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-white/90 backdrop-blur-md">
                      {index + 1}
                    </span>
                  </div>
                  <CardTitle className="mt-5 text-xl text-white">{item.title}</CardTitle>
                  <CardDescription className="text-white/70">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <footer className="border-t border-emerald-950/10 py-6 text-center text-sm font-medium text-slate-600">
          Nan Beyond Seasons Challenge 2026
        </footer>
      </div>
    </main>
  );
}
