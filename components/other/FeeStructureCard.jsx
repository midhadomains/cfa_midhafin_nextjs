import Link from "next/link";
import React from "react";

export default function FeeStructureCard({ a, index }) {
  return (
    <div key={index} className="sm:w-[650px] w-[300px] sm:h-[520px] h-[500px]  mb-4 bg-white rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072)]">
      <h1 className="font-bold ml-[25px] text-[14px] sm:text-[20px]">{a.Title}</h1>
      <div className="ml-[25px] border-l-[3px] pl-3">
        <h2 className="text-[#BE4E1E] font-semibold mt-4 text-[14px] sm:text-[20px]" style={{ letterSpacing: "4px" }}>
          EARLY
        </h2>
        <p className={`my-4 font-bold  text-[14px] sm:text-[20px] ${a.early.closed ? "text-[#8D93A3]" : "text-black"}`}>{a.early.registration}</p>
        <div className="sm:flex justify-between items-center">
          <table>
            <tbody>
              <tr>
                <td className={`pr-[40px] text-[14px] sm:text-[20px] ${a.early.enrollment_fee ? "text-black" : "text-[#8D93A3]"}`}>Enrollment Fee </td>
                <td className="text-right text-[14px] sm:text-[20px]">{a.early.enrollment_fee ? `USD ${a.early.enrollment_fee} ` : "-"}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="text-[14px] sm:text-[20px]">Exam Fee</td>
                <td className="text-right text-[14px] sm:text-[20px]">USD {a.early.exam_fee}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="font-bold text-[14px] sm:text-[20px]">Total</td>
                <td className="font-bold text-[14px] sm:text-[20px]">USD {a.early.total}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center">
            {!a.early.closed && (
              <Link href={a.early.link} className="w-fit ">
                <button className="rounded-3xl bg-[#6A1C1A] w-[130px] h-[35px] text-white mt-4 sm:mt-16 mr-12">Register</button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="ml-[25px] border-l-[3px] pl-3">
        <h2 className="text-[#BE4E1E] font-semibold my-4 text-[14px] sm:text-[20px]" style={{ letterSpacing: "4px" }}>
          STANDARD
        </h2>
        <p className={`my-4 font-bold  text-[14px] sm:text-[20px] ${a.standard.closed ? "text-[#8D93A3]" : "text-black"}`}>{a.standard.registration}</p>
        <div className="sm:flex justify-between items-center">
          <table>
            <tbody>
              <tr>
                <td className={`pr-[40px] text-[14px] sm:text-[20px] ${a.early.enrollment_fee ? "text-black" : "text-[#8D93A3]"}`}>Enrollment Fee </td>
                <td className="text-right text-[14px] sm:text-[20px]">{a.standard.enrollment_fee ? `USD ${a.standard.enrollment_fee} ` : "-"}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="text-[14px] sm:text-[20px]">Exam Fee</td>
                <td className="text-right text-[14px] sm:text-[20px]">USD {a.standard.exam_fee}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="font-bold text-[14px] sm:text-[20px]">Total</td>
                <td className="font-bold text-[14px] sm:text-[20px] text-right">USD {a.standard.total}</td>
              </tr>
            </tbody>
            {a.standard.Deferral_Deadline && (
              <tbody>
                <tr>
                  <td className="font-bold text-[14px] sm:text-[20px] text-[#D9AD70]">Deferral deadline</td>
                  <td className="font-bold text-[14px] sm:text-[20px] text-[#D9AD70]">{a.standard.Deferral_Deadline}</td>
                </tr>
                <tr>
                  <td className="font-bold text-[14px] sm:text-[20px]">Deferral Fee</td>
                  <td className="font-bold text-[14px] sm:text-[20px] ">USD 250</td>
                </tr>
              </tbody>
            )}
          </table>
          <div className="flex justify-center">
            {!a.standard.closed && (
              <Link href={a.standard.link} className="w-fit flex justify-center items-center">
                <button className="rounded-3xl bg-[#6A1C1A] w-[130px] h-[35px] text-white  mt-4 sm:mt-16 mr-12">Register</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
