function ServicesCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-6 font-poppins">
      <img src={icon} alt={title} />
      <div className="flex flex-col gap-6">
        <h3 className="text-pequeno font-semibold text-justify">{title}</h3>
        <p className="text-base text-justify">{description}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
