import ProductsCard from "app/components/products/ProductsCard";
import { dataProducts, Product } from "app/db/data";

const ProductsPage = () => {
  return (
    <div className="bg-gray-100 mx-auto ">
      <div>
        <h1 className="text-blue-900 font-bold text-5xl pt-10 text-center">
          Productos
        </h1>
      </div>
      <div className=" bg-gray-100 w-full mx-auto flex flex-wrap items-center justify-center py-10 px-4 gap-4 sm:w-[640px] lg:w-[955px]   ">
        {dataProducts.products.map((product) => (
          <ProductsCard products={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
