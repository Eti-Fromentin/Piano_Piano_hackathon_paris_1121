import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
 import "swiper/swiper-bundle.min.css";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import "./PianoHeroe.css";

function PianoHeroe() {
  const lettresDeHélise = ["G", "T", "G", "T", "G", "S", "F", "D", "Q"];
  const [displayCard, setDisplayCard] = useState(false);

  return (
    <section class="damier">
      <button
        onClick={() => {
          setDisplayCard(!displayCard);
        }}
      >
        {" "}
        Lettre à Hélise{" "}
      </button>
      <div class="lineA">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            {displayCard &&
              lettresDeHélise.map((element, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="case" key={index}>
                      {" "}
                      {element}{" "}
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </>
        )
        {/* {displayCard && lettresDeHélise.map((element, index) => {
        return (
        <div className="case" key={index}> {element} </div>
        )
    })} */}
        {/* <div id="signeQ" class="case">Case</div> */}
        {/* <div id="signeZ" class="case">Case Z</div>
   <div id="signeR" class="case">Case S</div> */}
        {/* <div class="signeD" id="case">Case D</div>
   <div class="signeR" id="case">Case R</div>
   <div class="signeF" id="case">Case F</div>
   <div class="signeT" id="case">Case T</div>
   <div class="signeG" id="case">Case G</div>
   <div class="signeH" id="case">Case H</div>
   <div class="signeU" id="case">Case U</div>
   <div class="signeJ" id="case">Case J</div>
   <div class="signeI" id="case">Case I</div>
   <div class="signeK" id="case">Case K</div>
   <div class="signeO" id="case">Case O</div>
   <div class="signeL" id="case">Case L</div>
   <div class="signeM" id="case">Case M</div>
   <div class="signeP" id="case">Case P</div>
   <div class="signeù" id="case">Case ù</div> */}
      </div>
    </section>
  );
}

export default PianoHeroe;
