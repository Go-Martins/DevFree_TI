function DropDownMenu({ aberto, refMenu }) {
  return (
    <div
      ref={refMenu}
      className={`
        absolute top-17 right-0 
        w-44 bg-azulEscuro/45 text-white z-50
        transition-transform duration-300 ease-in-out
        ${
          aberto
            ? "opacity-100 translate-y-[0rem]"
            : "opacity-0 scale-0 -translate-y-[2rem] pointer-events-none"
        }
      `}
    >
      <ul className="bg-verdeOliva p-4 space-y-6 m-2 font-poppins text-base">
        <li>
          <a href="#">Serviços</a>
        </li>
        <li className="border-y border-white py-4">
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
