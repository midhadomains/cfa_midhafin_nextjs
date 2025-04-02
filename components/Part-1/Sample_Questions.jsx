// "use client";
// import "katex/dist/katex.min.css";
// import { useState, useEffect } from "react";
// import Latex from "react-latex-next";
// import { RiArrowRightSLine } from "react-icons/ri";
// import Image from "next/image";


// export default function Sample_Questions() {
//     const [active, setActive] = useState("frm");
//     const [expandedAnswers, setExpandedAnswers] = useState({});

//     const handleActiveClick = (active) => {
//         setActive(active);
//     };

//     const handleToggleAnswer = (index) => {
//         setExpandedAnswers((prev) => ({
//             ...prev,
//             [index]: !prev[index],
//         }));
//     };

//     useEffect(() => {
//         // Add a class to enable transitions
//         const timeout = setTimeout(() => {
//             document.querySelectorAll(".answer-container").forEach((el) => {
//                 el.classList.add("transition-all");
//             });
//         }, 10);
//         return () => clearTimeout(timeout);
//     }, []);

//     return (
//         <>
//             <div className='bg-[#6A1C1A] p-7'>
//                 <h1 className='text-[20px]  sm:text-[40px] text-white text-center'>FRM Part 1 - <span className='font-semibold'>SAMPLE QUESTIONS</span></h1>
//             </div>
//             <div
//                 className="max-w-[1400px] px-[10px] md:px-[50px] mx-auto"
//                 style={{ userSelect: "none" }}
//             >
//                 <ul className="flex w-[100%] justify-around gap-3 md:text-[18px] max-w-[500px] mx-auto flex-wrap mt-4">
//                     <li
//                         onClick={() => handleActiveClick("frm")}
//                         className={`cursor-pointer  bg-slate-200 border rounded-full w-[100px] text-center py-1 sm:my-9 ${active === "frm" ? "text-[#de6446]" : ""
//                             } ${active === null ? "text-[#de6446]" : ""}`}
//                     >
//                         FRM
//                     </li>
//                     <li
//                         onClick={() => handleActiveClick("qta")}
//                         className={`cursor-pointer  bg-slate-200 border rounded-full w-[100px] text-center py-1 sm:my-9 ${active === "qta" ? "text-[#de6446]" : ""
//                             } ${active === null ? "text-[#de6446]" : ""}`}
//                     >
//                         QTA
//                     </li>
//                     <li
//                         onClick={() => handleActiveClick("fmp")}
//                         className={`cursor-pointer  bg-slate-200 border rounded-full w-[100px] text-center py-1 sm:my-9 ${active === "fmp" ? "text-[#de6446]" : ""
//                             } ${active === null ? "text-[#de6446]" : ""}`}
//                     >
//                         FMP
//                     </li>
//                     <li
//                         onClick={() => handleActiveClick("vrm")}
//                         className={`cursor-pointer  bg-slate-200 border rounded-full w-[100px] text-center py-1 sm:my-9 ${active === "vrm" ? "text-[#de6446]" : ""
//                             } ${active === null ? "text-[#de6446]" : ""}`}
//                     >
//                         VRM
//                     </li>
//                 </ul>

//                 {active === "frm" && (
//                     <div>
//                         <h1 className="text-[20px] sm:text-[30px] lg:text-[40px] font-semibold text-center">
//                            Foundations Of Risk Management  (FRM)
//                         </h1>
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">Q.1.</h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">Three candidates from MidhaFin who are preparing for FRM are having a conversation regarding risk appetites
//                                     and risk risk capacity.
//                                     The first Candidate, Antonio says - “The risk appetite is set well below the firm&apos;s total risk bearing capacity, and
//                                     above the amount of risk the firm is exposed to currently.”
//                                     The second Candidate, Yash says - “The amount of risk the firm is exposed to currently is labeled as the firm&apos;s
//                                     risk profile.”
//                                     The third Candidate, Harpreet says - “Trigger points are designed to let the board know if risk taking looks
//                                     unnaturally low or if there is a danger of breaching the agreed risk appetite.”
//                                     Who is correct?</p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;Antonio only</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;Antonio and Harpreet only</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;All three are correct</li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp;Yash only</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.1.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[21] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(21)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[21] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is C.</b>
//                                         <br />
//                                         Generally, the risk appetite is set well below the firm&apos;s total risk bearing capacity, and above the amount of risk
//                                         the firm is exposed to currently (labeled as the firm&apos;s risk profile). Upper and lower trigger points are set for
//                                         reporting purposes. These are designed to let the board know if risk taking looks unnaturally low or if there is a
//                                         danger of breaching the agreed risk appetite.
//                                         So all three are correct
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">Q.2.</h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">Consider a portfolio consists of a risk-free asset with <img src="https://latex.codecogs.com/svg.image?\boldsymbol{r_{f}=4%}" alt="rf=4%" className="inline align-middle h-6" /> and the market portfolio  <img src="https://latex.codecogs.com/svg.image?\boldsymbol{M}" alt="rf=4%" className="inline align-middle h-4" /> with <img src="https://latex.codecogs.com/svg.image?\boldsymbol{r_{f}=4%}" alt="rf=4%" className="inline align-middle h-6" /> and the market portfolio  <img src="https://latex.codecogs.com/svg.image?\boldsymbol{ER_{M}=12%}" alt="rf=4%" className="inline align-middle h-4" />
//                                     and <img src="https://latex.codecogs.com/svg.image?\boldsymbol{\sigma_M=8%}" alt="rf=4%" className="inline align-middle h-6" /> and the market portfolio  <img src="https://latex.codecogs.com/svg.image?\boldsymbol{M}" alt="rf=4%" className="inline align-middle h-4" /> with <img src="https://latex.codecogs.com/svg.image?\boldsymbol{r_{f}=4%}" alt="rf=4%" className="inline align-middle h-6" /> and the market portfolio  <img src="https://latex.codecogs.com/svg.image?\boldsymbol{ER_{M}=12%}" alt="rf=4%" className="inline align-middle h-4" /> . What is the expected return of the portfolio if Standard deviation of
//                                     portfolio is equal to <img src="https://latex.codecogs.com/svg.image?\boldsymbol{11%}" alt="rf=4%" className="inline align-middle h-5" />?</p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;12%</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;13%</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;14%</li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp;15%</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.2.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[22] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(22)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[22] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is D.</b>
//                                         <br />
//                                         Since the portfolio is a combination of risk-free asset and market portfolio, it will lie on the CML.
//                                         So , equation of CML will be used.
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{E(R_P) = r_f + \left(\frac{E(R_M) - r_f}{\sigma_M}\right) \times \sigma_P = 4\% + \left(\frac{12\% - 4\%}{8\%}\right) \times 11\% = 15\%}" alt="rf=4%" className="mx-auto align-middle h-10" />
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">Q.3.</h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">Consider two portfolios,<img src="https://latex.codecogs.com/svg.image?\boldsymbol{X}" alt="rf=4%" className="inline align-middle h-5" />  and <img src="https://latex.codecogs.com/svg.image?\boldsymbol{Y}" alt="rf=4%" className="inline align-middle h-5" />. <br />
//                                     <img src="https://latex.codecogs.com/svg.image?\boldsymbol{E(R_X) = 15\% \text{ and } E(R_Y) = 10.8\%.}" alt="rf=4%" className="inline align-middle h-6" /> . <br />
//                                     There is only one factor which is the market factor. <br />
//                                     <img src="https://latex.codecogs.com/svg.image?\boldsymbol{\beta_X = 1.5 \text{ and } \beta_X = 1.1.}" alt="rf=4%" className="inline align-middle h-6" /> . <br />
//                                     <img src="https://latex.codecogs.com/svg.image?\boldsymbol{X}" alt="rf=4%" className="inline align-middle h-4" />  also generates extra return given by <img src="https://latex.codecogs.com/svg.image?\boldsymbol{a_{x}=1%}" alt="rf=4%" className="inline align-middle h-5" />  . <br />
//                                     The risk-free rate and the expected return on the market should be</p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;2% and 10% respectively.</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;2% and 8% respectively.</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;3% and 10% respectively.</li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp;3% and 8% respectively.</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.3.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[23] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(23)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[23] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is A.</b>
//                                         <br />
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{E(R_X) = r_f + \alpha_X + \beta_{X,M} \left[ E(R_M) - r_f \right] \\}" alt="rf=4%" className="mx-auto align-middle h-6" /><br />
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{\implies 15\% = r_f + 1\% + 1.5 E(R_M) - 1.5 r_f}" alt="rf=4%" className="mx-auto align-middle h-6" />
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{\implies 14\% = 1.5 E(R_M) - 0.5 r_f ......Equation  1 }" alt="rf=4%" className="mx-auto align-middle h-6 my-4" />
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{E(R_X) = r_f + \beta_{X,M} \left[ E(R_M) - r_f \right] \\}" alt="rf=4%" className="mx-auto align-middle h-6" />
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{\implies 10.8\% = r_f + 1.1 E(R_M) - 1.1 r_f}" alt="rf=4%" className="mx-auto align-middle h-6 my-4 " />
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{\implies 10.8\% = 1.1E(R_M) - 0.1r_f ......Equation  2 }" alt="rf=4%" className="mx-auto align-middle h-6 my-4" />
//                                         Multiplying Equation 1 by 2 and multiplying equation 2 by 10, we get the following 2 equations
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{28\% = 3E(R_M) - r_f \\}" alt="rf=4%" className="mx-auto align-middle h-6" />
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{108\% = 11E(R_M) - r_f}" alt="rf=4%" className="mx-auto align-middle h-6" />
//                                         Now subtracting the first equation above from the second equation, we get
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{ 80\% = 8E(R_M) \implies E(R_M) = \frac{80\%}{8} = 10\%}" alt="rf=4%" className="mx-auto align-middle h-13" />
//                                         Substituting    <img src="https://latex.codecogs.com/svg.image?\boldsymbol{ E(R_M) = 10\%}" alt="rf=4%" className="inline align-middle h-6" /> in the first equation above, we get
//                                         <img src="https://latex.codecogs.com/svg.image?\boldsymbol{ 28% = 3\times 10% - r_f \implies r_f = 30% - 28% =2%}" alt="rf=4%" className="mx-auto align-middle h-6" />

//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">Q.4.</h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     Lacking a liquid market for appropriate long-term futures contracts to hedge its price risk, MGRM implemented
//                                     a dynamic hedging strategy, known as a rolling hedge, that used short-dated energy futures contracts. It can be
//                                     profitable when spot price of assets is higher than futures price (this behaviour of prices is known as
//                                     backwardation). The derivative position was adjusted monthly to reflect the changing amount of outstanding
//                                     contracts to be hedged in order to preserve a one-to-one hedge. This type of strategy can result in losses when
//                                     the opposite price relationship exists (a situation known as the market being in contango).
//                                     MGRM was exposed to
//                                 </p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;curve risk and strategic risk</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;basis risk and strategic risk</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;curve risk and basis risk</li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp;basis risk and rolling risk</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.4.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[24] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(24)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[24] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is C.</b>
//                                         <br />
//                                         MGRM was exposed to curve risk (i.e., the risk of shifts in the price curve between backwardation and
//                                         contango) and basis risk resulting from deviations between short-term prices and long-term prices.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">Q.5.</h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     Delinquencies on adjustable-rate subprime mortgages approached by August 2007 (roughly triple its level
//                                     in mid-2005). By May 2008, this figure had risen to , leading to a massive number of ratings downgrades
//                                     for subprime mortgage securitized products. There were several reasons for the increase in delinquencies after
//                                     mid-2005. Which of the following is NOT one such reason?
//                                 </p>
//                                 <ul className="list-decimal ml-2 mt-7 px-[20px]">
//                                     <li className="marker:content-['A.'] pl-1">&nbsp;&nbsp;Many subprime mortgages included teaser rates for initial 2 or 3 years. This was not a problem if a
//                                         borrower could refinance the mortgage before the reset date. But if the borrower could not refinance and
//                                         if interest rates increased, the monthly mortgage costs could rise very quickly. Interest rates actually
//                                         increased, with the rate on the three-month Treasury bill rising from less than 1.0% in April 2004 to over
//                                         4.0% in November 2005. Other mortgage features, such as interest-only teaser periods, made this issue even
//                                         worse.</li>
//                                     <li className="marker:content-['B.'] pl-1">&nbsp;&nbsp;The ability to refinance mortgages declined significantly when housing prices began to fall sharply in 2006.
//                                         Furthermore, subprime mortgage balances quickly began to exceed the market value of the homes that
//                                         collateralized the loans, increasing the incentive for borrowers to default.</li>
//                                     <li className="marker:content-['C.'] pl-1">&nbsp;&nbsp;In a subprime mortgage transaction, the mortgage often overcollateralized. Income and payment histories
//                                         are inconsistent, and debt-to-income ratios are typically high for subprime borrowers.</li>
//                                     <li className="marker:content-['D.'] pl-1">&nbsp;&nbsp;Some borrowers were deliberately pushed into subprime mortgages even though they qualified for
//                                         mortgages with better terms.</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.5.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[25] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(25)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[25] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is C.</b>
//                                         <br />
//                                         C is incorrect because – “In a subprime mortgage transaction, the inherent credit quality of the borrower is
//                                         typically weak and the mortgage often undercollateralized. Income and payment histories are inconsistent, and
//                                         debt-to-income ratios are typically high for subprime borrowers.”
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {active === "qta" && (
//                     <div className="text-center  ">
//                         <h1 className="text-[20px] sm:text-[30px] lg:text-[40px] font-semibold">
//                             Quantitative Analysis (QTA)
//                         </h1>
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.1.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     An analyst finds out that the probability of default of a bond
//                                     A is 15% and the probability of default of bond B is 17% and
//                                     the bond defaults are dependent. He is keen to know the
//                                     probability of both bonds defaulting, then which of the
//                                     following information can be used?
//                                 </p>
//                                 <ul className=" list-inside mt-2 px-[20px] ">
//                                     <li className="marker:content-['I.']">
//                                         {" "}
//                                         &nbsp; &nbsp;Probability of default of either of two bonds
//                                     </li>
//                                     <li className="marker:content-['II.']">
//                                         {" "}
//                                         &nbsp; Conditional probability of default of bond A on B
//                                     </li>
//                                     <li className="marker:content-['III.']">
//                                         {" "}
//                                         &nbsp;Conditional probability of default of bond B on A
//                                     </li>
//                                 </ul>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">
//                                         &nbsp;&nbsp;Only 1 can be used
//                                     </li>
//                                     <li className="marker:content-['B.']">
//                                         &nbsp;&nbsp;Only 2 can be used
//                                     </li>
//                                     <li className="marker:content-['C.']">
//                                         &nbsp;&nbsp;Only 3 can be used
//                                     </li>
//                                     <li className="marker:content-['D.']">
//                                         &nbsp;&nbsp;Either 1, 2 or 3 can be used
//                                     </li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.1.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[1] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(1)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[1] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[35px]">
//                                         <br />
//                                         <b>The correct answer is D.</b> <br />
//                                         Probability of both bonds defaulting is nothing but the
//                                         joint probability of default of Bond A and B. There are
//                                         multiple ways possible to do this - <br />
//                                         One way is to use the relationship -{" "}
//                                         <Latex>
//                                             $P\left ( A\bigcap B \right )=P\left ( A \right )+P\left (
//                                             B \right )-P\left ( A\bigcup B \right )$
//                                         </Latex>
//                                         <br />
//                                         In order to apply this relationship, we need to find the
//                                         probability that either bond defaults. Therefore,
//                                         information I can be used. <br />
//                                         Another way is to use the relationship -{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{P(A\mid&space;B)=\frac{P(A\cap&space;B)}{P(B)}&space;or&space;P(B\mid&space;A)=\frac{P(A\cap&space;B)}{P(A)}}"
//                                             alt=""
//                                             className="inline align-middle h-[40px]"
//                                         />
//                                         <br />
//                                         In order to apply this relationship, we need to find the
//                                         conditional probability of A on B or conditional probability
//                                         of B on A. Therefore, information II and III can also be
//                                         used.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.2.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     In a game named candy crush, the outcomes that are possible in
//                                     a single play are - passing the level, losing the level and
//                                     using the booster to pass the level. The probability of
//                                     passing the level is 35% and the probability of losing the
//                                     level is 45%. If a player plays 10 games, then what is the
//                                     probability that he passes in 8 levels and uses boosters to
//                                     pass 2 levels?
//                                 </p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;0.14%</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;1.75%</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;3.15%</li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp;0.04%</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.2.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[2] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(2)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[2] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[35px]">
//                                         <b>The Correct Answer is D.</b>
//                                         <br />
//                                         The outcomes of a single game are three, hence, trinomial
//                                         distribution can be used to model the probability of
//                                         outcomes. It is given in the question that the player plays
//                                         10 games{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\left(\mathit{n}=10&space;\right)}"
//                                             className="inline align-middle h-[20px]"
//                                             alt="n=10"
//                                         />{" "}
//                                         , the probability of passing the level in each game is 35%{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\left(\textit{p}_{1}=0.35\right)}"
//                                             className="inline align-middle h-[25px]"
//                                         />
//                                         &nbsp;and the probability of losing the game is 45%{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\left(\textit{p}_{2}=0.45\right)}\textit{}"
//                                             className="inline align-middle h-[25px] "
//                                             alt=""
//                                         />
//                                         . The probability of passing 8 levels and using boosters to
//                                         pass 2 levels is same as the probability of passing 8 levels{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\left(x_{1}\right)}"
//                                             alt=""
//                                             className="inline align-middle h-[25px]"
//                                         />{" "}
//                                         and fails in 0 levels{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\left(x_{2}\right)}"
//                                             alt=""
//                                             className="inline align-middle h-[25px]"
//                                         />{" "}
//                                         out of 10 games. It can be calculated using the following
//                                         equation - <br />
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{P\left(x_{1}=8\;and\;x_{2}=0\right)=\frac{n!}{x_{1}!x_{2}!\left(n-x_{1}-x_{2}\right)}p_{1}^{x_{1}}p_{2}^{x_{2}}\left(1-p_{1}-p_{2}\right)^{n-x_{1}-x_{2}}}"
//                                             alt=""
//                                             className=" mx-auto align-middle h-[45px] mt-2"
//                                         />
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{=\frac{10!}{8!0!(10-8-0)!}\times&space;0.35^8\times&space;0.45^0\times(1-0.35-0.45)^{10-8-0}}"
//                                             alt=""
//                                             className=" align-middle h-[45px] my-5 mx-auto"
//                                         />
//                                         <b className="text-2xl font-[500] text-center mx-auto align-middle">
//                                             {" "}
//                                             = 45 &times; 0.000225 &times; 1 &times; 0.04 = 0.000405 =
//                                             0.04%
//                                         </b>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />

//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.3.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     A sample of returns on gold was collected for 36 periods. If
//                                     the 99% confidence interval (assuming normal distribution) for
//                                     the return on gold is{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\left\{-0.142%,0.919%&space;\right\}}"
//                                         alt=""
//                                         className="inline align-middle h-[25px]"
//                                     />
//                                     , then what is the sample standard deviation of the gold?
//                                 </p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;0.206%</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;1.236%</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;7.416%</li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp;0.034%</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.3.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[3] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(3)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[3] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is B.</b>
//                                         <br />
//                                         Since the distribution is symmetric, the mean will be the
//                                         average of the upper and lower bonds of the confidence
//                                         interval.{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\hat{\mu}=\frac{-0.142\%&plus;0.919\%}{2}=0.3885\%}"
//                                             alt=""
//                                             className="align-middle h-[40px] my-2 mx-auto"
//                                         />{" "}
//                                         <br />
//                                         The standard error can then be calculated as -{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{0.3885\%&plus;2.57\times&space;S.E.=0.919\%\implies&space;S.E.=\frac{0.919\%-0.3885\%}{2.57}=0.206\%}"
//                                             alt=""
//                                             className=" align-middle h-[40px] mx-auto my-2"
//                                         />{" "}
//                                         <br />
//                                         The sample standard deviation will be -{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\hat{\sigma}=S.E.\times\sqrt{n}=0.206\times\sqrt{36}=1.236\%}"
//                                             alt=""
//                                             className=" align-middle h-[40px] mx-auto my-2"
//                                         />
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.4.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     The following regression equation describes the daily returns
//                                     of stock{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{A,R_{A}}"
//                                         alt=""
//                                         className="inline align-middle h-[20px] mx-auto my-2"
//                                     />{" "}
//                                     , in terms of an index return,
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{R_{1}}"
//                                         alt=""
//                                         className="inline align-middle h-[20px] mx-auto my-2"
//                                     />
//                                     , size of the firm{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{X_{S}}"
//                                         alt=""
//                                         className="inline align-middle h-[20px] mx-auto my-2"
//                                     />
//                                     &nbsp;and a mean zero error term,{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\epsilon}"
//                                         alt=""
//                                         className="inline align-middle h-[15px] mx-auto my-2"
//                                     />{" "}
//                                     -
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{R_A=\alpha&plus;\beta_1&space;R_I&plus;\beta_2&space;X_S&plus;\epsilon}"
//                                         alt="img"
//                                         className="align-middle h-[25px] mx-auto my-2"
//                                     />
//                                     Where,{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\alpha}"
//                                         alt=""
//                                         className="inline align-middle h-[15px] mx-auto my-2"
//                                     />{" "}
//                                     and{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\beta_{1}}"
//                                         alt=""
//                                         className="inline align-middle h-[20px] mx-auto my-2"
//                                     />{" "}
//                                     and{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\beta_{2}}"
//                                         alt=""
//                                         className="inline align-middle h-[20px] mx-auto my-2"
//                                     />{" "}
//                                     are constants,{" "}
//                                     <img
//                                         src=""
//                                         alt=""
//                                         className="inline align-middle h-[15px] mx-auto my-2"
//                                     />{" "}
//                                     is mean zero with a standard deviation of 1.0%, value of{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\alpha"
//                                         alt=""
//                                         className="inline align-middle h-[15px] mx-auto my-2"
//                                     />{" "}
//                                     is 0.01%,
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\beta_{1}}"
//                                         alt=""
//                                         className="inline align-middle h-[20px] mx-auto my-2"
//                                     />{" "}
//                                     is 1.20 and that of{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\beta_{1}}"
//                                         alt=""
//                                         className="inline align-middle h-[20px] mx-auto my-2"
//                                     />{" "}
//                                     is 0.82. The standard deviation of Index return is 1.5%, and
//                                     the standard deviation of Size is 1.7%. If index return and
//                                     size of the firm are independent, then what is the standard
//                                     deviation of stock return?
//                                 </p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;0.0618%</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;2.49%</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;2.47%</li>
//                                     <li className="marker:content-['D.']">
//                                         &nbsp;&nbsp;Cannot be determined
//                                     </li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.4.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[4] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(4)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[4] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is B.</b>
//                                         <br />
//                                         At first, it may seem that the information is not sufficient
//                                         to calculate the variance of the stock return, but a simple
//                                         property discussed in earlier chapters can be used to
//                                         calculate the variance of the stock return.
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{V(R_A)=V(\alpha&plus;\beta_1&space;R_I&plus;\beta_2&space;X_S&plus;\epsilon)}"
//                                             alt=""
//                                             className=" align-middle h-[20px] mx-auto my-2"
//                                         />
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\implies&space;V(R_A)=\beta_1^2&space;V(R_I)&plus;\beta_2^2&space;V(X_S)&plus;V(\epsilon)}"
//                                             alt=""
//                                             className=" align-middle h-[25px] mx-auto my-2"
//                                         />
//                                         <br />
//                                         Since the explanatory variables are independent and the
//                                         error term is also independent of the explanatory variables,
//                                         it is certain that the covariance between{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{R_{I},X_{S}}"
//                                             alt=""
//                                             className="inline align-middle h-[20px] mx-auto my-2"
//                                         />{" "}
//                                         , and{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\epsilon}"
//                                             alt=""
//                                             className="inline align-middle h-[15px] mx-auto my-2"
//                                         />{" "}
//                                         are all zero.
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\implies&space;V(R_A)=1.2^2\times&space;0.015^2&plus;0.82^2\times&space;0.017^2&plus;0.01^2=0.000618}"
//                                             alt=""
//                                             className=" align-middle h-[25px] mx-auto my-2"
//                                         />{" "}
//                                         <br />
//                                         The standard deviation will, therefore, be - <br />{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\sigma_A=\sqrt{0.000618}=0.0249=2.49\%}"
//                                             alt=""
//                                             className=" align-middle h-[25px] mx-auto my-2"
//                                         />
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.5.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     The table given below records the results for various trend
//                                     models of Real GDP (in billion USD) of a country -
//                                 </p>
//                                 <table className="border-collapse border w-[100%] max-w-[900px] mx-auto text-center  text-[20px] my-4">
//                                     <tbody>
//                                         <tr className="border-collapse border font-[500] ">
//                                             <td className="border w-[20%] font-semibold py-5">
//                                                 Variable
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 δ<sub>0</sub>
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 δ<sub>1</sub>
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 δ<sub>2</sub>
//                                             </td>
//                                             <td className="italic tracking-wider border w-[20%]">
//                                                 R<sup>2</sup>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                     <tbody>
//                                         <tr>
//                                             <td className="border w-[20%] font-semibold py-5">
//                                                 RGDP
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 -43.29 <br /> (-0.384)
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 59.38 <br /> (87.81)
//                                             </td>
//                                             <td className="border w-[20%]"></td>
//                                             <td className="border w-[20%]">0.964</td>
//                                         </tr>
//                                     </tbody>
//                                     <tbody>
//                                         <tr>
//                                             <td className="border w-[20%] font-semibold py-5">
//                                                 RGDP
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 1996 <br /> (32.69)
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 17.80 <br /> (18.53)
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 0.144 <br /> (44.68)
//                                             </td>
//                                             <td className="border w-[20%]">0.996</td>
//                                         </tr>
//                                     </tbody>
//                                     <tbody>
//                                         <tr>
//                                             <td className="border w-[20%] font-semibold italic py-5">
//                                                 ln(RGDP)
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 7.712 <br /> (972.5)
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 0.00789 <br /> (165.9)
//                                             </td>
//                                             <td className="border w-[20%]"></td>
//                                             <td className="border w-[20%]">0.990</td>
//                                         </tr>
//                                     </tbody>
//                                     <tbody>
//                                         <tr>
//                                             <td className="border w-[20%] italic font-semibold py-5">
//                                                 ln(RGDP)
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 7.581 <br /> (1287)
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 0.011 <br /> (112.0)
//                                             </td>
//                                             <td className="border w-[20%]">
//                                                 -0.0000094 <br /> (-29.60)
//                                             </td>
//                                             <td className="border w-[20%]">(-29.60) 0.997</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>

//                                 <p className="px-[20px] ">
//                                     The above table records the estimates of coefficients for
//                                     different time trend models and the value given in the bracket
//                                     in each cell is the t-statistic for the estimated parameter.
//                                     Which of the following statements can be said to be false?
//                                 </p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">
//                                         &nbsp;&nbsp;The linear time trend model suggests that the
//                                         growth in RGDP over one period is 59.38 billion.{" "}
//                                     </li>
//                                     <li className="marker:content-['B.']">
//                                         &nbsp;&nbsp;The log-linear time trend model suggests that
//                                         the growth rate of RGDP over one period is 0.79%{" "}
//                                     </li>
//                                     <li className="marker:content-['C.']">
//                                         &nbsp;&nbsp;The{" "}
//                                         <span className="font-semibold italic text-[115%]">
//                                             R<sup>2</sup>
//                                         </span>{" "}
//                                         of the log-linear time trend model suggests that the model
//                                         can explain 99% of the variation in the growth rate and
//                                         hence the model is more reliable compared to the linear time
//                                         trend model.{" "}
//                                     </li>
//                                     <li className="marker:content-['D.']">
//                                         &nbsp;&nbsp;The quadratic log-linear time trend model
//                                         suggests that the initial growth rate is higher
//                                         (approximately &nbsp;1.1%) but it is slowly declining.{" "}
//                                     </li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.5.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[5] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(5)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[5] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is C.</b>
//                                         <br />
//                                         All the statements are correct except for the statement
//                                         given in Option C. The value of{" "}
//                                         <span className="font-semibold italic text-[115%]">
//                                             R<sup>2</sup>
//                                         </span>{" "}
//                                         is 99% which is quite high and may give an impression that
//                                         the model is a good fit for the data. However, high{" "}
//                                         <span className="font-semibold italic text-[115%]">
//                                             R<sup>2</sup>
//                                         </span>{" "}
//                                         in trending series are inevitable, and the{" "}
//                                         <span className="font-semibold italic text-[115%]">
//                                             R<sup>2</sup>
//                                         </span>{" "}
//                                         will approach 100% in all of four specifications as the
//                                         sample size grows. In practice ,
//                                         <span className="font-semibold italic text-[115%]">
//                                             R<sup>2</sup>
//                                         </span>{" "}
//                                         is not considered to be a useful measure in trending time
//                                         series. Instead, residual diagnostics or other formal tests
//                                         are used to assess model adequacy.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {active === "fmp" && (
//                     <div className="text-center ">
//                         <h1 className="text-[20px] sm:text-[30px] lg:text-[40px] font-semibold text-center">
//                             Financial Market And Products  (FMP)
//                         </h1>
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.1.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     A 50-year-old woman has purchased INR 5,000,000 whole life
//                                     insurance from ABC Company and agrees to pay INR 40,000 as a
//                                     yearly premium. The company wishes to find out the expected
//                                     amount of the premium available for investment. Based on the
//                                     information given in the table below, find out the expected
//                                     amount of premium available for investment in the second year?
//                                 </p>
//                                 <table
//                                     style={{
//                                         width: "50%",
//                                         margin: "auto",
//                                         borderCollapse: "collapse",
//                                         border: "1px solid black",
//                                     }}
//                                 >
//                                     <thead>
//                                         <tr>
//                                             <th style={{ border: "1px solid black", padding: "8px" }}>
//                                                 Age
//                                             </th>
//                                             <th style={{ border: "1px solid black", padding: "8px" }}>
//                                                 Mortality Rate
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td style={{ border: "1px solid black", padding: "8px" }}>
//                                                 50
//                                             </td>
//                                             <td style={{ border: "1px solid black", padding: "8px" }}>
//                                                 0.003189
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td style={{ border: "1px solid black", padding: "8px" }}>
//                                                 51
//                                             </td>
//                                             <td style={{ border: "1px solid black", padding: "8px" }}>
//                                                 0.003488
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td style={{ border: "1px solid black", padding: "8px" }}>
//                                                 52
//                                             </td>
//                                             <td style={{ border: "1px solid black", padding: "8px" }}>
//                                                 0.003795
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;17,385 </li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;22,560 </li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;22,615 </li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp;17,440 </li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.1.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[10] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(10)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[10] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is C.</b>
//                                         <br />
//                                         In order to find the expected amount available for
//                                         investment, it is important to first find out the expected
//                                         payout. The expected payout can be calculated by considering
//                                         the probability that the woman will die during the second
//                                         year and not the first year. This can be calculated as -
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?&space;P(\text{not&space;dieing&space;in&space;first&space;year})\times&space;P(\text{dieing&space;in&space;second&space;year})\\=\left(1-P(\text{dieing&space;in&space;first&space;year})\right)\times&space;P(\text{dieing&space;in&space;the&space;second&space;year})\\=(1-0.003189)\times&space;0.003488=0.003477&space;"
//                                             alt=""
//                                             className="mx-auto align-middle h-[76px] my-4"
//                                         />
//                                         The expected payout for the company in second year will
//                                         therefore be -
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?0.003477\times&space;5{,}000{,}000=17{,}385&space;"
//                                             alt=""
//                                             className="mx-auto align-middle h-6 my-3"
//                                         />
//                                         The amount available for investment in second year is
//                                         therefore -
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?40{,}000-17{,}385=22{,}615&space;"
//                                             alt=""
//                                             className="mx-auto align-middle h-6 my-3"
//                                         />
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.2.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     A tech company requires silver to prepare components of a
//                                     product. It finds out that the cost of goods sold is impacted
//                                     heavily due to the change in the price of silver. In a
//                                     meeting, one of the board members suggests to hedge the price
//                                     risk associated with silver. Another member suggests that
//                                     there may be high volatility in the prices of silver, but it
//                                     is not always the case that the price of silver increases. If
//                                     the price decreases, then hedging will lead to a reduction in
//                                     the profits of the company. They then seek the advice of their
//                                     Chief Risk Officer. What should be recommended by the CRO?
//                                 </p>
//                                 <ul className="list-decimal list-outside mt-7 ml-5 px-[20px]">
//                                     <li className="marker:content-['A.']">
//                                         &nbsp;&nbsp;Hedging the price of silver can lead to a
//                                         reduction of profits in some instances and hence the company
//                                         should avoid hedging and look for other alternatives to
//                                         reduce the price risk.{" "}
//                                     </li>
//                                     <li className="marker:content-['B.']">
//                                         &nbsp;&nbsp;Hedging the price of silver can lead to a
//                                         reduction of the profits in some instances and hence the
//                                         company should build models to predict the prices of silver
//                                         with high accuracy and hedging should be done accordingly.{" "}
//                                     </li>
//                                     <li className="marker:content-['C.']">
//                                         &nbsp;&nbsp;Hedging the price of silver can lead to a
//                                         reduction of the profits in some instances and hence the
//                                         company should try to acquire stakes in silver-producing
//                                         companies so that losses in the core business will be offset
//                                         by profits in the silver-producing company.{" "}
//                                     </li>
//                                     <li className="marker:content-['D.']">
//                                         &nbsp;&nbsp;Hedging the price of silver can lead to a
//                                         reduction of the profits in some instances but if options
//                                         are used to hedge then it can be cost effective and at the
//                                         same time it will give us the right to hedge the risk.{" "}
//                                     </li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.2.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[11] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(11)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[11] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is D.</b>
//                                         <br />
//                                         Hedging the price of silver can lead to a reduction of
//                                         profits in some instances, but if options are used to hedge,
//                                         it can be cost-effective, and at the same time, it will give
//                                         the company the right to hedge the risk. <br />
//                                         Options provide the company with the flexibility to hedge
//                                         against adverse price movements while allowing them to
//                                         benefit from favorable price movements. By using options,
//                                         the company can limit its downside risk while still
//                                         participating in potential upside movements. This approach
//                                         allows for more nuanced risk management compared to simple
//                                         futures contracts, which can lead to profit reduction if
//                                         prices move unfavorably.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.3.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     A 3-month forward contract on Soybean has a forward price of
//                                     $651.63 per metric ton. It was found that the risk-free rate
//                                     is 3% per annum and the spot price of soybean is $650. How can
//                                     a trader make an arbitrage profit here?
//                                 </p>
//                                 <ul className="list-decimal list-outside mt-7 ml-5 px-[20px]">
//                                     <li className="marker:content-['A.']">
//                                         &nbsp;&nbsp; Sell soybean in the spot market and take a long
//                                         position in the forward contract to buy it back after 2
//                                         months.{" "}
//                                     </li>
//                                     <li className="marker:content-['B.']">
//                                         &nbsp;&nbsp; Buy soybean in the spot market and take a short
//                                         position in the forward contract to sell it after 2 months.{" "}
//                                     </li>
//                                     <li className="marker:content-['C.']">
//                                         &nbsp;&nbsp; Buy soybean in the spot market and take a long
//                                         position in the forward contract to buy it back after 2
//                                         months.{" "}
//                                     </li>
//                                     <li className="marker:content-['D.']">
//                                         &nbsp;&nbsp; No arbitrage opportunity exists.{" "}
//                                     </li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.3.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[12] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(12)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[12] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is D.</b>
//                                         <br />
//                                         Although the theoretical forward price is greater than the
//                                         actual forward price, in the case of commodities, the
//                                         theoretical forward price gives the upper bound of prices
//                                         and the arbitrage opportunities only exists when the actual
//                                         forward price is greater than the theoretical forward price.
//                                         So, there are no arbitrage opportunities in this case.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.4.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     A European call and a put option on the same underlying stock,
//                                     have a strike price,
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{K=\$40}"
//                                         className="inline align-middle h-4"
//                                     />{" "}
//                                     , and the time to maturity,
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{T=0.5}"
//                                         className="inline align-middle h-4"
//                                     />{" "}
//                                     years. The current price of the underlying stock,
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{S_{0}=\$40}"
//                                         className="inline align-middle h-4"
//                                     />{" "}
//                                     and the risk-free rate,
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{R=3.0%}"
//                                         className="inline align-middle h-4"
//                                     />{" "}
//                                     . It was found that, if the time to maturity of both options
//                                     is changed from{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{0.5}"
//                                         className="inline align-middle h-4"
//                                     />{" "}
//                                     years to{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{1}"
//                                         className="inline align-middle h-4"
//                                     />{" "}
//                                     year and all other specifications are kept constant, then the
//                                     change in the value of the call option was{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{\$1.324}"
//                                         className="inline align-middle h-4"
//                                     />{" "}
//                                     . What will be the change in the value of the put option?
//                                 </p>
//                                 <ul className="list-decimal list-outside mt-7 ml-5 px-[20px]">
//                                     <li className="marker:content-['A.']">
//                                         &nbsp;&nbsp; $0.738{" "}
//                                     </li>
//                                     <li className="marker:content-['B.']">
//                                         &nbsp;&nbsp; $1.324{" "}
//                                     </li>
//                                     <li className="marker:content-['C.']">
//                                         &nbsp;&nbsp; $1.910{" "}
//                                     </li>
//                                     <li className="marker:content-['D.']">
//                                         &nbsp;&nbsp; $0.000{" "}
//                                     </li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.4.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[13] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(13)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[13] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is A.</b>
//                                         <br />
//                                         We can use the put-call parity to find the change in the
//                                         value of the put option. But since the initial prices of
//                                         call and put options are not known, let us assume that these
//                                         are C and P respectively. Also, the change in the price of
//                                         the call option is $1.324, and let us assume that the change
//                                         in the price of the put option is x. Now, when the time to
//                                         maturity is increased to 1 year, the put-call parity can be
//                                         given as -
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?(C&plus;1.324)&plus;PV(40)=(P&plus;x)&plus;40\\\implies&space;C&plus;1.324&plus;40\times&space;e^{-0.03\times&space;1}=P&plus;x&plus;40\implies&space;P&plus;x=C&plus;0.142&space;"
//                                             alt=""
//                                             className="mx-auto align-middle h-14 my-3"
//                                         />
//                                         <br />
//                                         When the time to maturity is assumed to be 6 months, the
//                                         put-call parity can be given as -
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?C&plus;40\times&space;e^{-0.03\times&space;0.5}=P&plus;40\implies&space;P=C-0.596&space;"
//                                             alt=""
//                                             className="mx-auto align-middle h-6  my-3"
//                                         />
//                                         Substituting the value of in equation we get
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?C-0.596&plus;x=C&plus;0.142\implies&space;x=0.142&plus;0.596=0.738&space;"
//                                             alt=""
//                                             className="mx-auto align-middle h-6  my-3"
//                                         />
//                                         Therefore, the value of the put option will increase by
//                                         $0.738
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.5.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     Suppose a bond that can be delivered under the terms of a
//                                     futures contract on October 15 2022 is known. This bond pays a
//                                     coupon at the rate of 8% p.a. paid semi-annually and the last
//                                     coupon was paid on 1st February 2022. The date today is 25
//                                     March 2022 and the clean price of the bond is 108.42 with a
//                                     conversion factor of 1.04. What will be the dirty futures
//                                     quote if the term structure is flat at 4.5% per annum
//                                     compounded continuously?
//                                 </p>
//                                 <ul className="list-decimal list-outside mt-7 ml-5 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp; 109.56</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp; 108.32</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp; 109.04</li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp; 104.65</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.5.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[14] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(14)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[14] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is B.</b>
//                                         <br />
//                                         In order to calculate the dirty futures quote, first, we
//                                         need to find out the dirty price of the bond. This is -{" "}
//                                         <br />
//                                         <span className="text-[28px] text-center italic mx-auto align-middle block my-2">
//                                             Clean Price + Accrued Interest
//                                         </span>
//                                         The clean price of the bond is given as 108.42 and the
//                                         accrued interest can be calculated by finding the number of
//                                         days between the last coupon date and today and, the last
//                                         coupon date and next coupon date. The timeline for the
//                                         contract is as given below -
//                                     </p>
//                                     <Image
//                                         src="/Delivery_Date.png"
//                                         alt="img"
//                                         className="mx-auto block w-[100%] max-w-[800px]"
//                                         width={800}
//                                         height={200}
//                                     />
//                                     <p>
//                                         The accrued interest will be &nbsp;
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{4\times\frac{52}{181}=1.15}"
//                                             alt=""
//                                             className="inline mx-auto align-middle h-[35px] my-3"
//                                         />{" "}
//                                         &nbsp; and the dirty price of the bond will be{" "}
//                                         <img
//                                             src=" https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{108.42&plus;1.15=109.57}"
//                                             alt=""
//                                             className="inline mx-auto align-middle h-5 my-3"
//                                         />
//                                         The present value of the coupon that will be received on
//                                         next coupon date will be - <br />{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{4\times&space;e^{-0.045\times&space;0.353425}=3.94}"
//                                             alt=""
//                                             className=" mx-auto align-middle h-6 my-3"
//                                         />{" "}
//                                         <br />
//                                         The dirty futures price can now be calculated as - <br />{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{(S-I)\times&space;e^{rT}=(109.57-3.94)\times&space;e^{0.045\times&space;0.558904}=108.32}"
//                                             alt=""
//                                             className="mx-auto align-middl h-7 my-3"
//                                         />
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {active === "vrm" && (
//                     <div>
//                         <h1 className="text-[20px] sm:text-[30px] lg:text-[40px] font-semibold text-center">
//                             Valuation And Risk Models  (VRM)
//                         </h1>
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.1.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     An analyst used the historical simulation method to estimate
//                                     the 1-day 99%{" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         VaR
//                                     </span>{" "}
//                                     . She found out the underlying variables are{" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         iid
//                                     </span>{" "}
//                                     but the distributions of the underlying variables are unknown.
//                                     She found the value of{" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         VaR
//                                     </span>{" "}
//                                     to be equal to $2.1 million. Later on, her senior told her
//                                     that the{" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         VaR
//                                     </span>{" "}
//                                     was supposed to be calculated for a 10-day period and not a
//                                     1-day period. What should be done by the analyst to rectify
//                                     her mistake?
//                                 </p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">
//                                         &nbsp;&nbsp;She should re-estimate all the parameters and
//                                         repeat the historical simulation procedure by assuming 1
//                                         period as 10-days.
//                                     </li>
//                                     <li className="marker:content-['B.']">
//                                         &nbsp;&nbsp;She should use the delta-normal method instead
//                                         of historical simulation because the{" "}
//                                         <span className="italic font-semibold text-[25px] tracking-wider">
//                                             VaR
//                                         </span>{" "}
//                                         for any period can be calculated by simply using the square
//                                         root rule, i.e., if the{" "}
//                                         <span className="italic font-semibold text-[25px] tracking-wider">
//                                             VaR
//                                         </span>{" "}
//                                         for 1 period is known then{" "}
//                                         <span className="italic font-semibold text-[25px] tracking-wider">
//                                             T
//                                         </span>{" "}
//                                         period{" "}
//                                         <span className="italic font-semibold text-[25px] tracking-wider">
//                                             VaR
//                                         </span>{" "}
//                                         can be calculated by multiplying 1 period{" "}
//                                         <span className="italic font-semibold text-[25px] tracking-wider">
//                                             VaR
//                                         </span>{" "}
//                                         by{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\sqrt{T}}"
//                                             alt=""
//                                             className="inline mx-auto align-middle h-7 my-3"
//                                         />
//                                         .
//                                     </li>
//                                     <li className="marker:content-['C.']">
//                                         &nbsp;&nbsp;She can simply use the square root rule to
//                                         extend the result for the 10-day period by multiplying 1-day{" "}
//                                         <span className="italic font-semibold text-[25px] tracking-wider">
//                                             VaR
//                                         </span>{" "}
//                                         with{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\inline&space;\boldsymbol{\sqrt{T}}"
//                                             alt=""
//                                             className="inline mx-auto align-middle h-7 my-3"
//                                         />
//                                         .
//                                     </li>
//                                     <li className="marker:content-['D.']">
//                                         &nbsp;&nbsp;She can either use the approach given in option
//                                         B or C.
//                                     </li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.1.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[15] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(15)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[15] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is C.</b>
//                                         <br />
//                                         There is no need to re-estimate the parameters and repeat
//                                         the historical simulation procedure and she can directly
//                                         apply the square root rule to arrive at the desired result.{" "}
//                                         <br />
//                                         She cannot use the delta normal approach because there is no
//                                         mention of a linear relationship of the portfolio value with
//                                         the underlying variables. Also, the distribution of the
//                                         underlying variables is not known and the delta- normal
//                                         method assumes the underlying variables to be normally
//                                         distributed. If this assumption is made then it will lead to
//                                         less accurate results. <br />
//                                         Also, in order to apply the square root rule, the only
//                                         condition necessary is that the variables to be should be{" "}
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\boldsymbol{iid}"
//                                             alt=""
//                                             className="inline align-middle h-5 "
//                                         />
//                                         . When nothing is mentioned about this property then the
//                                         square root rule can be assumed to be true by convention.
//                                         This is given in the question and hence we can safely use
//                                         the square root rule with the calculated 1- day{" "}
//                                         <span className="italic font-semibold text-[25px] tracking-wider">
//                                             VaR
//                                         </span>{" "}
//                                         to arrive at the required answer.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.2.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     It is given that the 1-year default probability for a bond is
//                                     0.18%. If the bond has time left to maturity of 3 months, then
//                                     what is the probability that it will default in this 3-months
//                                     period?
//                                 </p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;0.180%</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;0.090%</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;0.045%</li>
//                                     <li className="marker:content-['D.']">
//                                         &nbsp;&nbsp;Cannot be determined
//                                     </li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.2.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[16] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(16)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[16] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is C.</b>
//                                         <br />
//                                         It is given that the default probability for 1 year is
//                                         0.18%. In order to find out the default probability for the
//                                         next 3-months period, we need to find out the hazard rate
//                                         first. This can be calculated as follows - <br />
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\boldsymbol{1-e^{-ht}}"
//                                             alt=""
//                                             className=" align-middle h-5 mx-auto"
//                                         />
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\boldsymbol{1 - e^{-h \times 1} = 0.0018 \implies e^{-h} = 1 - 0.0018}"
//                                             alt=""
//                                             className=" mx-auto align-middle h-7 my-5 "
//                                         />
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\boldsymbol{\implies\ln(e^{-h})=\ln(1-0.0018)\implies-h=\ln(0.9982)\implies&space;h=-\frac{0.001802}{-1}=0.001802=0.1802\%}"
//                                             alt=""
//                                             className=" mx-auto align-middle h-[60px]   "
//                                         />
//                                         Next, the probability of default for the bond over 3-months
//                                         period can be calculated as - <br />
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\boldsymbol{1 - e^{-ht} = 1 - e^{-0.001802 \times 0.25} = 0.00045 = 0.045\%}"
//                                             alt=""
//                                             className="mx-auto align-middle h-7 my-3 "
//                                         />
//                                         Alternatively, the hazard rate for the question can be
//                                         directly assumed to be the 1-year default probability. The
//                                         answer would remain the same.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">
//                                 Q.3.
//                             </h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     An internal rating model that has been developed and used by
//                                     banks to rate the borrowers (specifically publicly traded
//                                     manufacturing firms) internally is the z-score. In this model,
//                                     five ratios are considered namely, working capital to total
//                                     assets{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{\left(X_{1}\right)}"
//                                         alt=""
//                                         className="inline align-middle h-6 "
//                                     />{" "}
//                                     , retained earnings to total assets{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{\left(X_{2}\right)}"
//                                         alt=""
//                                         className="inline align-middle h-6  "
//                                     />
//                                     , earnings before interest and taxes to total assets{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{\left(X_{3}\right)}"
//                                         alt=""
//                                         className="inline align-middle h-6  "
//                                     />{" "}
//                                     , market value of equity to book value of total liabilities{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{\left(X_{4}\right)}"
//                                         alt=""
//                                         className="inline align-middle h-6  "
//                                     />{" "}
//                                     and sales to total assets{" "}
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{\left(X_{5}\right)}"
//                                         alt=""
//                                         className="inline align-middle h-6 "
//                                     />{" "}
//                                     . If the z-score is given as -
//                                     <img
//                                         src="https://latex.codecogs.com/svg.image?\boldsymbol{Z = 1.2X_1 + 1.4X_2 + 3.3X_3 + 0.6X_4 + 0.999X_5}"
//                                         alt=""
//                                         className="mx-auto align-middle h-7 my-3 "
//                                     />{" "}
//                                     <br />
//                                     For 5 manufacturing firms, a bank found out following details
//                                     about the five ratios -
//                                 </p>
//                                 <ul className="list-disc list-inside mt-7 px-[20px]">
//                                     <li>
//                                         For firm 1 -
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>1</sub>
//                                         </span>{" "}
//                                         is <span className="italic font-bold text-[25px]">0.8</span>{" "}
//                                         ,{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>2</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             1 , X<sub>3</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             {" "}
//                                             0.5 , X<sub>4</sub>
//                                         </span>{" "}
//                                         is <span className="font-semibold text-[25px]">1.2 </span>{" "}
//                                         and{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>5</sub>
//                                         </span>{" "}
//                                         is <span className="font-semibold text-[25px]">1 </span>{" "}
//                                     </li>
//                                     <li>
//                                         For firm 1 -
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>1</sub>
//                                         </span>{" "}
//                                         is <span className="italic font-bold text-[25px]">0.4</span>{" "}
//                                         ,{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>2</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             0.7 , X<sub>3</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             {" "}
//                                             0.2 , X<sub>4</sub>
//                                         </span>{" "}
//                                         is <span className="font-semibold text-[25px]">1 </span> and{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>5</sub>
//                                         </span>{" "}
//                                         is <span className="font-semibold text-[25px]">0.7 </span>{" "}
//                                     </li>
//                                     <li>
//                                         For firm 1 -
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>1</sub>
//                                         </span>{" "}
//                                         is <span className="italic font-bold text-[25px]">0.1</span>{" "}
//                                         ,{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>2</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             0.4 , X<sub>3</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             {" "}
//                                             -0.3 , X<sub>4</sub>
//                                         </span>{" "}
//                                         is <span className="font-semibold text-[25px]">1.2 </span>{" "}
//                                         and{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>5</sub>
//                                         </span>{" "}
//                                         is <span className="font-semibold text-[25px]">0.2 </span>{" "}
//                                     </li>
//                                     <li>
//                                         For firm 1 -
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>1</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">-0.1</span> ,{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>2</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             -0.2 , X<sub>3</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             {" "}
//                                             -0.1 , X<sub>4</sub>
//                                         </span>{" "}
//                                         is <span className="font-semibold text-[25px]">2 </span> and{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>5</sub>
//                                         </span>{" "}
//                                         is <span className="font-semibold text-[25px]">1 </span>{" "}
//                                     </li>
//                                     <li>
//                                         For firm 1 -
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>1</sub>
//                                         </span>{" "}
//                                         is <span className="italic font-bold text-[25px]">0.1</span>{" "}
//                                         ,{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>2</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             0.2 , X<sub>3</sub>
//                                         </span>{" "}
//                                         is{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             {" "}
//                                             0.2 , X<sub>4</sub>
//                                         </span>{" "}
//                                         is <span className="font-semibold text-[25px]">0.4 </span>{" "}
//                                         and{" "}
//                                         <span className="italic font-bold text-[25px]">
//                                             X<sub>5</sub>
//                                         </span>{" "}
//                                         is <span className="font-semibold text-[25px]">0.5 </span>{" "}
//                                     </li>
//                                 </ul>
//                                 <div className="px-[20px] flex flex-col gap-3 mt-4">
//                                     <p>Based on the above results, the credit officials were
//                                         discussing about the risk that the bank will be exposed to if,
//                                         they extend loans to these firms.</p>
//                                     <p>Officer 1 said, “the risk
//                                         associated with firm 3 and 4 is highest, as their default
//                                         probability is quite high.”</p>
//                                     <p>Officer 2 said, “Although the
//                                         z-score of both firm 1 and 2 are quite high but for extending
//                                         loans firm 1 should be preferred over firm 2.”</p>
//                                     <p>Officer 3 said,
//                                         “We can straightaway reject the loan application of firm 3, as
//                                         lending to this firm can result in high expected loss.”</p>
//                                     <p>From the statements made above by the officers, who is incorrect?</p>
//                                 </div>

//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;Only officer 1</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;Only officer 2</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;Only officer 3</li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp;None are incorrect</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.3.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[17] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(17)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[17] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is D.</b>
//                                         <br />
//                                         In order to check the creditworthiness of firms based on the Z-score model, first, we need to calculate the Z-scores for each of these firms. <br />
//                                         For firm 1 the Z-score can be calculated as - <br />
//                                         <img
//                                             src="https://latex.codecogs.com/svg.image?\boldsymbol{Z = 1.2 \times 0.8 + 1.4 \times 1 + 3.3 \times 0.5 + 0.6 \times 1.2 + 0.999 \times 1 = 5.729}"
//                                             alt=""
//                                             className="mx-auto align-middle h-7 my-3 "
//                                         />
//                                         Calculations can be done in a similar way to find out the Z-scores for firms 2, 3, 4 and 5. For firm 2 it is 3.419, for firm 3 it is 0.61, for firm 4 it is 1.469 and for firm 5 it is 1.799. <br />
//                                         A Z-score above 3 indicates that the firm is unlikely to default. As the Z-score decreases, the probability of default increases to the point where a firm with a Z-score below 1.8 has a very high probability of defaulting. <br />
//                                         The statement of officer 1 is correct. Both firms 3 and 4 have Z-scores less than 1.8 indicating that their default probability is quite high and hence the risk is high. <br />
//                                         The statement of officer 2 is correct. Both firms 1 and 2 have high Z-scores suggesting that their probability of default is sufficiently low. But the Z-score of firm 1 is much higher than firm 2 suggesting that firm 1 has an even lower chance of default. This makes firm 1 the safest option for the bank. <br />
//                                         The statement of officer 3 is correct. Firm 3 has the lowest Z-score and hence the probability of default is the highest of all five firms under consideration. Since the expected loss is directly related to probability, the expected loss will be high in case of firm 3. <br />
//                                         Therefore, Option D is correct.

//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">Q.4.</h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     A bank has a portfolio worth{" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         $2
//                                     </span>{" "} million. It was found that the duration and convexity of the position are{" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         4
//                                     </span>{" "} and  {" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         12
//                                     </span>{" "} per
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         $100
//                                     </span>{" "} face value of the bond, respectively. The bank wishes to hedge against this exposure using two hedging instruments.{" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         A
//                                     </span>{" "} and {" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         B
//                                     </span>{" "}
//                                     Duration and convexity of instrument {" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         A
//                                     </span>{" "} is  <span className="italic font-semibold text-[25px] tracking-wider">
//                                         5
//                                     </span>{" "} and
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         10
//                                     </span>{" "} and that of instrument{" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         B
//                                     </span>{" "} is{" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         3
//                                     </span>{" "} and{" "}
//                                     <span className="italic font-semibold text-[25px] tracking-wider">
//                                         8
//                                     </span>{" "}, respectively. What should be the position taken in each of these instruments, so that the portfolio becomes invariant to large parallel shifts in term structure?
//                                 </p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;Buy $0.8 million worth of instrument A and sell $4 million worth of instrument B.</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;Sell $0.8 million worth of instrument B and sell $4 million worth of instrument A.</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;Buy $0.8 million worth of instrument A and buy $4 million worth of instrument B.</li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp;Sell $4 million worth of instrument A and buy $0.8 million worth of instrument B.</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.4.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[16] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(16)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[16] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is A.</b>
//                                         <br />
//                                         In order to hedge, the investor must invest in both instrument{" "}<span className="italic font-semibold text-[25px] tracking-wider">A</span>{" "}
//                                         as well as instrument
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">B.</span>{" "}
//                                         If the position taken in instrument
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">A</span>{" "} is
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">x</span>{" "}
//                                         and position taken in instrument
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">B</span>{" "} is
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">y.</span>{" "}
//                                         Then the position can be hedged if -
//                                         <span className="flex items-center gap-[20px]">

//                                             <img
//                                                 src="https://latex.codecogs.com/svg.image?\boldsymbol{5x + 3y + 4 \times 2 = 0}"
//                                                 alt=""
//                                                 className="mx-auto align-middle h-7 my-3 "
//                                             />
//                                             {" "}<span className="italic font-semibold text-[25px] tracking-wider">and</span>{" "}
//                                             <img
//                                                 src="https://latex.codecogs.com/svg.image?\boldsymbol{10x + 8y + 12 \times 2 = 0}"
//                                                 alt=""
//                                                 className="mx-auto align-middle h-7 my-3 "
//                                             />
//                                         </span>
//                                         Solving these two equations we will get
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">x = 0.8</span>{" "} and
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">y = -4.</span>{" "}Therefore, buy
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">$0.8</span>{" "}million worth of instrument
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">A</span>{" "} and sell
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">$4</span>{" "} million worth of instrument
//                                         {" "}<span className="italic font-semibold text-[25px] tracking-wider">B.</span>{" "} <br />
//                                         Therefore, <b>Option A is correct.</b>

//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr className="w-[80%] mx-auto my-8" />
//                         <div className="my-5">
//                             <h2 className="text-xl font-semibold text-left px-[20px]">Q.5.</h2>
//                             <div className="text-left text-[18px]">
//                                 <p className="px-[20px] ">
//                                     A portfolio consists of stocks of company A and the options on the stocks of the same Company. An analyst found out that although the portfolio is delta neutral, it is exposed to gamma. The further analysis helped him to identify that the gamma is positive for the portfolio. What action should be taken by the analyst to make the portfolio both delta and gamma neutral?

//                                 </p>
//                                 <ul className="list-decimal list-inside mt-7 px-[20px]">
//                                     <li className="marker:content-['A.']">&nbsp;&nbsp;Buy call options on stock and buy stock</li>
//                                     <li className="marker:content-['B.']">&nbsp;&nbsp;Sell call options on stock and sell stock</li>
//                                     <li className="marker:content-['C.']">&nbsp;&nbsp;Buy put options on stock and sell stock</li>
//                                     <li className="marker:content-['D.']">&nbsp;&nbsp;Sell put options on stock and sell stock</li>
//                                 </ul>
//                                 <h2 className="text-xl font-semibold text-left px-[20px] my-2 mt-4">
//                                     A.5.
//                                 </h2>
//                                 <div
//                                     className={`overflow-hidden answer-container bg-[#F4F4F4] rounded-xl px-[20px] py-3 ${expandedAnswers[16] ? "h-auto" : "h-[50px]"
//                                         }`}
//                                 >
//                                     <button
//                                         className="flex items-center text-[#BE4E1E] focus:outline-none"
//                                         onClick={() => handleToggleAnswer(16)}
//                                     >
//                                         <span className="ml-1">View Answer</span>
//                                         <span
//                                             className={`transform transition-transform ${expandedAnswers[16] ? "rotate-90" : ""
//                                                 }`}
//                                         >
//                                             <RiArrowRightSLine className="text-[25px]" />
//                                         </span>
//                                     </button>
//                                     <p className="my-3 leading-[30px]">
//                                         <b>The Correct Answer is D.</b>
//                                         <br />
//                                         Gamma is positive for both call and put options and to reduce gamma the analyst should sell options (both call and put). Two different sets of trades possible for this are -

//                                     </p>
//                                     <ul className="list-roman px-[20px]">
//                                         <li>If call options are used – The long position in Call options have a positive delta. When call options are sold to reduce the gamma exposure, the analyst takes a short position. When this short position is taken, it will lead to a negative delta exposure for the portfolio. In order to make the portfolio delta neutral, analyst will have to buy the stocks. So, using call options the correct trade will be to sell the call options on stock and buy stock.</li>
//                                         <li>If put options are used – The long position in put options have negative delta. When put options are sold to reduce the gamma exposure, the analyst takes short position. When this short position is taken, it will lead to a positive delta exposure for the portfolio. In order to make the portfolio delta neutral, analyst will have to sell the stocks. So, using put options the correct trade will be to sell the put options on stock and sell stock.</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
               
//             </div>
//             <style jsx>{`
//         .transition-all {
//           transition: height 1s ease-in-out;
//         }
//       `}</style>
//         </>
//     );
// }
