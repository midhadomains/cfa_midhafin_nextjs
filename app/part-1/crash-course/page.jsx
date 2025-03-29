import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: 'Free FRM® Part-1 Crash Course',
    description: 'Prepare for FRM Part 1 with Midhafin crash course. Access practice questions and answers to boost your confidence and improve your exam performance.',
    keywords: "FRM part-1 Crash course, Sample Questions frm part-1, FRM Part 1 sample questions, FRM practice questions, Midhafin FRM Part 1, FRM exam preparation, FRM Part 1 study materials"
}


export default function page() {
    return (
        <>
            <div className="max-w-[1300px] mx-auto ">
                <div className="mx-auto w-[90%] sm:w-[80%]">
                    <h1 className="text-[24px]  sm:text-[35px]  md:text-[45px] lg:text-[55px] font-semibold text-[#6A1C1A] mt-3 text-center">Free FRM® Part 1 Crash Course </h1>
                    <h1 className="text-[12px]  sm:text-[18px]  md:text-[28px] lg:text-[35px] font-semibold text-[#6A1C1A] mb-3 sm:mb-6 text-center">Your Last-Minute Key to Success</h1>
                </div>
                <p className="text-[16px] lg:text-[20px] leading-[30px] mx-2 font-[400]"> <span className="font-semibold">Are you gearing up for the FRM® Part-1 exam and looking for a focused, effective way to review all the essential concepts?</span> Our <span className="font-semibold">Free FRM® Part-1 Crash Course</span> is designed precisely for candidates like you—busy professionals and students who have already put in months of preparation and need a final push to maximize their scores.</p>
                <div className="border max-w-[500px] mx-auto rounded-xl mt-2 p-1">
                    <Link href='https://edu.midhafin.com/courses/FRM-Part-1-Crash-Course'>
                        <Image
                            height={500}
                            width={500}
                            className="mx-auto m-1 rounded-xl"
                            src="/part-1/crash-course_thumbnail.webp"
                            alt="MidhaFin Image"
                        />
                    </Link>
                    <hr />
                    <div className="flex justify-center">
                        <Link href='https://edu.midhafin.com/courses/FRM-Part-1-Crash-Course'>
                            <button className="text-white bg-[#6A1C1A] rounded px-3 py-2 m-2 font-bold">
                                Join Now
                            </button>
                        </Link>
                    </div>
                </div>
                <h2 className="text-[#BE4E1E] mt-5 text-[14px] mx-2 sm:text-[25px] lg:text-[30px] font-semibold">What to Expect from the Crash Course</h2>
                <div className="mx-2">
                    <div>
                        <li className="font-bold">Intensive Coverage of Core Topics</li>
                        <p className="ml-5">Dive into the most tested and high-yield areas of the FRM® Part-1 curriculum, from Quantitative Analysis to Foundations of Risk Management and beyond. We streamline your revision by focusing on the concepts that truly matter in the exam.</p>
                    </div>
                    <div>
                        <li className="font-bold">Expert-Led Video Lectures</li>
                        <p className="ml-5">Learn from seasoned risk management professionals who break down complex theories into digestible, easy-to-understand segments. Each lecture is packed with practical insights, real-world applications, and strategic exam tips.</p>
                    </div>
                    <div>
                        <li className="font-bold">Exam-Focused Practice Questions</li>
                        <p className="ml-5">Boost your confidence with comprehensive practice sessions drawn from past FRM® exams. These questions are designed to test your knowledge, highlight areas that need extra attention, and sharpen your problem-solving skills under timed conditions.</p>
                    </div>
                    <div>
                        <li className="font-bold">Personalized Feedback and Guidance</li>
                        <p className="ml-5">Get one-on-one support and direct answers to all your burning questions. Whether you’re struggling with a particular topic or need advice on time management, our dedicated instructors are here to help.</p>
                    </div>
                    <div>
                        <li className="font-bold">Flexible, High-Impact Learning</li>
                        <p className="ml-5">We understand that you have limited time. That’s why our crash course employs concise lectures, succinct readings, and targeted exercises, ensuring you can fit your final review into a busy schedule without feeling overwhelmed.
                        </p>
                    </div>
                    <h2 className="text-[#BE4E1E] mt-6  text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold">Who Should Join</h2>
                    <div className="ml-2">
                        <li><span className="font-semibold">Working Professionals</span> seeking a refresher on FRM® Part-1 material without compromising their day-to-day responsibilities. </li>
                        <li><span className="font-semibold">Students and Graduates</span> who have been preparing for the exam but want an intensive, focused review in the final stretch.</li>
                        <li><span className="font-semibold">Career-Changers</span> aiming to break into risk management or banking and looking to pass the FRM® exam on the first try.</li>
                    </div>
                    <h2 className="text-[#BE4E1E] mt-6  text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold">Why Choose Midhafin’s Free Crash Course</h2>
                    <div className="ml-2">
                        <li><span className="font-bold">Structured, Comprehensive Review:</span> Cover the most critical exam areas quickly and efficiently. </li>
                        <li><span className="font-bold">Expert Guidance:</span> Benefit from seasoned instructors with years of teaching and industry experience in financial risk management.</li>
                        <li><span className="font-bold">Proven Success Strategies:</span> Learn test-taking techniques that have helped past candidates excel in their FRM® Part-1 exams.</li>
                        <li><span className="font-bold">Ultimate Convenience:</span> Access the course anytime, anywhere, fitting your final review sessions around work and personal commitments.</li>
                    </div>

                    <h2 className="text-[#BE4E1E] mt-5  text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold">Boost Your Confidence, Ace the FRM® Part-1 Exam</h2>
                    <p>With a clear emphasis on critical thinking, time management, and strategic problem-solving, our free crash course is your springboard to success. By consolidating your knowledge and honing in on key exam strategies, you’ll walk into the test center feeling confident and prepared.</p>
                    <p className="mb-5">Enroll now in our Free FRM® Part-1 Crash Course and take the next step towards a successful career in risk management. Let Midhafin help you achieve your professional goals and excel on exam day!</p>
                </div>
            </div>
        </>
    )
}
