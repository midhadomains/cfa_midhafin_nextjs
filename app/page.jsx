import Image from "next/image";
import Link from "next/link";
import CounterUpPage from "@/components/CounterUpPage";
import Accordion from "@/components/Accordian";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import ContinuousSlidingText from "@/components/ContinuousSlidingText";

export const metadata = {
  title: "FRM Exam Preparation | Your own FRM Study Portal",
  description: "Comprehensive resources for FRM exam preparation, covering essential topics, study materials, and practice questions to ensure exam success.",
  keywords:["best frm courses"," best frm course in india,best frm courses online","frm certification","frm exam","best frm coaching","best frm coaching online","best frm coaching in bangalore","best frm coaching in mumbai","best frm coaching in india",
  "best frm coaching in kolkata","best frm coaching in chennai","best frm coaching institute in india","best frm online coaching in india",
  "best frm coaching in india quora","best coaching for frm","best coaching for frm in india","best online coaching for frm","Top-rated FRM coaching",
  "Best FRM coaching institutes with high pass rates","cfa","cfa exam","about cfa course","best cfa prep course","best cfa coaching in india","frm exam prep","frm exam registration","frm exam level 1","best way to prepare for frm exam","best ways to study for the frm exam"],
  googlebot : "index,follow",
  openGraph: {
    title: "FRM Exam Preparation | Your own FRM Study Portal",
    description: "Comprehensive resources for FRM exam preparation, covering essential topics, study materials, and practice questions to ensure exam success.",
    type: "website",
    site_name: "MidhaFin",
    locale: "en_US",
    url: "https://frm.midhafin.com/",
    images: [
      {
        url: "https://midha-images.s3.ap-south-1.amazonaws.com/frm.Midhafin/home_page/FRM+open+graph.png",
        width: 800,
        height: 600,
        alt: "Midhafin",
        id: "11",
      },
    ],
  },
  twitter: {
    handle: "Midhafin",
    card: "summary_large_image",
    creator: '@midhafin',
    title: "FRM Exam Preparation | Your own FRM Study Portal",
    site:"frm.midhafin.com",
    siteId: 'd2b79qb3w73861',
    description: "Comprehensive resources for FRM exam preparation, covering essential topics, study materials, and practice questions to ensure exam success",
    images: ["https://midha-images.s3.ap-south-1.amazonaws.com/frm.Midhafin/home_page/FRM+open+graph.png"],
  },
};

export default function Home() {
  const p = "mx-auto md:mx-0 py-4 text-center";
  const Logos = [
    "https://files.midhafin.com/wp-content/uploads/Aditya-Birla-Group.png",
    "https://files.midhafin.com/wp-content/uploads/bajaj-Allianz.png",
    "https://files.midhafin.com/wp-content/uploads/Bank-of-America.png",
    "https://files.midhafin.com/wp-content/uploads/Bank-of-Baroda.png",
    "https://files.midhafin.com/wp-content/uploads/Bank-of-India.png",
    "https://files.midhafin.com/wp-content/uploads/BNY-Mellon.png",
    "https://files.midhafin.com/wp-content/uploads/Central-Bank-of-India.png",
    "https://files.midhafin.com/wp-content/uploads/Citi.png",
    "https://files.midhafin.com/wp-content/uploads/Credit-Suisse.png",
    "https://files.midhafin.com/wp-content/uploads/Deloite.png",
    "https://files.midhafin.com/wp-content/uploads/EXL.png",
    "https://files.midhafin.com/wp-content/uploads/Federal-Bank.png",
    "https://files.midhafin.com/wp-content/uploads/genpact.png",
    "https://files.midhafin.com/wp-content/uploads/Goldman-Sachs.png",
    "https://files.midhafin.com/wp-content/uploads/HCL.png",
    "https://files.midhafin.com/wp-content/uploads/HSBC.png",
    "https://files.midhafin.com/wp-content/uploads/IDBI.png",
    "https://files.midhafin.com/wp-content/uploads/infosys.png",
    "https://files.midhafin.com/wp-content/uploads/SoftBank.png",
    "https://files.midhafin.com/wp-content/uploads/JusPay.png",
    "https://files.midhafin.com/wp-content/uploads/Kotak.png",
    "https://files.midhafin.com/wp-content/uploads/KPMG.png",
    "https://files.midhafin.com/wp-content/uploads/Macquarie.png",
    "https://files.midhafin.com/wp-content/uploads/Morgan-Stanley.png",
    "https://files.midhafin.com/wp-content/uploads/NatWest.png",
    "https://files.midhafin.com/wp-content/uploads/pwc.png",
    "https://files.midhafin.com/wp-content/uploads/SBI.png",
    "https://files.midhafin.com/wp-content/uploads/Scotiabank.png",
    "https://files.midhafin.com/wp-content/uploads/Mask-group.png",
    "https://files.midhafin.com/wp-content/uploads/TCS.png",
    "https://files.midhafin.com/wp-content/uploads/UBS.png",
    "https://files.midhafin.com/wp-content/uploads/JP-Morgan.png",
  ];

  const buttonsData = [
    {
      id: 1,
      text: "What is the CFA designation, and why is it important?",
      data: "The Chartered Financial Analyst (CFA) designation is a globally recognized professional certification offered by the CFA Institute. It signifies expertise in investment management, financial analysis, and ethical standards. Earning a CFA charter enhances career prospects in finance, investment banking, asset management, and risk management.",
    },
    {
      id: 2,
      text: "What are the eligibility requirements for enrolling in the CFA program?",
      data: "To enroll in the CFA program, candidates must have a bachelor's degree or be in the final year of their degree program. Alternatively, candidates with at least 4,000 hours of relevant professional work experience (or a combination of education and work experience) may also be eligible.",
    },
    {
      id: 3,
      text: "How many levels are there in the CFA program, and how do they differ?",
      data: "The CFA program consists of three levels: Level I focuses on basic knowledge and comprehension of investment tools and ethical considerations; Level II emphasizes application and analysis of financial concepts; Level III is about portfolio management and wealth planning, requiring candidates to synthesize concepts and apply them in real-world scenarios.",
    },
    {
      id: 4,
      text: "How long does it take to complete the CFA program?",
      data: "On average, candidates take about 3 to 4 years to complete all three levels of the CFA exam. The duration depends on study time, preparation, and successful passing of each level on the first attempt.",
    },
    {
      id: 5,
      text: "What is the exam structure and format for each CFA level?",
      data: "CFA Level I consists of multiple-choice questions, Level II includes item set questions (vignettes with multiple-choice questions), and Level III features a combination of constructed response (essay-type) and item set questions. Each exam is computer-based and offered multiple times a year.",
    },
    {
      id: 6,
      text: "How much does it cost to register for the CFA exams?",
      data: "CFA exam costs vary based on the registration time. The one-time enrollment fee is around $350, while exam registration fees range from $900 to $1,200 per level, depending on early, standard, or late registration.",
    },
    {
      id: 7,
      text: "What career opportunities are available after earning the CFA charter?",
      data: "CFA charterholders can pursue careers in investment banking, asset management, hedge funds, financial analysis, portfolio management, and risk management. Many also work in roles like financial consulting, private equity, and corporate finance.",
    },
    {
      id: 8,
      text: "How do I maintain my CFA charter once I pass all three levels?",
      data: "To maintain CFA charterholder status, individuals must become a member of the CFA Institute, adhere to the CFA Code of Ethics and Standards of Professional Conduct, and pay annual membership dues. Continuing professional development is encouraged but not mandatory.",
    },
];

  return (
    <div>
      {/* Hero Section */}
      <ContinuousSlidingText/>
      <div className=" text-[#F9F2DF] bg-[#6A1C1A] ">
        <div className="max-w-[1400px] px-[20px] md:px-[50px] mg:flex  justify-center mx-auto ">
          <div className="w-[100%]  border-black  sm:w-[85%]   lg:w-[60%]  flex flex-col justify-around mx-auto mg:mr-[20px] max-w-[400px] lg:max-w-[801px] h-auto  ">
            <h1 className="text-[24px] md:text-[30px] lg:text-[50px] text-center mg:text-left mt-[19px]  sm:mt-[20px] lg:mt-[31px] font-semibold max-w-[801px]">
              One stop destination for your CFA exams.
            </h1>
            <div className="lg:flex justify-center w-[100%] max-w-[700px] lg:mt-[64px] sm:mt-[25px] mt-[15px] lg:mb-[48px] sm:mb-[30px] mb-[20px]  ">
              <Image
                className=" max-w-[366px] min-w-[196px]  w-[50%] mb-5 sm:mb-0 mx-auto mg:mx-0"
                width={350}
                height={76}
                src="/Garp.svg"
                alt="Garp"
                priority={true}
              />
              <div className="border-l-[3px] hidden lg:block mx-4"></div>
              <div className="w-[50%] hidden lg:block">
                <h1 className="text-[14px] font-[400]  sm:text-[20px] lg:text-[24px] max-w-[265px] min-w-[205px] mg:min-w-[265px] flex-shrink-0 text-center md:text-left">
                  We are one of the first{" "}
                  <span className="font-bold tracking-[1px]">
                    GARP Approved{" "}
                  </span>
                  Prep Partners
                </h1>
              </div>
              <h1 className="text-[14px] lg:text-[24px] sm:text-[16px] font-[400] mt-5  lg:hidden text-center mg:text-left ">
                We&apos;re a GARP approved exam prep provider
              </h1>
            </div>

            <Link
              href="https://edu.midhafin.com/s/authenticate"
              className="mx-auto mg:mx-0 w-[151px] sm:w-[180px] md:w-[220px] lg:w-[320px] xl:w-[358px]    border  rounded-[54px] md:mb-[45px] lg:mb-[55px] xl:mb-[82px]"
            >
              <p className="text-center py-4 text-[#F9ECC7] font-bold text-[14px] md:text-[20px] lg:text-[32px]">
                SIGNUP NOW
              </p>
            </Link>

            {/* <p className="border-[#F9ECC7] border text-[#F9ECC7] mx-auto mg:mx-0  rounded-[54px] hover:bg-[#BE4E1E] w-[397px] h- px-[42px] md:px-[110px] m-[18px] text-[14px] sm:text-[20px] lg:text-[30px] font-semibold py-[15px] md:py-4">SIGNUP NOW</p> */}
          </div>
          <div className="w-[100%]  sm:w-[65%]  lg:w-[40%] flex flex-col justify-end items-center mx-auto flex-shrink-0 max-w-[400px] lg:max-w-[500px]">
            <Image
              className="max-h-[520px]  -mb-[1.6%]  flex-shrink-0  w-[100%] max-w-[400px] lg:max-w-[500px] sm:max-w-auto"
              width={520}
              height={500}
              src="https://midha-images.s3.ap-south-1.amazonaws.com/frm.Midhafin/home_page/mickymidha.webp"
              alt="Micky Midha"
              // priority={true}
            />
          </div>
        </div>
      </div>
      <div className=" mx-auto  ">
        <div className="flex flex-col max-w-[1400px]  mx-auto px-[25px] md:px-[50px] text-center mb-[21px] lg:mb-[37px]">
          <h1 className="  xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[24px] text-[20px] font-semibold md:font-bold   text-center mt-[4%] text-[#6A1C1A]">
            Ready to take the next step in your
            <span className="text-[#BE4E1E]"> finance career?</span>{" "}
          </h1>
          <p className="text-[14px]  md:text-[16px] md:leading-[44px] xl:text-[20px]">
            Choose MidhaFin&apos;s CFA courses and embark on a journey toward
            success!
          </p>
        </div>

        <div className=" max-w-[1400px]  mx-auto px-[25px] md:px-[50px] flex flex-wrap sm:flex-nowrap items-center justify-center gap-[30px] md:gap-[60px] xl:gap-[81px]">
          <Link href='/part-1' className="group rounded-[16px] max-h-[500px]   w-[100%] md:w-[38.56%] max-w-[300px] md:max-w-[500px] aspect-[3/2.64]  mx-auto md:mx-0 shadow-[0px_4px_4px_0px_#0000001F]">
            <div className="overflow-hidden">
              <Image
                src="https://filesharingaplic.s3.ap-south-1.amazonaws.com/1742902401523"
                width={500}
                height={440}
                className="w-[100%] rounded-t-2xl group-hover:scale-110 transition-all duration-500"
                alt='frm-Part-1'
                quality={100}
                // priority={true}
              />
            </div>

            <div className="">
              <Image
                src="/Part-1y.svg"
                width={500}
                height={163}
                // priority={true}
                className="bg-[#FFFDF6]"
                alt="Part-1y"
              />
            </div>
          </Link>
          {/* hover:shadow-[0px_0px_15px_1px_#ED9C7A] */}
          <Link href='/part-2' className="rounded-[12px] group  max-h-[500px] bg-[#FAF7ED] w-[100%] md:w-[38.56%] max-w-[300px] md:max-w-[500px] aspect-[3/2.64] mx-auto md:mx-0 shadow-[0px_4px_4px_0px_#0000001F] ">
            <div className="overflow-hidden">
              <Image
                src="https://filesharingaplic.s3.ap-south-1.amazonaws.com/1742904506340"
                width={500}
                height={440}
                className="w-[100%] rounded-t-2xl group-hover:scale-110 transition-all duration-500"
                alt="frm-Part-2"
                quality={100}
                // priority={true}
              />
            </div>

            <div className="">
              <Image
                src="/Part-2y.svg"
                width={500}
                height={163}
                // priority={true}
                alt="Part-2y"
              />
            </div>
          </Link>
          <Link href='/part-3' className="rounded-[12px] group  max-h-[500px] bg-[#FAF7ED] w-[100%] md:w-[38.56%] max-w-[300px] md:max-w-[500px] aspect-[3/2.64] mx-auto md:mx-0 shadow-[0px_4px_4px_0px_#0000001F] ">
            <div className="overflow-hidden">
              <Image
                src="https://filesharingaplic.s3.ap-south-1.amazonaws.com/1742904536648"
                width={500}
                height={440}
                className="w-[100%] rounded-t-2xl group-hover:scale-110 transition-all duration-500"
                alt="frm-Part-2"
                quality={100}
                // priority={true}
              />
            </div>

            <div className="">
              <Image
                src="/Part-2y.svg"
                width={500}
                height={163}
                // priority={true}
                alt="Part-2y"
              />
            </div>
          </Link>

        </div>
      </div>

      <div className=" bg-[#F9F9F9F5] mt-[40px] md:mt-[47px] lg:mt-[80px] xl:mt-[125px]">
        <div className=" md:flex   max-w-[1300px] px-[25px] lg:px-[50px] justify-between mx-auto pt-[5.5%] pb-[5%]">
          <div className=" md:max-w-[700px] md:w-[50%] lg:w-[55%] mg:pl-[35px] pl-[25px]">
            <h1 className="sm:mb-[8px] mb-[6px] md:mb-[20px] xl:mb-[44px] mx-auto text-center md:text-left xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[24px] text-[20px] text-[#6A1C1A] font-bold">
              Recent performance{" "}
              <span className="text-[#BE4E1E]">highlights</span>
            </h1>
            <p className="md:mx-0 mx-auto lg:leading-[40px] sm:leading-[24px] max-w-[500px] md:max-w-[580px] leading-[22px] text-center  md:text-left  xl:text-[20px] md:text-[16px] text-[14px] mb-[30px]">
              Through strategy, hardwork, and planning, we have achieved the
              success rate which stands second to none!
            </p>
          </div>
          <div className=" w-[43%] mx-auto min-w-[260px]">
            <CounterUpPage />
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] 2xl:px-0  mx-auto mb-5 ">
        <h1 className="text-center  px-[25px] mg:px-[50px]  xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[24px] text-[20px] font-bold text-[#6A1C1A] mt-[37px] mg:mt-[45px] lg:mt-[91px] ">
          What sets us <span className="text-[#BE4E1E]">apart ?</span>
        </h1>
        <div className="mg:flex   max-w-[1400px] px-[25px] md:px-[50px]  justify-between ">
          <div className="mg:w-[33%] pr-[14px] mg:pr-[17px]  pl-[40px] pb-[32px] bg-[#FAF7ED] rounded-[20px] mt-[80px] mg:mt-[100px] relative">
            <Image
              className="w-[80px]  sm:w-[90px] mg:w-[100px] mb-[15px] sm:mb-[20px] mg:mb-[26px] absolute -top-[52px] mg:-top-[60px] "
              src="/hc.png"
              alt="Highly Customized"
              width={100}
              height={100}
            />
            <h1 className="text-[14px] md:text-[16px] mg:text-[24px] text-[#9A381D] font-bold text-left pt-[40px] sm:pt-[60px] mg:pt-[70px]">
              Highly Customized
            </h1>
            <ul className="list-disc  text-[14px] md:text-[16px] xl:text-[18px]  mt-1 pb-2  leading-[20px] md:leading-[25px] lg:leading-[35px] ">
              <li>Access to 1-to-1 Doubt Session.</li>
              <li>Customized Study Plan meeting.</li>
              <li>
                Frequent “Personalized Meetings” to ensure progress and vital
                feedback.
              </li>
              <li>
                Personalized Mocks Assessments & related advice to improve the
                score.
              </li>
            </ul>
          </div>
          {/* <div className="border-l-[1px] hidden mg:block h-[253px] border-[#EFD374] my-auto mx-5"></div> */}
          <div className="mg:w-[33%] pr-[14px] mg:pr-[17px]   pl-[40px] pb-[32px] bg-[#FAF7ED] rounded-[20px] mt-[70px] md:mt-[80px] mg:mt-[100px] relative ">
            <Image
              className="w-[80px]  sm:w-[90px] mg:w-[100] mb-[15px] sm:mb-[20px] mg:mb-[26px] absolute -top-[52px] mg:-top-[60px] "
              src="/qc.png"
              alt="Quality Content"
              width={100}
              height={100}
            />
            <h1 className="text-[14px]  md:text-[16px] mg:text-[24px] text-[#9A381D] font-bold pt-[40px] sm:pt-[60px] mg:pt-[70px]">
              Quality Content
            </h1>

            <ul className="list-disc  text-[14px]  md:text-[16px] xl:text-[18px]  mt-1 pb-2  leading-[20px] md:leading-[25px] lg:leading-[35px] ">
              <li>
                Usage of Graphs, Tables, and charts to illustrate the concept.
              </li>
              <li>Usage of Simple examples to enhance conceptual clarity.</li>
              <li>
                {" "}
                Logical flow of Sequencing of chapters to enhance understanding.
              </li>
              <li>
                Concepts built from Scratch, ease of understanding for
                candidates with no Mathematics/Finance Background.
              </li>
            </ul>
          </div>
          {/* <div className="border-l-[1px] hidden mg:block h-[253px] border-[#EFD374] my-auto mx-5"></div> */}
          <div className="mg:w-[33%] pr-[14px] mg:pr-[17px]   pl-[40px] pb-[32px] bg-[#FAF7ED] rounded-[20px] mt-[70px] md:mt-[80px] mg:mt-[100px] relative  ">
            <Image
              className="w-[80px]  sm:w-[100px] mg:w-[100] mb-[15px] sm:mb-[20px] mg:mb-[26px] absolute -top-[52px] mg:-top-[60px] "
              src="/gr.png"
              alt="GARP Related"
              width={130}
              height={130}
            />
            <h1 className="text-[14px]  md:text-[16px] mg:text-[24px] text-[#9A381D] font-bold pt-[40px] sm:pt-[60px] mg:pt-[70px]">
              GARP Related
            </h1>
            <ul className="list-disc  text-[14px]  md:text-[16px] xl:text-[18px]   pb-2  mt-1 leading-[20px] md:leading-[25px] lg:leading-[35px]">

              <li>Resolving and addressing GARP related queries. </li>
              <li>
                {" "}
                Related to exam scheduling, best practices to approach the exam.
              </li>
              <li> Common do&apos;s & don&apos;t, exam Strategy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9F5] mt-[27px] sm:mt-[48px] lg:mt-[84px]">
        <div className="max-w-[1400px] px-[25px] md:px-[50px] mx-auto pt-[21px] sm:pt-[39px] lg:pt-[46px] ">
          <h1 className="text-center  xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[24px] text-[20px] font-semibold text-[#6A1C1A] mb-[20px] sm:mb-[26px] lg:mb-[71px]">
            Where our Students <span className="text-[#BE4E1E]">Work </span>
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6  pb-[15px] sm:pb-[31px] md:pb-[91px] lg:grid-cols-8 gap-5">
            {Logos.map((el, ind) => {
              return (
                <Image
                  className=" m-auto "
                  key={ind}
                  src={el}
                  height={100}
                  width={130}
                  alt="Logo"
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] lg:px-[50px] px-[25px] mx-auto ">
        <div className=" sm:mt-[46px] mt-[30px] lg:mt-[81px]">
          <h1 className="text-center  text-[24px] md:text-[36px] lg:text-[50px] mb-2 font-bold text-[#6A1C1A]">
            Frequently asked <span className="text-[#BE4E1E]">queries</span>
          </h1>
        </div>
        <Accordion buttonsData={buttonsData} />
      </div>
      <div className=" text-[#F9F2DF] bg-[#F9F9F9]  lg:mt-[61px] sm:mt-[53px] mt-[37px] pt-[32px] md:pt-[46px] lg:pt-[75px]">
        <div className="block sm:hidden sm:w-fit mx-auto text-center  w-[280px] ">
          <h1 className="mb-[9px]  text-[#6A1C1A] font-semibold xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[24px] text-[20px] ">
            Get a <span className="text-[#BE4E1E]">call back</span> from us
          </h1>
          <p className="mb-[20px] min-w-[280px] text-[#50535C] font-medium lg:text-[20px] text-[16px]  sm:mb-[20px] lg:mb-[31px] w-fit ">
            Fill the form and we&apos;ll ensure to get back to you promptly.
          </p>
        </div>
        <div className="max-w-[1400px] lg:px-[50px] px-[25px] flex justify-between flex-wrap-reverse sm:flex-nowrap mx-auto">
          <div className="flex flex-col w-[50%] justify-start   sm:mx-0 mx-auto  relative  xl:max-w-[560px] lg:max-w-[450px] md:max-w-[400px] sm:max-w-[280px] max-w-[560px] md:min-w-[400px]">
            <h1 className=" text-[#6A1C1A] font-semibold xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[24px] text-[20px] hidden sm:block">
              Get a <span className="text-[#BE4E1E]">call back</span> from us
            </h1>
            <p className="text-[#50535C] font-medium lg:text-[20px] text-[16px]  sm:mb-[20px] lg:mb-[31px] w-fit hidden sm:block">
              Fill the form and we&apos;ll ensure to get back to you promptly.
            </p>
            <Image
              className=" max-w-[284px] w-[50%] min-w-[153px] mx-auto "
              src="/formlogo.svg"
              width={400}
              height={400}
              alt="Logo"
            />
            <Image
              className="mt-[26px] sm:mt-[30px] mx-3 min-w-[178px] w-[100%]  max-w-[320px] sm:absolute  -bottom-[1.5px] right-0 "
              src="/Contact-us.png"
              height={400}
              width={400}
              alt="contact-us"
            />
          </div>
          <div className="min-w-[300px] w-[52%] max-w-[628px]  sm:mx-0 mx-auto">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="grid grid-cols-1 "
            >
              <input
                type="hidden"
                name="access_key"
                value="e2deee0c-855f-4ae1-a513-eadd701a4eae"
              />
              {/* change value to whatever page you want to redirect after submitting the form */}
              <input
                type="hidden"
                name="redirect"
                value="https://www.midhafin.com/thank-you"
              ></input>
              <input
                type="text"
                name="Name"
                placeholder="Name*"
                className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline border border-[#EBC2B0]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border border-[#EBC2B0]"
                required
              />
              <input
                type="phone-number"
                name="phone"
                placeholder="Phone Number*"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border border-[#EBC2B0]"
                required
              />
              <textarea
                name="message"
                placeholder="Message*"
                className="w-full h-28 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border border-[#EBC2B0]"
                required
              ></textarea>
              <div className="  xl:mb-[74px] lg:mb-[64px] md:mb-[54px] mb-[31px] mt-3">
                <button
                  type="submit"
                  className="text-[16px] md:text-[20px] lg:text-[24px] font-bold tracking-wide bg-[#BE4E1E] hover:bg-[#6a1c1a] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Call Me Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
