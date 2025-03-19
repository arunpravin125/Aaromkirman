import React, { useRef } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import footerBg from "../../assets/footer-bg.jpg";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa6";
import agentImage from "../../assets/social-agent-photo.png";
import imageAgent from "../../assets/Aaron-Kirman-Holds-Priciest-Encino-Listing-in-40M-Manse-m-1024x640.jpg";
import imageAgent2 from "../../assets/w696h464 (1).jpeg";
import realAgent from "../../assets/The-Real-Deal-Logo-2.png";
import lossAngeles from "../../assets/Los-Angeles-Business-Journal-e1663351879910.png";
import { motion, useScroll, useTransform } from "framer-motion";

const FeaturedIn8 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [1, 2], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0.3, 1], ["0%", "100%"]);

  return (
    <div className=" md:h-[1720px] h-full xl:h-full 2xl:h-auto  justify-center z-20 flex flex-col gap-7 w-[100%] md:w-full">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex items-center justify-center p-3 gap-5">
          <p className="text-slate-600 text-[20px] 2xl:text-5xl xl:text-4xl font-sans">
            08
          </p>
          <hr className="border-[1px] border-slate-600 w-20 2xl:w-[200px] xl:w-[150px]" />
          <p className="text-slate-600 text-[20px] font-sans 2xl:text-5xl xl:text-4xl">
            AS
          </p>
        </div>
        <div>
          <p className="text-6xl font-tradego 2xl:text-9xl xl:text-8xl md:text-7xl text-center">
            Featured in
          </p>
        </div>

      </div>
      {/*  */}
      <div className="w-[100%] md:hidden flex flex-col justify-center items-center  top-[0px]  " >
   <div className="flex flex-col  bg-white  items-center  w-[100%] ">
                {/* 1st Item */}
                <div className="relative flex flex-col gap-3 transition-all duration-500 justify-center items-center h-[100%] w-[95%] md:w-full">
                  <div className="group  top-[10px] flex items-center justify-center w-[100%]">
                    <img
                      src={imageAgent}
                      className="group-hover:opacity-35 transition-all duration-300 w-[100%]  h-[75%] object-cover"
                    />
                    <img
                      src={realAgent}
                      className="absolute opacity-0 transition-all duration-300 group-hover:opacity-95 w-32 mx-auto"
                    />
                  </div>
                  <div className="relative flex flex-col gap-1 text-sm justify-start w-[100%]">
                    <p className="font-tradego w-[100%] font-semibold">
                      $40M ENCINO MANSE SETS NEW LISTING RECORD
                    </p>
                    <div className="flex justify-start text-xs gap-1">
                      <p>By:</p>
                      <h2 className="font-semibold">Kari Hamanaka</h2>
                      <p>Published:</p>
                      <p>Fri, Feb 28 2025</p>
                    </div>
                    <hr className="border-[1px] border-slate-300 w-[100%]  mx-auto" />
                  </div>
                </div>

                {/* 2nd Item */}
                <div className="relative flex flex-col gap-3 transition-all duration-500 justify-center items-center h-[90%] w-[95%] md:w-full">
                  <div className="group relative flex items-center justify-center w-[100%]">
                    <img
                      src={imageAgent2}
                      className="group-hover:opacity-35 transition-all duration-300 w-[100%]  h-auto object-cover"
                    />
                    <img
                      src={lossAngeles}
                      className="absolute opacity-0 transition-all duration-300 group-hover:opacity-95 w-32 mx-auto"
                    />
                  </div>
                  <div className="relative flex flex-col gap-1 text-sm justify-start w-[100%] ">
                    <p className="font-tradego w-[100%] font-semibold">
                      $40M ENCINO MANSE SETS NEW LISTING RECORD
                    </p>
                    <div className="flex justify-start text-xs gap-1">
                      <p>By:</p>
                      <h2 className="font-semibold">Kari Hamanaka</h2>
                      <p>Published:</p>
                      <p>Fri, Feb 28 2025</p>
                    </div>
                    <hr className="border-[1px] border-slate-300 w-[100%]  mx-auto" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-start">
                <div className=" md:hidden  z-30 top-[0px]  h-[70px] flex justify-center items-center w-[100%] right-[60px]">
                  <div className="bg-white relative mt-3 group transition-colors duration-500 hover:bg-black  flex flex-col gap-2 h-[70px] w-[100%] ">
                    <div className="flex items-center justify-center mt-3 group-hover:text-white text-sm  text-black p-4 gap-4">
                      <p>{">"}</p>
                      <p className="font-tradego w-[100%] ">AARON IN THE MEDIA</p>
                    </div>
                    <hr className="border-2 absolute top-[65px] border-black transition-all duration-300 group-hover:w-[90%] w-14" />
                  </div>
                </div>
              </div>
              <div className=" h-[630px] flex flex-col justify-center items-center w-full" >

<div className="flex  flex-col justify-center md:hidden  items-center relative h-[650px] w-[90%]">
          <div className="md:h-[700px] h-[300px] w-[90%]   absolute top-[10px] md:w-[600px] lg:h-[400px] lg:w-[500px] xl:h-[500px]  xl:w-[700px] 2xl:h-[600px] 2xl:w-[800px]">
            <img
              src={agentImage}
              className=" top-[0px] right-[14%]  md:top-[-160px] image-full 2xl:top-[-280px] md:h-[600px] lg:top-[-130px] xl:top-[-200px] xl:h-[700px] xl:w-[850px] 2xl:h-[800px] 2xl:w-[1000px] bg-cover h-[450px] w-[100%] md:w-[600px] z-40"
            />
          </div>
          <div className="  absolute top-[350px] md:hidden w-[100%] md:bg-transparent    md:top-[-440px] md:right-[20px]  z-40 md:h-[600px] h-[36] md:w-[700px] ">
            <div className="relative flex justify-center gap-0 w-[100%] items-center md:gap-2">
              <div className="flex flex-col gap-2 mt-2 md:p-3">
                <div className="md:h-[210px] h-[90%] w-[90%] md:w-[210px] flex items-center justify-center bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center md:gap-2">
                    <IoLogoYoutube className="size-20 hover:fill-red-500 fill-slate-300" />
                    <p className="text-slate-500 text-lg font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>

                <div className="md:h-[210px] h-[90%] w-[90%] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808] ">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-8xl  font-Sigmar hover:fill-blue-400 text-white">
                      {" "}
                      in
                    </p>
                    <p className="text-slate-500 text-lg font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-11 md:p-3">
                <div className="md:h-[210px] h-[90%] w-[90%] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FaInstagram className="size-24 hover:fill-red-300 fill-slate-300" />

                    <p className="text-slate-500 text-lg font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
                <div className="md:h-[210px]h-[90%] w-[90%] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <RiTwitterXLine className="size-24 hover:fill-slate-700 fill-slate-300" />
                    <p className="text-slate-500 text-lg font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-5 md:p-3">
                <div className="md:h-[210px]h-h-[90%] w-[90%] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <SlSocialFacebook className="size-24 hover:fill-blue-400 fill-slate-300" />

                    <p className="text-slate-500 text-lg font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
                <div className="md:h-[210px] h-[90%] w-[92%] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-2">
                    {/* <img src="https://aaronkirman.com/wp-content/themes/ak.com/assets/images/home/social-tt-icon-hover.png" data-src="https://aaronkirman.com/wp-content/themes/ak.com/assets/images/home/social-tt-icon-hover.png" alt="TikTok" className="ease lazyloaded"/> */}
                    <FaTiktok className="size-24 fill-slate-300  hover:fill-orange-600 border-yellow-700" />
                    <p className="text-slate-500 text-lg font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
              {/*  */}
              
</div>
      {/*  */}
      <div className="flex justify-center ">
        <motion.div
          ref={ref}
          style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            y: backgroundY,
          }}
          className="w-[100%] hidden  h-[700px] z-20 md:h-[1100px] md:w-full  2xl:h-[1600px] xl:h-[1200px] lg:h-[1000px] md:flex flex-col justify-center items-center md:opacity-100  bg-green-200 bg-fixed  relative"
        >
          {/* phone ui started */}

          <div className=" mt-3 h-[1400px] w-full"></div>
          {/* phone ui finished */}
          <div className="md:h-[720px] hidden md:flex h-[650px] top-[10px] bg-white  w-[85%] md:w-[1250px] lg:h-[550px] lg:w-[75%] 2xl:h-[850px] lg:top-[100px] xl:h-[650px] xl:w-[87%]  xl:top-[100px] 2xl:w-[82%] 2xl:top-[100px] z-20 md:ml-2   absolute   flex-col justify-center">
            <div className="relative   ">
              <div className="md:flex md:flex-row hidden   p-1 md:gap-10 gap-2 lg:gap-2 2xl:gap-2 md:mt-4 md:ml-10 lg:ml-0 2xl:ml-0 lg:p-0 md:p-4  2xl:p-1">
                {/* 1st */}

                <div className="flex flex-col  relative   gap-3 transition-all duration-500 lg:w-[70%] xl:w-[100%] 2xl:w-[100%]  ">
                  <div className=" flex  justify-center ml-24 md:ml-0   relative md:h-[500px] md:w-[500px]  lg:h-[400px] lg:w-[390px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[700px] h-[490px] w-[500px]">
                    <div className="group relative  flex flex-col justify-center items-center">
                      <img
                        src={imageAgent}
                        className="  group-hover:opacity-35  transition-all duration-300 md:h-[370px] lg:h-[360px]  lg:right-[100px] h-[355px] w-[400px] md:w-[500px] lg:w-[400px] xl:w-[85%] xl:h-[75%] 2xl:w-[85%] 2xl:h-[75%]  image-full"
                      />
                      <img
                        src={realAgent}
                        className="absolute opacity-0  transition-all duration-300 group-hover:opacity-95 md:left-[120px] left-[70px] size-60 lg:left-[30px] lg:w-[300px] xl:top-[150px] xl:left-[70px] 2xl:left-[110px] 2xl:top-[200px] md:size-72 "
                      />
                    </div>
                  </div>
                  <div className="absolute  ml-24 md:ml-0 text-black md:text-black lg:top-[390px] lg:left-[20px] xl:top-[485px] xl:left-[60px] 2xl:top-[620px] 2xl:left-[50px] flex flex-col gap-1 top-[430px] md:top-[450px]">
                    <p className="font-tradego xl:text-2xl  2xl:text-3xl  font-semibold">
                      {" "}
                      Q+A:KIRMAN TALKS RUNNING A BROKERAGE
                    </p>
                    <div className="flex xl:text-lg 2xl:text-2xl text-xs">
                      <p>By:</p>
                      <h2 className="font-semibold">Kari Hamanaka </h2>
                      <h1 className="h-7"></h1>
                      <p>Published:</p>
                      <p>mon,sep 02 2025</p>
                    </div>
                    <hr className="border-[1px] lg:border-[2px] border-slate-400  lg:w-[95%]"></hr>
                  </div>
                </div>
                {/* 2nd */}

                <div className="flex flex-col  relative   gap-3 transition-all duration-500 2xl:w-[100%]  items-center justify-center">
                  <div className=" flex   ml-24 md:ml-0   relative md:h-[500px] md:w-[500px]  lg:h-[400px] lg:w-[400px] 2xl:w-[600px] 2xl:h-[700px] h-[490px] w-[500px] xl:w-[550px] xl:h-[550px]">
                    <div className="group  flex flex-col justify-center items-center relative">
                      <img
                        src={imageAgent2}
                        className="  group-hover:opacity-35  transition-all duration-300 md:h-[370px] lg:h-[360px]  lg:right-[100px] h-[355px] w-[400px] xl:w-[85%] xl:h-[75%] md:w-[500px] lg:w-[400px] 2xl:w-[85%] 2xl:h-[75%]  image-full"
                      />
                      <img
                        src={lossAngeles}
                        className="absolute opacity-0  transition-all duration-300 group-hover:opacity-95 md:left-[120px] left-[70px] size-60  lg:w-[300px] lg:h-[200px] lg:left-[50px] xl:top-[120px] xl:left-[70px] 2xl:left-[110px] 2xl:top-[200px] md:size-72 "
                      />
                    </div>
                  </div>
                  <div className="absolute  ml-24 md:ml-0 text-black md:text-black lg:top-[390px] lg:left-[20px] xl:top-[485px] xl:left-[60px] 2xl:top-[620px] 2xl:left-[50px] flex flex-col gap-1 top-[430px] md:top-[450px]">
                    <p className="font-tradego xl:text-2xl  2xl:text-3xl  font-semibold">
                      {" "}
                      Q+A: KIRMAN TALKS RUNNING A BROKERAGE
                    </p>
                    <div className="flex xl:text-lg 2xl:text-2xl text-xs">
                      <p>By:</p>
                      <h2 className="font-semibold">Kari Hamanaka </h2>
                      <h1 className="h-7"></h1>
                      <p>Published:</p>
                      <p>Mon, Sep 02 2025</p>
                    </div>
                    <hr className="border-[1px] lg:border-[2px] border-slate-400  lg:w-[95%]  w-[440px] "></hr>
                  </div>
                </div>
              </div>
              {/* phone */}

              {/*  */}
            </div>
          </div>

          {/*  */}

          {/*  */}

          <div className="absolute hidden top-[550px] lg:top-[650px] lg:w-[700px] lg:left-[0px] xl:top-[750px] xl:h-[150px] xl:w-[830px] 2xl:top-[940px] bg-white h-[90px] 2xl:h-[200px] 2xl:w-[980px] md:flex justify-center items-center w-[350px] right-[460px]">
            <div className="relative">
              <div className="bg-white absolute mt-3 left-[400px] lg:left-[70px] top-[-50px] xl:left-[140px] 2xl:left-[190px] group transition-colors duration-500 hover:bg-black  flex flex-col gap-2 h-[70px] w-[250px] ">
                <div className="flex items-center justify-center mt-3 group-hover:text-white xl:text-lg 2xl:text-lg text-black p-4 gap-4">
                  <p>{">"}</p>
                  <p className="font-tradego">AARON IN THE MEDIA</p>
                </div>
                <hr className="border-2 absolute top-[65px] border-black transition-all duration-300 group-hover:w-56 w-14" />
              </div>
            </div>
          </div>
          {/* ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg */}
          <div className="bg-white h-[90px] w-[803px] absolute hidden top-[640px]"></div>
          {/* gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg */}
        </motion.div>
      </div>
      {/* phone social media and agentImage */}

      <div className="md:h-[700px] hidden h-[300px] w-[100%]  relative md:block md:w-[600px] lg:h-[400px] lg:w-[500px] xl:h-[500px]  xl:w-[700px] 2xl:h-[600px] 2xl:w-[800px]">
        <img
          src={agentImage}
          className="absolute top-[-180px] right-[14%]  md:top-[-160px] 2xl:top-[-280px] 2xl:left-[05px] md:h-[600px] lg:top-[-130px] xl:top-[-200px] xl:h-[700px] xl:w-[850px] 2xl:h-[800px] 2xl:w-[1000px] bg-cover h-[450px] w-[450px] md:w-[600px] z-40"
        />
      </div>
      <div className="relative flex justify-center items-center">
        <div>
          <div className="absolute hidden md:block bg-black md:bg-transparent w-max top-[-30px] right-1 md:top-[-540px] lg:top-[-490px] lg:right-[-80px] xl:top-[-600px] xl:right-[30px] 2xl:top-[-690px] 2xl:right-[90px] md:right-[20px]  z-40 md:h-[600px] h-[400px] md:w-[700px] ">
            <div className="relative flex md:gap-2 lg:gap-0">
              <div className="flex flex-col gap-5 mt-2 md:p-3">
                <div className="md:h-[220px] h-[180px] w-[180px] md:w-[210px] lg:h-[190px] lg:w-[180px] xl:h-[220px] xl:w-[220px] 2xl:h-[240px] 2xl:w-[240px]  flex items-center justify-center bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center md:gap-6">
                    <IoLogoYoutube className="size-20 hover:fill-red-500 fill-slate-300" />
                    <p className="text-slate-500 text-2xl font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>

                <div className="md:h-[220px] h-[160px] w-[160px] md:w-[210px] lg:h-[200px] lg:w-[180px] xl:h-[220px] xl:w-[220px] 2xl:h-[240px] 2xl:w-[240px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808] ">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <p className="text-8xl  font-Sigmar hover:fill-blue-400 text-white">
                      {" "}
                      in
                    </p>
                    <p className="text-slate-500 text-2xl font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-11 md:p-3">
                <div className="md:h-[220px] h-[160px] w-[160px] md:w-[210px] lg:h-[200px] lg:w-[180px] xl:h-[220px] xl:w-[220px] 2xl:h-[240px] 2xl:w-[240px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <FaInstagram className="size-24 hover:fill-red-300 fill-slate-300" />

                    <p className="text-slate-500 text-2xl font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
                <div className="md:h-[220px] h-[160px] w-[160px] md:w-[210px] lg:h-[200px] lg:w-[180px] xl:h-[220px] xl:w-[220px] 2xl:h-[240px] 2xl:w-[240px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-6">
                    <RiTwitterXLine className="size-24 hover:fill-slate-700 fill-slate-300" />
                    <p className="text-slate-500 text-2xl font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-5 md:p-3">
                <div className="md:h-[220px] h-[160px] w-[160px] md:w-[210px] lg:h-[200px] lg:w-[180px] xl:h-[220px] xl:w-[220px] 2xl:h-[240px] 2xl:w-[240px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-6">
                    <SlSocialFacebook className="size-24 hover:fill-blue-400 fill-slate-300" />

                    <p className="text-slate-500 text-2xl font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
                <div className="md:h-[220px] h-[160px] w-[160px] md:w-[210px] lg:h-[200px] lg:w-[180px] xl:h-[220px] xl:w-[220px] 2xl:h-[240px] 2xl:w-[240px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-6">
                    {/* <img src="https://aaronkirman.com/wp-content/themes/ak.com/assets/images/home/social-tt-icon-hover.png" data-src="https://aaronkirman.com/wp-content/themes/ak.com/assets/images/home/social-tt-icon-hover.png" alt="TikTok" className="ease lazyloaded"/> */}
                    <FaTiktok className="size-24 fill-slate-300  hover:fill-orange-600 border-yellow-700" />
                    <p className="text-slate-500 text-2xl font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* phone uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu*/}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn8;

// <div className="relative flex flex-col gap-3 transition-all duration-500 justify-center items-center w-[100%] mt-6">
// <div className="group relative flex items-center justify-center w-[80%] ">
//   <img
//     src={imageAgent2}
//     className="group-hover:opacity-35 transition-all duration-300 w-[80%]  h-auto object-cover"
//   />
//   <img
//     src={lossAngeles}
//     className="absolute opacity-0 transition-all duration-300 group-hover:opacity-95 w-32 mx-auto"
//   />
// </div>
// <div className="relative text-white md:text-black flex flex-col gap-1 text-center w-full mt-2">
//   <p className="font-tradego font-semibold">
//     Q+A: KIRMAN TALKS RUNNING A BROKERAGE
//   </p>
//   <div className="flex justify-center text-xs gap-1">
//     <p>By:</p>
//     <h2 className="font-semibold">Kari Hamanaka</h2>
//     <p>Published:</p>
//     <p>Mon, Sep 02 2025</p>
//   </div>
//   <hr className="border-[1px] hidden md:block border-slate-300 w-[80%] mx-auto" />
// </div>
// </div>

// <div className="flex absolute top-[650px] bg-violet-500 flex-col justify-center md:hidden items-center h-[1000px] w-[90%]">
//                 <div className="md:h-[700px] h-[300px] w-[90%]  bg-blue-400 relative md:w-[600px] lg:h-[400px] lg:w-[500px] xl:h-[500px]  xl:w-[700px] 2xl:h-[600px] 2xl:w-[800px]">
//                   <img
//                     src={agentImage}
//                     className=" top-[100px] right-[14%]  md:top-[-160px]  2xl:top-[-280px] md:h-[600px] lg:top-[-130px] xl:top-[-200px] xl:h-[700px] xl:w-[850px] 2xl:h-[800px] 2xl:w-[1000px] bg-cover h-[450px] w-[100%] md:w-[600px] z-40"
//                   />
//                 </div>
//                 <div className=" right-[14%]  bg-black md:hidden w-[90%] md:bg-transparent    md:top-[-540px] md:right-[20px]  z-40 md:h-[600px] h-[36] md:w-[700px] ">
//                   <div className="relative flex justify-center gap-3 items-center md:gap-2">
//                     <div className="flex flex-col gap-2 mt-2 md:p-3">
//                       <div className="md:h-[210px] h-[90%] w-[90%] md:w-[210px] flex items-center justify-center bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
//                         <div className="flex flex-col items-center justify-center md:gap-2">
//                           <IoLogoYoutube className="size-20 hover:fill-red-500 fill-slate-300" />
//                           <p className="text-slate-500 text-lg font-tradego">
//                             @aaron.kirman
//                           </p>
//                         </div>
//                       </div>

//                       <div className="md:h-[210px] h-[130px] w-[130px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808] ">
//                         <div className="flex flex-col items-center justify-center gap-2">
//                           <p className="text-8xl  font-Sigmar hover:fill-blue-400 text-white">
//                             {" "}
//                             in
//                           </p>
//                           <p className="text-slate-500 text-lg font-tradego">
//                             @aaron.kirman
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-col gap-1 mt-11 md:p-3">
//                       <div className="md:h-[210px] h-[130px] w-[130px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
//                         <div className="flex flex-col items-center justify-center gap-2">
//                           <FaInstagram className="size-24 hover:fill-red-300 fill-slate-300" />

//                           <p className="text-slate-500 text-lg font-tradego">
//                             @aaron.kirman
//                           </p>
//                         </div>
//                       </div>
//                       <div className="md:h-[210px] h-[130px] w-[130px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
//                         <div className="flex flex-col items-center justify-center gap-2">
//                           <RiTwitterXLine className="size-24 hover:fill-slate-700 fill-slate-300" />
//                           <p className="text-slate-500 text-lg font-tradego">
//                             @aaron.kirman
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-col gap-1 mt-5 md:p-3">
//                       <div className="md:h-[210px]h-[130px] w-[130px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
//                         <div className="flex flex-col items-center justify-center gap-2">
//                           <SlSocialFacebook className="size-24 hover:fill-blue-400 fill-slate-300" />

//                           <p className="text-slate-500 text-lg font-tradego">
//                             @aaron.kirman
//                           </p>
//                         </div>
//                       </div>
//                       <div className="md:h-[210px] h-[130px] w-[130px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
//                         <div className="flex flex-col items-center justify-center gap-2">
//                           {/* <img src="https://aaronkirman.com/wp-content/themes/ak.com/assets/images/home/social-tt-icon-hover.png" data-src="https://aaronkirman.com/wp-content/themes/ak.com/assets/images/home/social-tt-icon-hover.png" alt="TikTok" className="ease lazyloaded"/> */}
//                           <FaTiktok className="size-24 fill-slate-300  hover:fill-orange-600 border-yellow-700" />
//                           <p className="text-slate-500 text-lg font-tradego">
//                             @aaron.kirman
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
