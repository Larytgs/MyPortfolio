import Subtitulo from "./estilização/Subtitulo";
import Section from "./estilização/Section";

function Presentation() {
  return (
    <Section>
      <section className="flex gap-7">
        <figure>
          <img
            className="w-[35rem] m-2"
            src="/img/Tendencias-de-tecnologia-2023-Capa.jpg"
            alt=""
          />
        </figure>

        <div className="m-auto text-center">
          <Subtitulo>Um pequeno palco em meio à imensidão cósmica.</Subtitulo>
          <p className="text-xl text-left pt-5 pb-5 pl-0 pr-0">
            Olá, me chamo Laryssa (ou Lary😜), tenho 26 anos e sou de Itapoá-SC.
            <br />
            Sou graduada em Análises e desenvolvimento de sistemas, estudo
            programação desde 2020,com ênfase em desenvolvimento web.
            <br />
            Atualmente estou finalizando Pós-Graduação em Front-end.
          </p>
          <ul className="flex justify-evenly text-center">
            <li>
              <p className="text-2xl underline underline-offset-4 text-left">
                Nome
              </p>
              <span className="text-lg">Laryssa Tortato Gomes da Silva</span>
            </li>
            <li>
              <p className="text-2xl underline underline-offset-4 text-left">
                Email
              </p>
              <span className="text-lg">siteslarytgs@gmail.com</span>
            </li>
          </ul>
        </div>
      </section>
    </Section>
  );
}

export default Presentation;
