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
    <div className="md:h-[1180px] h-[1550px] xl:h-[1550px] 2xl:h-[1650px]   w-full overflow-hidden ">
      <div className=" md:h-[400px] flex h-[270px] flex-col items-center justify-center">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="p-3 flex mt-8  md:mt-0 items-center gap-4 md:gap-7 text-center h-[100px]">
            <p className="text-slate-500 text-lg  xl:text-4xl 2xl:text-5xl ">04</p>
            <hr className="border-2 border-slate-800 w-[50px] md:w-[80px]" />
            <p className="text-slate-500 md:text-2xl text-lg  xl:text-4xl 2xl:text-5xl font-mono">AARON KIRMAN</p>
          </div>
          <h1 className="md:text-8xl text-6xl  xl:text-8xl 2xl:text-9xl font-tradego">Sold Listings</h1>
        </motion.div>
      </div>
      
      {/* Swiper Slider */}
     <div className="flex flex-col gap-3 md:gap-16 2xl:gap-7" >
     <motion.div 
      variants={fadeIn1("right",0.1)}
                                 initial="hidden"
                                 whileInView={"show"}
                                 viewport={{once:true,amount:0.4}}
     
     className=" md:h-[300px] xl:h-[400px] 2xl:h-[400px] hidden md:block xl:hidden md:w-full overflow-hidden ">
        <Swiper
          spaceBetween={40}
          slidesPerView={1.5}
         loop="true"
          modules={[Navigation]}
          className=""
        >
          {houseAndPrice1.map((house) => (
            <SwiperSlide >
              <div 
              key={house._id} className=" flex md:flex-row  flex-col cursor-pointer items-center  md:gap-1 md:h-[340px] md:w-[800px] ">
               <div>
               <img
                  className="md:h-[300px] h-[320px] w-[320px] md:w-[300px] xl:h-[400px] 2xl:h-[550px] xl:w-[400px] 2xl:w-[550px]"

                  src={house.img}
                  alt="house"
                />
               </div>
                <div className=" md:h-[300px] md:w-[440px] h-[300px] w-[315px] xl:h-[450px] 2xl:h-[500px]  xl:w-[500px] 2xl:w-[850px] bg-slate-200 group text-black hover:bg-black hover:text-white grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr]" >
                    <div className="flex flex-col items-center gap-3 p-5" >
                      <h1 className="md:text-6xl" >AK</h1>
                      <div className="h-52 w-[2px]  bg-gray-500"></div>

                    </div>
                    <div className="md:h-[180px]  gap-4 md:justify-start relative md:w-[240px] flex flex-col  mt-24 mr-14 2xl:mt-[150px] p-3" >
                      <h2 className="text-3xl font-serif absolute top-[0px] md:left-[-30px] md:text-5xl" >{house.card.price}</h2>
                      <p className="font-semibold absolute top-[60px]" >{house.card.located}</p>
                      <div className="flex gap-3 ml-3 absolute md:top-[100px] font-semibold" >
                        <p>{">"}</p>
                        <p>DETAILS</p>
                      </div>
                      <hr className="border-2 border-slate-600 absolute top-[140px] group-hover:border-slate-100 w-[60px]" ></hr>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {/* xl swiper */}
     <motion.div 
      variants={fadeIn1("right",0.1)}
                                 initial="hidden"
                                 whileInView={"show"}
                                 viewport={{once:true,amount:0.4}}
     
     className=" md:h-[300px] xl:h-[480px] 2xl:h-[450px] hidden md:hidden  xl:block 2xl:hidden md:w-full overflow-hidden ">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
         loop="true"
          modules={[Navigation]}
          className=""
        >
          {houseAndPrice1.map((house) => (
            <SwiperSlide >
              <div 
              key={house._id} className=" flex md:flex-row  flex-col cursor-pointer items-center  xl:h-[450px] xl:w-[850px]  md:gap-4 xl:gap-1 md:h-[340px] md:w-[800px] ">
               <div>
               <img
                  className="md:h-[300px] h-[320px] w-[320px] md:w-[300px] xl:h-[450px] 2xl:h-[550px] xl:w-[400px] 2xl:w-[550px]"

                  src={house.img}
                  alt="house"
                />
               </div>
                <div className=" md:h-[300px] md:w-[500px] h-[300px] w-[315px] xl:h-[450px] 2xl:h-[500px]  xl:w-[500px] 2xl:w-[850px] bg-slate-200 group text-black hover:bg-black hover:text-white grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr]" >
                    <div className="flex flex-col items-center gap-3 p-5" >
                      <h1 className="md:text-6xl xl:text-7xl" >AK</h1>
                      <div className="h-52 w-[2px] xl:h-[300px] bg-gray-500"></div>

                    </div>
                    <div className="md:h-[180px]  gap-4 xl:gap-7 md:justify-start md:w-[240px] relative flex flex-col  xl:w-[500px] mt-24 mr-24 xl:mr-14 2xl:mt-[150px] p-3" >
                      <h2 className="text-3xl font-serif xl:text-6xl absolute right-[150px]" >{house.card.price}</h2>
                      <p className="font-semibold xl:text-2xl absolute top-[110px]" >{house.card.located}</p>
                      <div className="flex gap-3 ml-3 xl:text-lg absolute top-[170px] font-semibold" >
                        <p>{">"}</p>
                        <p>DETAILS</p>
                      </div>
                      <hr className="border-2 border-slate-600 absolute top-[220px] group-hover:border-slate-100 w-[60px]" ></hr>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {/* 2xl swiper */}
     <motion.div 
      variants={fadeIn1("right",0.1)}
                                 initial="hidden"
                                 whileInView={"show"}
                                 viewport={{once:true,amount:0.4}}
     
     className=" md:h-[300px] xl:h-[400px] 2xl:h-[550px] hidden md:hidden xl:hidden 2xl:block md:w-full overflow-hidden ">
        <Swiper
          spaceBetween={15}
          slidesPerView={1.5}
         loop="true"
          modules={[Navigation]}
          className=""
        >
          {houseAndPrice1.map((house) => (
            <SwiperSlide >
              <div 
              key={house._id} className=" flex md:flex-row  flex-col cursor-pointer items-center 2xl:h-[500px] 2xl:w-[1020px]  md:gap-4 2xl:gap-2 md:h-[340px] md:w-[800px] ">
               <div>
               <img
                  className="md:h-[300px] h-[320px] w-[320px] md:w-[300px] xl:h-[400px] 2xl:h-[550px] xl:w-[400px] 2xl:w-[680px]"

                  src={house.img}
                  alt="house"
                />
               </div>
                <div className=" md:h-[300px] md:w-[500px] h-[300px] w-[315px] xl:h-[450px] 2xl:h-[500px] xl:w-[500px] 2xl:w-[950px] bg-slate-200 group text-black hover:bg-black hover:text-white grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr]" >
                    <div className="flex flex-col items-center 2xl:mt-[20px] gap-3 2xl:gap-9 p-5" >
                      <h1 className="md:text-6xl 2xl:text-8xl" >AK</h1>
                      <div className="h-52 w-[2px] 2xl:w-[6px] 2xl:h-[300px] bg-gray-500"></div>

                    </div>
                    <div className="md:h-[180px]  gap-4 2xl:gap-8 md:justify-start md:w-[240px] flex flex-col  mt-24 mr-16 2xl:mt-[150px] p-1" >
                      <h2 className="text-3xl 2xl:text-6xl font-serif" >{house.card.price}</h2>
                      <p className="font-semibold 2xl:text-3xl" >{house.card.located}</p>
                      <div className="flex gap-3 2xl:text-2xl ml-3 font-semibold" >
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
{/*  */}
      <motion.div 
      variants={fadeIn1("right",0.1)}
                                 initial="hidden"
                                 whileInView={"show"}
                                 viewport={{once:true,amount:0.4}}
     
     className=" md:h-[300px] md:hidden md:w-full overflow-hidden ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
         loop="true"
          modules={[Navigation]}
          className=""
        >
          {houseAndPrice1.map((house) => (
            <SwiperSlide >
              <div 
              key={house._id} className=" flex md:flex-row gap-1 flex-col cursor-pointer items-center  md:gap-4 md:h-[340px] md:w-[800px] ">
               <div>
               <img
                  className="md:h-[300px] h-[320px] w-[320px] md:w-[300px]"

                  src={house.img}
                  alt="house"
                />
               </div>
                <div className=" md:h-[300px] md:w-[500px] h-[300px] w-[320px] bg-slate-200 group text-black hover:bg-black hover:text-white grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr]" >
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
     
  {/* 2nd \|/ md */}
      <motion.div 
       variants={fadeIn1("left",0.1)}
                                  initial="hidden"
                                  whileInView={"show"}
                                  viewport={{once:true,amount:0.7}}
      
      className="md:flex flex-col hidden  md:gap-24" >
      <div className=" md:h-[300px] hidden md:block xl:hidden  2xl:hidden md:w-full h-[300px] ">
        <Swiper
        initialSlide={2}
           centeredSlides="false"
          spaceBetween={20}
          slidesPerView={1.5}
          loop="true"
          modules={[Navigation]}
          className=""
        >
          {houseAndPrice2.map((house) => (
            <SwiperSlide >
              <div key={house._id} className="  flex md:flex-row flex-col cursor-pointer items-center  gap-1 md:h-[340px] md:w-[800px]  rounded-lg ">
               <div>
               <img
                  className="md:h-[300px] h-[320px] w-[320px] md:w-[300px]"

                  src={house.img}
                  alt="house"
                />
               </div>
                <div className=" md:h-[300px] h-[300px] bg-slate-200 md:w-[420px] w-[320px] group text-black hover:bg-black hover:text-white grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr]" >
                    <div className="flex flex-col md:items-center gap-3 p-5" >
                      <h1 className="md:text-6xl  " >AK</h1>
                      <div className="h-52 w-[2px] bg-gray-500"></div>

                    </div>
                    <div className="md:h-[180px] gap-4 justify-start md:w-[240px] flex flex-col  mt-24 mr-24 p-3" >
                      <h2 className="text-3xl font-serif md:text-5xl" >{house.card.price}</h2>
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
      {/* xl  */}
      <motion.div 
       variants={fadeIn1("left",0.1)}
                                  initial="hidden"
                                  whileInView={"show"}
                                  viewport={{once:true,amount:0.7}}
      // dfefewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
      className="md:flex flex-col hidden xl:h-[450px md:gap-24" >
      <div className=" md:h-[500px] hidden xl:block 2xl:hidden xl:h-[450px  md:w-full h-[300px] ">
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
              <div key={house._id} className="  flex md:flex-row flex-col cursor-pointer items-center xl:h-[450px] xl:w-[850px]  gap-1 md:h-[340px] md:w-[800px]  rounded-lg ">
               <div>
               <img
                  className="md:h-[300px] h-[320px] w-[320px] xl:h-[400px] xl:w-[400px] md:w-[300px]"

                  src={house.img}
                  alt="house"
                />
               </div>
               {/* dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff ffffffffffff */}
                <div className=" md:h-[300px] h-[300px] bg-slate-200 md:w-[440px] w-[320px] xl:h-[400px] xl:w-[600px] group text-black hover:bg-black hover:text-white grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr]" >
                    <div className="flex flex-col md:items-center gap-3 p-5" >
                      <h1 className="md:text-6xl xl:text-7xl " >AK</h1>
                      <div className="h-52 w-[2px] xl:h-[250px] bg-gray-500"></div>

                    </div>
                    <div className="md:h-[180px] gap-4 relative justify-start md:w-[240px] flex flex-col  mt-24 mr-24 p-3" >
                      <h2 className="text-3xl font-serif absolute xl:top-[10px] xl:left-[-49px] xl:text-6xl" >{house.card.price}</h2>
                      <p className="font-semibold absolute xl:top-[90px] xl:text-lg" >{house.card.located}</p>
                      <div className="flex gap-3 absolute top-[140px] xl:text-lg ml-3 font-semibold" >
                        <p>{">"}</p>
                        <p>DETAILS</p>
                      </div>
                      <hr className="border-2 absolute top-[190px] border-slate-600 group-hover:border-slate-100 w-[60px]" ></hr>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </motion.div>
      {/* 2xl */}
      <motion.div 
       variants={fadeIn1("left",0.1)}
                                  initial="hidden"
                                  whileInView={"show"}
                                  viewport={{once:true,amount:0.7}}
      
      className="md:flex flex-col hidden  md:gap-24" >
      <div className=" md:h-[300px] hidden xl:hidden 2xl:block md:w-full h-[300px] ">
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
              <div key={house._id} className="flex md:flex-row m-1 p-1 flex-col cursor-pointer items-center 2xl:h-[550px] 2xl:w-[1020px]   gap-4 md:h-[340px] md:w-[800px]  rounded-lg ">
               <div>
               <img
                  className="md:h-[300px] h-[320px] w-[320px] 2xl:h-[500px] 2xl:w-[500px] md:w-[300px]"

                  src={house.img}
                  alt="house"
                />
               </div>
                <div className=" md:h-[300px] h-[300px] bg-slate-200 md:w-[440px] p-2 w-[320px] 2xl:h-[500px] 2xl:w-[600px] group text-black hover:bg-black hover:text-white grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr]" >
                    <div className="flex flex-col md:items-center gap-3 p-5" >
                      <h1 className="md:text-6xl 2xl:text-8xl  " >AK</h1>
                      <div className="h-52 w-[2px] 2xl:h-[250px] bg-gray-500"></div>

                    </div>
                    <div className="md:h-[180px] gap-4 2xl:gap-8 justify-start md:w-[240px] 2xl:w-[330px] flex flex-col  mt-24 mr-14 p-3" >
                      <h2 className="text-3xl 2xl:text-6xl font-serif" >{house.card.price}</h2>
                      <p className="font-semibold 2xl:text-3xl" >{house.card.located}</p>
                      <div className="flex gap-3 ml-3 2xl:text-lg font-semibold" >
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
      <motion.div 
       variants={fadeIn1("left",0.1)}
                                  initial="hidden"
                                  whileInView={"show"}
                                  viewport={{once:true,amount:0.7}}
      
      className="flex flex-col md:hidden md:gap-24" >
      <div className=" md:h-[300px] md:w-full h-[300px] ">
        <Swiper
        initialSlide={2}
           centeredSlides="false"
          spaceBetween={10}
          slidesPerView={1}
          loop="true"
          modules={[Navigation]}
          className=""
        >
          {houseAndPrice2.map((house) => (
            <SwiperSlide >
              <div key={house._id} className="  flex md:flex-row flex-col cursor-pointer items-center  gap-2 md:h-[340px] md:w-[800px]  rounded-lg ">
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
