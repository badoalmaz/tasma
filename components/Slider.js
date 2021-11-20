import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <video muted playsInline autoPlay loop>
            <source
              src="https://cdnvideo.dolimg.com/cdn_assets/399c152480649eba499b7273df9c49a064c87916.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://lumiere-a.akamaihd.net/v1/images/pp_shangchiandthelegendofthetenringshomeentupdate_herob_e585915c.jpeg?region=0,0,2048,878"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://lumiere-a.akamaihd.net/v1/images/pp_encanto_herobanner_21512_ab24a61c.jpeg?region=0,0,2048,878"
            alt=""
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
