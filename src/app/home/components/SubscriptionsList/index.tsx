import { SubscriptionsItem } from "./SubscriptionsItem";

const subscriptions = [
  {
    id: 0,
    title: 'Tailwind studies',
    tags: ['tailwind', 'react', 'front-end']
  },
  {
    id: 1,
    title: 'express 101',
    tags: ['back-end', 'nodeJs', 'express']
  }
];

export function SubscriptionsList() {
  return(
    <section className="px-4 pt-8">
      <div className="mb-4">
        <h2 className="text-md-hd lg:text-lg-hd mb-2">INSCRIÇÕES</h2>
        <p className="text-base text-gray-300">Fique por dentro dos grupos em que você se inscreveu.</p>
      </div>

      <ul data-cy="tags">
        {
          subscriptions.map(({id, title, tags}) => (
            <SubscriptionsItem key={id} title={title} tags={tags} />
          ))
        }
      </ul>
    </section>
  );
}