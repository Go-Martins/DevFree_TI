import { Link } from "react-router-dom";

function DropDownMenu({ aberto, refMenu }) {
  return (
    <div className="relative">
      <div
        ref={refMenu}
        className={`
        absolute top-17 right-0
        w-44 bg-azulEscuro/45 text-white z-40
        transition-transform duration-300 ease-in-out
        ${
          aberto
            ? "opacity-100 -translate-x-[0rem]"
            : "opacity-80 -translate-x-[-11rem]"
        }
      `}
      >
        <ul className="bg-azulEscuro p-4 space-y-6 m-2 font-poppins text-base">
          <li>
            <a
              className="hover:text-pequeno duration-150 ease-out"
              href="#services"
            >
              Serviços
            </a>
          </li>
          <li className="border-y border-white py-4">
            <a
              className="hover:text-pequeno duration-150 ease-out"
              href="#contact"
            >
              Contato
            </a>
          </li>
          <li>
            <Link
              className="hover:text-pequeno duration-150 ease-out"
              to="/about"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDownMenu;
