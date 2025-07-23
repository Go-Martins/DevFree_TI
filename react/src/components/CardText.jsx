function CartText() {
  return (
    <div className="py-16 px-6 space-y-8 bg-bege flex flex-col items-center justify-center">
      <div className="flex flex-col space-y-4 bg-bege">
        <p className="text-azulEscuro font-poppins font-semibold text-base">
          Deseja criar um
        </p>
        <p className="text-azulEscuro font-poppins font-bold text-grande">
          site ou aplicativo mobile
        </p>
        <p className="text-azulEscuro font-poppins font-semibold text-base">
          para o seu negócio com as
        </p>
        <p className="text-azulEscuro font-poppins font-bold text-grande">
          melhores práticas e ferramentas do mercado?
        </p>
      </div>
      <button class="bg-azulEscuro mx-14 rounded-xl">
        <p className="text-bege font-poppins font-medium text-base text-center p-4">
          Então se liga nos nossos projetos abaixo
        </p>
      </button>
    </div>
  );
}

export default CartText;
