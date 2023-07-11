import React from 'react'
import { DashboardContainer } from '../styles/DashboardContainer'
import { NavContainer } from '../styles/NavContainer'
import Navbar from '../components/Navbar'
import productsData from '../Data/products.json'

const LeaderBoard = () => {
  return (
    <div>
            <DashboardContainer>
                <NavContainer>
                    
                    <Navbar />
                </NavContainer>
            </DashboardContainer>

            <div>
         <div  className="block w-full overflow-x-auto  overflow-y-auto  px-4 h-[31rem] mb-10 md:h-fit   shadow rounded-lg  mt-4 ">
        <table  className="items-center  w-full rounded-md    border-collapse ">
          <thead >
            <tr >

            <th className=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
          S/N
        </th>

              <th className=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left  px-6 sm:px-0">
               {""}  Name
              </th>
              <th className=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                Course
              </th>
              <th className=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                Course
              </th>

              <th className=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                Points
              </th>




            </tr>
          </thead>

          {productsData.map((item, index) => (
            <tbody key={item.id} className=' h-[3rem]'>
              <tr className=' hover:cursor-pointer' >

              <td className="whitespace-nowrap lg:text-sm text-xs px-6 sm:px-0">
            <div className="flex space-x-3 items-center">
              
            <h1 className="font-semibold">{index + 1}</h1>
            </div>
          </td>

                <td className="whitespace-nowrap lg:text-sm   text-xs px-6 sm:px-0">
                  <div className='flex space-x-3 items-center '>
                    <img className='h-7 w-7 rounded-full' src={item.image} alt='' />
                    <div className='flex flex-col'>
                    <h1 className='font-semibold '> {item.name} </h1>
                    <p className='text-xs'> {item.location}</p>
                    </div>

                  </div>
                </td>
                <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                  <div>
                    <p className='text-[#C5C7CD]'> {item.course} </p>
                  </div>
                </td>

                <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                  <div>
                    <p className='text-[#C5C7CD]'> {item.courses} </p>
                  </div>
                </td>

                <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                  <div>
                    <p className='text-[#C5C7CD]'> {item.point} </p>
                  </div>
                </td>



              </tr>

            </tbody>
          ))}



        </table>
      </div>
   </div>
        </div>
  )
}

export default LeaderBoard
