import Image from "next/image";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "FRM Part 1 Syllabus - MidhaFin",
  description:
    "Explore the comprehensive FRM Part 1 syllabus with Midhafin. Detailed topics and study resources to help you prepare effectively for the FRM certification exam.",
  keywords:
    "FRM exam syllabus,FRM Part 1 syllabus, FRM exam topics, Midhafin syllabus guide, FRM study materials, FRM certification syllabus",
};

function Syllabus() {
  const chapter = [
    {
      img: "/Group 315.png",
      module_no: 1,
      module_title: "Foundations of Risk Management (FRM)",
      slug:"frm",
      topics: [
        {
          id: 1,
          data: "The Building Blocks of Risk Management",
          ans: "Covers fundamental concepts of risk management, including how risk-taking and risk management are compared and their importance in organizations.",
          slug: "/part-1/the-building-blocks-of-risk-management",
        },
        {
          id: 2,
          data: "How Do Firms Manage Financial Risk?",
          ans: "Explores various strategies that firms use to identify, manage, and mitigate financial risks, emphasizing the role of risk management tools.",
          slug: "/part-1/how-do-firms-manage-financial-risk",
        },
        {
          id: 3,
          data: "The Governance of Risk Management",
          ans: "Discusses corporate governance in risk management, including the board's role, risk appetite, and how these elements shape organizational strategies.",
          slug: "/part-1/the-governance-of-risk-management",
        },
        {
          id: 4,
          data: "Credit Risk Transfer Mechanisms",
          ans: "Provides an overview of credit risk transfer mechanisms like credit derivatives and securitization, with emphasis on issues post-financial crisis.",
          slug: "/part-1/credit-risk-transfer-mechanisms",
        },
        {
          id: 5,
          data: "Modern Portfolio Theory and Capital Asset Pricing Model",
          ans: "Introduces Modern Portfolio Theory and the CAPM, foundational concepts for risk-adjusted asset pricing and portfolio management.",
          slug: "/part-1/modern-portfolio-theory-and-the-capital-asset-pricing-model",
        },
        {
          id: 6,
          data: "The Arbitrage Pricing Theory and Multifactor Models of Risk and Return",
          ans: "Explains how Arbitrage Pricing Theory and multifactor models are used to estimate returns and manage risk across different factors.",
          slug: "/part-1/the-arbitrage-pricing-theory-and-multifactor-models-of-risk-and-return",
        },
        {
          id: 7,
          data: "Principles for Effective Data Aggregation and Risk Reporting",
          ans: "Focuses on the importance of effective data aggregation and reporting to improve risk management and decision-making in financial institutions.",
          slug: "/part-1/principles-for-effective-data-aggregation-and-risk-reporting",
        },
        {
          id: 8,
          data: "Enterprise Risk Management and Future Trends",
          ans: "Covers the principles of Enterprise Risk Management (ERM) and discusses future trends in comprehensive risk management within organizations.",
          slug: "/part-1/enterprise-risk-management-and-future-trends",
        },
        {
          id: 9,
          data: "Learning from Financial Disasters",
          ans: "Examines historical financial disasters, focusing on key lessons learned to prevent similar failures in future risk management practices.",
          slug: "/part-1/learning-from-financial-disasters",
        },
        {
          id: 10,
          data: "Anatomy of the Great Financial Crisis of 2007-2009",
          ans: "Provides a detailed analysis of the 2007-2009 financial crisis, exploring its causes, effects, and lessons for future financial stability.",
          slug: "/part-1/anatomy-of-the-great-financial-crisis-of-2007-2009",
        },
        {
          id: 11,
          data: "GARP Code of Conduct",
          ans: "Outlines GARP's Code of Conduct, focusing on ethical standards, integrity, and professionalism for risk management professionals globally.",
          slug: "/part-1/garp-code-of-conduct",
        },
      ],
    },
    {
      img: "/Group 316.png",
      module_no: 2,
      module_title: "Quantitative Analysis (QTA)",
      slug:"qta",
      topics: [
        {
          id: 1,
          data: "Fundamentals of Probability",
          ans: "Covers basic probability concepts, essential for risk management, including events, probability distributions, and their applications in decision-making.",
          slug: "/part-1/fundamentals-of-probability",
        },
        {
          id: 2,
          data: "Random Variables",
          ans: "Introduces random variables, key elements in quantitative analysis, and explains their role in modeling uncertainties.",
          slug: "/part-1/random-variables",
        },
        {
          id: 3,
          data: "Common Univariate Random Variables",
          ans: "Examines key univariate distributions, such as normal and binomial, used to model financial data and assess risk.",
          slug: "/part-1/common-univariate-random-variables",
        },
        {
          id: 4,
          data: "Multivariate Random Variables",
          ans: "Discusses multivariate distributions, which are crucial for understanding the relationships between different financial variables in risk management.",
          slug: "/part-1/multivariate-random-variables",
        },
        {
          id: 5,
          data: "Sample Moments",
          ans: "Focuses on calculating and interpreting sample moments like mean, variance, and skewness, fundamental to statistical analysis.",
          slug: "/part-1/sample-moments",
        },
        {
          id: 6,
          data: "Hypothesis Testing",
          ans: "Covers hypothesis testing techniques, allowing risk managers to make data-driven decisions and validate statistical models.",
          slug: "/part-1/hypothesis-testing",
        },
        {
          id: 7,
          data: "Linear Regression",
          ans: "Explains linear regression, a statistical tool used to model relationships between variables, essential for predicting financial outcomes.",
          slug: "/part-1/linear-regression",
        },
        {
          id: 8,
          data: "Regression with Multiple Explanatory Variables",
          ans: "Delves into multiple regression analysis, exploring how to analyze and interpret relationships involving several explanatory variables.",
          slug: "/part-1/regression-with-multiple-explanatory-variables",
        },
        {
          id: 9,
          data: "Regression Diagnostics",
          ans: "Focuses on techniques to assess and improve the performance and accuracy of regression models in risk analysis.",
          slug: "/part-1/regression-diagnostics",
        },
        {
          id: 10,
          data: "Stationary Time Series",
          ans: "Explores stationary time series, fundamental for modeling and forecasting financial data that exhibit consistent statistical properties over time.",
          slug: "/part-1/stationary-time-series",
        },
        {
          id: 11,
          data: "Non-Stationary Time Series",
          ans: "Discusses modeling non-stationary time series, which are essential for understanding data with trends, cycles, or structural changes.",
          slug: "/part-1/non-stationary-time-series",
        },
        {
          id: 12,
          data: "Measuring Returns, Volatility, and Correlation",
          ans: "Covers quantitative techniques to measure returns, volatility, and correlation, critical for assessing financial risk.",
          slug: "/part-1/measuring-returns-volatility-and-correlation",
        },
        {
          id: 13,
          data: "Simulation and Bootstrapping",
          ans: "Introduces simulation and bootstrapping methods used to assess risk by generating possible future outcomes based on historical data.",
          slug: "/part-1/simulation-and-bootstrapping",
        },
        {
          id: 14,
          data: "Machine Learning Methods",
          ans: "Covers machine learning techniques applied in risk management, emphasizing data-driven decision-making and predictive analytics.",
          slug: "/part-1/machine-learning-methods",
        },
        {
          id: 15,
          data: "Machine Learning and Prediction",
          ans: "Explores advanced machine learning methods used for prediction and their application in financial risk management scenarios.",
          slug: "/part-1/machine-learning-and-prediction",
        },
      ],
    },
    {
      img: "/Group 317.png",
      module_no: 3,
      module_title: "Financial Markets and Products (FMP)",
      slug:"fmp",
      topics: [
        {
          id: 1,
          data: "Banks",
          ans: "Overview of banking operations, the various risks they face, and the regulatory frameworks governing their activities.",
          slug: "/part-1/banks",
        },
        {
          id: 2,
          data: "Insurance Companies and Pension Plans",
          ans: "Discusses the key features, risks, and management strategies of insurance companies and pension plans.",
          slug: "/part-1/insurance-companies-and-pension-plans",
        },
        {
          id: 3,
          data: "Fund Management",
          ans: "Explores different fund management approaches, including mutual funds and hedge funds, and the associated risks.",
          slug: "/part-1/fund-management",
        },
        {
          id: 4,
          data: "Introduction to Derivatives",
          ans: "Covers the basics of derivatives, their various types, and how they are used in financial markets for hedging and speculation.",
          slug: "/part-1/introduction-to-derivatives",
        },
        {
          id: 5,
          data: "Exchanges and OTC Markets",
          ans: "Compares the structure and functioning of exchanges versus over-the-counter (OTC) markets, highlighting the pros and cons of each.",
          slug: "/part-1/exchanges-and-otc-markets",
        },
        {
          id: 6,
          data: "Central Clearing",
          ans: "Discusses the role and importance of central clearing in mitigating counterparty risk in financial markets.",
          slug: "/part-1/central-clearing-2",
        },
        {
          id: 7,
          data: "Futures Markets",
          ans: "Introduction to futures contracts, their features, and the mechanics of trading them in financial markets.",
          slug: "/part-1/futures-markets",
        },
        {
          id: 8,
          data: "Using Futures for Hedging",
          ans: "Explains strategies for using futures contracts to hedge against various financial risks, such as price and interest rate fluctuations.",
          slug: "/part-1/using-futures-for-hedging",
        },
        {
          id: 9,
          data: "Foreign Exchange Markets",
          ans: "Covers the functioning of foreign exchange markets, including exchange rate determination and the risks involved in currency trading.",
          slug: "/part-1/foreign-exchange-markets",
        },
        {
          id: 10,
          data: "Pricing Financial Forwards and Futures",
          ans: "Explains the methods for valuing forwards and futures contracts based on underlying asset prices, interest rates, and other factors.",
          slug: "/part-1/pricing-financial-forwards-and-futures",
        },
        {
          id: 11,
          data: "Commodity Forwards and Futures",
          ans: "Discusses the unique aspects of commodity-based forwards and futures, including pricing models and market behavior.",
          slug: "/part-1/commodity-forwards-and-futures",
        },
        {
          id: 12,
          data: "Options Markets",
          ans: "Explores options markets, types of options available, and how they are used for hedging, speculation, and income generation.",
          slug: "/part-1/options-markets",
        },
        {
          id: 13,
          data: "Properties of Options",
          ans: "Covers the key factors influencing option pricing, including volatility, time decay, and interest rates.",
          slug: "/part-1/properties-of-options",
        },
        {
          id: 14,
          data: "Trading Strategies",
          ans: "Examines various options trading strategies, such as spreads and combinations, and their potential payoffs and risks.",
          slug: "/part-1/trading-strategies",
        },
        {
          id: 15,
          data: "Exotic Options",
          ans: "Introduces exotic options, which have more complex features than standard options, and their applications in specialized trading strategies.",
          slug: "/part-1/exotic-options",
        },
        {
          id: 16,
          data: "Properties of Interest Rates",
          ans: "Discusses different types of interest rates, their determinants, and their impact on financial instruments and market behavior.",
          slug: "/part-1/properties-of-interest-rates",
        },
        {
          id: 17,
          data: "Corporate Bonds",
          ans: "Explores the features, risks, and valuation of corporate bonds, including factors affecting bond yields and prices.",
          slug: "/part-1/corporate-bonds",
        },
        {
          id: 18,
          data: "Mortgages and Mortgage-Backed Securities",
          ans: "Overview of mortgage products and the process of securitization, including the structure and risks of mortgage-backed securities.",
          slug: "/part-1/mortgages-and-mortgage-backed-securities",
        },
        {
          id: 19,
          data: "Interest Rate Futures",
          ans: "Covers the mechanics and strategies involved in trading interest rate futures, an important tool for managing interest rate risk.",
          slug: "/part-1/interest-rate-futures",
        },
        {
          id: 20,
          data: "Swaps",
          ans: "Introduction to swaps, including interest rate and currency swaps, and their uses in hedging and speculation in financial markets.",
          slug: "/part-1/swaps",
        },
      ],
    },
    {
      img: "/Group 318.png",
      module_no: 4,
      module_title: "Valuation and Risk Models (VRM)",
      slug:"vrm",
      topics: [
        {
          id: 1,
          data: "Measures of Financial Risk",
          ans: "Discusses key financial risk measures, including Value-at-Risk (VaR) and Expected Shortfall (ES), and their applications in risk management.",
          slug: "/part-1/measures-of-financial-risk",
        },
        {
          id: 2,
          data: "Calculating and Applying VaR",
          ans: "Explores various methods to calculate and apply Value-at-Risk (VaR) in assessing the potential losses in financial portfolios.",
          slug: "/part-1/calculating-and-applying-var",
        },
        {
          id: 3,
          data: "Measuring and Monitoring Volatility",
          ans: "Covers approaches to estimate and monitor asset volatility, an essential component of risk measurement and financial modeling.",
          slug: "/part-1/measuring-and-monitoring-volatility",
        },
        {
          id: 4,
          data: "External and Internal Credit Ratings",
          ans: "Examines the role of credit ratings, both external and internal, in assessing creditworthiness and managing credit risk.",
          slug: "/part-1/external-and-internal-credit-ratings",
        },
        {
          id: 5,
          data: "Country Risk: Determinants, Measures, and Implications",
          ans: "Analyzes country risk, including economic, political, and legal risks, and discusses methods to assess and manage such risks.",
          slug: "/part-1/country-risk-determinants-measures-and-implications",
        },
        {
          id: 6,
          data: "Measuring Credit Risk",
          ans: "Discusses techniques and models used to measure credit risk, focusing on expected and unexpected losses.",
          slug: "/part-1/measuring-credit-risk",
        },
        {
          id: 7,
          data: "Operational Risk",
          ans: "Covers the different types of operational risks organizations face, and the methodologies used to measure and mitigate these risks.",
          slug: "/part-1/operational-risk",
        },
        {
          id: 8,
          data: "Stress Testing",
          ans: "Explores the use of stress testing as a tool to evaluate the resilience of financial institutions under adverse scenarios.",
          slug: "/part-1/stress-testing",
        },
        {
          id: 9,
          data: "Pricing Conventions, Discounting, and Arbitrage",
          ans: "Discusses the principles of pricing fixed-income securities, including the use of discount factors and the law of one price.",
          slug: "/part-1/pricing-conventions-discounting-and-arbitrage",
        },
        {
          id: 10,
          data: "Interest Rates",
          ans: "Explains how to model and apply interest rates in the valuation of financial instruments and fixed-income securities.",
          slug: "/part-1/interest-rates",
        },
        {
          id: 11,
          data: "Bond Yields and Return Calculations",
          ans: "Focuses on calculating yields and returns for bonds, including the impact of interest rates and maturity on bond prices.",
          slug: "/part-1/bond-yields-and-return-calculations",
        },
        {
          id: 12,
          data: "Applying Duration, Convexity, and DV01",
          ans: "Discusses the use of duration, convexity, and DV01 to assess and manage the price sensitivity of fixed-income securities.",
          slug: "/part-1/applying-duration-convexity-and-dv01",
        },
        {
          id: 13,
          data: "Modeling Non-Parallel Term Structure Shifts and Hedging",
          ans: "Covers advanced hedging strategies using term structure models to manage interest rate risks in financial portfolios.",
          slug: "/part-1/modeling-non-parallel-term-structure-shifts-and-hedging",
        },
        {
          id: 14,
          data: "Binomial Trees",
          ans: "Explains how to use binomial tree models to value options, considering the impact of volatility and time to expiration.",
          slug: "/part-1/binomial-trees",
        },
        {
          id: 15,
          data: "The Black-Scholes-Merton Model",
          ans: "Provides an in-depth look at the Black-Scholes-Merton model, a foundational tool for pricing European-style options.",
          slug: "/part-1/the-black-scholes-merton-model",
        },
        {
          id: 16,
          data: "Option Sensitivity Measures: The 'Greeks'",
          ans: "Discusses option risk management through sensitivity measures like delta, gamma, vega, and theta, essential for hedging strategies.",
          slug: "/part-1/option-sensitivity-measures-the-greeks",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="bg-syllabusbg p-4 md:p-8 text-center pt-7 mb-9">
        <h3 className="text-[22px] sm:text-[28px] lg:text-[35px] font-medium text-[#BE4E1E]">
          FRM part-1
        </h3>
        <h1 className="text-[30px]  sm:text-[35px]  md:text-[45px] lg:text-[55px] font-semibold text-[#6A1C1A]">
          Syllabus
        </h1>
      </div>
      {chapter.map((data, index) => {
        return (
          <div className="max-w-[1300px] mx-auto sm:mt-5" key={index} id={data.slug}>
            <div className="w-[100%] flex justify-around -mb-5 sm:-mb-9  px-2 sm:px-2">
              <div className="w-[107px]   sm:w-[190px] lg:w-[250px] flex-shrink-0">
                <Image
                  width={180}
                  height={180}
                  src={data.img}
                  className="w-[100%] flex-shrink-0"
                  alt="frm"
                />
              </div>
              <div className="pl-[5%] w-full ">
                <h2 className="text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold">
                  MODULE 0{data.module_no}
                </h2>
                <h1 className="font-bold text-[16px] h-11 sm:h-[84px] lg:h-auto sm:text-[30px]  lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 ">
                  {data.module_title}
                </h1>
              </div>
            </div>
            <div className="mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9 sm:py-[50px]">
              <table className="w-[90%] sm:w-[80%] mx-auto ">
                <thead>
                  <tr className="text-[12px] sm:text-[16px] lg:text-[20px]">
                    <th className="border-r border-b border-[#BE4E1E9C] w-[15%]">
                      Chapter
                    </th>
                    <th className="border-l border-b border-[#BE4E1E9C]">
                      Topics
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.topics.map((el) => {
                    return (
                      <tr
                        className="text-[14px] sm:text-[16px] lg:text-[20px]"
                        key={el.id}
                      >
                        <td className="border-r border-t border-[#BE4E1E9C] py-2 w-[15%] text-center mb-auto">
                          {el.id}
                        </td>
                        <td className="border-l border-t border-[#BE4E1E9C] py-2 pl-[3%]">
                          <Link href={el.slug}>
                            <p className="font-semibold">{el.data}</p>
                            <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
                              {el.ans}
                            </p>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Syllabus;
