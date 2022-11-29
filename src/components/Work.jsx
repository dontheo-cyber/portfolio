import React from 'react'
import tourism from "../media/tourism.PNG"
import boga from "../media/boga.PNG"
import expirence from "../media/expirence.PNG"

const Work = () => {
  return (
    <div name='Work' className='w-full md:hscreen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-16'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>WORK</p>
          <p className='pt-8' >*** Check Out Some Of My Recent work</p>
        </div>
        {/* Container */}
        <div  
           className='grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Grid container */}
          <div style={{background: `url(${tourism}`}} className='shadow-lg shadow-[#38424e] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application

              </span>
              <div className='pt-8 text-center'>
                <a href='https://tourismbeaches.netlify.app'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Code</button></a>
              </div>
            </div>
          </div>
          <div style={{background: `url(${boga}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application

              </span>
              <div className='pt-8 text-center'>
                <a href='https://bestbitechips.netlify.app'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Demo</button></a>
                <a href='https://https://github.com/dontheo-cyber/portfolio'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Code</button></a>
              </div>
            </div>
          </div>
          <div style={{background: `url(${expirence}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application

              </span>
              <div className='pt-8 text-center'>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Code</button></a>
              </div>
            </div>
          </div>
          <div style={{background: `url(${tourism}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application

              </span>
              <div className='pt-8 text-center'>
                <a href='https://tourismbeaches.netlify.app'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Code</button></a>
              </div>
            </div>
          </div>
          <div style={{background: `url(${tourism}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application

              </span>
              <div className='pt-8 text-center'>
                <a href='https://tourismbeaches.netlify.app'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Code</button></a>
              </div>
            </div>
          </div>
          <div style={{background: `url(${tourism}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application

              </span>
               <div className='pt-8 text-center'>
                <a href='https://tourismbeaches.netlify.app'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Code</button></a>
              </div>
            </div>
          </div>
        </div> 
      </div>
        
    </div>
  )
}

export default Work