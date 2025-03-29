"use client";
import React, { useState } from "react";
import { PiVideoDuotone } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import TabsComponent from "@/components/Tabs/TabsComponent";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa6";

export default function Study_plan2() {
  const [activeOverview, setActiveOverview] = useState("overview");

  const handleOverviewClick = (overview) => {
    setActiveOverview(overview);
  };

  return (
    <div className="">
      <div className="bg-[#6A1C1A] p-7">
        <h1 className="text-[20px]  sm:text-[40px] text-white text-center">
          FRM Part 2 - <span className="font-semibold">STUDY PLAN 2025</span>
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto ">
        <div className="sm:flex justify-start">
          <div className="w-[25%] text-center hidden sm:block">
            <ul className="m-2 sm:m-1 py-8 sm:py-10 bg-gradient-to-b from-[#FFF6E5] to-[#FFFFFF]">
              <li onClick={() => handleOverviewClick("overview")} className={`cursOR&#8209;pointer mb-[55px] sm:my-9 ${activeOverview === "overview" ? "text-[#de6446]" : ""} ${activeOverview === null ? "text-[#de6446]" : ""}`}>
                <CgNotes className="mx-auto text-[25px] sm:text-[40px]" />
                <h1 className="text-[12px] sm:text-[20px]">Overview</h1>
              </li>
              <li onClick={() => handleOverviewClick("Instructor's Notes")} className={`cursOR&#8209;pointer my-[48px] sm:my-9 ${activeOverview === "Instructor's Notes" ? "text-[#d55d4f]" : ""}`}>
                <GrNotes className="mx-auto text-[25px] sm:text-[40px]" />
                <h1 className="text-[12px] sm:text-[20px]">Instructor&apos;s Notes</h1>
              </li>
              <li onClick={() => handleOverviewClick("Video Explanation")} className={`cursOR&#8209;pointer mt-[55px] sm:my-9 ${activeOverview === "Video Explanation" ? "text-[#d5584a]" : ""}`}>
                <PiVideoDuotone className="mx-auto text-[25px] sm:text-[40px]" />
                <h1 className="text-[12px] sm:text-[20px]">Video Explanation</h1>
              </li>
            </ul>
          </div>
          <ul className="sm:m-1 py-8 sm:py-10 text-center bg-gradient-to-b from-[#FFF6E5] to-[#FFFFFF] flex justify-around  w-[100%] sm:hidden">
            <li onClick={() => handleOverviewClick("overview")} className={`cursOR&#8209;pointer  ${activeOverview === "overview" ? "text-[#de6446]" : ""} ${activeOverview === null ? "text-[#de6446]" : ""}`}>
              <CgNotes className="mx-auto text-[25px] sm:text-[40px]" />
              <h1 className="text-[12px] sm:text-[20px] text-center">Overview</h1>
            </li>
            <li onClick={() => handleOverviewClick("Instructor's Notes")} className={`cursOR&#8209;pointer  ${activeOverview === "Instructor's Notes" ? "text-[#d55d4f]" : ""}`}>
              <GrNotes className="mx-auto text-[25px] sm:text-[40px]" />
              <h1 className="text-[12px] sm:text-[20px] text-center">Instructor&apos;s<br className="sm:hidden" /> Notes</h1>
            </li>
            <li onClick={() => handleOverviewClick("Video Explanation")} className={`cursOR&#8209;pointer ${activeOverview === "Video Explanation" ? "text-[#d5584a]" : ""}`}>
              <PiVideoDuotone className="mx-auto text-[25px] sm:text-[40px]" />
              <h1 className="text-[12px] sm:text-[20px] text-center">Video<br className="sm:hidden" /> Explanation</h1>
            </li>
          </ul>
          <div className="w-[100%] sm:w-[75%] sm:my-5 sm:mx-3 sm:p-5 px-5 rounded-xl text-[12px] sm:text-[18px] md:text-[22px] sm:zm-1">
            {activeOverview === "overview" && (
              <div className="text-[12px] sm:text-[18px] md:text-[22px]  ">
                The FRM Part 2 study plan is designed to build upon the foundational knowledge gained in Part 1, diving deeper into specialized areas such as market risk, credit risk, operational risk, liquidity risk, investment management, and current issues in financial markets. This comprehensive plan aims to provide a thorough understanding of each topic, ensuring a balanced and in-depth preparation for the exam. <br />
                <span className="flex items-center mt-9 text-center mx-auto justify-center">
                  {" "}
                  Click&nbsp;{" "}
                  <a href="/part-2/MidhaFin_FRM_Part_2_Study_Plan.pdf" download className="text-blue-600 underline">
                    here{" "}
                  </a>
                  &nbsp;to download the Schedule as pdf. <FaFilePdf />
                </span>
              </div>
            )}
            {activeOverview === "Instructor's Notes" && <div className="text-[12px] sm:text-[18px] md:text-[22px]">Given the advanced nature of the FRM Part 2 syllabus, this study plan breaks down complex subjects into manageable weekly segments, allowing for systematic learning and application of concepts. Each week is structured to gradually build expertise, with emphasis on practical insights and real-world applications. Regular practice and block tests every four weeks are recommended to reinforce learning and ensure retention. The ideal preparation time for FRM Part 2 should be at least 600 hours spread over 9 to 12 months.</div>}
            {activeOverview === "Video Explanation" && <iframe className="aspect-video w-[100%] max-w-[660px] mx-auto my-auto" src="https://www.youtube.com/embed/U14Wf92Gwk4?si=74k44yBnyTMT9zvZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
          </div>
        </div>
      </div>
      <hr className="mx-auto w-[95%] my-5" />
      <div className="max-w-[1300px] mx-auto p-[20px]">
        <h1 className=" text-[20px] md:text-[32px] lg:text-[40px] font-bold text-center text-[#6A1C1A] mb-2 sm:mb-5 lg:mb-9">KEY used to represent the five modules:</h1>
        <div className="grid grid-cols-2 text-center">
          <div className="border-r border-b p-4">
            <h1 className="text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]">MR</h1>
            <p className="text-[12px] sm:text-[24px]">Market Risk Measurement and Management</p>
          </div>
          <div className="border-l border-b p-4">
            <h1 className="text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]">CR</h1>
            <p className="text-[12px] sm:text-[24px]">Credit Risk Measurement and Management</p>
          </div>
          <div className="border-t border-r border-b p-4">
            <h1 className="text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]">OR</h1>
            <p className="text-[12px] sm:text-[24px]">Operational Risk and Resiliency</p>
          </div>
          <div className="border-t border-l border-b p-4">
            <h1 className="text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]">LR</h1>
            <p className="text-[12px] sm:text-[24px]">Liquidity and Treasury Risk Management</p>
          </div>
          <div className="border-t border-r border-b p-4">
            <h1 className="text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]">IM</h1>
            <p className="text-[12px] sm:text-[24px]">Risk Management & Investment Management</p>
          </div>
          <div className="border-t border-l border-b p-4">
            <h1 className="text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]">CI</h1>
            <p className="text-[12px] sm:text-[24px]">Current Issues in Financial Markets </p>
          </div>
        </div>
      </div>
      <h1 className="text-[32px] text-[#6A1C1A] md:my-5 text-center font-bold">Schedule</h1>
      <TabsComponent items={items} />
    </div>
  );
}

const items = [
  {
    title: "Week 1-4",
    content: (
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#FFFDE8] px-2  rounded-xl border border-[#E4BFAF] py-9">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">01</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4 pb-0 w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF] sm:text-[25px]">MR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/estimating-market-risk-measures">
              <li className="text-[11px] sm:text-[18px]">
                Estimating Market Risk Measure – An Introduction and Overview <span className="text-[#BE4E1E]">[MR&#8209;1]</span>
              </li>
            </Link>
            <Link href="/part-2/non-parametric-approaches">
              <li className="text-[11px] sm:text-[18px]">
                Non-Parametric Approaches <span className="text-[#BE4E1E]">[MR&#8209;2]</span>
              </li>
            </Link>
            <Link href="/part-2/extreme-value">
              <li className="text-[11px] sm:text-[18px]">
                Parametric Approaches (II): Extreme Value <span className="text-[#BE4E1E]">[MR&#8209;3]</span>
              </li>
            </Link>
            <Link href="/part-2/backtesting-var">
              <li className="text-[11px] sm:text-[18px]">
                Backtesting VaR <span className="text-[#BE4E1E]">[MR&#8209;4]</span>
              </li>
            </Link>
            <Link href="/part-2/var-mapping">
              <li className="text-[11px] sm:text-[18px]">
                VaR Mapping <span className="text-[#BE4E1E]">[MR&#8209;5]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFFDE8] px-2  py-9 rounded-xl border border-[#E4BFAF] ">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">02</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4 pb-0  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF] sm:text-[25px]">IM</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/portfolio-risk-methods">
              <li className="text-[11px] sm:text-[18px]">
                Portfolio Risk - Analytical Methods <span className="text-[#BE4E1E]">[IM&#8209;5]</span>
              </li>
            </Link>
            <Link href="/part-2/var-risk-budgeting">
              <li className="text-[11px] sm:text-[18px]">
                VaR and Risk Budgeting in Investment Management <span className="text-[#BE4E1E]">[IM&#8209;6]</span>
              </li>
            </Link>
            <Link href="/part-2/risk-monitoring-performance">
              <li className="text-[11px] sm:text-[18px]">
                Risk Monitoring and Performance Measurement <span className="text-[#BE4E1E]">[IM&#8209;7]</span>
              </li>
            </Link>
            <Link href="/part-2/portfolio-performance-evaluation">
              <li className="text-[11px] sm:text-[18px]">
                Portfolio Performance Evaluation <span className="text-[#BE4E1E]">[IM&#8209;8]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFFDE8] px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">03</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF] sm:text-[25px]">MR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/non-parametric-approaches">
            </Link>
            <li className="text-[11px] sm:text-[18px]">
              Some Correlation Basics - Properties, Motivation, Terminology <span className="text-[#BE4E1E]">[MR&#8209;7]</span>
            </li>
            <Link href="/part-2/non-parametric-approaches">
            </Link>
            <li className="text-[11px] sm:text-[18px]">
              Empirical Properties of Correlation <span className="text-[#BE4E1E]">[MR&#8209;8]</span>
            </li>
            <Link href="/part-2/non-parametric-approaches">
            </Link>
            <li className="text-[11px] sm:text-[18px]">
              Financial Correlation Modeling—Bottom-Up Approaches <span className="text-[#BE4E1E]">[MR&#8209;9]</span>
            </li>
            <Link href="/part-2/non-parametric-approaches">
            </Link>
            <li className="text-[11px] sm:text-[18px]">
              Volatility Smiles <span className="text-[#BE4E1E]">[MR&#8209;15]</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#FFFDE8] px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">04</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">MR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/non-parametric-approaches">
            </Link>
            <li className="text-[11px] sm:text-[18px]">
              Empirical Approaches to Risk Metrics & Hedging <span className="text-[#BE4E1E]">[MR&#8209;10]</span>
            </li>
            <Link href="/part-2/non-parametric-approaches">
            </Link>
            <li className="text-[11px] sm:text-[18px]">
              The Science of Term Structure Models <span className="text-[#BE4E1E]">[MR&#8209;11] </span>
            </li>
            <Link href="/part-2/non-parametric-approaches">
            </Link>
            <li className="text-[11px] sm:text-[18px]">
              The Evolution of Short Rates & the Shape of the Term Structure <span className="text-[#BE4E1E]">[MR&#8209;12]</span>
            </li>
            <Link href="/part-2/non-parametric-approaches">
            </Link>
            <li className="text-[11px] sm:text-[18px]">
              The Art of Term Structure Models – Drift <span className="text-[#BE4E1E]">[MR&#8209;13]</span>
            </li>
            <Link href="/part-2/non-parametric-approaches">
            </Link>
            <li className="text-[11px] sm:text-[18px]">
              The Art of Term Structure Models – Volatility and Distribution <span className="text-[#BE4E1E]">[MR&#8209;14]</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Week 5-8",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#FFF9E6] px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">05</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">IM</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/factor-theory">
              <li className="text-[11px] sm:text-[18px]">
                Factor Theory <span className="text-[#BE4E1E]">[IM&#8209;1]</span>
              </li>
            </Link>
            <Link href="/part-2/factors">
              <li className="text-[11px] sm:text-[18px]">
                Factors <span className="text-[#BE4E1E]">[IM&#8209;2]</span>
              </li>
            </Link>
            <Link href="/part-2/alpha">
              <li className="text-[11px] sm:text-[18px]">
                Alpha (and the low-risk Anomaly) <span className="text-[#BE4E1E]">[IM&#8209;3]</span>
              </li>
            </Link>
            <Link href="/part-2/portfolio-construction">
              <li className="text-[11px] sm:text-[18px]">
                Portfolio Construction <span className="text-[#BE4E1E]">[IM&#8209;4]</span>
              </li>
            </Link>
            <Link href="/part-2/hedge-funds">
              <li className="text-[11px] sm:text-[18px]">
                Hedge Funds <span className="text-[#BE4E1E]">[IM&#8209;9]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFF9E6] px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">06</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4 w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">CR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/fundamentals-of-credit-risk">
              <li className="text-[11px] sm:text-[18px]">
                Fundamentals of Credit Risk <span className="text-[#BE4E1E]">[CR&#8209;1]</span>
              </li>
            </Link>
            <Link href="/part-2/governance">
              <li className="text-[11px] sm:text-[18px]">
                Governance <span className="text-[#BE4E1E]">[CR&#8209;2]</span>
              </li>
            </Link>
            <Link href="/part-2/credit-risk-management">
              <li className="text-[11px] sm:text-[18px]">
                Credit Risk Management <span className="text-[#BE4E1E]">[CR&#8209;3]</span>
              </li>
            </Link>
            <Link href="/part-2/credit-scoring-rating">
              <li className="text-[11px] sm:text-[18px]">
                Credit Scoring and Rating <span className="text-[#BE4E1E]">[CR&#8209;6]</span>
              </li>
            </Link>
            <Link href="/part-2/retail-credit-risk-management">
              <li className="text-[11px] sm:text-[18px]">
                Credit Scoring and Retail Credit Risk Management <span className="text-[#BE4E1E]">[CR&#8209;7]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFF9E6] px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">07</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">CR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/capital-structure-banks">
              <li className="text-[11px] sm:text-[18px]">
                Capital Structure in Banks <span className="text-[#BE4E1E]">[CR&#8209;4]</span>
              </li>
            </Link>
            <Link href="/part-2/credit-risk-modeling-assessment">
              <li className="text-[11px] sm:text-[18px]">
                Introduction to Credit Risk Modeling and Assessment <span className="text-[#BE4E1E]">[CR&#8209;5] </span>
              </li>
            </Link>
            <Link href="/part-2/estimating-default-probabilities">
              <li className="text-[11px] sm:text-[18px]">
                Estimating Default Probabilities <span className="text-[#BE4E1E]">[CR&#8209;9]</span>
              </li>
            </Link>
            <Link href="/part-2/credit-value-at-risk">
              <li className="text-[11px] sm:text-[18px]">
                Credit Value at Risk <span className="text-[#BE4E1E]">[CR&#8209;10]</span>
              </li>
            </Link>
            <Link href="/part-2/portfolio-credit-risk">
              <li className="text-[11px] sm:text-[18px]">
                Portfolio Credit Risk <span className="text-[#BE4E1E]">[CR&#8209;11]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFF9E6] px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">08</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF] sm:text-[25px]">CR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/credit-risk">
              <li className="text-[11px] sm:text-[18px]">
                Credit Risk <span className="text-[#BE4E1E]">[CR&#8209;12]</span>
              </li>
            </Link>
            <Link href="/part-2/credit-derivatives">
              <li className="text-[11px] sm:text-[18px]">
                Credit Derivatives <span className="text-[#BE4E1E]">[CR&#8209;13]</span>
              </li>
            </Link>
            <Link href="/part-2/derivatives">
              <li className="text-[11px] sm:text-[18px]">
                Derivatives <span className="text-[#BE4E1E]">[CR&#8209;14]</span>
              </li>
            </Link>
            <Link href="/part-2/counterparty-risk">
              <li className="text-[11px] sm:text-[18px]">
                Counterparty Risk and Beyond <span className="text-[#BE4E1E]">[CR&#8209;15]</span>
              </li>
            </Link>
            <Link href="/part-2/cva">
              <li className="text-[11px] sm:text-[18px]">
                CVA <span className="text-[#BE4E1E]">[CR&#8209;20]</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Week 9-12",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#FFF3E5] px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">09</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center leading-6 mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">CR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/netting-close-out">
              <li className="text-[11px] sm:text-[18px]">
                Netting, Close-out and Related Aspects <span className="text-[#BE4E1E]">[CR&#8209;16]</span>
              </li>
            </Link>
            <Link href="/part-2/margin-collateral-settlement">
              <li className="text-[11px] sm:text-[18px]">
                Margin (Collateral) and Settlement <span className="text-[#BE4E1E]">[CR&#8209;17]</span>
              </li>
            </Link>
            <Link href="/part-2/central-clearing">
              <li className="text-[11px] sm:text-[18px]">
                Central Clearing <span className="text-[#BE4E1E]">[CR&#8209;18]</span>
              </li>
            </Link>
            <Link href="/part-2/future-value-exposure">
              <li className="text-[11px] sm:text-[18px]">
                Future Value and Exposure <span className="text-[#BE4E1E]">[CR&#8209;19]</span>
              </li>
            </Link>
            <Link href="/part-2/stress-testing-counterparty-exposures">
              <li className="text-[11px] sm:text-[18px]">
                The Evolution of Stress Testing Counterparty Exposures <span className="text-[#BE4E1E]">[CR&#8209;21]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFF3E5]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">10</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">CR</div>
              <div className="text-[#FFFFFF]  sm:text-[25px]">IM</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-1/random-variables">
              <li className="text-[11px] sm:text-[18px]">
                Structured Credit Risk <span className="text-[#BE4E1E]">[CR&#8209;22]</span>
              </li>
            </Link>
            <Link href="/part-2/introduction-to-securitisation">
              <li className="text-[11px] sm:text-[18px]">
                An Introduction to Securitization <span className="text-[#BE4E1E]">[CR&#8209;23]</span>
              </li>
            </Link>
            <Link href="/part-2/country-risk-determinants">
              <li className="text-[11px] sm:text-[18px]">
                Country Risk: Determinants, Measures, and Implications <span className="text-[#BE4E1E]">[CR&#8209;8]</span>
              </li>
            </Link>
            <Link href="/part-2/due-diligence-managers-funds">
              <li className="text-[11px] sm:text-[18px]">
                Performing Due Diligence on Specific Managers and Funds <span className="text-[#BE4E1E]">[IM&#8209;10]</span>
              </li>
            </Link>
            <Link href="/part-2/predicting-fraud-managers">
              <li className="text-[11px] sm:text-[18px]">
                Predicting Fraud by Investment Managers <span className="text-[#BE4E1E]">[IM&#8209;11]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFF3E5]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">11</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">LR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-1//part-2/liquidity-risk">
              <li className="text-[11px] sm:text-[18px]">
                Liquidity Risk <span className="text-[#BE4E1E]">[LR&#8209;1]</span>
              </li>
            </Link>
            <Link href="/part-2/liquidity-leverage">
              <li className="text-[11px] sm:text-[18px]">
                Liquidity and Leverage <span className="text-[#BE4E1E]">[LR&#8209;2] </span>
              </li>
            </Link>
            <Link href="/part-2/illiquid-assets">
              <li className="text-[11px] sm:text-[18px]">
                Illiquid Assets <span className="text-[#BE4E1E]">[LR&#8209;19]</span>
              </li>
            </Link>
            <Link href="/part-2/liquidity-reserves-management">
              <li className="text-[11px] sm:text-[18px]">
                Liquidity and Reserves Management: Strategies and Policies <span className="text-[#BE4E1E]">[LR&#8209;5]</span>
              </li>
            </Link>
            <Link href="/part-2/monitoring-liquidity">
              <li className="text-[11px] sm:text-[18px]">
                Monitoring Liquidity <span className="text-[#BE4E1E]">[LR&#8209;7]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFF3E5]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">12</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">LR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/early-warning-indicators">
              <li className="text-[11px] sm:text-[18px]">
                Early Warning Indicators <span className="text-[#BE4E1E]">[LR&#8209;3]</span>
              </li>
            </Link>
            <Link href="/part-2/intraday-liquidity-management">
              <li className="text-[11px] sm:text-[18px]">
                Intraday Liquidity RiskManagement <span className="text-[#BE4E1E]">[LR&#8209;6]</span>
              </li>
            </Link>
            <Link href="/part-2/liquidity-stress-testing">
              <li className="text-[11px] sm:text-[18px]">
                Liquidity Stress Testing <span className="text-[#BE4E1E]">[LR&#8209;9]</span>
              </li>
            </Link>
            <Link href="/part-2/liquidity-risk-reporting">
              <li className="text-[11px] sm:text-[18px]">
                Liquidity Risk Reporting and Stress Testing <span className="text-[#BE4E1E]">[LR&#8209;10]</span>
              </li>
            </Link>
            <Link href="/part-2/contingency-funding-planning">
              <li className="text-[11px] sm:text-[18px]">
                Contingency Funding Planning <span className="text-[#BE4E1E]">[LR&#8209;11]</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Week 13-16",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">13</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">LR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/managing-pricing-deposits">
              <li className="text-[11px] sm:text-[18px]">
                Managing and Pricing Deposit Services <span className="text-[#BE4E1E]">[LR&#8209;12]</span>
              </li>
            </Link>
            <Link href="/part-2/managing-non-deposit-liabilities">
              <li className="text-[11px] sm:text-[18px]">
                Managing Nondeposit Liabilities <span className="text-[#BE4E1E]">[LR&#8209;13]</span>
              </li>
            </Link>
            <Link href="/part-2/repurchase-agreements-financing">
              <li className="text-[11px] sm:text-[18px]">
                Repurchase Agreements and Financing <span className="text-[#BE4E1E]">[LR&#8209;14]</span>
              </li>
            </Link>
            <Link href="/part-2/dealer-bank-failures">
              <li className="text-[11px] sm:text-[18px]">
                The Failure Mechanics of Dealer Banks <span className="text-[#BE4E1E]">[LR&#8209;8]</span>
              </li>
            </Link>
            <Link href="/part-2/interest-rate-risk-management">
              <li className="text-[11px] sm:text-[18px]">
                Risk Management for Changing Interest Rates: Asset-Liability Management and Duration Techniques <span className="text-[#BE4E1E]">[LR&#8209;18]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">14</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">LR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/liquidity-transfer-pricing">
              <li className="text-[11px] sm:text-[18px]">
                Liquidity Transfer Pricing: A Guide to Better Practice <span className="text-[#BE4E1E]">[LR&#8209;15]</span>
              </li>
            </Link>
            <Link href="/part-2/investment-function-management">
              <li className="text-[11px] sm:text-[18px]">
                The Investment Function in Financial-Services Management <span className="text-[#BE4E1E]">[LR&#8209;4]</span>
              </li>
            </Link>
            <Link href="/part-2/us-dollar-shortage">
              <li className="text-[11px] sm:text-[18px]">
                The US Dollar Shortage in Global Banking and the International Policy Response <span className="text-[#BE4E1E]">[LR&#8209;16] </span>
              </li>
            </Link>
            <Link href="/part-2/covered-interest-parity">
              <li className="text-[11px] sm:text-[18px]">
                Covered Interest Parity Lost: Understanding the Cross-Currency Basis <span className="text-[#BE4E1E]">[LR&#8209;17]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">15</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">OR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/operational-risk-introduction">
              <li className="text-[11px] sm:text-[18px]">
                Introduction to Operational Risk and Resilience <span className="text-[#BE4E1E]">[OR&#8209;1]</span>
              </li>
            </Link>
            <Link href="/part-2/risk-governance">
              <li className="text-[11px] sm:text-[18px]">
                Risk Governance <span className="text-[#BE4E1E]">[OR&#8209;2] </span>
              </li>
            </Link>
            <Link href="/part-2/risk-identification">
              <li className="text-[11px] sm:text-[18px]">
                Risk Identification <span className="text-[#BE4E1E]">[OR&#8209;3]</span>
              </li>
            </Link>
            <Link href="/part-2/risk-measurement-assessment">
              <li className="text-[11px] sm:text-[18px]">
                Risk Measurement and Assessment <span className="text-[#BE4E1E]">[OR&#8209;4]</span>
              </li>
            </Link>
            <Link href="/part-2/risk-mitigation">
              <li className="text-[11px] sm:text-[18px]">
                Risk Mitigation <span className="text-[#BE4E1E]">[OR&#8209;5]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">16</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">OR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/risk-reporting">
              <li className="text-[11px] sm:text-[18px]">
                Risk Reporting <span className="text-[#BE4E1E]">[OR&#8209;6]</span>
              </li>
            </Link>
            <Link href="/part-2/integrated-risk-management">
              <li className="text-[11px] sm:text-[18px]">
                Integrated Risk Management <span className="text-[#BE4E1E]">[OR&#8209;7]</span>
              </li>
            </Link>
            <Link href="/part-2/model-risk-management-guidance">
              <li className="text-[11px] sm:text-[18px]">
                Supervisory Guidance on Model Risk Management <span className="text-[#BE4E1E]">[OR&#8209;15]</span>
              </li>
            </Link>
            <Link href="/part-2/model-risk-case-study">
              <li className="text-[11px] sm:text-[18px]">
                Case Study: Model Risk and Model Validation <span className="text-[#BE4E1E]">[OR&#8209;16]</span>
              </li>
            </Link>
            <Link href="/part-2/risk-capital-attribution">
              <li className="text-[11px] sm:text-[18px]">
                Risk Capital Attribution and Risk-Adjusted Performance Measurement <span className="text-[#BE4E1E]">[OR&#8209;18]</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "Week 17-20",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">17</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">OR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/cyber-resilience">
              <li className="text-[11px] sm:text-[18px]">
                Cyber-Resilience: Range and Practices <span className="text-[#BE4E1E]">[OR&#8209;8]</span>
              </li>
            </Link>
            <Link href="/part-2/cyberthreats-case-study">
              <li className="text-[11px] sm:text-[18px]">
                Case Study: Cyber Threats and Information Security Risks <span className="text-[#BE4E1E]">[OR&#8209;9] </span>
              </li>
            </Link>
            <Link href="/part-2/aml-terrorism-financing">
              <li className="text-[11px] sm:text-[18px]">
                Sound Management of Risks Related to Money Laundering and Financing of Terrorism <span className="text-[#BE4E1E]">[OR&#8209;10]</span>
              </li>
            </Link>
            <Link href="/part-2/financial-crime-fraud-case-study">
              <li className="text-[11px] sm:text-[18px]">
                Case Study: Financial Crime and Fraud <span className="text-[#BE4E1E]">[OR&#8209;11]</span>
              </li>
            </Link>
            <Link href="/part-2/outsourcing-risk-management">
              <li className="text-[11px] sm:text-[18px]">
                Guidance on Managing Outsourcing Risk <span className="text-[#BE4E1E]">[OR&#8209;12]</span>
              </li>
            </Link>
            <Link href="/part-2/third-party-risk-management">
              <li className="text-[11px] sm:text-[18px]">
                Case Study: Third-Party Risk Management <span className="text-[#BE4E1E]">[OR&#8209;13]</span>
              </li>
            </Link>
            <Link href="/part-2/investor-protection-case-study">
              <li className="text-[11px] sm:text-[18px]">
                Case Study: Investor Protection and Compliance Risks in Investment Activities <span className="text-[#BE4E1E]">[OR&#8209;14]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">18</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">OR</div>
              <div className="text-[#FFFFFF]  sm:text-[25px]">MR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/financial-regulation-before-global-financial-crisis">
              <li className="text-[11px] sm:text-[18px]">
                Capital Regulation Before the Global Financial Crisis <span className="text-[#BE4E1E]">[OR&#8209;21]</span>
              </li>
            </Link>
            <Link href="/part-2/solvency-liquidity-regulation">
              <li className="text-[11px] sm:text-[18px]">
                Solvency, Liquidity, and Other Regulation After the Global Financial Crisis <span className="text-[#BE4E1E]">[OR&#8209;22] </span>
              </li>
            </Link>
            <Link href="/part-2/high-level-summary">
              <li className="text-[11px] sm:text-[18px]">
                High-Level Summary of Basel III Reforms <span className="text-[#BE4E1E]">[OR&#8209;23]</span>
              </li>
            </Link>
            <Link href="/part-2/finalising-post-crisis-reforms">
              <li className="text-[11px] sm:text-[18px]">
                Basel III: Finalizing Post-Crisis Reforms <span className="text-[#BE4E1E]">[OR&#8209;24]</span>
              </li>
            </Link>
            <Link href="/part-2/fundamental-review-trading-book">
              <li className="text-[11px] sm:text-[18px]">
                Fundamental Review of the Trading Book (FRTB) <span className="text-[#BE4E1E]">[MR&#8209;16]</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">19</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">OR</div>
              <div className="text-[#FFFFFF]  sm:text-[25px]">MR</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            <Link href="/part-2/economic-capital-frameworks">
            <li className="text-[11px] sm:text-[18px]">
              Range of practices and issues in economic capital frameworks <span className="text-[#BE4E1E]">[OR&#8209;19]</span>
            </li>
            </Link>
            <Link href="/part-2/capital-planning-bhcs">
            <li className="text-[11px] sm:text-[18px]">
              Capital Planning at Large Bank Holding Companies: Supervisory Expectationsand Range of Current Practice <span className="text-[#BE4E1E]">[OR&#8209;20] </span>
            </li>
            </Link>
            <Link href="/part-2/stress-testing-banks">
            <li className="text-[11px] sm:text-[18px]">
              Stress Testing Banks <span className="text-[#BE4E1E]">[OR&#8209;17]</span>
            </li>
            </Link>
            <Link href="/part-2/basel-committee-supervision">
            <li className="text-[11px] sm:text-[18px]">
              Messages from the Academic Literature on Risk Measurement for the Trading Book <span className="text-[#BE4E1E]">[MR&#8209;6]</span>
            </li>{" "}
            </Link>
          </ul>
        </div>
        <div className="bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[16px] sm:text-[20px] leading-[5px] font-bold">WEEK</h1>
              <h1 className="text-[46px] sm:text-[60px] font-semibold">20</h1>
            </div>
            <div className="bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9">
              <div className="text-[#FFFFFF]  sm:text-[25px]">CI</div>
            </div>
          </div>
          <ul className="list-disc list-outside mx-5">
            {/* <Link href="/part-1/fundamentals-of-probability">
            </Link> */}
            <li className="text-[11px] sm:text-[18px]">
              Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank <span className="text-[#BE4E1E]">[CI&#8209;1]</span>
            </li>
            {/* <Link href="/part-1/fundamentals-of-probability">
            </Link> */}
            <li className="text-[11px] sm:text-[18px]">
              The Credit Suisse CoCo Wipeout: Facts, Misperceptions, and Lessons for Financial Regulation <span className="text-[#BE4E1E]">[CI&#8209;2] </span>
            </li>
            {/* <Link href="/part-1/fundamentals-of-probability">
            </Link> */}
            <li className="text-[11px] sm:text-[18px]">
              Artificial Intelligence and Bank Supervision <span className="text-[#BE4E1E]">[CI&#8209;3]</span>
            </li>
            {/* <Link href="/part-1/fundamentals-of-probability">
            </Link> */}
            <li className="text-[11px] sm:text-[18px]">
              Financial Risk Management and Explainable, Trustworthy, Responsible AI <span className="text-[#BE4E1E]">[CI&#8209;4]</span>
            </li>
            {/* <Link href="/part-1/fundamentals-of-probability">
            </Link> */}
            <li className="text-[11px] sm:text-[18px]">
              Artificial Intelligence Risk Management Framework <span className="text-[#BE4E1E]">[CI&#8209;5]</span>
            </li>
            {/* <Link href="/part-1/fundamentals-of-probability">
            </Link> */}
            <li className="text-[11px] sm:text-[18px]">
              Climate-related risk drivers and their transmission channels <span className="text-[#BE4E1E]">[CI&#8209;6]</span>
            </li>
            {/* <Link href="/part-1/fundamentals-of-probability">
            </Link> */}
            <li className="text-[11px] sm:text-[18px]">
              Climate-related financial risks – measurement methodologies <span className="text-[#BE4E1E]">[CI&#8209;7]</span>
            </li>
            {/* <Link href="/part-1/fundamentals-of-probability">
            </Link> */}
            <li className="text-[11px] sm:text-[18px]">
              Principles for the effective management and supervision of climate-related financial risks <span className="text-[#BE4E1E]">[CI&#8209;8]</span>
            </li>
            {/* <Link href="/part-1/fundamentals-of-probability">
            </Link> */}
            <li className="text-[11px] sm:text-[18px]">
              The Crypto Ecosystem: Key Elements and Risks <span className="text-[#BE4E1E]">[CI&#8209;9]</span>
            </li>
            {/* <Link href="/part-1/fundamentals-of-probability">
            </Link> */}
            <li className="text-[11px] sm:text-[18px]">
              Digital Resilience and Financial Stability. The Quest for Policy Tools in The Financial Sector <span className="text-[#BE4E1E]">[CI&#8209;10]</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
