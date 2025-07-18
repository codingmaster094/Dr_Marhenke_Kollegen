export default async function Alldata(params) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL ||
        "https://marhenke.blog-s.de/wp-json/custom/v1/pages"
      }${params}`);
    if (!response) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error; 
  }
}
