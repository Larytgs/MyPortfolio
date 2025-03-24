function Header() {
  return (
    <div className="bg-gray-950 flex p-5 justify-between">
      <h1 className="text-sky-600 font-bold text-xl font-mono">Dev.Tgs</h1>
      <div className="flex gap-4 cursor-pointer">
        <a href="https://github.com/Larytgs" target="blank">
          <img src="/img/logo/github.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/laryssa-tortato-7612961a9/"
          target="blank"
        >
          <img src="/img/logo/linkedin.png" />
        </a>
        <a href="https://www.instagram.com/larytgs/" target="blank">
          <img className="mr-4" src="/img/logo/instagram.png" />
        </a>
      </div>
    </div>
  );
}

export default Header;
