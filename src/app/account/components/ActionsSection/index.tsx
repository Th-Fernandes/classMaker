import Image from 'next/image';
import Link from 'next/link';

export function ActionsSection() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center bg-[url('/bg/account-page.png')] bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between items-center gap-8 sm:gap-16 bg-white-400 px-4 py-16  rounded-lg min-w-[90%, 354px]">
          <Image src="/logo-dark-full.png" alt="classmaker logo" width={269} height={40} />

          <ul className="list-none w-full">
            <li className='mb-4'>
              <Link href="/account/login" className='block'>
                <button 
                  data-cy="loginRedirectButton" 
                  type="button" 
                  className='w-full bg-brand-700 rounded-lg text-white-400 text-lg py-1 md:w-[354px]'
                >
                  Entrar na plataforma
                </button>
              </Link>
            </li>

            <li>
              <Link href="/account/tutorial" className='block'>
                <button 
                  data-cy="tutorialRedirectButton" 
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