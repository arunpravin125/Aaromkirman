import React from "react";
import imageEd from "../../assets/ed-bg.jpg";
import estatePoster from "../../assets/estate-poster.jpg";

const EstateDynamics = () => {
  return (
    <div className=" md:h-[1700px]  h-[920px] w-[500px] md:w-full">
      <div
        style={{ backgroundImage: `url(${imageEd})` }}
        className="bg-red-300 md:h-[1700px] h-[920px]  flex flex-col  md:w-full overflow-hidden relative"
      >
        <div className="h-[400px] flex flex-col gap-2 absolute">
          <div className="relative">
            <h1 className="md:text-[320px] text-[145px]  absolute md:left-[70px] left-[20px] font-tradego ">
              Estate
            </h1>
            <h1 className="md:text-[330px] text-[145px] absolute md:top-[180px] top-[90px] md:left-[-140px] left-[-80px]  font-tradego">
              Dynamics
            </h1>
          </div>
        </div>
        {/* big text completed */}
        <div className=" md:h-[1130px] md:w-[1100px] h-[730px] w-[455px] left-[15px] shadow-[-40px_40px_25px_#959595,-80px_80px_40px_#B5B5B5] p-6 bg-slate-200 absolute  md:left-[100px] top-[150px] md:top-[410px] " >
          
          <div className="p-4 m-3 flex flex-col  items-center gap-2 md:gap-10" >

             <div className="text-slate-500 text-lg h-[50px] flex gap-4 items-center font-semibold" >
                <p>05</p>
                <hr className="border-2 border-slate-800 w-[40px]" ></hr>
                <h1  >AARON KIRMAN</h1>
             </div>
             <div className="flex m-2 flex-col md:gap-6  md:text-8xl text-6xl h-[40px] md:h-[100px] font-tradego items-center relative " >
                <h1 className="absolute  " >Estate</h1>
                <h1 className="absolute top-[50px] md:top-[76px]" >Dynamics</h1>
             </div>
             <div className="md:w-[700px]  w-[460px] flex flex-col md:h-[100px] md:mt-14 mt-16 items-center "  >
              <p className="hidden md:block" >Estate Dynamics is a tech stack that focuses on artificial intelligence based on our cloud</p>
              <p className="hidden md:block">based data sets which concentrate on behavioral targeting during the home buying process.</p>
             <p className="hidden md:block">We built our technology to match the curated home to the right buyer, as well as represent</p>
             <p className="hidden md:block">the best characteristics of a seller's home to the global luxury marketplace.</p>
             <p className="text-center text-sm md:hidden" >Estate Dynamics is a tech stack that focuses on artificial intelligence based on our cloud based data sets which concentrate on behavioral targeting during the home buying process. We built our technology to match the curated home to the right buyer, as well as represent the best characteristics of a seller's home to the global luxury marketplace.</p>
             </div>
             <div className=" mt-4 md:h-[450px] " >
                <img src={estatePoster} className="md:h-[430px] h-[280px] w-[530px] bg-cover" />
                <div className="flex flex-col ml-[100px] md:hidden transition-colors duration-500 group mt-6  justify-center relative hover:bg-black z-50 h-[55px]  w-[170px]" >
                <div className="" >
                <div className="flex gap-2 p-3" >
                  <p className="text-slate-800 font-semibold mr-3 group-hover:text-white" >{">"}</p>
                  <p className="text-slate-800 font-semibold text-sm group-hover:text-white">LEARN MORE</p>
                </div>
                <hr className="border  transition-all duration-300 border-slate-800 w-16 group-hover:w-[170px] group-hover:border-slate-800" />
                </div>
              </div>
             </div>

              <div className=" flex-col hidden md:flex  transition-colors duration-500 group mt-6 justify-center relative hover:bg-black z-50 h-[70px]  w-[200px]" >
                <div className="flex gap-6 p-5 " >
                  <p className="text-slate-800 font-semibold mr-3 group-hover:text-white" >{">"}</p>
                  <p className="text-slate-800 font-semibold group-hover:text-white">LEARN MORE</p>
                </div>
                <hr className="border-2 transition-all duration-300 border-slate-800 w-16 group-hover:w-[170px] group-hover:border-slate-800" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDynamics;
