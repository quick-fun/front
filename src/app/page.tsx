"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";
import RecentVotes from "@/components/home/RecentVotes";
import CreateVoteButton from "@/components/common/CreateVoteBtn";
import { GetPostsResponseBody } from "@/types/posts";

export default function Home() {
  const [votes, setVotes] = useState<GetPostsResponseBody | undefined>(
    undefined,
  );

  useEffect(() => {
    async function getRecentVotes() {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?cursor=1?limit=10`,
      );
      const parsedData = await data.json();
      setVotes(parsedData);
    }
    getRecentVotes();
  }, []);

  return (
    <main className="main-container mt-16">
      <section className="mb-2 flex h-[500px] w-full rounded">
        🔥 실시간 Hot
      </section>
      <RecentVotes votes={votes} />
      <CreateVoteButton />
    </main>
  );
}
