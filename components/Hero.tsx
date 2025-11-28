export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

      {/* Spotlight visual */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-black/5 blur-3xl opacity-60"></div>
      </div>

      <h1 className="text-6xl font-semibold tracking-tight leading-tight max-w-3xl relative z-10">
        Hola, soy Juan.
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-2xl relative z-10">
        Me gusta entender cómo funcionan las cosas y convertir problemas reales 
        en software claro y funcional.  
        <br />
        Trabajo con scraping y datos, y estoy construyendo proyectos que me 
        ayuden a crecer como desarrollador y como persona.
      </p>

    </section>
  );
}
