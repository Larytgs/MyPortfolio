import Button, { Lista } from "./estilização/First";

function Firstmain() {
  return (
    <section className="mb-6 p-5 mt-14">
      <section className="flex justify-between ">
        <article className="m-auto p-5 text-center">
          <article>
            <h1 className=" text-[2.8em] mb-5 text-left font-serif tracking-tight leading-none">
              Laryssa Tortato Gomes da Silva
              <br />
              <span className="text-[0.7em] font-thin text-[#797676]">
                Desenvolvedora Web Front end
              </span>
            </h1>
            <br />
            <div className="flex gap-4 items-center">
              <a
                className="inline-flex gap-2 bg-[#181717] p-3 rounded-xl"
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
              <p className="block w-[450px] font-serif text-[1.2em]">
                ”Transformando sonhos em conquistas; linhas de código em
                experiências memoráveis.”
              </p>
            </div>
          </article>
        </article>

        <figure className="relative m-auto ml-[-50px]">
          <img
            className="minhaft w-[350px]"
            src="/img/logo/minhafoto2.jpg"
            alt="minha foto"
          />
          <figcaption className="absolute text-gray-300 top-[89%] left-[20%]">
            Laryssa Tortato Gomes da Silva
          </figcaption>
        </figure>
      </section>

      <section className="justify-start">
        <div className="justify-center flex mt-28 gap-2">
          <img
            className="h-[170px]"
            src="https://github-readme-stats.vercel.app/api?username=larytgs&show_icons=true&theme=github_dark&include_all_commits=true&count_private=true"
          />
          <img
            className="h-[170px]"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=larytgs&layout=compact&langs_count=16&theme=github_dark"
          />
        </div>
      </section>

      <div className="mt-10">
        <ul className="text-center">
          <Lista>
            <a href="#tabela1">
              <Button>Apresentação</Button>
            </a>
          </Lista>
          <Lista>
            <a href="#tabela2">
              <Button>Habilidades</Button>
            </a>
          </Lista>
          <Lista>
            <a href="#tabela3">
              <Button>Conhecimentos</Button>
            </a>
          </Lista>
          <Lista>
            <a href="#tabela4">
              <Button>Projetos</Button>
            </a>
          </Lista>
        </ul>
      </div>
    </section>
  );
}

export default Firstmain;
