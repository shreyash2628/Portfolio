import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './style'
import Profile from './Components/Profile';
import Education from './Components/Education';
import Technology from './Components/MySkills';
import Project from './Components/Project';
import ContactMe from './Components/ContactMe'
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div className="bg-black  h-full w-fit  flex flex-col">



     
    <Navbar />

    <Profile/>
    <Technology/>

    <Project/>
    <AboutMe/>
    <Education/>
    <ContactMe/>



    
   

    
    </div>
  );
}

export default App;
