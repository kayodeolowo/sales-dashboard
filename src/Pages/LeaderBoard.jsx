import React from 'react'
import { DashboardContainer } from '../styles/DashboardContainer'
import { NavContainer } from '../styles/NavContainer'
import Navbar from '../components/Navbar'

const LeaderBoard = () => {
  return (
    <div>
            <DashboardContainer>
                <NavContainer>
                    <h1 className='text-white'> Leaderboard </h1>
                    <Navbar />
                </NavContainer>
            </DashboardContainer>
        </div>
  )
}

export default LeaderBoard
