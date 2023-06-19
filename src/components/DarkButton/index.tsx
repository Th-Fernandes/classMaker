import { ButtonHTMLAttributes } from "react";

export function DarkButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="w-full py-1 font-medium text-lg text-white-400 bg-brand-700 rounded-lg focus:outline focus:outline-2 focus:outline-focus hover:bg-brand-400 transition-colors" 
      {...props}
    >
      {props.children}
    </button>
  );
}
