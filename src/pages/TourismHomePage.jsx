import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import image1 from "../assets/images/bijoysingh1.jpg"
import image2 from "../assets/images/bijoysingho2.jpeg"
import image3 from "../assets/images/bijoysingho3.jpeg"
import image4 from "../assets/images/bijoysingho4.jpeg"
import TourismCart from '../components/TourismCart'
import { BiCross, BiPlus } from 'react-icons/bi'
import Modal from '../Element/Modal'
import { CgCross } from 'react-icons/cg'
import { FaCross } from 'react-icons/fa'
import { GiCrossMark } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { AiFillFileAdd } from 'react-icons/ai'
import { BsFilesAlt } from 'react-icons/bs'


function TourismHomePage() {
    const { pathname } = useLocation()
    const [images, setImages] = useState([image1, image2, image3, image4])
    const [showCreate, setShowCreate] = useState(false);
    const [textInpu, setTextInpu] = useState({ title: "", location: "", naming: "", description: "" })
    const [inImage, setInImage] = useState([])

    console.log(textInpu)

    function handleChange(e) {
        setTextInpu(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleSub(e) {
        e.preventDefault()
    }
    return (
        <div className=' md:w-[95%] m-auto w-full relative'>

            <div className='w-full sticky top-14 bg-transparent mt-1 overflow-clip'>
                <h1 className='font-serif text-gray-600'>{pathname.replace("/", "")}</h1>
            </div>
            <div className='columns-sm'  >
                {
                    images.map((image, index) => <TourismCart key={index} items={image} />)
                }
            </div>
            <button onClick={() => setShowCreate(true)} className='w-10 h-10 border flex items-center justify-center rounded-full shadow-lg fixed bottom-5 right-5 border-gray-500 shadow-blue-200'>
                <BiPlus />
            </button>
            <Modal show={showCreate} setShow={setShowCreate}>
                <div className='w-[340px] h-auto py-2 rounded-md shadow-lg bg-white fixed top-[50%] -translate-x-[50%] -translate-y-[50%] left-[50%] z-10'>
                    <div className='w-full px-4 flex justify-between items-center h-10 shadow-lg'>
                        <div></div>
                        <h1>Create Tourism</h1>
                        <button onClick={() => setShowCreate(false)} className='shadow-lg border border-black px-2 py-2 rounded-full'>
                            <RxCross2 />
                        </button>
                    </div>
                    <form onSubmit={handleSub} className='w-full flex flex-col gap-2 mt-2 px-1'>
                        <input value={textInpu.title} onChange={handleChange} name='title' placeholder='টাইটেল' className='outline-none shadow-md' />

                        <div className='w-full h-[190px] gap-2 py-1 overflow-x-auto flex border-2'>
                            {
                                inImage ? Array(...inImage).map((item, index) => <img src={URL.createObjectURL(inImage[index])} className='w-[200px] rounded-md h-full' />) : null
                            }
                            <label htmlFor="h">
                                <div className='w-[200px] h-full flex-col gap-2 border-[1px] rounded-md flex items-center justify-center border-black'>
                                    <BsFilesAlt size={'3rem'} />
                                    <h1>ফাইল যোগ করুন</h1>
                                </div>
                            </label>
                            <input className='hidden' onChange={(e) => { e.target.files.length > 0 ? setInImage((prev) => [...prev, ...e.target.files]) : null }} id='h' multiple type='file' />
                        </div>
                        <textarea className='resize-none shadow-md' onChange={handleChange} value={textInpu.location} name="location" rows={2} id="" placeholder='অবস্থান...'></textarea>
                        <textarea className='resize-none shadow-md' onChange={handleChange} value={textInpu.naming} name="naming" id="" rows={2} placeholder="নাম করন..."></textarea>
                        <textarea className='resize-none shadow-md' onChange={handleChange} value={textInpu.description} name="description" id="" rows={2} placeholder='ডিস্ক্রিপশন...'></textarea>
                        <div className='w-full flex gap-2 items-center justify-between'>
                            <button onClick={() => { setShowCreate(false); setTextInpu({ title: "", description: "", location: "", naming: "" }); setInImage([]) }} className='w-[50%] border-[1px] border-black py-2 rounded-md'>Cencel</button>
                            <button className='w-[50%] bg-blue-500 py-2 rounded-md'>Save</button>
                        </div>
                    </form>
                </div>
            </Modal>

        </div>
    )
}

export default TourismHomePage