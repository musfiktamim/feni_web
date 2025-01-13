import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { mainContext } from '../Context/Maincontext'
import TrainCart from '../components/TrainCart'
import ServicesBoxes from '../Element/ServicesBoxes'

function Services() {
    const { services, train } = useContext(mainContext)
    // console.log(Number(`${trai.departure}`.split(":")[0]) > 12 ? Number(`${trai.departure}`.split(":")[0]) - 12 : Number(`${trai.departure}`.split(":")[0]))
    const [selectedValues, setSelectedVa] = useState("train")
    const [seeMore, setSeeMore] = useState(false)
    function timeSpliter(str) {
        const strarr = str.split(":")
        if (Number(strarr[0]) > 12) {
            strarr[0] = Number(strarr[0]) - 12;
        } else {
            strarr[0] = Number(strarr[0]);
        }
    }
    useEffect(() => {
        // selectedValues
    }, [selectedValues])
    return (
        <div className='md:px-5 py-3 w-full'>
            <div className={`w-full h-auto border-b-2 ${seeMore ? "pb-5" : "pb-0"} flex relative flex-col justify-center items-center border-pink-600`}>
                <div className={`w-full justify-center ${seeMore ? "h-auto" : "h-[350px]"} transition duration-1000 ease-in-out overflow-y-hidden flex flex-wrap gap-3`}>
                    {
                        services.map(({ main, Icons }, index) => <ServicesBoxes key={index} main={main} Icons={Icons} />)
                    }
                </div>
                <button onClick={() => setSeeMore(!seeMore)} className='absolute px-2 py-1 -bottom-4 bg-pink-600 text-white rounded-lg'>See More</button>
            </div>
            <div className='w-full gap-y-2'>
                <div className='w-full flex justify-end'>
                    <select value={selectedValues} onChange={(e) => setSelectedVa(e.target.value)}>
                        {
                            services.map((item) => <option value={item.main.split(" ")[0].toLocaleLowerCase()}>{item.main}</option>)
                        }
                    </select>
                </div>
                <div>
                    <div className='w-full flex md:pr-2 justify-end items-center'>
                        <NavLink state={`${'Train Schedule'}`} to={'/trainschedule'} className={`text-blue-500`}>
                            See More
                        </NavLink>
                    </div>
                    <div id='train' className='flex flex-wrap gap-2' >
                        {
                            train.slice(0, 10).map((trai, index) => <TrainCart key={index} trai={trai} />)
                        }

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div >
    )
}

export default Services