"use client";

import RecentVotes from "@/components/home/RecentVotes";
import CreateVoteButton from "@/components/common/CreateVoteBtn";
import { GetPostsResponseBody } from "@/types/posts";
import HotVotes from "@/components/home/HotVotes";

export default function Home() {
  return (
    <main className="main-container mt-16">
      <HotVotes />
      <RecentVotes />
      <CreateVoteButton />
    </main>
  );
}
