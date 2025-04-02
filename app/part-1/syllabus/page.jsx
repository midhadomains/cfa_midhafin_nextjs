import Image from "next/image";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "CFA Level 1 Syllabus - Midhafin",
  description: "Explore the comprehensive CFA Level 1 syllabus with Midhafin. Detailed topics and study resources to help you prepare effectively for the CFA exam.",
  keywords: "CFA exam syllabus, CFA Level 1 syllabus, CFA exam topics, Midhafin syllabus guide, CFA study materials, CFA certification syllabus",
};

function Syllabus() {
  const chapter = [
    {
      img: "/Group 315.png",
      module_no: 1,
      module_title: "Ethical and Professional Standards",
      slug: "cfa",
      topics: [
        { id: 1, data: "Ethics and Trust in the Investment Profession" },
        { id: 2, data: "Code of Ethics and Standards of Professional Conduct" },
        { id: 3, data: "Guidance for Standards I-VII" },
        { id: 4, data: "Introduction to the Global Investment Performance Standards (GIPS)" },
        { id: 5, data: "Ethics Application" }
      ]
    },
    {
      img: "/Group 316.png",
      module_no: 2,
      module_title: "Quantitative Methods",
      slug: "cfa",
      topics: [
        { id: 1, data: "Rates and Returns" },
        { id: 2, data: "Time Value of Money in Finance" },
        { id: 3, data: "Statistical Measures of Asset Returns" },
        { id: 4, data: "Probability Trees and Conditional Expectations" },
        { id: 5, data: "Portfolio Mathematics" },
        { id: 6, data: "Simulation Methods" },
        { id: 7, data: "Estimation and Inference" },
        { id: 8, data: "Hypothesis Testing" },
        { id: 9, data: "Parametric and Non-Parametric Tests of Independence" },
        { id: 10, data: "Simple Linear Regression" },
        { id: 11, data: "Introduction to Big Data Techniques" }
      ]
    },
    {
      img: "/Group 317.png",
      module_no: 3,
      module_title: "Economics",
      slug: "cfa",
      topics: [
        { id: 1, data: "The Firm and Market Structures" },
        { id: 2, data: "Understanding Business Cycles" },
        { id: 3, data: "Fiscal Policy" },
        { id: 4, data: "Monetary Policy" },
        { id: 5, data: "Introduction to Geopolitics" },
        { id: 6, data: "International Trade" },
        { id: 7, data: "Capital Flows and the FX Market" },
        { id: 8, data: "Exchange Rate Calculations" }
      ]
    },
    {
      img: "/Group 318.png",
      module_no: 4,
      module_title: "Financial Statement Analysis",
      slug: "cfa",
      topics: [
        { id: 1, data: "Introduction to Financial Statement Analysis" },
        { id: 2, data: "Analyzing Income Statement" },
        { id: 3, data: "Analyzing Balance Sheet" },
        { id: 4, data: "Analyzing Statement of Cash Flow I" },
        { id: 5, data: "Analyzing Statement of Cash Flow II" },
        { id: 6, data: "Analysis of Inventories" },
        { id: 7, data: "Analysis of Long-Term Assets" },
        { id: 8, data: "Long-Term Liabilities & Equity" },
        { id: 9, data: "Analysis of Income Taxes" },
        { id: 10, data: "Financial Reporting Quality" },
        { id: 11, data: "Financial Statement Analysis - Techniques" },
        { id: 12, data: "Introduction to Financial Statement Modeling" }
      ]
    },
    {
      img: "/Group 319.png",
      module_no: 5,
      module_title: "Corporate Issuers",
      slug: "cfa",
      topics: [
        { id: 1, data: "Organizational Forms, Corporate Issuer Features, and Ownership" },
        { id: 2, data: "Investors & Other Stakeholders" },
        { id: 3, data: "Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits" },
        { id: 4, data: "Working Capital and Liquidity" },
        { id: 5, data: "Capital Investments and Capital Allocation" },
        { id: 6, data: "Capital Structure" },
        { id: 7, data: "Business Models" }
      ]
    },
    {
      img: "/Group 320.png",
      module_no: 6,
      module_title: "Equity Investment",
      slug: "cfa",
      topics: [
        { id: 1, data: "Market Organization and Structure" },
        { id: 2, data: "Security Market Indexes" },
        { id: 3, data: "Market Efficiency" },
        { id: 4, data: "Overview of Equity Securities" },
        { id: 5, data: "Company Analysis: Past and Present" },
        { id: 6, data: "Industry and Competitive Analysis" },
        { id: 7, data: "Company Analysis: Forecasting" },
        { id: 8, data: "Equity Valuation: Concepts and Basic Tools" }
      ]
    },
    {
      img: "/Group 321.png",
      module_no: 7,
      module_title: "Fixed Income",
      slug: "cfa",
      topics: [
        { id: 1, data: "Fixed-Income Instrument Features" },
        { id: 2, data: "Fixed-Income Cash Flows and Types" },
        { id: 3, data: "Fixed-Income Issuance and Trading" },
        { id: 4, data: "Fixed-Income Markets for Corporate Issuers" },
        { id: 5, data: "Fixed-Income Markets for Government Issuers" },
        { id: 6, data: "Fixed-Income Bond Valuation: Prices and Yields" },
        { id: 7, data: "Yield and Yield Spread Measures for Fixed-Rate Bonds" },
        { id: 8, data: "Yield and Yield Spread Measures for Floating-Rate Instruments" },
        { id: 9, data: "The Term Structure of Interest Rates: Spot, Par, and Forward Curves" },
        { id: 10, data: "Interest Rate Risk and Return" },
        { id: 11, data: "Yield-Based Bond Duration Measures and Properties" },
        { id: 12, data: "Yield-Based Bond Convexity and Portfolio Properties" },
        { id: 13, data: "Curve-Based and Empirical Fixed-Income Risk Measures" },
        { id: 14, data: "Credit Risk" },
        { id: 15, data: "Credit Analysis for Government Issuers" },
        { id: 16, data: "Credit Analysis for Corporate Issuers" },
        { id: 17, data: "Fixed-Income Securitization" },
        { id: 18, data: "Asset-Backed Security (ABS) Instrument and Market Features" },
        { id: 19, data: "Mortgage-Backed Security (MBS) Instrument and Market Features" }
      ]
    },
    {
      img: "/Group 322.png",
      module_no: 8,
      module_title: "Derivatives",
      slug: "cfa",
      topics: [
        { id: 1, data: "Derivative Instruments and Derivative Market Features" },
        { id: 2, data: "Forward Commitment and Contingent Claim Features and Instruments" },
        { id: 3, data: "Derivative Benefits, Risks, and Issuer and Investor Uses" },
        { id: 4, data: "Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives" },
        { id: 5, data: "Pricing and Valuation of Forward Contracts and for an Underlying with Varying Maturities" },
        { id: 6, data: "Pricing and Valuation of Futures Contracts" },
        { id: 7, data: "Pricing and Valuation of Interest Rates and Other Swaps" },
        { id: 8, data: "Pricing and Valuation of Options" },
        { id: 9, data: "Option Replication Using Put–Call Parity" },
        { id: 10, data: "Valuing a Derivative Using a One-Period Binomial Model" }
      ]
    },
    {
      img: "/Group 323.png",
      module_no: 9,
      module_title: "Alternative Investments",
      slug: "cfa",
      topics: [
        { id: 1, data: "Alternative Investment Features, Methods, and Structures" },
        { id: 2, data: "Alternative Investment Performance and Returns" },
        { id: 3, data: "Investments in Private Capital: Equity and Debt" },
        { id: 4, data: "Real Estate and Infrastructure" },
        { id: 5, data: "Natural Resources" },
        { id: 6, data: "Hedge Funds" },
        { id: 7, data: "Introduction to Digital Assets" }
      ]
    },
    {
      img: "/Group 324.png",
      module_no: 10,
      module_title: "Portfolio Management",
      slug: "cfa",
      topics: [
        { id: 1, data: "Portfolio Risk and Return: Part I" },
        { id: 2, data: "Portfolio Risk and Return: Part II" },
        { id: 3, data: "Portfolio Management: An Overview" },
        { id: 4, data: "Basics of Portfolio Planning and Construction" },
        { id: 5, data: "The Behavioral Biases of Individuals" },
        { id: 6, data: "Introduction to Risk Management" }
      ]
    }
  ];
  return (
    <div>
      <div className="bg-syllabusbg p-4 md:p-8 text-center pt-7 mb-9">
        <h3 className="text-[22px] sm:text-[28px] lg:text-[35px] font-medium text-[#BE4E1E]">
          CFA Level 1
        </h3>
        <h1 className="text-[30px]  sm:text-[35px]  md:text-[45px] lg:text-[55px] font-semibold text-[#6A1C1A]">
          Syllabus
        </h1>
      </div>
      {chapter.map((data, index) => {
        return (
          <div className="max-w-[1300px] mx-auto sm:mt-5" key={index} id={data.slug}>
            <div className="w-[100%] flex justify-around -mb-5 sm:-mb-9  px-2 sm:px-2">
              <div className="w-[107px]   sm:w-[190px] lg:w-[250px] flex-shrink-0">
                <Image
                  width={180}
                  height={180}
                  src={data.img}
                  className="w-[100%] flex-shrink-0"
                  alt="frm"
                />
              </div>
              <div className="pl-[5%] w-full ">
                <h2 className="text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold">
                  MODULE 0{data.module_no}
                </h2>
                <h1 className="font-bold text-[16px] h-11 sm:h-[84px] lg:h-auto sm:text-[30px]  lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 ">
                  {data.module_title}
                </h1>
              </div>
            </div>
            <div className="mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9 sm:py-[50px]">
              <table className="w-[90%] sm:w-[80%] mx-auto ">
                <thead>
                  <tr className="text-[12px] sm:text-[16px] lg:text-[20px]">
                    <th className="border-r border-b border-[#BE4E1E9C] w-[15%]">
                      Chapter
                    </th>
                    <th className="border-l border-b border-[#BE4E1E9C]">
                      Topics
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.topics.map((el) => {
                    return (
                      <tr
                        className="text-[14px] sm:text-[16px] lg:text-[20px]"
                        key={el.id}
                      >
                        <td className="border-r border-t border-[#BE4E1E9C] py-2 w-[15%] text-center mb-auto">
                          {el.id}
                        </td>
                        <td className="border-l border-t border-[#BE4E1E9C] py-2 pl-[3%]">

                            <p className="font-semibold">{el.data}</p>
                            {/* <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
                              {el.ans} */}
                            {/* </p> */}

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
