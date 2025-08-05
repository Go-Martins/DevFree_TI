import Keyframes from "./Animations";

function CartText() {
  return (
    <section className="pb-16 space-y-8 bg-bege flex flex-col items-center justify-center text-center">
      <div className="bg-gradient-to-tr from-preto via-azulEscuro to-preto w-full flex justify-center items-center font-poppins font-medium">
        <p className="p-4 text-base">Damos asas a sua imaginação</p>
      </div>
      <div className="flex flex-col space-y-4 bg-bege px-2">
        <p className="text-azulEscuro font-poppins font-semibold text-pequeno">
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
      <button className="bg-azulEscuro w-4/5 rounded-xl min-[640px]:w-[400px]">
        <p className="text-bege font-poppins font-medium text-base text-center p-4 min-[640px]:px-6">
          Então se liga nos nossos projetos abaixo
        </p>
      </button>
    </section>
  );
}

export default CartText;
