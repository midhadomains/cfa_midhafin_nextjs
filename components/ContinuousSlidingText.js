import Link from "next/link";
import React from "react";

const ContinuousSlidingText = () => {
    return (
        <div className="overflow-hidden border pt-2 bg-[#e7d8c5]">
            <marquee behavior="scroll" direction="left" scrollamount="8">
                <Link href="https://edu.midhafin.com/courses/FRM-Part-1-Crash-Course">
                    <h1 className="text-[19px] ">
                        🎉{" "}
                        <span className="text-[#9A391D] text-[14px]   mg:text-[20px] font-bold">Free Crash Course</span> for FRM part 1 <span className="text-[14px] mg:text-[20px]"> </span>
                        <span className="text-[#9A391D] text-[14px] mg:text-[20px] font-bold"> Join Now</span>
                        <span className="text-[#9A391D] ml-[200px] text-[14px] mg:text-[20px] font-bold">
                            {" "}
                            Admission Open{" "}
                        </span>
                        <span className="text-[14px] mg:text-[20px]">for the </span>{" "}
                        <span className="text-[#9A391D] text-[14px] mg:text-[20px] font-bold">
                            2025-26
                        </span>{" "}
                        <span className="text-[14px] mg:text-[20px]">session 🎉</span>
                        {" "}
                    </h1>
                </Link>
            </marquee>
        </div>
    );
};

export default ContinuousSlidingText;
