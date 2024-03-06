"use client";
import { useState, useEffect } from "react";
import VoteBox from "./VoteBox";
import { GetPostsResponseBody } from "@/types/posts";

export default function RecentVote() {
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
    <section className="item-center flex h-fit w-full flex-col justify-center gap-3">
      {votes === undefined && (
        <div className="flex items-center justify-center">Loading...</div>
      )}
      {votes?.data?.map((vote) => <VoteBox voteData={vote} />)}
    </section>
  );
}
