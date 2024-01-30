"use client";

import { useEffect } from "react";
// import Image from "next/image";
import RecentVotes from "@/components/home/RecentVotes";
import CreateVoteButton from "@/components/common/CreateVoteBtn";

export default function Home() {
  useEffect(() => {
    console.log("Main page GET test");

    async function getRecentVotes() {
      const data = await fetch("http://localhost:8080/user?cursor=1?limit=10");
      const parsedData = await data.json();
      console.log(parsedData);
    }

    getRecentVotes();
  }, []);

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
