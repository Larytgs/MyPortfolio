function Skills() {
  //Habilidades
  return (
    //repetido 8a linha de baixo
    <section className="mt-15 mb-20 p-7">
      <div class="habilidades">
        <div class="textHabilidade">
          <h3 class="habilid-title">Aprendizado Contínuo.</h3>
          <p class="habilid-text">
            Como Desenvolvedor Web Front-end, acredito na importância do
            aprendizado contínuo e estou constantemente aprimorando minhas
            habilidades. Fiz cursos complementares, como Python, PHP, MySQL,
            HTML5, CSS3, Javascript, atualmente Angular.
            <br />
            Além disso, sou proativa, resolvo problemas de forma eficaz e
            valorizo o trabalho em equipe para entregar resultados de alta
            qualidade.
          </p>
          <ul class="skill-list">
            <li>
              <div class="skill-wrapper">
                <span class="span">Proatividade e Determinação</span>
                <span class="value">100%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 100%"></div>
              </div>
            </li>

            <li>
              <div class="skill-wrapper">
                <span class="span">Desenvolvimento de Websites</span>
                <span class="value">90%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 90%"></div>
              </div>
            </li>
            <li>
              <div class="skill-wrapper">
                <span class="span">Web Design</span>
                <span class="value">85%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 85%"></div>
              </div>
            </li>
          </ul>
          <figure class="img-holder">
            <img src="/img/html-css-js.jpg" alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Skills;
