"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        title="English"
        className={`text-2xl leading-none p-1 ${lang === "en" ? "opacity-100" : "opacity-70"}`}
        style={{ cursor: "pointer" }}
      >
        🇬🇧
      </button>

      <button
        aria-pressed={lang === "es"}
        onClick={() => setLang("es")}
        title="Español"
        className={`text-2xl leading-none p-1 ${lang === "es" ? "opacity-100" : "opacity-70"}`}
        style={{ cursor: "pointer" }}
      >
        🇪🇸
      </button>
    </div>
  );
}

