"use client"
import React, { useState } from 'react'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import AOS from "aos";
import "aos/dist/aos.css";

const Accordion = ({ buttonsData }) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const toggleAccordion = (buttonId) => {
        setSelectedButton(selectedButton === buttonId ? null : buttonId);
    };

    return (
        <div className="accordion-container max-w-[1400px] px-[20px] md:px-[50px] mx-auto mb-[2rem] ">
            {buttonsData.map((button) => (
                <div key={button.id} className="accordion-item rounded-lg my-2">
                    <button
                        className={`accordion rounded-lg flex items-center px-2 sm:px-5 lg:px-10  mt-1  sm:h-16 lg:h-14 py-4 text-left w-full bg-white text-black hover:bg-[#FFF5EE] transition-all duration-300 ease-in-out ${selectedButton === button.id ? 'bg-gray-700' : ''
                            }`}
                        onClick={() => toggleAccordion(button.id)}
                    >
                        <h1 className="flex-grow   md:text-[18px]  sm:text-[16px] text-[14px] font-[400]  duration-500 px-2">{button.text}</h1>
                        <h1>{selectedButton === button.id ? <IoIosArrowDropupCircle className="text-2xl text-[#6A1C1A] " /> : <IoIosArrowDropdownCircle className="text-2xl text-[#6A1C1A]" />}</h1>
                    </button>
                    {selectedButton === button.id && (
                        <div
                            className={`accordion-content px-2 sm:px-5 lg:px-10 bg-[#f8f8f8]   rounded-b-xl mb-2 transition-all duration-1000 delay-75 ease-in-out max-h-96 py-2 overflow-y-hidden`}
                        >
                            <p className="accordion-text-with-border text-[14px] sm:text-[16px] md:text-[18px]  transition-all duration-1000 delay-7 enabled:ase-in-out max-h-96 ">{button.data}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}


export default Accordion;
