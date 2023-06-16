'use client';

import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useValidateInput } from "./hooks/useValidate";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
{
  id: string;
  label: string;
  validation: {
    regex: RegExp; //RegExp type can not be used on server components
    message: string;
  }
}

export function SignActionInput({id, label, validation}:Props) {
  const { isTextContentValid, handleInputContent } = useValidateInput(validation.regex);

  return (
    <div className={`focus-within:font-bold text-gray-400 focus-within:text-black-400 text-sm flex flex-col gap-1 
    ${!isTextContentValid && "focus-within:text-red text-red"}
    `}
    >
      <label className="cursor-pointer" htmlFor={id}>{label}</label>
      <input 
        onChange={handleInputContent}
        className={`px-4 py-2 font-normal border border-1 border-gray-400 focus:outline focus:outline-2 focus:outline-black-400 rounded-lg ${!isTextContentValid && "focus:outline-red border-red"}`}
        type="text" 
        data-cy={id}
        id={id} 
        aria-invalid={!isTextContentValid}
        aria-errormessage={validation.message}
      />

      {
        !isTextContentValid && (
          <label>{validation.message}</label>
        )
      }
    </div>  
  );
}