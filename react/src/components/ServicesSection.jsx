import ServicesCard from "./ServicesCard";
import { services } from "../../servicesData";

function ServicesSection() {
  return (
    <section
      id="services"
      className="services-section bg-gradient-to-tr from-azulEscuro via-preto to-azulEscuro py-12 pb-20 px-8 mt-4 text-center flex flex-col gap-8"
    >
      <h2 className="text-grande font-aldirch font-medium">Nossos Serviços</h2>
      <div className="flex flex-col justify-center gap-20 mt-8 items-center relative">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
