import React from "react";
import SectionReveal from "./SectionReveal";

export default function Trainers() {
  return (
    <section id="formateurs" className="py-20 lg:py-32 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B0E1E] tracking-tight">
              Des experts qui connaissent les réalités du terrain.
            </h2>
            <div className="w-16 h-1 bg-[#4A72FF] mx-auto rounded-full mt-6 mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              La formation est animée par des professionnels disposant d’une expérience opérationnelle en cybersécurité, gouvernance, gestion des risques et systèmes d’information.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Formateur 1 */}
          <SectionReveal>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center h-full">
              <div className="w-32 h-32 rounded-full bg-slate-200 mb-6 overflow-hidden border-4 border-white shadow-lg">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="Formateur 1" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B0E1E] mb-2">[NOM PRÉNOM]</h3>
              <p className="text-[#4A72FF] font-bold text-sm uppercase tracking-wider mb-4">
                [Certification / fonction principale]
              </p>
              <p className="text-gray-600 font-medium leading-relaxed">
                Professionnel de la cybersécurité et de la gouvernance des systèmes d’information, avec une expérience dans la gestion des risques, la mise en œuvre de dispositifs de sécurité et l’accompagnement des organisations.
              </p>
            </div>
          </SectionReveal>

          {/* Formateur 2 */}
          <SectionReveal>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center h-full">
              <div className="w-32 h-32 rounded-full bg-slate-200 mb-6 overflow-hidden border-4 border-white shadow-lg">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="Formateur 2" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B0E1E] mb-2">[NOM PRÉNOM]</h3>
              <p className="text-[#4A72FF] font-bold text-sm uppercase tracking-wider mb-4">
                [Certification / fonction principale]
              </p>
              <p className="text-gray-600 font-medium leading-relaxed">
                Expert en [GRC / audit / cybersécurité / management des risques], intervenant auprès d’organisations dans leurs démarches de sécurité et de conformité.
              </p>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal>
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl font-bold text-[#0B0E1E]">
              Deux experts. Une approche orientée terrain. <br className="hidden md:block"/>
              <span className="text-[#01CE35]">Une même ambition : vous rendre capable de mettre en œuvre.</span>
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
