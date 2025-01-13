import React from 'react'
import { NavLink } from 'react-router-dom'

function ServicesBoxes({ main, Icons }) {
    return (
        <NavLink to={`/${main.toLocaleLowerCase().replaceAll(" ", "")}`} className='md:w-[250px] md:px-1 px-2 w-[100px] h-[120px] flex-col group md:h-[150px] flex items-center justify-center rounded-md bg-gradient-to-bl from-green-400 to-green-600 md:hover:scale-105 md:transition md:duration-200 md:ease-in-out'>
            {Icons}
            <p className={`text-white overflow-clip text-center md:text-base text-xs relative overflow-x-hidden after:absolute after:contents-' ' after:-translate-x-full group-hover:after:translate-x-0 after:w-[100%] after:transition after:duration-500 after:h-[2px] after:bg-white after:bottom-0 after:left-0`}>
                {main}
            </p>
        </NavLink>
    )
}

export default ServicesBoxes