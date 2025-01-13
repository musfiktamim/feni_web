import { createContext, useState } from "react";
import { BiSolidCylinder } from 'react-icons/bi'
import { CiDeliveryTruck, CiHospital1, CiReceipt } from 'react-icons/ci'
import { FaAmbulance } from 'react-icons/fa'
import { FaBus, FaFireExtinguisher, FaHospitalUser, FaHotel, FaSignsPost, FaTrainSubway, FaUserDoctor } from 'react-icons/fa6'
import { GiCottonFlower, GiPoliceCar, GiPoliceOfficerHead } from 'react-icons/gi'
import { IoCar, IoFastFood } from 'react-icons/io5'
import { MdBluetoothDrive, MdOutlineSpeakerPhone } from 'react-icons/md'
import mohanagar_godhuli from "../assets/images/mohanagar_godhuli.jpg"
import paharika_express from "../assets/images/paharika_express.jpg"
import mahanagar_express from "../assets/images/mahanagar_express.jpg"
import udayan_express from "../assets/images/udayan_express.jpg"
import meghna_express from "../assets/images/meghna_express.jpg"
import turna_express from "../assets/images/turna_express.jpg"
import bijoy_express from "../assets/images/bijoy_express.jpg"

const mainContext = createContext([])


function MainContextProvider({ children }) {

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

    const [train, setTrain] = useState([
        {
            timage: mohanagar_godhuli,
            trainNo: "703",
            name: "Mahanagar Godhuli",
            ofDay: "No",
            from: "Feni",
            departure: "16:35",
            to: "Dhaka",
            arrival: "21:10",
            trainType: 1
        },
        {
            timage: mohanagar_godhuli,
            trainNo: "704",
            name: "Mahanagar Provati",
            ofDay: "No",
            from: "Feni",
            departure: "12: 11",
            to: "Chittagong",
            arrival: "13: 50",
            trainType: 1
        },
        {
            timage: paharika_express,
            trainNo: "719",
            name: "Paharika Express",
            ofDay: "Monday",
            from: "Feni",
            departure: "10:36",
            to: "Sylhet",
            arrival: "17:50",
            trainType: 1
        },
        {
            timage: paharika_express,
            trainNo: "720",
            name: "Paharika Express",
            ofDay: "Saturday",
            from: "Feni",
            departure: "18:00",
            to: "Chittagong",
            arrival: "19:45",
            trainType: 1
        },
        {
            timage: mahanagar_express,
            trainNo: "721",
            name: "Mahanagar Express",
            ofDay: "Sunday",
            from: "Feni",
            departure: "14:05",
            to: "Dhaka",
            arrival: "19:00",
            trainType: 1
        },
        {
            timage: mahanagar_express,
            trainNo: "722",
            name: "Mahanagar Express",
            ofDay: "Sunday",
            from: "Feni",
            departure: "02:34",
            to: "Chittagong",
            arrival: "04:30",
            trainType: 1
        },
        {
            timage: udayan_express,
            trainNo: "723",
            name: "Udayan Express",
            ofDay: "Saturday",
            from: "Feni",
            departure: "23:20",
            to: "Sylhet",
            arrival: "06:20",
            trainType: 1
        },
        {
            timage: udayan_express,
            trainNo: "724",
            name: "Udayan Express",
            ofDay: "Sunday",
            from: "Feni",
            departure: "03:58",
            to: "Chittagong",
            arrival: "05:50",
            trainType: 1
        },
        {
            timage: meghna_express,
            trainNo: "729",
            name: "Meghna Express",
            ofDay: "No",
            from: "Feni",
            departure: "18:53",
            to: "Chandpur",
            arrival: "21:40",
            trainType: 1
        },
        {
            timage: meghna_express,
            trainNo: "730",
            name: "Meghna Express",
            ofDay: "No",
            from: "Feni",
            departure: "07:53",
            to: "Chittagong",
            arrival: "09:25",
            trainType: 1
        },
        {
            timage: turna_express,
            trainNo: "741",
            name: "Turna",
            ofDay: "No",
            from: "Feni",
            departure: "00:33",
            to: "Dhaka",
            arrival: "05:25",
            trainType: 1
        },
        {
            timage: turna_express,
            trainNo: "742",
            name: "Turna",
            ofDay: "No",
            from: "Feni",
            departure: "04:32",
            to: "Chittagong",
            arrival: "06:20",
            trainType: 1
        },
        {
            timage: bijoy_express,
            trainNo: "785",
            name: "Bijoy Express",
            ofDay: "Wednesday",
            from: "Feni",
            departure: "09:01",
            to: "Mymensingh",
            arrival: "15:45",
            trainType: 1
        },
        {
            timage: bijoy_express,
            trainNo: "786",
            name: "Bijoy Express",
            ofDay: "Tuesday",
            from: "Feni",
            departure: "03:00",
            to: "Chittagong",
            arrival: "04:50",
            trainType: 1
        },
        {
            trainNo: "1",
            name: "Dhaka Mail",
            ofDay: "No",
            from: "Feni",
            departure: "00:15",
            to: "Dhaka",
            arrival: "06:55",
            trainType: 2
        },
        {
            trainNo: "2",
            name: "Chittagong Mail",
            ofDay: "No",
            from: "Feni",
            departure: "05:25",
            to: "Chittagong",
            arrival: "07:25",
            trainType: 2
        },
        {
            trainNo: "3",
            name: "Karnafuli Express",
            ofDay: "No",
            from: "Feni",
            departure: "11:58",
            to: "Dhaka",
            arrival: "19:45",
            trainType: 2
        },
        {
            trainNo: "4",
            name: "Karnafuli Express",
            ofDay: "No",
            from: "Feni",
            departure: "15:50",
            to: "Chittagong",
            arrival: "18:00",
            trainType: 2
        },
        {
            trainNo: "13",
            name: "Jalalabad Express",
            ofDay: "No",
            from: "Feni",
            departure: "21:56",
            to: "Sylhet",
            arrival: "11:00",
            trainType: 2
        },
        {
            trainNo: "14",
            name: "Jalalabad Express",
            ofDay: "No",
            from: "Feni",
            departure: "09:43",
            to: "Chittagong",
            arrival: "12:10",
            trainType: 2
        },
        {
            trainNo: "29",
            name: "Sagorika Express",
            ofDay: "No",
            from: "Feni",
            departure: "09:39",
            to: "Chandpur",
            arrival: "13:00",
            trainType: 2
        },
        {
            trainNo: "30",
            name: "Sagorika Express",
            ofDay: "No",
            from: "Feni",
            departure: "17:23",
            to: "Chittagong",
            arrival: "19:25",
            trainType: 2
        },
        {
            trainNo: "37",
            name: "Mymensingh Express",
            ofDay: "No",
            from: "Feni",
            departure: "18:08",
            to: "B.B East",
            arrival: "09:20",
            trainType: 2
        },
        {
            trainNo: "38",
            name: "Mymensing Express",
            ofDay: "No",
            from: "Feni",
            departure: "17:41",
            to: "Chittagong",
            arrival: "21:05",
            trainType: 2
        },
        {
            trainNo: "67",
            name: "Chattala Express",
            ofDay: "Tuesday",
            from: "Feni",
            departure: "09:59",
            to: "Dhaka",
            arrival: "15:35",
            trainType: 2
        },
        {
            trainNo: "68",
            name: "Chattala Express",
            ofDay: "Tuesday",
            from: "Feni",
            departure: "19:03",
            to: "Chittagong",
            arrival: "20:50",
            trainType: 2
        },
        {
            trainNo: "79",
            name: "Laksam Comuter",
            ofDay: "Friday",
            from: "Feni",
            departure: "19:34",
            to: "Comilla",
            arrival: "21:05",
            trainType: 2
        },
        {
            trainNo: "80",
            name: "Laksam Comuter",
            ofDay: "Saturday",
            from: "Feni",
            departure: "06:53",
            to: "Chittagong",
            arrival: "08:50",
            trainType: 2
        }
    ])



    const values = {
        services,
        train,
    }

    return (
        <mainContext.Provider value={values}>
            {children}
        </mainContext.Provider>
    )
}
export { mainContext }

export default MainContextProvider