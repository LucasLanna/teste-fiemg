import BackgroundPattern from "./BackgroundPattern";

export default function Section6() {
  return (
    <section className="w-full py-20 relative text-white font-sans">
      <BackgroundPattern />

      <div className="flex-wrap z-40 relative md:flex-nowrap top-0 flex gap-8 item-center justify-center container">
        <div className="flex flex-col justify-center gap-6 max-w-xl ">
          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-300 drop-shadow-md pixel-font">
            COMPUTAÇÃO DA BNCC
          </h1>
          <div className="text-[15px] sm:text-[16px] ">
            O anexo de Computação da BNCC não representa um novo componente
            curricular. As habilidades nele descritas devem ser contextualizadas
            e integradas de forma individualizada e transversal às diversas
            áreas do conhecimento em cada nível de ensino.
          </div>
        </div>

        <img
          src="/images/STUDENTROBOT.png"
          alt="Garota montando robô"
          className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] shrink-0 static"
        />
      </div>
    </section>
  );
}
