import Image from 'next/image';
import Link from 'next/link';

export function ActionsSection() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center bg-account-bg md:bg-[url('/bg/account-page-desktop.png')] bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between items-center h-64 bg-white-400 px-4 py-8 rounded-lg min-w-[90%, 354px]">
          <Image src="/logo-dark-full.png" alt="classmaker logo" width={269} height={40} />

          <ul className="list-none w-full">
            <li className='mb-4'>
              <Link href="/login" className='block'>
                <button 
                  id="loginRedirect" 
                  type="button" 
                  className='w-full bg-brand-700 rounded-lg text-white-400 text-lg py-1 md:w-[354px]'
                >
                  Entrar na plataforma
                </button>
              </Link>
            </li>

            <li>
              <Link href="/tutorial" className='block'>
                <button 
                  id="tutorialRedirect" 
                  type="button" 
                  className='w-full border border-brand-700 rounded-lg text-lg py-1 sm:w-[354px]'
                >
                  Como funciona?
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}  