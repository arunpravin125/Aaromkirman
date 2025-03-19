import React, { useRef } from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import imageWhite from "../../assets/cf-bg.jpg"
import imageBlack from "../../assets/ed-title-bg.jpg"
import { FaPhoneAlt } from "react-icons/fa";  
import { LuHouse } from "react-icons/lu";
import { motion, useScroll, useTransform } from "framer-motion";
const Aaron10 = () => {
     const ref = useRef(null);
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
      });
      const backgroundY = useTransform(scrollYProgress, [1, 2], ["0%", "200%"]);
      const textY = useTransform(scrollYProgress, [0.3, 1], ["0%", "100%"]);

  return (
    <div className=" md:h-[1650px] h-max md:w-full w-screen xl:h-auto 2xl:h-auto " >
        <div>
        <motion.div
  ref={ref}
  style={{ backgroundImage: `url(${imageWhite})`, backgroundSize: "cover", y: backgroundY }}
  className="h-[830px] md:h-[800px] 2xl:h-[1100px] xl:h-[950px] w-screen bg-fixed flex items-center justify-center  bg-slate-200 z-20 relative px-4 md:px-0"
>
  <motion.div
    style={{ y: textY }}
    className="absolute top-[50px] md:top-0 w-full flex flex-col 2xl:gap-16 xl:gap-11  items-center text-center"
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="flex flex-col gap-4 md:gap-6 mt-20 md:w-full w-[100%] 2xl:text-4xl xl:text-3xl">
      <div className="flex gap-4 items-center justify-center">
        <p>10</p>
        <hr className="border-[1px] border-black w-20" />
        <p>CONNECT</p>
        <p>WITH</p>
      </div>
      <h1 className="text-7xl md:text-9xl font-tradego text-black">AARON</h1>
      <p className="text-black text-sm md:text-base 2xl:text-2xl xl:text-lg">
        TO INQUIRE ABOUT A PROPERTY OR PRESS EVENT, PLEASE FILL OUT THE FORM BELOW
      </p>
    </div>

    {/* Form Section */}
    <div className="mt-7 flex flex-col gap-6 md:gap-10 xl:gap-20 2xl:gap-24 w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl ">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-3">
        <div className="flex flex-col w-full">
          <input
            className="outline-none p-2 placeholder:text-black 2xl:placeholder:text-slate-600 2xl:placeholder:text-3xl xl:placeholder:text-slate-600 xl:placeholder:text-2xl bg-transparent w-full border-b border-slate-900 text-black"
            placeholder="NAME"
          />
        </div>
        <div className="flex flex-col w-full">
          <input
            className="outline-none p-2 placeholder:text-black 2xl:placeholder:text-slate-600 2xl:placeholder:text-3xl xl:placeholder:text-slate-600 xl:placeholder:text-2xl bg-transparent w-full border-b border-slate-900 text-black"
            placeholder="LAST NAME"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10  px-3">
        <div className="flex flex-col w-full">
          <input
            className="outline-none p-2 placeholder:text-black bg-transparent 2xl:placeholder:text-slate-600 2xl:placeholder:text-3xl xl:placeholder:text-slate-600 xl:placeholder:text-2xl w-full border-b border-slate-900 text-black"
            placeholder="EMAIL ADDRESS"
          />
        </div>
        <div className="flex flex-col w-full">
          <input
            className="outline-none p-2 placeholder:text-black bg-transparent 2xl:placeholder:text-slate-600 2xl:placeholder:text-3xl xl:placeholder:text-slate-600 xl:placeholder:text-2xl w-full border-b border-slate-900 text-black"
            placeholder="PHONE"
          />
        </div>
      </div>

      <div className="px-3">
        <textarea
          placeholder="MESSAGE"
          className="w-full h-32 p-2 bg-transparent outline-none 2xl:placeholder:text-slate-600 2xl:placeholder:text-3xl xl:placeholder:text-slate-600 xl:placeholder:text-2xl resize-none placeholder:text-black border-b border-slate-900"
        ></textarea>
      </div>

      <div className="text-center transition-colors relative  duration-500 hover:bg-black group h-[50px] w-[150px] xl:h-[70px] xl:w-[180px] 2xl:h-[80px] 2xl:w-[200px] flex items-center justify-center mx-auto">
        <div className="flex items-center 2xl:text-2xl xl:text-lg gap-4">
          <p className="text-black group-hover:text-white">{">"}</p>
          <p className="text-black group-hover:text-white font-tradego text-[17px] xl:text-lg 2xl:text-2xl font-semibold">
            SUBMIT
          </p>
        </div>
        <hr className="border-2 absolute top-[46px] xl:top-[65px] 2xl:top-[75px] transition-all duration-300 left-0 border-slate-900 w-[50px] group-hover:w-[150px]" />
      </div>
    </div>
  </motion.div>
</motion.div>

       {/* white  */}
                   <div className="bg-white w-full px-4 md:px-0 py-8">
  <motion.div
    ref={ref}
    style={{
      backgroundImage: `url(${imageBlack})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      y: backgroundY,
    }}
    className="min-h-[820px] w-full bg-fixed 2xl:h-[1000px] flex justify-center p-4 relative"
  >
    <motion.div
      style={{ y: textY }}
      className="absolute top-[110px] w-full max-w-5xl flex flex-col items-center text-center text-slate-200"
    >
      <div className="flex flex-col gap-5 xl:gap-8 2xl:gap-12">
        <div className="flex flex-col gap-3 items-center">
          <p className="text-6xl md:text-8xl font-tradego">CHRISTIE'S</p>
          <p className="font-sans text-xl 2xl:text-5xl xl:text-4xl md:text-3xl">INTERNATIONAL REAL ESTATE</p>
          <div className="flex items-center mt-3 gap-3 md:gap-5 2xl:gap-9 xl:gap-7">
            <hr className="border-[2px] border-slate-300 w-16 md:w-28 2xl:w-48 xl:w-36" />
            <p className="font-sans text-lg md:text-2xl  2xl:text-5xl xl:text-4xl">SOUTHERN CALIFORNIA</p>
            <hr className="border-[2px] border-slate-300 w-16 md:w-28 2xl:w-48 xl:w-36" />
          </div>
        </div>

        {/* Address and ContactDetails */}
        <div className="flex flex-col gap-4 mt-4 items-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base 2xl:text-2xl xl:text-lg">
            <p className="font-light text-slate-300">DRE #01296524</p>
            <div className="h-6 bg-white w-[2px]"></div>
            <p className="font-light 2xl:text-2xl xl:text-lg text-slate-300">
              CHRISTIE'S INTERNATIONAL REAL ESTATE: DRE#01527644
            </p>
          </div>
          <p className="font-light 2xl:text-2xl xl:text-lg text-slate-300 text-center">
            433 N CAMDEN DR. SUITE 600 BEVERLY HILLS, CA 90210
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {["BEVERLY HILLS", "NEW YORK", "SHANGHAI", "HONG KONG"].map((city, index) => (
              <React.Fragment key={index}>
                <p className="font-light text-slate-300">{city}</p>
                {index !== 3 && <div className="h-6 bg-white w-[2px]"></div>}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center 2xl:text-2xl xl:text-lg gap-2">
            <FaPhoneAlt className="size-4" />
            <p className="font-light text-slate-300">424.249.7162</p>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="flex flex-col items-center gap-4 text-xs md:text-sm 2xl:text-2xl xl:text-lg text-slate-500">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <p>Copyright © 2025</p>
            <p className="font-semibold text-white">AARON KIRMAN.</p>
            <p>All Rights Reserved.</p>
            <p className="underline cursor-pointer">Privacy Policy</p>
            <p>Sitemap</p>
            <p>Real Estate Website Design by <span className="underline">Agent Image</span></p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <p>DO NOT SELL MY PERSONAL INFORMATION</p>
            <div className="h-6 bg-white w-[2px]"></div>
            <p>ACCESSIBILITY</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className=" w-full   flex flex-col md:flex-row justify-evenly  items-center md:mt-8 rounded-lg">
          <div className="text-center  md:text-left">
            <p className="text-xs text-slate-500">CUSTOM WEBSITE DESIGN BY</p>
            <p className="text-2xl md:text-3xl text-slate-300">AGENT IMAGE</p>
          </div>
          <div className="md:flex items-center hidden   gap-2 md:mt-0">
            <p className="text-2xl font-bold text-slate-300">MLS</p>
            <LuHouse className="md:size-8 text-white" />
            <p className="h-5 w-5 font-bold flex items-center justify-center bg-white text-black text-2xl">R</p>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
</div>

                 
        </div>
    </div>
  )
}

export default Aaron10

