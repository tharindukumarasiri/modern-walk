"use client";

import Slider from "react-slick";

import { settings } from "@/constants";
import { ProductTypes } from "@/constants/types";
import ProductCard from "./ProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ data }: { data: ProductTypes[] }) => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data?.map((product: ProductTypes) => (
          <div key={product.id} className="p-4 md:py-6">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
