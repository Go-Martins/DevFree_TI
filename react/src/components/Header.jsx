import { Menu } from "lucide-react";

function Header() {
  return (
    <div class="bg-stone-500 w-full h-16 flex justify-end p-2">
      <button>
        <Menu color="#FFFFFF" class="size-11" />
      </button>
    </div>
  );
}

export default Header;
