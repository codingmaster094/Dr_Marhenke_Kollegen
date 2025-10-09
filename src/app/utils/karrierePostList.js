export default async function KARRIEREPOST_GET(endpoint = "") {
  const baseUrl =
    process.env.NEXT_karriere_POST_GET_URL ||
    "https://marhenke.blog-s.de//wp-json/wp/v2";
  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });


    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // console.error("Error fetching data in POST_GET:", error.message);
    throw error;
  }
}
