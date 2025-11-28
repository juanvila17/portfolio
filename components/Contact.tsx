export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-24 bg-white text-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">
          Contacto
        </h2>

        <p className="text-lg text-gray-700 mb-10">
          Si querés hablar sobre proyectos, oportunidades o colaborar en algo,
          podés contactarme por los siguientes canales:
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:juanviladev@gmail.com"
            className="text-xl font-medium hover:underline"
          >
            📧 Enviar email
          </a>

          <a
            href="https://github.com/juanvila17"
            target="_blank"
            className="text-xl font-medium hover:underline"
          >
            🐙 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/juan-vila-41b4901bb/"
            target="_blank"
            className="text-xl font-medium hover:underline"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
