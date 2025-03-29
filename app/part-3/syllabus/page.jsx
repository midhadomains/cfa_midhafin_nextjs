import Image from "next/image";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "FRM Part 2 Syllabus - Midhafin",
  description: "Explore the comprehensive FRM Part 2 syllabus with Midhafin. Detailed topics and study resources to help you prepare effectively for the FRM certification exam.",
  keywords: "FRM exam syllabus,FRM Part 2 syllabus, FRM exam topics, Midhafin syllabus guide, FRM study materials, FRM certification syllabus",
};

function Syllabus() {
  const data = [
    {
      img: "/Group 391.png",
      module_no: 1,
      module_title: "Market Risk Measurement and Management (MR)",
      topics: [
        { id: 1, data: "Estimating Market Risk Measures: An Introduction and Overview " },
        { id: 2, data: "Non-parametric Approaches" },
        { id: 3, data: "Parametric Approaches (II): Extreme Value" },
        { id: 4, data: "Backtesting VaR" },
        { id: 5, data: "VaR Mapping" },
        { id: 6, data: "Basel Committee on Banking Supervision" },
        { id: 7, data: "Co-relation Basics: Definitions, Applications, and Terminology " },
        { id: 8, data: "Empirical Properties of CORelation: How Do CORelations Behave in the Real World?" },
        { id: 9, data: "Financial Co-relation Modeling — Bottom-Up Approaches" },
        { id: 10, data: "Empirical Approaches to Risk Metrics and Hedging" },
        { id: 11, data: "The Science of Term Structure Models" },
        { id: 12, data: "The Evolution of Short Rates and the Shape of the Term Structure" },
        { id: 13, data: "The Art of Term Structure Models: Drift" },
        { id: 14, data: "The Art of Term Structure Models: Volatility and Distribution" },
        { id: 15, data: "Volatility Smiles" },
        { id: 16, data: "Fundamental Review of the Trading Book" },
      ],
    },
    {
      img: "/Group 392.png",
      module_no: 2,
      module_title: "Credit Risk Measurement and Management (CR)",
      topics: [
        { id: 1, data: "Fundamentals of Credit Risk" },
        { id: 2, data: "Governance" },
        { id: 3, data: "Credit Risk Management" },
        { id: 4, data: "Capital Structure in Banks" },
        { id: 5, data: "Introduction to Credit Risk Modeling and Assessment" },
        { id: 6, data: "Credit Scoring and Rating " },
        { id: 7, data: "Credit Scoring and Retail Credit Risk Management" },
        { id: 8, data: "Country Risk: Determinants, Measures, and Implications" },
        { id: 9, data: "Estimating Default Probabilities" },
        { id: 10, data: "Credit Value at Risk" },
        { id: 11, data: "Portfolio Credit Risk" },
        { id: 12, data: " Credit Risk" },
        { id: 13, data: "Credit Derivatives" },
        { id: 14, data: "Derivatives" },
        { id: 15, data: "Counterparty Risk and Beyond" },
        { id: 16, data: "Netting, Close-out and Related Aspects" },
        { id: 17, data: "Margin (Collateral) and Settlement" },
        { id: 18, data: "Central Clearing" },
        { id: 19, data: "Future Value and Exposure" },
        { id: 20, data: "CVA " },
        { id: 21, data: "The Evolution of Stress Testing Counterparty Exposures" },
        { id: 22, data: "Structured Credit Risk" },
        { id: 23, data: "An Introduction to Securitisation " },
      ],
    },
    {
      img: "/Group 393.png",
      module_no: 3,
      module_title: "Operational Risk and Resilience (OR)",
      topics: [
        { id: 1, data: "Introduction to Operational Risk and Resilience" },
        { id: 2, data: "Risk Governance" },
        { id: 3, data: "Risk Identification" },
        { id: 4, data: "Risk Measurement and Assessment" },
        { id: 5, data: "Risk Mitigation" },
        { id: 6, data: "Risk Reporting" },
        { id: 7, data: "Integrated Risk Management" },
        { id: 8, data: "Cyber-resilience: Range of practices" },
        { id: 9, data: "Case Study: Cyberthreats and Information Security Risks" },
        { id: 10, data: "Sound Management of Risks related to Money Laundering and Financing of Terrorism" },
        { id: 11, data: "Case Study: Financial Crime and Fraud" },
        { id: 12, data: "Guidance on Managing Outsourcing Risk" },
        { id: 13, data: "Third-party Risk Management" },
        { id: 14, data: "Case Study: Investor Protection and Compliance Risks in Investment Activities" },
        { id: 15, data: "Supervisory Guidance on Model Risk Management" },
        { id: 16, data: "Case Study: Model Risk and Model Validation" },
        { id: 17, data: "Stress Testing Banks" },
        { id: 18, data: "Risk Capital Attribution and Risk-Adjusted Performance Measurement" },
        { id: 19, data: "Range of practices and issues in economic capital frameworks" },
        { id: 20, data: "Capital Planning at Large Bank Holding Companies: Supervisory Expectations and Range of Current Practice" },
        { id: 21, data: "Capital Regulation Before the Global Financial Crisis" },
        { id: 22, data: "Solvency, Liquidity, and Other Regulation After the Global Financial Crisis" },
        { id: 23, data: "High-level summary of Basel III reforms" },
        { id: 24, data: "Basel III: Finalising post-crisis reforms" },
      ],
    },
    {
      img: "/Group 394.png",
      module_no: 4,
      module_title: "Liquidity and Treasury Risk Measurement and Management (LR)",
      topics: [
        { id: 1, data: "Liquidity Risk" },
        { id: 2, data: "Liquidity and Leverage" },
        { id: 3, data: "Early Warning Indicators" },
        { id: 4, data: "The Investment Function in Financial-Services Management" },
        { id: 5, data: "Liquidity and Reserves Management: Strategies and Policies" },
        { id: 6, data: "Intraday Liquidity Risk Management" },
        { id: 7, data: "Monitoring Liquidity" },
        { id: 8, data: "The Failure Mechanics of Dealer Banks" },
        { id: 9, data: "Liquidity Stress Testing" },
        { id: 10, data: "Liquidity Risk Reporting and Stress Testing" },
        { id: 11, data: "Contingency Funding Planning" },
        { id: 12, data: "Managing and Pricing Deposit Services" },
        { id: 14, data: "Repurchase Agreements and Financing" },
        { id: 15, data: "Liquidity Transfer Pricing: A Guide to Better Practice" },
        { id: 16, data: "The US Dollar Shortage in Global Banking and the International Policy Response" },
        { id: 17, data: "Covered Interest Parity Lost: Understanding the Cross-Currency Basis" },
        { id: 18, data: "Risk Management for Changing Interest Rates: Asset-Liability Management and Duration Techniques" },
        { id: 19, data: "Illiquid Assets" },
      ],
    },
    {
      img: "/Group 395.png",
      module_no: 5,
      module_title: "Risk Management and Investment Management (RI)",
      topics: [
        { id: 1, data: "Factor Theory" },
        { id: 2, data: "Factors" },
        { id: 3, data: "Alpha" },
        { id: 4, data: "Portfolio Construction" },
        { id: 5, data: "Portfolio Risk: Analytical Methods" },
        { id: 6, data: "VaR and Risk Budgeting in Investment Management" },
        { id: 7, data: "Risk Monitoring and Performance Measurement" },
        { id: 8, data: "Portfolio Performance Evaluation" },
        { id: 9, data: "Hedge Funds" },
        { id: 10, data: "Performing Due Diligence on Specific Managers and Funds" },
        { id: 11, data: "Predicting Fraud by Investment Managers" },
      ],
    },
    {
      img: "/Group 396.png",
      module_no: 6,
      module_title: "Current Issues in Financial Markets (CI)",
      topics: [
        { id: 1, data: "Review of the Federal Reserve's Supervision and Regulation of Silicon Valley Bank" },
        { id: 2, data: "The Credit Suisse CoCo Wipeout: Facts, Misperceptions, and Lessons for Financial Regulation" },
        { id: 3, data: "Artificial Intelligence and Bank Supervision - Federal Reserve Bank of Richmond, Second Quarter 2023" },
        { id: 4, data: "Financial Risk Management and Explainable, Trustworthy, Responsible AI" },
        { id: 5, data: "Artificial Intelligence Risk Management Framework" },
        { id: 6, data: "Climate-related Risk drivers and Their transmission channels" },
        { id: 7, data: "Climate-related Financial Risks – Measurement methodologies" },
        { id: 8, data: "Principles for the effective management and supervision of climate-related financial risks" },
        { id: 9, data: "The Crypto Ecosystem: Key Elements and Risks" },
        { id: 10, data: "Digital Resilience and Financial Stability. The Quest for Policy Tools in The Financial Sector" },
      ],
    },
    {
      img: "/Group 396.png",
      module_no: 6,
      module_title: "Miscellaneous",
      topics: [
        { id: 1, data: "Curriculum Changes in 2025" },
      ],
    },
  ];
  const chapter = [
    {
      img: "/Group 391.png",
      module_no: 1,
      module_title: "Market Risk Measurement and Management",
      slug: "market-risk-management",
      topics: [
        {
          id: 1,
          data: "Estimating Market Risk Measures: An Introduction and Overview",
          ans: "Introduction to estimating market risk using historical and parametric approaches, including expected shortfall and quantile estimations.",
          slug: "/part-2/estimating-market-risk-measures"
        },
        {
          id: 2,
          data: "Non-parametric Approaches",
          ans: "Covers non-parametric methods like bootstrap historical simulation for coherent risk measures, including advantages and disadvantages.",
          slug: "/part-2/non-parametric-approaches"
        },
        {
          id: 3,
          data: "Parametric Approaches (II): Extreme Value",
          ans: "Discusses extreme value theory (EVT) and its application in risk management, focusing on the peaks-over-threshold approach.",
          slug: "/part-2/extreme-value"
        },
        {
          id: 4,
          data: "Backtesting VaR",
          ans: "Explores the process of backtesting VaR models, discussing challenges, errors, and Basel backtesting rules.",
          slug: "/part-2/backtesting-var"
        },
        {
          id: 5,
          data: "VaR Mapping",
          ans: "Covers the principles of VaR mapping, capturing general and specific risks in portfolios, and its role in stress testing.",
          slug: "/part-2/var-mapping"
        },
        {
          id: 6,
          data: "Validating Bank Holding Companies' Value-at-Risk Models for Market Risk",
          ans: "Explore the process of validating Value-at-Risk (VaR) models for market risk in bank holding companies, ensuring compliance, accuracy, and effective risk management practices.",
          slug: "/part-2/validating-bank-holding-companies-value-at-risk-models-for-market-risk"
        },
        {
          id: 7,
          data: "Beyond Exceedance-Based Backtesting of Value-at-Risk Models",
          ans: "Delve into advanced methods for backtesting Value-at-Risk models beyond exceedance-based approaches, enhancing accuracy and robustness in risk assessment.",
          //slug: "/part-2/correlation-basics"
        },
        {
          id: 8,
          data: "Correlation Basics: Definations, Applications, and Terminology",
          ans: "Understand correlation basics: definitions, applications in finance, key terminology, and their role in risk management and portfolio optimization.",
          slug: "/part-2/correlation-basics"
         // slug: "/part-2/empirical-correlation-properties"
        },
        {
          id: 9,
          data: "Empirical Properties of Correlation: How Do Correlations Behave in the Real World?",
          ans:"Explore the empirical properties of correlation, analyzing how correlations behave in real-world financial markets and their impact on risk management.",
          //ans: "Covers bottom-up approaches to financial correlation modeling, focusing on copula functions and joint probability of defaults.",
          slug: "/part-2/empirical-correlation-properties"
          //slug: "/part-2/financial-correlation-modeling"
        },
        {
          id: 10,
          //data: "Empirical Approaches to Risk Metrics and Hedging",
          data:"Financial Correlation Modeling: Bottom-Up Approaches",
          //ans: "Discusses empirical approaches to risk metrics, including regression hedging and principal component analysis.",
          ans:"Covers bottom-up approaches to financial correlation modeling, focusing on copula functions and joint probability of defaults.",
          //slug: "/part-2/empirical-risk-metrics-hedging"
          slug:"/part-2/financial-correlation-modeling",
        },
        {
          id: 11,
          //data: "The Science of Term Structure Models",
          //ans: "Explores term structure models of interest rates, focusing on arbitrage pricing and option-adjusted spreads.",
          //slug: "/part-2/term-structure-models"
          data:"Regression Hedging and Principal Component Analysis(2025)",
          ans:"Explore Regression Hedging and Principal Component Analysis (2025) techniques for effective risk management and financial portfolio optimization.",
          slug:"/part-2/regression-hedging-and-principal-component-analysis-2025",
          //Renamed & Reordered -MR-10
        },
        {
          id: 12,
          //data: "The Evolution of Short Rates and the Shape of the Term Structure",
          //ans: "Discusses short rate models, interest rate trees, and the impact of volatility on term structure shapes.",
          //slug: "/part-2/evolution-short-rates"
          data:"Arbitrage Pricing with Term Structure Models",
          ans:"Discover Arbitrage Pricing with Term Structure Models, focusing on interest rate modeling, risk-neutral valuation, and financial derivatives pricing.",
          slug:"/part-2/arbitrage-pricing-with-term-structure-models",
          // //Renamed & Reordered -MR-11
        },
        {
          id: 13,
         // data: "The Art of Term Structure Models: Drift",
         // ans: "Covers the construction and effectiveness of short-term rate trees, focusing on drift and model fitting.",
         // slug: "/part-2/term-structure-models-drift"
         data:"Expectations, Risk Premium, Convexity, and The Shape of the Term Structure",
         ans:"Explore Expectations, Risk Premium, Convexity, and the Shape of the Term Structure, unraveling key drivers of interest rate behavior and bond pricing.",
         slug:"/part-2/expectations-risk-premium-convexity-shape-of-term-structure",
          // //Renamed & Reordered -MR-12
        },
        {
          id: 14,
          //data: "The Art of Term Structure Models: Volatility and Distribution",
          data: "The Art of Term Structure Models: Drift",
          //ans: "Explores short-term rate models under time-dependent volatility, including CIR and lognormal models.",
          ans: "Covers the construction and effectiveness of short-term rate trees, focusing on drift and model fitting.",
          //slug: "/part-2/term-structure-models-volatility"
           slug: "/part-2/term-structure-models-drift"
        },
        {
          id: 15,
          //data: "Volatility Smiles",
          data: "The Art of Term Structure Models: Volatility and Distribution",
          //ans: "Discusses volatility smiles and their implications for option pricing and implied volatility.",
          ans: "Explores short-term rate models under time-dependent volatility, including CIR and lognormal models.",
          //slug: "/part-2/volatility-smiles"
          slug: "/part-2/term-structure-models-volatility"
        },
        {
          id: 16,
          data: "The Vasicek and Gauss+ Models",
          ans: "Explore the Vasicek and Gauss+ models, their applications in interest rate modeling, risk management, and insights into financial market dynamics.",
          slug: "/part-2/the-vasicek-and-Gauss+-Model"
        },
        {
          id: 17,
           data: "Volatility Smiles",
          ans: "Discusses volatility smiles and their implications for option pricing and implied volatility.",
          slug: "/part-2/volatility-smiles"
          //new
        },
        {
          id: 18,
           data: "Fundamental Review of the Trading Book",
          ans: "Understand the Fundamental Review of the Trading Book (FRTB), its impact on market risk management, and regulatory reforms for financial stability.",
          slug: "/part-2/fundamental-review-trading-book"
          //new
        },
      ]
    },
    {
      img: "/Group 392.png",
      module_no: 2,
      module_title: "Credit Risk Measurement and Management",
      slug: "credit-risk-management",
      topics: [
        {
          id: 1,
          data: "Fundamentals of Credit Risk",
          ans: "Defines credit risk, its sources, and key concepts like default, insolvency, and bankruptcy, along with credit risk examples.",
          slug: "/part-2/fundamentals-of-credit-risk"
        },
        {
          id: 2,
          data: "Governance",
          ans: "Explores the governance structure for managing credit risk, including responsibilities and the three lines of defense framework.",
          slug: "/part-2/governance"
        },
        {
          id: 3,
          data: "Credit Risk Management",
          ans: "Focuses on effective credit risk management practices, including exposure limits, asset classification, and loan loss provisions.",
          slug: "/part-2/credit-risk-management"
        },
        {
          id: 4,
          data: "Capital Structure in Banks",
          ans: "Examines how banks structure capital relative to credit risk, covering economic capital, expected loss, and unexpected loss.",
          slug: "/part-2/capital-structure-banks"
        },
        {
          id: 5,
          data: "Introduction to Credit Risk Modeling and Assessment",
          ans: "Introduces credit risk modeling techniques, including the CAMEL system and Merton model.",
          slug: "/part-2/credit-risk-modeling-assessment"
        },
        {
          id: 6,
          data: "Credit Scoring and Rating",
          ans: "Compares credit scoring and rating systems, discussing through-the-cycle and point-in-time ratings.",
          slug: "/part-2/credit-scoring-rating"
        },
        {
          id: 7,
          data: "Credit Scoring and Retail Credit Risk Management",
          ans: "Analyzes retail credit risk, focusing on credit scoring models and risk management strategies.",
          slug: "/part-2/retail-credit-risk-management"
        },
        {
          id: 8,
          data: "Country Risk: Determinants, Measures, and Implications",
          ans: "Explores country risk, including its sources, measurement, and implications for credit risk.",
          slug: "/part-2/country-risk-determinants"
        },
        {
          id: 9,
          data: "Estimating Default Probabilities",
          ans: "Discusses methods for estimating default probabilities, including rating migration and hazard rates.",
          slug: "/part-2/estimating-default-probabilities"
        },
        {
          id: 10,
          data: "Credit Value at Risk",
          ans: "Covers credit VaR, including its calculation, application, and comparison with market VaR.",
          slug: "/part-2/credit-value-at-risk"
        },
        {
          id: 11,
          data: "Portfolio Credit Risk",
          ans: "Discusses portfolio credit risk, focusing on default correlation and Credit VaR using simulation methods.",
          slug: "/part-2/portfolio-credit-risk"
        },
        {
          id: 12,
          data: "Credit Risk",
          ans: "Discusses the various aspects of credit risk including factors, measurement, and management.",
          slug: "/part-2/credit-risk"
        },
        {
          id: 13,
          data: "Credit Derivatives",
          ans: "Explores credit derivatives, including CDS, CDOs, and their role in managing credit risk.",
          slug: "/part-2/credit-derivatives"
        },
        {
          id: 14,
          data: "Derivatives",
          ans: "Covers the basic principles and applications of derivatives in managing credit risk.",
          slug: "/part-2/derivatives"
        },
        {
          id: 15,
          data: "Counterparty Risk and Beyond",
          ans: "Covers counterparty risk, including CVA, DVA, and the management of derivative exposures.",
          slug: "/part-2/counterparty-risk"
        },
        {
          id: 16,
          data: "Netting, Close-out and Related Aspects",
          ans: "Discusses netting and close-out procedures, their role in reducing credit exposure, and ISDA agreements.",
          slug: "/part-2/netting-close-out"
        },
        {
          id: 17,
          data: "Margin (Collateral) and Settlement",
          ans: "Explores collateral management, including CSAs, margin calculation, and collateral disputes.",
          slug: "/part-2/margin-collateral-settlement"
        },
        {
          id: 18,
          data: "Central Clearing",
          ans: "Discusses central clearing, including CCPs, margin requirements, and default management.",
          slug: "/part-2/central-clearing"
        },
        {
          id: 19,
          data: "Future Value and Exposure",
          ans: "Covers future value and exposure calculation methods, focusing on EPE, PFE, and stress testing.",
          slug: "/part-2/future-value-exposure"
        },
        {
          id: 20,
          data: "CVA",
          ans: "Discusses Credit Valuation Adjustment (CVA), including its calculation, management, and impact on pricing.",
          slug: "/part-2/cva"
        },
        {
          id: 21,
          data: "The Evolution of Stress Testing Counterparty Exposures",
          ans: "Examines the evolution of stress testing for counterparty exposures, focusing on best practices and regulatory expectations.",
          slug: "/part-2/stress-testing-counterparty-exposures"
        },
        {
          id: 22,
          data: "Structured Credit Risk",
          ans: "Introduces structured credit products, including tranching, securitization, and their associated risks.",
          slug: "/part-2/structured-credit-risk"
        },
        {
          id: 23,
          data: "An Introduction to Securitisation",
          ans: "Provides an overview of securitization, including structures, benefits, and risks associated with asset-backed securities.",
          slug: "/part-2/introduction-to-securitisation"
        }
      ]
    },
    {
      img: "/Group 393.png",
      module_no: 3,
      module_title: "Operational Risk and Resilience",
      slug: "operational-risk-resilience",
      topics: [
        {
          id: 1,
          data: "Introduction to Operational Risk and Resilience",
          ans: "Overview of operational risk management frameworks, including types of risks and elements of operational resilience.",
          slug: "/part-2/operational-risk-introduction"
        },
        {
          id: 2,
          data: "Risk Governance",
          ans: "Details the governance framework for operational risk, emphasizing Basel expectations and the three lines of defense model.",
          slug: "/part-2/risk-governance"
        },
        {
          id: 3,
          data: "Risk Identification",
          ans: "Discusses top-down and bottom-up approaches for identifying operational risks, including scenario analysis and risk taxonomies.",
          slug: "/part-2/risk-identification"
        },
        {
          id: 4,
          data: "Risk Measurement and Assessment",
          ans: "Covers the tools and techniques for measuring operational risk, including key risk indicators (KRIs) and scenario analysis.",
          slug: "/part-2/risk-measurement-assessment"
        },
        {
          id: 5,
          data: "Risk Mitigation",
          ans: "Focuses on strategies for mitigating operational risk, including insurance, outsourcing, and business continuity planning.",
          slug: "/part-2/risk-mitigation"
        },
        {
          id: 6,
          data: "Risk Reporting",
          ans: "Discusses the importance of effective risk reporting, including internal and external reporting requirements and communication strategies.",
          slug: "/part-2/risk-reporting"
        },
        {
          id: 7,
          data: "Integrated Risk Management",
          ans: "Explores the concept of integrated risk management, combining various risk types into a unified framework for decision-making.",
          slug: "/part-2/integrated-risk-management"
        },
        {
          id: 8,
          data: "Cyber-resilience: Range of Practices",
          ans: "Covers the practices for enhancing cyber-resilience, including cybersecurity frameworks, incident response, and threat intelligence.",
          slug: "/part-2/cyber-resilience"
        },
        {
          id: 9,
          data: "Case Study: Cyberthreats and Information Security Risks",
          ans: "Presents a case study on managing cyberthreats and information security risks in financial institutions.",
          slug: "/part-2/cyberthreats-case-study"
        },
        {
          id: 10,
          data: "Sound Management of Risks related to Money Laundering and Financing of Terrorism",
          ans: "Discusses best practices for managing risks associated with money laundering and terrorism financing, focusing on AML frameworks.",
          slug: "/part-2/aml-terrorism-financing"
        },
        {
          id: 11,
          data: "Case Study: Financial Crime and Fraud",
          ans: "Analyzes a case study on financial crime and fraud, exploring the detection, prevention, and response strategies.",
          slug: "/part-2/financial-crime-fraud-case-study"
        },
        {
          id: 12,
          data: "Guidance on Managing Outsourcing Risk",
          ans: "Provides guidance on managing outsourcing risk, including due diligence, contract management, and regulatory expectations.",
          slug: "/part-2/outsourcing-risk-management"
        },
        {
          id: 13,
          data: "Third-party Risk Management",
          ans: "Explores the risks associated with third-party vendors, including monitoring, assessment, and mitigation strategies.",
          slug: "/part-2/third-party-risk-management"
        },
        {
          id: 14,
          data: "Case Study: Investor Protection and Compliance Risks in Investment Activities",
          ans: "Presents a case study on investor protection and compliance risks, focusing on regulatory breaches and mitigation strategies.",
          slug: "/part-2/investor-protection-case-study"
        },
        {
          id: 15,
          data: "Supervisory Guidance on Model Risk Management",
          ans: "Discusses the supervisory guidance on model risk management, focusing on model validation and governance practices.",
          slug: "/part-2/model-risk-management-guidance"
        },
        {
          id: 16,
          data: "Case Study: Model Risk and Model Validation",
          ans: "Explores a case study on model risk and validation, focusing on the impact of poor model governance.",
          slug: "/part-2/model-risk-case-study"
        },
        {
          id: 17,
          data: "Stress Testing Banks",
          ans: "Covers the principles and methodologies of stress testing in banks, focusing on liquidity and capital adequacy.",
          slug: "/part-2/stress-testing-banks"
        },
        {
          id: 18,
          data: "Risk Capital Attribution and Risk-Adjusted Performance Measurement",
          ans: "Explores the methods of risk capital attribution and the calculation of risk-adjusted performance metrics.",
          slug: "/part-2/risk-capital-attribution"
        },
        {
          id: 19,
          data: "Range of Practices and Issues in Economic Capital Frameworks",
          ans: "Discusses the range of practices and challenges in implementing economic capital frameworks in financial institutions.",
          slug: "/part-2/economic-capital-frameworks"
        },
        {
          id: 20,
          data: "Capital Planning at Large Bank Holding Companies",
          ans: "Examines the expectations and practices for capital planning at large bank holding companies.",
          slug: "/part-2/capital-planning-bhcs"
        },
        {
          id: 21,
          data: "Capital Regulation Before the Global Financial Crisis",
          ans: "Analyzes the post-crisis regulatory reforms related to solvency and liquidity, focusing on Basel III.",
          slug: "/part-2/financial-regulation-before-global-financial-crisis"
        },
        {
          id: 22,
          data: "Solvency, Liquidity, and Other Regulation After the Global Financial Crisis",
          ans: "Discusses the finalization of Basel III reforms, focusing on their impact on global financial stability.",
          slug: "/part-2/solvency-liquidity-regulation"
        },
        {
          id: 23,
          data: "High-level summary of Basel III reforms",
          ans: "Discusses on improving capital quality, risk sensitivity, and regulatory consistency, addressing financial crisis-induced regulatory shortcomings.",
          slug: "/part-2/high-level-summary"
        },
        {
          id: 24,
          data: "Basel III: Finalising post-crisis reforms",
          ans: "Analyzes the post-crisis regulatory reforms related to solvency and liquidity, focusing on Basel III.",
          slug: "/part-2/finalising-post-crisis-reforms"
        }
      
      ]
    },
    {
      img: "/Group 394.png",
      module_no: 4,
      module_title: "Liquidity and Treasury Risk Measurement and Management",
      slug: "liquidity-treasury-risk-management",
      topics: [
        {
          id: 1,
          data: "Liquidity Risk",
          ans: "Explores liquidity risk, including cost of liquidation, liquidity-adjusted VaR, and lessons from historical cases.",
          slug: "/part-2/liquidity-risk"
        },
        {
          id: 2,
          data: "Liquidity and Leverage",
          ans: "Discusses the relationship between liquidity and leverage, focusing on leverage ratios and regulatory requirements.",
          slug: "/part-2/liquidity-leverage"
        },
        {
          id: 3,
          data: "Early Warning Indicators",
          ans: "Covers early warning indicators for liquidity stress, including market signals, funding gaps, and credit spreads.",
          slug: "/part-2/early-warning-indicators"
        },
        {
          id: 4,
          data: "The Investment Function in Financial-Services Management",
          ans: "Discusses the role of the investment function in managing liquidity and treasury risks in financial institutions.",
          slug: "/part-2/investment-function-management"
        },
        {
          id: 5,
          data: "Liquidity and Reserves Management: Strategies and Policies",
          ans: "Explores strategies and policies for managing liquidity and reserves, focusing on contingency funding plans.",
          slug: "/part-2/liquidity-reserves-management"
        },
        {
          id: 6,
          data: "Intraday Liquidity Risk Management",
          ans: "Covers the management of intraday liquidity risk, focusing on settlement processes and payment systems.",
          slug: "/part-2/intraday-liquidity-management"
        },
        {
          id: 7,
          data: "Monitoring Liquidity",
          ans: "Discusses the tools and techniques for monitoring liquidity, including cash flow analysis and liquidity ratios.",
          slug: "/part-2/monitoring-liquidity"
        },
        {
          id: 8,
          data: "The Failure Mechanics of Dealer Banks",
          ans: "Analyzes the mechanics of dealer bank failures, focusing on liquidity crises and counterparty risks.",
          slug: "/part-2/dealer-bank-failures"
        },
        {
          id: 9,
          data: "Liquidity Stress Testing",
          ans: "Explores the methodologies for liquidity stress testing, focusing on scenario analysis and regulatory expectations.",
          slug: "/part-2/liquidity-stress-testing"
        },
        {
          id: 10,
          data: "Liquidity Risk Reporting and Stress Testing",
          ans: "Covers the reporting requirements for liquidity risk and stress testing, focusing on internal and external communication.",
          slug: "/part-2/liquidity-risk-reporting"
        },
        {
          id: 11,
          data: "Contingency Funding Planning",
          ans: "Discusses the development and implementation of contingency funding plans, focusing on liquidity crises.",
          slug: "/part-2/contingency-funding-planning"
        },
        {
          id: 12,
          data: "Managing and Pricing Deposit Services",
          ans: "Explores the management and pricing of deposit services, focusing on deposit insurance and interest rate risk.",
          slug: "/part-2/managing-pricing-deposits"
        },
        {
          id: 13,
          data: "Managing Non-deposit Liabilities",
          ans: "Covers the management of non-deposit liabilities, including repurchase agreements and short-term funding strategies.",
          slug: "/part-2/managing-non-deposit-liabilities"
        },
        {
          id: 14,
          data: "Repurchase Agreements and Financing",
          ans: "Discusses the role of repurchase agreements in financing, focusing on their risks and regulatory implications.",
          slug: "/part-2/repurchase-agreements-financing"
        },
        {
          id: 15,
          data: "Liquidity Transfer Pricing",
          ans: "Explores the concept of liquidity transfer pricing, focusing on its role in risk management and regulatory compliance.",
          slug: "/part-2/liquidity-transfer-pricing"
        },
        {
          id: 16,
          data: "The US Dollar Shortage in Global Banking and the International Policy Response",
          ans: "Analyzes the US dollar shortage in global banking, focusing on policy responses and their impact on liquidity.",
          slug: "/part-2/us-dollar-shortage"
        },
        {
          id: 17,
          data: "Covered Interest Parity Lost: Understanding the Cross-Currency Basis",
          ans: "Discusses the breakdown of covered interest parity and its implications for cross-currency basis swaps.",
          slug: "/part-2/covered-interest-parity"
        },
        {
          id: 18,
          data: "Risk Management for Changing Interest Rates: Asset-Liability Management and Duration Techniques",
          ans: "Explores asset-liability management techniques for managing interest rate risks, focusing on duration analysis.",
          slug: "/part-2/interest-rate-risk-management"
        },
        {
          id: 19,
          data: "Illiquid Assets",
          ans: "Discusses the risks associated with illiquid assets, including valuation challenges and liquidity management strategies.",
          slug: "/part-2/illiquid-assets"
        }
      ]
    },
    {
      img: "/Group 395.png",
      module_no: 5,
      module_title: "Risk Management and Investment Management",
      slug: "risk-investment-management",
      topics: [
        {
          id: 1,
          data: "Factor Theory",
          ans: "Introduction to factor theory, covering key concepts like factor models and their role in risk management.",
          slug: "/part-2/factor-theory"
        },
        {
          id: 2,
          data: "Factors",
          ans: "Discusses the various factors that drive returns in financial markets, including macroeconomic and style factors.",
          slug: "/part-2/factors"
        },
        {
          id: 3,
          data: "Alpha",
          ans: "Explores the concept of alpha, focusing on its measurement and implications for portfolio management.",
          slug: "/part-2/alpha"
        },
        {
          id: 4,
          data: "Portfolio Construction",
          ans: "Covers the principles of portfolio construction, including diversification, asset allocation, and optimization techniques.",
          slug: "/part-2/portfolio-construction"
        },
        {
          id: 5,
          data: "Portfolio Risk: Analytical Methods",
          ans: "Discusses analytical methods for assessing portfolio risk, including VaR, stress testing, and scenario analysis.",
          slug: "/part-2/portfolio-risk-methods"
        },
        {
          id: 6,
          data: "VaR and Risk Budgeting in Investment Management",
          ans: "Explores the use of VaR and risk budgeting in investment management, focusing on allocation and performance measurement.",
          slug: "/part-2/var-risk-budgeting"
        },
        {
          id: 7,
          data: "Risk Monitoring and Performance Measurement",
          ans: "Covers the tools and techniques for monitoring risk and measuring performance in investment portfolios.",
          slug: "/part-2/risk-monitoring-performance"
        },
        {
          id: 8,
          data: "Portfolio Performance Evaluation",
          ans: "Discusses methods for evaluating portfolio performance, including benchmarks, attribution analysis, and risk-adjusted returns.",
          slug: "/part-2/portfolio-performance-evaluation"
        },
        {
          id: 9,
          data: "Hedge Funds",
          ans: "Explores hedge funds, their strategies, risks, and the role they play in portfolio diversification.",
          slug: "/part-2/hedge-funds"
        },
        {
          id: 10,
          data: "Performing Due Diligence on Specific Managers and Funds",
          ans: "Covers due diligence processes for evaluating managers and funds, focusing on risk and performance metrics.",
          slug: "/part-2/due-diligence-managers-funds"
        },
        {
          id: 11,
          data: "Predicting Fraud by Investment Managers",
          ans: "Discusses methods for identifying and predicting fraudulent activities by investment managers.",
          slug: "/part-2/predicting-fraud-managers"
        }
      ]
    },
    {
      img: "/Group 396.png",
      module_no: 6,
      module_title: "Current Issues in Financial Markets",
      slug: "current-issues-financial-markets",
      topics: [
        {
          id: 1,
          data: "2023 Bank Failures, Preliminary lessons learnt for resolution",
          ans: "Analyze the Credit Suisse case and 2023 US bank failures, their impact on the international resolution framework, and areas for improvement in bank resolution.",
          slug: "/part-2/2023-bank-failures"
        },
        {
          id: 2,
          data: "Generative Artificial Intelligence in Finance: Risk Considerations",
          ans: "Compare generative AI vs traditional AI, its challenges in finance, synthetic data risks, and cybersecurity threats impacting financial stability.",
          slug: "/part-2/generative-artifical-intelligence-in-finance-risk-consideration"
        },
        {
          id: 3,
          data: "Artificial intelligence and the economy: implications for central banks",
          ans: "Understand AI's risks and opportunities for central banks, its macroeconomic impact, and trade-offs between internal and external AI models in financial sectors.",
          slug: "/part-2/artificial-intelligence-and-the-economy-impliications-for-central-banks"
        },
        {
          id: 4,
          data: "Interest Rate Risk Management by EME Banks",
          ans: "Explore interest rate risk in EME banks, compare management methods with advanced economies, and understand recent exposure changes and hedging importance.",
          slug: "/part-2/interest-rate-managment-by-eme-banks"
        },
        {
          id: 5,
          data: "Laying a robust macro-financial foundation for the future.",
          ans: "Understand post-pandemic inflation trends, disinflation factors, central bank policies, and strategies for sustainable growth and stable inflation in global economies.",
          slug: "/part-2/laying-a-robust-macro-financial-foundation"
        },
        {
          id: 6,
          data: "The Last Mile: Financial Vulnerabilities and Risks, Chapter 2: The Rise and Risks of Private Credit",
          ans: "Analyze private credit characteristics, growth, and returns, assess risks to financial stability, and explore policy recommendations to mitigate associated vulnerabilities.",
          //slug: "/part-2/the-last-mile"
        },
        {
          id: 7,
          data: "Monetary and fiscal policy: safeguarding stability and trust",
          ans: "Understand how fiscal and monetary policies influence economies, the risks of breaching stability boundaries, and challenges posed by high public debt levels.",
          //slug: "/part-2/monetary-and-fiscal-policy"
        },
        {
          id: 8,
          data: "Regulating the Crypto Ecosystem: The Case of Unbacked Crypto Assets",
          ans: "Learn about crypto assets, their classifications, risks, regulatory approaches, and frameworks like the Bali Fintech Agenda for managing unbacked crypto assets.",
          //slug: "/part-2/regulating-the-crypto-ecosystem"
        },
        {
          id: 9,
          data: "Digital Resilience and Financial Stability: The Quest for Policy Tools in The Financial Sector",
          ans: "Understand cyber and ICT risks in finance, their systemic impact, and explore macroprudential tools and policies to mitigate these risks and related challenges.",
          slug: "/part-2/digital-resilience-finance"
        }
      ]
    },
    {
      img: "/Group 396.png",
      module_no: "Miscellaneous",
      module_title: "Miscellaneous",
      slug: "Miscellaneous",
      topics: [
        {
          id: 1,
          data: "Curriculum Changes in 2025",
          ans: "Analyze the Credit Suisse case and 2023 US bank failures, their impact on the international resolution framework, and areas for improvement in bank resolution.",
          slug: "/part-2/changes-in-2025"
        },
      ]
    }
  ];
  
  
  return (
    <div>
      <div className="bg-syllabusbg p-4 md:p-8 text-center pt-7 mb-9">
        <h3 className="text-[22px] sm:text-[28px] lg:text-[35px] font-medium text-[#BE4E1E]">FRM part-2</h3>
        <h1 className="text-[30px]  sm:text-[35px]  md:text-[45px] lg:text-[55px] font-semibold text-[#6A1C1A]">Syllabus</h1>
      </div>
      {chapter.map((data, index) => {
        return (
          <div className="max-w-[1300px] mx-auto sm:mt-5" key={index} id={data.slug}>
            <div className="w-[100%] flex items-center justify-around -mb-5 sm:-mb-9  px-2 sm:px-2">
              <div className="w-[107px]   sm:w-[190px] lg:w-[250px] flex-shrink-0">
                <Image width={180} height={180} src={data.img} className="w-[100%] flex-shrink-0" alt="frm" />
              </div>
              <div className="pl-[5%] w-full ">
                <h2 className="text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold">MODULE {data.module_no}</h2>
                <h1 className="font-bold text-[16px] h-11 sm:h-[84px] lg:h-auto sm:text-[30px] lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 ">{data.module_title}</h1>
              </div>
            </div>
            <div className="mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9 sm:py-[50px]">
              <table className="w-[90%] sm:w-[80%] mx-auto ">
                <thead>
                  <tr className="text-[12px] sm:text-[16px] lg:text-[20px]">
                    <th className="border-r border-b border-[#BE4E1E9C] w-[15%]">Chapter</th>
                    <th className="border-l border-b border-[#BE4E1E9C]">Topics</th>
                  </tr>
                </thead>
                <tbody>
                  {data.topics.map((el) => {
                    return (
                      <tr className="text-[14px] sm:text-[16px] lg:text-[20px]" key={el.id}>
                        <td className="border-r border-t border-[#BE4E1E9C] py-2 w-[15%] text-center mb-auto">{el.id}</td>
                        <td className="border-l border-t border-[#BE4E1E9C] py-2 pl-[3%]">
                          <Link href={el.slug ? el.slug : "syllabus/"}>
                            <p className="font-semibold">{el.data}</p>
                            <p className="text-[12px] sm:text-[14px] lg:text-[16px]">{el.ans}</p>
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
