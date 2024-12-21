import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import { IoSearchOutline } from 'react-icons/io5'
import NavsLinksing from '../Element/NavsLinksing'
// import NavDrop1Link from '../Element/NavDrop1Link.d'

function Nav() {
    const [searchShow, setSearchShow] = useState(false)

    const [LinkData, setLinkData] = useState([

        {
            main: "Home"
        },
        {
            main: "Services",
            child: [
                {
                    main: "Bus schedule",
                },
                {
                    main: "Train schedule"
                },
                {
                    main: "Specialist doctor",
                    child: [
                        {
                            main: "Medicine specialist"
                        },
                        {
                            main: "Cardiologist",
                        },
                        {
                            main: "Neurologist",
                        },
                        {
                            main: "Onchologist",
                        },
                        {
                            main: "Gestrology doctor",
                        },
                        {
                            main: "Ears, Nose, Throat (ENT) Specialist",
                        },
                        {
                            main: "Liver digestive system and medicine specialist",
                        },
                        {
                            main: "Dermitologist",
                        },
                        {
                            main: "Surgery Specialist",
                        },
                        {
                            main: "Rheumatology-Pain specialist",
                        },
                        {
                            main: "Pediatrician",
                        },
                        {
                            main: "Orthopedics Specialist and Sergeon",
                        },
                        {
                            main: "Psychiatrist brain and Neurologist",
                        },
                        {
                            main: "Chest Disease Asthma and TB specialist",
                        },
                        {
                            main: "Gynecologist",
                        },
                        {
                            main: "Opthalmologist",
                        },
                        {
                            main: "Hormone Specialist",
                        },
                        {
                            main: "Dentist"
                        }
                    ]
                },
                {
                    main: "Ambulance Service",
                },
                {
                    main: "District Police Feni Phone Number",
                },
                {
                    main: "Important phone number",
                },
                {
                    main: "Fire Service and Civil Defense Feni",
                },
                {
                    main: "Driving Training Center Information",
                },
                {
                    main: "Oxygen Service",
                },
                {
                    main: "Hospital",
                },
                {
                    main: "Diagnostic Center",
                },
                {
                    main: "Physiotherapy Center",
                },
                {
                    main: "Hotel and Restaurant",
                },
                {
                    main: "Nurseries",
                },
                {
                    main: "All post codee of Feni district",
                },
                {
                    main: "Courier Service in Feni",
                },
                {
                    main: "List of propular foods in Feni",
                },
                {
                    main: "Car Rental Service",
                },
                {
                    main: "Municipal Services",
                },
                {
                    main: "Job Circular in Feni",
                },
                {
                    main: "Consumer Rights Feni",
                }

            ]
        },
        {
            main: "Tourism",
            child: [
                {
                    main: "Travel guide feni"
                },
                {
                    main: "Feni Sadar"
                },
                {
                    main: "Rajajir Dhigi"
                },
                {
                    main: "Bijoy Singh Dighi"
                },
            ]
        }

    ])


    return (
        <div className='flex w-full fixed top-0 items-center justify-between h-14 md:px-6 bg-white shadow-md shadow-slate-400'>
            <NavLink to={"/"}>
                <img src={logo} className='h-full' alt='logo' />
            </NavLink>

            <div className='flex items-center justify-center h-full'>
                <div className='flex items-center  gap-x-2 justify-center'>
                    {LinkData.map((data, index) => <NavsLinksing data={data} key={index} />)}
                </div>
                <p className='h-1/2 bg-gray-200 mx-3 w-[2px]'></p>
                <div className='h-full flex items-center relative'>
                    <button onClick={() => setSearchShow(!searchShow)}>
                        <IoSearchOutline color='gray' />
                    </button>
                    <div className={`flex ${searchShow ? "translate-y-0 shadow-md shadow-gray-400 " : "h-0 translate-y-[-10px]"} transition duration-300 ease-in-out overflow-y-hidden bg-white z-10 border-1 right-0 top-[100%] absolute`}>
                        <input type="text" className='h-8 text-sm pl-1 outline-none border' />
                        <button className='px-3'>
                            <IoSearchOutline />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav