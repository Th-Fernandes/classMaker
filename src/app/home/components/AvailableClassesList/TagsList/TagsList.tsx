'use client';

import React from "react";
import { useFetchTags } from "./getTags";


export function TagsList() {
  const { tags } =  useFetchTags();
  
  if(tags) {
    return(
      <ul>
        {
          tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))
        }
      </ul>
    );
  } else {
    return <></>;
  }
}