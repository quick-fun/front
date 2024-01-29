"use client";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function CreateVoteButton() {
  return (
    <Link
      href="/create-vote"
      className="fixed bottom-2 right-2 h-[50px] w-[50px] rounded-[50%] bg-yellow"
    >
      <PlusIcon />
    </Link>
  );
}
