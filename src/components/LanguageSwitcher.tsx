"use client"

import { useLanguage, type Language } from "@/contexts/LanguageContext"

const languageOptions: Array<{ label: string; value: Language }> = [
  { label: "TH", value: "th" },
  { label: "EN", value: "en" },
]

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      className="inline-flex h-10 items-center rounded-xl border border-emerald-900/10 bg-white/70 p-1 shadow-sm backdrop-blur-xl"
      aria-label={t.common.languageSelector}
    >
      {languageOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLanguage(option.value)}
          className={`h-8 rounded-lg px-2.5 text-xs font-bold transition-all duration-300 ${
            language === option.value
              ? "bg-[#0F766E] text-white shadow-sm"
              : "text-gray-500 hover:text-[#0F766E]"
          }`}
          aria-pressed={language === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
