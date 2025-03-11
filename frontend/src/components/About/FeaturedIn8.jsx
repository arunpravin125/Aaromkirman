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
    <div className=" md:h-[1720px] h-[1920px]  justify-center z-20 flex flex-col gap-7 w-screen md:w-full">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex items-center justify-center p-3 gap-5">
          <p className="text-slate-600 text-[20px] font-sans">08</p>
          <hr className="border-[1px] border-slate-600 w-20" />
          <p className="text-slate-600 text-[20px] font-sans">AS</p>
        </div>
        <div>
          <p className="text-6xl font-tradego text-center">Featured in</p>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center items-center==">
        <motion.div
          ref={ref}
          style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            y: backgroundY,
          }}
          className="w-full  z-20 md:h-[1100px] flex flex-col justify-center items-center md:opacity-100 h-[1050px] bg-fixed object-cover relative"
        >
          <div className="h-[570px]  w-[500px] md:w-[1250px] z-20 md:ml-2 mr-2 bg-white absolute  flex flex-col justify-evenly  items-center">
            <div className="relative">
              <div className="md:flex md:flex-row hidden items-center justify-between p-1 md:gap-16 gap-2 md:mt-4 md:ml-10 md:p-4">
                {/* 1st */}
                <div className="flex flex-col  relative gap-3  transition-all duration-500 items-start justify-start">
                  <div className=" flex group items-center justify-center relative md:h-[500px] md:w-[500px] h-[390px] w-[396px] ">
                    <img
                      src={imageAgent}
                      className="absolute group-hover:opacity-35  transition-all duration-300 md:h-[370px] h-[300px] w-[400px] md:w-[500px] image-full"
                    />
                    <img
                      src={realAgent}
                      className="absolute opacity-0  transition-all duration-300 group-hover:opacity-95 md:left-[120px] left-[70px] md:size-72 "
                    />
                  </div>
                  <div className="absolute flex flex-col gap-1 top-[355px] md:top-[450px]">
                    <p className="font-tradego font-semibold">
                      {" "}
                      $40M ENCINO MANSE SETS NEW LISTING RECORD
                    </p>
                    <div className="flex  text-xs">
                      <p>By:</p>
                      <h2 className="font-semibold">Kari Hamanaka </h2>
                      <h1 className="h-7"></h1>
                      <p>Published:</p>
                      <p>Fri,Feb 28 2025</p>
                    </div>
                    <hr className="border-[1px] border-slate-300 w-[440px]"></hr>
                  </div>
                </div>
                {/* 2nd */}

                <div className="flex flex-col  relative  bg-white gap-3 transition-all duration-500 items-start justify-start">
                  <div className=" flex group items-center justify-center ml-24 md:ml-0  relative md:h-[500px] md:w-[500px] h-[490px] w-[500px]">
                    <img
                      src={imageAgent2}
                      className="absolute  group-hover:opacity-35  transition-all duration-300 md:h-[370px] h-[355px] w-[400px] md:w-[500px] image-full"
                    />
                    <img
                      src={lossAngeles}
                      className="absolute opacity-0  transition-all duration-300 group-hover:opacity-95 md:left-[120px] left-[70px] size-60 md:size-72 "
                    />
                  </div>
                  <div className="absolute  ml-24 md:ml-0 text-black md:text-black flex flex-col gap-1 top-[430px] md:top-[450px]">
                    <p className="font-tradego  font-semibold">
                      {" "}
                      Q+A:KIRMAN TALKS RUNNING A BROKERAGE
                    </p>
                    <div className="flex  text-xs">
                      <p>By:</p>
                      <h2 className="font-semibold">Kari Hamanaka </h2>
                      <h1 className="h-7"></h1>
                      <p>Published:</p>
                      <p>mon,sep 02 2025</p>
                    </div>
                    <hr className="border-[1px] border-slate-300 w-[440px]"></hr>
                  </div>
                </div>
              </div>
              {/* phone */}
              <div className="flex flex-col md:hidden items-center w-screen justify-center px-4">
                {/* 1st Item */}
                <div className="relative flex flex-col gap-3 transition-all duration-500 justify-center items-center w-screen md:w-full">
                  <div className="group relative flex items-center justify-center w-screen">
                    <img
                      src={imageAgent}
                      className="group-hover:opacity-35 transition-all duration-300 w-full max-w-[400px] h-auto object-cover"
                    />
                    <img
                      src={realAgent}
                      className="absolute opacity-0 transition-all duration-300 group-hover:opacity-95 w-32 mx-auto"
                    />
                  </div>
                  <div className="relative flex flex-col gap-1 text-center w-full mt-2">
                    <p className="font-tradego font-semibold">
                      $40M ENCINO MANSE SETS NEW LISTING RECORD
                    </p>
                    <div className="flex justify-center text-xs gap-1">
                      <p>By:</p>
                      <h2 className="font-semibold">Kari Hamanaka</h2>
                      <p>Published:</p>
                      <p>Fri, Feb 28 2025</p>
                    </div>
                    <hr className="border-[1px] border-slate-300 w-[80%] mx-auto" />
                  </div>
                </div>

                {/* 2nd Item */}
                <div className="relative flex flex-col gap-3 transition-all duration-500 justify-center items-center w-full mt-6">
                  <div className="group relative flex items-center justify-center w-full">
                    <img
                      src={imageAgent2}
                      className="group-hover:opacity-35 transition-all duration-300 w-full max-w-[400px] h-auto object-cover"
                    />
                    <img
                      src={lossAngeles}
                      className="absolute opacity-0 transition-all duration-300 group-hover:opacity-95 w-32 mx-auto"
                    />
                  </div>
                  <div className="relative flex flex-col gap-1 text-center w-full mt-2">
                    <p className="font-tradego font-semibold">
                      Q+A: KIRMAN TALKS RUNNING A BROKERAGE
                    </p>
                    <div className="flex justify-center text-xs gap-1">
                      <p>By:</p>
                      <h2 className="font-semibold">Kari Hamanaka</h2>
                      <p>Published:</p>
                      <p>Mon, Sep 02 2025</p>
                    </div>
                    <hr className="border-[1px] hidden md:block border-slate-300 w-[80%] mx-auto" />
                  </div>
                </div>
              </div>
              <div className=" md:hidden z-30 top-[-170px]  h-[70px] flex justify-center items-center w-[350px] right-[60px]">
            <div className="bg-white relative mt-3  group transition-colors duration-500 hover:bg-black  flex flex-col gap-2 h-[70px] w-[250px] ">
              <div className="flex items-center justify-center mt-3 group-hover:text-white  text-black p-4 gap-4">
                <p>{">"}</p>
                <p className="font-tradego">AARON IN THE MEDIA</p>
              </div>
              <hr className="border-2 absolute top-[65px] border-black transition-all duration-300 group-hover:w-56 w-14" />
            </div>
          </div>
              {/*  */}
            </div>
          </div>
          <div className="absolute hidden  top-[550px] bg-white h-[90px] md:flex justify-center items-center w-[350px] right-[460px]">
            <div className="bg-white relative mt-3  group transition-colors duration-500 hover:bg-black  flex flex-col gap-2 h-[70px] w-[250px] ">
              <div className="flex items-center justify-center mt-3 group-hover:text-white  text-black p-4 gap-4">
                <p>{">"}</p>
                <p className="font-tradego">AARON IN THE MEDIA</p>
              </div>
              <hr className="border-2 absolute top-[65px] border-black transition-all duration-300 group-hover:w-56 w-14" />
            </div>
          </div>
          <div className="bg-white h-[90px] w-[803px] absolute  top-[640px]"></div>
          {/*  */}
        </motion.div>
      </div>
      <div className="md:h-[700px] h-[300px] min-w-max relative md:block md:w-[600px]">
        <img
          src={agentImage}
          className="absolute top-[-90px] md:top-[-160px] md:h-[600px] bg-cover h-[400px] w-[450px] md:w-[600px] z-40"
        />
      </div>
      <div className="relative flex justify-center items-center">
        <div>
          <div className="absolute hidden md:block bg-black md:bg-transparent w-max top-[-30px] right-1 md:top-[-540px] md:right-[20px]  z-40 md:h-[600px] h-[400px] md:w-[700px] ">
            <div className="relative flex md:gap-2">
              <div className="flex flex-col gap-5 mt-2 md:p-3">
                <div className="md:h-[220px] h-[180px] w-[180px] md:w-[210px] flex items-center justify-center bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center md:gap-6">
                    <IoLogoYoutube className="size-20 hover:fill-red-500 fill-slate-300" />
                    <p className="text-slate-500 text-2xl font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>

                <div className="md:h-[220px] h-[160px] w-[160px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808] ">
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
                <div className="md:h-[220px] h-[160px] w-[160px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <FaInstagram className="size-24 hover:fill-red-300 fill-slate-300" />

                    <p className="text-slate-500 text-2xl font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
                <div className="md:h-[220px] h-[160px] w-[160px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-6">
                    <RiTwitterXLine className="size-24 hover:fill-slate-700 fill-slate-300" />
                    <p className="text-slate-500 text-2xl font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-5 md:p-3">
                <div className="md:h-[220px] h-[160px] w-[160px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-6">
                    <SlSocialFacebook className="size-24 hover:fill-blue-400 fill-slate-300" />

                    <p className="text-slate-500 text-2xl font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
                <div className="md:h-[220px] h-[160px] w-[160px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
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
          {/* phone view */}
          <div className="absolute left-0 bg-black md:hidden w-screen md:bg-transparent  top-[-30px]  md:top-[-540px] md:right-[20px]  z-40 md:h-[600px] h-[325px] md:w-[700px] ">
            <div className="relative flex justify-center items-center md:gap-2">
              <div className="flex flex-col gap-1 mt-2 md:p-3">
                <div className="md:h-[210px] h-[130px] w-[130px] md:w-[210px] flex items-center justify-center bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center md:gap-2">
                    <IoLogoYoutube className="size-20 hover:fill-red-500 fill-slate-300" />
                    <p className="text-slate-500 text-lg font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>

                <div className="md:h-[210px] h-[130px] w-[130px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808] ">
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
                <div className="md:h-[210px] h-[130px] w-[130px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FaInstagram className="size-24 hover:fill-red-300 fill-slate-300" />

                    <p className="text-slate-500 text-lg font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
                <div className="md:h-[210px] h-[130px] w-[130px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <RiTwitterXLine className="size-24 hover:fill-slate-700 fill-slate-300" />
                    <p className="text-slate-500 text-lg font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-5 md:p-3">
                <div className="md:h-[210px]h-[130px] w-[130px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <SlSocialFacebook className="size-24 hover:fill-blue-400 fill-slate-300" />

                    <p className="text-slate-500 text-lg font-tradego">
                      @aaron.kirman
                    </p>
                  </div>
                </div>
                <div className="md:h-[210px] h-[130px] w-[130px] md:w-[210px] flex items-center justify-center  bg-slate-400 shadow-[inset_-100px_0px_40px_#080808,inset_100px_0px_40px_#080808]">
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
    </div>
  );
};

export default FeaturedIn8;
