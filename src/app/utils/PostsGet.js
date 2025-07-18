export default async function POST_GET(params) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_POST_GET_URL ||
        "https://marhenke.blog-s.de/wp-json/custom/v1"
      }${params}`);

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
