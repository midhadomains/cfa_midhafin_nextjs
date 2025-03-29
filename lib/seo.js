import graphqlRequest from "./graphqlRequest";

export async function getSeo(pageType = "post", slug = "/") {
  const query = {
    query: `query getSeo {
            ${pageType}(id: "${slug}", idType: SLUG) {
             tags(first: 100) {
                nodes {
                   name
                }
              }
              seo {
                opengraphImage {
                  mediaItemUrl
                }
                opengraphModifiedTime
                opengraphPublishedTime
                opengraphTitle
                opengraphType
                opengraphUrl
                schema {
                  raw
                }
                title
                metaDesc
                opengraphSiteName
                readingTime
                opengraphPublisher
              }
            }
          }`,
  };

  const getSeo = await graphqlRequest(query);
  const seoData = getSeo.data[pageType];

  // console.log('seodata...');
  // console.group(seoData);

  return seoData;
}
