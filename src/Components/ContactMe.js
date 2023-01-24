import React from 'react'
import {SocialMediaData} from '../Data/ContactMeData'
function ContactMe() {
  return (
    <div>
        <div className="p-24 flex flex-col ">

            <h1 className="text-white text-4xl">Contact Me</h1>
          
                <div className="flex flex-row mt-4">

            {
                SocialMediaData.map((data)=>(
                    <div className="flex flex-col  h-12 mx-3  w-12 ">
                        <img className="hover:animate-bounce" src={data.image}  />
                        {/* <h1 className='text-black'>{data.name}</h1> */}
                    </div>
                ))

            }
                            </div>

        </div>
    </div>
  )
}

export default ContactMe