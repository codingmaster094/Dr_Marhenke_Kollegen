export default async function POST_GET(endpoint = "") {
  const baseUrl = process.env.NEXT_POST_GET_URL || "https://marhenke.blog-s.de/wp-json/custom/v1";
  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
  next: { revalidate: 60 } // Revalidate every 60 seconds (or any interval)
});

    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data in Alldata:", error.message);
    throw error;
  }
}
