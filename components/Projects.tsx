import Reveal from "@/components/Reveal";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personal",
      description:
        "Sitio web profesional construido con Next.js y Tailwind. Diseño minimalista, centrado en claridad y experiencia del usuario.",
      stack: "Next.js · Tailwind · React",
      link: "#",
    },
    {
      title: "Price Monitor",
      description:
        "Plataforma para trackear precios mediante scraping y monitoreo histórico con dashboard y API.",
      stack: "FastAPI · Playwright · PostgreSQL · React",
      link: "#",
    },
    {
      title: "Outfit AI",
      description:
        "Aplicación que analiza prendas mediante visión por computadora para generar outfits automáticamente.",
      stack: "Python · AI Vision · FastAPI · React Native",
      link: "#",
    },
  ];

  return (
    <Reveal>
      <section className="max-w-3xl mx-auto py-24">
        <h2 className="text-4xl font-semibold tracking-tight mb-8">Proyectos</h2>

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
