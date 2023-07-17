import { ElementType, HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as: 'h1' | 'h2' | 'h3',
  children: string
}

const classFontStyles = {
  h1: "text-lg-hd",
  h2: "text-md-hd lg:text-3xl",
  h3: "text-sm-hd"
};

export function Heading({ as: Tag, children, className, ...props }:Props) {
  if(!children) throw new Error('Heading component must have a children');

  return (
    <Tag className={`${classFontStyles[Tag]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}