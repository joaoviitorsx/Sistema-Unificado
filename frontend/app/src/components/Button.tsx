import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean };

export default function Button({ loading, className = "", children, ...rest }: Props) {
  return (
    <button
      {...rest}
      disabled={loading || rest.disabled}
      className={`bg-primary text-white rounded-md py-2 px-4 font-medium transition
        ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-pink-700"}
        ${className}`}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
}
