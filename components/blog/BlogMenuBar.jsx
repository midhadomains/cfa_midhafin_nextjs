"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa6";

export default function BlogMenuBar({ video, pdfs, chapter, slug }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const floatingDivRef = useRef(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (floatingDivRef.current && !floatingDivRef.current.contains(event.target)) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const justifyContent = activeIndex === 1 ? "justify-start" : activeIndex === 3 ? "justify-center" : activeIndex === 5 ? "justify-end" : "justify-start";

  function filterAndReturnSlug(array) {
    const remainingObject = array.find((item) => item.slug !== "frm-part-1" && item.slug !== "frm-part-2");
    return remainingObject.slug;
  }
  const chapterModule = filterAndReturnSlug(chapter);

  const chapters = {
    frm: {
      module_no: 1,
      module_title: "Foundations of Risk Management (FRM)",
      topics: [
        {
          id: 1,
          data: "The Building Blocks of Risk Management",
          slug: "/part-1/the-building-blocks-of-risk-management",
        },
        {
          id: 2,
          data: "How Do Firms Manage Financial Risk?",
          slug: "/part-1/how-do-firms-manage-financial-risk",
        },
        {
          id: 3,
          data: "The Governance of Risk Management",
          slug: "/part-1/the-governance-of-risk-management",
        },
        {
          id: 4,
          data: "Credit Risk Transfer Mechanisms",
          slug: "/part-1/credit-risk-transfer-mechanisms",
        },
        {
          id: 5,
          data: "Modern Portfolio Theory and Capital Asset Pricing Model",
          slug: "/part-1/modern-portfolio-theory-and-the-capital-asset-pricing-model",
        },
        {
          id: 6,
          data: "The Arbitrage Pricing Theory and Multifactor Models of Risk and Return",
          slug: "/part-1/the-arbitrage-pricing-theory-and-multifactor-models-of-risk-and-return",
        },
        {
          id: 7,
          data: "Principles for Effective Data Aggregation and Risk Reporting",
          slug: "/part-1/principles-for-effective-data-aggregation-and-risk-reporting",
        },
        {
          id: 8,
          data: "Enterprise Risk Management and Future Trends",
          slug: "/part-1/enterprise-risk-management-and-future-trends",
        },
        {
          id: 9,
          data: "Learning from Financial Disasters",
          slug: "/part-1/learning-from-financial-disasters",
        },
        {
          id: 10,
          data: "Anatomy of the Great Financial Crisis of 2007-2009",
          slug: "/part-1/anatomy-of-the-great-financial-crisis-of-2007-2009",
        },
        {
          id: 11,
          data: "GARP Code of Conduct",
          slug: "/part-1/garp-code-of-conduct",
        },
      ],
    },
    qta: {
      module_no: 2,
      module_title: "Quantitative Analysis",
      topics: [
        {
          id: 1,
          data: "Fundamentals of Probability",
          slug: "/part-1/fundamentals-of-probability",
        },
        {
          id: 2,
          data: "Random Variables",
          slug: "/part-1/random-variables",
        },
        {
          id: 3,
          data: "Common Univariate Random Variables",
          slug: "/part-1/common-univariate-random-variables",
        },
        {
          id: 4,
          data: "Multivariate Random Variables",
          slug: "/part-1/multivariate-random-variables",
        },
        {
          id: 5,
          data: "Sample Moments",
          slug: "/part-1/sample-moments",
        },
        {
          id: 6,
          data: "Hypothesis Testing",
          slug: "/part-1/hypothesis-testing",
        },
        {
          id: 7,
          data: "Linear Regression",
          slug: "/part-1/linear-regression",
        },
        {
          id: 8,
          data: "Regression with Multiple Explanatory Variables",
          slug: "/part-1/regression-with-multiple-explanatory-variables",
        },
        {
          id: 9,
          data: "Regression Diagnostics",
          slug: "/part-1/regression-diagnostics",
        },
        {
          id: 10,
          data: "Stationary Time Series",
          slug: "/part-1/stationary-time-series",
        },
        {
          id: 11,
          data: "Non-Stationary Time Series",
          slug: "/part-1/non-stationary-time-series",
        },
        {
          id: 12,
          data: "Measuring Returns, Volatility, and Correlation",
          slug: "/part-1/measuring-returns-volatility-and-correlation",
        },
        {
          id: 13,
          data: "Simulation and Bootstrapping",
          slug: "/part-1/simulation-and-bootstrapping",
        },
        {
          id: 14,
          data: "Machine Learning Methods",
          slug: "/part-1/machine-learning-methods",
        },
        {
          id: 15,
          data: "Machine Learning and Prediction",
          slug: "/part-1/machine-learning-and-prediction",
        },
      ],
    },
    fmp: {
      module_no: 3,
      module_title: "Financial Markets and Products",
      topics: [
        {
          id: 1,
          data: "Banks",
          slug: "/part-1/banks",
        },
        {
          id: 2,
          data: "Insurance Companies and Pension Plans",
          slug: "/part-1/insurance-companies-and-pension-plans",
        },
        {
          id: 3,
          data: "Fund Management",
          slug: "/part-1/fund-management",
        },
        {
          id: 4,
          data: "Introduction to Derivatives",
          slug: "/part-1/introduction-to-derivatives",
        },
        {
          id: 5,
          data: "Exchanges and OTC Markets",
          slug: "/part-1/exchanges-and-otc-markets",
        },
        {
          id: 6,
          data: "Central Clearing",
          slug: "/part-1/central-clearing",
        },
        {
          id: 7,
          data: "Futures Markets",
          slug: "/part-1/futures-markets",
        },
        {
          id: 8,
          data: "Using Futures for Hedging",
          slug: "/part-1/using-futures-for-hedging",
        },
        {
          id: 9,
          data: "Foreign Exchange Markets",
          slug: "/part-1/foreign-exchange-markets",
        },
        {
          id: 10,
          data: "Pricing Financial Forwards and Futures",
          slug: "/part-1/pricing-financial-forwards-and-futures",
        },
        {
          id: 11,
          data: "Commodity Forwards and Futures",
          slug: "/part-1/commodity-forwards-and-futures",
        },
        {
          id: 12,
          data: "Options Markets",
          slug: "/part-1/options-markets",
        },
        {
          id: 13,
          data: "Properties of Options",
          slug: "/part-1/properties-of-options",
        },
        {
          id: 14,
          data: "Trading Strategies",
          slug: "/part-1/trading-strategies",
        },
        {
          id: 15,
          data: "Exotic Options",
          slug: "/part-1/exotic-options",
        },
        {
          id: 16,
          data: "Properties of Interest Rates",
          slug: "/part-1/properties-of-interest-rates",
        },
        {
          id: 17,
          data: "Corporate Bonds",
          slug: "/part-1/corporate-bonds",
        },
        {
          id: 18,
          data: "Mortgages and Mortgage-Backed Securities",
          slug: "/part-1/mortgages-and-mortgage-backed-securities",
        },
        {
          id: 19,
          data: "Interest Rate Futures",
          slug: "/part-1/interest-rate-futures",
        },
        {
          id: 20,
          data: "Swaps",
          slug: "/part-1/swaps",
        },
      ],
    },
    vrm: {
      module_no: 4,
      module_title: "Valuation and Risk Models",
      topics: [
        {
          id: 1,
          data: "Measures of Financial Risk",
          slug: "/part-1/measures-of-financial-risk",
        },
        {
          id: 2,
          data: "Calculating and Applying VaR",
          slug: "/part-1/calculating-and-applying-var",
        },
        {
          id: 3,
          data: "Measuring and Monitoring Volatility",
          slug: "/part-1/measuring-and-monitoring-volatility",
        },
        {
          id: 4,
          data: "External and Internal Credit Ratings",
          slug: "/part-1/external-and-internal-credit-ratings",
        },
        {
          id: 5,
          data: "Country Risk: Determinants, Measures, and Implications",
          slug: "/part-1/country-risk-determinants-measures-and-implications",
        },
        {
          id: 6,
          data: "Measuring Credit Risk",
          slug: "/part-1/measuring-credit-risk",
        },
        {
          id: 7,
          data: "Operational Risk",
          slug: "/part-1/operational-risk",
        },
        {
          id: 8,
          data: "Stress Testing",
          slug: "/part-1/stress-testing",
        },
        {
          id: 9,
          data: "Pricing Conventions, Discounting, and Arbitrage",
          slug: "/part-1/pricing-conventions-discounting-and-arbitrage",
        },
        {
          id: 10,
          data: "Interest Rates",
          slug: "/part-1/interest-rates",
        },
        {
          id: 11,
          data: "Bond Yields and Return Calculations",
          slug: "/part-1/bond-yields-and-return-calculations",
        },
        {
          id: 12,
          data: "Applying Duration, Convexity, and DV01",
          slug: "/part-1/applying-duration-convexity-and-dv01",
        },
        {
          id: 13,
          data: "Modeling Non-Parallel Term Structure Shifts and Hedging",
          slug: "/part-1/modeling-non-parallel-term-structure-shifts-and-hedging",
        },
        {
          id: 14,
          data: "Binomial Trees",
          slug: "/part-1/binomial-trees",
        },
        {
          id: 15,
          data: "The Black-Scholes-Merton Model",
          slug: "/part-1/the-black-scholes-merton-model",
        },
        {
          id: 16,
          data: "Option Sensitivity Measures: The 'Greeks'",
          slug: "/part-1/option-sensitivity-measures-the-greeks",
        },
      ],
    },
    mr: {
      module_no: 5,
      module_title: "Market Risk Measurement and Management",
      slug: "market-risk-management",
      topics: [
        {
          id: 1,
          data: "Estimating Market Risk Measures: An Introduction and Overview",
          slug: "/part-2/estimating-market-risk-measures",
        },
        {
          id: 2,
          data: "Non-parametric Approaches",
          slug: "/part-2/non-parametric-approaches",
        },
        {
          id: 3,
          data: "C: Extreme Value",
          slug: "/part-2/extreme-value",
        },
        {
          id: 4,
          data: "Backtesting VaR",
          slug: "/part-2/backtesting-var",
        },
        {
          id: 5,
          data: "VaR Mapping",
          slug: "/part-2/var-mapping",
        },
        {
          id: 6,
          data: "Basel Committee on Banking Supervision",
          slug: "/part-2/basel-committee-supervision",
        },
        {
          id: 7,
          data: "Co-relation Basics: Definitions, Applications, and Terminology",
          slug: "/part-2/correlation-basics",
        },
        {
          id: 8,
          data: "Empirical Properties of CORelation: How Do CORelations Behave in the Real World?",
          slug: "/part-2/empirical-correlation-properties",
        },
        {
          id: 9,
          data: "Financial Co-relation Modeling — Bottom-Up Approaches",
          slug: "/part-2/financial-correlation-modeling",
        },
        {
          id: 10,
          data: "Empirical Approaches to Risk Metrics and Hedging",
          slug: "/part-2/empirical-risk-metrics-hedging",
        },
        {
          id: 11,
          data: "The Science of Term Structure Models",
          slug: "/part-2/term-structure-models",
        },
        {
          id: 12,
          data: "The Evolution of Short Rates and the Shape of the Term Structure",
          slug: "/part-2/evolution-short-rates",
        },
        {
          id: 13,
          data: "The Art of Term Structure Models: Drift",
          slug: "/part-2/term-structure-models-drift",
        },
        {
          id: 14,
          data: "The Art of Term Structure Models: Volatility and Distribution",
          slug: "/part-2/term-structure-models-volatility",
        },
        {
          id: 15,
          data: "Volatility Smiles",
          slug: "/part-2/volatility-smiles",
        },
        {
          id: 16,
          data: "Fundamental Review of the Trading Book",
          slug: "/part-2/fundamental-review-trading-book",
        },
      ],
    },
    cr: {
      module_no: 6,
      module_title: "Credit Risk Measurement and Management",
      slug: "credit-risk-management",
      topics: [
        {
          id: 1,
          data: "Fundamentals of Credit Risk",
          slug: "/part-2/fundamentals-of-credit-risk",
        },
        {
          id: 2,
          data: "Governance",
          slug: "/part-2/governance",
        },
        {
          id: 3,
          data: "Credit Risk Management",
          slug: "/part-2/credit-risk-management",
        },
        {
          id: 4,
          data: "Capital Structure in Banks",
          slug: "/part-2/capital-structure-banks",
        },
        {
          id: 5,
          data: "Introduction to Credit Risk Modeling and Assessment",
          slug: "/part-2/credit-risk-modeling-assessment",
        },
        {
          id: 6,
          data: "Credit Scoring and Rating",
          slug: "/part-2/credit-scoring-rating",
        },
        {
          id: 7,
          data: "Credit Scoring and Retail Credit Risk Management",
          slug: "/part-2/retail-credit-risk-management",
        },
        {
          id: 8,
          data: "Country Risk: Determinants, Measures, and Implications",
          slug: "/part-2/country-risk-determinants",
        },
        {
          id: 9,
          data: "Estimating Default Probabilities",
          slug: "/part-2/estimating-default-probabilities",
        },
        {
          id: 10,
          data: "Credit Value at Risk",
          slug: "/part-2/credit-value-at-risk",
        },
        {
          id: 11,
          data: "Portfolio Credit Risk",
          slug: "/part-2/portfolio-credit-risk",
        },
        {
          id: 12,
          data: "Credit Risk",
          slug: "/part-2/credit-risk",
        },
        {
          id: 13,
          data: "Credit Derivatives",
          slug: "/part-2/credit-derivatives",
        },
        {
          id: 14,
          data: "Derivatives",
          slug: "/part-2/derivatives",
        },
        {
          id: 15,
          data: "Counterparty Risk and Beyond",
          slug: "/part-2/counterparty-risk",
        },
        {
          id: 16,
          data: "Netting, Close-out and Related Aspects",
          slug: "/part-2/netting-close-out",
        },
        {
          id: 17,
          data: "Margin (Collateral) and Settlement",
          slug: "/part-2/margin-collateral-settlement",
        },
        {
          id: 18,
          data: "Central Clearing",
          slug: "/part-2/central-clearing",
        },
        {
          id: 19,
          data: "Future Value and Exposure",
          slug: "/part-2/future-value-exposure",
        },
        {
          id: 20,
          data: "CVA",
          slug: "/part-2/cva",
        },
        {
          id: 21,
          data: "The Evolution of Stress Testing Counterparty Exposures",
          slug: "/part-2/stress-testing-counterparty-exposures",
        },
        {
          id: 22,
          data: "Structured Credit Risk",
          slug: "/part-2/structured-credit-risk",
        },
        {
          id: 23,
          data: "An Introduction to Securitisation",
          slug: "/part-2/introduction-to-securitisation",
        },
      ],
    },
    or: {
      module_no: 7,
      module_title: "Operational Risk and Resilience",
      slug: "operational-risk-resilience",
      topics: [
        {
          id: 1,
          data: "Introduction to Operational Risk and Resilience",
          slug: "/part-2/operational-risk-introduction",
        },
        {
          id: 2,
          data: "Risk Governance",
          slug: "/part-2/risk-governance",
        },
        {
          id: 3,
          data: "Risk Identification",
          slug: "/part-2/risk-identification",
        },
        {
          id: 4,
          data: "Risk Measurement and Assessment",
          slug: "/part-2/risk-measurement-assessment",
        },
        {
          id: 5,
          data: "Risk Mitigation",
          slug: "/part-2/risk-mitigation",
        },
        {
          id: 6,
          data: "Risk Reporting",
          slug: "/part-2/risk-reporting",
        },
        {
          id: 7,
          data: "Integrated Risk Management",
          slug: "/part-2/integrated-risk-management",
        },
        {
          id: 8,
          data: "Cyber-resilience: Range of Practices",
          slug: "/part-2/cyber-resilience",
        },
        {
          id: 9,
          data: "Case Study: Cyberthreats and Information Security Risks",
          slug: "/part-2/cyberthreats-case-study",
        },
        {
          id: 10,
          data: "Sound Management of Risks related to Money Laundering and Financing of Terrorism",
          slug: "/part-2/aml-terrorism-financing",
        },
        {
          id: 11,
          data: "Case Study: Financial Crime and Fraud",
          slug: "/part-2/financial-crime-fraud-case-study",
        },
        {
          id: 12,
          data: "Guidance on Managing Outsourcing Risk",
          slug: "/part-2/outsourcing-risk-management",
        },
        {
          id: 13,
          data: "Third-party Risk Management",
          slug: "/part-2/third-party-risk-management",
        },
        {
          id: 14,
          data: "Case Study: Investor Protection and Compliance Risks in Investment Activities",
          slug: "/part-2/investor-protection-case-study",
        },
        {
          id: 15,
          data: "Supervisory Guidance on Model Risk Management",
          slug: "/part-2/model-risk-management-guidance",
        },
        {
          id: 16,
          data: "Case Study: Model Risk and Model Validation",
          slug: "/part-2/model-risk-case-study",
        },
        {
          id: 17,
          data: "Stress Testing Banks",
          slug: "/part-2/stress-testing-banks",
        },
        {
          id: 18,
          data: "Risk Capital Attribution and Risk-Adjusted Performance Measurement",
          slug: "/part-2/risk-capital-attribution",
        },
        {
          id: 19,
          data: "Range of Practices and Issues in Economic Capital Frameworks",
          slug: "/part-2/economic-capital-frameworks",
        },
        {
          id: 20,
          data: "Capital Planning at Large Bank Holding Companies",
          slug: "/part-2/capital-planning-bhcs",
        },
        {
          id: 21,
          data: "Solvency, Liquidity, and Other Regulation After the Global Financial Crisis",
          slug: "/part-2/solvency-liquidity-regulation",
        },
        {
          id: 22,
          data: "Basel III: Finalising Post-Crisis Reforms",
          slug: "/part-2/basel-iii-final-reforms",
        },
      ],
    },
    lr: {
      module_no: 8,
      module_title: "Liquidity and Treasury Risk Measurement and Management",
      slug: "liquidity-treasury-risk-management",
      topics: [
        {
          id: 1,
          data: "Liquidity Risk",
          slug: "/part-2/liquidity-risk",
        },
        {
          id: 2,
          data: "Liquidity and Leverage",
          slug: "/part-2/liquidity-leverage",
        },
        {
          id: 3,
          data: "Early Warning Indicators",
          slug: "/part-2/early-warning-indicators",
        },
        {
          id: 4,
          data: "The Investment Function in Financial-Services Management",
          slug: "/part-2/investment-function-management",
        },
        {
          id: 5,
          data: "Liquidity and Reserves Management: Strategies and Policies",
          slug: "/part-2/liquidity-reserves-management",
        },
        {
          id: 6,
          data: "Intraday Liquidity Risk Management",
          slug: "/part-2/intraday-liquidity-management",
        },
        {
          id: 7,
          data: "Monitoring Liquidity",
          slug: "/part-2/monitoring-liquidity",
        },
        {
          id: 8,
          data: "The Failure Mechanics of Dealer Banks",
          slug: "/part-2/dealer-bank-failures",
        },
        {
          id: 9,
          data: "Liquidity Stress Testing",
          slug: "/part-2/liquidity-stress-testing",
        },
        {
          id: 10,
          data: "Liquidity Risk Reporting and Stress Testing",
          slug: "/part-2/liquidity-risk-reporting",
        },
        {
          id: 11,
          data: "Contingency Funding Planning",
          slug: "/part-2/contingency-funding-planning",
        },
        {
          id: 12,
          data: "Managing and Pricing Deposit Services",
          slug: "/part-2/managing-pricing-deposits",
        },
        {
          id: 13,
          data: "Managing Non-deposit Liabilities",
          slug: "/part-2/managing-non-deposit-liabilities",
        },
        {
          id: 14,
          data: "Repurchase Agreements and Financing",
          slug: "/part-2/repurchase-agreements-financing",
        },
        {
          id: 15,
          data: "Liquidity Transfer Pricing",
          slug: "/part-2/liquidity-transfer-pricing",
        },
        {
          id: 16,
          data: "The US Dollar Shortage in Global Banking and the International Policy Response",
          slug: "/part-2/us-dollar-shortage",
        },
        {
          id: 17,
          data: "Covered Interest Parity Lost: Understanding the Cross-Currency Basis",
          slug: "/part-2/covered-interest-parity",
        },
        {
          id: 18,
          data: "Risk Management for Changing Interest Rates: Asset-Liability Management and Duration Techniques",
          slug: "/part-2/interest-rate-risk-management",
        },
        {
          id: 19,
          data: "Illiquid Assets",
          slug: "/part-2/illiquid-assets",
        },
      ],
    },
    im: {
      module_no: 9,
      module_title: "Risk Management and Investment Management",
      slug: "risk-investment-management",
      topics: [
        {
          id: 1,
          data: "Factor Theory",
          slug: "/part-2/factor-theory",
        },
        {
          id: 2,
          data: "Factors",
          slug: "/part-2/factors",
        },
        {
          id: 3,
          data: "Alpha",
          slug: "/part-2/alpha",
        },
        {
          id: 4,
          data: "Portfolio Construction",
          slug: "/part-2/portfolio-construction",
        },
        {
          id: 5,
          data: "Portfolio Risk: Analytical Methods",
          slug: "/part-2/portfolio-risk-methods",
        },
        {
          id: 6,
          data: "VaR and Risk Budgeting in Investment Management",
          slug: "/part-2/var-risk-budgeting",
        },
        {
          id: 7,
          data: "Risk Monitoring and Performance Measurement",
          slug: "/part-2/risk-monitoring-performance",
        },
        {
          id: 8,
          data: "Portfolio Performance Evaluation",
          slug: "/part-2/portfolio-performance-evaluation",
        },
        {
          id: 9,
          data: "Hedge Funds",
          slug: "/part-2/hedge-funds",
        },
        {
          id: 10,
          data: "Performing Due Diligence on Specific Managers and Funds",
          slug: "/part-2/due-diligence-managers-funds",
        },
        {
          id: 11,
          data: "Predicting Fraud by Investment Managers",
          slug: "/part-2/predicting-fraud-managers",
        },
      ],
    },
    ci: {
      module_no: 10,
      module_title: "Current Issues in Financial Markets",
      slug: "current-issues-financial-markets",
      topics: [
        {
          id: 1,
          data: "Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank",
          slug: "/part-2/fed-supervision-silicon-valley-bank",
        },
        {
          id: 2,
          data: "The Credit Suisse CoCo Wipeout: Facts, Misconceptions, and Lessons for Financial Regulation",
          slug: "/part-2/credit-suisse-coco-wipeout",
        },
        {
          id: 3,
          data: "Artificial Intelligence and Bank Supervision",
          slug: "/part-2/ai-bank-supervision",
        },
        {
          id: 4,
          data: "Financial Risk Management and Explainable, Trustworthy, Responsible AI",
          slug: "/part-2/trustworthy-ai-finance",
        },
        {
          id: 5,
          data: "Artificial Intelligence Risk Management Framework",
          slug: "/part-2/ai-risk-management-framework",
        },
        {
          id: 6,
          data: "Climate-Related Risk Drivers and their Transmission Channels",
          slug: "/part-2/climate-risk-drivers",
        },
        {
          id: 7,
          data: "Climate-Related Financial Risks - Measurement Methodologies",
          slug: "/part-2/climate-risk-measurement",
        },
        {
          id: 8,
          data: "Principles for the Effective Management and Supervision of Climate-Related Financial Risks",
          slug: "/part-2/climate-risk-management-principles",
        },
        {
          id: 9,
          data: "The Crypto Ecosystem: Key Elements and Risks",
          slug: "/part-2/crypto-ecosystem-risks",
        },
        {
          id: 10,
          data: "Digital Resilience and Financial Stability: The Quest for Policy Tools in the Financial Sector",
          slug: "/part-2/digital-resilience-finance",
        },
      ],
    },
    mls: {
      module_no: 11,
      module_title: "Miscellaneous",
      slug: "miscellaneous",
      topics: [
        {
          id: 1,
          data: "Curriculum Changes in 2025",
          slug: "/part-2/changes-in-2025",
        }
      ],
    },
  };
  return (
    <div className="relative -mt-3 sm:-mt-7">
      <ul className="flex justify-around text-center text-[.85rem] sm:text-[1.1rem] lg:text-[1.3rem]  bg-[#EEEBE8] shadow-xl rounded">
        <li className={`py-2 sm:py-3 lg:py-[18.91px]  sm:w-[30%] max-w-[200px] underline underline-offset-[3px] ${video !== null ? "hover:cursor-pointer font-bold" : " text-[#929191] font-[500] pointer-events-none"}`} onClick={() => handleClick(1)}>
          Video Lecture
        </li>
        <li className="py-2 sm:py-3 lg:py-[18.91px] ">|</li>
        <li className={`py-2 sm:py-3 lg:py-[18.91px]  sm:w-[30%] max-w-[200px] underline underline-offset-[3px] ${pdfs !== null ? "hover:cursor-pointer font-bold" : " text-[#929191] font-[500] pointer-events-none"}`} onClick={() => handleClick(3)}>
          PDFs
        </li>
        <li className="py-2 sm:py-3 lg:py-[18.91px] ">|</li>
        <li className="flex items-center py-2 sm:py-3 lg:py-[18.91px] font-bold hover:cursor-pointer sm:w-[30%] max-w-[200px] underline underline-offset-[3px]" onClick={() => handleClick(5)}>
          List of chapters <BiSolidDownArrow size={20} className="ml-4 hidden sm:block" />
        </li>
      </ul>

      {activeIndex !== null && (
        <div className={`absolute top-full left-0 right-0 z-30 flex ${justifyContent}`}>
          <div ref={floatingDivRef} className="bg-white shadow-lg min-w-[300px] w-[100%] max-w-[400px]">
            {activeIndex === 1 && (
              <div className="max-w-[400px] min-w-[300px] w-[100%] p-4">
                <iframe
                  style={{ width: "100%", height: "200px" }}
                  src={video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen="true"
                ></iframe>
              </div>
            )}
            {activeIndex === 3 && (
              <ul className="max-w-[400px] w-[100%] rounded-xl">
                {pdfs.map((pdf, index) => (
                  <li key={index} className="text-center">
                    {console.log(pdf)}
                    {console.log(pdf.url)}
                    <a
                      href={pdf.url} // Use the `url` from the `pdf` object directly
                      target="_blank" // Ensures the PDF opens in a new tab
                      rel="noopener noreferrer" // Adds security for links opening in a new tab
                      className="flex items-center py-2 justify-center"
                    >
                      <span className="underline underline-offset-[3px]">{pdf.title}</span>
                      <FaFilePdf size={20} className="ml-5 text-red-600" />
                    </a>
                    <hr />
                  </li>
                ))}
              </ul>
            )}

            {activeIndex === 5 && (
              <div className="max-w-[400px] ">
                <ul className="text-[.85rem] sm:text-[1rem] ">
                  {chapters[chapterModule].topics.map((value, index) => {
                    const normalizedSlug = slug.trim().replace(/^\/part-\d+\//, "");
                    const normalizedValueSlug = value.slug.trim().replace(/^\/part-\d+\//, "");
                    return (
                      <Link href={value.slug} key={index}>
                        <li className={`py-3 px-5 ${normalizedValueSlug === normalizedSlug ? "font-bold" : "text-[#4d4c4c]"}`}>{value.data}</li>
                        <hr />
                      </Link>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
