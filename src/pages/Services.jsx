import React, { useState } from 'react'
import { BiSolidCylinder } from 'react-icons/bi'
import { CiDeliveryTruck, CiHospital1, CiReceipt } from 'react-icons/ci'
import { FaAmbulance } from 'react-icons/fa'
import { FaBus, FaFireExtinguisher, FaHospitalUser, FaHotel, FaSignsPost, FaTrainSubway, FaUserDoctor } from 'react-icons/fa6'
import { GiCottonFlower, GiPoliceCar, GiPoliceOfficerHead } from 'react-icons/gi'
import { IoCar, IoFastFood } from 'react-icons/io5'
import { MdBluetoothDrive, MdOutlineSpeakerPhone } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

function Services() {
    const [services, setServices] = useState([
        {
            Icons: <FaBus size={"3rem"} className='group-hover:animate-pulse' color='white' />,
            main: "Bus schedule",
        },
        {
            Icons: <FaTrainSubway className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Train schedule"
        },
        {
            Icons: <FaUserDoctor className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Specialist doctor",
        },

        {
            Icons: <FaAmbulance className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Ambulance Service",
        },
        {
            Icons: <GiPoliceCar className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "District Police Feni Phone Number",
        },
        {
            Icons: <MdOutlineSpeakerPhone className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Important phone number",
        },
        {
            Icons: <FaFireExtinguisher className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Fire Service and Civil Defense Feni",
        },
        {
            Icons: <MdBluetoothDrive className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Driving Training Center Information",
        },
        {
            Icons: <BiSolidCylinder className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Oxygen Service",
        },
        {
            Icons: <CiHospital1 className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Hospital",
        },
        {
            Icons: <FaHospitalUser className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Diagnostic Center",
        },
        {
            main: "Physiotherapy Center",
        },
        {
            Icons: <FaHotel className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Hotel and Restaurant",
        },
        {
            Icons: <GiCottonFlower className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Nurseries",
        },
        {
            Icons: <FaSignsPost className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "All post codee of Feni district",
        },
        {
            Icons: <CiDeliveryTruck className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Courier Service in Feni",
        },
        {
            Icons: <IoFastFood className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "List of propular foods in Feni",
        },
        {
            Icons: <IoCar className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Car Rental Service",
        },
        {
            Icons: <GiPoliceOfficerHead className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Municipal Services",
        },
        {
            Icons: <CiReceipt className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Job Circular in Feni",
        },
        {
            Icons: <CiReceipt className='group-hover:animate-pulse' size={"3rem"} color='white' />,
            main: "Consumer Rights Feni",
        }
    ])

    return (
        <div className='px-5 py-3 w-full'>
            <div className='w-full flex flex-wrap gap-3'>
                {
                    services.map(({ main, Icons }, index) => <NavLink to={`${main.toLocaleLowerCase().replaceAll(" ", "")}`} key={index} className='md:w-[250px] md:px-1 px-2 w-[100px] h-[120px] flex-col group md:h-[150px] flex items-center justify-center rounded-md bg-gradient-to-bl from-green-400 to-green-600'>
                        {Icons}
                        <p className={`text-white overflow-clip text-center md:text-base text-xs relative overflow-x-hidden after:absolute after:contents-' ' after:-translate-x-full group-hover:after:translate-x-0 after:w-[100%] after:transition after:duration-500 after:h-[2px] after:bg-white after:bottom-0 after:left-0`}>
                            {main}
                        </p>
                    </NavLink>)
                }
            </div>
        </div>
    )
}

export default Services