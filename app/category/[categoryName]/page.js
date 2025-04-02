// import { getCategoryDetails, getCategorySlugs, getPostList } from "../../../lib/posts";
// import PostList from "../../../components/blog/PostList";
// import CategoryMenu from "@/components/blog/CategoryMenu";

// export async function generateStaticParams() {
//   const categories = await getCategorySlugs();

//   const paths = categories.map((category) => ({
//     categoryName: category.slug,
//   }));

//   return paths;
// }

// export async function generateMetadata({ params }) {
//   const categoryDetails = await getCategoryDetails(params.categoryName);

//   return {
//     title: categoryDetails.name,
//     robots: {
//       index: false,
//       follow: false,
//     },
//   };
// }

// export default async function CategoryArchive({ params }) {
//   const initialPosts = await getPostList(null, { key: "categoryName", value: params.categoryName });
//   const categoryDetails = await getCategoryDetails(params.categoryName);

//   return (
//     <>
//       <div className="bg-3500bg  max-h-[270px] shadow-xl ">
//         <div className="max-w-[1200px] px-[20px] md:px-[50px] mx-auto py-5 md:py-[50px]">
//           <h1 className="text-[#6A1C1A] xl:text-[3rem] md:text-[2.5rem] leading-[2.5rem] text-[2rem] font-semibold ">
//             Category Archive : <span className="text-[#BE4E1E] ">{categoryDetails.name}</span>{" "}
//           </h1>
//           <p className="text-[#2D303B] max-w-[800px] text-[16px] md:text-[20px] mt-3 md:leading-[32px] ">
//             Found <span className="">{categoryDetails.count ? categoryDetails.count : 0}</span> posts under this category
//           </p>
//         </div>
//       </div>
//       <CategoryMenu />
//       <PostList initialPosts={initialPosts}/>
//     </>
//   );
// }
