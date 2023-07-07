import React from "react";

export function useRenderedTagsAmount() {
  const windowWidth = React.useRef(window.innerWidth);

  const tagsAmount = windowWidth.current < 600 ? 1 : 2;

  return { 
    tagsAmount 
  };
}