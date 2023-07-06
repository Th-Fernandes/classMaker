'use client';

import { Heading } from "@/components/Heading";
import { useRenderedTagsAmount } from "./useRenderedTagsAmount";

interface Props {
  title: string;
  tags: string[]
}


export function SubscriptionsItem({title, tags}:Props) {
  const { tagsAmount } = useRenderedTagsAmount();
  const hasMoreThanTwoTags = tags.length > 2 ;
  const tagsShouldBeRendered = tags.slice(0, tagsAmount);

  return(
    <li className="bg-brand-700 text-white-400 p-4 snap-start min-w-[300px] rounded-2xl sm:p-8 sm:min-w-[400px]">
      <div className="flex flex-col gap-2 items-center mb-2">
        {/* an image should go here */}
        <div className="w-16 h-16 bg-gray-50 rounded-full">

        </div>

        <Heading as="h3">{title}</Heading>
      </div>
      {/* TAGS */}
      <div className="flex gap-2 justify-center items-center">
        <ul data-cy="subscriptionsItemTags" className="flex gap-2">
          {
            tagsShouldBeRendered.map(tag => (
              <li key={tag} >
                <span className="bg-brand-400 px-4 py-[2px] rounded-3xl text-xs">{tag}</span>
              </li>
            ))
          }
        </ul>

        {
          hasMoreThanTwoTags && 
          <span className="text-sm">e mais {tags.length - 2} tema(s)</span>
        }
      </div>


      {/* ACTIONS BUTTONS */}
      <ul className="flex flex-col gap-2 mt-4 sm:mt-6 sm:flex-row sm:justify-center sm:gap-4">
        <li>
          <button className="w-full rounded-lg py-1 bg-white-400 text-black-400 font-medium transition-colors hover:bg-[#D6D6D6] sm:px-4">
            ver grupo
          </button>
        </li>
        <li>
          <button className="w-full rounded-lg border border-red text-red py-1 font-medium transition-colors hover:bg-red hover:text-white-400 sm:px-4">
            Cancelar inscrição
          </button>
        </li>
      </ul>
    </li>
  );
}