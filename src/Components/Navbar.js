import dw from '../Assets/download.png';
import { useState, useEffect } from "react";
import {
 
  Typography,
  
} from "@material-tailwind/react";
import Avatar from '@mui/material/Avatar';
import pic from '../Assets/proPic.png'
import resume from '../Resume/resume.pdf'


export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Projects
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About Me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contacts
        </a>
      </Typography>
    </ul>
  );


  const downloadResume=()=>{
     

            fetch('Shreyash_Resume.pdf').then(response => {
              response.blob().then(blob => {
                  // Creating new object of PDF file
                  const fileURL = window.URL.createObjectURL(blob);
                  // Setting various property values
                  let alink = document.createElement('a');
                  alink.href = fileURL;
                  alink.download = 'Shreyash_Resume.pdf';
                  alink.click();
                }).catch((err)=>{
                  console.log("err msg"+err)
                })
              })

  }



  return (
    <div className="   bg-background   ">
      <div  className="bg-background h-12 flex w-screen sm:flex sm:flex-row  sm:w-screen w-screen flex flex-row  ">
      <div className=" mt-1 ml-4 p-2">
        <Avatar alt="Remy Sharp" src={pic} />

        </div>
        <h1 className=" underline p-2 sm:px-1 sm:text-4xl text-2xl px-2 font-bold  underline p-2 text-yellow-400 font-bold ">
            MyPortfolio
        </h1>
        


        <div id="btnsContainer" className="  h-12   w-[780px] sm:w-[1050px] md:w-[1050px] lg:w-[1550px] sm:flex sm:flex-row ml-52 sm:ml-0 text-xl sm:justify-end sm:px-2  sm:w-screen  sm:absolute   flex flex-row justify-end w-fit  absolute  ">

              <a href="#ProjectSection">
                <button  className="sm:text-white  sm:mr-1 sm:mt-1 sm:mx-3  text-black hover:underline mr-2">
                  Project
                </button>
                </a>

                <a href="#aboutSection">
                <button className="sm:text-white sm:mr-1 sm:mt-1 sm:mx-3 text-black mr-2 hover:underline">
                  About
                </button>
                </a>

                <a href="#ContactSection">
                <button className="sm:text-white sm:mr-1 sm:mx-3 sm:mt-1 text-black mr-2 hover:underline">
                  Contact
                </button>

                </a>

                  <a href={resume} target="_blank">        
                <div className='flex flex-row' onClick={()=>downloadResume()}>
                <button className="sm:text-white sm:mx-3 pr-10 sm:mt-1 text-white mt-1 mr-6 hover:underline  " >
                  MyResume 
                </button>
                  <img src={dw} className='absolute m-1 sm:m-1 sm:px-2  right-7 sm:pr-1 sm:pt-1 h-6 px-2'  />
                </div>

                </a>

        </div>
        {/* <div className='border sm:w-screen sm:bg-black'>

        </div> */}


      </div>
    </div>
  );
}
