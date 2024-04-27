export type ProductTypes = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingTypes;
};

type RatingTypes = {
  rate: number;
  count: number;
};

export type CardTypes = {
  title: string;
  link: string;
  backgroundColor?: string;
};

export type ProductByCategoryTypes = {
  category: string;
  limit?: number;
};

export type PriceType = {
  amount: string | number;
  currency?: string;
};

export type CategoryPageType = {
  title: string;
  productsData: ProductTypes[];
};
