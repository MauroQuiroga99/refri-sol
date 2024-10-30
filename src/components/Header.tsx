import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-indigo-800 flex flex-col ">
        <nav className="flex justify-between items-center px-4 py-3 ">
          <img src="img/logo.png" width={"80px"} alt="" />
          <ul className="flex">
            <li className="m-3 text-white font-bold hover:text-teal-300 hover:font-bold ">
              Home
            </li>
            <li className="m-3 text-white font-bold hover:text-teal-300 hover:font-bold ">
              Login
            </li>
            <li className="m-3 text-white font-bold hover:text-teal-300 hover:font-bold ">
              Servios
            </li>
            <li className="m-3 text-white font-bold hover:text-teal-300 hover:font-bold ">
              About
            </li>
            <li className="m-3 text-white font-bold hover:text-teal-300 hover:font-bold ">
              Contacto
            </li>
            <li className="m-3 text-white font-bold hover:text-teal-300 hover:font-bold ">
              Search
            </li>
            <li className="m-3 text-white font-bold hover:text-teal-300 hover:font-bold ">
              Equipos
            </li>
          </ul>
        </nav>
        <div className=" flex justify-center mt- mb-10 ">
          <div className="flex flex-col max-w-md mt-10 text-white">
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
                href="#"
                className="py-4 px-6 font-bold border-2 border-white mr-1 hover:bg-teal-300 hover:text-indigo-800 "
              >
                {" "}
                Contactanos
              </a>
              <a
                href="#"
                className="py-4 px-6 font-bold border-2 border-white hover:bg-teal-300 hover:text-indigo-800"
              >
                {" "}
                Cotiza Aquí!!
              </a>
            </div>
          </div>
          <img src="img/airesportada.png" width={"500px"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
