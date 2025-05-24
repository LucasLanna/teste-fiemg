import FloatingBit from "./FloatingBit";

export default function Intro() {
  return (
    <section className="w-full text-white flex flex-col overflow-visible items-center justify-center py-16 relative container">
      <span className="uppercase t tracking-widest text-[36px] text-bege font-pixelBold mb-4">
        Módulo 2
      </span>

      <span className="text-center display mb-8 max-w-[500px] text-[50px] md:text-[65px] leading-tight font-pixelBold text-yellow-400">
        A educação tecnológica na <br className="hidden md:block" /> Educação
        Básica
      </span>

      <div
        className="relative w-full max-w-2xl
        border-[24px] border-[#F0B541]
        shadow-[8px_8px_0px_#3b2027]
        overflow-hidden rounded-md z-10"
      >
        <img
          src="/images/module-video.jpg"
          alt="Professora ensinando alunos"
          className="w-full h-auto object-cover"
        />

        <button className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full p-3 shadow-md hover:scale-105 transition">
            <img
              src="/images/PLAYBUTTON.png"
              alt="Play Button"
              className="w-full h-auto object-contain"
            />
          </div>
        </button>
      </div>

      <FloatingBit
        src="/images/bl-1.png"
        width="w-6"
        style={{ top: "38%", left: "10%" }}
        animation="3s"
        className="hidden lg:block"
      />

      <FloatingBit
        src="/images/bl-2.png"
        width="w-5"
        style={{ top: "60%", right: "15%" }}
        animation="4s"
        className="hidden lg:block"
      />

      <FloatingBit
        src="/images/bl-3.png"
        width="w-8"
        style={{ bottom: "35%", right: "0%" }}
        animation="2.5s"
        className="hidden lg:block"
      />

      <img
        src="/images/block-side.png"
        className="w-[300px] object-contain absolute -left-95 bottom-15 z-[-1]"
      />

      <img
        src="/images/block-side.png"
        className="w-[300px] object-contain absolute -right-95 bottom-15 z-[-1] scale-x-[-1]"
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
