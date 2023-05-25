import Link from "next/link";

export function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="emailLogin"></label>
        <input type="text" id="emailLogin" data-cy="emailInputLogin" />
      </div>

      <div>
        <label htmlFor="passwordLogin"></label>
        <input type="text" id="passwordLogin" data-cy="passwordInputLogin" />
      </div>

      <Link href="/home">
        <button type="submit" data-cy="loginButton">Login</button>
      </Link>
    </form>
  );
}