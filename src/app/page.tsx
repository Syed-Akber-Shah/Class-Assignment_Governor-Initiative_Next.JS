"use client";
import Image from "next/image";
import background from "../../public/governor_house_pic.jpeg"
import foreground from "../../public/kamran_tessori.png"
import React from "react";


 const Home = () => {
  return(
<div>
    <><main className='flex flex-col items-center justify-between'>
    <div className="relative w-full">
      <div className="absolute -z-10 w-full">
         <Image
         src={background} alt="background-image" className="w-full opacity-85 -mt-6" width={1000} height={1000} />
      </div>
      <div className="relative z-20 w-full">
         <Image
         src={foreground} alt="foreground-image" className="w-100  px-20.5 py-1 ml-96 size-4/6" width={1000} height={1000} />
  </div>
    </div>
  </main></>
    
        <div className="flex justify-center items-center mt-4 mb-4 mr-28 ml-6">
          <>
            <div className="*lg:p-4 md:w-full flex justify-around mt-4 w-1/2">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-180 h-80">
                <Image className="w-full" src="/governor-site-card1.jpg" alt="Card1" width={300} height={300}/>
              </div>
            </div>
          </>
{/* 
          <>
            <div className="*lg:p-4 md:w-full flex justify-around mt-4 w-1/2">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-180 h-80">
                <img className="w-full" src="/governor-site-card2.jpg" alt="Card2" />
              </div>
            </div>
          </> */}

          <>
            <div className="*lg:p-4 md:w-full flex mt-4">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-180 h-80">
                <Image className="w-full" src="/governor-site-card3.jpg" alt="Card3" width={300} height={300}/>
              </div>
            </div>
          </>

        </div>

        <div>
          <h1 className="text-cyan-800 text-4xl font-extrabold">Core Courses Sequences</h1>
          <div className="flex mt-4 mb-4 mr-28 ml-6">
            <>
              <div className="*lg:p-4 md:w-full flex mt-4">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-180 h-80">
                  <Image className="w-full" src="/core-courses-card-1.jpg" alt="Card1" width={400} height={400}/>
                  <div className="px-6 py-4 lg:h-52">
                    <span className="tracking-widest text-lg font-bold text-gray-600 mb-1 overflow-hidden">Programming Fundamentals</span>
                  </div>
                </div>
              </div>
            </>


            <>
              <div className="*lg:p-4 md:w-full flex mt-4">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-180 h-80">
                  <Image className="w-full" src="/core-courses-card-2.jpg" alt="Card1" width={400} height={400}/>
                  <div className="px-6 py-4 lg:h-52">
                    <span className="tracking-widest text-lg font-bold text-gray-600 mb-1 overflow-hidden">Web2 Using NextJS</span>
                  </div>
                </div>
              </div>
            </>


            <>
              <div className="*lg:p-4 md:w-full flex mt-4">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-180 h-80">
                  <Image className="w-full hover:touch-pinch-zoom" src="/core-courses-card-3.jpg" alt="Card1" width={400} height={400}/>
                  <div className="px-6 py-4 lg:h-52">
                    <span className="tracking-widest text-lg font-bold text-gray-600 mb-1 overflow-hidden">Earn as You Learn</span>
                  </div>
                </div>
              </div>
            </>

            {/* <div className="mt-4 mb-4 px-4 py-4">
              <div>
                <h1 className="text-blue-700 text-4xl font-extrabold mt-4 mb-4">Advanced Courses</h1>
                <div className="flex mt-4 mb-4 mr-28 ml-6">
                  <>
                    <div className="*lg:p-4 md:w-full flex mt-4 mb-4 ">
                      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-180 h-80">
                        <img className="w-full" src="/advanced-courses-card-1.jpg" alt="Card1" />
                        <div className="px-6 py-4 lg:h-52">
                          <span className="tracking-widest text-lg font-bold text-gray-600 mb-1 overflow-hidden">Artificial Intelligence</span>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>

            <>
              <div className="*lg:p-4 md:w-full flex mt-4">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-180 h-80">
                  <img className="w-full hover:touch-pinch-zoom" src="/advanced-courses-card-2.jpg" alt="Card2" />
                  <div className="px-6 py-4 lg:h-52">
                    <span className="tracking-widest text-lg font-bold text-gray-600 mb-1 overflow-hidden">Earn as You Learn</span>
                  </div>
                </div>
              </div>
            </> */}


          </div>
        </div>

              </div>
  )
}





export default Home;

// <div className="max-w-screen-lg m-auto h-[200vh] py-5 px-5 my-10 text-center text-2xl rounded-2xl bg-white shadow-[0px_8px_48px_rgba(0,0,0,0.25)]">
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consequatur.</p>
   //   </div>
