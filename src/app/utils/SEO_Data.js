export default async function SEODATA(params) {
  try {
    // remove leading slashes and "page-data/"
    let cleanSlug = params.replace(/^\/page-data\//, "").replace(/^\//, "");
    const url = `${process.env.NEXT_BASE_URL_SEO}/custom-seo/v1/rank-math?slug=${cleanSlug}`;
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error;
  }
}
