const translations = {
  en: {
    navbar: { title: '< Juan Vila />' },
    intro: {
      title: 'Hi, I am Juan.',
      paragraph:
        "I like understanding how things work and turning real problems into clear, functional software. I currently work with scraping, data and automation.",
      github: 'GitHub →',
      linkedin: 'LinkedIn →',
    },
    skills: { title: 'Technologies' },
    projects: {
      title: 'Projects',
      list: [
        {
          title: 'Transit System',
          description:
            'Working on Spring Boot. Using SOLID, modular and clean architecture, Strategy patterns for evaluation policies and State for user states (registration → verification → active → sanctioned). Includes tests and security.',
          stack: 'Spring Boot · SOLID · Strategy · State',
          link: '#',
        },
      ],
    },
    contact: {
      title: 'Contact',
      labels: { name: 'Name', email: 'Email', message: 'Message' },
      send: 'Send message',
      sent: 'Thanks for your message! I will reply soon.',
      error: 'An error occurred while sending the message.',
    },
    footer: { text: '© {{year}} Juan Vila — Building my path in technology.' },
    focus: {
      title: 'My focus',
      items: [
        'Simplicity over complexity',
        'Clear solutions, no detours',
        'Maintainable code designed for the long term',
        'Learn a bit every day',
        'Build tools that actually help someone',
      ],
    },
  },
  es: {
    navbar: { title: '< Juan Vila />' },
    intro: {
      title: 'Hola, soy Juan.',
      paragraph:
        'Me gusta entender cómo funcionan las cosas y convertir problemas reales en software claro y funcional. Actualmente trabajo con scraping, datos y automatización.',
      github: 'GitHub →',
      linkedin: 'LinkedIn →',
    },
    skills: { title: 'Tecnologías' },
    projects: {
      title: 'Proyectos',
      list: [
        {
          title: 'Sistema de Tránsito',
          description:
            'Trabajo en Spring Boot. Utilizando SOLID, arquitectura modular y limpia, uso de patrones Strategy para políticas de evaluación y State para gestionar los estados del usuario (registro → verificación → activo → sancionado). Incluye pruebas, seguridad y buenas prácticas de diseño.',
          stack: 'Spring Boot · SOLID · Strategy · State',
          link: '#',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      labels: { name: 'Nombre', email: 'Correo', message: 'Mensaje' },
      send: 'Enviar mensaje',
      sent: '¡Gracias por tu mensaje! Te responderé pronto.',
      error: 'Ocurrió un error al enviar el mensaje.',
    },
    footer: { text: '© {{year}} Juan Vila — Construyendo mi camino en tecnología.' },
    focus: {
      title: 'Mi enfoque',
      items: [
        'Simplicidad antes que complejidad',
        'Soluciones claras, sin vueltas',
        'Código mantenible y pensado a largo plazo',
        'Aprender un poco todos los días',
        'Construir herramientas que realmente ayuden a alguien',
      ],
    },
  },
};

export default translations;
