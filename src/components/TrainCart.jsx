import React, { useEffect } from 'react'
import train1 from "../assets/images/train1.jpg"

function TrainCart({ trai }) {
    function timeSpliter(str) {
        const strarr = str.split(":")
        if (Number(strarr[0]) > 12) {
            strarr[0] = (Number(strarr[0]) - 12).toString();
            strarr.push("PM")
        } else {
            strarr[0] = (Number(strarr[0])).toString();
            strarr.push("AM")
        }
        return (strarr.toString().replace(",", ":").replace(",", " "));
    }
    return (
        <div className='md:w-[320px] gap-x-2 flex overflow-hidden group relative w-full h-[180px] py-1 border border-black md:border-none md:shadow-2xl shadow-blue-500 md:h-[420px]'>
            <img src={trai.timage ? trai.timage : train1} className='md:w-full h-full w-[120px] ' alt="" />
            <div className='w-auto top-0 md:flex hidden bg-white left-0 rounded-r-md group-hover:translate-x-[-100%] translate-x-0 transition duration-300 shadow-md mt-2 py-2 px-2 absolute'>
                {trai.trainType == 1 ? "Intercity Trains From Feni" : trai.trainType == 2 ? "Mail/Express Trains From Feni" : null}
            </div>
            <div className='w-full flex relative flex-col md:hidden gap-y-1 justify-center h-full'>
                <h1 className='text-sm'> Name: {trai.name}</h1>
                <h1 className='text-sm'>Off Day: {trai.ofDay}</h1>
                <h1 className='text-sm'>From: {trai.from}</h1>
                <h1 className='text-sm'>Departure: {timeSpliter(trai.departure)}</h1>
                <h1 className='text-sm'>To: {trai.to}</h1>
                <h1 className='text-sm'>Arrival: {timeSpliter(trai.arrival)}</h1>
                <div className='absolute top-0 text-xs right-0'>
                    {trai.trainType == 1 ? "Intercity Trains From Feni" : trai.trainType == 2 ? "Mail/Express Trains From Feni" : null}
                </div>
                <div className='absolute flex gap-x-2 bottom-0 text-xs right-0'>
                    <h1>
                        {trai.from} to {trai.to}
                    </h1>
                    <h1>
                        {timeSpliter(trai.departure)}
                    </h1>
                </div>
            </div>
            <div className='w-full md:flex h-10 hidden justify-between items-center translate-y-0 group-hover:translate-y-full duration-300 transition px-2 bg-white absolute bottom-0 left-0'>
                <h1>
                    {trai.from} to {trai.to}
                </h1>
                <h1>
                    {timeSpliter(trai.departure)}
                </h1>
            </div>
            <div className='w-[100%] md:flex hidden flex-col justify-end h-[100%] z-10 left-0 bottom-0 translate-y-full group-hover:translate-y-0 px-1 py-2 transition duration-300 bg-gradient-to-b  to-white from-transparent absolute'>
                <h1 alt={"name"} className='text-lg flex font-serif'>
                    <p>Name</p>: {trai.name}
                </h1>
                <h1 alt={"ofday"} className='text-lg flex font-serif'>
                    <p>Off Day</p>: {trai.ofDay}
                </h1>
                <h1 alt={"from"} className='text-lg flex font-serif'>
                    <p>From</p>: {trai.from}
                </h1>
                <h1 alt={"departure"} className='text-lg flex font-serif'>
                    <p>Departure</p>: {timeSpliter(trai.departure)}
                </h1>
                <h1 alt={"departure"} className='text-lg flex font-serif'>
                    <p>To</p>: {trai.to}
                </h1>
                <h1 alt={"arrival"} className='text-lg flex font-serif'>
                    <p>Arrival</p>: {timeSpliter(trai.arrival)}
                </h1>
                <div className='flex w-full justify-between items-center'>
                    <h1>{trai.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default TrainCart