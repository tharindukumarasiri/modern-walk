"use server";

import { categories, limitForSaleCategory, PRODUCT_API } from "@/constants";
import { ProductByCategoryTypes, ProductTypes } from "@/constants/types";
import { shuffleProductsArray } from "../utils";

export const getSaleProducts = async () => {
  const mensProducts = getProductByCategory({
    category: categories.Men.apiType,
    limit: limitForSaleCategory,
  });
  const womansProducts = getProductByCategory({
    category: categories.Women.apiType,
    limit: limitForSaleCategory,
  });

  const [mensData, womansData] = await Promise.all([
    mensProducts,
    womansProducts,
  ]);

  return shuffleProductsArray(mensData, womansData).reverse();
};

export const getProductByCategory = async ({
  category,
  limit = 0,
}: ProductByCategoryTypes): Promise<ProductTypes[]> => {
  const productData = await fetch(`${PRODUCT_API}${category}?limit=${limit}`);
  const data = await productData.json();
  return data;
};
