import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {Link } from "react-scroll"


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav (!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          <h1 className='text-4xl font-bond text-pink-400 inline border-b-4 border-gray-700'>PHILTECH</h1>

        </div>
        {/* Menu */}
        <div >
          <ul className=' hidden md:flex'>
            <li>
            <Link to="Home"  smooth={true}  duration={500} >
              Home</Link>
            </li>
            <li>
            <Link to="About"  smooth={true}  duration={500} >
              About</Link>
            </li>
            <li> <Link to="Skills"  smooth={true}  duration={500} >
              Skills</Link></li>
            <li>
            <Link to="Work"  smooth={true}  duration={500} >
              Work</Link>
            </li>
            <li>
            <Link to="Contact"  smooth={true}  duration={500} >
              Contact</Link>
            </li>
          </ul>
        </div>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10' >
          {!nav ? <FaBars /> : <FaTimes/>}
        </div >
        {/* Mobil Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="Home"  smooth={true}  duration={500} >
              Home</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="About"  smooth={true}  duration={500} >
             About</Link>
            </li>
            
            
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="Skills"  smooth={true}  duration={500} >
              Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="Work"  smooth={true}  duration={500} >
              Work</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="Contact"  smooth={true}  duration={500} >
              Contact</Link>
            </li>

        </ul>
        {/* Social icons */}
        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
              <a className='flex justify-between w-full items-center text-gray-300' href='https://www.linkedin.com/in/enyichukwu-theophilus-00723b175/'>Linkedin<FaLinkedin size={30} />

              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between w-full items-center text-gray-300' href='https://https://github.com/dontheo-cyber'>Github<FaGithub size={30} />

              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2d0]'>
              <a className='flex justify-between w-full items-center text-gray-300' href='https://dongospel@outlook.com'>Email<HiOutlineMail size={30} />

              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between w-full items-center text-gray-300' href='https://drive.google.com/drive/my-drive?ths=true'>Resume<BsFillPersonLinesFill size={30} />

              </a>
            </li>
          </ul>

        </div>

    </div>
  )
}

export default Navbar