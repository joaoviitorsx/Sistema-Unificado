import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string };
export default function Input({ label, className = "", ...rest }: Props) {
  return (
    <label className="flex flex-col gap-1">
      {label && <span className="text-sm text-gray-700">{label}</span>}
      <input
        {...rest}
        className={`border rounded-md p-2 focus:ring-2 focus:ring-primary outline-none ${className}`}
      />
    </label>
  );
}
