import Link from "next/link"
import { FaAngleRight } from "react-icons/fa";
import CourseCard from "../Common/CourseCard";

export default function Courses({course}) {
    return (
        <div className="max-w-[1400px] mx-auto mt-[30px] md:mt-[70px]">
            <div className="flex justify-center md:justify-between px-6">
                <h2 className=" text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-semibold">Courses Offered</h2>
                <Link href='https://edu.midhafin.com/s/store' className=" hidden md:flex text-[24px] font-semibold text-[#BE4E1E] my-auto">View More Courses <FaAngleRight className="mt-2" /></Link>
            </div>
            <div className="flex justify-around flex-wrap ">
                {
                    course.map((a, index) => (
                        <CourseCard a={a} key={index} />
                    ))
                }
            </div>
            <Link href='https://edu.midhafin.com/s/store' className=" md:hidden flex text-[24px] font-semibold text-[#BE4E1E] my-auto justify-center">View More Courses <FaAngleRight className="mt-2" /></Link>
        </div>
    );
}
