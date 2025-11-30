"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-200">
      {t("footer.text", { year })}
    </footer>
  );
}
