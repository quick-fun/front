import Link from "next/link";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="h-16 flex justify-center items-center bg-white fixed top-0 left-0 right-0 z-10">
      <BeakerIcon width={24} height={24} />
      This is Header!!
    </header>
  );
}
