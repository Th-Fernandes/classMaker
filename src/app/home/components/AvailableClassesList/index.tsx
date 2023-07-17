'use client';

import { Heading } from "@/components/Heading";
import { AvailableClass } from "./AvailableClass";
import { useAvailableClasses } from "./useAvailableClasses";

/* 
  1. criar o AvailableClass  [x]
  2. criar um hook para bater no banco e pegar as aulas disponiveis [x]
    2.2 - evitar bater no banco caso já haja algo salvo no state []
  3. passar o comp TagList para dentro de AvailableClass []
*/

export function AvailableClassesList() {
  const { classes } = useAvailableClasses();

  const renderClasses = (): JSX.Element[] | undefined => {
    if (classes) return classes
      .map(({id, tags}) => (
        <AvailableClass key={id} tags={tags}  />
      ));
  };

  return(
    <section className="max-w-[1440px] mx-auto px-4 pt-8 ">
      <div className="max-w-[900px] m-auto">
        <Heading as="h2" className="text-center mb-4">Grupos Disponíveis</Heading>

        <ul className="sm:mt-8 ">
          { renderClasses() }
        </ul>
      </div>
    </section>
  );
}