function contactSection() {
  return (
    <section id="contact" className="contactSection text-center flex flex-col gap-8 font-poppins">
      <div class=" bg-cinza flex flex-col items-center justify-center py-10 px-6">
        <h4 class="text-azulEscuro font-poppins font-semibold text-grande text-center">
          Curtiu? Então não perca tempo e solicite seu orçamento através do
          whatsapp
        </h4>
      </div>
      <div className="flex flex-col items-center gap-16 py-8 px-6">
        <a href="https://wa.link/tlw0c4" 
        target="_blank"
            rel="noopener noreferrer"
        class="bg-verdeWhats text-white font-poppins font-medium text-pequeno rounded-full py-5 px-6 flex items-center gap-3 ring-3 ring-verdeEscuro hover:bg-verdeEscuro active:bg-opacity-20 focus:outline-none focus:ring focus:ring-verdeEscuro duration-75">
          <div className="relative group">
            <img src="/Icon-whatsapp.svg" alt="Ícone do Whatsapp" />
          </div>
          Fale pelo Whatsapp
        </a>
        <h5 class="text-azulEscuro text-grande">
          Siga a gente nas redes sociais
        </h5>
        <div class="flex gap-8">
          <a
            href="https://www.linkedin.com/in/gabriel-o-martins/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Icon-linkedin.svg" alt="Ícone do linkedin" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Icon-instagram.svg" alt="Ícone do instagram" />
          </a>
          <a
            href="https://github.com/Go-Martins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Icon-github.svg" alt="Ícone do github" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default contactSection;
