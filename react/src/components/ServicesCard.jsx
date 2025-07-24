function ServicesCard({ icon, title, description }) {
  return (
    <div class="flex flex-col items-center gap-6 font-poppins">
      <img src={icon} alt={title} />
      <div class="flex flex-col gap-6">
        <h3 class="text-pequeno font-semibold text-justify">{title}</h3>
        <p class="text-base text-justify">{description}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
