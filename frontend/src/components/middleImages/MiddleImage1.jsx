import React, { useRef } from "react";
import image_3 from "../../assets/HQ-5.jpeg";
import image_4 from "../../assets/northimage.jpg";
import image_5 from "../../assets/image_7.jpg";
import image_6 from "../../assets/fort.jpg";
import image_7 from "../../assets/Nightingale.jpg";
import image_8 from "../../assets/image_8.jpg";
import image_9 from "../../assets/ak-white.jpg";
import { useScroll, useTransform } from "framer-motion";
import imageBlack from "../../assets/ed-title-bg.jpg";
import { motion } from "framer-motion";
import { fadeIn, fadeIn1, fadeInSpeed } from "../../variants";



const MiddleImage1 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [1, 2], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="p-1  h-full w-full z-20">
      <div className="flex flex-col gap-9 relative h-[220px] z-10 w-full">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          className="text-slate-600 flex  items-center gap-8 absolute font-Sigmar top-9 left-16 md:left-20"
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
          className="text-7xl font-tradego  absolute top-28 left-16  md:left-48 "
        >
          Listings
        </motion.h1>
      </div>

      {/* parallax and images */}
      <div className=" flex flex-col h-[1250px]  w-full relative">
        {/* 1st image */}
        <motion.div 
        style={{y:textY}}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          className=" 2xl:h-full group  h-[300px] max-w-full  mt-3  z-30 "
        >
          <img src={image_3} className="md:bg-cover h-[330px] xl:h-[500px]  xl:w-[1100px] 2xl:w-[1400px] 2xl:h-[600px] absolute right-0 group-hover:grayscale" />
          <div className="relative cursor-pointer  ">
            <div className="bg-slate-100 absolute p-2 md:p-4 text-center h-[280px] w-[280px] xl:h-[480px] xl:w-[480px]  2xl:h-[600px] 2xl:w-[600px] z-30 lg:right-[10%] right-[40px] top-[180px] lg:top-64 ">
              <div className="bg-slate-100 group-hover:border-4 transition-all duration-500 group-hover:border-black h-[270px] xl:h-[450px] xl:w-[450px] 2xl:w-[570px] 2xl:h-[570px]">
                <div className=" flex flex-col gap-8 xl:gap-12 items-center">
                  <h1 className="mt-6 text-4xl 2xl:text-9xl xl:text-7xl font-Sigmar">AK</h1>
                  <div className="flex flex-col gap-4 xl:gap-10 2xl:gap-14">
                    <h1 className="text-2xl 2xl:text-7xl xl:text-6xl font-tradego">$126,000,000</h1>
                    <p className="font-bold 2xl:text-2xl xl:text-lg">9505 GLOAMING DR</p>
                    <div className="flex flex-col justify-center gap-3 md:gap-6 items-center">
                          <div className="flex 2xl:text-2xl xl:text-lg text-sm  justify-center gap-5 ">
                            <p>{">"}</p>
                            <p>DETAILS</p>
                          </div>
                          <div className="flex mr-20 xl:mr-32 justify-center items-center xl:justify-start xl:items-start " >
                            <hr className="border-2 border-black w-[40px] xl:w-[60px]" ></hr>
                          </div>
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
          className=" h-[470px] xl:h-[850px] 2xl:h-[950px] w-full bg-fixed absolute top-[110px] xl:top-[150px] z-10 2xl:top-[150px] "
        ></motion.div>

        {/* 3rd image */}
        <motion.div 
        style={{y:textY}}
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          className="lg:h-[450px] h-[300px] group w-full  mt-3   z-30 top-[460px] xl:top-[730px] absolute 2xl:top-[850px]  lg:left-0"
        >
          <motion.img
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            src={image_4}
            className="bg-cover h-[300px] w-full  2xl:h-[650px] xl:w-[1150px] xl:h-[500px]  2xl:w-[1380px] group-hover:grayscale"
          />
          <div className="relative cursor-pointer ">
            <div className="bg-slate-900 absolute p-2 md:p-4 text-center h-[280px] w-[280px] 2xl:h-[600px] 2xl:w-[600px] xl:h-[480px] xl:w-[480px] z-40 xl:left-[120px]  2xl:left-[105px] top-[-166px] left-[40px] 2xl:top-[-350px] xl:top-[-270px] ">
              <div className="bg-slate-900 text-white group-hover:border-2  md:group-hover:border-4 transition-all duration-500 group-hover:border-white h-[260px] w-[265px] xl:w-[450px] xl:h-[450px] 2xl:w-[570px] 2xl:h-[570px]">
                <div className=" flex flex-col gap-7 2xl:gap-12 items-center">
                  <h1 className="mt-6 text-3xl xl:text-7xl 2xl:text-8xl font-tradego">AK</h1>
                  <div className="flex flex-col gap-4 xl:gap-10 2xl:gap-14">
                    <h1 className="text-3xl xl:text-7xl 2xl:text-8xl font-serif">$115,000,000</h1>
                    <p className="font-bold xl:text-lg text-sm 2xl:text-2xl">10936 CHALON RD</p>
                    <div className="flex flex-col justify-center gap-4 md:gap-6 items-center">
                          <div className="flex 2xl:text-2xl xl:text-lg text-sm gap-5 justify-center md:gap-5">
                            <p>{">"}</p>
                            <p>DETAILS</p>
                          </div>
                          <div className="flex mr-20 xl:mr-32 justify-start items-start " >
                            <hr className="border-2 border-white w-[40px] xl:w-[60px]" ></hr>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* finshed part one */}


      <div className=" flex flex-col h-[700px] xl:h-[1200px] 2xl:h-[1250px] w-full relative">
        {/* 1st image */}
        <motion.div
         variants={fadeIn1("up", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true, amount: 0.7 }}
        
        className="md:h-[450px] group max-w-full max-h-full mt-3 top-[-380px]  xl:top-[190px] 2xl:top-[495px] absolute z-30  md:right-0">
          <img src={image_5} className="bg-cover h-[300px] xl:h-[500px] xl:w-[1150px] 2xl:h-[600px] 2xl:w-[1420px] group-hover:grayscale" />
          <motion.div 
           variants={fadeIn1("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: true, amount: 0.7 }}
          className="relative cursor-pointer ">
            <div className="bg-slate-100 absolute p-2 md:p-4 text-center h-[280px] w-[280px] xl:w-[500px] xl:h-[500px] 2xl:h-[600px] 2xl:w-[600px] z-30  xl:right-[130px] 2xl:right-[130px] right-[60px] xl:top-[-270px] top-[-155px] 2xl:top-[-240px] ">
              <div className="bg-slate-100 group-hover:border-4 transition-all duration-500 group-hover:border-black h-[270px] xl:h-[450px] xl:w-[450px] 2xl:h-[570px] 2xl:w-[570px]">
                <div className=" flex flex-col gap-12 items-center">
                  <h1 className="mt-6 text-3xl xl:text-7xl 2xl:text-9xl font-Sigmar">AK</h1>
                  <div className="flex flex-col gap-4 2xl:gap-14 xl:gap-10">
                    <h1 className="2xl:text-8xl xl:text-6xl text-3xl font-serif">$77,000,000</h1>
                    <p className="font-bold  text-sm xl:text-lg 2xl:text-2xl">1420 DAVIES DR</p>
                    <div className="flex flex-col justify-center gap-6 items-center">
                          <div className="flex 2xl:text-2xl text-sm xl:text-lg justify-center gap-5">
                            <p>{">"}</p>
                            <p>DETAILS</p>
                          </div>
                          <div className="flex mr-20 xl:mr-32 justify-start items-start " >
                            <hr className="border-2 border-black w-[40px] xl:w-[60px]" ></hr>
                          </div>
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
          className="md:h-[450px] group w-full mt-3 absolute z-30 top-[50px] xl:top-[920px]  2xl:top-[1450px] md:left-0"
        >
          <img
            src={image_6}
            className="bg-cover h-[295px] xl:h-[500px] xl:w-[1140px] 2xl:h-[600px] 2xl:w-[1400px] group-hover:grayscale"
          />
          <div className="relative cursor-pointer ">
            <div className="bg-slate-900 absolute p-2 md:p-4 text-center  2xl:h-[600px] h-[270px] w-[280px] xl:h-[480px] xl:w-[480px] 2xl:w-[600px] top-[-110px] z-30 left-[50px] 2xl:left-[130px] xl:left-[130px] xl:top-[-290px] 2xl:top-[-290px] ">
              <div className="bg-slate-900 text-white  group-hover:border-2 md:group-hover:border-4 transition-all duration-500 group-hover:border-white h-[255px] xl:h-[450px] xl:w-[450px] 2xl:h-[570px] 2xl:w-[570px]">
                <div className=" flex flex-col gap-8 md:gap-12 items-center">
                  <h1 className="mt-6 2xl:text-9xl xl:text-7xl text-3xl font-Sigmar">AK</h1>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <h1 className="2xl:text-8xl xl:text-6xl text-3xl font-Sigmar">$70,000,000</h1>
                    <p className="font-bold  text-sm xl:text-lg 2xl:text-2xl">120 MONTECITO RANCH LN</p>
                    <div className="flex flex-col justify-center gap-6 items-center">
                          <div className="flex xl:text-lg 2xl:text-2xl text-sm  justify-center gap-5">
                            <p>{">"}</p>
                            <p>DETAILS</p>
                          </div>
                          <div className="flex mr-32 justify-start items-start " >
                            <hr className="border-2 border-white w-[60px]" ></hr>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* finsh part two */}
      <div className=" flex flex-col h-[300px]   xl:h-[1100px] 2xl:h-[1970px] w-full relative">
        {/* 1st image */}
        <div className="md:h-[450px] group 2xl:w-[1400px] w-full  mt-3 top-[-195px] xl:top-[410px] 2xl:top-[1110px] absolute z-30 xl:right-0 2xl:right-0">
          <img
            src={image_7}
            className="bg-cover h-[350px] 2xl:h-[600px] w-full 2xl:w-[1400px] xl:h-[500px] xl:w-[1150px] absolute right-0 group-hover:grayscale"
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
              className="bg-slate-100 absolute p-4 text-center  2xl:h-[600px] h-[280px] xl:w-[480px] right-[60px] xl:h-[480px] 2xl:w-[600px] w-[280px] 2xl:right-[130px] xl:right-[130px] z-30 md:right-5 top-[260px] xl:top-[260px] 2xl:top-[305px] ">
              <div className="bg-slate-100 group-hover:border-2 md:group-hover:border-4 transition-all duration-500 group-hover:border-black h-[250px] xl:h-[450px] 2xl:h-[570px]">
                <div className=" flex flex-col gap-7 md:gap-12 items-center">
                  <h1 className="mt-6 2xl:text-9xl xl:text-7xl text-3xl font-tradego">AK</h1>
                  <div className="flex flex-col gap-4 2xl:gap-14 xl:gap-10">
                    <h1 className="2xl:text-8xl text-2xl xl:text-7xl font-serif">$63,000,000</h1>
                    <p className="font-bold text-sm xl:text-lg 2xl:text-2xl">9214 NIGHTINGALE DR</p>
                    <div className="flex flex-col justify-center gap-6 items-center">
                          <div className="flex 2xl:text-2xl xl:text-lg text-sm  justify-center gap-5">
                            <p>{">"}</p>
                            <p>DETAILS</p>
                          </div>
                          <div className="flex mr-20 xl:mr-32 xl:justify-start xl:items-start " >
                            <hr className="border-2 border-black  w-[40px] xl:w-[60px]" ></hr>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
       
      </div>
      <div className="2xl:h-[1600px] h-[800px]  xl:h-[1400px]  w-full " >
        <div className="relative" >
        <motion.div
          ref={ref}
          style={{
            backgroundImage: `url(${imageBlack})`,
            backgroundSize: "fit",
            y: backgroundY,
          }}
         
          className="2xl:h-[700px] h-[350px] xl:h-[500px] ease-linear w-full bg-fixed top-[200px] xl:top-[300px] 2xl:top-[500px] absolute z-10 "
        >
         
        </motion.div>
        </div>
      
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
              className="2xl:h-max h-[300px]   group w-full mt-3 top-[-5px] xl:top-[0px] absolute z-30 2xl:top-[40px] md:left-0"
            >
              <img
                src={image_8}
                className="bg-cover h-[300px] xl:h-[500px] w-[1150px] 2xl:h-[600px] 2xl:w-[1400px] group-hover:grayscale"
              />
              <motion.div
               variants={fadeIn1("up", 0.1)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: true, amount: 0.7 }}
                className="relative cursor-pointer ">
                <div className="bg-slate-900 absolute p-2 md:p-4 text-center h-[280px] w-[280px] left-[60px] xl:h-[480px] xl:w-[480px] 2xl:h-[600px] 2xl:w-[600px] z-30 2xl:left-[130px] top-[-150px] xl:top-[-250px] xl:left-[130px] 2xl:top-[-345px] ">
                  <div className="bg-slate-900 text-white group-hover:border-2 md:group-hover:border-4 transition-all duration-500 group-hover:border-white h-[260px] xl:h-[450px] 2xl:h-[570px]">
                    <div className=" flex flex-col gap-12 items-center">
                      <h1 className="mt-6 2xl:text-9xl text-3xl xl:text-8xl font-tradego">AK</h1>
                      <div className="flex flex-col gap-4 xl:gap-10 2xl:gap-14">
                        <h1 className="2xl:text-8xl xl:text-7xl text-2xl font-tradego">$62,000,000</h1>
                        <p className="font-bold text-sm xl:text-lg 2xl:text-2xl">942 N ALPINE DR</p>
                        <div className="flex flex-col justify-center gap-6 items-center">
                          <div className="flex 2xl:text-2xl xl:text-lg text-sm  justify-center gap-5">
                            <p>{">"}</p>
                            <p>DETAILS</p>
                          </div>
                          <div className="flex mr-20 xl:mr-32 justify-start items-start " >
                            <hr className="border-2 border-white w-[40px] xl:w-[60px]" ></hr>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="2xl:h-auto xl:h-auto absolute h-[350px] w-full top-[430px] xl:top-[740px] 2xl:top-[885px] z-40">
              <img src={image_9} className="2xl:h-[700px] 2xl:w-full xl:h-[600px] xl:w-full h-[300px]" />
            </motion.div>
          </motion.div>
          
      </div>
      {/*  */}
    </div>
  );
};

export default MiddleImage1;
