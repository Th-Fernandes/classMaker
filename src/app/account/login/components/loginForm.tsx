import Link from "next/link";
import Image from "next/image";
import { SignActionInput } from "@/components/signActionInput";

export function LoginForm() {
  return (
    <form className="px-8 py-16 mx-3 bg-white-400 rounded-2xl flex flex-col gap-8 w-full max-w-[500px]">
      <Image className="self-center" src="/logo-dark-full.png" alt="class maker logo" width={269} height={40}/>

      <SignActionInput id="emailInputLogin" label="E-mail" />
      <SignActionInput id="passwordInputLogin" label="Senha" />
      
      <button
        className="w-full py-1 font-medium text-lg text-white-400 bg-brand-700 rounded-lg focus:outline focus:outline-2 focus:outline-focus" 
        type="submit" 
        data-cy="submitLoginData"
      >
        <Link className="w-full h-full block" href="/home">Entrar na plataforma</Link>
      </button>
    </form>
  );
}