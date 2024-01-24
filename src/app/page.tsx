import Image from "next/image";
import RecentVotes from "@/components/home/RecentVotes";

export default function Home() {
  return (
    <main className="main-container mt-16">
      <section className="flex w-full mb-2 h-[500px] rounded bg-blue">🔥 실시간 Hot</section>
      <RecentVotes />
    </main>
  );
}
