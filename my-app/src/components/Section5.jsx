import { useState } from "react";
import FloatingBit from "../components/FloatingBit";

const competencies = [
  {
    id: 1,
    name: "Pensamento Computacional",
    description:
      "Refere-se à habilidade de compreender, analisar, definir, modelar, resolver, comparar e automatizar problemas e suas soluções de maneira metódica e sistemática. Isso inclui o desenvolvimento da capacidade de criar e adaptar algoritmos, aplicando fundamentos da computação para impulsionar e aprimorar a aprendizagem, além de estimular o pensamento crítico e criativo em diversas áreas do conhecimento.",
  },
  {
    id: 2,
    name: "Mundo Digital",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Paisis, filhis, espiritis santis. Atirei o pau no gatis, per gatis num morreus. Diuretics paradis num copo é motivis de denguis. Viva Forevis aptent taciti sociosqu ad litora torquent.",
  },
  {
    id: 3,
    name: "Cultura Digital",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Paisis, filhis, espiritis santis. Atirei o pau no gatis, per gatis num morreus. Diuretics paradis num copo é motivis de denguis. Viva Forevis aptent taciti sociosqu ad litora torquent.",
  },
];

export default function Section5() {
  const [selectedId, setSelectedId] = useState(1);

  const selected = competencies.find((c) => c.id === selectedId);

  return (
    <section className="w-full container text-white py-10 relative z-30">
      <div className="max-w-[900px] mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-300 tracking-wide drop-shadow-md mb-2">
          ESTRUTURA DA BNCC
        </h1>
        <p className="text-white/90 mb-10 max-w-xl mx-auto">
          Conheça cada uma das três competências da BNCC da Computação
          interagindo com o gráfico abaixo:
        </p>

        <div className="bg-gradient-to-b  from-[#F5FFE8] to-[#CCD6BF] text-black font-bold py-2 px-6 rounded-md text-xl mb-12 shadow-md w-full text-center">
          COMPUTAÇÃO
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {competencies.map((comp) => (
            <div
              key={comp.id}
              className={`flex flex-col items-center gap-6 cursor-pointer transition-transform hover:scale-105 ${
                selectedId === comp.id ? "scale-110" : ""
              }`}
              onClick={() => setSelectedId(comp.id)}
            >
              <span
                className={`text-sm font-bold px-3 py-2 rounded-md shadow ${
                  selectedId === comp.id
                    ? "bg-[#F0B541] text-black"
                    : "bg-gradient-to-b  from-[#F5FFE8] to-[#CCD6BF] text-black"
                }`}
              >
                {comp.name}
              </span>
              <img
                src="images/QUESTIONBLOCK.png"
                alt="Question Block"
                className="h-13"
              />
              <div className="flex gap-1 mt-2">
                <img src="images/FLOORASSET.png" alt="Floor" className="h-13" />
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div
            className="
      bg-[#F3FDE8] text-black mt-12 p-6 rounded-lg md:h-[249px] shadow-lg w-full max-w-[360px] sm:max-w-[500px] md:max-w-[900px] mx-auto relative overflow-hidden transition-all duration-300"
          >
            <h3 className="font-bold text-lg mb-2">{selected.name}</h3>
            <p className="text-sm leading-relaxed overflow-y-auto pr-2">
              {selected.description}
            </p>
            <button className="absolute top-3 right-3 text-gray-600 hover:text-black">
              ✖
            </button>
          </div>
        )}
      </div>

      <FloatingBit
        src="/images/bl-2.png"
        width="w-5"
        style={{ bottom: "180px", right: "20px" }}
        animation="3s"
        className="rotate-90 hidden lg:block"
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
