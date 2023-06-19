'use client';

import { DarkButton } from "@/components/DarkButton";
import { SignActionInput } from "@/components/SignActionInput";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main>
      <section className="flex items-center justify-center bg-[url('/bg/account-page.png')] bg-no-repeat bg-cover min-h-screen">
        <form className="px-8 py-16 mx-3 bg-white-400 rounded-2xl flex flex-col gap-8 w-full max-w-[500px]">
          <Image className="self-center" src="/logo-dark-full.png" alt="class maker logo" width={269} height={40}/>
          <SignActionInput 
            id="signInUsername" 
            label="Nome" 
            validation={{regex: /[a-zA-z]{3,}/, message: 'Nome deve conter ao menos 3 caracteres.'}}
          />
          <SignActionInput
            id="signInEmail"
            label="E-mail"
            validation={{
              regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
              message: 'E-mail inválido'
            }}
          />
          <SignActionInput 
            id="signInPasword"
            label="Senha"
            validation={{regex: /.{8,}/, message: 'senha dave conter ao menos 8 caracteres'}}
          />

          <DarkButton type="submit" data-cy="signInSubmitCredentials">
            <Link href="/home">asdad</Link>
          </DarkButton>
        </form>
      </section>
    </main>
  ); 
}