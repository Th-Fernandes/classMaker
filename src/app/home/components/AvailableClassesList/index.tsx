import { Heading } from "@/components/Heading";
import { TagsList } from "./TagsList/TagsList";

export function AvailableClassesList() {
  return(
    <section>
      <Heading as="h2">Grupos Disponíveis</Heading>

      <ul>
        <li>
          <div>
            <img src="" alt="" />

            <Heading as="h3">Lorem Ipsum</Heading>
          </div>
          <TagsList />
        </li>
      </ul>
    </section>
  );
}