import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import MiddleImage1 from './components/middleImages/MiddleImage1'
import { ParallaxProvider } from "react-scroll-parallax";
import About from './components/About/About';
import AdStarted from './components/About/AdStarted';
import AdSoldList from './components/About/AdSoldList';
import EstateDynamics from './components/About/EstateDynamics';
import ListingImpossible from './components/About/ListingImpossible';

import FeaturedIn8 from './components/About/FeaturedIn8';
import Aaron10 from './components/About/Aaron10';
import sidebarimg from "../src/assets/footer-bg.jpg"



const App = () => {
  const [isStricky,setIsStricky] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setIsStricky(window.scrollY > 200);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className="overflow-hidden" >
       <div className={`md:hidden ${isSidebarOpen?"hidden":""} fixed flex justify-center  text-white z-50 h-[70px] bg-black w-screen  items-center`} >
        <h1 className="md:hidden  text-3xl font-Sigmar" >AARONKIRMAN</h1>
        <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 md:hidden ml-[50px]"
              onClick={() => setIsSidebarOpen(true)}
            >
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
        </div>
        <div
        className={`fixed top-0 right-0 w-screen p-4 h-[300px] z-50  text-white transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Background Image */}
        <img src={sidebarimg} className="absolute inset-0 w-screen h-[500px] object-cover opacity-95" />

        {/* Sidebar Content */}
        <div className="relative p-1 flex flex-col gap-14 z-10">
          {/* Sidebar Header */}
          <div className="absolute top-4  w-screen">
            <div className="flex justify-center md:justify-between gap-9  md:m-2 w-screen  items-center" >
            <h2 className="text-2xl flex ml-[-30px] font-tradego font-bold">AARONKIRMAN</h2>
            <div className="flex md:flex-col items-center ">
              <p>424.249.7162</p>

              {/* Close Icon (Slides Sidebar Out to Right) */}
              <div className="flex flex-col items-center cursor-pointer" onClick={() => setIsSidebarOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 transition-transform duration-500 hover:rotate-90"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <p className="text-sm">CLOSE</p>
              </div>
            </div>
            </div>
         
          </div>

          {/* Sidebar Menu */}
          <div className="mt-32 p-3  font-Sigmar flex flex-col gap-2 text-2xl">
            <h1>HOME</h1>
            <h1>ABOUT</h1>
            <h1>LISTINGS</h1>
            <h1>MEDIA</h1>
            <h1>ESTATE DYNAMICS</h1>
            <h1>BUY</h1>
            <h1>SELL</h1>
            <h1>CONTACT</h1>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
      <div className={`flex ${isStricky == true? "fixed":"hidden"} ${isSidebarOpen ?"hidden":"block"}  z-50 w-screen transition-all duration-300 top-[0px] flex-row justify-evenly gap-28 p-4 bg-black text-white`} >
        <div className="flex justify-between items-center w-screen" >
        <h1 className="text-5xl hidden md:flex font-serif" >AK</h1>
       
        <div className=" hidden gap-14 md:flex transition-all duration-300 justify-center  md:flex-row  items-center text-sm" >
          <p>ABOUT</p>
          <p>ESTATE DYNAMICS</p>
          <p>BUY</p>
          <p>SELL</p>
          <p>LISTINGS</p>
          <p>MEDIA</p>
          <p>CONTACT</p>
          <p>
          <svg onClick={() => setIsSidebarOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </p>
        
         </div>
       
        </div>
        
        {/*  */}
         
      </div>
      </div>
  

<Header/>
{/* finished responsive */}
<ParallaxProvider>
  
  
<MiddleImage1/> 
{/* finished responsive 1*/}
<About/>
{/* finished responsive  2*/}
<AdStarted/>
{/* finished responsive 3*/}
<AdSoldList/>
{/* finished responsive 4*/}
<EstateDynamics/>
{/* finished responsive 5*/}

<ListingImpossible/>
{/* finished responsive 6*/}
{/* <ParallaxGrid/>  */}
<FeaturedIn8/>
{/* finished responsive 7 */}
<Aaron10/>
</ParallaxProvider>

    </div>
  )
}

export default App
