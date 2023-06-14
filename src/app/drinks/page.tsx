import { Suspense } from "react";

import SearchBar from "@/lib/common/components/SearchBar";
import DrinkList from "@/lib/drinks/components/DrinkList";

interface DrinksPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function DrinksPage({ searchParams }: DrinksPageProps) {
  const query = (searchParams["q"] as string) || "";

  return (
    <main>
      <SearchBar placeholder="Find a drink" />
      <Suspense fallback={<div>Loading drinks...</div>}>
        <DrinkList query={query} />
      </Suspense>
    </main>
  );
}
