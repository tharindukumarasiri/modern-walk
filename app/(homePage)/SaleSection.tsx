import SliderComponent from "@/components/Slider";
import { getSaleProducts } from "@/lib/data/products";

const SaleSection = async () => {
  const saleProductsData = await getSaleProducts();

  return (
    <>
      <h2 className="mb-5">Flash Sale</h2>
      <SliderComponent data={saleProductsData} />
    </>
  );
};

export default SaleSection;
