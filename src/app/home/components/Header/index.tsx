'use client';

import { Bell, Plus, UserCircle} from "lucide-react";
import Image from "next/image";
import React from "react";
import { useLogoSize } from "./hooks/useLogoSize";

export function Header() {
  const { logoWidth, logoHeight } = useLogoSize();
  const screenWidth = React.useRef(window.innerWidth);

  return (
    <header className="bg-brand-700">
      <div className="flex justify-between items-center max-w-[1440px] p-4 md:px-8 mx-auto">
        <Image src="/logo-light-full.png" alt="classMaker logo" width={logoWidth} height={logoHeight}/>

        <div className="flex gap-6">
          <ul className="flex gap-3"> 
            <li className="flex items-center">
              <button className="text-white-400 flex gap-1" type="button" aria-label="Criar sala">
                {screenWidth.current > 600 && 'Criar sala'}
                <Plus  color="white"/>
              </button>
            </li>
            <li className="flex items-center">
              <button type="button" aria-label="Notificações">
                <Bell color="white" />
              </button>
            </li>
          </ul>

          <UserCircle color="white" />  
        </div>
      </div>
    </header>
  );
}