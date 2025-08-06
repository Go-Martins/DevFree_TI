import Footer from "./Footer";
import Keyframes from "./Animations";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 bg-gradient-to-tr from-preto via-azulEscuro to-preto flex flex-col items-center font-poppins text-base text-justify text- p-8 justify-around">
        <div className="flex flex-col gap-5 justify-around text-center">
          <div className="flex flex-col gap-6 just">
            <h3 className="text-center text-medio">
              Olá, somos a <b>DevFree_TI</b>.
            </h3>
            <div>
              <p className="indent-6">
                Uma empresa de tecnologia focada em desenvolver soluções
                digitais modernas e eficientes. Atuamos na criação de sites,
                landing pages, sistemas web e aplicativos mobile, sempre com o
                compromisso de entregar qualidade e inovação.
              </p>
              <br />
              <p className="indent-6">
                Nosso time é formado por desenvolvedores capacitados e
                atualizados com as tecnologias mais recentes do mercado.
                Contamos também com especialistas em diversas áreas da
                tecnologia — do backend ao frontend, passando por mobile e
                análise de dados.
              </p>
              <br />
              <p className="indent-6">
                {" "}
                Na DevFree_TI, acreditamos que a tecnologia certa, nas mãos
                certas, pode transformar qualquer ideia em um produto de alto
                impacto.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Keyframes />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
