import React from "react";
import { Class } from "@/types/Class";

export function useAvailableClasses() {
  const [ classes, setClasses ] = React.useState<Class[]>();

  React.useEffect(() => {
    async function getClasses() {
      if(!classes) {
        setClasses([{
          id: '1',
          creator: 'John Doe',
          eventDate: new Date(),
          subscribedPeople: [],
          tags: ['HTML', 'css', 'testing library' ]
        },
        {
          id: '2',
          creator: 'John Doe',
          eventDate: new Date(),
          subscribedPeople: [],
          tags: ['React', 'ux/ui', 'testing library' ]
        },
        ]);
      }
    }
    getClasses();
  }, []);

  return {
    classes
  };
}