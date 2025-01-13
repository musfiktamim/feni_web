import React, { useContext, useState } from 'react'
import { mainContext } from '../Context/Maincontext'
import ServicesBoxes from '../Element/ServicesBoxes'

function Home() {
  const { services, train } = useContext(mainContext)
  const [seeMore, setSeeMore] = useState(false)
  return (
    <div className='w-full h-[200vh]'>
      <div className={` ${seeMore ? "h-auto" : "h-[350px]"} transition duration-1000 ease-in-out relative mt-2 flex justify-center border-pink-500 w-full border-b`}>
        <div className='w-full h-full transition duration-1000 ease-in-out flex flex-wrap gap-3 justify-center overflow-y-hidden'>
          {
            services.map(({ main, Icons }, index) => <ServicesBoxes key={index} main={main} Icons={Icons} />)
          }
        </div>
        <button onClick={() => setSeeMore(!seeMore)} className='absolute -bottom-4 bg-pink-600 text-white px-2 py-1 rounded-lg'>See More</button>
      </div>
    </div>
  )
}

export default Home