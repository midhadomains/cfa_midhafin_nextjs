"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CounterUpPage() {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) setCounterOn(true);
    },
  });

  return (
    <div ref={ref} className="ml-auto grid grid-cols-2 gap-[35px] sm:gap-[38px] lg:gap-[50px] place-content-end mx-auto md:max-w-[500px] max-w-[350px]">
      {[
        { end: 76, label: "NOV 2023", level: "FRM Level-I" },
        { end: 78, label: "NOV 2023", level: "FRM Level-II" },
        { end: 86, label: "MAY 2024", level: "FRM Level-I" },
        { end: 88, label: "NOV 2024", level: "FRM Level-II" },
      ].map(({ end, label, level }, i) => (
        <div className="text-center" key={i}>
          <h1 className="text-[35px] md:text-[50px] xl:text-[70px] font-bold text-[#BE4E1E]">
            {counterOn && <CountUp start={0} end={end} duration={2} delay={0} />}%
          </h1>
          <h3 className="lg:text-[20px] md:text-[16px] text-[14px] md:font-bold">{label}</h3>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#50535C]">
            Success rate for <br /> {level}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CounterUpPage;
