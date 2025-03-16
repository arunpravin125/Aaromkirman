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
    <div className="h-max w-full" >
         <div className="md:h-[780px]  md:hidden h-[850px] bg-white w-full relative flex flex-col md:flex-row items-center md:items-start">
    {/* Left Section */}
    <div className="bg-black h-[490px] top-[20px] p-6 md:h-[740px] w-full md:w-[900px] justify-center absolute flex ">
      <div className="relative w-full" >
      <motion.div 
       variants={fadeIn("right", 0.4)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.7 }}
      className="w-full absolute top-[50px] md:max-w-xl gap-5 flex flex-col justify-center  lg:max-w-2xl mx-auto">
        {/* Header */}
        <div
 
  className="flex text-white items-center justify-center gap-5 font-mono text-2xl"
>
  <p
    variants={fadeIn("right", 0.4)}
    initial="hidden"
    whileInView={"show"}
  >
    03
  </p>
  
  <hr
    variants={fadeIn("right", 0.4)}
    initial="hidden"
    whileInView={"show"}
    className="border-y-2 w-[80px] border-slate-600"
  />
  
  <p
    variants={fadeIn("right", 0.4)}
    initial="hidden"
    whileInView={"show"}
  >
    LET'S GET
  </p>
</div>


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
      </motion.div>
      </div>
      
    
    </div>
  
    {/* Right Section - Cards */}
    <div className="w-full md:w-[500px] absolute top-[400px] flex flex-col md:grid md:grid-cols-1 gap-2 md:gap-4 p-4">
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
  <div className="md:h-[780px] xl:h-full 2xl:h-full hidden md:flex h-[750px]   md:w-full  relative md:flex-row flex-col" >
        <div className="bg-black h-[590px] p-6 md:h-[740px] w-screen  xl:h-[950px] 2xl:h-[1150px] md:w-[700px] xl:w-[1050px] 2xl:w-[1200px] relative" >
           
            <div className="absolute xl:top-[40px] md:top-[40px] top-[0px] 2xl:h-[900px] xl:left-[80px] md:left-[40px]" >
                <div className="grid md:grid-cols-1 gap-11 md:ml-10 mt-10  p-2  md:w-[450px] xl:w-[480px] 2xl:w-[500px]" >
                    <motion.div
                    variants={fadeIn1("right",0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:true,amount:1}}

                     className="flex text-white items-center justify-center  md:ml-0 xl:mr-[80px]  2xl:mr-[110px] gap-5 font-mono text-2xl 2xl:text-4xl xl:text-3xl" >
                    <p>03</p>
                    <hr className="border-y-2 w-[80px] border-slate-600" ></hr>
                    <p>LET'S GET</p>
                    </motion.div>
                    
                    <div className='flex flex-col gap-12  md:w-[340px]   xl:w-[370px] justify-center   w-screen  2xl:ml-[20px] md:ml-[140px]' >
                   
                    <motion.h2
                    variants={fadeIn("right",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:true,amount:0.8}}
                    className="text-7xl xl:text-9xl 2xl:text-[170px] absolute xl:right-[40px] 2xl:right-[-50px] 2xl:top-[160px]  xl:top-[130px] font-Sigmar flex flex-col md:top-[100px] text-white" >Started</motion.h2>
                    <motion.p 
                    variants={fadeIn("up",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:true,amount:0.6}}
                    
                    className="text-slate-400 text-center absolute  top-[240px] font-proxima xl:right-[50px] xl:top-[350px] 2xl:top-[450px] 2xl:right-[40px] right-[150px] xl:text-2xl xl:w-[370px] 2xl:text-3xl 2xl:w-[380px] md:right-[30px] md:top-[230px] md:w-[300px]" >Whether you’re looking to buy a home, or homes that are for sale, Aaron Kirman is the technology, and experience driven real estate agent that will get you started. Buying a house or putting your property for sale starts with Aaron Kirman.</motion.p>
                    </div>
                   
                </div>
                 
                   
            </div>
           
        </div>
        <div className="absolute md:w-[500px] bg-red-300 xl:w-[600px] 2xl:w-[800px]  flex flex-col gap-2 md:gap-4 xl:gap-14 2xl:gap-20 top-[400px] left-[10px] w-full md:left-[520px] xl:left-[660px] 2xl:left-[700px] md:top-10 " >
            <motion.div
              variants={fadeIn("left",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:true,amount:0.4}}
            className="relative group transition-all duration-200 hover:bg-slate-200" >
            <motion.div 
            className='md:h-[200px] h-[120px] w-[340px] xl:h-[250px] 2xl:h-[300px] group-hover:opacity-5  bg-fixed group-hover:bg-white  border-4 border-slate-300 md:w-[500px] xl:w-[600px] 2xl:w-[750px] p-3 z-30 md:right-[10px] '
                   ref={ref}
                    style={{ backgroundImage: `url(${imageBlack})`, backgroundSize: "cover", y: backgroundY}}
                  
                    />
                <div className="absolute  top-5 md:top-10 xl:top-16 2xl:top-20  z-40 transition-all duration-300  " >
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
            <motion.div   className='md:h-[200px] xl:h-[250px] 2xl:h-[300px] w-[340px] h-[120px] group-hover:opacity-5  bg-fixed  border-4 group-hover:bg-white border-slate-300 md:w-[500px] xl:w-[600px]  2xl:w-[750px]  p-3 z-30 md:right-[10px] '
                   ref={ref}
                    style={{ backgroundImage: `url(${imageBlack})`, backgroundSize: "cover", y: backgroundY}}
                  
                    />
                <div className="absolute top-5 md:top-10 z-40  xl:top-16 2xl:top-20 " >
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
            <motion.div   className='md:h-[200px] h-[120px] xl:h-[250px] 2xl:h-[300px] w-[340px] group-hover:bg-slate-300  group-hover:opacity-5 border-4 bg-fixed border-slate-300 md:w-[500px] xl:w-[600px]  2xl:w-[750px]  p-3 z-30 right-[10px] '
                    ref={ref}
                    style={{ backgroundImage: `url(${imageBlack})`, backgroundSize: "cover", y: backgroundY}}
                  
                  
                    />
                <div className="absolute top-5 md:top-10 z-40 bg-transparent xl:top-16 2xl:top-20 " >
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