import React from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ForwardTwoToneIcon from '@mui/icons-material/ForwardTwoTone';
// import roboto from "@fontsource/roboto";
import mortarboard from '../Assets/icons/mortarboard.png'
import grad from '../Assets/icons/graduation.png'


function Education() {
  return (
    <div>
    {/* <div className="bg-background w-full h-96 p-24"> */}

      <div className='p-24 h-full  w-full'>

          <div className="flex flex-col">
            
            <div className="flex flex-row justify-start">
              <img src={grad} className="h-16 mx-4 "  />
            <h1 className='text-white justify-center text-6xl  '>
              Education Details
            </h1>
                
            </div>

            <div className="flex flex-col p-8">
              <h1 className="bold italic text-2xl text-white ">
                  -> 2022 Bachelor Of Engineering
              </h1>
              <h1 className="bold italic text-lg text-white ml-4 mt-2 ">
                  PCET's NMIET , Pune University
              </h1>
              <h1 className="text-yellow-500 ml-4 italic bold ">8.84 CGPA</h1>
            </div>

            <div className="flex flex-col p-8">
              <h1 className="bold italic text-2xl text-white ">
                  -> 2018 HSC Board (CBSE)
              </h1>
              <h1 className="bold italic text-lg text-white ml-4 mt-2 ">
                  Kendriya Vidyalaya No 1 Dehuroad, Pune
              </h1>
              <h1 className="text-yellow-500 ml-4 italic bold ">8.84 CGPA</h1>
            </div>

            <div className="flex flex-col p-8">
              <h1 className="bold italic text-2xl text-white ">
                  -> 2016 SSC Board (CBSE)
              </h1>
              <h1 className="bold italic text-lg text-white ml-4 mt-2 ">
                  Kendriya Vidyalaya No 1 Dehuroad, Pune
              </h1>
              <h1 className="text-yellow-500 ml-4 italic bold ">8.84 CGPA</h1>
            </div>

            
          </div>
      </div>


    </div>
  )
}

export default Education