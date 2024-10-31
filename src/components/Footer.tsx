import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-wrap gap-20 mx-auto justify-center p-4 bg-gray-300 bg-opacity-50 h-full">
      <div className="flex flex-col justify-around items-start wauto text-gray-600 text-left">
        <h1 className="font-bold text-center">INFORMACIÓN DE CONTACTO</h1>
        <div className="mt-4 flex flex-col items-start gap-2">
          <a className="flex cursor-pointer items-center gap-2" href="#">
            <img
              src="icon/whatsapp-icon.svg"
              width="30px"
              alt="WhatsApp icon"
            />{" "}
            3235884424
          </a>
          <a className="flex cursor-pointer items-center gap-2" href="#">
            <img src="icon/email.svg" width="30px" alt="Email icon" />{" "}
            correo@correo.com
          </a>
          <a className="flex cursor-pointer items-center gap-2" href="#">
            <img src="icon/maps.svg" width="30px" alt="Maps icon" /> Calle 100
            #49C-45 Barranquilla
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-around items-start w-auto text-gray-600 text-left">
        <h1 className=" text-center font-bold">HORARIOS DE ATENCIÓN</h1>
        <p className=" items-start">Lunes a Viernes: 8:00AM - 6:00PM</p>
        <p className=" items-start">Sabado: 8:00AM - 1:00PM</p>
      </div>
      <div className=" flex flex-col items-center justify-around w-auto text-gray-600 text-left">
        <img src="img/logo.png" width={"90px"} alt="" />
        <p className="text-sm">siguenos en</p>
        <div className="flex gap-4">
          <img
            className=" cursor-pointer"
            src="icon/facebook.svg"
            width={"40px"}
            alt=""
          />

          <img
            className=" cursor-pointer"
            src="icon/instagram.svg"
            width={"35px"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
