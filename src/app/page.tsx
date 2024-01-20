import Image from "next/image";
import RecentPoll from "@/components/home/RecentPolls";

export default function Home() {
  return (
    <main className="main-container mt-16">
      <section>🔥 실시간 Hot</section>
      <RecentPoll />
    </main>
  );
}
