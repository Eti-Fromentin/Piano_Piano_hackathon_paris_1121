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
  const frereJacques = ["H","J","K","H","H","J","K","H","K","O","M","K","O","M","M","P","M","O","K","H","H","D","H","H","D","H"]
  const starWarsMainTheme = ["D","J","H","G","F","D","J","H","G","F","D","J","H","G","H","F"]
  const starWarsDarkTheme = ["K", "K","K", "H","M","K","H","M","K"]
  const [displayCard, setDisplayCard] = useState(false);

  return (
    <section className="damier">
        <div className="cardandButton">
            <div className="buttons" >
      <button class="button"
        onClick={() => {
          setDisplayCard(!displayCard);
        }}
      >
        Lettre à Elise
      </button>
      <button class="button"> Frère Jacques</button> 
      <button class="button"> Star Wars</button> 
      </div>
      {displayCard &&   <div class="lineA">
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 500,
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
