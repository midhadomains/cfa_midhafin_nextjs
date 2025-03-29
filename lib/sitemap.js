import cron from "node-cron";
import fs from "fs";
import path from "path";
import { create } from "xmlbuilder2";
import { getPostSlugs } from "./posts";

const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");

const deleteOldSitemap = () => {
  try {
    if (fs.existsSync(SITEMAP_PATH)) {
      fs.unlinkSync(SITEMAP_PATH);
      console.log("Old sitemap deleted.");
    } else {
      console.log("No old sitemap found.");
    }
  } catch (error) {
    console.error("Error deleting old sitemap:", error);
  }
};

export const generateSitemap = async () => {
  let slugs;
  try {
    slugs = await getPostSlugs();
    console.log(slugs);
  } catch (error) {
    console.error("Error fetching post slugs:", error);
    return "";
  }

  const root = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  });

  // Add slugs to the sitemap
  slugs.forEach((postSlug) => {
    const date = new Date();
    root.ele("url").ele("loc").txt(`https://frm.midhafin.com/${postSlug}`).up().ele("lastmod").txt(date.toISOString()).up();
  });

  // Add static pages to the sitemap
  const pages = [
    { path: "/", lastmod: "2024-08-29" },
    { path: "/blog", lastmod: "2024-08-29" },
    { path: "/contact-us", lastmod: "2024-08-29" },
    { path: "/study-material", lastmod: "2024-08-29" },
    { path: "/dates-and-deadlines", lastmod: "2024-08-29" },
    { path: "/part-1/crash-course", lastmod: "2024-12-29" },
    { path: "/part-1", lastmod: "2024-08-29" },
    { path: "/part-2", lastmod: "2024-08-29" },
    { path: "/part-1/sample-questions", lastmod: "2024-08-29" },
    { path: "/part-2/study-plan", lastmod: "2024-08-29" },
    { path: "/part-1/syllabus", lastmod: "2024-08-29" },
    { path: "/part-2/syllabus", lastmod: "2024-08-29" },
    { path: "/study-groups", lastmod: "2024-08-29" },
    { path: "/fee-structure", lastmod: "2024-08-29" },
    { path: "/part-1/the-building-blocks-of-risk-management", lastmod: "2024-08-29" },
    { path: "/part-1/how-do-firms-manage-financial-risk", lastmod: "2024-08-29" },
    { path: "/part-1/the-governance-of-risk-management", lastmod: "2024-08-29" },
    { path: "/part-1/credit-risk-transfer-mechanisms", lastmod: "2024-08-29" },
    { path: "/part-1/modern-portfolio-theory-and-the-capital-asset-pricing-model", lastmod: "2024-08-29" },
    { path: "/part-1/the-arbitrage-pricing-theory-and-multifactor-models-of-risk-and-return", lastmod: "2024-08-29" },
    { path: "/part-1/principles-for-effective-data-aggregation-and-risk-reporting", lastmod: "2024-08-29" },
    { path: "/part-1/enterprise-risk-management-and-future-trends", lastmod: "2024-08-29" },
    { path: "/part-1/learning-from-financial-disasters", lastmod: "2024-08-29" },
    { path: "/part-1/anatomy-of-the-great-financial-crisis-of-2007-2009", lastmod: "2024-08-29" },
    { path: "/part-1/garp-code-of-conduct", lastmod: "2024-08-29" },
    { path: "/part-1/fundamentals-of-probability", lastmod: "2024-08-29" },
    { path: "/part-1/random-variables", lastmod: "2024-08-29" },
    { path: "/part-1/common-univariate-random-variables", lastmod: "2024-08-29" },
    { path: "/part-1/multivariate-random-variables", lastmod: "2024-08-29" },
    { path: "/part-1/sample-moments", lastmod: "2024-08-29" },
    { path: "/part-1/hypothesis-testing", lastmod: "2024-08-29" },
    { path: "/part-1/linear-regression", lastmod: "2024-08-29" },
    { path: "/part-1/regression-with-multiple-explanatory-variables", lastmod: "2024-08-29" },
    { path: "/part-1/regression-diagnostics", lastmod: "2024-08-29" },
    { path: "/part-1/stationary-time-series", lastmod: "2024-08-29" },
    { path: "/part-1/non-stationary-time-series", lastmod: "2024-08-29" },
    { path: "/part-1/measuring-returns-volatility-and-correlation", lastmod: "2024-08-29" },
    { path: "/part-1/simulation-and-bootstrapping", lastmod: "2024-08-29" },
    { path: "/part-1/machine-learning-methods", lastmod: "2024-08-29" },
    { path: "/part-1/machine-learning-and-prediction", lastmod: "2024-08-29" },
    { path: "/part-1/banks", lastmod: "2024-08-29" },
    { path: "/part-1/insurance-companies-and-pension-plans", lastmod: "2024-08-29" },
    { path: "/part-1/fund-management", lastmod: "2024-08-29" },
    { path: "/part-1/introduction-to-derivatives", lastmod: "2024-08-29" },
    { path: "/part-1/exchanges-and-otc-markets", lastmod: "2024-08-29" },
    { path: "/part-1/central-clearing", lastmod: "2024-08-29" },
    { path: "/part-1/futures-markets", lastmod: "2024-08-29" },
    { path: "/part-1/using-futures-for-hedging", lastmod: "2024-08-29" },
    { path: "/part-1/foreign-exchange-markets", lastmod: "2024-08-29" },
    { path: "/part-1/pricing-financial-forwards-and-futures", lastmod: "2024-08-29" },
    { path: "/part-1/commodity-forwards-and-futures", lastmod: "2024-08-29" },
    { path: "/part-1/options-markets", lastmod: "2024-08-29" },
    { path: "/part-1/properties-of-options", lastmod: "2024-08-29" },
    { path: "/part-1/trading-strategies", lastmod: "2024-08-29" },
    { path: "/part-1/exotic-options", lastmod: "2024-08-29" },
    { path: "/part-1/properties-of-interest-rates", lastmod: "2024-08-29" },
    { path: "/part-1/corporate-bonds", lastmod: "2024-08-29" },
    { path: "/part-1/mortgages-and-mortgage-backed-securities", lastmod: "2024-08-29" },
    { path: "/part-1/interest-rate-futures", lastmod: "2024-08-29" },
    { path: "/part-1/swaps", lastmod: "2024-08-29" },
    { path: "/part-1/measures-of-financial-risk", lastmod: "2024-08-29" },
    { path: "/part-1/calculating-and-applying-var", lastmod: "2024-08-29" },
    { path: "/part-1/measuring-and-monitoring-volatility", lastmod: "2024-08-29" },
    { path: "/part-1/external-and-internal-credit-ratings", lastmod: "2024-08-29" },
    { path: "/part-1/country-risk-determinants-measures-and-implications", lastmod: "2024-08-29" },
    { path: "/part-1/measuring-credit-risk", lastmod: "2024-08-29" },
    { path: "/part-1/operational-risk", lastmod: "2024-08-29" },
    { path: "/part-1/stress-testing", lastmod: "2024-08-29" },
    { path: "/part-1/pricing-conventions-discounting-and-arbitrage", lastmod: "2024-08-29" },
    { path: "/part-1/interest-rates", lastmod: "2024-08-29" },
    { path: "/part-1/bond-yields-and-return-calculations", lastmod: "2024-08-29" },
    { path: "/part-1/applying-duration-convexity-and-dv01", lastmod: "2024-08-29" },
    { path: "/part-1/modeling-non-parallel-term-structure-shifts-and-hedging", lastmod: "2024-08-29" },
    { path: "/part-1/binomial-trees", lastmod: "2024-08-29" },
    { path: "/part-1/the-black-scholes-merton-model", lastmod: "2024-08-29" },
    { path: "/part-1/option-sensitivity-measures-the-greeks", lastmod: "2024-08-29" },
    {
      path: "/part-2/estimating-market-risk-measures",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/non-parametric-approaches",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/extreme-value",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/backtesting-var",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/var-mapping",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/basel-committee-supervision",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/correlation-basics",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/empirical-correlation-properties",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/financial-correlation-modeling",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/empirical-risk-metrics-hedging",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/term-structure-models",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/evolution-short-rates",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/term-structure-models-drift",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/term-structure-models-volatility",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/volatility-smiles",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/fundamental-review-trading-book",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/fundamentals-of-credit-risk",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/governance",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/credit-risk-management",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/capital-structure-banks",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/credit-risk-modeling-assessment",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/credit-scoring-rating",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/retail-credit-risk-management",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/country-risk-determinants",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/estimating-default-probabilities",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/credit-value-at-risk",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/portfolio-credit-risk",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/credit-risk",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/credit-derivatives",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/derivatives",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/counterparty-risk",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/netting-close-out",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/margin-collateral-settlement",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/central-clearing",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/future-value-exposure",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/cva",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/stress-testing-counterparty-exposures",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/structured-credit-risk",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/introduction-to-securitisation",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/operational-risk-introduction",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/risk-governance",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/risk-identification",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/risk-measurement-assessment",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/risk-mitigation",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/risk-reporting",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/integrated-risk-management",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/cyber-resilience",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/cyberthreats-case-study",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/aml-terrorism-financing",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/financial-crime-fraud-case-study",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/outsourcing-risk-management",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/third-party-risk-management",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/investor-protection-case-study",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/model-risk-management-guidance",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/model-risk-case-study",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/stress-testing-banks",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/risk-capital-attribution",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/economic-capital-frameworks",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/capital-planning-bhcs",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/solvency-liquidity-regulation",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/basel-iii-final-reforms",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/high-level-summary",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/finalising-post-crisis-reforms",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/liquidity-risk",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/liquidity-leverage",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/early-warning-indicators",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/investment-function-management",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/liquidity-reserves-management",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/intraday-liquidity-management",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/monitoring-liquidity",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/dealer-bank-failures",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/liquidity-stress-testing",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/liquidity-risk-reporting",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/contingency-funding-planning",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/managing-pricing-deposits",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/managing-non-deposit-liabilities",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/repurchase-agreements-financing",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/liquidity-transfer-pricing",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/us-dollar-shortage",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/covered-interest-parity",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/interest-rate-risk-management",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/illiquid-assets",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/factor-theory",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/factors",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/alpha",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/portfolio-construction",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/portfolio-risk-methods",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/var-risk-budgeting",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/risk-monitoring-performance",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/portfolio-performance-evaluation",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/hedge-funds",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/due-diligence-managers-funds",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/predicting-fraud-managers",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/fed-supervision-silicon-valley-bank",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/credit-suisse-coco-wipeout",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/ai-bank-supervision",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/trustworthy-ai-finance",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/ai-risk-management-framework",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/climate-risk-drivers",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/climate-risk-measurement",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/climate-risk-management-principles",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/crypto-ecosystem-risks",
      lastmod: "2024-10-19",
    },
    {
      path: "/part-2/digital-resilience-finance",
      lastmod: "2024-10-19",
    },
  ];

  pages.forEach(({ path, lastmod }) => {
    root.ele("url").ele("loc").txt(`https://frm.midhafin.com${path}`).up().ele("lastmod").txt(new Date(lastmod).toISOString()).up();
  });

  return root.end({ prettyPrint: true });
};

export const updateSitemap = async () => {
  try {
    console.log("Deleting old sitemap...");
    deleteOldSitemap();

    console.log("Generating new sitemap...");
    const sitemap = await generateSitemap();
    if (sitemap) {
      fs.writeFileSync(SITEMAP_PATH, sitemap);
      console.log("New sitemap generated successfully.");
    } else {
      console.error("Sitemap generation returned an empty result.");
    }
  } catch (error) {
    console.error("Error updating sitemap:", error);
  }
};

cron.schedule("0 0 */3 * *", updateSitemap);

(async () => {
  await updateSitemap();
})();
