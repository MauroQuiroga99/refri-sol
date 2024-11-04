"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div id="contact" className="bg-gray-200">
      <div className=" max-w-7xl mx-auto px-4 flex flex-col items-center justify-center p-12">
        <h1 className="text-blue-900 font-bold text-5xl mt-10 text-center mb-10 ">
          Contáctanos
        </h1>
        <div className=" rounded-md mx-auto w-full max-w-[550px] bg-white">
          <form className="py-4 px-6     ">
            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-center text-blue-900 sm:text-xl">
                Mejora la calidad de tus ambientes hoy mismo.
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-teal-300 focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="lastname"
                      id="last-name"
                      placeholder="Enter Last Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-teal-300 focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Enter Phone Number"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-teal-300 focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      required
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-teal-300 focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <select
                value={selectedOption}
                onChange={handleChange}
                name="service"
                id=""
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-teal-300 focus:shadow-md"
              >
                <option value="" disabled>
                  -- Select an option --
                </option>
                <option value="option1">Residencial</option>
                <option value="option2">Comercial</option>
                <option value="option3">Industrial</option>
                <option value="option4">Otro</option>
              </select>
            </div>
            <div className="mb-5">
              <div className="mb-5">
                <textarea
                  id="longText"
                  name="longText"
                  placeholder="Cuentanos más de tu servicio..."
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-teal-300 focus:shadow-md resize-none"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-teal-300 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
