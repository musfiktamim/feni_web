import React from 'react'

function Modal({ children, show, setShow }) {
    return (
        show && <div>
            <div onClick={() => setShow(false)} className='w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  fixed bg-black opacity-55'>
            </div>
            {children}
        </div>
    )
}

export default Modal