//Todas as Seqtions
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
    <div className="ml-3 bg-[#333] rounded-2xl w-[500px] h-[250px] m-auto align-middle p-4 text-left ">
      {props.children}
    </div>
  );
}

export default Section;
export { Text, SkillWrapper, Cards };
