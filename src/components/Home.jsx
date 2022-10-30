import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen  bg-[#0a192f] '>
        {/*Container  */}
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full px-4'>
            <p className='text-pink-700 '>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Theophilus Enyichukwu</h1>
            <h2 className='text-4xl sm:text-7xl font-bond text-[#8892b0]'>I am a Frontend Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer specializing in building and designing 
                exceptional digital expirences. Currently, I am focused on building
                responsive frontend web applications.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-6 ml-2 flex items-center text-2xl hover:bg-pink-600 hover:border-pink-600'>
                    View Work <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span></button>
            </div>

        </div>

    </div>
  )
}

export default Home