import Footer from "./Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 bg-azulEscuro flex flex-col items-center font-aldirch text-pequeno text-justify p-8">
        <div className="flex flex-col gap-5 justify-around">
          <div className="flex flex-col gap-6 just">
            <div className="text-center text-medio">Sobre a DevFree_TI</div>
            <div>
              A DevFree_TI é uma empresa de tecnologia especializada no
              desenvolvimento de soluções digitais sob medida. Atuamos na
              criação de sites institucionais, landing pages, aplicações web
              completas e aplicativos mobile. Contamos com um time de
              desenvolvedores talentosos, comprometidos com inovação, qualidade
              e resultados.
            </div>
          </div>
          <img src="/logo_devfreeti.png" alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
