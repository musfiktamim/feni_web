import React from 'react'
import { NavLink } from 'react-router-dom'

function TourismCart({ items }) {
    return (
        <NavLink to={"/"} className='relative flex group overflow-hidden my-[3px] mx-[1px]' >
            <img src={items} className='w-full -z-10 h-full' alt="" />

            <div className='w-full flex items-center px-3 justify-between translate-y-[100%] h-[50px] overflow-hidden group-hover:translate-y-0 transition duration-300 ease-in-out absolute left-0 bottom-0 z-10 bg-gradient-to-t from-black to-transparent'>
                <h1 className='text-white text-lg font-acme'>Bijoy Singh dighi</h1>
                <NavLink to={`${"bijoysinghdoghi"}`} className='text-white py-1 hover:text-green-400 transition duration-300 hover:border-green-400 border border-white rounded-md px-2'>
                    Details
                </NavLink>
            </div>
        </NavLink>
    )
}

export default TourismCart