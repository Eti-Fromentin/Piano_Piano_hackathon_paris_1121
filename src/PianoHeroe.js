import React, { useState } from "react";

import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import PianoBis from "./PianoBis";

import "./PianoHeroe.css";
SwiperCore.use([Autoplay, Navigation]);

function PianoHeroe() {

    
  const lettresDeHélise = ["G", "T", "G", "T", "G", "S", "F", "D", "Q"];
  const frereJacques = ["H","J","K","H","H","J","K","H","K","O","M","K","O","M","M","ù","M","O","K","H","H","D","H","H","D","H"]
  const starWarsMainTheme = ["D","J","H","G","F","D","J","H","G","F","D","J","H","G","H","F"]
  const starWarsDarkTheme = ["K", "K","K", "H","M","K","H","M","K"]
  const [displayCard, setDisplayCard] = useState([]);


  return (
    <section className="damier">
        <div className="cardandButton">
            <div className="buttons" >
      <button class="button"
        onClick={() => {
          setDisplayCard(lettresDeHélise);
        }}
      >
        Für Elise
      </button>
      <button class="button" onClick={() => {
          setDisplayCard(frereJacques);
        }}> Brother Jacques</button> 
      <button class="button" onClick={() => {
          setDisplayCard(starWarsMainTheme);
        }}> Star Wars Luke</button> 
        <button class="button" onClick={() => {
          setDisplayCard(starWarsDarkTheme);
        }}> Star Wars </button> 
      </div>
      {displayCard && <div class="lineA">
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 700,
            disableOnInteraction: false,
          }}
          
          navigation={false}
          className="mySwiper"
        >
            {displayCard.length && displayCard.map((element, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="case" key={index}>
                   <p className="cardLetter"> {element} </p>
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
