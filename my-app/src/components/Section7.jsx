export default function Section7() {
  return (
    <section className="container text-white font-sans overflow-hidden text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-6">
        <div className="text-white/90 max-w-sm mx-auto">
          Agora que aprendeu um pouco mais sobre educação tecnológica, temos{" "}
          <span className="font-bold text-white">
            uma missão especial para você.
          </span>
        </div>

        <div className="bg-[#F3FDE8] text-black font-bold text-sm md:text-base px-6 py-4 rounded-md border border-black inline-block shadow-lg transition-transform hover:scale-105 cta-box">
          <div className="flex items-center gap-4">
            <img
              src="images/MEDALBLOCK.png"
              alt="Medal Icon"
              className="w-16 h-16"
            />
            <span className="text-left">
              Comece o jogo, enfrente os desafios e <br />
              recupere a medalha do Super ATE!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
