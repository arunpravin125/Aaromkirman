import React from "react";
import imageEd from "../../assets/ed-bg.jpg";
import estatePoster from "../../assets/estate-poster.jpg";

const EstateDynamics = () => {
  return (
    <div className="flex flex-col  ">
      <div className=" md:h-[1700px] 2xl:h-[2400px] xl:h-[1800px] flex flex-col  justify-center  h-[1010px] w-full ">
        <div
          style={{ backgroundImage: `url(${imageEd})` }}
          className=" md:h-[1700px] xl:h-[1950px] 2xl:h-[2000px] bg-cover h-[1010px]  flex flex-col w-full relative"
        >
            <div className="h-[400px] xl:h-[1800px] 2xl:h-[1900px]  flex flex-col  ">
            <div className="relative  w-full flex flex-col justify-center items-center">
              <h1 className="md:text-[320px] text-[125px] xl:text-[370px] 2xl:text-[400px] absolute top-[20px] 2xl:left-[245px]  font-tradego ">
                Estate
              </h1>
              <h1 className="md:text-[330px] text-[145px] xl:text-[400px] 2xl:text-[440px]  absolute top-[110px] 2xl:top-[210px] xl:top-[180px] font-tradego">
                Dynamics
              </h1>
            </div>

            {/* big text */}
            
            <div className="flex justify-center mt-[205px] xl:mt-[400px] md:mt-[350px] 2xl:mt-[500px] z-30 items-center">
 <div className="2xl:h-[1500px] shadow-[-40px_40px_25px_#959595,-80px_80px_40px_#B5B5B5] bg-slate-300  2xl:w-[1100px] w-[88%]  md:h-[1100px] md:w-[750px] xl:h-[1150px] xl:w-[950px] " >
    
 <div className="md:p-4 m-3  flex flex-col items-center justify-center gap-1  md:gap-10">
      <div className="text-slate-500 text-lg 2xl:text-5xl xl:text-4xl md:mr-0 h-[50px] flex gap-4 items-center font-semibold">
        <p>05</p>
        <hr className="border-2 border-slate-800 w-[40px]"></hr>
        <h1>AARON KIRMAN</h1>
      </div>
      <div className="flex m-2 flex-col md:gap-6  md:text-8xl 2xl:text-9xl xl:text-8xl md:mr-0 text-6xl h-[40px] md:h-[100px]  font-tradego items-center relative ">
        <h1 className="absolute  ">Estate</h1>
        <h1 className="absolute top-[50px] md:top-[76px] 2xl:top-[89px]">
          Dynamics
        </h1>
      </div>
      <div className="md:w-[700px] 2xl:w-[1100px] 2xl:mt-32 2xl:text-2xl  text-center  w-[98%] flex xl:w-[900px] xl:text-lg md:mr-[0px] flex-col md:h-[100px] md:mt-14 mt-16 items-center ">
        <p className="hidden md:block">
          Estate Dynamics is a tech stack that focuses on artificial
          intelligence based on our cloud
        </p>
        <p className="hidden md:block">
          based data sets which concentrate on behavioral targeting
          during the home buying process.
        </p>
        <p className="hidden md:block">
          We built our technology to match the curated home to the
          right buyer, as well as represent
        </p>
        <p className="hidden md:block">
          the best characteristics of a seller's home to the global
          luxury marketplace.
        </p>
        <p className="text-center text-xs md:hidden">
          Estate Dynamics is a tech stack that focuses on artificial
          intelligence based on our cloud based data sets which
          concentrate on behavioral targeting during the home buying
          process. We built our technology to match the curated home
          to the right buyer, as well as represent the best
          characteristics of a seller's home to the global luxury
          marketplace.
        </p>
      </div>
      <div className=" mt-4 md:h-[450px] 2xl:h-[650px] 2xl:relative xl:relative flex flex-col justify-center items-center w-screen ">
        <img
          src={estatePoster}
          className="md:h-[430px] h-[260px] w-[300px]  md:w-[570px] xl:h-[450px] xl:w-[800px] 2xl:h-[530px] 2xl:w-[900px] 2xl:absolute 2xl:top-[100px] xl:absolute  md:mr-0 bg-cover"
        />
        <div className="flex flex-col  md:hidden transition-colors duration-500 group mt-6 justify-center relative hover:bg-black z-50 h-[55px]  w-[170px]">
          <div className="">
            <div className="flex md:hidden gap-2 p-3">
              <p className="text-slate-800 font-semibold mr-3 group-hover:text-white">
                {">"}
              </p>
              <p className="text-slate-800 font-semibold text-sm group-hover:text-white">
                LEARN MORE
              </p>
            </div>
            <hr className="border  transition-all duration-300 border-slate-800 w-16 group-hover:w-[170px] group-hover:border-slate-800" />
          </div>
        </div>
      </div>

      <div className=" flex-col  hidden 2xl:mt-20  md:flex p-1 md:p-0 transition-colors duration-500 group  md:mt-6 justify-center relative hover:bg-black z-50 h-[70px]  w-[200px]">
        <div className="flex gap-6 md:p-5 ">
          <p className="text-slate-800 font-semibold mr-3 group-hover:text-white">
            {">"}
          </p>
          <p className="text-slate-800 font-semibold group-hover:text-white">
            LEARN MORE
          </p>
        </div>
        <hr className="border-2 transition-all duration-300 border-slate-800 w-16 group-hover:w-[170px] group-hover:border-slate-800" />
      </div>
    </div>
 </div>
    {/*  */}
  </div>




          </div>
          {/* big text completed */}
        </div>
     
      </div>
    </div>
  );
};

export default EstateDynamics;



// <div className="flex justify-center relative ">
// <div className=" md:h-max flex flex-col justify-center   md:absolute xl:absolute bg-green-300 xl:left-[150px] xl:top-[370px] 2xl:absolute 2xl:top-[400px]   md:w-[800px] 2xl:w-[1200px] xl:w-[1000px] h-auto items-center w-screen  shadow-[-40px_40px_25px_#959595,-80px_80px_40px_#B5B5B5] p-6  absolute  md:left-[150px] top-[150px] md:top-[410px] ">
//   <div className="flex justify-center items-center">
//     <div className="md:p-4 m-3  flex flex-col items-center justify-center gap-1  md:gap-10">
//       <div className="text-slate-500 text-lg 2xl:text-5xl xl:text-4xl md:mr-0 h-[50px] flex gap-4 items-center font-semibold">
//         <p>05</p>
//         <hr className="border-2 border-slate-800 w-[40px]"></hr>
//         <h1>AARON KIRMAN</h1>
//       </div>
//       <div className="flex m-2 flex-col md:gap-6  md:text-8xl 2xl:text-9xl xl:text-8xl md:mr-0 text-6xl h-[40px] md:h-[100px] font-tradego items-center relative ">
//         <h1 className="absolute  ">Estate</h1>
//         <h1 className="absolute top-[50px] md:top-[76px] 2xl:top-[89px]">
//           Dynamics
//         </h1>
//       </div>
//       <div className="md:w-[700px] 2xl:w-[1100px] 2xl:mt-32 2xl:text-2xl  text-center  w-[350px] flex xl:w-[900px] xl:text-lg md:mr-[0px] flex-col md:h-[100px] md:mt-14 mt-16 items-center ">
//         <p className="hidden md:block">
//           Estate Dynamics is a tech stack that focuses on artificial
//           intelligence based on our cloud
//         </p>
//         <p className="hidden md:block">
//           based data sets which concentrate on behavioral targeting
//           during the home buying process.
//         </p>
//         <p className="hidden md:block">
//           We built our technology to match the curated home to the
//           right buyer, as well as represent
//         </p>
//         <p className="hidden md:block">
//           the best characteristics of a seller's home to the global
//           luxury marketplace.
//         </p>
//         <p className="text-center text-sm md:hidden">
//           Estate Dynamics is a tech stack that focuses on artificial
//           intelligence based on our cloud based data sets which
//           concentrate on behavioral targeting during the home buying
//           process. We built our technology to match the curated home
//           to the right buyer, as well as represent the best
//           characteristics of a seller's home to the global luxury
//           marketplace.
//         </p>
//       </div>
//       <div className=" mt-4 md:h-[450px] 2xl:h-[650px] 2xl:relative xl:relative flex flex-col justify-center items-center w-screen ">
//         <img
//           src={estatePoster}
//           className="md:h-[430px] h-[280px] md:w-[570px] xl:h-[450px] xl:w-[800px] 2xl:h-[530px] 2xl:w-[900px] 2xl:absolute 2xl:top-[100px] xl:absolute w-screen  md:mr-0 bg-cover"
//         />
//         <div className="flex flex-col  md:hidden transition-colors duration-500 group mt-6 justify-center relative hover:bg-black z-50 h-[55px]  w-[170px]">
//           <div className="">
//             <div className="flex md:hidden gap-2 p-3">
//               <p className="text-slate-800 font-semibold mr-3 group-hover:text-white">
//                 {">"}
//               </p>
//               <p className="text-slate-800 font-semibold text-sm group-hover:text-white">
//                 LEARN MORE
//               </p>
//             </div>
//             <hr className="border  transition-all duration-300 border-slate-800 w-16 group-hover:w-[170px] group-hover:border-slate-800" />
//           </div>
//         </div>
//       </div>

//       <div className=" flex-col  hidden 2xl:mt-20  md:flex p-1 md:p-0 transition-colors duration-500 group  md:mt-6 justify-center relative hover:bg-black z-50 h-[70px]  w-[200px]">
//         <div className="flex gap-6 md:p-5 ">
//           <p className="text-slate-800 font-semibold mr-3 group-hover:text-white">
//             {">"}
//           </p>
//           <p className="text-slate-800 font-semibold group-hover:text-white">
//             LEARN MORE
//           </p>
//         </div>
//         <hr className="border-2 transition-all duration-300 border-slate-800 w-16 group-hover:w-[170px] group-hover:border-slate-800" />
//       </div>
//     </div>
//   </div>
// </div>
// </div>