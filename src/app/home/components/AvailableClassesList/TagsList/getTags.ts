import React from "react";

export function useFetchTags() {
  const [tags, setTags] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function getTags(){
      setTags(['HTML', 'css', 'Javascript', 'SCSS', 'testing library']);
    }

    getTags();
  }, []);

  return {
    tags
  };
}