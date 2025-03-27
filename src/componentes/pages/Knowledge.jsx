import Section, { Cards, H3 } from "../estilização/Section";
import Subtitulo from "../estilização/Subtitulo";

//Conhecimentos
function Knowledge() {
  return (
    <Section>
      <section className="text-center m-auto">
        <Subtitulo>Conhecimentos</Subtitulo>
        <div className="mt-5">
          <div className="m-auto grid grid-cols-3 gap-4">
            <Cards>
              <img
                className="w-16"
                src="../../../public/img/logo/conhecimentos/html5-original.svg"
                alt="html5"
              />
              <H3>HTML5</H3>
              <p className="font-bold text-lg text-white">
                HTML5 é uma linguagem de marcação de hipertexto, que usamos para
                marcar os elementos da página e construí-la.
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="../../../public/img/logo/conhecimentos/css3-original.svg"
                alt="css3"
              />
              <H3>CSS3</H3>
              <p className="font-bold text-lg text-white">
                CSS3 é uma linguagem de estilo usada para descrever a
                apresentação dos elementos da página os estilizando.{" "}
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="../../../public/img/logo/conhecimentos/javascript-original.svg"
                alt="JS"
              />
              <H3>JavaScript</H3>
              <p className="text-lg font-bold text-white">
                JavaScript é uma linguagem de programação interpretada usada no
                desenvolvimento web para descrever funcionalidades e
                comportamentos da página.
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="../../../public/img/logo/conhecimentos/git-original.svg"
                alt="GIT"
              />
              <H3>GIT</H3>
              <p className="font-bold text-lg text-white">
                Git é um sistema de controle de versão distribuído amplamente
                utilizado no desenvolvimento de software.
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="../../../public/img/logo/conhecimentos/github-original.png"
                alt="GITHUB"
              />
              <H3>GitHub</H3>
              <p className="font-bold text-lg text-white">
                O GitHub é uma plataforma online que permite armazenar,
                compartilhar e colaborar em projetos de software. É uma
                ferramenta muito utilizada por desenvolvedores.
              </p>
            </Cards>
            <Cards>
              <img
                className="w-16"
                src="../../../public/img/logo/conhecimentos/postman-original.svg"
                alt="Postman"
              />
              <H3>Postman</H3>
              <p className="font-bold text-lg text-white">
                O Postman é uma plataforma de desenvolvimento e teste de APIs.
                Ele é usado por desenvolvedores para criar, testar, documentar e
                compartilhar APIs.
              </p>
            </Cards>
            <div className="bg-[#333] col-span-3 w-full rounded-2xl h-[200px] m-auto align-middle p-4 text-left ">
              <img
                className="w-16"
                src="../../../public/img/logo/conhecimentos/vscode-original.svg"
                alt="VSCODE"
              />
              <H3>VSCODE</H3>
              <p className="font-bold text-lg text-white">
                Visual Studio Code (VS Code) é um editor de código-fonte
                gratuito e de código aberto desenvolvido pela Microsoft.
              </p>
            </div>
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
