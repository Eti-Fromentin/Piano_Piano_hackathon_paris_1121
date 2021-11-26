import React, { useState } from "react";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import PianoBis from "./PianoBis";

import "./PianoHeroe.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);

function PianoHeroe() {

    
  const lettresDeHélise = ["G", "T", "G", "T", "G", "S", "F", "D", "Q"];
  const [displayCard, setDisplayCard] = useState(false);

  return (
    <section class="damier">
        <div class="cardandButton">
      <button class="button"
        onClick={() => {
          setDisplayCard(!displayCard);
        }}
      >
        Lettre à Elise
      </button>
      {displayCard &&   <div class="lineA">
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          className="mySwiper"
        >
          
            {lettresDeHélise.map((element, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="case" key={index}>
                   <p> {element} </p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>}
      </div>
      <div className="PianoPiano">
      <PianoBis />
      </div>
    </section>
  );
}

export default PianoHeroe;
