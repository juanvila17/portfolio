import Image from "next/image";
import Reveal from "@/components/Reveal";

const skills = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "Next.js", logo: "/logos/nextdotjs.svg" },
  { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "FastAPI", logo: "/logos/fastapi.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "Node.js", logo: "/logos/nodedotjs.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Spring", logo: "/logos/spring.svg" },
];

export default function Skills() {
  return (
    <Reveal>
      <section className="max-w-3xl mx-auto py-24">
        <h2 className="text-4xl font-semibold tracking-tight mb-8 text-center">Tecnologías</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-center">
              <Image
                src={skill.logo}
                alt={skill.name}
                width={40}
                height={40}
                className="opacity-80 hover:opacity-100 transition"
              />
              <span className="mt-2 text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
