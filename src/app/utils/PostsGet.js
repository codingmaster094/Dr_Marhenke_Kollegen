export default async function POST_GET(params) {
  try {
    const response = await fetch(`${process.env.NEXT_POST_GET_URL}${params}`, {
      cache: "no-store",
    });
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
