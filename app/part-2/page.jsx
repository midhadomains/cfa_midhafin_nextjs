import Link from "next/link";
import Accordion from "@/components/Accordian";
import Courses from "@/components/Part-1/Courses";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const metadata = {
  title: 'FRM Part 2 - Comprehensive Study Material',
  description: "Prepare for FRM Part 2 with Midhafin's comprehensive online training. Access study plans, sample questions, and expert resources to excel in your FRM certification exam.",
  keywords: "FRM part 2, frm part 2, frm second part"
}


export default function page() {
  const buttonsData = [
    {
      id: 1,
      text: "How is FRM Part 2 different from Part 1?",
      data: "While Part 1 leans towards a foundational and numerical focus, Part 2 takes a turn by placing a greater emphasis on theoretical aspects. What's intriguing is that, despite the theoretical nature, these aspects in Part 2 are more industry-oriented and practical, offering a unique blend that challenges candidates to apply their theoretical understanding in real-world contexts.Part 2 requires candidates to integrate knowledge from different subjects and apply them in a holistic manner. For instance, questions may necessitate blending concepts from market, credit, and operational risk to provide comprehensive solutions.",
    },
    {
      id: 2,
      text: "What study materials are recommended for preparing for FRM Part 2?",
      data: "MidhaFin's study materials offer a comprehensive and detailed preparation experience tailored to meet the requirements of FRM Part 2. Crafted in alignment with the official GARP curriculum, our material provides a robust foundation for exam success. It highly recommended to use our material as the primary source of preparation.Our learning materials include lecture videos, complete study materials, revision videos, a doubt-solving forum, an interactive student group, a customized study plan, question bank PDFs, past sample paper questions, five mock tests, module-wise tests, and question-solving videos. This inclusive package ensures a thorough understanding and effective preparation for the exam.",
    },
    {
      id: 3,
      text: "How long does it take to prepare for FRM Part 2?",
      data: "The suggested guideline by the MidhaFin team is 600 hours minimum for FRM Part 2 preparation, and candidates may need to adjust their study timelines based on their prior knowledge, learning pace, and personal commitments. It is advisable to start preparation well in advance to allow for a gradual and thorough understanding of the material.",
    },
    {
      id: 4,
      text: "How often is the FRM Part 2 exam offered?",
      data: "As of 2024, The FRM Part 2 exam is offered thrice a year. Specifically, candidates have the opportunity to take the exam during two one-week exam windows, typically in May and November. And there is a single exam date in August.This schedule allows candidates to plan their preparation and choose a convenient timeframe to sit for the exam. It's important for candidates to be aware of the specific exam dates for each year and plan their study schedule accordingly to ensure optimal readiness for the FRM Part 2 examination.",
    },
    {
      id: 5,
      text: "What is the customized study plan by MidhaFin ?",
      data: "The customized study plan is a personalized plan that tailors the basic study plan to meet the specific needs of each candidate. This structured plan includes a week-by-week breakdown, module-wise allocation, daily study targets, and utilization of various resources such as study materials, lecture videos, and question banks. The plan emphasizes regular practice, review, and the importance of mock exams to simulate real test conditions. It also provides support through doubt-solving forums and encourages participation in an interactive student group for collaborative learning.The customization is achieved through a dedicated Customized Study Plan (CSP) meeting with our instructor. As soon as candidates enroll in our courses, this meeting ensures that the study plan aligns with their individual learning styles, strengths, and areas that require focused attention. This personalized approach aims to optimize candidates' preparation for the FRM Part 2 exam, enhancing their overall learning experience and chances of success.",
    },
    {
      id: 6,
      text: "How often is the FRM Part 2 exam offered?",
      data: "As of 2024, The FRM Part 2 exam is offered thrice a year. Specifically, candidates have the opportunity to take the exam during two one-week exam windows, typically in May and November. And there is a single exam date in August.This schedule allows candidates to plan their preparation and choose a convenient timeframe to sit for the exam. Its important for candidates to be aware of the specific exam dates for each year and plan their study schedule accordingly to ensure optimal readiness for the FRM Part 2 examination.",
    },
  ];

  const course = [
    {
      "name": "FRM® Part-2 Sample Course",
      "image": "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_2_sample_course_720.webp",
      "price": "",
      "other": "free",
      "instructor": "Micky Midha",
      "details": [
        "12 Hrs of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Lecture PDFs ",
        "class notes"
      ],
      "link": "https://edu.midhafin.com/courses/MidhaFin-FRM-Part-2-Sample-Course-6305cfe7e4b0559d1844da2b",
      "rating": 4.5,
      "tp": "SC-2",
      "category": "frm",
      "sub_category": "part-2_sample_course"
    },
    {
      "name": "FRM® Part-2 Self Paced Course",
      "image": "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_2_self-paced_course_720.webp",
      "price": "",
      "other": "",
      "instructor": "Micky Midha",
      "details": [
        "250+ Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      "link": "https://edu.midhafin.com/courses/FRM-Part-2-Self-Paced-Course-628f55be0cf2d265f3bcb964",
      "rating": 4.5,
      "tp": "TP-1",
      "category": "frm",
      "sub_category": "part-2_self_paced_course"
    },
    {
      "name": "FRM® Part-1 and Part-2 Combined Package",
      "image": "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part-1___2_training_package_1__self-paced_course__01_720.webp",
      "price": "",
      "other": "",
      "instructor": "Micky Midha",
      "details": [
        "450+ Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      "link": "https://edu.midhafin.com/courses/FRM-Part-1-and-Part-2-Combined-Self-Paced-Course-62cfe0dd0cf26cb7b9d724dc",
      "rating": 4.5,
      "tp": "TP-1",
      "category": "frm",
      "sub_category": "part-1_and_part-2_combined_package"
    },

  ]

  return (
    <div className="bg-white  ">
      <div className="text-center bg-gradient-to-b from-[#ffe4a4a0] from-[1%] to-[100%] p-4 max-h-[300px]">
        {/* <div className=" h-[50px] max-w-[700px] mx-auto  "></div> */}
        <h1 className="text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-semibold text-[#6A1C1A] mt-[70px]">
          <span className="text-[#BF4E1E]">C</span>hartered&nbsp;
          <span className="text-[#BF4E1E]">F</span>inancial&nbsp;
          <span className="text-[#BF4E1E]">A</span>nalyst
        </h1>
        <h1 className="text-[#6A1C1A] text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]  font-bold">CFA Level - 2</h1>
      </div>
      {/* <Courses course={course} className="scale-90	" /> */}
      {/* Eligibility and pre Requisites */}

      {/* Large screem */}
      <div className="hidden  lg:flex h-[420px] justify-center my-[70px] ">
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[40%] flex-shrink-0">
          <Image src='/part-2/part2left.svg' width={350} height={450} alt="image" className=" -mr-[340px] flex-shrink-0 w-[550px] -bottom-5 " />
        </div>
        <div className=" flex justify-start w-[80%] ml-[100px] ">
          <div className="max-w-[800px] h-[100%] flex flex-col justify-top pr-4">
            <h1 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold">Eligibility and/or <span className="text-[#BE4E1E]"> Pre-Requisites</span> </h1>
            <p className="text-[14px] lg:text-[20px] leading-[40px] font-[400]  ">In order for your Level 2 examination to be evaluated, you <span className="text-[#BE4E1E]">must successfully complete CFA Level 1.</span></p>
          </div>
        </div>
      </div>
      {/* Small screen */}
      <div className="w-[100%] lg:hidden mt-[18%] sm:mt-[25%] ">
        <div className="bg-[#FFF4DA] h-[150px] mt-[100px] xs:mt-[200px] relative ">
          <Image src='/part-2/part2left.svg' width={170} height={100} alt="image" className="mx-auto w-[60%] xs:w-[350px] bottom-0 absolute  center  left-0  right-0 text-center z-[1]" />
        </div>
        <div className="px-5 max-w-[700px] mx-auto">
          <h2 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-bold my-5 ">Eligibility and/or <span className="text-[#BE4E1E]"> Pre-Requisites</span></h2>
          <p className="text-[14px] sm:text-[14px]">In order for your Part 2 examination to be evaluated, you <span className="text-[#BE4E1E]">must successfully complete FRM Part 1.</span></p>
        </div>
      </div>
      {/* About the exam */}

      {/* Large screem */}
      <div className="hidden  lg:flex  justify-center mt-[200px]">
        <div className=" flex justify-end w-[80%] mr-[100px] ">
          <div className="max-w-[900px] h-[100%] flex flex-col justify-end pl-4">
            <h1 className="text-[20px] sm:text-[27px] lg:text-[35px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold">About the Exam - <span className="text-[#BF4E1E]">CFA Level 2</span></h1>
            <p className="text-[11px] md:text-[14px] lg:text-[20px] leading-[40px] font-[400] ">CFA Level 2 is the second level of the Chartered Financial Analyst (CFA) examination, offered by the CFA Institute. This stage of the CFA program focuses on the application and analysis of investment tools and concepts introduced in CFA Level 1. It offers a more in-depth exploration of core topics including equity valuation, fixed income, derivatives, portfolio management, and corporate finance, with a strong emphasis on data interpretation and real-world scenarios.<br />
            The curriculum is designed with the assumption that candidates have a solid understanding of Level 1 concepts. However, CFA Level 2 also introduces more advanced and nuanced material, including complex valuation techniques and industry-specific applications. It is both a test of knowledge retention and the ability to apply concepts to realistic investment situations.</p>
          </div>
        </div>
        <div className="bg-[#FFF4DA] min-w-[300px] max-h-[450px] flex  justify-end relative w-[50%] mt-[150px] ">
          <Image src='/part-2/part2right.svg' width={400} height={350} alt="image" className="absolute -left-[100px] -bottom-9" />
        </div>
      </div>
      {/* Small screen */}

      <div className="w-[100%] lg:hidden mt-[30%] ">
        <div className="bg-[#FFF4DA] h-[150px] mt-[100px] xs:mt-[250px] relative ">
          <Image src='/part-2/part2right.svg' width={170} height={100} alt="image" className="mx-auto w-[40%] xs:w-[270px] bottom-0 absolute  center  left-0  right-0 text-center z-[1]" />
        </div>
        <div className="px-5 max-w-[700px] mx-auto">
          <h2 className="text-[20px] sm:text-[27px] lg:text-[35px] xl:text-[40px] font-bold my-5 ">About the Exam - <span className="text-[#BE4E1E]"> FRM Part 2</span></h2>
          <p className=" text-[14px]">CFA Level 2 is the second level of the Chartered Financial Analyst (CFA) examination, offered by the CFA Institute. This stage of the CFA program focuses on the application and analysis of investment tools and concepts introduced in CFA Level 1. It offers a more in-depth exploration of core topics including equity valuation, fixed income, derivatives, portfolio management, and corporate finance, with a strong emphasis on data interpretation and real-world scenarios.<br />
          The curriculum is designed with the assumption that candidates have a solid understanding of Level 1 concepts. However, CFA Level 2 also introduces more advanced and nuanced material, including complex valuation techniques and industry-specific applications. It is both a test of knowledge retention and the ability to apply concepts to realistic investment situations.</p>
        </div>
      </div>

      {/* secondary navbar */}
      {/* <ul className="bg-gradient-to-r from-[#BE4E1E] to-[#E7AC66] flex justify-around max-w-[1100px] mx-auto py-5 text-[16px] md:text-[24px] px-2 text-white font-[400] md:font-[500] tracking-wide rounded-full">
        <Link href='/part-2/study-plan'><li>Study Plan</li> </Link>
        <li>|</li>
        <Link href='/part-2/syllabus'><li>Syllabus</li></Link>
        <li>|</li>
        <Link href='/dates-and-deadlines'><li>Dates & Deadlines</li></Link>
      </ul> */}
      <div className="bg-[#F0EDE68A] py-5 md:py-9 my-[8%] ">
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-center mb-8"><span className="text-[#BE4E1E]">FRM </span> prep resources</h2>
        <ul className=" flex flex-wrap justify-around items-center gap-3  max-w-[1400px] px-1 md:px-[50px] mx-auto text-white text-[14px] md:text-[16px]  lg:text-[19px] xl:text-[24px] font-semibold">
          <Link href="/part-2/study-plan" className="w-[24%] bg-[#6A1C1A] hover:bg-[#BE4E1E] transition-colors duration-150 text-center rounded-full min-w-[160px] px-2 py-2 sm:py-3 lg:py-5">
            <li>Study Plan</li>{" "}
          </Link>
          <Link href="/part-2/syllabus" className="w-[24%] bg-[#6A1C1A] hover:bg-[#BE4E1E] transition-colors duration-150 text-center rounded-full min-w-[160px] px-2 py-2 sm:py-3 lg:py-5">
            <li>Syllabus</li>
          </Link>
          <Link href="/dates-and-deadlines"  className="w-[24%] bg-[#6A1C1A] hover:bg-[#BE4E1E] transition-colors duration-150 text-center rounded-full min-w-[160px] px-2 py-2 sm:py-3 lg:py-5">
            <li>Dates & Deadlines</li>
          </Link>
          {/* <Link href="/part-1/sample-questions"  className="w-[24%] bg-[#6A1C1A] hover:bg-[#BE4E1E] transition-colors duration-150 text-center rounded-full min-w-[160px] px-2 py-2 sm:py-3 lg:py-5">
            <li>Sample Questions</li>
          </Link> */}
        </ul>
      </div>
      {/* weightage module */}
      <div className="max-w-[1350px] mx-auto px-5  w-[100%]  sm:mt-[100px]">
        <h1 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px]  font-semibold mt-[30px]  sm:mt-[50px] text-center">CFA Level 2 is composed of <span className="text-[#BE4E1E]"> Ten modules</span> </h1>
        <p className="text-center text-[11px] sm:text-[14px] lg:text-[20px] text-[#737373] my-2 ">Each with its respective weighting as follows:</p>
        <ul className="mt-[20px] ">
          <Link href='/part-2/syllabus#market-risk-management'>
          
          <li className="flex  bg-[#FFF8ED] h-[101px] sm:h-[120px] lg:h-[140px] border border-[#FFD59B] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black w-[25%] sm:w-[18%] text-center lg:text-[36px] sm:text-[25px] text-[20px] my-auto">10–15%</h1>
            <h1 className="font-bold  text-[#6A1C1A]  lg:text-[24px] sm:text-[17px] text-[14px]  my-auto ">Ethical and Professional Standards</h1>
          </li>
          </Link>

          <Link href='/part-2/syllabus#credit-risk-management'>     
          <li className="flex bg-[#FFF2E1] h-[101px] sm:h-[120px] lg:h-[140px] border border-[#FFB494] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black  w-[25%] sm:w-[18%] flex-shrink-0 text-center lg:text-[36px] sm:text-[25px] text-[20px] my-auto">5-10%</h1>
            <h1 className="font-bold  text-[#6A1C1A]  lg:text-[24px] sm:text-[17px] text-[14px]  my-auto  ">Quantitative Methods</h1>
          </li>
          </Link>

          <Link href='/part-2/syllabus#operational-risk-resilience'>
          
          <li className="flex bg-[#FFEDD3] h-[102px] sm:h-[120px] lg:h-[140px] border border-[#FFD59B] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black  w-[25%] sm:w-[18%] text-center lg:text-[36px] sm:text-[25px] text-[20px] my-auto flex-shrink-0 ">5-10%</h1>
            <h1 className="font-bold  text-[#6A1C1A] lg:text-[24px] sm:text-[17px] text-[14px]  my-auto   ">Economics</h1>
          </li>
          </Link>

          <Link href='/part-2/syllabus#liquidity-treasury-risk-management'>
          
          <li className="flex bg-[#FFE5C1]  h-[75px] sm:h-[95px] lg:h-[105px] border border-[#FFB494] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black  w-[25%] sm:w-[18%] text-center lg:text-[36px] sm:text-[25px] text-[20px] my-auto flex-shrink-0 ">10-15%</h1>
            <h1 className="font-bold  text-[#6A1C1A] lg:text-[24px] sm:text-[17px] text-[14px]  my-auto  ">Financial Statement Analysis</h1>
          </li>
          </Link>

          <Link href='/part-2/syllabus#risk-investment-management'>
          <li className="flex bg-[#FFDBAA] h-[77px] sm:h-[100px] lg:h-[105px] border border-[#FFB494] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black  w-[25%] sm:w-[18%] text-center  lg:text-[36px] sm:text-[25px] text-[20px] my-auto flex-shrink-0 ">15%</h1>
            <h1 className="font-bold  text-[#6A1C1A]  lg:text-[24px] sm:text-[17px] text-[14px]  my-auto ">Risk Management and Investment Management (RM)</h1>
          </li>
          </Link>
          <Link href='/part-2/syllabus#current-issues-financial-markets'>
          
          <li className="flex bg-[#FFD59B] h-[50px] sm:h-[100px] lg:h-[105px] border border-[#FFB494] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black  w-[25%] sm:w-[18%] text-center lg:text-[36px] sm:text-[25px] text-[20px] my-auto flex-shrink-0 ">5-10%</h1>
            <h1 className="font-bold  text-[#6A1C1A]  lg:text-[24px] sm:text-[17px] text-[14px]  my-auto   ">Corporate Issuers</h1>
          </li>
          </Link>

          <Link href='/part-2/syllabus#market-risk-management'>
          
          <li className="flex  bg-[#FFF8ED] h-[101px] sm:h-[120px] lg:h-[140px] border border-[#FFD59B] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black w-[25%] sm:w-[18%] text-center lg:text-[36px] sm:text-[25px] text-[20px] my-auto">10–15%</h1>
            <h1 className="font-bold  text-[#6A1C1A]  lg:text-[24px] sm:text-[17px] text-[14px]  my-auto ">Equity Investments</h1>
          </li>
          </Link>

          <Link href='/part-2/syllabus#credit-risk-management'>     
          <li className="flex bg-[#FFF2E1] h-[101px] sm:h-[120px] lg:h-[140px] border border-[#FFB494] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black  w-[25%] sm:w-[18%] flex-shrink-0 text-center lg:text-[36px] sm:text-[25px] text-[20px] my-auto">10-15%</h1>
            <h1 className="font-bold  text-[#6A1C1A]  lg:text-[24px] sm:text-[17px] text-[14px]  my-auto  ">Fixed Income</h1>
          </li>
          </Link>

          <Link href='/part-2/syllabus#operational-risk-resilience'>
          
          <li className="flex bg-[#FFEDD3] h-[102px] sm:h-[120px] lg:h-[140px] border border-[#FFD59B] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black  w-[25%] sm:w-[18%] text-center lg:text-[36px] sm:text-[25px] text-[20px] my-auto flex-shrink-0 ">5-10%</h1>
            <h1 className="font-bold  text-[#6A1C1A] lg:text-[24px] sm:text-[17px] text-[14px]  my-auto   ">Derivatives</h1>
          </li>
          </Link>

          <Link href='/part-2/syllabus#liquidity-treasury-risk-management'>
          
          <li className="flex bg-[#FFE5C1]  h-[75px] sm:h-[95px] lg:h-[105px] border border-[#FFB494] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black  w-[25%] sm:w-[18%] text-center lg:text-[36px] sm:text-[25px] text-[20px] my-auto flex-shrink-0 ">5-10%</h1>
            <h1 className="font-bold  text-[#6A1C1A] lg:text-[24px] sm:text-[17px] text-[14px]  my-auto  ">Alternative Investments</h1>
          </li>
          </Link>

          <Link href='/part-2/syllabus#risk-investment-management'>
          <li className="flex bg-[#FFDBAA] h-[77px] sm:h-[100px] lg:h-[105px] border border-[#FFB494] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black  w-[25%] sm:w-[18%] text-center  lg:text-[36px] sm:text-[25px] text-[20px] my-auto flex-shrink-0 ">5-10%</h1>
            <h1 className="font-bold  text-[#6A1C1A]  lg:text-[24px] sm:text-[17px] text-[14px]  my-auto ">Risk Management and Investment Management (RM)</h1>
          </li>
          </Link>
          <Link href='/part-2/syllabus#current-issues-financial-markets'>
          
          <li className="flex bg-[#FFD59B] h-[50px] sm:h-[100px] lg:h-[105px] border border-[#FFB494] hover:scale-[1.01] duration-300">
            <h1 className="text-[#6A1C1A] font-black  w-[25%] sm:w-[18%] text-center lg:text-[36px] sm:text-[25px] text-[20px] my-auto flex-shrink-0 ">10-15%</h1>
            <h1 className="font-bold  text-[#6A1C1A]  lg:text-[24px] sm:text-[17px] text-[14px]  my-auto   ">Portfolio Management and Wealth Planning</h1>
          </li>
          </Link>
        </ul>
        {/* desc section */}
        {/* large screen */}
        <div className="max-w-[1300px] mx-auto hidden md:block">
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="text-[14px] sm:text-[20px] lg:text-[40px] font-bold ">Ethical and Professional Standards</h2>
              <p className="text-[11px] sm:text-[14px] lg:text-[20px] lg:leading-[40px]">This module is designed to impart fundamental knowledge of the CFA Institute's Code of Ethics and Standards of Professional Conduct. It introduces the principles of ethical behavior, professional integrity, and the responsibilities of CFA charterholders. It also provides real-world scenarios to apply ethical principles in investment decision-making. Along with best practices, this module forms the foundation of trust and credibility in the financial industry.</p>
            </div>
            <Image src='/part-2/mr.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Quantitative Methods</h2>
              <p className="text-[11px] md:text-[14px] lg:text-[20px] lg:leading-[40px]">The main focus of this module is to equip candidates with essential quantitative tools used in financial analysis. It covers topics such as time value of money, probability theory, hypothesis testing, correlation and regression analysis, and time series. These tools form the basis for investment valuation and risk analysis throughout the CFA curriculum.</p>
            </div>
            <Image src='/part-2/cr.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Economics</h2>
              <p className="text-[11px] md:text-[14px] lg:text-[20px] lg:leading-[40px]">This module provides a detailed overview of microeconomic and macroeconomic principles, with applications in investment analysis. Topics include demand and supply, market structures, monetary and fiscal policy, economic growth, and international trade. Understanding these concepts helps candidates analyze how economic events influence asset prices and portfolio performance. </p>
            </div>
            <Image src='/part-2/or.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Financial Reporting and Analysis</h2>
              <p className="text-[11px] md:text-[14px] lg:text-[20px] lg:leading-[40px]">This module is essential for understanding how to interpret and analyze financial statements. It covers the income statement, balance sheet, cash flow statement, and financial ratios. Candidates also learn how accounting standards and financial reporting choices affect analysis. Mastery of this module enables effective evaluation of a company's financial health and investment potential.</p>
            </div>
            <Image src='/part-2/lr.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          {/* <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Risk Management and Investment Management</h2>
              <p className="text-[11px] md:text-[14px] lg:text-[20px] lg:leading-[40px]"> This module revisits some content from FRM Part 1 and introduces additional conceptual, numerical, and theoretical chapters. It explores applying risk management techniques to the investment management process, covering factor theory, portfolio construction, risk metrics, risk budgeting, monitoring and performance measurement, portfolio-based performance analysis, and hedge funds.</p>
            </div>
            <Image src='/part-2/rm.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Current Issues in Financial Markets</h2>
              <p className="text-[11px] md:text-[14px] lg:text-[20px] lg:leading-[40px]">This module focuses on significant topics with a substantial impact on financial markets. It includes machine learning (ML) and artificial intelligence (AI), climate risk, inflation risk, and emerging technologies like blockchain, cryptocurrency, and decentralized finance. </p>
            </div>
            <Image src='/part-2/ci.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div> */}
        </div>
        {/* small screen */}

        <div className="max-w-[1300px] mx-auto flex justify-center flex-wrap   md:hidden mt-[30px]">
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/mr.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[305px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out" />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] mb-[5px] '>Ethical and Professional<br /> Standards</h1>
              <p className=' text-[#6A1C1A]  text-[12px] sm:text-[14px] px-2'>This module is designed to impart fundamental knowledge of the CFA Institute's Code of Ethics and Standards of Professional Conduct. It introduces the principles of ethical behavior, professional integrity, and the responsibilities of CFA charterholders. It also provides real-world scenarios to apply ethical principles in investment decision-making. Along with best practices, this module forms the foundation of trust and credibility in the financial industry.</p>
            </div>
          </div>
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/cr.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[270px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out " />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] mb-[5px]'>Quantitative Methods</h1>
              <p className=' text-[#6A1C1A]  text-[12px] sm:text-[14px] px-2'>The main focus of this module is to equip candidates with essential quantitative tools used in financial analysis. It covers topics such as time value of money, probability theory, hypothesis testing, correlation and regression analysis, and time series. These tools form the basis for investment valuation and risk analysis throughout the CFA curriculum.</p>
            </div>
          </div>
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/or.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[285px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out" />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] mb-[5px]'>Economics</h1>
              <p className=' text-[#6A1C1A]  text-[12px] sm:text-[14px] px-2'>This module provides a detailed overview of microeconomic and macroeconomic principles, with applications in investment analysis. Topics include demand and supply, market structures, monetary and fiscal policy, economic growth, and international trade. Understanding these concepts helps candidates analyze how economic events influence asset prices and portfolio performance.</p>
            </div>
          </div>
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/lr.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[285px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out" />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] mb-[5px]'>Financial Reporting and Analysis</h1>
              <p className=' text-[#6A1C1A]  text-[12px] sm:text-[14px] px-2'>This module is essential for understanding how to interpret and analyze financial statements. It covers the income statement, balance sheet, cash flow statement, and financial ratios. Candidates also learn how accounting standards and financial reporting choices affect analysis. Mastery of this module enables effective evaluation of a company's financial health and investment potential.</p>
            </div>
          </div>
          {/* <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/rm.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[260px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out" />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:mb-[10px] mb-[5px]'>Risk Management and Investment Management</h1>
              <p className=' text-[#6A1C1A]  text-[12px] sm:text-[14px] px-2'>This module revisits some content from FRM Part 1 and introduces additional conceptual, numerical, and theoretical chapters. It explores applying risk management techniques to the investment management process, covering factor theory, portfolio construction, risk metrics, risk budgeting, monitoring and performance measurement, portfolio-based performance analysis, and hedge funds.</p>
            </div>
          </div>
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/ci.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[230px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out" />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] mb-[5px]'>Current Issues in <br />Financial Markets</h1>
              <p className=' text-[#6A1C1A]  text-[12px] sm:text-[14px] px-2'>This module focuses on significant topics with a substantial impact on financial markets. It includes machine learning (ML) and artificial intelligence (AI), climate risk, inflation risk, and emerging technologies like blockchain, cryptocurrency, and decentralized finance.</p>
            </div>
          </div> */}

        </div>

      </div>

      {/* Composition and Exam Structure */}
      {/* large screen */}
      <div className="hidden  lg:flex h-[520px] justify-center my-[70px] mt-[150px]">
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[50%]">
          <Image src='/part-2/Group 383.png' width={400} height={450} alt="image" className="absolute -right-[60px] bottom-0" />
        </div>
        <div className=" flex justify-start w-[80%] ml-[100px] ">
          <div className="max-w-[800px] h-[100%] flex flex-col justify-center pr-4">
            <h1 className="text-[35px] lg:text-[40px] mb-[20px] xl:mb-[40px] font-semibold ">Composition and Exam <span className="text-[#BE4E1E]">Structure </span></h1>
            <p className="text-[16px] sm:text-[18px] lg: leading-[40px] font-[400]  ">CFA Level 2 consists of 88 questions arranged in item sets (vignettes) with multiple questions each. The exam is split into two sessions of 2 hours 12 minutes, all computer-based. The questions test application, interpretation, and analysis of financial data across key topics in the CFA curriculum.</p>
          </div>
        </div>
      </div>
      {/* Small screen */}

      <div className="w-[100%] lg:hidden mt-[80px] sm:mt-[23%] ">
        <div className="bg-[#FFF4DA] h-[150px] mt-auto relative ">
          <Image src='/part-2/Group 383.png' width={170} height={100} alt="image" className="mx-auto sm:w-[30%] bottom-0 absolute  center  left-0  right-0 text-center z-[1]" />
        </div>
        <div className="px-5 max-w-[700px] mx-auto">
          <h2 className="text-[20px] lg:text-[30px] xl:text-[40px] font-bold my-5 text-center">Composition and Exam <span className="text-[#BE4E1E]"> Structure</span> </h2>
          <p className=" text-[14px] sm:text-[20px] xl:text-[24px] text-center"> CFA Level 2 consists of 88 questions arranged in item sets (vignettes) with multiple questions each. The exam is split into two sessions of 2 hours 12 minutes, all computer-based. The questions test application, interpretation, and analysis of financial data across key topics in the CFA curriculum.</p>
        </div>
      </div>
      {/* study plan */}
      <div className="max-w-[1300px] mx-auto flex justify-start md:justify-around flex-wrap lg:flex-nowrap p-5 mt-[20px]">
        <div className="lg:max-w-[680px] sm:min-w-[600px]  w-[100%] lg:w-[50%] text-center lg:text-left flex flex-col justify-">
          <h2 className="text-[20px] lg:text-[30px] xl:text-[40px]  mb-[10px] xl:mb-[50px]  font-semibold">Study <span className="text-[#BE4E1E]"> Plan</span> </h2>
          <p className="text-[14px]  lg:text-[20px] font-[400] mb-5"> This study plan provides a 20-week roadmap for CFA Level 2 preparation, detailing chapters to be covered each week in a structured and effective sequence.</p>
        </div>
        <div className="md:w-[50%] max-w-[500px]  mx-auto ">
          <div className="relative overflow-hidden w-full  mx-auto " style={{paddingTop:"56.25%"}}>
            <iframe className="absolute top-0 left-0 bottom-0 right-0 w-full h-full" src="https://www.youtube.com/embed/6sTEUkR40uI?si=HNhS66nIiKIDAfia"></iframe>
          </div>
          <h2 className="w-[300px] border mx-auto bg-[#BE4E1E] py-3  text-[14px] sm:text-[20px] lg:[28px] rounded-full text-center font-semibold text-white mt-4 "><Link href='/part-2/study-plan'>Go to Study Plan</Link></h2>
        </div>
      </div>
      {/* Preparation Tips */}
      <div className="my-[30px] md:my-[100px] max-w-[1350px] mx-auto px-5 ">
        <h1 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-bold text-center my-[10px]">Preparation <span className="text-[#BE4E1E]">Tips </span></h1>
        <p className="  mx-auto text-[14px]  lg:text-[20px] leading-[25px] xl:leading-[34px] font-[400] text-center">Preparing for CFA Level requires careful consideration and effective management of various key issues:</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-[10px] lg:mt-[40px] overflow-hidden ">
          <div className="min-w-[300px] max-w-[600px]  my-3  mx-auto md:m-5  bg-[#FFF4DA] md:p-6 p-3 rounded-xl  ">
            <Image src='/part-2/pt_tn.png' width={50} height={50} alt="Image"/>
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">1. Conceptual Depth:  </h2>
            <p className="text-left  mx-auto text-[14px]  lg:text-[20px]  leading-[25px] font-[400] md:pr-5"> CFA Level 2 emphasizes complex concepts and requires candidates to go beyond memorization. Understanding valuation techniques, financial modeling, and accounting standards is critical to succeed.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] my-3  md:m-5  mx-auto bg-[#FFF4DA] md:p-6 p-3 rounded-xl ">
            <Image src='/part-2/pt_vs.png' width={50} height={50} alt="Image"/>
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">2. Vast Syllabus </h2>
            <p className="text-left  mx-auto text-[14px]  lg:text-[20px]  leading-[25px] font-[400] md:pr-5"> CFA Level 2 includes 10 topic areas covered across numerous readings and LOS (Learning Outcome Statements). The wide coverage requires early planning and regular review cycles.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] my-3  md:m-5  mx-auto bg-[#FFF4DA] md:p-6 p-3 rounded-xl ">
            <Image src='/part-2/pt_ao.png' width={50} height={50} alt="Image"/>
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">3. Application-Oriented:</h2>
            <p className="text-left  mx-auto text-[14px]  lg:text-[20px]  leading-[25px] font-[400] md:pr-5">The exam format is vignette-based. Each item set tests application and synthesis of concepts in real-world scenarios. Practice solving case-based questions is essential.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] my-3  md:m-5  mx-auto bg-[#FFF4DA] md:p-6 p-3 rounded-xl ">
            <Image src='/part-2/pt_ic.png' width={50} height={50} alt="Image"/>
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">4. Integration of Concepts:</h2>
            <p className="text-left  mx-auto text-[14px]  lg:text-[20px]  leading-[25px] font-[400] md:pr-5">Many questions span across topics such as equity, fixed income, and financial reporting. Candidates must be able to connect concepts across the curriculum to solve integrated item sets.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] my-3  md:m-5  mx-auto bg-[#FFF4DA] md:p-6 p-3 rounded-xl ">
            <Image src='/part-2/pt_dk.png' width={50} height={50} alt="Image"/>
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">5. Depth of Knowledge: </h2>
            <p className="text-left  mx-auto text-[14px]  lg:text-[20px]  leading-[25px] font-[400] md:pr-5 ">CFA Level 2 builds upon Level 1 foundations. A solid grasp of concepts like time value of money, ratio analysis, and ethics is essential to understand and apply advanced Level 2 material.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] my-3  md:m-5  mx-auto bg-[#FFF4DA] md:p-6 p-3 rounded-xl ">
            <Image src='/part-2/pt_tm.png' width={50} height={50} alt="Image"/>
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] my-1 md:my-3 ">6. Time Management:</h2>
            <p className="text-left  mx-auto text-[14px]  lg:text-[20px] leading-[25px] font-[400] md:pr-5 ">With 44 item sets (vignettes) to solve in two sessions, pacing is key. Practice with timed mock exams helps build the speed and accuracy needed for success.</p>
          </div>
        </div>
      </div>
      <div className=" w-full  bg-[#FFF4DA]">
        <div className="sm:flex max-w-[1300px] mx-auto   sm:justify-around">

          <div className="my-auto text-center">
            <h1 className="font-[600] text-[26px] sm:text-[32px] lg:text-[40px] pt-6 sm:pt-4 ">Looking for an FRM Prep Provider?</h1>
            <button className=" px-5 sm:px-9 mt-4 py-2 sm:py-3 bg-[#BE4E1E] mx-auto sm:mx-0 rounded-[112px] hover:opacity-75 ease-in duration-150"><h1 className="font-semibold text-[#EDF1DF] text-[18px] sm:text-[22px] lg:text-[28px]"> <Link href="https://edu.midhafin.com/s/authenticate">JOIN US TODAY</Link> </h1></button>
          </div>
          <div className="w-[50%] mt-5 sm:mt-0 sm:w-auto mx-auto sm:mx-0 "> 
            <Image className="" src="/part-2/YT_Thumbnail-03 2.png" height={277} width={232} alt="image" />
          </div>
          
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto">

        <h1 className="text-[22px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-semibold mb-4 mt-4  md:my-[50px] text-center">Frequently Asked <span className="text-[#BE4E1E]"> Queries</span> </h1>
        <Accordion buttonsData={buttonsData} />
      </div>
    </div>
  );
}
