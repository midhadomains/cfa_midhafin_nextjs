import { FaCircle } from "react-icons/fa";

export const metadata = {
  title: 'CFA - Exam Dates | CFA Institute Dates and Deadlines',
  description: 'Stay updated with CFA Institute exam dates and deadlines for CFA certification. Find key registration, course start, and exam dates.',
  keywords: "CFA exams dates, CFA exam schedule, CFA registration deadlines, CFA exam dates, CFA certification timeline"
}

export default function page() {
  return (
    <div>
      
      <h1 className="bg-[#6A1C1a] text-white text-center text-[20px] sm:text-[70px] py-9 ">
        CFA -<span className="font-semibold"> Exam Dates</span>
      </h1>

      <p className="font-semibold text-[16px] sm:text-[36px] text-center max-w-[1350px] mx-auto px-[25px] my-9">
        The exam schedule for CFA 2025 is provided below:
      </p>

      {[
        { title: "FEBRUARY 2025", examDates: ["Level I - Feb 17 - 23, 2025", "Level III - Feb 13 - 16, 2025"], regDates: ["Registration Opens - May 9, 2024", "Early Deadline - July 9, 2024", "Standard Deadline - Nov 7, 2024"] },
        { title: "MAY 2025", examDates: ["Level I - May 14-20, 2025", "Level II - May 21-25, 2025"], regDates: ["Registration Opens - Aug 8, 2024", "Early Deadline - Oct 16, 2024", "Standard Deadline - Feb 6, 2025"] },
        { title: "AUGUST 2025", examDates: ["Level I - Aug 20-26, 2025", "Level II - Aug 27-31, 2025", "Level III - Aug 15-19, 2025"], regDates: ["Registration Opens - Nov 6, 2024", "Early Deadline - Jan 29, 2025", "Standard Deadline - May 6, 2025"] },
        { title: "NOVEMBER 2025", examDates: ["Level I - Nov 12-18, 2025", "Level II - Nov 19-23, 2025"], regDates: ["Registration Opens - Feb 12, 2025", "Early Deadline - Apr 9, 2025", "Standard Deadline - Aug 5, 2025"] }
      ].map((session, index) => (
        <div key={index}>
          <div className="bg-[#FFEFCB] py-4">
            <h1 className="font-bold mx-auto max-w-[1350px] text-center px-[25px] text-[14px] sm:text-[36px]">
              {session.title}
            </h1>
          </div>
          <div className="border-l-2 sm:border-l-4 max-w-[700px] mx-auto ml-[70px] md:ml-[220px] lg:ml-[449px] m-9">
            <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px] text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
              Exam Dates
            </h1>
            {session.examDates.map((date, i) => (
              <p key={i} className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
                <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
                {date}
              </p>
            ))}
            <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px] text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
              Registration Dates
            </h1>
            {session.regDates.map((date, i) => (
              <p key={i} className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
                <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
                {date}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
