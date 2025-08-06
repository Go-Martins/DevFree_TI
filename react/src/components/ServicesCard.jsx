function ServicesCard() {
  return (
    <section
      id="services"
      className="flex flex-col items-center font-poppins services-section bg-gradient-to-tr from-azulEscuro via-preto to-azulEscuro py-12 pb-20 px-16 mt-4 text-center gap-20 max-tablet:px-0"
    >
      <h2 className="text-grande font-aldirch font-medium">Nossos Serviços</h2>

      <div className="grid-flow-col grid-cols-2 grid items-center justify-items-center gap-[4rem] mx-[1rem] border-b-[1px] pb-16 max-tablet:flex max-tablet:flex-col max-tablet:gap-10 max-tablet:mx-6">
        <img className="" src="/cake.svg" alt="" />
        <div className="flex flex-col gap-6">
          <h3 className="text-pequeno font-semibold text-justify">
            Sites para Eventos ou Lançamentos
          </h3>
          <p className="text-base text-justify">
            Criamos sites impactantes para eventos, lançamentos e campanhas, com
            contagem regressiva, galeria de fotos, integração com redes sociais
            e muito mais.
          </p>
        </div>
      </div>

      <div className="grid-flow-col grid-cols-2 grid items-center justify-items-center gap-[4rem] mx-[1rem] border-b-[1px] pb-16 max-tablet:flex max-tablet:flex-col-reverse max-tablet:gap-10 max-tablet:mx-6">
        <div className="flex flex-col gap-6">
          <h3 className="text-pequeno font-semibold text-justify">
            Aplicativos Mobile Personalizados (Android e iOS)
          </h3>
          <p className="text-base text-justify">
            Desenvolvimento de aplicativos híbridos com foco na experiência do
            usuário, performance e funcionalidades específicas para o seu
            público.
          </p>
        </div>
        <img className="" src="/phone_iphone.svg" alt="" />
      </div>

      <div className="grid-flow-col grid-cols-2 grid items-center justify-items-center gap-[4rem] mx-[1rem] border-b-[1px] pb-16 max-tablet:flex max-tablet:flex-col max-tablet:gap-10 max-tablet:mx-6">
        <img className="" src="/storefront.svg" alt="" />
        <div className="flex flex-col gap-6">
          <h3 className="text-pequeno font-semibold text-justify">
            Sites para Pequenos Negócios e Profissionais Autônomos
          </h3>
          <p className="text-base text-justify">
            Pacotes acessíveis para quem quer começar com um site profissional,
            incluindo WhatsApp integrado, mapa do Google e formulário de
            contato.
          </p>
        </div>
      </div>

      <div className="grid-flow-col grid-cols-2 grid items-center justify-items-center gap-[4rem] mx-[1rem] border-b-[1px] pb-16 max-tablet:flex max-tablet:flex-col-reverse max-tablet:gap-10 max-tablet:mx-6">
        <div className="flex flex-col gap-6">
          <h3 className="text-pequeno font-semibold text-justify">
            Catálogos Online com Pedido via WhatsApp
          </h3>
          <p className="text-base text-justify">
            Sites tipo “cardápio digital” ou “catálogo de produtos”, com botão
            direto para enviar pedido via WhatsApp.
          </p>
        </div>
        <img className="" src="/local_mall.svg" alt="" />
      </div>

      <div className="grid-flow-col grid-cols-2 grid items-center justify-items-center gap-[4rem] mx-[1rem] pb-16 max-tablet:flex max-tablet:flex-col max-tablet:gap-10 max-tablet:mx-6">
        <img className="" src="/trending_up.svg" alt="" />
        <div className="flex flex-col gap-6">
          <h3 className="text-pequeno font-semibold text-justify">
            Landing Pages de Alta Conversão
          </h3>
          <p className="text-base text-justify">
            Páginas otimizadas para captar leads, vender produtos ou serviços
            com estrutura pensada para gerar resultados reais.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesCard;
