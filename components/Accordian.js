"use client"
import React, { useState } from 'react'
import { AiOutlineDown,AiOutlineUp } from 'react-icons/ai';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


import "aos/dist/aos.css";

const Accordion = ({ buttonsData }) => {
    const [selectedButton, setSelectedButton] = useState(false);
    const toggleAccordion = (buttonId) => {
        setSelectedButton(selectedButton === buttonId ? null : buttonId);
    };

    return (
        <div className="accordion-container max-w-[1440px] mx-auto  py-2 font-sans mb-5 ">
           
            {buttonsData.map((button) => (
                <div key={button.id} className="accordion-item ">
                    <button
                        className={`accordion py-[16px]  mb-2 flex items-center pl-[5%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  mt-2 rounded-xl sm:h-16 lg:h-14  text-left w-full bg-white text-black hover:bg-[#FFF5EE] transition-all  ease-in-out ${selectedButton === button.id ? 'bg-gray' : ''
                            }`}
                        onClick={() => toggleAccordion(button.id)}
                    >
                        <h1 className="flex-grow px-2 text-[14px] xl:text-[20px] md:text-[16px]  ">{button.text}</h1>
                        <h1 className='mr-[5%]'>{selectedButton === button.id ? <FaMinus className="text-sm sm:text-lg" /> : <FaPlus className="text-sm sm:text-lg" />}</h1>
                    </button>
                    {/* {selectedButton === button.id && ( */}
                        <div
                            className={`accordion-content px-[5%] ${selectedButton === button.id ? 'max-h-96 p-4' : 'max-h-0'}    bg-[#F9F6F4]  rounded-b-xl mb-2 transition-all duration-250    overflow-hidden`}
                        >
                            <p className="accordion-text-with-border text-sm lg:text-base transition-all duration-1000 delay-75	  max-h-96 text-[#50535C]">{button.data}</p>
                        </div>
                    {/* // )} */}
                </div>
            ))}
        </div>
    );
}


export default Accordion;