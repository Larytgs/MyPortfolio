import Section, { Cards } from "./Section";
import Subtitulo from "./Subtitulo";

//Conhecimentos
function Knowledge() {
  return (
    <Section>
      <section className="text-center m-auto">
        <Subtitulo>Conhecimentos</Subtitulo>
        {/* tirei o carrossel */}
        <div>
          {/* <button class="control control-left" onclick="moverCarrossel(-1)">
            &#10094; </button>*/}
          <div className="m-auto grid grid-cols-2 gap-4">
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/html5-original.svg"
                alt="html5"
              />
              <h3 className="text-xl mt-6 mb-3 ml-0 mr-0">HTML5</h3>
              <p className="font-bold text-lg text-white">
                HTML5 é uma linguagem de marcação de hipertexto, que usamos para
                marcar os elementos da página e construí-la.
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/css3-original.svg"
                alt="css3"
              />
              <h3 className="text-xl mt-6 mb-3 ml-0 mr-0">CSS3</h3>
              <p className="font-bold text-lg text-white">
                CSS3 é uma linguagem de estilo usada para descrever a
                apresentação dos elementos da página os estilizando.{" "}
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/javascript-original.svg"
                alt="JS"
              />
              <h3 className="text-xl font-bold mt-6 mb-3 ml-0 mr-0">
                JavaScript
              </h3>
              <p className="text-lg font-bold text-white">
                JavaScript é uma linguagem de programação interpretada usada no
                desenvolvimento web para descrever funcionalidades e
                comportamentos da página.
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/git-original.svg"
                alt="GIT"
              />
              <h3 className="text-xl mt-5 mb-5 ml-0 mr-0">GIT</h3>
              <p className="font-bold text-lg text-white">
                Git é um sistema de controle de versão distribuído amplamente
                utilizado no desenvolvimento de software.
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/github-original.png"
                alt="GITHUB"
              />
              <h3 className="text-xl mt-5 mb-5 ml-0 mr-0">GitHub</h3>
              <p className="font-bold text-lg text-white">
                O GitHub é uma plataforma online que permite armazenar,
                compartilhar e colaborar em projetos de software. É uma
                ferramenta muito utilizada por desenvolvedores.
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/postman-original.svg"
                alt="Postman"
              />
              <h3 className="text-xl mt-5 mb-5 ml-0 mr-0">Postman</h3>
              <p className="font-bold text-lg text-white">
                O Postman é uma plataforma de desenvolvimento e teste de APIs.
                Ele é usado por desenvolvedores para criar, testar, documentar e
                compartilhar APIs.
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="/img/logo/conhecimentos/vscode-original.svg"
                alt="VSCODE"
              />
              <h3 className="text-xl mt-5 mb-5 ml-0 mr-0">VSCODE</h3>
              <p className="font-bold text-lg text-white">
                Visual Studio Code (VS Code) é um editor de código-fonte
                gratuito e de código aberto desenvolvido pela Microsoft.
              </p>
            </Cards>
            {/* <button class="control control-right" onclick="moverCarrossel(1)">
                &#10095; </button> */}
          </div>
          <a
            href="https://github.com/Larytgs"
            target="_blank"
            className="underline-offset-0 text-center block mt-10 text-lg"
          >
            <span>Ver mais</span>
          </a>
        </div>
      </section>
    </Section>
  );
}

export default Knowledge;
