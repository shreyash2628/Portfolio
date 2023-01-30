import React from 'react'
import icon from '../Assets/proIcon.png'
import LightSpeed from 'react-reveal/LightSpeed';

function AboutMe() {
    const aboutMeString="Hello! My name is Shreyash Pawar.My interest is in web development ,started back in 2022,when I was graduated from my college,decided to explore web development, before that i was in android development."
    const secondPara="Currently,I'm exploring backend development through nodeJs"
    const thirdPara="Fast-forward to today,I'm having the privilege of working in one of the well established company UST as a full-stack developer."
  return (
    <div id="aboutSection" className='w-full px-2  h-fit bg-black flex flex-col sm:p-12 sm:mb-8 sm:h-fit sm:pl-12'>

          <div className='flex  text-white flex-row h-fit w-fit m-4 pt-4'>
                <img className="w-12 h-10" src={icon}  />
                <h1 className="w-full  text-4xl font-bold mx-4">About Me </h1>
            </div>  

            <div className="grid grid-cols-2   h-fit w-full">
                    <div className=" h-screen pl-4 pt-8 sm:pt-1">
                        <p className="text-white text-3xl p-4 sm:text-2xl">{aboutMeString}</p>
                        <p className="text-white text-3xl p-4 sm:text-2xl">{secondPara}</p>
                        <p className="text-white text-3xl p-4 sm:text-2xl">{thirdPara}</p>



                    </div>
                    
                    <div className=" h-fit flex flex-col  lg:p-12 ">
                        {/* <div>
                            <img src={icon} className="h-80 pt-4 px-12  w-full m-4 sm:h-60 sm:pt-0  sm:m-0 lg:px-48 lg:py-4 lg:w-auto "/>
                        </div> */}

                        <div className="h-full  w-full m-4 sm:m-0" >
                        <LightSpeed right>

                            <h1 className="text-white pt-4 px-2 text-3xl mb-4 "> Here are few technologies I've been working on recently </h1>
                            </LightSpeed>

                            <LightSpeed right>

                             <ul className='text-yellow-500 italic px-4 text-2xl'>
                                <li>* Javascript (ES6+)</li>
                                <li>* React</li>
                                <li>* Tailwind Css</li>
                                <li>* Typescript</li>
                                <li>* Material Ui</li>

                             </ul>
                            </LightSpeed>
                        </div>
                        
                    </div>
            </div>
    </div>
  )
}

export default AboutMe