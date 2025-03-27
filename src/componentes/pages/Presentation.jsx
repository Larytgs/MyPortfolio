import Subtitulo from "../styles/Subtitulo";
import Section, { Text } from "../styles/Section";

function Presentation() {
  return (
    <Section>
      <section className="flex gap-7 max-md:block max-md:text-center max-md:my-0 max-mx:ml-12">
        <figure>
          <img
            className="w-[35rem] m-auto cursor-zoom-in transition-transform duration-500 hover:scale-110
            max-md:w-[450px]"
            src="/img/Tendencias-de-tecnologia-2023-Capa.jpg"
            alt=""
          />
        </figure>

        <div className="m-auto text-center">
          <Subtitulo>Um pequeno palco em meio à imensidão cósmica.</Subtitulo>
          <Text>
            Olá, me chamo Laryssa (ou Lary😜), tenho 26 anos e sou de Itapoá-SC.
            <br />
            Sou graduada em Análises e desenvolvimento de sistemas, estudo
            programação desde 2020,com ênfase em desenvolvimento web.
            <br />
            Atualmente estou finalizando Pós-Graduação em Front-end.
          </Text>
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
