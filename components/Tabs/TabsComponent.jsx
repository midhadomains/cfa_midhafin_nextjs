// 'use client';
// import { useState, useEffect, useRef } from 'react';

// const TabsComponent = ({ items }) => {
//     const [selectedTab, setSelectedTab] = useState(0);
//     const firstBtnRef = useRef();

//     useEffect(() => {
//         firstBtnRef.current.focus();
//     }, []);

//     return (
//         <div className=' flex justify-center items-center py-12'>
//             <div className='max-w-full md:max-w-[1300px] flex flex-col gap-y-2 w-full'>
//                 <div className='bg-[#FFFDF6] p-1 md:hidden rounded-xl flex justify-between items-center gap-x-2 font-bold text-[#cb7a5a]'>
//                     {items.map((item, index) => (
//                         <button
//                             ref={index === 0 ? firstBtnRef : null}
//                             key={index}
//                             onClick={() => setSelectedTab(index)}
//                             className={` w-full p-2 hover:bg-[#b87f67] rounded-xl text-center focus:ring-2 focus:outline-blue-900 focus:bg-white focus:text-[#e9825a] ${selectedTab === index ? 'ring-2 bg-white text-[#c47654]' : ''
//                                 } `}
//                         >
//                             {item.title}
//                         </button>
//                     ))}
//                 </div>

//                 <div className='md:hidden p-2 rounded-xl'>
//                     {items.map((item, index) => (
//                         <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
//                             {item.content}
//                         </div>
//                     ))}
//                 </div>
//                 <div className='hidden md:block p-2  mx-auto rounded-xl'>
//                     {items.map((item, index) => (
//                         <div key={index} className={`${selectedTab === ( 0 && 1 && 2 && 3) ? '' : 'hidden'} mb-3`}>
//                             {item.content}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TabsComponent;

'use client';
import { useState, useEffect, useRef } from 'react';

const TabsComponent = ({ items }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const firstBtnRef = useRef();
    const lastBtnRef = useRef();

    useEffect(() => {
        firstBtnRef.current.focus();
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            const nextTab = (selectedTab + 1) % items.length;
            setSelectedTab(nextTab);
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            const prevTab = selectedTab === 0 ? items.length - 1 : selectedTab - 1;
            setSelectedTab(prevTab);
        }
    };

    return (
        <div
            className='flex justify-center items-center py-12'
            onKeyDown={handleKeyDown}
            tabIndex="0" // Needed to make the div focusable
        >
            <div className='max-w-full md:max-w-[1300px] flex flex-col gap-y-2 w-full'>
                <div className='bg-[#FFFDF6] sm:px-[60px] overflow-x-scroll  p-1 md:hidden rounded-xl flex justify-between items-center gap-x-4 font-bold text-[#BE4E1E]'>
                    {items.map((item, index) => (
                        <button
                            ref={index === 0 ? firstBtnRef : index === items.length - 1 ? lastBtnRef : null}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            className={`  p-2 flex-shrink-0 hover:bg-[#b87f67] rounded-2xl text-center text-[10px] focus:ring-2 focus:outline-none focus:bg-white focus:text-[#e9825a] ${selectedTab === index ? 'ring-2 bg-white text-[#c47654]' : ''
                                } `}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                <div className='md:hidden p-2 rounded-xl'>
                    {items.map((item, index) => (
                        <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
                            {item.content}
                        </div>
                    ))}
                </div>
                <div className='hidden md:block p-2  mx-auto rounded-xl'>
                    {items.map((item, index) => (
                        <div key={index} className={`${selectedTab === ( 0 && 1 && 2 && 3 ) ? '' : 'hidden'} mb-3`}>
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabsComponent;
