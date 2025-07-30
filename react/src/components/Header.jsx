function Header({ aoClicarMenu }) {
  return (
    <section class="relative bg-verdeOliva w-screen flex justify-between px-2 items-center">
      <h1 class="font-aldirch font-medium text-medio text-bege">DevFree_TI</h1>
      <button
        onClick={aoClicarMenu}
        class="p-2 focus:rotate-180 transition-all duration-500 enabled:hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:rotate-0 z-50"
      >
        <img
          class="size-14"
          src="/menu-align-justify.svg"
          alt="Botão do menu"
        />
      </button>
    </section>
  );
}

export default Header;
