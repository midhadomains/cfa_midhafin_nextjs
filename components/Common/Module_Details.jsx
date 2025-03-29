import Image from "next/image";
import Link from "next/link";

export default function Module_Details({ data }) {
  return (
    <div className="max-w-[1350px] px-[10px] md:px-[25px] mx-auto">
      <div className="flex justify-between my-[50px] ">
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[9px] sm:text-[16px] md:text-[22px] lg:text-[32px] md:leading-[1px] lg:leading-[24px] text-center -mb-2 text-[#BE4E1E] mt-2 sm:mt-5">
            MODULE
          </p>
          <h1 className="font-bold text-[30px] sm:text-[55px] md:text-[80px] lg:text-[128px] lg:leading-[128px] md:-mb-5 lg:mb-0 text-[#BE4E1E]">
            0{data.module_no}
          </h1>
        </div>
        <h1 className="font-bold text-center text-[16x] sm:text-[22px] md:text-[40px] lg:text-[55px] tracking-wide max-w-[750px] my-auto lg:leading-[74px] w-[50%] lg:w-fit">
          {data.title}
        </h1>
        <Image
          src={data.image}
          alt="FRM"
          width={270}
          height={270}
          className="shadow-2xl rounded-full h-fit min-w-[84px] max-w-[270px] w-[30%] flex-shrink-0"
        />
      </div>

      <p className="font-[500] text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] mb-4 px-[10px]">{data.desc}</p>
      <h1 className="font-bold text-[#691D1C] text-[14px] sm:text-[22px]  lg:text-[36px] my-7 ml-2">Chapter Descriptions:</h1>
      <div>
        {data.chapters.map((chapter) => (
          <div
            className="border shadow-xl rounded-2xl flex flex-col justify-center items-center lg:flex-row lg:justify-between p-4 mb-4 my-7  px-[24px]"
            key={chapter.id}
          >
            <div className="max-w-[1050px] flex justify-start w-[100%] lg:w-auto">
              <h1 className="text-[#BE4E1E] font-bold  text-[14px] sm:text-[24px] mr-[10px] sm:mr-[30px] min-w-[50px] sm:min-w-[80px]">
                Ch. {chapter.id}.
              </h1>
              <div>
                <h2 className="font-semibold text-[14px] sm:text-[24px] mb-2">{chapter.ques}</h2>
                <p className=" text-[20px] hidden lg:block ">{chapter.ans}</p>
              </div>
            </div>
            <p className="text-[12px] sm:text-[18px] block lg:hidden w-[100%]">{chapter.ans}</p>
            <div className="lg:my-auto mt-3 ">
              <Link href={`part-1/${chapter.ques}`}>
                <button
                  className={`text-white font-semibold lg:text-[20px] py-[6px] sm:py-2 lg:py-3 px-4 w-[130px] sm:w-[150px] rounded-full tracking-wider mx-auto ${chapter.free
                    ? "bg-gradient-to-r from-[#BE4E1E] to-[#E7AC66]"
                    : "bg-[#691D1C]"
                    }`}
                >
                  {chapter.free ? "View >" : "Buy >"}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
