import FloatingBit from "../components/FloatingBit";

export default function Section3() {
  return (
    <section className="relative w-full bg-[#562185] text-white py-10 overflow-hidden">
      <div className="relative container py-12 text-center">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <img
            src="/images/PLUSBLOCK.png"
            alt="Ícone de Bloco"
            className="w-[50px] h-auto object-cover"
          />
        </div>

        <FloatingBit
          src="/images/bl-4.png"
          width="w-5"
          style={{ top: "16px", left: "16px" }}
          animation="3s"
        />

        <FloatingBit
          src="/images/bl-2.png"
          width="w-5"
          style={{ bottom: "16px", right: "16px" }}
          animation="3.5s"
          className="rotate-90"
        />

        <h4
          className="
            text-base sm:text-lg md:text-xl
            leading-relaxed font-semibold text-white mb-6
            mx-auto
            w-full max-w-[900px]
          "
        >
          “Compreender, utilizar e criar tecnologias digitais de informação e
          comunicação de forma crítica, significativa, reflexiva e ética nas
          diversas práticas sociais (incluindo as escolares) para se comunicar,
          acessar e disseminar informações, produzir conhecimentos, resolver
          problemas e exercer protagonismo e autoria na vida pessoal e coletiva”
        </h4>

        <p className="text-sm text-white/80">
          BRASIL. Ministério da Educação. Base Nacional Comum Curricular.
          Brasília, DF: MEC, 2017.
          <br />
          Disponível em:{" "}
          <a
            href="http://basenacionalcomum.mec.gov.br/"
            className="underline text-white"
          >
            http://basenacionalcomum.mec.gov.br/
          </a>
          . Acesso em: 13 set. 2024.
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
