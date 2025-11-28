import Reveal from "@/components/Reveal";

export default function Projects() {
const projects = [
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
    {
        title: "Sistema de Tránsito",
        description:
            "Trabajo en Spring Boot. Utilizando SOLID, arquitectura modular y limpia, uso de patrones Strategy para políticas de evaluación y State para gestionar los estados del usuario (registro → verificación → activo → sancionado). Incluye pruebas, seguridad y buenas prácticas de diseño.",
        stack: "Spring Boot · SOLID · Strategy · State",
        link: "#",
    },
];

  return (
    <Reveal>
      <section className="max-w-3xl mx-auto py-24">
        <h2 className="text-4xl font-semibold tracking-tight mb-8 text-center">Proyectos</h2>

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
