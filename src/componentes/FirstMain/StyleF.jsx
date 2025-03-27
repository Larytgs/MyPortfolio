function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="text-3xl pt-[10px] pb-[10px] pl-[70px] pr-[70px] relative 
      max-md:text-[1.4em] 
      max-md:py-2 max-md:px-4 
      max-md:w-[100%]"
    >
      {props.children}
    </button>
  );
}

function Lista(props) {
  return (
    <li
      className="inline-block m-1 bg-white text-black 
    max-md:flex-1 
    max-md:flex"
    >
      {props.children}{" "}
    </li>
  );
}

export default Button;
export { Lista };
