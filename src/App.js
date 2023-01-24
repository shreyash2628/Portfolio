import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import styles from './style'
import Profile from './Components/Profile';
import Education from './Components/Education';
import Technology from './Components/Technology';
import Project from './Components/Project';
import ContactMe from './Components/ContactMe'

function App() {
  return (
    <div className="bg-background h-full ">

<BrowserRouter>
        {/* <Navbar /> */}

        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          {/* <Route path="/employeeDashboard" element={<EmployeeDashboard />} />  */}
        
        </Routes>
      </BrowserRouter>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Profile/>
    <Technology/>

    <Project/>
    <Education/>
    <ContactMe/>



    
   

    
    </div>
  );
}

export default App;
