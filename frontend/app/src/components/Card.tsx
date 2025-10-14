import { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 flex flex-col items-center ${className}`}
    >
      {title && <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>}
      {children}
    </div>
  );
}