import React from "react"; 
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Check } from "lucide-react";

import heroImg from "./assets/hero.jpg";
import clinicaImg from "./assets/clinica.jpg";

export default function App() {
  const services = [
    "Implantes Dentários",
    "Clareamento Estético",
    "Ortodontia",
    "Lentes de Resina",
    "Limpeza Preventiva",
    "Urgência",
  ];

  return (
    <div className="bg-white text-zinc-800">

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-sm tracking-[0.25em] uppercase font-medium">
            Odonto Prime
          </h1>

          <a
            href="https://wa.me/5500000000000"
            className="text-sm border border-zinc-300 px-5 py-2 rounded-full hover:bg-zinc-50 transition"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-40 pb-28">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Clínica odontológica de excelência
            </p>

            <h2 className="text-6xl font-light leading-[1.05] mt-6">
              Sorrisos com
              <br />
              <span className="font-semibold">elegância natural</span>
            </h2>

            <p className="mt-8 text-lg text-zinc-500 max-w-xl leading-relaxed">
              Tratamentos modernos com foco em estética, precisão e conforto.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="https://wa.me/5500000000000"
                className="bg-zinc-900 text-white px-7 py-4 rounded-full text-sm flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Agendar avaliação
              </a>

              <a
                href="#servicos"
                className="px-7 py-4 rounded-full border border-zinc-300 text-sm flex items-center gap-2 hover:bg-zinc-50 transition"
              >
                Conhecer tratamentos
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-sm">
              <img
                src={heroImg}
                alt="Clínica Odonto Prime"
                className="w-full h-[560px] object-cover"
              />

              {/* overlay elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-28 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-8">

          <h3 className="text-4xl font-light mb-16">
            Tratamentos
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((item) => (
              <div
                key={item}
                className="p-8 rounded-[28px] border border-zinc-100 hover:shadow-lg transition"
              >
                <h4 className="text-lg font-medium">{item}</h4>

                <p className="mt-3 text-zinc-500 text-sm leading-relaxed">
                  Planejamento individualizado e foco em resultado natural.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section className="py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          <div className="rounded-[40px] overflow-hidden">
            <img
              src={clinicaImg}
              alt="Ambiente da clínica"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Ambiente
            </p>

            <h3 className="text-5xl font-light mt-4 leading-tight">
              Conforto e sofisticação
              <br />
              em cada detalhe
            </h3>

            <div className="mt-10 space-y-5">
              {[
                "Ambiente acolhedor",
                "Equipamentos modernos",
                "Experiência confortável",
                "Atendimento humanizado",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={18} />
                  <span className="text-zinc-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <h3 className="text-4xl font-light">
          Agende sua avaliação
        </h3>

        <p className="mt-4 text-zinc-500">
          Fale com nossa equipe e cuide do seu sorriso.
        </p>

        <a
          href="https://wa.me/5500000000000"
          className="inline-flex mt-8 bg-zinc-900 text-white px-8 py-4 rounded-full text-sm items-center gap-2"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/5500000000000"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl"
      >
        <MessageCircle size={22} />
      </a>

    </div>
  );
}