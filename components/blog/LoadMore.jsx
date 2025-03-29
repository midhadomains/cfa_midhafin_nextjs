// import { getPostList } from "../../lib/posts";
// import { useState } from "react";

// export default function LoadMore({ posts, setPosts, taxonomy = null }) {

//     let bT = posts.pageInfo.hasNextPage ? 'Load more posts' : 'No more posts to load';
//     let bD = posts.pageInfo.hasNextPage ? false : true;

//     const [buttonText, setButtonText] = useState(bT);
//     const [buttonDisabled, setButtonDisabled] = useState(bD);

//     const handleOnclick = async (event) => {

//         setButtonText('Loading...');
//         setButtonDisabled(true);

//         const morePosts = await getPostList(posts.pageInfo.endCursor, taxonomy);

//         let updatedPosts = {
//             pageInfo: {

//             },
//             nodes: []
//         }

//         updatedPosts.pageInfo = morePosts.pageInfo;

//         posts.nodes.map((node) => {
//             updatedPosts.nodes.push(node);
//         });

//         morePosts.nodes.map((node) => {
//             updatedPosts.nodes.push(node);
//         });

//         setPosts(updatedPosts);

//         if (morePosts.pageInfo.hasNextPage) {
//             setButtonText('Load more posts');
//             setButtonDisabled(false);
//         }
//         else {
//             setButtonText('No more posts to load');
//             setButtonDisabled(true);
//         }
//     }
//     return (
//         <button
//             className=" transition-colors  duration-150  load-more font-[500] shadow-xl rounded-3xl bg-[#BF4E1E] text-white px-4 py-2 mt-[20px] md:mt-[50px] hover:bg-white hover:text-[#BF4E1E]"
//             onClick={handleOnclick}
//             disabled={buttonDisabled}>
//             {buttonText}
//         </button>
//     );
// }

import { useEffect, useRef, useState, useCallback } from "react";
import { getPostList } from "../../lib/posts";

export default function InfiniteScroll({ posts, setPosts, taxonomy = null }) {
    const [loading, setLoading] = useState(false);
    const sentinelRef = useRef(null);

    const loadMorePosts = useCallback(async () => {
        setLoading(true);

        const morePosts = await getPostList(posts.pageInfo.endCursor, taxonomy);

        let updatedPosts = {
            pageInfo: morePosts.pageInfo,
            nodes: [...posts.nodes, ...morePosts.nodes],
        };

        setPosts(updatedPosts);
        setLoading(false);
    }, [posts, setPosts, taxonomy]);

    useEffect(() => {
        const currentSentinel = sentinelRef.current;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading && posts.pageInfo.hasNextPage) {
                loadMorePosts();
            }
        }, {
            rootMargin: "200px"
        });

        if (currentSentinel) {
            observer.observe(currentSentinel);
        }

        return () => {
            if (currentSentinel) {
                observer.unobserve(currentSentinel);
            }
        };
    }, [loading, loadMorePosts, posts.pageInfo.hasNextPage]);

    return (
        <div>
            {/* Render your posts here */}
            {posts.nodes.map((post, index) => (
                <div key={index}>{/* Your post content */}</div>
            ))}

            {/* Sentinel element */}
            <div ref={sentinelRef} />

            {loading && <div > <p className="font-[500] mx-auto text-[12px] sm:text-[14px] md:text-[16px] text-center shadow-xl rounded-3xl bg-[#BF4E1E] text-white px-4 py-2 mt-[20px] md:mt-[50px] hover:bg-white hover:text-[#BF4E1E] w-fit">Loading....</p></div>
}

            {!posts.pageInfo.hasNextPage && (
                <div > <p className="font-[500] mx-auto text-[12px] sm:text-[14px] md:text-[16px] text-center shadow-xl rounded-3xl bg-[#BF4E1E] text-white px-4 py-2 mt-[20px] md:mt-[50px] opacity-75 w-fit">No more posts to load</p></div>
            )}
        </div>
    );
}
