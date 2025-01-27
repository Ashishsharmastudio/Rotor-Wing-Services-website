// import { createClient } from "@/lib/contento";
// import { MetadataRoute } from "next";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

//     const client = createClient();
//     const limit = 100; // Set to a reasonable high limit
//     let response= await client.getContentByType({
//         contentType: "usa_city_pages",
//         sortBy: "name",
//         sortDirection: "desc",
//         limit,
//     });

//     let content = [...response.content];

//     while (response.nextPage) {
//         response = await response.nextPage();
//         content = content.concat(response.content);
//     }

//     // console.log("content--------------------", content);
//     const routeEntries: MetadataRoute.Sitemap = content.map(({slug, updated_at}) => ({
//         url: `https://www.jetlevel.com/${slug}`,
//         lastModified: new Date(updated_at)
//     }))

//     return [
//         ...routeEntries
//     ];
// }