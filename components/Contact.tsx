"use client";

import Reveal from "@/components/Reveal";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xvi0f8",     
        "template_1dqwgrc",    
        e.target,
        "G7oSD9RP8EwH5s2fm"      
      )
      .then(
        () => {
          setSent(true);
        },
        () => {
          alert("Ocurrió un error al enviar el mensaje.");
        }
      );
  };

  return (
    <Reveal>
      <section className="max-w-3xl mx-auto py-24">
        <h2 className="text-4xl font-semibold tracking-tight mb-6 text-center">
          Contacto
        </h2>

        {!sent ? (
          <form
            onSubmit={sendEmail}
            className="space-y-6 w-full max-w-xl mx-auto"
          >
            {/* Nombre */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-gray-700">Nombre</label>
              <input
                type="text"
                name="from_name"
                required
                className="border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-gray-700">Correo</label>
              <input
                type="email"
                name="reply_to"
                required
                className="border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-gray-700">Mensaje</label>
              <textarea
                name="message"
                rows={4}
                required
                className="border border-gray-300 rounded-md px-3 py-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-black/80 transition"
            >
              Enviar mensaje
            </button>
          </form>
        ) : (
          <div className="text-center text-xl text-gray-700 py-10">
            ¡Gracias por tu mensaje! Te responderé pronto.
          </div>
        )}
      </section>
    </Reveal>
  );
}
