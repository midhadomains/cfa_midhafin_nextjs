import { getPostSlugs, getSinglePost } from "../../../lib/posts";
import { getComments } from "../../../lib/comments";
import { getSeo } from "../../../lib/seo";
import Image from "next/image";
import parameterize from "parameterize";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import dynamic from "next/dynamic";
import { GoDotFill } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import CommentForm from "../../../components/blog/CommentForm";
import Date from "../../../components/blog/Date";
import { notFound } from "next/navigation";
import { BiDownArrowAlt } from "react-icons/bi";
import BlogMenuBar from "@/components/blog/BlogMenuBar";
import BottomNav from "@/components/blog/BottomNav";
import CoursesOffered from "@/components/Common/CoursesOffered";
import TableOfContentsChapter from "@/components/blog/TableOfContentsChapter";
import LatexScriptLoader from "@/components/blog/LatexScriptLoader";

const Accordion = dynamic(() => import("../../../components/Common/Accordian"), {
  ssr: false,
});
const ShareButton = dynamic(() => import("../../../components/blog/ShareButton"), {
  ssr: false,
});

function getTitleParts(inputString) {
  const [number, name] = inputString.split(".").map((part) => part.trim());
  const title = {
    number: number,
    name: name,
  };
  return title;
}

const chap = {
  FRM: "Foundations of Risk Management",
  QTA: "Quantitative Analysis",
  FMP: "Financial Market and Products",
  VRM: "Valuation and Risk Models",
};

const authorDetails = {
  "Micky Midha": {
    qualification: "BE, FRM®, CFA, LLB",
    linkedin: "https://www.linkedin.com/in/midhamicky/",
    description: "Micky Midha is a trainer in finance, mathematics, and computer science, with extensive teaching experience.",
    image: "/blog/mickymidha.png",
  },
};
function AuthorTooltip({ authorName }) {
  const authorInfo = authorDetails[authorName] || {
    qualification: "Not Available",
    linkedin: "#",
    description: "No description available.",
  };
  return (
    <div className="relative group-hover:flex z-20 shadow-2xl text-black ">
      <div className="absolute left-[20px]  top-2 rounded-xl p-2 md:p-4 bg-white  border-gray-300 shadow-xl w-[200px] sm:w-[250px] md:w-[350px] hidden group-hover:block z-20 before:content-[''] before:absolute before:top-[-10px] after:shadow-2xl before:left-[50%] before:transform before:translate-x-[-50%] before:border-[12px]  before:border-transparent before:border-b-gray-300 before:border-t-0 before:border-l-0 before:border-r-0">
        <div className="absolute -top-[24px] left-[70px] transform -translate-x-1/2 w-0 h-0 border-[12px] border-transparent border-b-white"></div>
        <div className="pt-2">
          <div className="flex items-center justify-center">
            <Image src={authorInfo.image} width={120} height={120} alt={authorName} className="rounded-full my-auto flex-shrink-0 shadow-xl ml-9 w-[70px] sm:w-[100px] md:w-[120px] max-w-[120px]" priority={true} />
            <Link href={authorInfo.linkedin} target="_blank" className="text-[20px] sm:text-[25px] lg:text-[30px] text-[#0A66C2]">
              <FaLinkedin className="my-auto -mb-[6px] ml-4" />
            </Link>
          </div>
          <p className="text-[14px] mt-2 text-center md:text-[18px] lg:text-[20px] font-semibold tracking-wide leading-[15px] sm:leading-6">{authorName}</p>
          <p className="text-[12px] text-center md:text-[14px] lg:text-[16px] font-[500] my-1 sm:my-[6px]">{authorInfo.qualification}</p>
          <p className="text-center font-[400] text-[12px] md:text-[14px] lg:text-[17px]">{authorInfo.description}</p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const postSlugs = await getPostSlugs();
    return postSlugs.map((s) => ({ postSlug: s.slug }));
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}

var title = null

export async function generateMetadata({ params }) {
  try {
    const data = await getSeo("post", params.postSlug);
    const seoData = data.seo;
    const tagNames = data.tags?.nodes?.map((tag) => tag.name) || [];
    title = getTitleParts(seoData.title);
    // console.log(tagNames)
    return {
      title: `${title.name} - MidhaFin(MF)`,
      description: seoData.metaDesc,
      keywords: tagNames,
      robots: "index,follow",
      googlebot: "index,follow",
      openGraph: {
        title: seoData.opengraphTitle,
        description: seoData.metaDesc,
        images: [
          {
            url: seoData.opengraphImage.mediaItemUrl,
            width: 800,
            height: 600,
          },
        ],
        url: `https://frm.midhafin.com/part-1/${params.postSlug}`, // Updated to part-1
        locale: "en_IN",
        type: seoData.opengraphType,
        siteName: "MidhaFin",
        locale: "en_US",
      },
      twitter: {
        handle: "Midhafin",
        card: "summary_large_image",
        title: seoData.opengraphTitle,
        creator: "@midhafin",
        description: seoData.metaDesc,
        siteId: "d2b79qb3w73861",
        images: [seoData.opengraphImage.mediaItemUrl],
      },
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    notFound();
    return { title: "Page Not Found" };
  }
}

export default async function Post({ params }) {
  let postData,
    comments,
    commentCount,
    seoData,
    featuredImageUrl = "https://www.midhafin.com/_next/image?url=https%3A%2F%2Fmidha-images.s3.ap-south-1.amazonaws.com%2FMidhafin%2FBlog%2FR-Squared.webp&w=1920&q=75";

  try {
    postData = await getSinglePost(params.postSlug);
    ({ comments, commentCount } = await getComments(params.postSlug));
    seoData = await getSeo("post", params.postSlug);
    seoData = seoData.seo;
    if (postData?.featuredImage) {
      const sizes = postData.featuredImage.node.mediaDetails.sizes;
      const maxSize = sizes.reduce(
        (max, size) => {
          const width = parseInt(size.width, 10);
          if (width <= 2200 && width > max.width) {
            return { ...size, width };
          }
          return max;
        },
        { width: 0 }
      );
      featuredImageUrl = maxSize.sourceUrl;
    }
  } catch (error) {
    console.error("Error fetching post data:", error);
    return null;
  }

  const toc = [];
  const content = unified()
    .use(rehypeParse, { fragment: true })
    .use(() => {
      return (tree) => {
        visit(tree, "element", (node) => {
          if (node.tagName === "h2" && node.children && node.children[0] && node.children[0].value) {
            const id = parameterize(node.children[0].value);
            node.properties = node.properties || {};
            node.properties.id = id;
            toc.push({
              id,
              title: node.children[0].value,
            });
          }
        });
      };
    })
    .use(rehypeStringify)
    .processSync(postData.content)
    .toString();

  let jsonSchema;
  try {
    jsonSchema = seoData.schema.raw.replace(/https:\/\/cmsfrm.midhafin.com\/\d{4}\/\d{2}\/\d{2}\/([^/#]+)(#[^/]*)?/g, "https://frm.midhafin.com/part-1/$1"); // Updated to part-1
  } catch (error) {
    console.error("Error processing SEO schema:", error);
    jsonSchema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: "https://frm.midhafin.com/part-1", // Updated to part-1
      name: "MidhaFin",
      description: "Fallback description for MidhaFin.",
      publisher: {
        "@type": "Organization",
        name: "MidhaFin",
        logo: {
          "@type": "ImageObject",
          url: "https://midhafin.com/logo.png",
          width: 120,
          height: 20,
        },
      },
    });
  }

  function parseFAQ(faqString) {
    const faqArray = faqString.split(/>|&gt;/);
    const faqObjects = faqArray.reduce((acc, faq, index) => {
      if (faq.trim().length > 0) {
        const [question, ...answerParts] = faq.trim().split("?");
        const answer = answerParts.join("?").trim();
        acc.push({ id: index, text: question.trim() + " ?", data: answer });
      }
      return acc;
    }, []);
    return faqObjects;
  }

  const generateFAQSchema = (faqArray) => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqArray.map((faq) => ({
        "@type": "Question",
        name: faq.text,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.data,
        },
      })),
    };

    const faqJsonString = JSON.stringify(faqSchema, null, 2);

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonString }} />;
  };

  function convertToArray(input) {
    let sentencesArray = input.split(/>|&gt;/);
    sentencesArray = sentencesArray.map((sentence) => sentence.trim()).filter((sentence) => sentence !== "");
    return sentencesArray;
  }

  function parsePDF(String) {
    const faqArray = String.split(/>|&gt;/);
    const faqObjects = faqArray.reduce((acc, faq, index) => {
      if (faq.trim().length > 0) {
        const [question, ...answerParts] = faq.trim().split("?");
        const answer = answerParts.join("?").trim();
        acc.push({ id: index, text: question.trim(), data: answer });
      }
      return acc;
    }, []);
    return faqObjects;
  }

  function ensureCorrectOrder(arr) {
    if (arr.length !== 2) {
      throw new Error("Input array must have exactly two elements.");
    }

    const slugToCheck = arr[1].slug;
    if (slugToCheck !== "frm-part-1" && slugToCheck !== "frm-part-2") {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }

    return arr;
  }

  const faqData = postData.faqSchema.faqs ? parseFAQ(postData.faqSchema.faqs) : "";

  const LearningObjective = postData.learningObjective.daata ? convertToArray(postData.learningObjective.daata) : null;

  const pdfList = postData.pdf.pdfs ? parsePDF(postData.pdf.pdfs) : null;

  const videoLink = postData.videoLecture.link ? postData.videoLecture.link : null;

  const category = ensureCorrectOrder(postData.categories.nodes);

  const categoryLink = category[1].slug === "frm-part-1" ? "/part-1" : "/part-2";

  const baseUrl = "https://frm.midhafin.com"; // Updated to part-1

  return (
    <>
      <style>{`
      .prose ul li::marker {
        color: #202124; 
      }
    `}</style>
      <LatexScriptLoader />
      <div>
        <div className="bg-[#6A1C1A] text-white text-left px-[20px] mg:px-[50px] py-8">
          <ul className="flex items-center mx-auto text-[14px] my-3 sm:text-[15px] lg:text-[20px] justify-start font-[500] max-w-[1000px]">
            <Link href={`${categoryLink}/`}>
              <li>{category[1].name}</li>
            </Link>
            <MdKeyboardArrowRight className="text-[25px] mx-2 sm:mx-3 md:mx-6" />
            <Link href={`${categoryLink}/syllabus#${category[0].slug}`}>
              <li>
                <span className="hidden sm:block">{chap[category[0].name]}</span>
                <span className="sm:hidden">{category[0].name}</span>
              </li>
            </Link>
            <MdKeyboardArrowRight className="text-[25px] mx-2 sm:mx-3 md:mx-6" />
            <li>{title.number}</li>
          </ul>
          <h1 className="text-[25px] mx-auto max-w-[1000px] md:text[33px] lg:text-[40px] font-bold leading-[30px] md:leading-[40px] lg:leading-[50px] mt-2 md:mt-4 mb-1 md:mb-[10px]">
            {title.name}
            <hr className="w-[50px] sm:w-[75px] mt-5 lg:w-[100px] border-[2px] sm:border-[3px] rounded-full mb-[24px] border-[#BE4E1E]" />
          </h1>
          <div className="text-[14px] md:text-[18px] font-[400] max-w-[1000px] items-center mx-auto flex justify-between">
            <div className="items-center flex flex-wrap">
              <div className="relative group">
                Instructor &nbsp;
                <span className="underline underline-offset-[3px] cursor-pointer min-w-[150px] flex-shrink-0 mr-5">{postData.author.node.name}</span>
                <AuthorTooltip authorName={postData.author.node.name} />
              </div>
              <GoDotFill className="my-auto text-[12px] mr-5" />
              <span className="min-w-[200px]">
                Updated On <Date dateString={postData.modified} />
              </span>
            </div>
            <ShareButton baseUrl={baseUrl} />
          </div>
        </div>
        {LearningObjective ? (
          <div className="bg-[#FAF7F3]">
            <div className="max-w-[1000px] mx-auto py-6 px-5 md:px-[50px]">
              <h1 className="lg:text-[1.5rem] sm:text-[1.25rem] text-[1rem] font-bold my-2">Learning Objectives</h1>
              <ul className="list-disc text-[.88rem] sm:text-[1.05rem] lg:text-[1.25rem] pl-8 text-[#565656]">
                {LearningObjective.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
              <a href="#chapter" className="hidden sm:flex font-sans w-fit my-8 items-center text-[.95rem] sm:text-[1.1rem] lg:text-[1.3rem] font-bold">
                <span className="underline underline-offset-[3px] mr-3">Start Chapter</span>
                <BiDownArrowAlt size={30} />
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
        <div id="chapter" className="gap-[30px] max-w-[1400px] mx-auto px-5 md:px-[50px]">
          <BlogMenuBar video={videoLink} pdfs={pdfList} chapter={category} slug={params.postSlug} />
          <div className="flex justify-between lg:gap-8">
            <TableOfContentsChapter TOC={toc} />
            <div className="max-w-[1100px] w-[100%] pt-5">
              {postData.faqSchema.faqs ? generateFAQSchema(faqData) : ""}
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonSchema }}></script>
              <div className="prose text-[.88rem] sm:text-[1.05rem] lg:text-[1.25rem] w-full flex-shrink-0 text-[#202124]" style={{ fontFamily: "Merriweather, Lato, Georgia, serif" }} dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="">
          <BottomNav slug={params.postSlug} chapter={category} />
          <CoursesOffered category={postData.categories.nodes} />
        </div>
        <div className="max-w-[1000px] mx-auto" id="faq">
          {postData.faqSchema.faqs ? (
            <>
              <h2 className="lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[1.4rem] text-center font-semibold leading-tight mt-5 sm:mt-7 md:mt-10">
                FAQ<span className="text-[#BF4E1E]">s</span>
              </h2>
              <hr className="w-[70px] sm:w-[90px] lg:w-[140px] border-[2px] mx-auto sm:border-[3px] rounded-full border-[#BE4E1E] mb-[10px] md:mb-[20px] lg:mb-[30px]" />
              <Accordion buttonsData={faqData} />
            </>
          ) : (
            ""
          )}
          <div className="container mx-auto px-[20px] md:px-[50px] mt-5" id="comments">
            <h3 className="text-xl py-2 my-4 border-l-4 border-l-[#BF4E1E] pl-4">{commentCount ? commentCount : "No"} comments on this post so far:</h3>
            <CommentForm postId={postData.databaseId} />
            <div className="container mx-auto px-[20px] md:px-[50px]">
              <section>
                <ul>
                  {comments.nodes.map((comment) => (
                    <li key={comment.id} className="pb-4 border-b">
                      <div className="comment-header flex justify-start items-center">
                        <div className="py-4">
                          <Image alt="image" src={comment.author.node.avatar.url} width={comment.author.node.avatar.width} height={comment.author.node.avatar.height} className="rounded-full max-w-[50px] mr-4" />
                        </div>
                        <div>
                          <div className="font-bold">{comment.author.node.name}</div>
                          <div className="text-sm">
                            <Date dateString={comment.date} />
                          </div>
                        </div>
                      </div>
                      <div className="comment-body pl-[66px]">
                        <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const revalidate = 0; // Revalidate every week
