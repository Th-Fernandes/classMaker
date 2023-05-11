import Link from 'next/link';


export function ActionsSection() {
  return (
    <>
      <ul>
        <li>
          <Link href="/path">
            <button id="loginRedirect">Entrar na plataforma</button>
          </Link>
        </li>

        <li>
          <Link href="/tutorial">
            <button id="tutorialRedirect">Como funciona?</button>
          </Link>
        </li>
      </ul>
    </>
  );
}  