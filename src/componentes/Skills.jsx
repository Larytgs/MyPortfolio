import Subtitulo from "./estilização/Subtitulo";

function Skills() {
  //Habilidades
  return (
    //repetido a linha de baixo
    <section className="mt-15 mb-20 p-7">
      <div className="flex gap-7">
        <div className="m-auto text-center">
          {/*repetido a linha de baixo */}
          <Subtitulo>Aprendizado Contínuo.</Subtitulo>
          <p className="text-xl text-left m-5">
            Como Desenvolvedor Web Front-end, acredito na importância do
            aprendizado contínuo e estou constantemente aprimorando minhas
            habilidades.
            <br />
            Fiz cursos complementares, como Python, PHP, MySQL, HTML5, CSS3,
            Javascript, atualmente React.
            <br />
            <br />
            Além disso, sou proativa, resolvo problemas de forma eficaz e
            valorizo o trabalho em equipe para entregar resultados de alta
            qualidade.
          </p>
          <ul className="m-5">
            <li>
              <div className="flex items-center justify-between mt-7 mb-3">
                <span className="font-bold">Proatividade e Determinação</span>
                <span>100%</span>
              </div>
              <div className="h-1">
                <div className="h-[100%] w-[100%] bg-[#6ad0ff]"></div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between mt-7 mb-3">
                <span className="font-bold">Desenvolvimento de Websites</span>
                <span>90%</span>
              </div>
              <div className="h-1 bg-[#0f0f0f]">
                <div className="h-[90%] w-[90%] bg-[#6ad0ff]"></div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between mt-7 mb-3">
                <span className="font-bold">Web Design</span>
                <span>85%</span>
              </div>
              <div className="h-1 bg-[#0f0f0f]">
                <div className="h-[100%] w-[85%] bg-[#6ad0ff]"></div>
              </div>
            </li>
          </ul>
        </div>
        <figure className="w-[40rem] m-auto">
          <img src="/img/html-css-js.jpg" alt="" />
        </figure>
      </div>
    </section>
  );
}

export default Skills;
