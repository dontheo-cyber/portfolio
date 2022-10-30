import React from 'react'
import HTML from '../media/html.png'
import CSS from "../media/css.png"
import Javascript from "../media/javascript.png"
import GitHub from "../media/github.png"
import ReactImg from "../media/react.png"
import Tailwind from "../media/tailwind.png"
import Mongo from "../media/mongo.png"
import Material from "../media/material.png"





const Skills = () => {
  return (
    <div name='Skills' className='bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-700'>Expeirence</p>
                <p className='py-4 text-2xl'>***These are technologies I ve worked with</p>
            </div>
            <div className='w-full grid grid-col-1 lg:grid-cols-4  md:grid-cols-2 gap-4 py-8 text-center'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='W-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='W-20 mx-auto' src={CSS} alt='CSS icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='W-20 mx-auto' src={Javascript} alt='Javascript icon' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='W-20 mx-auto' src={GitHub} alt='Github icon' />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='W-20 mx-auto' src={ReactImg} alt='React icon' />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='W-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='W-20 mx-auto' src={Mongo} alt='Mongo icon' />
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='W-20 mx-auto' src={Material} alt='Material ui icon' />
                    <p className='my-4'>MATERIAL UI</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills