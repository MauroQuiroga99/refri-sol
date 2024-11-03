import Products from "app/components/products/Products";
import Services from "app/components/servicesComponents/Services";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Services />
      <Products />
    </div>
  );
};

export default HomePage;
