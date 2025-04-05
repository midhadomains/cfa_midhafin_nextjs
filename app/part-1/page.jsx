import Link from "next/link";
import Accordion from "@/components/Accordian";
import Courses from "@/components/Part-1/Courses";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const metadata = {
  title: "FRM Part 1 - Comprehensive Study Material",
  description: "Prepare for FRM Part 1 with Midhafin's comprehensive online training. Access study plans, sample questions, and expert resources to excel in your FRM certification exam.",
  keywords: "FRM part 1, frm part 1, frm first part ,frm part 1 syllabus",
};

export default function page() {
  const buttonsData = [
    {
      id: 1,
      text: "What are the eligibility requirements for CFA Level 1?",
      data: "To register for CFA Level 1, candidates must have a bachelor's degree, be in their final year of an undergraduate program, or have a combination of 4,000 hours of professional work experience and/or higher education acquired over a minimum of three years.",
    },
    {
      id: 2,
      text: "How many hours should I study for CFA Level 1?",
      data: "The CFA Institute recommends candidates dedicate at least 300 hours of study time for CFA Level 1. However, the actual required study time varies depending on prior knowledge and experience in finance.",
    },
    {
      id: 3,
      text: "What is the exam format for CFA Level 1?",
      data: "CFA Level 1 consists of 180 multiple-choice questions, divided into two sessions of 2 hours and 15 minutes each. Each question has three answer choices, and the exam is conducted in a computer-based format.",
    },
    {
      id: 4,
      text: "How often is the CFA Level 1 exam conducted?",
      data: "The CFA Level 1 exam is offered four times a year: in February, May, August, and November. Candidates can select an available exam window that best fits their schedule.",
    },
    {
      id: 5,
      text: "Can I take CFA Level 1 without a finance background?",
      data: "Yes, candidates from any educational background can register for the CFA Level 1 exam. While prior knowledge in finance is helpful, the CFA curriculum is designed to teach fundamental concepts from the ground up.",
    },
    {
      id: 6,
      text: "How do I register for the CFA Level 1 exam?",
      data: "Candidates can register for the CFA Level 1 exam through the CFA Institute’s official website. They must create an account, complete the registration process, pay the applicable fees, and schedule their exam within the available testing windows.",
    },
    {
      id: 7,
      text: "What is CFA Level 1, and who should take it?",
      data: "CFA Level 1 is the first step in the CFA program, designed for those interested in investment banking, asset management, and financial analysis.\nIt is ideal for finance students, professionals, and career changers.",
    },

    {
      id: 9,
      text: "What is the passing rate for CFA Level 1?",
      data: "The passing rate for CFA Level 1 fluctuates but is typically around 35–40%.",
    },
    {
      id: 10,
      text: "How often is the CFA Level 1 exam conducted?",
      data: "CFA Level 1 is offered four times a year in February, May, August, and November.",
    },

    {
      id: 12,
      text: "How do I register for the CFA Level 1 exam?",
      data: "Registration is done online through the CFA Institute website.\nCandidates need to create an account, pay the fees, and schedule their exam.",
    },

];
  const course = [
    {
      _id: "65dee4781c34e4d5d691626d",
      name: "FRM® Part-1 Sample Course",
      image: "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_sample_course_720.webp",
      price: "",
      other: "free",
      instructor: "Micky Midha",
      details: ["12 Hrs of Videos", "Available On Web,IOS & Android", "Access Until You Pass", "Lecture PDFs ", "class notes"],
      link: "https://edu.midhafin.com/courses/MidhaFin-FRM-Part-1-Sample-Course-6305fc9ae4b05c100c2d3a35",
      rating: 4.5,
      tp: "SC-1",
      category: "frm",
      sub_category: "part-1_sample_course",
    },
    {
      _id: "65deec862a8308b4a242d3ce",
      name: "FRM® Part-1 Self Paced Course",
      image: "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_self-paced_course_720.webp",
      price: "",
      other: "",
      instructor: "Micky Midha",
      details: ["257 Hrs Of Videos", "Available On Web,IOS & Android", "Access Until You Pass", "Complete Study Material", "Quizzes,Question Bank & Mock tests"],
      link: "https://edu.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f",
      rating: 4.5,
      tp: "TP-1",
      category: "frm",
      sub_category: "part-1_self_paced_course",
    },
    {
      _id: "65df31c3c5e4ac767387dc92",
      name: "FRM® Part-1 Live Online Classes",
      image: "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_live_online_class_720.webp",
      price: "",
      other: "",
      instructor: "Micky Midha",
      details: ["90 Hrs Of Live Class & 200+ Hrs Of Videos", "Available On Web,IOS & Android", "Access Until You Pass", "Complete Study Material", "Quizzes,Question Bank & Mock tests"],
      link: "https://edu.midhafin.com/courses/FRM-Part-1-Live-Online-Classes-6297a9960cf2923982ee9e72",
      rating: 4.5,
      tp: "TP-2",
      category: "frm",
      sub_category: "part-1_live_online_classes",
    },
  ];

  return (
    <div className="bg-white">
      <div className="text-center bg-gradient-to-b from-[#ffe4a4a0] from-[1%] to-[100%] p-4 max-h-[300px]">
        {/* <div className=" h-[50px] max-w-[700px] mx-auto  "></div> */}
        <h1 className="text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-semibold text-[#6A1C1A] mt-[70px]">
          <span className="text-[#BF4E1E]">C</span>hartered&nbsp;
          <span className="text-[#BF4E1E]">F</span>inancial&nbsp;
          <span className="text-[#BF4E1E]">A</span>nalyst
        </h1>
        <h1 className="text-[#6A1C1A] text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]  font-bold">CFA Level - 1</h1>
      </div>
      {/* <Courses course={course} /> */}
      {/* Eligibility and pre Requisites */}

      {/* Large screem */}
      <div className="hidden  lg:flex h-[420px] justify-center my-[70px]">
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[50%]">
          <Image src="/part-1/Part-1left.svg" width={350} height={450} alt="image" className="absolute -right-[60px]" />
        </div>
        <div className=" flex justify-start w-[80%] ml-[100px] ">
          <div className="max-w-[800px] h-[100%] flex flex-col justify-center pr-4">
            <h1 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold">
              Eligibility and/or <span className="text-[#BE4E1E]"> Pre-Requisites</span>{" "}
            </h1>
            <p className="text-[14px] lg:text-[20px] leading-[40px] font-[400]  ">
              The CFA course welcomes candidates from various academic backgrounds, without any specific educational field prerequisites. There are NO ELIGLIBILITY CRITERIA for potential candidates; even those in the early stages of their undergraduate education can embark on the CFA journey by
              taking the Level 1 examination.
            </p>
          </div>
        </div>
      </div>
      {/* Small screen */}
      <div className="w-[100%] lg:hidden mt-[18%] sm:mt-[25%] ">
        <div className="bg-[#FFF4DA] h-[150px] mt-auto relative ">
          <Image src="/part-1/Part-1left.svg" width={170} height={100} alt="image" className="mx-auto sm:w-[30%] bottom-0 absolute  center  left-0  right-0 text-center z-[1]" />
        </div>
        <div className="px-5 max-w-[700px] mx-auto">
          <h2 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-bold my-5 ">
            Eligibility and/or <span className="text-[#BE4E1E]"> Pre-Requisites</span>
          </h2>
          <p className="text-[14px] sm:text-[14px]">
            The FRM course welcomes candidates from various academic backgrounds, without any specific educational field prerequisites. There are NO ELIGLIBILITY CRITERIA for potential candidates; even those in the early stages of their undergraduate education can embark on the FRM journey by taking
            the Part 1 examination.
          </p>
        </div>
      </div>
      {/* About the exam */}

      {/* Large screem */}
      <div className="hidden  lg:flex h-[450px] justify-center mt-[200px]">
        <div className=" flex justify-end w-[80%] mr-[100px] ">
          <div className="max-w-[900px] h-[100%] flex flex-col justify-end pl-4">
            <h1 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold">
              About the Exam - <span className="text-[#BF4E1E]">FRM Part 1</span>
            </h1>
            <p className="text-[14px] lg:text-[20px] leading-[40px] font-[400] ">
            CFA Level 1 is the first level of the Chartered Financial Analyst (CFA) certification offered by the CFA Institute. It involves an examination that assesses candidates’ understanding of foundational concepts in investment management. This encompasses a comprehensive exploration of quantitative analysis, fundamental concepts in economics and finance, the intricacies of financial reporting and analysis, and the application of portfolio management and investment tools. The examination assesses candidates’ proficiency in these core areas, laying the foundation for a solid understanding of investment principles and practices in the financial domain. Various modules carry different weights in the exam, and to pass CFA Level 1, a minimum score is required in each module.
            </p>
          </div>
        </div>
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[50%]">
          <Image src="/part-1/part-1right.svg" width={400} height={350} alt="image" className="absolute -left-[60px] bottom-0" />
        </div>
      </div>
      {/* Small screen */}

      <div className="w-[100%] lg:hidden mt-[120px] sm:mt-[30%] ">
        <div className="bg-[#FFF4DA] h-[150px] mt-auto relative ">
          <Image src="/part-1/part-1right.svg" width={170} height={100} alt="image" className="mx-auto sm:w-[30%] bottom-0 absolute  center  left-0  right-0 text-center z-[1]" />
        </div>
        <div className="px-5 max-w-[700px] mx-auto">
          <h2 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-bold my-5 ">
            About the Exam - <span className="text-[#BE4E1E]"> CFA Level 1</span>
          </h2>
          <p className=" text-[14px] sm:text-[14px]">
            {" "}
            CFA Level 1 is the first level of the Chartered Financial Analyst (CFA) certification offered by the CFA Institute. It involves an examination that assesses candidates&apos; understanding of foundational concepts in investment management. This encompasses a comprehensive exploration of quantitative analysis, fundamental concepts in economics and finance, the intricacies of financial reporting and financial markets, and the application of portfolio management and investment tools. The examination assesses candidates&apos; proficiency in these core areas, laying the foundation for a solid understanding of investment principles and practices in the financial domain. Various modules carry different weights in the exam, and to pass CFA Level 1, a minimum score is required in each module.
          </p>
        </div>
      </div>

      {/* secondary navbar */}
      <div className="bg-[#F0EDE68A] py-5 md:py-9 my-[8%]">
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-center mb-8"><span className="text-[#BE4E1E]">FRM </span> prep resources</h2>
        <ul className=" flex flex-wrap justify-between items-center gap-3  max-w-[1400px] px-1 md:px-[50px] mx-auto text-white text-[14px] md:text-[16px]  lg:text-[19px] xl:text-[24px] font-semibold">
          <Link href="/part-1/study-plan" className="w-[24%] bg-[#6A1C1A] hover:bg-[#BE4E1E] transition-colors duration-150 text-center rounded-full min-w-[160px] px-2 py-2 sm:py-3 lg:py-5">
            <li>Study Plan</li>{" "}
          </Link>
          <Link href="/part-1/syllabus" className="w-[24%] bg-[#6A1C1A] hover:bg-[#BE4E1E] transition-colors duration-150 text-center rounded-full min-w-[160px] px-2 py-2 sm:py-3 lg:py-5">
            <li>Syllabus</li>
          </Link>
          <Link href="/dates-and-deadlines"  className="w-[24%] bg-[#6A1C1A] hover:bg-[#BE4E1E] transition-colors duration-150 text-center rounded-full min-w-[160px] px-2 py-2 sm:py-3 lg:py-5">
            <li>Dates & Deadlines</li>
          </Link>
          <Link href="/part-1/sample-questions"  className="w-[24%] bg-[#6A1C1A] hover:bg-[#BE4E1E] transition-colors duration-150 text-center rounded-full min-w-[160px] px-2 py-2 sm:py-3 lg:py-5">
            <li>Sample Questions</li>
          </Link>
        </ul>
      </div>

      {/* weightage module */}
      <div className="max-w-[1350px] mx-auto px-5  w-[100%]  sm:mt-[100px]">
        <h1 className="text-[18px] sm:text-[25px] lg:text-[33px]  font-semibold text-left my-[30px]  sm:my-[50px]">The specific weightage for each module in the exam is as follows:</h1>
        <ul className="">
          <Link href='/part-1/syllabus#frm'>
          
          <li className="flex hover:scale-[1.01] duration-300 ">
            <div className=" aspect-square  bg-[#FFE9CA] min-w-[70px]   sm:max-w-[180px] sm:w-[100%] text-center flex flex-col justify-center ">
              <h2 className="text-[25px] sm:text-[40px] font-bold text-[#6A1C1A]">15-20%</h2>
            </div>
            <div className="max-w-[1000px] ml-5 lg:ml-10 my-auto py-2 sm:py-0">
              <h3 className="text-[16px] md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]">Ethical and Professional Standards (15-20%):</h3>
              <p className="text-[14px]   lg:text-[20px] sm:leading-[40px] font-[400] ">Covers the CFA Institute’s Code of Ethics and Standards of Professional Conduct, emphasizing integrity, objectivity, and professional responsibility in investment management.</p>
            </div>
          </li>
          </Link>

          <Link href='/part-1/syllabus#qta'> 
          <li className="flex hover:scale-[1.01] duration-300">
            <div className=" aspect-square  bg-[#FFD9A3] min-w-[70px]   sm:max-w-[180px] sm:w-[100%] text-center flex flex-col justify-center ">
              <h2 className="text-[25px] sm:text-[40px] font-bold text-[#6A1C1A]">6-9%</h2>
            </div>
            <div className="max-w-[1000px] ml-5 lg:ml-10 my-auto py-2 sm:py-0">
              <h3 className="text-[16px] md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]"> Quantitative Methods (6-9%):</h3>
              <p className="text-[14px]   lg:text-[20px] sm:leading-[40px] font-[400] ">Focuses on key quantitative tools used in finance, including time value of money, probability, hypothesis testing, and regression analysis. </p>
            </div>
          </li>
          </Link>

          <Link href='/part-1/syllabus#fmp'>
          
          <li className="flex hover:scale-[1.01] duration-300">
            <div className="  bg-[#FFCD86] max-w-[180px] min-w-[70px]  sm:w-[100%] sm:h-[270px]  flex-shrink-0 text-center flex flex-col justify-center ">
              <h2 className="text-[25px] sm:text-[40px] font-bold text-[#6A1C1A]">6-9%</h2>
            </div>
            <div className="max-w-[1000px] ml-5 lg:ml-10 my-auto py-2 sm:py-0">
              <h3 className="text-[16px] md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]">Economics (6-9%): </h3>
              <p className="text-[14px]  lg:text-[20px] sm:leading-[40px] font-[400] ">Explores micro and macroeconomic principles, monetary and fiscal policy, international trade, and currency exchange impacts on investments.</p>
            </div>
          </li>
          </Link>

          <Link href='/part-1/syllabus#vrm'>
          
          <li className="flex hover:scale-[1.01] duration-300">
            <div className="  bg-[#FFCC6A] max-w-[180px] min-w-[70px]  sm:w-[100%] sm:h-[270px] text-center flex flex-col justify-center ">
              <h2 className="text-[25px] sm:text-[40px] font-bold text-[#6A1C1A]">11-14%</h2>
            </div>
            <div className="max-w-[1000px] ml-5 lg:ml-10 my-auto py-2 sm:py-0">
              <h3 className="text-[16px] md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]"> Financial Statement Analysis (11-14%): </h3>
              <p className="text-[14px]   lg:text-[20px] sm:leading-[40px] font-[400] ">Covers income statements, balance sheets, cash flow statements, and ratio analysis to evaluate a company’s financial health.</p>
            </div>
          </li>
          </Link>

          <Link href='/part-1/syllabus#vrm'>
          
          <li className="flex hover:scale-[1.01] duration-300">
            <div className="  bg-[#FFDD6A] max-w-[180px] min-w-[70px]  sm:w-[100%] sm:h-[270px] text-center flex flex-col justify-center ">
              <h2 className="text-[25px] sm:text-[40px] font-bold text-[#6A1C1A]">6-9%</h2>
            </div>
            <div className="max-w-[1000px] ml-5 lg:ml-10 my-auto py-2 sm:py-0">
              <h3 className="text-[16px] md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]"> Corporate Issuers (6-9%): </h3>
              <p className="text-[14px]   lg:text-[20px] sm:leading-[40px] font-[400] "> Focuses on corporate governance, capital budgeting, and cost of capital, including how firms make financing decisions.</p>
            </div>
          </li>
          </Link>
          <Link href='/part-1/syllabus#vrm'>
          
          <li className="flex hover:scale-[1.01] duration-300">
            <div className="  bg-[#FFCE5A] max-w-[180px] min-w-[70px]  sm:w-[100%] sm:h-[270px] text-center flex flex-col justify-center ">
              <h2 className="text-[25px] sm:text-[40px] font-bold text-[#6A1C1A]">11-14%</h2>
            </div>
            <div className="max-w-[1000px] ml-5 lg:ml-10 my-auto py-2 sm:py-0">
              <h3 className="text-[16px] md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]"> Equity Investments (11-14%): </h3>
              <p className="text-[14px]   lg:text-[20px] sm:leading-[40px] font-[400] "> Examines types of equity securities, market organization, and valuation techniques used for analyzing stocks.</p>
            </div>
          </li>
          </Link>
          <Link href='/part-1/syllabus#vrm'>
          
          <li className="flex hover:scale-[1.01] duration-300">
            <div className="  bg-[#FFBC5A] max-w-[180px] min-w-[70px]  sm:w-[100%] sm:h-[270px] text-center flex flex-col justify-center ">
              <h2 className="text-[25px] sm:text-[40px] font-bold text-[#6A1C1A]">11-14%</h2>
            </div>
            <div className="max-w-[1000px] ml-5 lg:ml-10 my-auto py-2 sm:py-0">
              <h3 className="text-[16px] md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]"> Fixed Income (11-14%): </h3>
              <p className="text-[14px]   lg:text-[20px] sm:leading-[40px] font-[400] "> Covers bond valuation, yield curves, duration, convexity, and credit risk in fixed income securities.</p>
            </div>
          </li>
          </Link>
          <Link href='/part-1/syllabus#vrm'>
          
          <li className="flex hover:scale-[1.01] duration-300">
            <div className="  bg-[#FFBC7E] max-w-[180px] min-w-[70px]  sm:w-[100%] sm:h-[270px] text-center flex flex-col justify-center ">
              <h2 className="text-[25px] sm:text-[40px] font-bold text-[#6A1C1A]">11-14%</h2>
            </div>
            <div className="max-w-[1000px] ml-5 lg:ml-10 my-auto py-2 sm:py-0">
              <h3 className="text-[16px] md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]"> Derivatives (5–8%): </h3>
              <p className="text-[14px]   lg:text-[20px] sm:leading-[40px] font-[400] "> Introduces forwards, futures, options, and swaps, along with their pricing and risk management applications.</p>
            </div>
          </li>
          </Link>
          <Link href='/part-1/syllabus#vrm'>
          
          <li className="flex hover:scale-[1.01] duration-300">
            <div className="  bg-[#FFBB5E] max-w-[180px] min-w-[70px]  sm:w-[100%] sm:h-[270px] text-center flex flex-col justify-center ">
              <h2 className="text-[25px] sm:text-[40px] font-bold text-[#6A1C1A]">7-10%</h2>
            </div>
            <div className="max-w-[1000px] ml-5 lg:ml-10 my-auto py-2 sm:py-0">
              <h3 className="text-[16px] md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]"> Alternative Investments (7-10%): </h3>
              <p className="text-[14px]   lg:text-[20px] sm:leading-[40px] font-[400] "> Covers real estate, private equity, commodities, and hedge funds with an emphasis on investment characteristics and strategies.</p>
            </div>
          </li>
          </Link>
          <Link href='/part-1/syllabus#vrm'>
          
          <li className="flex hover:scale-[1.01] duration-300">
            <div className="  bg-[#FFED7D] max-w-[180px] min-w-[70px]  sm:w-[100%] sm:h-[270px] text-center flex flex-col justify-center ">
              <h2 className="text-[25px] sm:text-[40px] font-bold text-[#6A1C1A]">8-12%</h2>
            </div>
            <div className="max-w-[1000px] ml-5 lg:ml-10 my-auto py-2 sm:py-0">
              <h3 className="text-[16px] md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]"> 	Portfolio Management (8-12%): </h3>
              <p className="text-[14px]   lg:text-[20px] sm:leading-[40px] font-[400] "> Explores investment objectives, constraints, portfolio planning, asset allocation, and risk-return optimization techniques.</p>
            </div>
          </li>
          </Link>
        </ul>
        {/* desc section */}
        {/* large screen */}
        <div className="max-w-[1300px] mx-auto hidden md:block">
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Ethical and Professional Standards</h2>
              <p className="text-[18px] lg:text-[20px]">
              This module is designed to impart fundamental knowledge of the CFA Institute&apos;s Code of Ethics and Standards of Professional Conduct. It introduces the principles of ethical behavior, professional integrity, and the responsibilities of CFA charterholders. It also provides real-world scenarios to apply ethical principles in investment decision-making. Along with best practices, this module forms the foundation of trust and credibility in the financial industry.
              </p>
            </div>
            <Image src="/part-1/desc_frm.svg" width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Quantitative Methods</h2>
              <p className="text-[18px] lg:text-[20px]">
                {" "}
                The main focus of this module is to equip candidates with essential quantitative tools used in financial analysis. It covers topics such as time value of money, probability theory, hypothesis testing, correlation and regression analysis, and time series. These tools form the basis for investment valuation and risk analysis throughout the CFA curriculum.
              </p>
            </div>
            <Image src="/part-1/desc_vrm.svg" width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Economics</h2>
              <p className="text-[18px] lg:text-[20px]">
                {" "}
                This module provides a detailed overview of microeconomic and macroeconomic principles, with applications in investment analysis. Topics include demand and supply, market structures, monetary and fiscal policy, economic growth, and international trade. Understanding these concepts helps candidates analyze how economic events influence asset prices and portfolio performance.
              </p>
            </div>
            <Image src="/part-1/desc_fmp.svg" width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Financial Reporting and Analysis</h2>
              <p className="text-[18px] lg:text-[20px]">
              This module is essential for understanding how to interpret and analyze financial statements. It covers the income statement, balance sheet, cash flow statement, and financial ratios. Candidates also learn how accounting standards and financial reporting choices affect analysis. Mastery of this module enables effective evaluation of a company&apos;s financial health and investment potential.
              </p>
            </div>
            <Image src="/part-1/desc_qta.svg" width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
        </div>
        {/* small screen */}

        <div className="max-w-[1300px] mx-auto flex justify-center flex-wrap   md:hidden mt-[30px]">
          <div className="md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border">
            <Image src="/part-1/desc_frm.svg" alt="img" width={260} height={200} className="mx-auto -mt-[20px]" />
            <div className="md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[340px]  transition-height duration-500 ease-in-out shadow-xl">
              <IoIosArrowUp className="text-center mx-auto text-[30px] " />
              <h1 className="md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] my-[5px]">Ethical and Professional <br /> Standards</h1>
              <p className=" text-[#6A1C1A]  text-[14px] px-2">
              This module is designed to impart fundamental knowledge of the CFA Institute&apos;s Code of Ethics and Standards of Professional Conduct. It introduces the principles of ethical behavior, professional integrity, and the responsibilities of CFA charterholders. It also provides real-world scenarios to apply ethical principles in investment decision-making. Along with best practices, this module forms the foundation of trust and credibility in the financial industry.
              </p>
              <IoIosArrowDown className="text-center mx-auto text-[30px] " />
            </div>
          </div>
          <div className="md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border">
            <Image src="/part-1/desc_vrm.svg" alt="img" width={260} height={200} className="mx-auto -mt-[20px]" />
            <div className="md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[340px]  transition-height duration-500 ease-in-out shadow-xl">
              <IoIosArrowUp className="text-center mx-auto text-[30px] " />
              <h1 className="md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] my-[5px] mb-8">Quantitative Methods</h1>
              <p className=" text-[#6A1C1A]  text-[14px] px-2">
                {" "}
                The main focus of this module is to equip candidates with essential quantitative tools used in financial analysis. It covers topics such as time value of money, probability theory, hypothesis testing, correlation and regression analysis, and time series. These tools form the basis for investment valuation and risk analysis throughout the CFA curriculum.
              </p>
              <IoIosArrowDown className="text-center mx-auto text-[30px] " />
            </div>
          </div>
          <div className="md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border">
            <Image src="/part-1/desc_fmp.svg" alt="img" width={260} height={200} className="mx-auto -mt-[20px]" />
            <div className="md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[340px]  transition-height duration-500 ease-in-out shadow-xl">
              <IoIosArrowUp className="text-center mx-auto text-[30px] " />
              <h1 className="md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] my-[5px]">
              Economics
              </h1>
              <p className=" text-[#6A1C1A]  text-[14px] px-2">
              This module provides a detailed overview of microeconomic and macroeconomic principles, with applications in investment analysis. Topics include demand and supply, market structures, monetary and fiscal policy, economic growth, and international trade. Understanding these concepts helps candidates analyze how economic events influence asset prices and portfolio performance.
              </p>
              <IoIosArrowDown className="text-center mx-auto text-[30px] " />
            </div>
          </div>
          <div className="md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border">
            <Image src="/part-1/desc_qta.svg" alt="img" width={260} height={200} className="mx-auto -mt-[20px]" />
            <div className="md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[340px]  transition-height duration-500 ease-in-out shadow-xl">
              <IoIosArrowUp className="text-center mx-auto text-[30px] " />
              <h1 className="md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] my-[5px] mb-5">
              Financial Reporting and <br />
              Analysis
              </h1>
              <p className=" text-[#6A1C1A]  text-[14px] px-2">
              This module is essential for understanding how to interpret and analyze financial statements. It covers the income statement, balance sheet, cash flow statement, and financial ratios. Candidates also learn how accounting standards and financial reporting choices affect analysis. Mastery of this module enables effective evaluation of a company&apos;s financial health and investment potential.
              </p>
              <IoIosArrowDown className="text-center mx-auto text-[30px] " />
            </div>
          </div>
        </div>
      </div>

      {/* Composition and Exam Structure */}
      {/* large screen */}
      <div className="hidden  lg:flex h-[520px] justify-center my-[70px] mt-[150px]">
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[50%]">
          <Image src="/part-1/caes.svg" width={400} height={450} alt="image" className="absolute -right-[60px] top-[40px]" />
        </div>
        <div className=" flex justify-start w-[80%] ml-[100px] ">
          <div className="max-w-[800px] h-[100%] flex flex-col justify-center pr-4">
            <h1 className="text-[35px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold ">
              Composition and Exam <span className="text-[#BE4E1E]">Structure </span>
            </h1>
            <p className="text-[14px] lg:text-[20px] leading-[40px] font-[400]  ">
            CFA Level 1 comprises 180 multiple-choice questions, split evenly across two sessions of 2 hours and 15 minutes each. The exam is delivered in a computer-based format. The questions are designed to test your knowledge and application of concepts across 10 topic areas.
              <br />
              There is no negative marking, and all questions carry equal weight.
            </p>
          </div>
        </div>
      </div>
      {/* Small screen */}

      <div className="w-[100%] lg:hidden mt-[80px] sm:mt-[23%] ">
        <div className="bg-[#FFF4DA] h-[150px] mt-auto relative ">
          <Image src="/part-1/caes.svg" width={170} height={100} alt="image" className="mx-auto sm:w-[30%] bottom-0 absolute  center  left-0  right-0 text-center z-[1]" />
        </div>
        <div className="px-5 max-w-[700px] mx-auto">
          <h2 className="text-[19px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-bold my-5 text-center">
            Composition and Exam <span className="text-[#BE4E1E]"> Structure</span>{" "}
          </h2>
          <p className=" text-[14px] sm:text-[14px] xl:text-[24px] text-center">
            {" "}
            CFA Level 1 comprises 180 multiple-choice questions, split evenly across two sessions of 2 hours and 15 minutes each. The exam is delivered in a computer-based format. The questions are designed to test your knowledge and application of concepts across 10 topic areas.
            <br />
            There is no negative marking, and all questions carry equal weight.
          </p>
        </div>
      </div>
      {/* study plan */}
      <div className="max-w-[1300px] mx-auto flex justify-center md:justify-between flex-wrap lg:flex-nowrap p-5 mt-[20px]">
        <div className="lg:max-w-[680px] sm:min-w-[600px]  w-[100%] lg:w-[50%] text-center lg:text-left flex flex-col justify-between">
          <h2 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] mb-[10px] xl:mb-[50px]  font-semibold">
            Study <span className="text-[#BE4E1E]"> Plan</span>{" "}
          </h2>
          <p className="text-[14px]  lg:text-[20px] sm:leading-[30px]   lg:leading-[35px] font-[400] mb-5">
          Ideally, a candidate preparing for the CFA Level 1 exam should allocate about 300–350 hours of study, typically spread over 5–6 months. A structured study plan should cover all 10 topic areas, ensuring adequate time for revision and mock exams. Sequencing study sessions based on topic weight and interdependencies is recommended for optimal understanding.
          </p>
        </div>
        <div className="md:w-[50%] max-w-[500px]  mx-auto ">
          <div className="relative overflow-hidden w-full  mx-auto " style={{ paddingTop: "56.25%" }}>
            <iframe className="absolute top-0 left-0 bottom-0 right-0 w-full h-full" src="https://www.youtube.com/embed/6sTEUkR40uI?si=HNhS66nIiKIDAfia"></iframe>
          </div>
          <h2 className="w-[300px] border mx-auto bg-[#BE4E1E] py-3  text-[24px] rounded-full text-center font-semibold text-white mt-4 ">
            <Link href="/part-1/study-plan">Go to Study Plan</Link>
          </h2>
        </div>
      </div>
      {/* Preparation Tips */}
      <div className="my-[30px] md:my-[100px] max-w-[1350px] mx-auto px-5 ">
        <h1 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-bold text-center my-[10px]">
          Preparation <span className="text-[#BE4E1E]">Tips </span>
        </h1>
        <p className="text-left  mx-auto text-[14px] lg:text-[20px] leading-[25px] xl:leading-[34px] font-[400] ">
          Preparing for CFA Level 1 involves careful consideration of several crucial aspects. The effective selection and management of these factors play a pivotal role in ensuring a robust preparation:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-[10px] lg:mt-[40px] overflow-hidden ">
          <div className="min-w-[300px] max-w-[600px]  my-3  mx-auto md:m-5  bg-[#FFF4DA] md:p-6 p-3 rounded-xl  ">
            <Image src="/part-1/pt_pw.svg" width={50} height={50} alt="Image" />
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">1. Preparation Window </h2>
            <p className="text-left  mx-auto text-[14px] lg:text-[16px]  leading-[25px] font-[400] md:pr-5">Allow at least 5–6 months of focused preparation for CFA Level 1 to ensure thorough coverage of all topics.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] my-3  md:m-5  mx-auto bg-[#FFF4DA] md:p-6 p-3 rounded-xl ">
            <Image src="/part-1/pt_tr.svg" width={50} height={50} alt="Image" />
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">2. Time Required </h2>
            <p className="text-left  mx-auto text-[14px] lg:text-[16px]  leading-[25px] font-[400] md:pr-5">
            Commit around 300–350 hours of study. Avoiding shortcuts and focusing on concept clarity is key to success.
            </p>
          </div>
          <div className="min-w-[300px] max-w-[600px] my-3  md:m-5  mx-auto bg-[#FFF4DA] md:p-6 p-3 rounded-xl ">
            <Image src="/part-1/pt_m.svg" width={50} height={50} alt="Image" />
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">3. Material</h2>
            <p className="text-left  mx-auto text-[14px] lg:text-[16px]  leading-[25px] font-[400] md:pr-5">
            Use official CFA Institute curriculum along with curated study materials. MidhaFin offers video lectures, summaries, and topic-wise question banks.
            </p>
          </div>
          <div className="min-w-[300px] max-w-[600px] my-3  md:m-5  mx-auto bg-[#FFF4DA] md:p-6 p-3 rounded-xl ">
            <Image src="/part-1/pt_q.svg" width={50} height={50} alt="Image" />
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">4. Questions</h2>
            <p className="text-left  mx-auto text-[14px] lg:text-[16px]  leading-[25px] font-[400] md:pr-5">
            Solve 2,500+ practice questions, including past CFA-style mock questions. This builds confidence and exposes you to various question formats.
            </p>
          </div>
          <div className="min-w-[300px] max-w-[600px] my-3  md:m-5  mx-auto bg-[#FFF4DA] md:p-6 p-3 rounded-xl ">
            <Image src="/part-1/pt_pt.svg" width={50} height={50} alt="Image" />
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">5. Periodic Tests</h2>
            <p className="text-left  mx-auto text-[14px] lg:text-[16px]  leading-[25px] font-[400] md:pr-5 ">
            MidhaFin conducts monthly assessments to track performance and reinforce learning. These are based on the chapters completed during the month.
            </p>
          </div>
          <div className="min-w-[300px] max-w-[600px] my-3  md:m-5  mx-auto bg-[#FFF4DA] md:p-6 p-3 rounded-xl ">
            <Image src="/part-1/pt_mt.svg" width={50} height={50} alt="Image" />
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">6. Mock Tests</h2>
            <p className="text-left  mx-auto text-[14px] lg:text-[16px]  leading-[25px] font-[400] md:pr-5 ">
            Take at least 4–5 full-length mock exams to simulate the actual test environment. MidhaFin mocks provide percentile analysis and topic-wise breakdown.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-[22px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-semibold mb-4  md:my-[50px] text-center">
          Frequently Asked <span className="text-[#BE4E1E]"> Queries</span>{" "}
        </h1>
        <Accordion buttonsData={buttonsData} />
      </div>
    </div>
  );
}
