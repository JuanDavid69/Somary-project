import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
const products = [
  { id: 1, image: process.env.PUBLIC_URL + "/img1.png", name: 'Corte semi boxyfit negro' },
  { id: 2, image: process.env.PUBLIC_URL + "/img2.png", name: 'Corte semi boxyfit gris' },
  { id: 3, image: process.env.PUBLIC_URL + "/img3.png", name: 'Corte semi boxyfit rosa medio' },
  // Agrega más productos según necesites
];
  return (
    <div className="featured-products-carousel">
   

      {/* Banner de video */}
    

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-slide">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
