import React from 'react'
import {AnimatePresence, motion} from "framer-motion"
import { fadeIn,fadeIn1 } from "../../variants";


const About = () => {
  return (
    <div className="md:h-[850px] 2xl:h-[1200px] xl:h-[1000px] flex justify-center  h-auto overflow-hidden w-full p-5" >
        <div className='md:w-full xl:w-full 2xl:w-full   justify-center md:p-8 xl:p-4 2xl:p-2 flex md:flex-row xl:flex-row xl:gap-16 2xl:flex-row 2xl:gap-14 flex-col m-5 xl:m-2 2xl:m-1  gap-4 md:gap-24' >
        
        <div
           className=" flex flex-col mt-4  md:mb-[330px] xl:mt-[10px] justify-center items-center md:justify-normal md:items-start  2xl:mt-[1px] md:gap-5 " >
               <motion.div
               variants={fadeIn("right",0.7)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once:true,amount:0.7}}

               className="flex p-2 xl:text-2xl 2xl:text-3xl md:gap-10 gap-4 items-center  md:ml-6   " >
                   <p>02</p>
                   <hr className="border-x-2 border-slate-500 w-[70px] " ></hr>
                   <p>ABOUT</p>
               </motion.div>
               <motion.div 
                variants={fadeIn("right",0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true,amount:0.7}}
               className="p-2 text-center md:text-current" >
                   <h1 className="text-7xl md:text-7xl xl:text-8xl 2xl:text-9xl font-tradego" >AARON</h1>
                   <h1 className="text-7xl md:text-7xl xl:text-8xl  2xl:text-9xl font-tradego">KIRMAN</h1>
               </motion.div>
           </div>
        
         
            <motion.div 
             variants={fadeIn("up",0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:true,amount:0.7}}

            className='p-3 md:w-[350px] bg-green-300 xl:w-[370px] 2xl:w-[430px]  xl:mt-10 2xl:mt-1 w-[390px] text-center  overflow-hidden flex flex-col gap-7  md:gap-10 xl:gap-8 2xl:gap-11' >
               <motion.p 
                variants={fadeIn("up",0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true,amount:0.7}}
               className="2xl:text-5xl xl:text-4xl md:text-2xl space-y-3 font-ivarfine text-center mx-3 md:mx-0 " >With over $19 Billion in luxury home sales,  Aaron Kirman represents the finest estates across the globe and was ranked in the top 5 luxury real estate agents in the US by the Wall Street Journal.</motion.p>
               <p
                variants={fadeIn("up",0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true,amount:0.7}}
               className="md:text-lg xl:text-2xl 2xl:text-3xl  font-ivarfine  text-sm mx-6 md:mx-0 " >Aaron’s repertoire as the nation’s top agent is solidified by his investment in technology deployed in every aspect of his business process.</p>
            <div className="flex md:mr-11 mt-3 2xl:text-3xl xl:text-2xl gap-5 relative p-3  md:p-1 flex-col ml-32 md:ml-10 xl:ml-20 md:mt-1 xl:mt-20 xl:p-2 2xl:p-3  group group-hover:border transition-all duration-500 hover:bg-black w-[150px] 2xl:w-[250px] xl:w-[170px] hover:border-black  hover:text-white" >
                <div className="flex md:p-2 items-center 2xl:p-4 gap-3 " >
                    <p>{">"}</p>
                    <p className="text-sm 2xl:text-2xl xl:text-lg font-extralight" >READ MORE</p>
                </div>
                
                <hr className="border-y-2 absolute top-6 left-0 md:top-6 2xl:top-[68px]  xl:top-10 border-black w-16 mt-5 group-hover:w-[140px]  transition-transform duration-200" ></hr>
            </div>
            </motion.div>
            <motion.div 
             variants={fadeIn1("up",0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:true,amount:0.7}}
            className='p-3 w-[325px] font-proxima md:w-[340px] xl:text-lg 2xl:text-2xl 2xl:w-[370px] xl:w-[350px]  hidden md:flex flex-col gap-14 md:gap-10 xl:gap-10'>
                <motion.p 
                variants={fadeIn1("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true,amount:0.7}}
                >He has an extensive client base featuring those who seek the luxury lifestyle including titans of industry, celebrities, the royal families, major lending institutions and foreign investors. As a prominent figure in the luxury real estate market, Aaron has received International acclaim for record setting sales across Los Angeles and Southern California.</motion.p>
                <motion.p 
                variants={fadeIn1("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true,amount:0.7}}
                >His success in luxury real estate for the last 20 years has elevated Aaron’s persona beyond salesman to serial entrepreneur with the launch of Kirman Capital – a branch of the Kirman Group – focused on investing in early-stage technology startups in real-estate.</motion.p>
                Over a notable real estate career, Aaron has sold the infamous Danny Thomas Estate, which reportedly sold for $50,000,000;…
            </motion.div>
        </div>
        
    </div>
  )
}

export default About