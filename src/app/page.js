import HomePage from "@/app/home/page";
import generatePageMetadata from "./utils/generatePageMetadata";
export default function Home() {
  return (
      <HomePage />
  );
}

export async function generateMetadata() {
  return generatePageMetadata("/start", {
    title: "start",
    description: "start",
  });
}
