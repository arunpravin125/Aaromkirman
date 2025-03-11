import React from 'react'

const Temp = () => {
  return (
    <div>
         <ParallaxBanner 
                   layers={[
                    {
                      image: imageCTa,
                      speed: 15, // Adjust this value for a stronger parallax effect
                      opacity: [1, 2], // Opacity transition while scrolling
                    },
                  ]}
                  className="relative object-center top-0 left-0 h-[1050px] w-[600px] bg-white" 
                  >
                    <div className="absolute flex flex-wrap gap-4 justify-center bg-transparent" >
                    <div className="bg-transparent border-4 border-slate-300 h-[500px] w-[360px] relative" >
                
                <div className="flex flex-col absolute top-[50px] w-[350px] mt-11 gap-11 items-center justify-center text-white" >
                   <p className=" font-tradego text-[20px]" >KIRMAN</p>
                   <p className="text-6xl font-sans" >Capital</p>
                   <p className='text-xs  text-center p-3 font-light text-slate-400' >We invest in people with ideas.We love innovative solutions to big problems</p>
                   <div className="flex flex-col gap-5" >
                       <div className="flex ml-5  gap-6" >
                       <p>{">"}</p>
                       <p className=" text-sm font-tradego text-[13px]" >KNOW MORE</p>
                       </div>
                       <hr  className="border-2 border-slate-200 w-16" />
                   </div>
                </div>
            </div>
            {/* 1st */}
            <div className=" h-[500px] w-[360px] relative" >
                 
                 <div className="flex flex-col absolute top-[50px] w-[350px] mt-11 gap-11 items-center justify-center text-white" >
                    <p className="text-slate-300 font-tradego text-[20px]" >KIRMAN</p>
                    <p className="text-6xl font-sans" >Foundation</p>
                    <p className='text-xs  text-center p-3 font-light text-slate-400' >We invest in people with ideas.We love innovative solutions to big problems</p>
                    <div className="flex flex-col gap-5" >
                        <div className="flex ml-5  gap-6" >
                        <p>{">"}</p>
                        <p className=" text-sm font-tradego text-[13px]" >KNOW MORE</p>
                        </div>
                        <hr  className="border-2 border-slate-200 w-16" />
                    </div>
                 </div>
             </div>
             {/* 2nd */}
             <div className=" h-[500px] w-[360px] relative" >
                 
                 <div className="flex flex-col absolute top-[50px] w-[350px] mt-11 gap-11 items-center justify-center text-white" >
                    <p className="text-slate-300 font-tradego text-[20px]" >KIRMAN</p>
                    <p className="text-6xl font-sans" >Coaching</p>
                    <p className='text-xs  text-center p-3 font-light text-slate-400' >We invest in people with ideas.We love innovative solutions to big problems</p>
                    <div className="flex flex-col gap-5" >
                        <div className="flex ml-5  gap-6" >
                        <p>{">"}</p>
                        <p className=" text-sm font-tradego text-[13px]" >KNOW MORE</p>
                        </div>
                        <hr  className="border-2 border-slate-200 w-16" />
                    </div>
                 </div>
             </div>
             {/* 3rd */}
             <div className=" h-[500px] w-[360px] relative" >
                
                <div className="flex flex-col absolute top-[50px] w-[350px] mt-11 gap-11 items-center justify-center text-white" >
                   <p className="text-slate-300 font-tradego text-[20px]" >KIRMAN</p>
                   <p className="text-6xl font-sans" >Fellowship</p>
                   <p className='text-xs  text-center p-3 font-light text-slate-400' >Aaron takes on two new fellows,twice a year,to be his prodigies</p>
                   <div className="flex flex-col gap-5" >
                       <div className="flex ml-5  gap-6" >
                       <p>{">"}</p>
                       <p className=" text-sm font-tradego text-[13px]" >KNOW MORE</p>
                       </div>
                       <hr  className="border-2 border-slate-200 w-16" />
                   </div>
                </div>
            </div>
            {/* 4th */}
            <div className=" h-[500px] w-[360px] relative" >
                
                     <div className="flex flex-col absolute top-[50px] w-[350px] mt-11 gap-11 items-center justify-center text-white" >
                       
                        <p className="text-6xl font-sans mt-16" >Learn More</p>
                       <div className="border-2 border-slate-400 h-[70px] flex items-center justify-center w-[300px]" >
                        <input placeholder="EMAIL ADDRESS" className="bg-transparent p-2 outline-none border-0"  />
                       </div>
                        
                        <div className="flex flex-col gap-5" >
                            <div className="flex ml-5  gap-6 w-[230px]" >
                            <p>{">"}</p>
                            <p className=" text-sm font-tradego text-[13px] text-center" >SCHEDULE A MEETING WITH AARON</p>
                            </div>
                            <hr  className="border-2 border-slate-200 w-16" />
                        </div>
                     </div>
                 </div>
                    </div>
                    
                  </ParallaxBanner>
                    
    </div>
  )
}

export default Temp