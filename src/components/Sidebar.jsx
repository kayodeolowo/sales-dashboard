import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { TbMenu2 } from 'react-icons/tb';
import { NavLink, Link } from 'react-router-dom';
import { FaLightbulb, FaUserTie } from 'react-icons/fa'
import { MdPeople, MdArticle, MdGrading } from 'react-icons/md'
import { RiBarChartFill } from 'react-icons/ri'
import { FiBook } from 'react-icons/fi'
import { FiFlag, FiSettings } from 'react-icons/fi'
import { HiOutlineDocumentText, HiOutlineBookOpen } from 'react-icons/hi'
import { IoIosArrowDown, IoMdClose } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi'
import { RiCloseFill } from 'react-icons/ri'
import { Text } from '../styles/Text';


const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const activeLink = " text-white  transition ease-in duration-300  bg-red-500  w-[10rem] xl:max-w-[14rem] rounded-md   ";
  const normalLink = "";


  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  return (
    <header className='  lg:h-screen'>
      <div className="flex flex-col lg:w-[18%] xl:max-w-[17rem] lg:bg-blue-500  lg:h-full justify-between lg:pt-8        
              lg:fixed   ">

        <div className='lg:flex flex-col   '>
          <div className=' hidden  ml-4 lg:flex  space-x-2  items-center'>
            <img src='./images/logo.png' alt='logo' className='w-6'/>
            <h1 className='text-white text-xs font-bold mt-2'> Marketie </h1>


          </div>

          <div className="pt-2 lg:block hidden relative mt-2 mx-auto ml-4 text-gray-600  ">
            <input className=" bg-searchblue h-8 px-5 pr-16 rounded-lg text-sm w-[9rem] xl:max-w-[12rem] focus:outline-none"
              type="search" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">

            </button>
          </div>

          <ul id='nav' className=' text-[0.9rem]   text-textgray hidden   lg:flex flex-col    mt-4 space-y-1 ml-4  '>
            <NavLink to='/dashboard' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text> <RiBarChartFill className='mr-2' /> Dashboard </Text>   </NavLink>
            <NavLink to='/leaderboard' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text> <RiBarChartFill className='mr-2' /> LeaderBoard </Text>   </NavLink>
           
          


           



          </ul>

        </div>

        {/* <div className='mb-6'>
          <ul id='nav' className=' text-[0.9rem]   text-textgray hidden   lg:flex flex-col    mt-4 space-y-1 ml-4  '>
            <NavLink to='/support' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p> <RiBarChartFill className='mr-2' /> Support </p>   </NavLink>
            <NavLink to='/settings' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p> <FiSettings className='mr-2' /> Settings </p>   </NavLink>
          </ul>
        </div> */}





        {/* mobile hamburger */}
        <div className=' lg:hidden  h-14    w-screen px-6 sm:px-6 flex flex-row   justify-between  items-center z-10 '>

          <div>
            {nav ? <AiOutlineClose onClick={handleNav} className='  text-2xl sm:text-3xl text-[#363740] items-center  ' /> : <TbMenu2 onClick={handleNav} className='text-[#363740] text-2xl sm:text-3xl items-center  left-0  duration-50 ' />}
          </div>

          <div className=' lg:hidden flex flex-row  ml-4  space-x-1   items-center'>
            <img src='./images/logo.png' alt='logo'
              className='h-8' />
            <h1 className='text-black text-xs font-semibold '> Moon <br /> Republic </h1>


          </div>

          <div>
            <FiSearch className='text-2xl' />
          </div>



        </div>

        {/* mobile menu */}
        <div className={nav ? ' leading-loose text-start bg-red-400   text-2xl   text-[#000000]  left-0 top-0   w-[60%]  mx-auto z-10   duration-300 flex h-full fixed       flex-col' : 'absolute left-[-100%] '}>

          <div id='bold' className='flex flex-col justify-between h-screen'>

            <div>
              <ul id='nav' className=' text-[1rem]   text-textgray  flex-col    mt-10 space-y-1 ml-4  '>
                <div className='flex justify-between items-center'>
                  <NavLink to='/dashboard'     >  <Text className='' onClick={handleNav}> <RiBarChartFill className='mr-2' /> Dashboard </Text>   </NavLink>
                  <RiCloseFill onClick={handleNav} className='mr-4 font-bold text-2xl mt-1' />
                </div>

                



              </ul>
            </div>


            {/* <div className='mb-[6rem]'>
              <ul id='nav' className=' text-[1rem]   text-textgray flex flex-col     space-y-1 ml-4  '>
                <NavLink to='/support' >  <p onClick={handleNav}> <RiBarChartFill className='mr-2' /> Support </p>   </NavLink>
                <NavLink to='/settings' >  <p onClick={handleNav}> <FiSettings className='mr-2' /> Settings </p>   </NavLink>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </header>

  )
}

export default Sidebar;