import { Header } from "./components/Header";
import { SubscriptionsList } from "./components/SubscriptionsList";
import { AvailableClassesList } from "./components/AvailableClassesList";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <SubscriptionsList />
        <AvailableClassesList />
      </main>
    </>
  );
}