function ServicesCard({ icon, title, description }) {
  return (
    <div>
      <img src={icon} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
