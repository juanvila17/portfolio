import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24 bg-white text-black">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Foto */}
        <div className="flex-shrink-0">
          <Image
            src="/juan.jpg"
            alt="Juan Vila"
            width={210}
            height={210}
            className="rounded-full grayscale hover:grayscale-0 transition duration-300 object-cover"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-4xl font-semibold tracking-tight mb-6">
            Sobre mí
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Soy un desarrollador Full Stack enfocado en scraping, automatización
            y datos. Me gusta entender cómo funcionan las cosas y convertir
            problemas reales en soluciones claras y funcionales.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Hoy trabajo en PriceStats desarrollando scrapers y pipelines. En
            paralelo, estoy construyendo proyectos personales para mejorar como
            profesional y explorar nuevas ideas.
          </p>
        </div>
      </div>
    </section>
  );
}
