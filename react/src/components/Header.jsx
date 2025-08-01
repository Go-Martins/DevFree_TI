function Header({ aoClicarMenu }) {
  return (
    <section className="relative bg-verdeOliva w-screen flex justify-between px-2 items-center">
      <h1 className="font-aldirch font-medium text-medio text-bege">
        DevFree_TI
      </h1>
      <button
        onClick={aoClicarMenu}
        className="p-2 focus:rotate-180 transition-all duration-500 enabled:hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:rotate-0 z-50"
      >
        <img
          className="size-14"
          src="/menu-align-justify.svg"
          alt="Botão do menu"
        />
      </button>
    </section>
  );
}

export default Header;
