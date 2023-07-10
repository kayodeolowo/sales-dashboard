import React from 'react';
import { DashboardContainer } from '../styles/DashboardContainer';
import { NavContainer } from '../styles/NavContainer';
import Navbar from '../components/Navbar';
import salesData from '../../src/Data/summary.json';

const Home = () => {
  return (
    <div>
      <DashboardContainer>
        <NavContainer>
          <Navbar />
        </NavContainer>

        <div className='flex flex-col md:flex-row justify-between mt-4'>
          <div className='md:w-[65%] 2xl:w-[60%] bg-greyblack p-2  md:p-4 rounded-lg'>
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
                    <img className='h-6 md:h-8' src={item.image} alt={item.type} />
                    <h1 className='text-lg mt-3 font-semibold'>{item.amount}</h1>
                    <h1 className='text-sm text-offwhite'>{item.type}</h1>
                    <p className={`text-xs font-thin ${textColor}`}>{item.des}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='w-[27%]'></div>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default Home;
