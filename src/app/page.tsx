import Image from "next/image";
import RecentVotes from "@/components/home/RecentVotes";
import CreateVoteButton from "@/components/common/CreateVoteBtn";

export default function Home() {
  return (
    <main className="main-container mt-16">
      <section className="mb-2 flex h-[500px] w-full rounded bg-blue">
        🔥 실시간 Hot
      </section>
      <RecentVotes />
      <CreateVoteButton />
    </main>
  );
}
