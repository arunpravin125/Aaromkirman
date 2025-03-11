import React, { useRef } from "react";
import image_3 from "../../assets/HQ-5.jpeg";
import image_4 from "../../assets/northimage.jpg";
import image_5 from "../../assets/image_7.jpg";
import image_6 from "../../assets/fort.jpg";
import image_7 from "../../assets/northimage.jpg";
import image_8 from "../../assets/image_8.jpg";
import image_9 from "../../assets/ak-white.jpg";
import { useScroll, useTransform } from "framer-motion";
import imageBlack from "../../assets/ed-title-bg.jpg";
import { motion } from "framer-motion";
import { fadeIn, fadeIn1, fadeInSpeed } from "../../variants";

import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

const MiddleImage1 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [1, 2], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="p-1  h-full z-20">
      <div className="flex flex-col gap-9 relative h-[220px] z-10 w-full">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          className="text-slate-600 flex  items-center gap-8 absolute font-Sigmar top-9 left-28 md:left-20"
        >
          <p>01</p>
          <hr className="border-t-2 border-gray-600 w-[60px]" />

          <p>FEATURED</p>
        </motion.div>
        <motion.h1
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          className="text-7xl font-tradego  absolute top-28 left-28  md:left-48 "
        >
          Listings
        </motion.h1>
      </div>
      {/* parallax and images */}
      <div className=" flex flex-col h-[1250px] w-full relative">
        {/* 1st image */}
        <motion.div 
        style={{y:textY}}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          className=" md:h-[450px] group  h-[300px] w-auto md:w-[1150px] mt-3 absolute z-30 right-0"
        >
          <img src={image_3} className="md:bg-cover h-[330px] md:h-[510px] md:w-auto  group-hover:grayscale" />
          <div className="relative cursor-pointer  ">
            <div className="bg-slate-100 absolute p-2 md:p-4 text-center h-[300px] w-[300px] md:h-[400px] md:w-[400px] z-30 right-5 top-[-170px] md:top-[-260px] ">
              <div className="bg-slate-100 group-hover:border-4 transition-all duration-500 group-hover:border-black h-[280px] md:h-[370px]">
                <div className=" flex flex-col gap-8 md:gap-12 items-center">
                  <h1 className="mt-6 text-4xl md:text-7xl font-Sigmar">AK</h1>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <h1 className="md:text-5xl font-serif">$126,000,000</h1>
                    <p className="font-bold text-lg">9505 GLOAMING DR</p>
                    <div className="flex flex-col justify-start">
                      <div className="flex justify-center gap-2">
                        <p>{">"}</p>
                        <p className="md:text-lg text-sm" >DETAILS</p>
                      </div>
                      <p>----</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* second parallax */}

        <motion.div
           ref={ref}
           style={{
             backgroundImage: `url(${imageBlack})`,
             backgroundSize: "fit",
             y: backgroundY,
           }}
          className=" h-[470px] md:h-[800px] w-full bg-fixed absolute z-10 top-[100px] "
        ></motion.div>

        {/* 3rd image */}
        <motion.div 
        style={{y:textY}}
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          className="md:h-[450px] h-[300px] group w-full md:w-[1150px] mt-3 absolute z-30 top-[460px] md:top-[650px]  md:left-0"
        >
          <motion.img
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            src={image_4}
            className="bg-cover h-[300px] w-full  md:h-[500px] md:w-[1150px] group-hover:grayscale"
          />
          <div className="relative cursor-pointer ">
            <div className="bg-slate-900 absolute p-2 md:p-4 text-center  md:h-[400px] md:w-[400px] z-30 md:left-[105px] top-[-150px] md:top-[-250px] ">
              <div className="bg-slate-900 text-white group-hover:border-2  md:group-hover:border-4 transition-all duration-500 group-hover:border-white h-[280px] w-[280px] md:w-[370px] md:h-[370px]">
                <div className=" flex flex-col gap-7 md:gap-12 items-center">
                  <h1 className="mt-6 text-3xl md:text-7xl font-serif">AK</h1>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <h1 className="text-3xl md:text-5xl font-serif">$115,000,000</h1>
                    <p className="font-bold text-sm md:text-lg">10936 CHALON RD</p>
                    <div className="flex flex-col justify-start">
                      <div className="flex text-sm md:text-lg justify-center gap-2">
                        <p>{">"}</p>
                        <p>DETAILS</p>
                      </div>
                      <p>----</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* finshed part one */}
      <div className=" flex flex-col h-[700px] md:h-[1250px] md:w-full relative">
        {/* 1st image */}
        <motion.div
         variants={fadeIn1("up", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true, amount: 0.7 }}
        
        className="md:h-[450px] group md:w-[1150px] mt-3 top-[-350px] md:top-[50px] absolute z-30  md:right-0">
          <img src={image_5} className="bg-cover h-[300px] md:h-[510px] group-hover:grayscale" />
          <motion.div 
           variants={fadeIn1("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: true, amount: 0.7 }}
          className="relative cursor-pointer ">
            <div className="bg-slate-100 absolute p-2 md:p-4 text-center h-[270px] w-[280px] md:h-[400px] md:w-[400px] z-30 md:right-5 right-0 top-[-140px] md:top-[-260px] ">
              <div className="bg-slate-100 group-hover:border-4 transition-all duration-500 group-hover:border-black md:h-[370px]">
                <div className=" flex flex-col gap-12 items-center">
                  <h1 className="mt-6 text-3xl md:text-7xl font-Sigmar">AK</h1>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <h1 className="md:text-5xl text-3xl font-serif">$77,000,000</h1>
                    <p className="font-bold  text-sm md:text-lg">1420 DAVIES DR</p>
                    <div className="flex flex-col justify-start">
                      <div className="flex text-sm md:text-lg justify-center gap-2">
                        <p>{">"}</p>
                        <p>DETAILS</p>
                      </div>
                      <p>----</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn1("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="md:h-[450px] group md:w-[1150px] mt-3 absolute z-30 top-[80px] md:top-[700px] md:left-0"
        >
          <img
            src={image_6}
            className="bg-cover h-[295px] md:h-[460px] md:w-[1150px] group-hover:grayscale"
          />
          <div className="relative cursor-pointer ">
            <div className="bg-slate-900 absolute p-2 md:p-4 text-center  md:h-[400px] h-[270px] w-[280px] md:w-[400px] top-[-110px] z-30 md:left-5 md:top-[-250px] ">
              <div className="bg-slate-900 text-white  group-hover:border-2 md:group-hover:border-4 transition-all duration-500 group-hover:border-white h-[255px] md:h-[370px]">
                <div className=" flex flex-col gap-8 md:gap-12 items-center">
                  <h1 className="mt-6 md:text-7xl text-3xl font-Sigmar">AK</h1>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <h1 className="md:text-5xl text-3xl font-Sigmar">$70,000,000</h1>
                    <p className="font-bold  text-sm md:text-lg">120 MONTECITO RANCH LN</p>
                    <div className="flex flex-col justify-start">
                      <div className="flex text-sm md:text-lg justify-center gap-2">
                        <p>{">"}</p>
                        <p>DETAILS</p>
                      </div>
                      <p>----</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* finsh part two */}
      <div className=" flex flex-col h-[1000px] md:h-[1770px] w-full relative">
        {/* 1st image */}
        <div className="md:h-[450px] group md:w-[1150px] mt-3 top-[-165px] md:top-[60px] absolute z-30 md:right-0">
          <img
            src={image_7}
            className="bg-cover h-[350px] md:h-[460px] w-full group-hover:grayscale"
          />
          <motion.div
           variants={fadeIn1("up", 0.4)}
           initial="show"
           whileInView={"show"}
           viewport={{ once: true, amount: 0.7 }}
          
          className="relative cursor-pointer ">
            <motion.div
             variants={fadeIn1("up", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true, amount: 0.7 }}
              className="bg-slate-100 absolute p-4 text-center  md:h-[400px] h-[280px] md:w-[400px] w-[280px] right-0 z-30 md:right-5 top-[-140px] md:top-[-265px] ">
              <div className="bg-slate-100 group-hover:border-2 md:group-hover:border-4 transition-all duration-500 group-hover:border-black h-[250px] md:h-[370px]">
                <div className=" flex flex-col gap-7 md:gap-12 items-center">
                  <h1 className="mt-6 md:text-7xl  text-3xl font-tradego">AK</h1>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <h1 className="md:text-5xl text-2xl font-serif">$63,000,000</h1>
                    <p className="font-bold text-sm md:text-lg">9214 NIGHTINGALE DR</p>
                    <div className="flex flex-col justify-start">
                      <div className="flex  text-sm md:text-lg justify-center gap-2">
                        <p>{">"}</p>
                        <p>DETAILS</p>
                      </div>
                      <p>----</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
       

       <div className="relative" >
       
        <motion.div
            className="relative  z-40 "
            style={{ y: textY }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              variants={fadeIn1("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="md:h-[450px] h-[300px] w-auto bg-yellow-400 group md:w-[1150px] mt-3 top-[320px] absolute z-30 md:top-[650px] md:left-0"
            >
              <img
                src={image_8}
                className="bg-cover h-[300px] md:h-[450px] md:w-[1150px] group-hover:grayscale"
              />
              <motion.div
               variants={fadeIn1("up", 0.1)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: true, amount: 0.7 }}
                className="relative cursor-pointer ">
                <div className="bg-slate-900 absolute p-2 md:p-4 text-center h-[280px] w-[280px] md:h-[400px] md:w-[400px] z-30 md:left-5 top-[-150px] md:top-[-275px] ">
                  <div className="bg-slate-900 text-white group-hover:border-2 md:group-hover:border-4 transition-all duration-500 group-hover:border-white h-[260px] md:h-[370px]">
                    <div className=" flex flex-col gap-12 items-center">
                      <h1 className="mt-6 md:text-7xl text-3xl font-tradego">AK</h1>
                      <div className="flex flex-col gap-4 md:gap-8">
                        <h1 className="md:text-5xl text-2xl font-tradego">$62,000,000</h1>
                        <p className="font-bold text-sm md:text-lg">942 N ALPINE DR</p>
                        <div className="flex flex-col justify-start">
                          <div className="flex md:text-lg text-sm  justify-center gap-2">
                            <p>{">"}</p>
                            <p>DETAILS</p>
                          </div>
                          <p>----</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="md:h-[250px] absolute h-[300px] top-[755px] md:top-[1230px] z-40">
              <img src={image_9} className="md:h-[550px] md:w-full  h-[270px]" />
            </motion.div>
          </motion.div>
        
       
       </div>
        <motion.div
          ref={ref}
          style={{
            backgroundImage: `url(${imageBlack})`,
            backgroundSize: "fit",
            y: backgroundY,
          }}
         
          className="md:h-[700px] h-[550px]  ease-linear w-full bg-fixed absolute z-10 top-[390px] md:top-[773px] "
        >
         
        </motion.div>
       
      </div>
      
    </div>
  );
};

export default MiddleImage1;
