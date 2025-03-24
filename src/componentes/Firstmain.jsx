function Firstmain() {
  return (
    <section className="mb-6 p-5 mt-14">
      <section className="flex justify-between ">
        <article className="m-auto p-5 text-center">
          <article>
            <h1 className=" text-[2.2em] mb-5 text-left font-sans">
              Laryssa Tortato Gomes da Silva
              <br />
              <span className="text-[0.8em] font-thin">
                Desenvolvedora Web Front end
              </span>
            </h1>
            <br />
            <div className="flex gap-4 items-center">
              <a
                className="inline-flex gap-1 bg-[#181717] p-3 rounded-xl"
                href="/img/CurriculoLaryssa.pdf"
                target="_blank"
              >
                Download CV
                <img
                  className="w-[20px] h-[20px]"
                  src="/img/logo/icons8-download-24.png"
                  alt="Curriculo"
                />
              </a>
              <p className="block w-[500px] font-serif text-[1.2em]">
                ”Transformando sonhos em conquistas; linhas de código em
                experiências memoráveis.”
              </p>
            </div>
          </article>
        </article>

        <figure className="relative m-auto ml-[-50px]">
          <img
            className="w-[350px] rounded-xl backdrop-filter: opacity-70
"
            src="/img/logo/minhafoto2.jpg"
            alt="minha foto"
          />
          <figcaption className="absolute text-gray-300 top-[89%] left-[20%]">
            Laryssa Tortato Gomes da Silva
          </figcaption>
        </figure>
      </section>
    </section>
  );
}

export default Firstmain;
