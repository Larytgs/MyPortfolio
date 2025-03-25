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

export default Section;
export { Text };
