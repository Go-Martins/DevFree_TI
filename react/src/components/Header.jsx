import { Menu } from "lucide-react";

function Header() {
  return (
    <div class="bg-verdeOliva w-full h-13 flex justify-end p-2">
      <button>
        <img
          class="size-12"
          src="/menu-align-justify.svg"
          alt="Botão do menu"
        />
      </button>
    </div>
  );
}

export default Header;
