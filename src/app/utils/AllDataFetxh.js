export default async function Alldata(endpoint = "") {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://marhenke.blog-s.de/wp-json/custom/v1/pages";
  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds (or any interval)
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
