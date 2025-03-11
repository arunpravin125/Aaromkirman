import React from "react";
import groupMembers from "../../assets/li-img.jpg";
import { IoPlayCircleSharp } from "react-icons/io5";
import imageCTa from "../../assets/cta2-bg.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ListingImpossible = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [1, 2], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0.3, 1], ["0%", "100%"]);
  const sections = [
    {
      title: "Capital",
      description: "We invest in people with ideas. We love innovative solutions to big problems",
    },
    {
      title: "Foundation",
      description: "We give back to the communities by investing in housing projects",
    },
    {
      title: "Coaching",
      description: "Set goals and prioritize success with Aaron Kirman as your private sales, business, and life coach",
    },
    {
      title: "Capital",
      description: "Aaron takes on two new fellows, twice a year, to be his prodigies",
    },
  ];
  
  return (
    <div className="md:h-[1950px] overflow-hidden  md:w-auto">
      <div className="flex flex-col gap-9">
        <motion.div
          style={{ backgroundImage: `url(${groupMembers})` }}
          className="md:h-[800px] h-[400px] md:w-screen w-screen    bg-slate-400 bg-blend-multiply bg-center  bg-cover relative "
        >
          <div className="relative  flex flex-col justify-center items-center">
            <div className="flex items-center justify-center absolute top-[150px] md:top-[370px] md:left-[580px]">
              <IoPlayCircleSharp className="md:size-24 size-12  stroke-slate-100" />
            </div>
            <div className="flex felx-col justify-center items-center" >
            <div className="absolute md:top-[470px] top-[200px] w-screen  flex md:w-full justify-center items-center ">
              <hr className="md:border-[6px] hidden md:block border-[3px] border-white absolute top-[10px] w-[93px] left-0 md:left-0 md:top-[10px] md:w-[295px]" />
              <h1 className="text-white text-5xl  md:text-[110px] font-bigshoulders font-bold ">
                LISTING IMPOSSIBLE
              </h1>
              <hr className="md:border-[6px] hidden md:block border-[3px] w-[90px] top-[37px] right-0 border-white absolute md:right-0 md:top-[85px] md:w-[295px]" />
            </div>
            <div className="text-white top-[260px] md:h-[170px] absolute md:top-[620px] w-screen md:w-[800px] ">
              <div className="flex flex-col md:gap-6  p-2">
                <p className="text-slate-300 md:text-lg text-xs m-1">
                  Aaron Kirman and his team's genius lies in their willingness
                  to speak truth to money. On "Listing Impossible" they show the
                  homeowners the error of their ways – whether they want to see
                  it or not.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-slate-300 text-sm md:font-semibold md:text-lg">
                    Tune in Wednesdays IO PM ET on CNBC
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-slate-300 ">
                      {" "}
                      <IoPlayCircleSharp className="size-5 " />
                    </p>
                    <p className="text-slate-200 text-xs font-light">
                      WATCH THE FIRST EPISODE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
           
           
          </div>
        </motion.div>
        {/* group members fineshed */}
        {/* //////////////////////////////////////////////////////// */}
        <div className="h-[1100px] md:p-3 flex items-center justify-center">
      <div className="relative w-screen top-0 left-0 h-[1050px] md:w-full">
        <div className="absolute md:m-3 md:flex md:flex-wrap grid grid-cols-[1fr_2fr] w-screen md:gap-4 justify-center  items-center bg-white">
          {sections.map((section, index) => (
            <div key={index} className="bg-transparent group border-2 border-slate-100 md:h-[500px] md:w-[360px] h-[330px] w-[230px] relative">
              <motion.div
                style={{
                  backgroundImage: `url(${imageCTa})`,
                  backgroundSize: "cover",
                  y: backgroundY,
                }}
                className="relative bg-fixed object-center top-0 left-0 md:h-[500px] h-[330px] w-screen md:w-full"
              />
              <div className="flex flex-col group-hover:left-[50px] md:group-hover:left-[0px] absolute md:top-[50px] top-[30px] md:w-[350px] mt-6 md:mt-11 md:gap-7  items-center justify-center text-white">
                <p className="font-tradego md:text-2xl transition-all text-center duration-300 group-hover:mt-5 md:group-hover:mt-9">
                  KIRMAN
                </p>
                <p className="md:text-6xl text-3xl font-tradego transition-all duration-300 group-hover:mt-3">
                  {section.title}
                </p>
                <p className="md:text-xs text-[9px] text-center transition-all duration-300 group-hover:hidden p-3 font-light text-slate-400">
                  {section.description}
                </p>
                <div className="flex transition-all duration-300 group-hover:hidden flex-col gap-5">
                  <div className="flex ml-5 gap-4 md:gap-6">
                    <p>{">"}</p>
                    <p className="text-sm font-tradego md:text-[13px]">KNOW MORE</p>
                  </div>
                  <hr className="md:border-2 w-11 border-slate-200 md:w-16" />
                </div>
              </div>
            </div>
          ))}
          
          {/* Learn More Section */}
          <div className="md:h-[500px] left-[110px] md:left-[0px] items-center md:w-[360px] h-[330px] w-[230px] group border-2 border-slate-100 relative">
            <motion.div
              style={{
                backgroundImage: `url(${imageCTa})`,
                backgroundSize: "cover",
                y: backgroundY,
              }}
              className="relative bg-fixed object-center top-0 left-0 md:h-[500px] h-[330px] min-w-max md:w-full"
            />
            <div className="flex flex-col absolute top-[50px] md:top-[50px] md:w-[350px] md:mt-11 md:gap-11 items-center gap-7 justify-center text-white">
              <p className="md:text-6xl font-sans md:mt-16">Learn More</p>
              <div className="border-2 border-slate-400 md:h-[70px] flex items-center justify-center md:w-[300px] w-[160px]">
                <input
                  placeholder="EMAIL ADDRESS"
                  className="bg-transparent p-2 placeholder:text-center placeholder:text-sm md:placeholder:text-lg outline-none border-0"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex ml-5 gap-6 w-[230px]">
                  <p>{">"}</p>
                  <p className="text-sm group font-tradego text-[9px] md:text-[13px] md:text-center">
                    SCHEDULE A MEETING WITH AARON
                  </p>
                </div>
                <hr className="md:border-2 md:group-hover:w-64 group-hover:w-60 transition-all duration-300 border-slate-200 w-16" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
        {/* end */}
      </div>
    </div>
  );
};

export default ListingImpossible;
