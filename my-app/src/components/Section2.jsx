export default function Section2() {
  return (
    <section className="w-full text-white flex flex-col gap-10 container">
      <div className="max-w-3xl justify-center mx-auto p-4 rounded-lg md:flex-nowrap flex gap-5 items-center flex-wrap">
        <div className="bg-mustard flex items-center justify-center rounded-md size-24 md:size-16  p-4  shrink-0 mustard-container">
          <img
            src="/images/STARICON.gif"
            alt="Ícone de Estrela"
            className="size-16 md:size-10 object-contain"
          />
        </div>

        <h5 className="text-sm leading-relaxed text-center sm:text-left">
          Nesta fase, você vai aprender sobre a educação tecnológica e como ela
          se consolidou na Educação Básica. Além disso, vai entender como a{" "}
          <strong>BNCC da Computação</strong> visa promover o desenvolvimento
          das competências digitais e computacionais na Educação Básica.
        </h5>
      </div>

      <div className="w-full max-w-[1178px] mx-auto bg-[#F5FFE8]">
        <div className="bg-[#F5FFE8] p-5 ">
          <img
            src="/images/girl-laptop.jpg"
            alt="Menina com tablet"
            className="w-full h-60 object-cover border-[2px] border-brown"
          />
        </div>
        <div className="flex items-center justify-center p-4">
          <p className="text-center max-w-3xl text-[13px] text-brown leading-relaxed">
            As mudanças educacionais têm revelado uma crescente preocupação com
            a realidade escolar e o desenvolvimento de habilidades emocionais,
            também conhecidas como <strong>soft skills</strong>.
          </p>
        </div>
      </div>

      <div className="w-full  m-20 max-w-[1178px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        <img src="/images/BNCICON.png" alt="BNCC" className="w-64 h-auto" />

        <div className="max-w-xl">
          <h1 className="text-yellow-400 font-pixelBold mb-4">
            A BASE NACIONAL COMUM <br className="hidden md:block" /> CURRICULAR
            (BNCC)
          </h1>
          <div className="text-gray-200 text-[16px] leading-relaxed">
            A Base Nacional Comum Curricular (BNCC) reflete o movimento de
            transformação digital. Ela é composta por dez competências gerais
            relacionadas aos direitos de aprendizagem e desenvolvimento. No
            contexto da educação tecnológica, a quinta competência se destaca
            por tratar da cultura digital. Espera-se que os estudantes de todos
            os níveis da Educação Básica sejam capazes de:
          </div>
        </div>
      </div>
    </section>
  );
}
