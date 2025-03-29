"use client";
import { useState } from "react";
import FeeStructureCard from "@/components/other/FeeStructureCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// export const metadata = {
//   title: "GARP Fee Structure - Midhafin FRM Online Training",
//   description: "Discover the GARP fee structure for FRM certification. Get detailed information on exam fees, enrollment costs, and payment plans. Plan your certification investment with Midhafin.",
//   keywords: "GARP fee structure, FRM certification fees, GARP exam costs, enrollment fees, payment plans, Midhafin FRM training costs"
// }

export default function Page() {
    // State for FRM Part 1 tabs
    const [activeTabPart1, setActiveTabPart1] = useState("MAY 11-17, 2025");

    // State for FRM Part 2 tabs
    const [activeTabPart2, setActiveTabPart2] = useState("MAY 18-22, 2025");
  
  // const data = [
  //   {
  //     id: 1,
  //     Title: "NEW CANDIDATE",
  //     early: {
  //       registration: "Registration closed April 30",
  //       enrollment_fee: 400,
  //       exam_fee: 600,
  //       total: 1000,
  //       link: "https://www.garp.org/frm/fees-payments",
  //       closed: true,
  //     },

  //     standard: {
  //       registration: "Register by June 30",
  //       enrollment_fee: 400,
  //       exam_fee: 800,
  //       total: 1200,
  //       link: "https://www.garp.org/frm/fees-payments",
  //       closed: false,
  //     },
  //   },
  //   {
  //     id: 2,
  //     Title: "RETURNING CANDIDATE",
  //     early: {
  //       registration: "Registration closed April 30",
  //       enrollment_fee: 0,
  //       exam_fee: 600,
  //       total: 600,
  //       link: "https://www.garp.org/frm/fees-payments",
  //       closed: true,
  //     },

  //     standard: {
  //       registration: "Register by June 30",
  //       enrollment_fee: 0,
  //       exam_fee: 800,
  //       total: 800,
  //       closed: false,
  //       link: "https://www.garp.org/frm/fees-payments",
  //     },
  //   },
  // ];

  const data2 = [
    // {
    //   id: 3,
    //   Title: "NEW CANDIDATE",
    //   early: {
    //     registration: "Register by July 31",
    //     enrollment_fee: 400,
    //     exam_fee: 600,
    //     total: 1000,
    //     link: "https://www.garp.org/frm/fees-payments",
    //     closed: true,
    //   },

    //   standard: {
    //     registration: "Registration opens August 1",
    //     enrollment_fee: 400,
    //     exam_fee: 800,
    //     total: 1200,
    //     link: "https://www.garp.org/frm/fees-payments",
    //     closed: false,
    //   },
    // },

    // {
    //   id: 4,

    //   Title: "RETURNING CANDIDATE",
    //   early: {
    //     registration: "Register by July 31",
    //     enrollment_fee: 0,
    //     exam_fee: 600,
    //     total: 600,
    //     link: "https://www.garp.org/frm/fees-payments",

    //     closed: true,
    //   },

    //   standard: {
    //     registration: "Registration opens August 1",
    //     enrollment_fee: "",
    //     exam_fee: 800,
    //     total: 800,
    //     Deferral_Deadline: "30 Sept - 2025",
    //     link: "https://www.garp.org/frm/fees-payments",

    //     closed: false,
    //   },

    //   link: "/",
    // },
    {
      id: 5,

      Title: "MAY 11-17, 2025",
      early: {
        registration: "December 1, 2024 - January 31, 2025",
        enrollment_fee: 400,
        exam_fee: 600,
        link: "https://www.garp.org/frm/fees-payments",

        total: 1000,
        closed: false,
      },

      standard: {
        registration: "February 1, 2025 - March 31, 2025",
        enrollment_fee: 400,
        exam_fee: 800,
        link: "https://www.garp.org/frm/fees-payments",

        total: 1200,
        Deferral_Deadline: "March 31 - 2025",
        closed: false,
      },
    },
    {
      id: 6,

      Title: "AUG. 9-10, 2025",
      early: {
        registration: "March 1, 2025 - April 30, 2025",
        enrollment_fee: 400,
        exam_fee: 600,
        link: "https://www.garp.org/frm/fees-payments",

        total: 1000,
        closed: false,
      },

      standard: {
        registration: "May 1, 2025 - June 30, 2025",
        enrollment_fee: 400,
        exam_fee: 800,
        link: "https://www.garp.org/frm/fees-payments",

        total: 1200,
        Deferral_Deadline: "June 30 - 2025",
        closed: false,
      },
    },
    {
      id: 7,

      Title: "NOV. 9 - 15, 2025",
      early: {
        registration: "May 1, 2025 - July 31, 2025",
        enrollment_fee: 400,
        exam_fee: 600,
        link: "https://www.garp.org/frm/fees-payments",

        total: 1000,
        closed: false,
      },

      standard: {
        registration: "August 1, 2025 - September 30, 2025",
        enrollment_fee: 400,
        exam_fee: 800,
        link: "https://www.garp.org/frm/fees-payments",

        total: 1200,
        Deferral_Deadline: "Sept. 30 - 2025",
        closed: false,
      },
    },
  ];

  const data3 = [
    // {
    //   id: 8,

    //   Title: "NOV. 16-19, 2024",
    //   early: {
    //     registration: "Register by July 31",
    //     enrollment_fee: 0,
    //     exam_fee: 600,
    //     link: "https://www.garp.org/frm/fees-payments",

    //     total: 600,
    //     closed: false,
    //   },

    //   standard: {
    //     registration: "Registration open August 1",
    //     enrollment_fee: 0,
    //     exam_fee: 800,
    //     link: "https://www.garp.org/frm/fees-payments",

    //     total: 800,
    //     closed: true,
    //   },
    // },
    {
      id: 9,

      Title: "MAY 18-22, 2025",
      early: {
        registration: "December 1, 2025 - January 31, 2025",
        enrollment_fee: "",
        exam_fee: 600,
        link: "https://www.garp.org/frm/fees-payments",

        total: 600,
        closed: false,
      },

      standard: {
        registration: "February 1, 2025 - March 31, 2025",
        enrollment_fee: "",
        exam_fee: 800,
        link: "https://www.garp.org/frm/fees-payments",

        total: 800,
        Deferral_Deadline: "March 31 - 2025",
        closed: false,
      },
    },
    {
      id: 10,

      Title: "AUG. 9-10, 2025",
      early: {
        registration: "March 1, 2025 - April 30, 2025",
        enrollment_fee: "",
        exam_fee: 600,
        link: "https://www.garp.org/frm/fees-payments",

        total: 600,
        closed: false,
      },

      standard: {
        registration: "May 1, 2025 - June 30, 2025",
        enrollment_fee: "",
        exam_fee: 800,
        link: "https://www.garp.org/frm/fees-payments",

        total: 800,
        Deferral_Deadline: "June 30 - 2025",
        closed: false,
      },
    },
    {
      id: 11,

      Title: "Nov. 16-19, 2025",
      early: {
        registration: "May 1, 2025 - July 31, 2025",
        enrollment_fee: "",
        exam_fee: 600,
        link: "https://www.garp.org/frm/fees-payments",

        total: 600,
        closed: false,
      },

      standard: {
        registration: "August 1, 2025 - September 30, 2025",
        enrollment_fee: "",
        exam_fee: 800,
        link: "https://www.garp.org/frm/fees-payments",

        total: 800,
        Deferral_Deadline: "Sept 30 - 2025",
        closed: false,
      },
    },

  ];

  // Filter data for FRM Part 1 based on active tab
  const filteredDataPart1 = data2.filter((item) => item.Title === activeTabPart1);

  // Filter data for FRM Part 2 based on active tab
  const filteredDataPart2 = data3.filter((item) => item.Title === activeTabPart2);

  return (
    <div className="">
      {/* FRM Part 1 Section */}
      <div className="bg-[#6A1C1A] sm:h-[169px] h-[90px] py-6 sm:py-12">
        <h1 className="text-[24px] sm:text-[50px] text-white text-center">
          FRM® <span className="font-bold">Fee and Payments</span>
        </h1>
      </div>

      <div className="px-[20px] md:px-[50px]">
        <h2 className="font-bold text-[22px] sm:text-[32px] text-center mt-8">
          FRM EXAM PART - I
        </h2>
      </div>

      {/* Tabs for FRM Part 1 */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-4">
          {["MAY 11-17, 2025", "AUG. 9-10, 2025", "NOV. 9 - 15, 2025"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTabPart1(tab)}
              className={`flex-1 py-2 px-4 xl:text-[20px] xl:w-[200px] sm:w-[150px] sm:text-[14px] md:w-[200px] w-[80px] text-[10px] md:text-[16px] rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                activeTabPart1 === tab
                  ? "bg-[#BE4E1E] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Display FRM Part 1 Data */}
      <div className="flex flex-wrap gap-10 justify-center mt-12 px-[20px]  md:px-[100px] lg:mx-[50px] 3xl:px-[500px]  ">
        {filteredDataPart1.map((a, index) => (
          <FeeStructureCard key={index} a={a} index={index} />
        ))}
        <div className="px-[20px] md:px-[500px] my-5"></div>
        <hr className="my-5 w-[90%] mx-auto" />
      </div>

      {/* FRM Part 2 Section */}
      <div className="bg-[#FAF7ED] xl:h-[800]">
        <div className="px-[20px] md:px-[50px] my-7">
          <h3 className="text-[18px] sm:text-[32px] font-bold text-center py-10">
            FRM Exam Part - II
          </h3>
        </div>

        {/* Tabs for FRM Part 2 */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-4">
            {[ "MAY 18-22, 2025", "AUG. 9-10, 2025", "Nov. 16-19, 2025"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTabPart2(tab)}
                className={`flex-1 py-2 px-4 xl:text-[20px] xl:w-[200px] sm:w-[150px] sm:text-[14px] md:w-[200px] w-[80px] text-[10px] md:text-[16px] rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                  activeTabPart2 === tab
                    ? "bg-[#BE4E1E] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Display FRM Part 2 Data */}
        <div className="flex flex-wrap gap-10 justify-center mt-12 px-[20px] md:px-[50px]">
          {filteredDataPart2.map((a, index) => (
            <FeeStructureCard key={index} a={a} index={index} />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-center my-8 px-[20px] md:px-[50px]">
        <Image
          src="https://midha-images.s3.ap-south-1.amazonaws.com/frm.Midhafin/fee+structure/Garp-Frm.png"
          width={165}
          height={50}
          alt="garp-img"
          className="h-[40] sm:h-[50]"
          quality={100}
        />
        <p className="text-[16px] sm:text-[20px] sm:mt-2 ml-8 sm:leading-8">
          Click&nbsp;
          <Link href="https://www.garp.org/frm/fees-payments/" target="_blank">
            <span className="underline text-[#BE4E1E]">here</span>
          </Link>
          &nbsp;to go to GARP for more info.
        </p>
      </div>
    </div>
  );
}