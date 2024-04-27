import { CategoryPageType } from "@/constants/types";
import ProductCard from "./ProductCard";

const CategoryPage = ({title, productsData}: CategoryPageType) => {
  return (
    <>
      <h2 className="mb-14">{title}</h2>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
        {productsData?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
