export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personal",
      description:
        "Sitio web profesional construido con Next.js y Tailwind, mostrando experiencia, proyectos y contacto.",
      stack: ["Next.js", "React", "Tailwind"],
      link: "#",
    },
    {
      title: "Price Monitor",
      description:
        "Plataforma para trackear precios de productos mediante scraping en tiempo real, con dashboard y API.",
      stack: ["FastAPI", "Playwright", "PostgreSQL", "React"],
      link: "#",
    },
    {
      title: "Outfit AI",
      description:
        "Aplicación que analiza prendas de ropa y genera outfits utilizando visión por computadora.",
      stack: ["Python", "FastAPI", "AI Vision", "React Native"],
      link: "#",
    },
  ];

  return (
    <section id="proyectos" className="px-6 py-24 bg-gray-50 text-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold tracking-tight mb-10">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-6 rounded-2xl shadow-sm border border-black/10 hover:shadow-md hover:-translate-y-1 transition"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-gray-700 text-base">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-black/5 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="mt-5 inline-block text-sm font-semibold text-black underline hover:opacity-70"
              >
                Ver más →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
