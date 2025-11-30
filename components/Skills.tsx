"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Componente individual
function SortableSkill({ skill }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: skill.name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex flex-col items-center text-center cursor-grab active:cursor-grabbing select-none"
    >
      <Image
        src={skill.logo}
        alt={skill.name}
        width={40}
        height={40}
        className="opacity-80 hover:opacity-100 transition"
      />
      <span className="mt-2 text-gray-700">{skill.name}</span>
    </div>
  );
}

import { useLanguage } from "./LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();
  const [skills, setSkills] = useState([
    { name: "React", logo: "/logos/react.svg" },
    { name: "Next.js", logo: "/logos/nextdotjs.svg" },
    { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "FastAPI", logo: "/logos/fastapi.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "Node.js", logo: "/logos/nodedotjs.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "Spring", logo: "/logos/spring.svg" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  return (
    <Reveal>
      <section className="max-w-3xl mx-auto py-24">
        <h2 className="text-4xl font-semibold tracking-tight mb-8 text-center">
          {t("skills.title")}
        </h2>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(event) => {
            const { active, over } = event;

            if (over && active.id !== over.id) {
              const oldIndex = skills.findIndex((s) => s.name === active.id);
              const newIndex = skills.findIndex((s) => s.name === over.id);

              setSkills((items) => arrayMove(items, oldIndex, newIndex));
            }
          }}
        >
          <SortableContext
            items={skills.map((s) => s.name)}
            strategy={undefined} // 🔥 FIX universal para grids
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <SortableSkill key={skill.name} skill={skill} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </section>
    </Reveal>
  );
}
