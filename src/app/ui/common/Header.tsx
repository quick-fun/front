"use client";
import Link from "next/link";
import Button from "@/components/button";
import {
  ArrowPathIcon,
  Bars3Icon, // 필요함
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  BeakerIcon,
  MegaphoneIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="h-16 flex items-center justify-between bg-white fixed top-0 left-0 right-0 z-10 px-40">
      <div>
        <div className="font-bold">Quick Fun Logo</div>
      </div>
      <Button
        className="flex items-center justify-center gap-1"
        onClick={() => router.push("/create-poll")}
      >
        로그인
        <ArrowLongRightIcon width={14} height={14} />
      </Button>
    </header>
  );
}
