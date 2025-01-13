import React, { useContext, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { mainContext } from '../Context/Maincontext'
import TrainCart from '../components/TrainCart'

function TrainSchedule() {
    const { services, train } = useContext(mainContext)
    const [showCreate, setShowCreate] = useState(false)
    return (
        <div>
            <button onClick={() => setShowCreate(true)} className='w-10 h-10 border z-[1000] bg-white flex items-center justify-center rounded-full shadow-lg fixed bottom-5 right-5 border-gray-500 shadow-blue-200'>
                <BiPlus />
            </button>
            <div id='train' className='flex flex-wrap gap-2 justify-center' >
                {
                    train.map((trai, index) => <TrainCart key={index} trai={trai} />)
                }

            </div>
        </div>
    )
}

export default TrainSchedule