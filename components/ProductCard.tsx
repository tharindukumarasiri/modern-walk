import { ProductTypes } from "@/constants/types";
import { getCardColorByCategory, getFormattedPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductTypes }) => {
  return (
    <Link
      href={"/"}
      draggable={false}
      className="flex flex-col items-center rounded-2xl bg-white shadow-xl transition-all duration-200 ease-linear hover:scale-105"
    >
      <div className="w-full p-6 text-center">
        <h4 className="truncate">{product.title}</h4>
      </div>
      <div className="relative mb-5 h-40 w-40">
        <Image
          src={product.image}
          alt={product.id.toString()}
          fill={true}
          className="object-contain"
        />
      </div>
      <div
        className={`flex w-full flex-col items-center overflow-hidden rounded-2xl p-5 text-center ${getCardColorByCategory(product.category)}`}
      >
        <h3 className="text-blue">
          {getFormattedPrice({ amount: product.price })}
        </h3>
        <p className="text-multiline-ellipsis">{product.description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
