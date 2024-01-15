"use client";
import Link from "next/link";
import Button from "@/components/common/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex h-16 items-center justify-center border-b border-b-gray-light bg-white px-10">
      <div className="flex w-dvw max-w-screen-lg items-center justify-between">
        <div className="font-bold">투표합쉬다🗳️</div>
        <Button
          className="flex items-center justify-center gap-1"
          onClick={() => router.push("/create-poll")}
        >
          로그인
          <ArrowLongRightIcon width={14} height={14} />
        </Button>
      </div>
    </header>
  );
}
