const DropDownMenu = () => {
  return (
    <div className="dropDownMenu flex flex-col bg-bege shadow-lg rounded-lg">
      <ul class="dropDownMenuLista flex flex-col gap-6 p-4 m-1.5 font-poppins bg-verdeOliva shadow-lg rounded-lg">
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
