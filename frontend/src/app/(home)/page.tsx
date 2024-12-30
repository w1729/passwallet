// import HomePage from "@/components/HomePage";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("@/components/HomePage"), { ssr: false });
export default async function Home() {
  return <HomePage />;
}
