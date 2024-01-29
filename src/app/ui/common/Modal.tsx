"use client";
import React, {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";

export interface ModalProps {
  children: React.ReactNode;
}
// TODO: 모달 떠있을때 스크롤 방지
const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  const clickedRef = useRef<EventTarget>();

  // 닫기 기능
  const onClose = useCallback(() => {
    router.back(); // 라우터 뒤로가기 기능을 이용
  }, [router]);

  const handleClickClose = (e: React.MouseEvent<HTMLElement>) => {
    if (clickedRef.current) {
      clickedRef.current = undefined;
      return;
    }

    e.stopPropagation();
    onClose();
  };

  return (
    // 모달 외부
    <div
      className="fixed left-0 right-0 top-0 z-10 h-screen w-full bg-black/95"
      onMouseUp={handleClickClose}
    >
      {/* 모달 내부 */}
      <div
        className="absolute left-1/2 top-1/2 flex h-64 min-w-80 -translate-x-2/4 -translate-y-2/4 flex-col rounded-lg bg-white p-4"
        onMouseDown={(e) => (clickedRef.current = e.target)}
        onMouseUp={(e) => (clickedRef.current = e.target)}
      >
        <button className="self-end" onClick={handleClickClose}>
          <XMarkIcon width={24} height={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
