import React, { useEffect, useState } from "react";
import glassBuilding from "../assets/glassBuilding.jpg";


const Header = () => {
  const [isOpen,setIsOpen] =  useState(null)
  
  return (
    <div>
   
      <div>
     
      <header style={{ backgroundImage: `url(${glassBuilding})` }} className=" bg-cover h-[400px] md:h-[600px] w-auto p-8 ">
        <div>
          <div className="flex justify-center " >
            <h1 className="text-white text-4xl font-serif">AARONKIRMAN</h1>
          </div>

          <div className=" hidden md:flex justify-end" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
          <div   className="text-white flex flex-row justify-evenly " >
            <div onMouseEnter={()=>setIsOpen("about")} onMouseLeave={()=>setIsOpen(null)} className="hidden md:flex flex-col relative justify-center gap-3 items-center" >
              <h2 >ABOUT</h2>
             { isOpen == "about" && <div className="bg-black mt-5  text-white justify-center w-[150px]  top-[20px] absolute  p-3 flex flex-col gap-4" >
                <p>AARONKIRMAN</p>
                <p>AARON KIRMAN GROUP</p>
                <p>CHRISTIE'S INTERNATIONAL REAL ESTATE</p>
                <p>KIRMAN CAPITAL</p>
                <p>KIRMAN COACHING</p>
                <p>KIRAN FELLOWSHIP</p>
                <p>OUR PARTNERS</p>
              </div>}
            </div>
            <div onMouseEnter={()=>setIsOpen("estate")} onMouseLeave={()=>setIsOpen(null)} className=" hidden md:flex flex-col justify-center relative gap-3 items-center" >
            <h2>ESTATE DYNAMICS</h2>
             { isOpen == "estate" && <div className="bg-black mt-5 absolute top-[20px] w-[200px] text-white justify-center items-center p-2 flex flex-col gap-4" >
                <div className="flex flex-col justify-center items-center" >
                  <p>2025 LUXURY HOUSING</p>
                  <p>FORECAST E-BOOK</p>
                </div>
              </div>}
            </div>
            <div onMouseEnter={()=>setIsOpen("buy")} className="hidden md:flex flex-col justify-center relative gap-3 items-center" >
            <h2>BUY</h2>
            
            </div>
            <div onMouseEnter={()=>setIsOpen("sell")} className="hidden md:flex flex-col justify-center relative gap-3 items-center" >
            <h2>SELL</h2>
            
            </div>
           
            <div onMouseEnter={()=>setIsOpen("listings")} onMouseLeave={()=>setIsOpen(null)} className="hidden md:flex flex-col justify-center relative gap-3 items-center" >
            <h2>LISTINGS</h2>
             { isOpen == "listings" && <div className="bg-black mt-5 absolute top-[20px] w-[200px] text-white justify-center items-center p-2 flex flex-col gap-4" >
                <div className="flex flex-col gap-4 justify-center items-center" >
                  <p>EXCLUSIVE LISTINGS</p>
                  <p>SOLD LISTINGS</p>
                  <p>DEVELOPMENTS</p>
                  <p>COMMUNITIES</p>
                  <p>FOR LEASE</p>
                  <p>PRE-MARKET LISTINGS</p>
                </div>
              </div>}
            </div>
          
            <div onMouseEnter={()=>setIsOpen("media")}  onMouseLeave={()=>setIsOpen(null)} className="hidden md:flex flex-col justify-center relative gap-3 items-center" >
            <h2>MEDIA</h2>
             { isOpen == "media" && <div className="bg-black mt-5 absolute top-[20px] w-[200px] text-white justify-center items-center p-2 flex flex-col gap-4" >
                <div className="flex flex-col gap-4 justify-center items-center" >
                
                  <p>PRINT MEDIA</p>
                  <p>LISTING IMPOSSIBLE</p>
                  <p>TV/VIDEO</p>
                </div>
              </div>}
            </div>
           <h2 className="hidden md:block" >CONTACT</h2>
          </div>
        </div>
      </header>
    </div>
  
    </div>
    
  );
};

export default Header;
