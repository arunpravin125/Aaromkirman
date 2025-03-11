import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imageBlack from "../../assets/ed-title-bg.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";

const AaronBottom = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      style={{ backgroundImage: `url(${imageBlack})`, backgroundSize: "cover", y: backgroundY }}
      className="h-[750px] w-full mt-[30px] flex justify-center p-4 relative bg-fixed bg-cover bg-center"
    >
      <div style={{ y: textY }} className="flex justify-center absolute top-[40px] items-center text-slate-200">
        <div className="flex flex-col gap-5 text-center">
          <p className="text-8xl font-bold">CHRISTIE'S</p>
          <p className="text-3xl">INTERNATIONAL REAL ESTATE</p>
          <div className="flex items-center mt-3 gap-5">
            <hr className="border-2 border-slate-300 w-28" />
            <p className="text-2xl">SOUTHERN CALIFORNIA</p>
            <hr className="border-2 border-slate-300 w-28" />
          </div>
          <p className="text-slate-300">433 N CAMDEN DR. SUITE 600 BEVERLY HILLS CA 90210</p>
          <div className="flex gap-3">
            <p className="text-slate-300">BEVERLY HILLS</p>
            <div className="h-6 bg-white w-[2px]" />
            <p className="text-slate-300">NEW YORK</p>
            <div className="h-6 bg-white w-[2px]" />
            <p className="text-slate-300">SHANGHAI</p>
            <div className="h-6 bg-white w-[2px]" />
            <p className="text-slate-300">HONG KONG</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="size-4" />
            <p className="text-slate-300">424.249.7162</p>
          </div>
          <div className="text-slate-500 text-xs">
            <p>Copyright © 2025 AARON KIRMAN. All Rights Reserved.</p>
            <p>Privacy Policy | Sitemap | Real Estate Website Design by <span className="underline">Agent Image</span></p>
          </div>
          <div className="flex gap-4 items-center text-slate-500">
            <p>DO NOT SELL MY PERSONAL INFORMATION</p>
            <div className="h-6 bg-white w-[2px]" />
            <p>ACCESSIBILITY</p>
          </div>
          <div className="flex justify-between items-center bg-black p-4 w-[600px] mt-4">
            <div>
              <p className="text-xs text-slate-500">CUSTOM WEBSITE DESIGN BY</p>
              <p className="text-3xl text-slate-300">AGENT IMAGE</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-3xl font-bold text-slate-300">MLS</p>
              <LuHouse className="size-8" />
              <p className="h-5 w-5 font-bold flex items-center text-2xl justify-center bg-white text-black">R</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AaronBottom;
