import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import imageFort from "../../assets/fort.jpg";
import imageFort1 from "../../assets/fort1.jpg";
import imageLinden from "../../assets/Linden.jpg";
import { motion } from "framer-motion";
import { fadeIn, fadeIn1, fadeInSpeed } from "../../variants";

const houseAndPrice1 = [
  {
    _id: 1,
    img: imageFort,
    size:{
      width:300,
      height:300
    },
    card: {
      name: "AK",
      price: "$135,000,000",
      located: "HILLCREST",
    },
  },
  {
    _id: 4,
    img: imageFort,
    card: {
      name: "AK",
      price: "$135,000,000",
      located: "HILLCREST",
    },
  },
  {
    _id: 2,
    img: imageLinden,
    card: {
      name: "AK",
      price: "$29,950,000",
      located: "803 N LINDEN DRIVE",
    },
  },
  {
    _id: 3,
    img: imageFort1,
    card: {
      name: "AK",
      price: "$23,750,000",
      located: "1940 BEL AIR ROAD",
    },
  },
];
const houseAndPrice2 = [
  {
    _id: 1,
    img: imageFort,
    size:{
      width:300,
      height:300
    },
    card: {
      name: "AK",
      price: "$135,000,000",
      located: "HILLCREST",
    },
  },
  {
    _id: 4,
    img: imageFort,
    card: {
      name: "AK",
      price: "$135,000,000",
      located: "HILLCREST",
    },
  },
  {
    _id: 2,
    img: imageLinden,
    card: {
      name: "AK",
      price: "$29,950,000",
      located: "803 N LINDEN DRIVE",
    },
  },
  {
    _id: 3,
    img: imageFort1,
    card: {
      name: "AK",
      price: "$23,750,000",
      located: "1940 BEL AIR ROAD",
    },
  },
];

const AdSoldList = () => {
  return (
    <div className="md:h-[1180px] h-[1550px]  w-full overflow-hidden ">
      <div className=" md:h-[400px] flex h-[270px] flex-col items-center justify-center">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="p-3 flex mt-8  md:mt-0 items-center gap-4 md:gap-7 text-center  h-[100px]">
            <p className="text-slate-500 text-lg">04</p>
            <hr className="border-2 border-slate-800 w-[50px] md:w-[80px]" />
            <p className="text-slate-500 md:text-2xl text-lg font-mono">AARON KIRMAN</p>
          </div>
          <h1 className="md:text-8xl text-6xl font-tradego">Sold Listings</h1>
        </motion.div>
      </div>
      
      {/* Swiper Slider */}
     <div className="flex flex-col gap-3 md:gap-16" >
     <motion.div 
      variants={fadeIn1("right",0.1)}
                                 initial="hidden"
                                 whileInView={"show"}
                                 viewport={{once:true,amount:0.4}}
     
     className=" md:h-[300px] md:w-full overflow-hidden ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
         loop="true"
          modules={[Navigation]}
          className=""
        >
          {houseAndPrice1.map((house) => (
            <SwiperSlide >
              <div 
              key={house._id} className=" flex md:flex-row  flex-col cursor-pointer items-center  md:gap-4 md:h-[340px] md:w-[800px] ">
               <div>
               <img
                  className="md:h-[300px] h-[320px] w-[320px] md:w-[300px]"

                  src={house.img}
                  alt="house"
                />
               </div>
                <div className=" md:h-[300px] md:w-[500px] h-[300px] w-[315px] bg-slate-200 group text-black hover:bg-black hover:text-white grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr]" >
                    <div className="flex flex-col items-center gap-3 p-5" >
                      <h1 className="md:text-6xl" >AK</h1>
                      <div className="h-52 w-[2px]  bg-gray-500"></div>

                    </div>
                    <div className="md:h-[180px] gap-4 md:justify-start md:w-[240px] flex flex-col  mt-24 mr-24 p-3" >
                      <h2 className="text-3xl font-serif" >{house.card.price}</h2>
                      <p className="font-semibold" >{house.card.located}</p>
                      <div className="flex gap-3 ml-3 font-semibold" >
                        <p>{">"}</p>
                        <p>DETAILS</p>
                      </div>
                      <hr className="border-2 border-slate-600 group-hover:border-slate-100 w-[60px]" ></hr>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
     
  {/* 2nd \|/ */}
      <motion.div 
       variants={fadeIn1("left",0.1)}
                                  initial="hidden"
                                  whileInView={"show"}
                                  viewport={{once:true,amount:0.7}}
      
      className="flex flex-col md:gap-24" >
      <div className=" md:h-[300px] md:w-full h-[300px] ">
        <Swiper
        initialSlide={2}
           centeredSlides="false"
          spaceBetween={10}
          slidesPerView={1.5}
          loop="true"
          modules={[Navigation]}
          className=""
        >
          {houseAndPrice2.map((house) => (
            <SwiperSlide >
              <div key={house._id} className="  flex md:flex-row flex-col cursor-pointer items-center  gap-4 md:h-[340px] md:w-[800px]  rounded-lg ">
               <div>
               <img
                  className="md:h-[300px] h-[320px] w-[320px] md:w-[300px]"

                  src={house.img}
                  alt="house"
                />
               </div>
                <div className=" md:h-[300px] h-[300px] bg-slate-200 md:w-[440px] w-[320px] group text-black hover:bg-black hover:text-white grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr]" >
                    <div className="flex flex-col md:items-center gap-3 p-5" >
                      <h1 className="md:text-6xl  " >AK</h1>
                      <div className="h-52 w-[2px] bg-gray-500"></div>

                    </div>
                    <div className="md:h-[180px] gap-4 justify-start md:w-[240px] flex flex-col  mt-24 mr-24 p-3" >
                      <h2 className="text-3xl font-serif" >{house.card.price}</h2>
                      <p className="font-semibold" >{house.card.located}</p>
                      <div className="flex gap-3 ml-3 font-semibold" >
                        <p>{">"}</p>
                        <p>DETAILS</p>
                      </div>
                      <hr className="border-2 border-slate-600 group-hover:border-slate-100 w-[60px]" ></hr>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </motion.div>
     </div>
      
   
     
    </div>
  );
};

export default AdSoldList;
