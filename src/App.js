import './index.css';
import {  Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import LeaderBoard from './Pages/LeaderBoard';
import Orders from './Pages/Orders';
import  Products from './Pages/Products'
import SalesReport from './Pages/SalesReport';
import Settings from './Pages/Settings';



function App() {
  return (
        <div className='lg:flex bg-black'>
                 <Sidebar/>

                <div className='w-full'> 
                    <Routes>
                    <Route path="/" element={<Home/>} /> 
                        <Route path="/dashboard" element={<Home/>} /> 
                        <Route path="/orders" element={<Orders/>} /> 
                        <Route path="/products" element={<Products/>} /> 
                        <Route path="/sales-report" element={<SalesReport/>} /> 
                        <Route path="/leaderboard" element={<LeaderBoard/>} /> 
                        <Route path="/settings" element={<Settings/>} /> 
                        
                        
 
                          
                    </Routes>
                </div>
          
          </div>
    
    );
}

export default App;