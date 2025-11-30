"use client";

import { useLanguage } from "./LanguageProvider";

export default function Focus() {
  const { t } = useLanguage();

  const items = t("focus.items") as string[];

  return (
    <section className="px-6 py-24 bg-gray-50 text-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold tracking-tight mb-8">{t("focus.title")}</h2>

        <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
          {items.map((it, i) => (
            <li key={i}>• {it}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
