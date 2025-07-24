import { Menu } from "lucide-react";

function Header() {
  return (
    <section class="bg-verdeOliva w-screen flex justify-between px-2 items-center">
      <h1 class="font-aldirch font-medium text-medio text-bege">DevFree_TI</h1>
      <button>
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
