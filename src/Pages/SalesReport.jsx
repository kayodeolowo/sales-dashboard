import React from 'react'
import { DashboardContainer } from '../styles/DashboardContainer'
import { NavContainer } from '../styles/NavContainer'
import Navbar from '../components/Navbar'

const SalesReport = () => {
  return (
    <div>
            <DashboardContainer>
                <NavContainer>
                   
                    <Navbar />
                </NavContainer>
            </DashboardContainer>
        </div>
  )
}

export default SalesReport
