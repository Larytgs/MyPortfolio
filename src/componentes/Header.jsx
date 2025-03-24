function Header() {
  return (
    <div id="header">
      <h1 id="h1Header">Dev.Tgs</h1>
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
