import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
{
  id: string;
  label: string
  testKeyWord: string;
}

export function LoginInput({ testKeyWord, label, id }: Props) {
  return (
    <div className="focus-within:font-bold text-gray-400 focus-within:text-black-400 text-sm flex flex-col gap-1 ">
      <label className="cursor-pointer" htmlFor={id}>{label}</label>
      <input 
        className="px-4 py-2 font-normal border border-1 border-gray-400 focus:outline focus:outline-2 focus:outline-black-400 rounded-lg" 
        type="text" 
        data-cy={testKeyWord}
        id={id} 
      />
    </div>
  );
}  