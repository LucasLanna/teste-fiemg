export default function Section4() {
  return (
    <section className="w-full text-white py-20 container">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="relative">
          <img
            src="/images/boy-pattern.png"
            alt="Garoto sorrindo"
            className="
              w-[280px]
              sm:w-[360px]
              md:w-[380px]
              lg:w-[440px]
              xl:w-[500px]
              h-auto object-cover rounded
            "
          />
        </div>

        <div className="flex-1 max-w-[600px] md:max-w-[520px] space-y-4">
          <div className="text-[15px] sm:text-[16px] md:text-base lg:text-lg leading-relaxed text-center md:text-left">
            A competência da BNCC que descreve os objetivos da educação
            tecnológica é desafiadora, pois propõe que os estudantes sejam
            capazes de dominar as principais funcionalidades do universo
            digital.
          </div>
          <p className="text-[15px] sm:text-[16px] md:text-base lg:text-lg leading-relaxed text-center md:text-left">
            Esse domínio deve ser desenvolvido de maneira segura, qualificada e
            ética, por meio de um pensamento lógico-computacional, que permita
            uma reflexão crítica sobre os impactos das Tecnologias Digitais da
            Informação e Comunicação (TDICs) na sociedade.
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-3xl mx-auto mt-12 text-white/90 text-sm text-center md:text-left px-4 sm:px-0">
        <p>
          Em outubro de 2022, o Ministério da Educação homologou o parecer
          CNE/CEB nº 2/2022, que complementou a BNCC. Conhecido como BNCC da
          Computação, esse parecer acrescentou à BNCC as normas sobre o ensino
          de computação na Educação Básica. A BNCC da Computação organiza as
          suas competências em três eixos: Pensamento Computacional, Mundo
          Digital e Cultura Digital.
        </p>
      </div>
    </section>
  );
}
