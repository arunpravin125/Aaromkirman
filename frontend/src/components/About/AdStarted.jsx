import React, { useRef } from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import {motion, useScroll} from "framer-motion"
import { fadeIn,fadeIn1 } from "../../variants";
import imageBlack from "../../assets/ed-title-bg.jpg";
import {  useTransform } from "framer-motion";

const AdStarted = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [1, 2], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0.3, 1], ["0%", "100%"]);

  return (
    <div>
         <div className="md:h-[780px] md:hidden h-[750px] bg-white w-full relative flex flex-col md:flex-row items-center md:items-start">
    {/* Left Section */}
    <div className="bg-black h-[590px] p-6 md:h-[740px] w-full md:w-[900px] relative flex items-center justify-center">
      <div className="w-full max-w-lg md:max-w-xl flex flex-col justify-center items-center lg:max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn1("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          className="flex text-white items-center justify-center  gap-5 font-mono text-2xl"
        >
          <p>03</p>
          <hr className="border-y-2 w-[80px] border-slate-600" />
          <p>LET'S GET</p>
        </motion.div>
  
        {/* Content */}
        <div className="flex flex-col gap-8 justify-center items-center">
          {/* Title */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 1 }}
            className="text-6xl md:text-8xl font-Sigmar text-white text-center"
          >
            Started
          </motion.h2>
  
          {/* Paragraph */}
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="text-slate-400 text-center px-4 md:px-0 max-w-md md:max-w-lg"
          >
            Whether you’re looking to buy a home, or homes that are for sale, Aaron Kirman is the technology, and
            experience-driven real estate agent that will get you started. Buying a house or putting your property for
            sale starts with Aaron Kirman.
          </motion.p>
        </div>
      </div>
    </div>
  
    {/* Right Section - Cards */}
    <div className="w-full md:w-[500px] flex flex-col md:grid md:grid-cols-1 gap-2 md:gap-4 p-4">
      {["SELL MY", "BUY A", "VALUE MY"].map((text, index) => (
        <motion.div
          key={index}
          variants={fadeIn("left", 0.2 + index * 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="relative group hover:bg-slate-200 transition-all duration-300"
        >
          <motion.div
            className="h-[120px] md:h-[200px] w-full bg-fixed group-hover:opacity-5 border-4 border-slate-300 md:w-[500px] p-3"
            ref={ref}
            style={{ backgroundImage: `url(${imageBlack})`, backgroundSize: "cover", y: backgroundY }}
          />
          <div className="absolute top-5 md:top-10 z-40 transition-all duration-300 w-full">
            <div className="flex gap-4 items-center">
              <hr className="border-2 border-slate-400 w-[100px] md:w-[150px] group-hover:w-[60px] transition-all duration-300 group-hover:border-slate-900" />
              <p className="font-mono text-white text-sm md:text-lg font-sans group-hover:text-black">{text}</p>
            </div>
            <h1 className="text-4xl md:text-6xl mt-2 ml-32 md:ml-48 transition-all duration-500 text-white font-tradego group-hover:text-black group-hover:ml-20">
              HOME
            </h1>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  <div className="md:h-[780px] hidden md:flex h-[750px] bg-white w-auto md:w-full relative md:flex-row flex-col" >
        <div className="bg-black h-[590px] p-6 md:h-[740px] w-screen  md:w-[900px] relative" >
           
            <div className="absolute md:top-[40px] top-[0px]  md:left-[80px]" >
                <div className="grid md:grid-cols-1 gap-11 md:ml-10 mt-10  p-2 md:w-[450px]" >
                    <motion.div
                    variants={fadeIn1("right",0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:true,amount:1}}

                     className="flex text-white items-center justify-center  md:ml-0 gap-5 font-mono text-2xl" >
                    <p>03</p>
                    <hr className="border-y-2 w-[80px] border-slate-600" ></hr>
                    <p>LET'S GET</p>
                    </motion.div>
                    
                    <div className='flex flex-col gap-12 md:w-[340px] justify-center items-center  w-screen   md:ml-[140px]' >
                   
                    <motion.h2
                    variants={fadeIn("right",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:true,amount:1}}
                    className="text-8xl font-Sigmar flex flex-col justify-center items-center text-white" >Started</motion.h2>
                    <motion.p 
                    variants={fadeIn("up",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:true,amount:0.4}}
                    
                    className="text-slate-400 text-center absolute  top-[240px] right-[150px] md:right-[-30px] md:top-[300px]" >Whether you’re looking to buy a home, or homes that are for sale, Aaron Kirman is the technology, and experience driven real estate agent that will get you started. Buying a house or putting your property for sale starts with Aaron Kirman.</motion.p>
                    </div>
                   
                </div>
                 
                   
            </div>
           
        </div>
        <div className="absolute md:w-[500px] flex flex-col gap-2 md:gap-4 top-[400px] left-[10px]  md:left-[660px] md:top-10 md:right-[100px]" >
            <motion.div
              variants={fadeIn("left",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:true,amount:0.4}}
            className="relative group transition-all duration-200 hover:bg-slate-200" >
            <motion.div 
            className='md:h-[200px] h-[120px] w-[340px] group-hover:opacity-5  bg-fixed group-hover:bg-white  border-4 border-slate-300 md:w-[500px] p-3 z-30 md:right-[10px] '
                   ref={ref}
                    style={{ backgroundImage: `url(${imageBlack})`, backgroundSize: "cover", y: backgroundY}}
                  
                    />
                <div className="absolute  top-5 md:top-10 z-40 transition-all duration-300  " >
                    <div className="flex gap-4 items-center " >
                    <hr className="border-2 group-hover:border-slate-900 transition-all duration-300 border-slate-400 md:w-[150px] group-hover:w-[60px] w-[100px]" ></hr>
                    <p className="font-mono group-hover:text-black text-white text-sm font-sans md:text-lg" >SELL MY</p>
                    </div>
                     <h1 className="md:text-6xl mt-2 group-hover:ml-20 transition-all duration-500 ml-32 md:ml-48 text-4xl group-hover:text-black text-white font-tradego" >HOME</h1>
                </div>
            </motion.div>
            <motion.div
             variants={fadeIn("left",0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:true,amount:0.6}}
            
            className="relative group hover:bg-slate-200 transition-all duration-300" >
            <motion.div   className='md:h-[200px] w-[340px] h-[120px] group-hover:opacity-5  bg-fixed  border-4 group-hover:bg-white border-slate-300 md:w-[500px] p-3 z-30 md:right-[10px] '
                   ref={ref}
                    style={{ backgroundImage: `url(${imageBlack})`, backgroundSize: "cover", y: backgroundY}}
                  
                    />
                <div className="absolute top-5 md:top-10 z-40   " >
                    <div className="flex gap-4 items-center" >
                    <hr className="border-2 transition-all duration-300 group-hover:border-slate-900 border-slate-400 w-[100px] group-hover:w-[70px] md:w-[150px]" ></hr>
                    <p className="font-mono group-hover:text-black text-white text-sm md:text-lg  font-sans" >BUY A</p>
                    </div>
                     <h1 className="md:text-6xl mt-2 group-hover:ml-20 transition-all duration-500 ml-32 md:ml-48 text-4xl group-hover:text-black text-white font-tradego" >HOME</h1>
                </div>
            </motion.div>
            <motion.div 
             variants={fadeIn("left",0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:true,amount:0.4}}
            className="relative group hover:bg-slate-200 transition-all duration-300" >
            <motion.div   className='md:h-[200px] h-[120px] w-[340px] group-hover:bg-slate-300  group-hover:opacity-5 border-4 bg-fixed border-slate-300 md:w-[500px] p-3 z-30 right-[10px] '
                    ref={ref}
                    style={{ backgroundImage: `url(${imageBlack})`, backgroundSize: "cover", y: backgroundY}}
                  
                  
                    />
                <div className="absolute top-5 md:top-10 z-40 bg-transparent " >
                    <div className="flex gap-4 items-center" >
                    <hr className="border-2 border-slate-400 w-[100px] group-hover:w-[70px] transition-all duration-300 group-hover:border-slate-900 md:w-[150px]" ></hr>
                    <p className="font-mono text-white md:text-lg font-sans group-hover:text-black" >VALUE MY</p>
                    </div>
                     <h1 className="md:text-6xl text-4xl mt-2 ml-32 md:ml-48 text-white group-hover:text-black group-hover:ml-20 transition-all duration-500 font-tradego" >HOME</h1>
                </div>
            </motion.div>
       
        </div>
        
            
    </div>
    </div>
    
  )
}

export default AdStarted