import Image from "next/image";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "CFA Level 2 Syllabus - Midhafin",
  description: "Explore the comprehensive CFA Level 2 syllabus with Midhafin. Detailed topics and study resources to help you prepare effectively for the CFA exam.",
  keywords: "CFA exam syllabus, CFA Level 2 syllabus, CFA exam topics, Midhafin syllabus guide, CFA study materials, CFA certification syllabus",
};

function Syllabus() {
  const chapter = [
    {
      img: "/Group 391.png",
      module_no: 1,
      module_title: "Ethical and Professional Standards",
      topics: [
        { id: 1, data: "Code of Ethics and Standards of Professional Conduct" },
        { id: 2, data: "Guidance for Standards I–VII" },
        { id: 3, data: "Application of the Code and Standards: Level II" },
      ],
    },
    {
      img: "/Group 392.png",
      module_no: 2,
      module_title: "Quantitative Methods",
      topics: [
        { id: 1, data: "Basics of Multiple Regression and Underlying Assumptions" },
        { id: 2, data: "Evaluating Regression Model Fit and Interpreting Model Results" },
        { id: 3, data: "Model Misspecification" },
        { id: 4, data: "Extensions of Multiple Regression" },
        { id: 5, data: "Time-Series Analysis" },
        { id: 6, data: "Machine Learning" },
        { id: 7, data: "Big Data Projects" },
      ],
    },
    {
      img: "/Group 393.png",
      module_no: 3,
      module_title: "Economics",
      topics: [
        { id: 1, data: "Currency Exchange Rates: Understanding Equilibrium Value" },
        { id: 2, data: "Economic Growth" },
      ],
    },
    {
      img: "/Group 394.png",
      module_no: 4,
      module_title: "Financial Statement Analysis",
      topics: [
        { id: 1, data: "Intercorporate Investments" },
        { id: 2, data: "Employee Compensation: Post-Employment and Share-Based" },
        { id: 3, data: "Multinational Operations" },
        { id: 4, data: "Analysis of Financial Institutions" },
        { id: 5, data: "Evaluating Quality of Financial Reports" },
        { id: 6, data: "Integration of Financial Statement Analysis Techniques" },
      ],
    },
    {
      img: "/Group 395.png",
      module_no: 5,
      module_title: "Corporate Issuers",
      topics: [
        { id: 1, data: "Analysis of Dividends and Share Repurchases" },
        { id: 2, data: "Environmental, Social, and Governance (ESG) Considerations in Investment Analysis" },
        { id: 3, data: "Cost of Capital: Advanced Topics" },
        { id: 4, data: "Corporate Restructuring" },
      ],
    },
    {
      img: "/Group 396.png",
      module_no: 6,
      module_title: "Equity Investments",
      topics: [
        { id: 1, data: "Equity Valuation: Applications and Processes" },
        { id: 2, data: "Discounted Dividend Valuation" },
        { id: 3, data: "Free Cash Flow Valuation" },
        { id: 4, data: "Market-Based Valuation: Price and Enterprise Value Multiples" },
        { id: 5, data: "Residual Income Valuation" },
        { id: 6, data: "Private Company Valuation" },
      ],
    },
    {
      img: "/Group 392.png",
      module_no: 7,
      module_title: "Fixed Income",
      topics: [
        { id: 1, data: "The Term Structure and Interest Rate Dynamics" },
        { id: 2, data: "The Arbitrage-Free Valuation Framework" },
        { id: 3, data: "Valuation and Analysis of Bonds with Embedded Options" },
        { id: 4, data: "Credit Analysis Models" },
        { id: 5, data: "Credit Default Swaps" },
      ],
    },
    {
      img: "/Group 393.png",
      module_no: 8,
      module_title: "Derivatives",
      topics: [
        { id: 1, data: "Pricing and Valuation of Forward Commitments" },
        { id: 2, data: "Valuation of Contingent Claims" },
      ],
    },
    {
      img: "/Group 394.png",
      module_no: 9,
      module_title: "Alternative Investments",
      topics: [
        { id: 1, data: "Introduction to Commodities and Commodity Derivatives" },
        { id: 2, data: "Overview of Types of Real Estate Investment" },
        { id: 3, data: "Investments in Real Estate through Publicly Traded Securities" },
        { id: 4, data: "Hedge Fund Strategies" },
      ],
    },
    {
      img: "/Group 396.png",
      module_no: 10,
      module_title: "Portfolio Management and Wealth Planning",
      topics: [
        { id: 1, data: "Economics and Investment Markets" },
        { id: 2, data: "Analysis of Active Portfolio Management" },
        { id: 3, data: "Exchange-Traded Funds: Mechanics and Applications" },
        { id: 4, data: "Using Multifactor Models" },
        { id: 5, data: "Measuring and Managing Market Risk" },
        { id: 6, data: "Backtesting and Simulation" },
      ],
    },
  ];
  
  
  
  
  return (
    <div>
      <div className="bg-syllabusbg p-4 md:p-8 text-center pt-7 mb-9">
        <h3 className="text-[22px] sm:text-[28px] lg:text-[35px] font-medium text-[#BE4E1E]">CFA Level 2</h3>
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
                            {/* <p className="text-[12px] sm:text-[14px] lg:text-[16px]">{el.ans}</p>
                          </Link> */}
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
