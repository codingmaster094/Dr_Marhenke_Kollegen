export default async function POST_GET(params) {
  try {
    const response = await fetch(`${process.env.NEXT_POST_GET_URL || 'https://marhenke.blog-s.de/wp-json/custom/v1'}${params}`, {
      // ✅ Enable ISR (caches for 1 hour, but rebuilds on request)
      next: { revalidate: 3600 },
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
