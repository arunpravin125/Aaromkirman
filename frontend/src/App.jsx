import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import MiddleImage1 from './components/middleImages/MiddleImage1'
import { ParallaxProvider } from "react-scroll-parallax";
import About from './components/About/About';
import AdStarted from './components/About/AdStarted';
import AdSoldList from './components/About/AdSoldList';
import EstateDynamics from './components/About/EstateDynamics';
import ListingImpossible from './components/About/ListingImpossible';
import ParallaxGrid from './components/About/ParallaxGrid';
import FeaturedIn8 from './components/About/FeaturedIn8';
import Aaron10 from './components/About/Aaron10';




const App = () => {
  const [isStricky,setIsStricky] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        setIsStricky(window.scrollY > 200);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className="overflow-hidden" >
    <div className={`flex ${isStricky == true? "fixed":"hidden"}    z-50 w-full transition-all duration-300 top-[0px] flex-row justify-evenly gap-28 p-4 bg-black text-white`} >
        <div className="flex items-center" >
        <h1 className="text-5xl hidden md:flex font-serif" >AK</h1>
        <div className="md:hidden ml-16 flex justify-end relative items-center" >
        <h1 className="md:hidden  text-3xl font-Sigmar" >AARONKIRMAN</h1>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 md:hidden ml-[50px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
        </div>
       
       
        </div>
         <div className=" hidden gap-14 md:flex transition-all duration-300 justify-center  md:flex-row  items-center text-sm" >
          <p>ABOUT</p>
          <p>ESTATE DYNAMICS</p>
          <p>BUY</p>
          <p>SELL</p>
          <p>LISTINGS</p>
          <p>MEDIA</p>
          <p>CONTACT</p>
          <p>
          <svg
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

<Header/>
{/* finished responsive */}
<ParallaxProvider>
  
  
<MiddleImage1/> 
{/* finished responsive */}
<About/>
{/* finished responsive */}
<AdStarted/>
{/* finished responsive */}
<AdSoldList/>
{/* finished responsive */}
<EstateDynamics/>
{/* finished responsive */}

<ListingImpossible/>
{/* finished responsive */}
{/* <ParallaxGrid/>  */}
<FeaturedIn8/>

<Aaron10/>
</ParallaxProvider>

    </div>
  )
}

export default App
