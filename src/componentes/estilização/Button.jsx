function Button(props) {
  return (
    <button className="text-3xl pt-[10px] pb-[10px] pl-[70px] pr-[70px]">
      {props.children}
    </button>
  );
}

export default Button;
