"use client";
import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn-blue ${className}`}>
      {children}
    </button>
  );
}
