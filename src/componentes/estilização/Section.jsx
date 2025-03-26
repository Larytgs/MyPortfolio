//Todas as Sections
function Section(props) {
  return (
    <section className="mt[1%] mb[4%] p-7 align-middle">
      {props.children}
    </section>
  );
}

//Todos os textos
function Text(props) {
  return (
    <p className="text-lg text-left pt-5 pb-5 pl-0 pr-0">{props.children}</p>
  );
}

//skill-wrapper as divs da ul - Skills.jsx
function SkillWrapper(props) {
  return (
    <div className="flex items-center justify-between mt-7 mb-3">
      {props.children}
    </div>
  );
}

//Cards as divs do conhecimentos - Knowledge.jsx
function Cards(props) {
  return (
    <div className=" ml-3 bg-[#333] rounded-2xl w-[400px] h-[280px] m-auto align-middle p-4 text-left ">
      {props.children}
    </div>
  );
}

//H3 dos Cards do conhecimentos - Knowledge.jsx
function H3(props) {
  return <h3 className="text-2xl mt-6 mb-2 ml-0 mr-0">{props.children}</h3>;
}

//H3 dos Projetos - Projects.jsx
function TitleH3(props) {
  return (
    <h3 className="H3 absolute text-[#6ad0ff] text-2xl texto-sm/7 opacity-0 translate-x-[-50%] translate-y-[-80%] transform transition duration-250 ease-in-out">
      {props.children}
    </h3>
  );
}

export default Section;
export { Text, SkillWrapper, Cards, H3, TitleH3 };
