import { LoginForm } from "./components/loginForm";

export default function LoginPage() {
  return (
    <main>
      <section className="flex items-center justify-center bg-[url('/bg/account-page.png')] bg-no-repeat bg-cover min-h-screen">
        <LoginForm />
      </section>
    </main>
  );
}