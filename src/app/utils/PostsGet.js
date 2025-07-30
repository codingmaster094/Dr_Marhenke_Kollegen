export default async function POST_GET(endpoint = "") {
  const baseUrl =
    process.env.NEXT_POST_GET_URL ||
    "https://marhenke.blog-s.de/wp-json/custom/v1";
  const url = `${baseUrl}${endpoint}`;
  console.log("Fetching from URL:", url); // add this

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });

    console.log("Response status:", response.status); // add this

    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data in POST_GET:", error.message);
    throw error;
  }
}
