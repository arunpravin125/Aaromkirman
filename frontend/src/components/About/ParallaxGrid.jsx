import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import imageCTa from "../../assets/cta2-bg.jpg";

const ParallaxGrid = () => {
  return (
    <div className="bg-violet-300 h-[1150px] w-full grid grid-cols-3 items-center p-3 justify-center relative">
      <ParallaxBanner
        layers={[
          {
            image: imageCTa,
            speed: 15, // Adjust for stronger parallax effect
            opacity: [0.5, 1], // Smooth transition
          },
        ]}
        className="w-[950px] h-[950px]"
      />
    </div>
  );
};

export default ParallaxGrid;

