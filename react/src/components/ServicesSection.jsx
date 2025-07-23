import ServicesCard from "./ServicesCard";
import { services } from "../../servicesData";

function ServicesSection() {
  return (
    <section className="services-section bg-azulEscuro my-5 py-10 px-4 text-center flex flex-col">
      <h2>Nossos Serviços</h2>
      <div className="flex flex-col justify-center gap-10 mt-8 items-center relative">
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
