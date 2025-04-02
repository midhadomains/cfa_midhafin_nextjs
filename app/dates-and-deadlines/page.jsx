import { FaCircle } from "react-icons/fa";

export const metadata = {
  title: 'CFA - Exam Dates | CFA Institute Dates and Deadlines',
  description: 'Stay updated with CFA Institute dates and deadlines for CFA certification. Find key registration, scheduling, and exam dates.',
  keywords: "CFA exam dates, CFA registration deadlines, CFA Institute schedule, CFA exam schedule, CFA deadlines"
};

export default function page() {
  return (
    <div>
      <h1 className="bg-[#6A1C1a] text-white text-center text-[20px] sm:text-[70px] py-9 ">
        CFA -<span className="font-semibold"> Exam Dates</span>
      </h1>

      <p className="font-semibold text-[16px] sm:text-[36px] text-center max-w-[1350px] mx-auto px-[25px] my-9">
        The exam windows and registration deadlines are provided below:
      </p>

      {[
        { month: "February", year: "2025", examDates: "17-23 Feb 2025", levelIII: "13-16 Feb 2025", early: "May 9, 2024 – July 9, 2024", standard: "July 10, 2024 – November 7, 2024", scheduling: "May 9, 2024 – November 14, 2024", rescheduling: "November 15, 2024 – January 2025 " },
        { month: "May", year: "2025", examDates: "14-20 May 2025", levelII: "21-25 May 2025", early: "August 8, 2024 – October 16, 2024", standard: "October 17, 2024 – February 6, 2025", scheduling: "August 8, 2024 – February 13, 2025", rescheduling: "February 14, 2025 – April 2025 " },
        { month: "August", year: "2025", examDates: "20-26 Aug 2025", levelII: "27-31 Aug 2025", levelIII: "15-19 Aug 2025", early: "November 6, 2024 – January 29, 2025", standard: "January 30, 2025 – May 6, 2025", scheduling: "November 6, 2024 – May 13, 2025", rescheduling: "May 14, 2025 – July 2025 " },
        { month: "November", year: "2025", examDates: "12-18 Nov 2025", levelII: "19-23 Nov 2025", early: "February 12, 2025 – April 9, 2025", standard: "April 10, 2025 – August 5, 2025", scheduling: "February 12, 2025 – August 12, 2025", rescheduling: "August 13, 2025 – October 2025 " },
      ].map(({ month, year, examDates, levelII, levelIII, early, standard, scheduling, rescheduling }) => (
        <div key={month}>
          <div className="bg-[#FFEFCB] py-4">
            <h1 className="font-bold mx-auto max-w-[1350px] text-center px-[25px] text-[14px] sm:text-[36px]">
              {month.toUpperCase()} {year} EXAMS
            </h1>
          </div>

          <div className="border-l-2 sm:border-l-4 max-w-[700px] mx-auto ml-[70px] md:ml-[220px] lg:ml-[449px] m-9 ">
            <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px] text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
              Exam Dates
            </h1>
            <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
              <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
              Level I - {examDates}
            </p>
            {levelII && (
              <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
                <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
                Level II - {levelII}
              </p>
            )}
            {levelIII && (
              <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
                <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
                Level III - {levelIII}
              </p>
            )}

            <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px] text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
              Registration
            </h1>
            <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
              <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
              Early - {early}
            </p>
            <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
              <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
              Standard - {standard}
            </p>

            <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px] text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
              Schedule
            </h1>
            <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
              <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
              Scheduling Period - {scheduling}
            </p>
            <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
              <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
              Rescheduling Period - {rescheduling}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
