import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { TbLogout, TbMenu2 } from 'react-icons/tb';
import { NavLink, Link } from 'react-router-dom';
import { RiBarChartFill, RiSearchLine } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { RiCloseFill } from 'react-icons/ri'
import { Text } from '../styles/Text';
import { AiFillHome } from 'react-icons/ai'
import { BsFillBasket2Fill, BsFillCartCheckFill } from 'react-icons/bs'
import { IoMdClose, IoMdSettings } from 'react-icons/io'


const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const activeLink = "   transition ease-in duration-300  bg-green  text-black w-[10rem] xl:max-w-[14rem] rounded-md   ";
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
      <div className="flex flex-col lg:w-[15%] xl:max-w-[17rem] lg:bg-black text-greytext  lg:h-full justify-between lg:pt-8        
              lg:fixed border-r border-greytext  ">

        <div className='lg:flex flex-col   '>
          <div className=' hidden  ml-4 lg:flex  space-x-2  items-center'>
            <img src='./images/logo.png' alt='logo' className='w-6' />
            <h1 className='text-white text-base font-bold font-mono mt-2 bg-gradient-to-r from-blue to-yellow bg-clip-text text-transparent'> Marketie </h1>


          </div>



          <ul id='nav' className=' text-[0.9rem]   text-textgray hidden   lg:flex flex-col    mt-4 space-y-4 ml-4  '>
            <NavLink to='/dashboard' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text> <AiFillHome className='mr-2' /> Dashboard </Text>   </NavLink>
            <NavLink to='/orders' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text> <BsFillCartCheckFill className='mr-2 font-bold' /> Orders </Text>   </NavLink>
            <NavLink to='/products' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text> <BsFillBasket2Fill className='mr-2' /> Products </Text>   </NavLink>
            <NavLink to='/sales-report' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text> <RiBarChartFill className='mr-2' /> Sales Report </Text>   </NavLink>
            <NavLink to='/leaderboard' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text> <RiBarChartFill className='mr-2' /> LeaderBoard </Text>   </NavLink>
            <NavLink to='/settings' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text> <IoMdSettings className='mr-2' /> Settings </Text>   </NavLink>
            <Text> <TbLogout className='mr-2' /> Sign Out </Text>
          </ul>
        </div>
        {/* mobile hamburger */}
        <div className=' lg:hidden  h-14    w-screen px-6 sm:px-6 flex flex-row   justify-between  items-center z-10 '>

          <div>
            {nav ? <AiOutlineClose onClick={handleNav} className='  text-2xl sm:text-3xl text-[#363740] items-center  ' /> : <TbMenu2 onClick={handleNav} className='text-white text-2xl sm:text-3xl items-center  left-0  duration-50 mt-2' />}
          </div>

          <div className="pt-2 relative mx-auto text-gray-600 w-fit">
          <input className=" bg-greyblack text-white h-8 px-2 rounded-lg text-sm focus:outline-none focus:bg-greyblack"
            type="search" name="search" placeholder="search " />
          <button type="submit" className="absolute right-0 top-0 mt-4 mr-2 text-white ">
            <RiSearchLine />
          </button>
        </div>

        <div className=' justify-end mt-2 h-fit items-center  space-x-5 '>
          <div className='flex items-center space-x-4'>
            <img className='hover:cursor-pointer' src='./images/notification.png' alt='icons' />
            <img className=' h-6 hover:cursor-pointer'  src='./images/profile.png' alt='' />
           
          </div>
         
        </div>

         
        </div>

        {/* mobile menu */}
        <div className={nav ? ' leading-loose text-start bg-black pl-3  text-base pt-10  space-y-4   text-greytext left-0 top-0   w-[60%]  mx-auto z-10   duration-300 flex h-full fixed  flex-col' : 'absolute left-[-100%] '}>
          <div className='flex flex-row space-x-16 items-center'>
            <div className='flex mb-8  space-x-2  items-center'>
              <img src='./images/logo.png' alt='logo' className='w-6' />
              <h1 className='text-white text-base font-bold font-mono mt-2 bg-gradient-to-r from-blue to-yellow bg-clip-text text-transparent'> Marketie </h1>
            </div>

            <IoMdClose className='font-bold -mt-6 hover:cursor-pointer text-2xl text-white' onClick={handleNav} />
          </div>

          <NavLink to='/dashboard' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text className='w-fit' onClick={handleNav}> <AiFillHome className='mr-2' /> Dashboard </Text>   </NavLink>
          <NavLink to='/orders' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text className='w-fit' onClick={handleNav}> <BsFillCartCheckFill className='mr-2 font-bold' /> Orders </Text>   </NavLink>
          <NavLink to='/products' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text className='w-fit' onClick={handleNav}> <BsFillBasket2Fill className='mr-2' /> Products </Text>   </NavLink>
          <NavLink to='/sales-report' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text className='w-fit' onClick={handleNav}> <RiBarChartFill className='mr-2' /> Sales Report </Text>   </NavLink>
          <NavLink to='/leaderboard' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text className='w-fit' onClick={handleNav}> <RiBarChartFill className='mr-2' /> LeaderBoard </Text>   </NavLink>
          <NavLink to='/settings' className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <Text className='w-fit' onClick={handleNav}> <IoMdSettings className='mr-2' /> Settings </Text>   </NavLink>
          <Text className='w-fit' onClick={handleNav}> <TbLogout className='mr-2' /> Sign Out </Text>

        </div>
      </div>
    </header>

  )
}

export default Sidebar;