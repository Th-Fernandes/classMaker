import { ElementType, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as: 'h1' | 'h2' | 'h3'
}

const classFontStyles = {
  h1: "text-lg-hd",
  h2: "text-md-hd",
  h3: "text-sm-hd font-bold"
};

export function Heading({ as: Tag, children, ...props }:Props) {
  if(!children) throw new Error('Heading component must have a children');

  return (
    <Tag className={classFontStyles[Tag]} {...props}>
      {children}
    </Tag>
  );
}