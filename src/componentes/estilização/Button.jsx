function Button(props) {
  return (
    <button className="text-3xl pt-[10px] pb-[10px] pl-[80px] pr-[80px]">
      {props.children}
    </button>
  );
}

export default Button;
