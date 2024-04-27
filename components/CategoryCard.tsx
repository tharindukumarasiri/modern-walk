import Link from "next/link";
import { CardTypes } from "@/constants/types";

const CategoryCard = ({ title, backgroundColor, link }: CardTypes) => {
  return (
    <Link
      href={link}
      className={`flex w-full flex-col items-center rounded-2xl text-center shadow-xl transition-all duration-200 ease-linear hover:scale-105 ${backgroundColor}`}
    >
      <h1 className="mx-6 my-10 text-2xl text-white sm:my-20 md:text-4xl xl:my-[10vh] xl:text-5xl">
        {title}
      </h1>
    </Link>
  );
};

CategoryCard.defaultProps = {
  backgroundColor: "bg-green",
  link: "/",
};

export default CategoryCard;
