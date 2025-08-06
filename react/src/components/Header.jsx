import { Link } from "react-router-dom";
import Keyframes from "./Animations";

function Header({ aoClicarMenu, aoClicarNav }) {
  return (
    <section className="relative bg-gradient-to-tr from-preto via-azulEscuro to-preto w-screen h-16 flex justify-between px-4 items-center">
      <div className="flex items-center text-pequeno font-aldirch font-medium">
        <Keyframes />
        <h1>DevFree_TI</h1>
      </div>
      <button
        onClick={aoClicarMenu}
        className="focus:rotate-180 transition-all duration-500 enabled:hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:rotate-0 z-50 block laptop:hidden"
      >
        <img
          className="size-14"
          src="/menu-align-justify.svg"
          alt="Botão do menu"
        />
      </button>
      <nav
        onClick={aoClicarNav}
        className="flex font-poppins text-base gap-16 px-10 max-laptop:hidden"
      >
        <a
          className="hover:text-pequenoHover duration-150 ease-out"
          href="#services"
        >
          Serviços
        </a>
        <a
          className="hover:text-pequenoHover duration-150 ease-out"
          href="#contact"
        >
          Contato
        </a>
        <Link
          className="hover:text-pequenoHover duration-150 ease-out"
          to="/about"
        >
          Sobre
        </Link>
      </nav>
    </section>
  );
}

export default Header;
