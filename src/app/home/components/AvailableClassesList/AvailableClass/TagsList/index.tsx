'use client';

import { Class } from "@/types/Class";

type Props = Pick<Class, 'tags'>; 

export function TagsList({tags}:Props) {

  return(
    <ul className="flex gap-2 flex-wrap">
      {
        tags.map(tag => (
          <li key={tag} className="bg-brand-400 px-3 rounded-3xl text-white-400 text-sm">
            {tag}
          </li>
        ))
      }
    </ul>
  );

}