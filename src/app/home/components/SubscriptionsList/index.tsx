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
    tags: ['testing library', 'nodeJs', 'express']
  },
  {
    id: 2,
    title: 'express 101',
    tags: ['back-end', 'nodeJs', 'express', 'javascript']
  },
  {
    id: 3,
    title: 'express 101',
    tags: ['back-end']
  },
];

export function SubscriptionsList() {
  return(
    <section className="px-4 pt-8 max-w-[1440px] mx-auto">
      <div className="mb-4 sm:mb-8">
        <h2 className="text-md-hd lg:text-lg-hd mb-2">INSCRIÇÕES</h2>
        <p className="text-base text-gray-300">Fique por dentro dos grupos em que você se inscreveu.</p>
      </div>

      <ul className="flex gap-4 overflow-x-scroll snap-x snap-mandatory pb-1">
        {
          subscriptions.map(({id, title, tags}) => (
            <SubscriptionsItem key={id} title={title} tags={tags} />
          ))
        }
      </ul>
    </section>
  );
}