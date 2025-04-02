import { Inter } from "next/font/google";
import '../styles/main.css';
import Whatsapp from "@/components/Whatsapp";
import Navbar from "@/components/Common/SiteHeader";
import Footer from "@/components/Common/SiteFooter";
import Head from "next/head";
import ContextMenuDisabler from "@/components/Common/RightClickDisabler";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FRM Exam Preparation | Your own FRM Study Portal",
  description: "Discover comprehensive resources and insights on the Financial Risk Manager (FRM) certification. Explore the benefits, scope, exam details, and career opportunities that the FRM designation offers",
  keywords: ["best frm courses", " best frm course in india,best frm courses online", "frm certification", "frm exam", "best frm coaching", "best frm coaching online", "best frm coaching in bangalore", "best frm coaching in mumbai", "best frm coaching in india",
    "best frm coaching in kolkata", "best frm coaching in chennai", "best frm coaching institute in india", "best frm online coaching in india",
    "best frm coaching in india quora", "best coaching for frm", "best coaching for frm in india", "best online coaching for frm", "Top-rated FRM coaching",
    "Best FRM coaching institutes with high pass rates", "cfa", "cfa exam", "about cfa course", "best cfa prep course", "best cfa coaching in india", "frm exam prep", "frm exam registration", "frm exam level 1", "best way to prepare for frm exam", "best ways to study for the frm exam"],
    googlebot : "index,follow",
    openGraph: {
      title: "FRM Exam Preparation | Your own FRM Study Portal",
      description: "Boost Your Career In Finance, Discover comprehensive resources and insights on the Financial Risk Manager (FRM) certification",
      type: "website",
      site_name: "Midhafin",
      locale: "en_US",
      url: "https://cfa.midhafin.com/",
      images: [
        {
          url: "https://midha-images.s3.ap-south-1.amazonaws.com/frm.Midhafin/home_page/FRM+open+graph.png",
          width: 800,
          height: 600,
          alt: "Midhafin",
          id: "10",
        },
      ],
    },
    twitter: {
      handle: "Midhafin",
      card: "summary_large_image",
      creator: '@midhafin',
      title: "FRM Exam Preparation | Your own FRM Study Portal",
      site:"midhafin.com",
      siteId: 'd2b79qb3w73861',
      description: "Boost Your Career In Finance, Discover comprehensive resources and insights on the Financial Risk Manager (FRM) certification",
      images: ["https://midha-images.s3.ap-south-1.amazonaws.com/frm.Midhafin/home_page/FRM+open+graph.png"],
    },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ userSelect: "none" ,scrollBehavior:"smooth" }}>
      <Head>
        <meta property="og:title" content="MidhaFin:- Best prep provider" />
        <meta property="og:description" content="Boost Your Career In Finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cfa.midhafin.com/" />
        <meta property="og:image" content="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/open-graph-snippet_600*336.png.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MidhaFin:- Best prep provider" />
        <meta name="twitter:description" content="Boost Your Career In Finance" />
        <meta name="twitter:image" content="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/open-graph-snippet_600*336.png.png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <ContextMenuDisabler />
        <Whatsapp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
