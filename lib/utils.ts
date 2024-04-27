import { categories } from "@/constants";
import { PriceType, ProductTypes } from "@/constants/types";

export const shuffleProductsArray = (
  array1: ProductTypes[],
  array2: ProductTypes[],
) => {
  const mergedArray = [];
  const maxLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < array1.length) {
      mergedArray.push(array1[i]);
    }
    if (i < array2.length) {
      mergedArray.push(array2[i]);
    }
  }

  return mergedArray;
};

export const getCardColorByCategory = (category: string) => {
  switch (category) {
    case categories.Men.apiType:
      return "bg-green";
    case categories.Women.apiType:
      return "bg-red";
    default:
      return "bg-green";
  }
};

export const getFormattedPrice = ({ amount, currency = "Rs" }: PriceType) => {
  const price = (Math.round(Number(amount) * 100) / 100).toFixed(2);
  return `${currency} ${price}`;
};
