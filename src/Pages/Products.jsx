import React, { useState } from 'react';
import { DashboardContainer } from '../styles/DashboardContainer';
import { NavContainer } from '../styles/NavContainer';
import Navbar from '../components/Navbar';
import productsData from '../Data/products.json';

const Products = () => {
  const [filter, setFilter] = useState('All');

  // Filter and sort the products based on the selected category
  const filteredProducts = productsData.filter((item) => {
    if (filter === 'All') {
      return true;
    }
    return item.category === filter;
  }).sort((a, b) => a.name.localeCompare(b.name));

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <DashboardContainer>
        <NavContainer>
          <Navbar />
        </NavContainer>

        <div>
          <div className="block w-full bg-greyblack overflow-x-auto overflow-y-auto px-4 h-[31rem] mb-10 md:h-fit shadow rounded-lg mt-4">
            <div className="mb-4 mt-4 flex justify-end ">
              {/* <label htmlFor="filter" className="mr-2 text-white bg-inherit">
                Sort
              </label> */}
              <select
                id="filter"
                className="px-1 py-0.5 rounded-md text-white bg-inherit border border-textgrey"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="All">All</option>
                <option value="Accessories">Accessories</option>
                <option value="Laptop">Laptop</option>
              </select>
            </div>

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
                    Price
                  </th>
                  <th className="bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                    Category
                  </th>
                  <th className="bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                    Availability
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((item, index) => (
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
                        <p className="text-[#C5C7CD]">{item.price}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                      <div>
                        <p className="text-[#C5C7CD]">{item.category}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                      <div>
                        <p
                          className={`px-1 py-1 rounded-full text-white w-[5rem] text-xs text-center font-semibold ${
                            item.Availability === 'In-Stock'
                              ? 'bg-[#044E54]'
                              : 'bg-red-400'
                          }`}
                        >
                          {item.Availability}
                        </p>
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
  );
};

export default Products;
