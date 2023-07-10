import React from 'react';
import { DashboardContainer } from '../styles/DashboardContainer';
import { NavContainer } from '../styles/NavContainer';
import Navbar from '../components/Navbar';
import salesData from '../../src/Data/summary.json';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const Home = () => {
    const data = {

        datasets: [{
            labels: [
                'Red',
                'Blue',

            ],
            data: [3, 6],
            backgroundColor: ['yellow', 'purple'],
            borderColor: ['#2A6AFF', '#AAC3FF'],
            borderWidth: 0.5,
        }]
    }

    return (
        <div className='bg-black'>
            <DashboardContainer>
                <NavContainer>
                    <Navbar />
                </NavContainer>

                <div className='flex flex-col md:flex-row md:space-x-4 mt-4 2xl:justify-between'>
                    <div className='md:w-[65%]  bg-greyblack p-2  md:p-4 rounded-lg'>
                        <h1 className='text-white md:ml-4 mt-2 md:mt-0'>Today's Sales</h1>
                        <p className='text-greytext text-sm md:ml-4'>Sales Summary</p>

                        <div className='grid mt-4 md:mt-0 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-4 md:mb-0 md:gap-5 md:p-4'>
                            {salesData.map((item) => {
                                let textColor = '';

                                if (item.des.includes('+10%')) {
                                    textColor = 'text-yellow';
                                } else if (item.des.includes('+8%')) {
                                    textColor = 'text-green';
                                } else if (item.des.includes('+2%')) {
                                    textColor = 'text-purple';
                                } else if (item.des.includes('+3%')) {
                                    textColor = 'text-blue';
                                }

                                return (
                                    <div key={item.id} className='bg-black p-2 md:p-3 text-white rounded-lg'>
                                        <img className='h-6 2xl:h-7' src={item.image} alt={item.type} />
                                        <h1 className='text-lg mt-3 font-semibold'>{item.amount}</h1>
                                        <h1 className='text-sm text-offwhite'>{item.type}</h1>
                                        <p className={`text-xs font-thin ${textColor}`}>{item.des}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='mt-4 md:mt-0  h-full'>
                        <LineChart />
                    </div>
                </div>

                <div className='mt-4 flex flex-col md:flex-row  md:space-x-4 2xl:justify-between'>
                    <div className='md:w-[65%]  bg-greyblack p-2  md:p-4 rounded-lg'>
                        <h1 className='text-white font-bold'> Top 3 Products </h1>


                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 ">
                                <thead class="text-xs text-greytext uppercase ">
                                    <tr>
                                        <th scope="col" class=" py-3">
                                            #
                                        </th>

                                        <th scope="col" class=" py-3">
                                            Product name
                                        </th>
                                        <th scope="col" class=" py-3">
                                            Qty
                                        </th>
                                        <th scope="col" class=" py-3">
                                            Category
                                        </th>
                                        <th scope="col" class=" py-3">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class=" border-b  dark:border-gray-700">
                                        <th scope="row" class=" py-4 font-medium text-white whitespace-nowrap ">
                                            1
                                        </th>

                                        <th scope="row" class=" py-4 font-medium text-white whitespace-nowrap ">
                                            Laptop  bags
                                        </th>
                                        <td class=" py-4 text-white">
                                            1,908
                                        </td>
                                        <td class="py-4 text-white">
                                            Accessories
                                        </td>
                                        <td class=" py-4 text-white">
                                            $249
                                        </td>
                                    </tr>
                                    <tr class=" border-b  dark:border-gray-700">
                                        <th scope="row" class=" py-4 font-medium text-white whitespace-nowrap ">
                                            2
                                        </th>

                                        <th scope="row" class=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Microsoft Surface Pro
                                        </th>
                                        <td class=" py-4 text-white">
                                            1,689
                                        </td>
                                        <td class=" py-4 text-white">
                                            Laptop PC
                                        </td>
                                        <td class=" py-4 text-white">
                                            $1,909
                                        </td>
                                    </tr>
                                    <tr class=" ">
                                        <th scope="row" class=" py-4 font-medium text-white whitespace-nowrap ">
                                            3
                                        </th>

                                        <th scope="row" class=" py-4 font-medium  whitespace-nowrap dark:text-white">
                                            Magic Mouse 2
                                        </th>
                                        <td class="py-4 text-white">
                                            1,344
                                        </td>
                                        <td class=" py-4 text-white">
                                            Accessories
                                        </td>
                                        <td class=" py-4 text-white">
                                            $299
                                        </td>
                                    </tr>

                                    <tr class=" ">
                                        <th scope="row" class=" py-4 font-medium text-white whitespace-nowrap ">
                                            4
                                        </th>

                                        <th scope="row" class=" py-4 font-medium  whitespace-nowrap dark:text-white">
                                            Cloud
                                        </th>
                                        <td class="py-4 text-white">
                                            1,046
                                        </td>
                                        <td class=" py-4 text-white">
                                            Storage
                                        </td>
                                        <td class=" py-4 text-white">
                                            $2,169
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='mt-4 mb:mt-0'>
                        <BarChart />
                    </div>
                </div>


                <div>
                    <div className='md:w-[50%] w-full mx-auto lg:mx-0 bg-greyblack mt-4  p-4 rounded-lg'>
                        <div>
                            <h1> Earnings </h1>
                        </div>
                        <div className='relative  md:w-[18rem] md:h-[18rem] mx-auto'>
                            <Doughnut
                                data={data}
                                className=''
                            ></Doughnut>
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <h1 className='text-center text-white text-sm'> Earnings</h1>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

                
            </DashboardContainer>
        </div>
    );
};

export default Home;
