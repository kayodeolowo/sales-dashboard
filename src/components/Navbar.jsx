import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between  w-full '>
    <div className="pt-2 relative  text-gray-600 hidden lg:flex w-[30%]">
      <input className="bg-greyblack text-white h-9 px-5 w-full rounded-lg text-sm focus:outline-none focus:bg-greyblack"
        type="search" name="search" placeholder="Search here..." />
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4 text-white">
        <RiSearchLine />
      </button>
    </div>
  
    <div className='hidden lg:flex items-center space-x-4'>
      <img className='hover:cursor-pointer' src='./images/notification.png' alt='icons' />
     <a href='https://kayodeolowo.netlify.app/' target='blank' className='hover:cursor-pointer'> 
     <img className='h-6 hover:cursor-pointer' src='./images/profile.png' alt='' />
     </a>
    </div>
  </div>
  )
}

export default Navbar