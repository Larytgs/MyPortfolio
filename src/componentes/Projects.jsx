import Section, { TitleH3 } from "./estilização/Section";
import Subtitulo from "./estilização/Subtitulo";

function Projects() {
  return (
    <Section>
      <section className="text-center m-auto">
        <Subtitulo>Projetos</Subtitulo>

        <div className=" inline-grid grid-cols-2 gap-2 mb-[5%] m-2.5">
          <div class="proj">
            <div class="service-proj" className="relative">
              <div className="w-[500px] rounded-2xl">
                <img src="/img/projetos/agencia_de_sites.png" alt="html5" />
              </div>
              <a href="http://agencia_de_sites.larytgs.com.br/" target="_blank">
                <TitleH3 class="H3">Site para divulgar o meu trabalho.</TitleH3>
              </a>
            </div>
          </div>
          <div class="proj">
            <div class="service-proj" className="relative">
              <div className="w-[500px] rounded-2xl">
                <img
                  src="/img/projetos/vittCarService.png"
                  alt="vittCarService"
                />
              </div>
              <a href="http://vitticarservice.com.br" target="_blank">
                <TitleH3 class="H3">Site para uma Mecânica Automotiva.</TitleH3>
              </a>
            </div>
          </div>
          <div class="proj">
            <div class="service-proj" className="relative">
              <div className="w-[500px] rounded-2xl">
                <img
                  src="/img/projetos/siteVeterinaria.png"
                  alt="siteVeterinaria"
                />
              </div>
              <a
                href="https://larytgs.github.io/Projeto-Veterinaria-Sao-Lourenco/"
                target="_blank"
              >
                <TitleH3 class="H3">
                  Site de Veterinaria, ainda em andamento.
                </TitleH3>
              </a>
            </div>
          </div>
          <div class="proj">
            <div class="service-proj" className="relative">
              <div className="w-[500px] rounded-2xl">
                <img
                  src="/img/projetos/siteBiscoitosDecorados .png"
                  alt="siteBiscoitosDecorados"
                />
              </div>
              <a
                href="https://larytgs.github.io/site-biscoitos-decorados/"
                target="_blank"
              >
                <TitleH3 class="H3">Site Biscoitos Decorados.</TitleH3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}

export default Projects;
