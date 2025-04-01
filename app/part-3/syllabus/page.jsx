import Image from "next/image";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "CFA Level 3 Syllabus - Midhafin",
  description: "Explore the comprehensive CFA Level 3 syllabus with Midhafin. Detailed topics and study resources to help you prepare effectively for the CFA exam.",
  keywords: "CFA exam syllabus, CFA Level 3 syllabus, CFA exam topics, Midhafin syllabus guide, CFA study materials, CFA certification syllabus",
};


function Syllabus() {
  const chapter = [
    {
      module_no: 1,
      module_title: "Asset Allocation",
      img: "/Group 395.png",
      topics: [
        { id: 1, data: "Capital Market Expectations, Part 1: Framework and Macro Considerations" },
        { id: 2, data: "Capital Market Expectations, Part 2: Forecasting Asset Class Returns" },
        { id: 3, data: "Overview of Asset Allocation" },
        { id: 4, data: "Principles of Asset Allocation" },
        { id: 5, data: "Asset Allocation with Real-World Constraints" },
      ],
    },
    {
      module_no: 2,
      module_title: "Portfolio Construction",
      img: "/Group 394.png",
      topics: [
        { id: 1, data: "Overview of Equity Portfolio Management" },
        { id: 2, data: "Overview of Fixed-Income Portfolio Management" },
        { id: 3, data: "Asset Allocation to Alternative Investments" },
        { id: 4, data: "An Overview of Private Wealth Management" },
        { id: 5, data: "Portfolio Management for Institutional Investors" },
        { id: 6, data: "Trading Costs and Electronic Markets" },
        { id: 7, data: "Case Study in Portfolio Management: Institutional" },
      ],
    },
    {
      module_no: 3,
      module_title: "Performance Measurement",
      img: "/Group 393.png",
      topics: [
        { id: 1, data: "Portfolio Performance Evaluation" },
        { id: 2, data: "Investment Manager Selection" },
        { id: 3, data: "Overview of the Global Investment Performance Standards" },
      ],
    },
    {
      module_no: 4,
      module_title: "Derivatives and Risk Management",
      img: "/Group 392.png",
      topics: [
        { id: 1, data: "Option Strategies" },
        { id: 2, data: "Swaps, Forwards, and Futures Strategies" },
        { id: 3, data: "Currency Management: An Introduction" },
      ],
    },
    {
      module_no: 5,
      module_title: "Ethical and Professional Standards",
      img: "/Group 391.png",
      topics: [
        { id: 1, data: "Code of Ethics and Standards of Professional Conduct" },
        { id: 2, data: "Guidance for Standards I-VII" },
        { id: 3, data: "Application of the Code and Standards: Level III" },
        { id: 4, data: "Asset Manager Code of Professional Conduct" },
      ],
    },
  ];
  
  
  return (
    <div>
      <div className="bg-syllabusbg p-4 md:p-8 text-center pt-7 mb-9">
        <h3 className="text-[22px] sm:text-[28px] lg:text-[35px] font-medium text-[#BE4E1E]">CFA Level 3</h3>
        <h1 className="text-[30px]  sm:text-[35px]  md:text-[45px] lg:text-[55px] font-semibold text-[#6A1C1A]">Syllabus</h1>
      </div>
      {chapter.map((data, index) => {
        return (
          <div className="max-w-[1300px] mx-auto sm:mt-5" key={index} id={data.slug}>
            <div className="w-[100%] flex items-center justify-around -mb-5 sm:-mb-9  px-2 sm:px-2">
              <div className="w-[107px]   sm:w-[190px] lg:w-[250px] flex-shrink-0">
                <Image width={180} height={180} src={data.img} className="w-[100%] flex-shrink-0" alt="frm" />
              </div>
              <div className="pl-[5%] w-full ">
                <h2 className="text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold">MODULE {data.module_no}</h2>
                <h1 className="font-bold text-[16px] h-11 sm:h-[84px] lg:h-auto sm:text-[30px] lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 ">{data.module_title}</h1>
              </div>
            </div>
            <div className="mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9 sm:py-[50px]">
              <table className="w-[90%] sm:w-[80%] mx-auto ">
                <thead>
                  <tr className="text-[12px] sm:text-[16px] lg:text-[20px]">
                    <th className="border-r border-b border-[#BE4E1E9C] w-[15%]">Chapter</th>
                    <th className="border-l border-b border-[#BE4E1E9C]">Topics</th>
                  </tr>
                </thead>
                <tbody>
                  {data.topics.map((el) => {
                    return (
                      <tr className="text-[14px] sm:text-[16px] lg:text-[20px]" key={el.id}>
                        <td className="border-r border-t border-[#BE4E1E9C] py-2 w-[15%] text-center mb-auto">{el.id}</td>
                        <td className="border-l border-t border-[#BE4E1E9C] py-2 pl-[3%]">
                          {/* <Link href={el.slug ? el.slug : "syllabus/"}> */}
                            <p className="font-semibold">{el.data}</p>
                            {/* <p className="text-[12px] sm:text-[14px] lg:text-[16px]">{el.ans}</p> */}
                          {/* </Link> */}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
     
    </div>
  );
}
export default Syllabus;
