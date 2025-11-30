"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "./LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();
  const raw = t("projects.list");
  const projects = Array.isArray(raw) ? (raw as any[]) : [];

  return (
    <Reveal>
      <section className="max-w-3xl mx-auto py-24">
  <h2 className="text-4xl font-semibold tracking-tight mb-8 text-center">{t("projects.title")}</h2>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.title} className="space-y-3">
              <a
                href={project.link}
                className="text-2xl font-semibold hover:opacity-80 transition"
              >
                {project.title}
              </a>

              <p className="text-gray-700 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-gray-500">{project.stack}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
