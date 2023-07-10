import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='flex flex-row md:w-[80%] xl:w-[85%]  items-center'>
         <div className="pt-2 relative mx-auto text-gray-600 hidden lg:flex">
          <input className=" bg-greyblack text-white h-9 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:bg-greyblack"
            type="search" name="search" placeholder="search by course title" />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4 text-white ">
            <RiSearchLine />
          </button>
        </div>

        <div className=' justify-end  h-fit items-center  space-x-5 hidden lg:flex'>
          <div className='flex items-center space-x-4'>
            <img className='hover:cursor-pointer' src='./images/notification.png' alt='icons' />
            <img className=' h-6 hover:cursor-pointer'  src='./images/profile.png' alt='' />
           
          </div>
         
        </div>
    </div>
  )
}

export default Navbar