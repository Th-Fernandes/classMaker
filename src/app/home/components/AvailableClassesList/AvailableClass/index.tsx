import { Heading } from "@/components/Heading";
import { TagsList } from "./TagsList";
import { Users2 } from "lucide-react";
import { Class } from "@/types/Class";

type Props = Pick<Class, 'tags'>; 

export function AvailableClass({tags}:Props) {
  return (
    <li className="mb-8 border-b-[1px] border-gray-300 pb-7 flex flex-col gap-4">
            
      <div className="flex flex-col gap-2">
        <span className="flex gap-4 items-center">
          <div className="rounded-full w-full max-w-[32px] h-8 bg-gray-300" aria-label="imagem da sala" role="img"></div>
          <Heading as="h3">Lorem Ipsum</Heading>
        </span>
        <p className="text-gray-400 leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...
        </p>
      </div>
      

      <TagsList tags={tags} />
      <button className="bg-brand-400 text-white-400 flex justify-center gap-2 py-[6px] w-full rounded-lg sm:max-w-[150px] sm:px-6 sm:self-end mt-4">
        Participar
        <Users2 />
      </button>
    </li>
  );
}