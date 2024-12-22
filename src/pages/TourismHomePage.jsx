import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import image1 from "../assets/images/bijoysingh1.jpg"
import image2 from "../assets/images/bijoysingho2.jpeg"
import image3 from "../assets/images/bijoysingho3.jpeg"
import image4 from "../assets/images/bijoysingho4.jpeg"
import TourismCart from '../components/TourismCart'

function TourismHomePage() {
    const { pathname } = useLocation()
    const [images, setImages] = useState([image1, image2, image3, image4])
    return (
        <div className=' md:w-[95%] m-auto w-full'>
            <div className='w-full sticky top-14 bg-transparent mt-1 overflow-clip'>
                <h1 className='font-serif text-gray-600'>{pathname.replace("/", "")}</h1>
            </div>
            <div className='columns-sm'  >
                {
                    images.map((image, index) => <TourismCart key={index} items={image} />)
                }
            </div>
        </div>
    )
}

export default TourismHomePage