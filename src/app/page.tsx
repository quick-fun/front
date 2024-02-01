"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";
import RecentVotes from "@/components/home/RecentVotes";
import CreateVoteButton from "@/components/common/CreateVoteBtn";
import { GetPostsResponseBody } from "@/types/posts";

export default function Home() {
  const [votes, setVotes] = useState<GetPostsResponseBody>([]);

  useEffect(() => {
    async function getRecentVotes() {
      const data = await fetch("http://localhost:8080/posts?cursor=1?limit=10");
      const parsedData = await data.json();
      setVotes(parsedData);
    }
    getRecentVotes();
  }, []);

  return (
    <main className="main-container mt-16">
      <section className="mb-2 flex h-[500px] w-full rounded bg-blue">
        🔥 실시간 Hot
      </section>
      <RecentVotes votes={votes} />
      <CreateVoteButton />
    </main>
  );
}
