"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "./i18nTranslations";

type Lang = "en" | "es";

type ContextShape = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string, vars?: Record<string, any>) => string | any;
};

const LanguageContext = createContext<ContextShape | null>(null);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("lang") as Lang | null;
        return (stored || "es") as Lang;
      }
    } catch (e) {
      // ignore
    }
    return "es";
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const t = (path: string, vars?: Record<string, any>) => {
    const parts = path.split(".");
    let cur: any = (translations as any)[lang];
    for (const p of parts) {
      if (cur == null) return "";
      cur = cur[p];
    }

    if (typeof cur === "string") {
      if (!vars) return cur;
      return cur.replace(/\{\{\s*(.*?)\s*\}\}/g, (_m, g1) => {
        return vars[g1] ?? "";
      });
    }

    return cur;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
