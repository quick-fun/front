"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";
import RecentVotes from "@/components/home/RecentVotes";
import CreateVoteButton from "@/components/common/CreateVoteBtn";
import { GetPostsResponseBody } from "@/types/posts";

export default function Home() {
  return (
    <main className="main-container mt-16">
      <section className="mb-2 flex h-[500px] w-full rounded">
        🔥 실시간 Hot
      </section>
      <RecentVotes />
      <CreateVoteButton />
    </main>
  );
}
