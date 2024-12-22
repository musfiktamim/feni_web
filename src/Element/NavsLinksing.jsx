import React, { useState } from 'react'
import { BsSortDown } from 'react-icons/bs'
import { FaSortDown } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

function NavsLinksing({ data }) {
    const [show, setShow] = useState(false)
    return (
        <NavLink onMouseLeave={() => setShow(false)} onMouseEnter={() => setShow(true)} to={`/${data.main.toLowerCase().replace(" ", "")}`} className='text-sm relative w-full h-full flex'>
            {data.main}
            {
                data.child && <FaSortDown />
            }

            {
                show && data.child && <div className={`absolute top-[90%] w-[180px] right-0 ${show ? "shadow-md shadow-slate-400" : null} pl-1 py-1 text-sm bg-white`}>
                    {data.child && show && data.child.map((item, index) => <NavsSho1 key={index} data={item} />)}
                </div>
            }
        </NavLink>
    )
}

function NavsSho1({ data }) {
    const [show, setShow] = useState(false)
    return (
        <NavLink to={`/${data.main.toLowerCase().replace(" ", "")}`} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className={`py-1 border-t border-b w-full border-gray-300 px-1 relative bg-white gap-1 text-sm flex`}>
            {data.main}
            {data.child && <FaSortDown />}
            {
                data.child && show && <div className='w-[100%]  absolute right-full shadow-lg shadow-gray-300'>
                    {
                        data.child.map((item, index) => <NavsSho1 data={item} key={index} />)
                    }
                </div>
            }
        </NavLink >
    )
}

export default NavsLinksing