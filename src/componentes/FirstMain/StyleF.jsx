function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="text-3xl pt-[10px] pb-[10px] pl-[70px] pr-[70px] relative"
    >
      {props.children}
    </button>
  );
}

function Lista(props) {
  return (
    <li className="inline-block m-1 bg-white text-black">{props.children} </li>
  );
}

export default Button;
export { Lista };
