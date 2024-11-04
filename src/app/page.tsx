import ContactForm from "app/components/ContactForm";
import Products from "app/components/products/Products";
import Services from "app/components/servicesComponents/Services";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Services />
      <Products />
      <ContactForm />
    </div>
  );
};

export default HomePage;
