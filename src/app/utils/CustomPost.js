export default async function Custom_Post(params) {
  try {
    const response = await fetch(
      `${process.env.NEXT_CUSTOM_POST_BASE_URL}${params}`,
      {
        cache: "no-store",
      }
    );
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
