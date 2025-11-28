"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto py-32 px-6 flex flex-col md:flex-row items-center gap-16"
    >
      {/* Texto */}
      <div className="flex-1">
        <h1 className="text-6xl font-semibold tracking-tight leading-tight">
          Hola, soy Juan.
        </h1>

        <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl">
          Me gusta entender cómo funcionan las cosas y convertir problemas reales
          en software claro y funcional. Actualmente trabajo con scraping, datos
          y automatización.
        </p>

        {/* LINKS */}
        <div className="flex items-center gap-6 mt-8">
          <a
            href="https://github.com/juanvila17"
            target="_blank"
            className="text-lg text-gray-800 hover:opacity-70 transition"
          >
            GitHub →
          </a>

          <a
            href="https://www.linkedin.com/in/juan-vila-41b4901bb/"
            target="_blank"
            className="text-lg text-gray-800 hover:opacity-70 transition"
          >
            LinkedIn →
          </a>
        </div>
      </div>

      {/* Foto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/juan.jpg"
          alt="Juan Vila"
          width={260}
          height={260}
          className="rounded-full grayscale hover:grayscale-0 transition object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
