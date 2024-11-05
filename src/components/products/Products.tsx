import { dataBase } from "app/db/data";
import CategoriesCard from "./CategoriesCard";

const Products = () => {
  return (
    <div id="products" className="">
      <div className="max-w-7xl mx-auto text-white px-4">
        <h1 className="text-blue-900 font-bold text-5xl mt-10 text-center">
          Nuestros Productos
        </h1>
        <p className="mt-4 mb-10 text-gray-500 text-lg text-center">
          Ofrecemos una amplia gama de productos para aires acondicionados,
          incluyendo unidades de aire acondicionado, filtros, repuestos y
          herramientas de instalación. Nuestra selección de productos está
          diseñada para satisfacer todas tus necesidades, ya sea para la compra.
        </p>
      </div>
      <CategoriesCard />
    </div>
  );
};

export default Products;
