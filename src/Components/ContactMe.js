import React from "react";
import { SocialMediaData } from "../Data/ContactMeData";
import Slide from 'react-reveal/Slide';
import RubberBand from 'react-reveal/RubberBand';
import contactIcon from "../Assets/icons/contact.png";
import LightSpeed from 'react-reveal/LightSpeed';

function ContactMe() {
  return (
    <div>
      <div id="ContactSection" className="sm:p-24 flex flex-col  ">
        <Slide left>
        {/* <div className="flex flex-row justify-start">
          <img src={contactIcon} className="h-11 ml-12 mr-3 " />
          <h1 className="text-white justify-center text-4xl mb-1 ">Contact Me</h1>
        </div> */}
        </Slide >
        <LightSpeed left>

        <div className="flex flex-row mt-4  ml-6 pl-4 w-fit p-2">
          {SocialMediaData.map((data) => (
            <div className="flex flex-col  h-5  w-10 mx-3 ">
              <a href={data.link} target="_blank">
                <img className="hover:animate-bounce" src={data.image} />
              </a>
              {/* <h1 className='text-black'>{data.name}</h1> */}
            </div>
          ))}
        </div>

        </LightSpeed>
        <RubberBand>
        <h4 className="text-green-600 mt-8  text-start mx-14 md:text-center text-2xl italic bold  pb-8 ">
         Build from scratch with 💚 - Shreyash Pawar
        </h4>
        </RubberBand>
      </div>
    </div>
  );
}

export default ContactMe;
