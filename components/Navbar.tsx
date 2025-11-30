"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="w-full py-5 px-6 border-b border-black/10 bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">{t('navbar.title') as string}</h1>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}