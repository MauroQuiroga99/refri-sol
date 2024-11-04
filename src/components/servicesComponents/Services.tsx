import React from "react";
import ServicesCard from "./ServicesCard";
import { dataServices } from "app/db/data";

const Services = () => {
  return (
    <div id="services" className="bg-gray-200">
      <div className=" max-w-7xl mx-auto px-4 ">
        <h1 className="text-blue-900 font-bold text-5xl pt-10 text-center">
          Nuestros servicios
        </h1>
        <p className="mt-4 mb-10 text-gray-500 text-lg text-center">
          Contamos con personal capacitado y certificado que trabaja con todas
          las medidas de seguridad para brindarte la mejor experiencia en cada
          uno de nuestros servicios. Desde la venta y distribución de equipos de
          climatización de alta calidad, hasta el diseño de sistemas eficientes
          y personalizados para espacios industriales y comerciales, nuestro
          equipo está aquí para asesorarte en cada paso.
        </p>
      </div>

      <div className="mx-auto flex flex-wrap justify-center items-center gap-4 px-4 max-w-7xl pb-10 ">
        {dataServices.services.map((service) => (
          <ServicesCard key={service.id} services={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
