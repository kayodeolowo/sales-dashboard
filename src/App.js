import './index.css';
import {  Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import LeaderBoard from './Pages/LeaderBoard';



function App() {
  return (
        <div className='lg:flex'>
                 <Sidebar/>

                <div className='w-full'> 
                    <Routes>
                        <Route path="/dashboard" element={<Home/>} /> 
                        <Route path="/leaderboard" element={<LeaderBoard/>} /> 
                        
 
                          
                    </Routes>
                </div>
          
          </div>
    
    );
}

export default App;