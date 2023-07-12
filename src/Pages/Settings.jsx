import React from 'react'
import { DashboardContainer } from '../styles/DashboardContainer'
import { NavContainer } from '../styles/NavContainer'
import Navbar from '../components/Navbar'
import { Inputs } from '../styles/Inputs'
import { Button } from 'flowbite-react'

const Settings = () => {
  return (
    <div>
    <DashboardContainer>
        <NavContainer>
           
            <Navbar />
        </NavContainer>

        <div className='p-4 rounded-lg bg-greyblack '>
        <div className='flex  flex-col lg:flex-row lg:space-x-4  lg:items-center items-center   pb-4 mt-4'>
                <label className='w-full lg:w-[13rem] text-sm text-white' >  Company Name </label>
                <Inputs className='py-1 text-sm w-full lg:w-[25rem]' placeholder='FlyTech Digitals' />

            </div>

            <div className='flex  flex-col lg:flex-row lg:space-x-4  lg:items-center items-center   pb-4 mt-4'>
                <label className='w-full lg:w-[13rem] text-sm text-white' >  Address </label>
                <Inputs className='py-1 text-sm w-full lg:w-[25rem]' placeholder='Canada' />

            </div>

            <div className='flex  flex-col lg:flex-row lg:space-x-4  lg:items-center items-center   pb-4 mt-4'>
                <label className='w-full lg:w-[13rem] text-sm text-white' >  Admin Username </label>
                <Inputs className='py-1 text-sm w-full lg:w-[25rem]' placeholder='SmithC' />

            </div>

            <div className='flex flex-col lg:flex-row lg:space-x-4  lg:items-center items-center   pb-4 mt-4'>
                <label className='w-full lg:w-[13rem] text-sm text-white'>  Email address </label>
                <Inputs className='py-1 text-sm w-full lg:w-[25rem]' placeholder='Flytechmail@flytech.com' />

            </div>

            {/* <div className='flex flex-col lg:flex-row   lg:items-center  lg:space-x-4  mt-4 w-full lg:w-[38rem] justify-start '>
                <div className='flex flex-col'>
                    <label className='w-full lg:w-[13rem] text-white'> Company Photo </label>
                    <p className='text-xs text-white'> This will be displayed on your profile </p>
                </div>

                <div className='flex flex-col lg:flex-row space-y-2 '>
                    <img className='h-10 w-10 rounded-full mt-2 lg:mt-0 mb-2 lg:mb-0' src='./images/profilepicture.png' alt='profile picture' />

                    <div className=' text-center text-xs border-gray border rounded-md py-2  w-full lg:w-[24rem] lg:ml-4 '>
                        <img src='./images/upload.png' alt='upload icon'
                            className='mx-auto h-7 w-7 mt-2' />
                        <p className='text-white'> <span className='text-blue-600 hover:cursor-pointer'> Click to upload </span> or drag and drop <br /> SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    </div>
                </div>

            </div> */}

            <Button className="w-fit mx-auto bg-green text-black"> Submit </Button>
        </div>

    </DashboardContainer>
</div>
  )
}

export default Settings
