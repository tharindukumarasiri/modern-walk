import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/constants";

const CategorySection = () => {
  return (
    <div className="mt-8 xl:mt-14">
      <h2>Categories</h2>
      <div className="mt-10 flex flex-col gap-8 lg:flex-row">
        <CategoryCard
          title={categories.Men.title}
          link={categories.Men.route}
        />
        <CategoryCard
          title={categories.Women.title}
          link={categories.Women.route}
          backgroundColor="bg-red"
        />
      </div>
    </div>
  );
};

export default CategorySection;
