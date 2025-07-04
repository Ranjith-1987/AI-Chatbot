import React from 'react'
import { IoIosSend } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='flex justify-between px-5 h-15 bg-gray-700 rounded-sm items-center'>
                <div className='flex gap-2'>
                    <div className='flex gap-1'>
                        <span className='bg-white h-4 w-1'></span>
                        <span className='bg-white h-8 w-1'></span>
                        <span className='bg-white h-4 w-1'></span>
                    </div>

                    <h1 className='font-semibold text-xl'>Ranjith</h1>
                </div>

                <div>
                    <nav>
                        <ul className='flex gap-5'>
                            <li>Chat</li>
                            <li>History</li>
                            <li>Docs</li>
                            <li>Pricing</li>
                        </ul>
                    </nav>
                </div>

                <div className='flex gap-5'>
                    <button className='bg-blue-500 h-8 w-23 rounded-md text-white font-semibold'>Feedback</button>
                    <button className='bg-gray-500 h-8 w-30 rounded-md text-white font-semibold'>Contact Dev.</button>
                </div>
            </div>

            <div className='bg-gray-700 h-50 w-auto my-5 rounded-sm m-2 pt-4'>
                <div className='flex'>
                    <span className='bg-green-400 h-5 w-5 rounded-full ml-2'></span>
                    <div className='bg-gray-600 h-15 w-87 rounded-xl ml-2 pl-2 pt-1'>
                        <p>Hello! I'm Ranjith AI.How can I help you today?</p>
                        <span className='text-gray-300 text-[10px] flex justify-end pr-3 mt-2'>08:17PM</span>
                    </div>
                </div>

                <div className='border border-gray-600 mt-5 flex justify-center'>

                    <div className='bg-gray-600 w-230 h-15 mt-7 pl-2 pt-2 rounded-md'>
                        <div className='text-gray-400'>
                            <input type="text" placeholder='Type your message here...' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-14 ml-1'>
                        <button className='bg-blue-500 flex justify-center items-center h-8 w-8 rounded-sm'>
                            <IoIosSend />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar
