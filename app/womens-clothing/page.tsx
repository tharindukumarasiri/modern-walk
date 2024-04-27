import CategoryPage from "@/components/CategoryPage";
import { categories } from "@/constants";
import { getProductByCategory } from "@/lib/data/products";

const page = async () => {
  const productsData = await getProductByCategory({
    category: categories.Women.apiType,
  });

  return (
    <CategoryPage title={categories.Women.title} productsData={productsData} />
  );
};

export default page;
