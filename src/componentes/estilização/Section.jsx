//Todas as Seqtions
function Section(props) {
  return <section className="mt-11 mb-20 p-7">{props.children}</section>;
}

//Todos os textos
function Text(props) {
  return (
    <p className="text-lg text-left pt-5 pb-5 pl-0 pr-0">{props.children}</p>
  );
}

//skill-wrapper as divs da ul
function SkillWrapper(props) {
  return (
    <div className="flex items-center justify-between mt-7 mb-3">
      {props.children}
    </div>
  );
}

export default Section;
export { Text, SkillWrapper };
