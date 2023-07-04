import React from "react";

export function useValidateInput(regex: RegExp) {
  const [isTextContentValid, setIsTextContentValid] = React.useState<boolean>(true);

  function handleInputContent(event: React.ChangeEvent<HTMLInputElement>) {
    const textContent: string = event.target.value;
    const regexValidation: RegExp = new RegExp(regex, 'i');

    const isTextContentValid = regexValidation.test(textContent);

    if(!isTextContentValid) {
      setIsTextContentValid(false);
      console.log(isTextContentValid);
      return;
    }

    setIsTextContentValid(true);
  }

  return {
    isTextContentValid, handleInputContent
  };  
}