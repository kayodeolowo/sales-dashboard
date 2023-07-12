import React from 'react'
import { DashboardContainer } from '../styles/DashboardContainer'
import { NavContainer } from '../styles/NavContainer'
import Navbar from '../components/Navbar'
import customersData from '../Data/customers.json'

const LeaderBoard = () => {
  return (
    <div>
          
            <div className='transition duration-500 ease-in'>
      <DashboardContainer>
        <NavContainer>
          <Navbar />
        </NavContainer>

        <div>

        
          <div className="block w-full bg-greyblack overflow-x-auto overflow-y-auto px-4 h-[31rem] mb-10 md:h-fit shadow rounded-lg mt-4">
          

            <table className="items-center w-full rounded-md text-white border-collapse mb-10">
              <thead>
                <tr>
                  <th className="bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                    S/N
                  </th>
                  <th className="bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                    Name
                  </th>
                  <th className="bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                    Total Orders
                  </th>
                  <th className="bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                    Paid
                  </th>
                  <th className="bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                    Pending Payment
                  </th>
                </tr>
              </thead>

              <tbody>
              {customersData.map((item, index) => (
                  <tr key={item.id} className="h-[3rem] border-b border-greytext">
                    <td className="whitespace-nowrap lg:text-sm text-xs px-6 sm:px-0">
                      <div className="flex space-x-3 items-center">
                        <h1 className="font-semibold">{index + 1}</h1>
                      </div>
                    </td>
                 
                  <td className="whitespace-nowrap lg:text-sm text-xs px-6 sm:px-0">
                    <div className="flex space-x-3 items-center">
                      <div className="flex flex-col">
                        <h1 className="font-semibold">{item.name}</h1>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                    <div>
                      <p className="text-[#C5C7CD]">{item.Orders}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                    <div>
                      <p className="bg-[#044E54]  py-1 rounded-full text-white w-[4rem] text-xs text-center font-semibold">{item.Paid}</p>
                    </div>
                  </td>

                  <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                    <div>
                      <p className="bg-red-400  py-1 rounded-full text-white w-[4rem] text-xs text-center font-semibold">{item.debt}</p>
                    </div>
                  </td>
                 
                </tr>
                 
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardContainer>
    </div>

    
        </div>
  )
}

export default LeaderBoard
