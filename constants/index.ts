export const PRODUCT_API = "https://fakestoreapi.com/products/category/";

//Number of items getting from each category for sale section
export const limitForSaleCategory = 4;

export const categories = {
  Men: {
    title: "Men's Clothing",
    apiType: "men's clothing",
    route: "mens-clothing",
  },
  Women: {
    title: "Women's Clothing",
    apiType: "women's clothing",
    route: "womens-clothing",
  },
};

export const settings = {
  dots: false,
  infinite: true,
  swipeToSlide: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1368,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1045,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 718,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
