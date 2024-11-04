import React from "react";

const Header = () => {
  return (
    <div className="relative bg-[url('https://www.barranquilla.gov.co/wp-content/uploads/2018/05/fb6a8430libro-e1527563753747.jpg')] bg-cover bg-center">
      {" "}
      <div className=" h-auto flex flex-col mx-auto max-w-7xl">
        <div className="absolute inset-0 bg-[rgba(81,177,255,0.326)]  h-full"></div>
        <nav className="flex justify-between items-center px-4 py-3 z-10 relative">
          <img src="img/logo.png" width={"100px"} alt="" />
          <ul className="md:flex flex-grow justify-end hidden">
            <a
              href="#services"
              className="m-3 cursor-pointer text-white font-bold hover:text-teal-300 hover:font-bold"
            >
              Servicios
            </a>
            <a
              href="#products"
              className="m-3 cursor-pointer text-white font-bold hover:text-teal-300 hover:font-bold"
            >
              Productos
            </a>
            <a className="m-3 cursor-pointer text-white font-bold hover:text-teal-300 hover:font-bold">
              Proyectos
            </a>
            <a className="m-3 cursor-pointer text-white font-bold hover:text-teal-300 hover:font-bold">
              Sobre nosotros
            </a>
          </ul>
          <img
            className="md:hidden"
            src="icon/bars.svg"
            width={"30px"}
            height={"30px"}
          />
        </nav>
        <div className="flex flex-col md:flex-row justify-center mb-10 mx-auto z-10 relative">
          <div className="flex flex-col max-w-md mx-auto px-5 mt-10 text-white">
            <h3 className="text-3xl mb-2">Lorem Ipsum Elit.</h3>
            <h1 className="text-6xl font-bold mb-2">Equipos</h1>
            <p className="font-bold text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              asperiores exercitationem omnis, id quidem blanditiis itaque culpa
              vitae molestiae dolor magnam sequi hic magni totam earum veniam
              dignissimos, porro dolore?
            </p>
            <div className="flex mt-10">
              <a
                href="#contact"
                className="py-2 px-3 font-bold border-2 border-white mr-1 hover:bg-teal-300 bg-teal-300 bg-opacity-40 rounded-2xl"
              >
                Contactanos
              </a>
              <a
                href="#"
                className="py-2 px-3 font-bold border-2 border-white hover:bg-teal-300 bg-teal-300 bg-opacity-40 rounded-2xl"
              >
                Cotiza Aquí!!
              </a>
            </div>
          </div>
          <img src="img/airesportada.png" width={"450px"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
