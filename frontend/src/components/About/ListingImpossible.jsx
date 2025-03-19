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
    <div className="md:h-[1750px] h-[1400px] lg:h-auto  2xl:h-auto xl:h-auto overflow-hidden  md:w-full">
      <div className="flex flex-col gap-9">
        <motion.div
          style={{ backgroundImage: `url(${groupMembers})` }}
          className="md:h-[800px]  2xl:h-[1000px] xl:h-[900px] h-[400px] md:w-screen w-[100%]    bg-slate-400 bg-blend-multiply bg-center  bg-cover relative "
        >
          <div className="relative  flex flex-col justify-center items-center">
            <div className="flex items-center justify-center absolute top-[175px] left-[140px] xl:top-[400px] xl:left-[550px] md:top-[370px] md:left-[470px] 2xl:top-[430px] 2xl:left-[710px]">
              <IoPlayCircleSharp className="md:size-24 size-12  stroke-slate-100" />
            </div>
            <div className="flex felx-col justify-center items-center" >
            <div className="absolute md:top-[470px] top-[210px] lg:top-[450px] xl:top-[500px] 2xl:top-[530px] w-[100%]  flex md:w-full justify-center items-center ">
              <hr className="md:border-[6px]  border-[3px] lg:top-[38px] xl:top-[45px] xl:w-[240px] 2xl:top-[52px] 2xl:w-[19%] border-white absolute top-[13px] w-[15%] left-0 md:left-0 md:top-[10px] md:w-[205px]" />
              <h1 className="text-white text-[250%] top-[10px]  md:text-[110px] xl:text-[130px] 2xl:text-[155px] font-bigshoulders font-bold ">
                LISTING IMPOSSIBLE
              </h1>
              <hr className="md:border-[6px] xl:top-[135px] lg:top-[115px] xl:w-[230px] 2xl:top-[165px] 2xl:w-[19%] border-[3px] w-[15%] top-[40px] right-0 border-white absolute md:right-0 md:top-[86px] md:w-[205px]" />
            </div>
            <div className="text-white top-[260px] md:h-[170px] absolute md:top-[590px] xl:top-[650px] 2xl:top-[725px]  md:w-[730px] w-[94%] xl:w-[850px] 2xl:w-[1000px] ">
              <div className="flex flex-col md:gap-6  p-2">
                <p className="text-slate-300 md:text-lg 2xl:text-3xl xl:text-2xl text-xs m-1">
                  Aaron Kirman and his team's genius lies in their willingness
                  to speak truth to money. On "Listing Impossible" they show the
                  homeowners the error of their ways – whether they want to see
                  it or not.
                </p>
                <div className="flex flex-col  gap-2 xl:gap-4 2xl:gap-5">
                  <p className="text-slate-300 text-sm md:font-semibold xl:text-lg 2xl:text-2xl md:text-lg">
                    Tune in Wednesdays IO PM ET on CNBC
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-slate-300 ">
                      {" "}
                      <IoPlayCircleSharp className="size-5 " />
                    </p>
                    <p className="text-slate-200 2xl:text-lg text-xs xl:text-sm font-light">
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
        <div className="h-[940px] md:h-[1200px] w-full lg:h-[1300px] bg-slate-100 xl:h-[1400px] 2xl:h-[1700px]  flex items-center justify-center">
  <div className="relative w-full h-full flex justify-center items-center">
    <div className="absolute 2xl:top-[10px] top-[10px] xl:top-[10px]" >
    <div className="  md:grid-cols-2 flex flex-wrap place-items-center w-screen md:w-full md:gap-2 xl:gap-2 2xl:gap-3 md:flex md:flex-wrap md: xl:flex xl:flex-wrap 2xl:flex 2xl:flex-wrap justify-center   md:p-4">
      {sections.map((section, index) => (
        <div 
          key={index} 
          className="border-2 border-slate-100 relative group w-[48%] h-[300px] md:w-[30%] md:h-[500px] lg:w-[32%] lg:h-[600px] xl:w-[32%] xl:h-[600px] 2xl:w-[32%] 2xl:h-[800px] flex flex-col justify-center">
          <motion.div
            style={{ backgroundImage: `url(${imageCTa})`, backgroundSize: "cover", y: backgroundY }}
            className="absolute top-0  left-0 w-full h-full bg-fixed object-cover"
          />
         <div className="" >
         <div className="relative flex flex-col top-[-20px] 2xl:gap-14 md:top-[-40px] md:gap-5 2xl:top-[-30px]  xl:top-[-20px] xl:gap-8 w-full items-center text-white text-center">
         
           <p className="font-tradego text-lg md:text-2xl xl:text-4xl 2xl:text-5xl ">KIRMAN</p>
            <p className="text-3xl md:text-6xl  xl:text-7xl 2xl:text-8xl  font-tradego">{section.title}</p>
            <p className="text-[9px] md:text-xs  xl:text-lg 2xl:text-2xl  text-slate-400 font-light  p-3">{section.description}</p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 md:gap-6">
                <p>{">"}</p>
                <p className="text-sm font-tradego xl:text-[15px] 2xl:text-[20px] md:text-[13px]">KNOW MORE</p>
              </div>
              <hr className="border-slate-200 w-11 md:w-16" />
            </div>
           
          </div>
         </div>
        </div>
      ))}

      {/* Learn More Section */}
      <div className="border-2 border-slate-100 w-[48%] h-[300px] md:w-[360px] md:h-[500px] lg:h-[600px] lg:w-[32%]  xl:w-[32%] xl:h-[600px] 2xl:w-[32%] 2xl:h-[800px] group flex flex-col items-center justify-center relative">
        <motion.div
          style={{ backgroundImage: `url(${imageCTa})`, backgroundSize: "cover", y: backgroundY }}
          className="absolute top-0 left-0 w-full h-full bg-fixed object-cover"
        />
        <div className="relative w-full text-white text-center  flex flex-col gap-7">
          <p className="text-2xl absolute top-[-80px] left-[20px] md:text-6xl xl:absolute xl:top-[-150px] xl:left-[40px] 2xl:absolute 2xl:top-[-190px] 2xl:text-7xl">Learn More</p>
          <div className="border-2 absolute top-[-40px] left-[05px] md:top-[10px] md:left-[15px] xl:top-[-60px] xl:left-[35px] 2xl:top-[-60px] 2xl:left-[80px] border-slate-400 flex items-center justify-center w-[160px] md:w-[300px] h-[50px] md:h-[70px] ">
            <input
              placeholder="EMAIL ADDRESS"
              className="bg-transparent p-2 placeholder:text-sm md:placeholder:text-lg outline-none text-center"
            />
          </div>
          <div className="flex absolute top-[30px] left-[10px] md:top-[95px] md:left-[30px] xl:top-[40px] xl:left-[70px] 2xl:top-[40px] 2xl:left-[90px] flex-col gap-5">
            <div className="flex gap-2  md:gap-6  justify-center items-center  w-[150px] 2xl:w-[300px] md:w-[230px]">
              <p>{">"}</p>
              <p className="text-xs w-[100px] xl:text-sm xl:w-[170px] 2xl:text-lg 2xl:w-[290px] md:w-[160px] md:text-[13px]">SCHEDULE A MEETING WITH AARON</p>
            </div>
            <hr className="border-slate-200 w-16 md:w-64 transition-all duration-300" />
          </div>
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


// <div className="h-[1100px] md:p-3 flex items-center 2xl:h-[1400px] justify-center">
//       <div className="relative w-screen top-0 left-0 h-[1050px] 2xl:h-[1400px] md:w-full">
//         <div className="absolute md:m-3 md:flex md:flex-wrap 2xl:grid-cols-[1fr_2fr_1fr]  grid grid-cols-[1fr_2fr] w-full md:gap-4 justify-center  items-center bg-white">
//           {sections.map((section, index) => (
//             <div key={index} className="bg-transparent group border-2 border-slate-100 md:h-[500px] md:w-[360px] 2xl:w-[500px] 2xl:h-[900px] h-[330px] w-[230px] relative">
//               <motion.div
//                 style={{
//                   backgroundImage: `url(${imageCTa})`,
//                   backgroundSize: "cover",
//                   y: backgroundY,
//                 }}
//                 className="relative bg-fixed object-center top-0 left-0 md:h-[500px] h-[330px]  w-screen md:w-full"
//               />
//               <div className="flex flex-col group-hover:left-[50px] md:group-hover:left-[0px] absolute md:top-[50px] top-[30px] md:w-[350px] 2xl:h-[400px]  2xl:w-[500px] mt-6 md:mt-11 md:gap-7  items-center justify-center text-white">
//                 <p className="font-tradego md:text-2xl transition-all text-center duration-300 group-hover:mt-5 md:group-hover:mt-9">
//                   KIRMAN
//                 </p>
//                 <p className="md:text-6xl text-3xl font-tradego transition-all duration-300 group-hover:mt-3">
//                   {section.title}
//                 </p>
//                 <p className="md:text-xs text-[9px] text-center transition-all duration-300 group-hover:hidden p-3 font-light text-slate-400">
//                   {section.description}
//                 </p>
//                 <div className="flex transition-all duration-300 group-hover:hidden flex-col gap-5">
//                   <div className="flex ml-5 gap-4 md:gap-6">
//                     <p>{">"}</p>
//                     <p className="text-sm font-tradego md:text-[13px]">KNOW MORE</p>
//                   </div>
//                   <hr className="md:border-2 w-11 border-slate-200 md:w-16" />
//                 </div>
//               </div>
//             </div>
//           ))}
          
//           {/* Learn More Section */}
//           <div className="md:h-[500px] left-[110px] md:left-[0px] items-center md:w-[360px] h-[330px] w-[230px] group border-2 border-slate-100 relative">
//             <motion.div
//               style={{
//                 backgroundImage: `url(${imageCTa})`,
//                 backgroundSize: "cover",
//                 y: backgroundY,
//               }}
//               className="relative bg-fixed object-center top-0 left-0 md:h-[500px] h-[330px] min-w-max md:w-full"
//             />
//             <div className="flex flex-col absolute top-[50px] md:top-[50px] md:w-[350px] md:mt-11 md:gap-11 items-center gap-7 justify-center text-white">
//               <p className="md:text-6xl font-sans md:mt-16">Learn More</p>
//               <div className="border-2 border-slate-400 md:h-[70px] flex items-center justify-center md:w-[300px] w-[160px]">
//                 <input
//                   placeholder="EMAIL ADDRESS"
//                   className="bg-transparent p-2 placeholder:text-center placeholder:text-sm md:placeholder:text-lg outline-none border-0"
//                 />
//               </div>
//               <div className="flex flex-col gap-5">
//                 <div className="flex ml-5 gap-6 w-[230px]">
//                   <p>{">"}</p>
//                   <p className="text-sm group font-tradego text-[9px] md:text-[13px] md:text-center">
//                     SCHEDULE A MEETING WITH AARON
//                   </p>
//                 </div>
//                 <hr className="md:border-2 md:group-hover:w-64 group-hover:w-60 transition-all duration-300 border-slate-200 w-16" />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>