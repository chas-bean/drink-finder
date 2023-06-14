import { Suspense } from "react";

import SearchBar from "@/lib/common/components/SearchBar";
import DrinkList from "@/lib/drinks/components/DrinkList";

interface DrinksPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function DrinksPage({ searchParams }: DrinksPageProps) {
  const query = (searchParams["q"] as string) || "";

  return (
    <main className="container flex flex-col max-w-md mb-16 min-h-screen mx-auto pt-8">
      <SearchBar
        autoFocus
        className="mb-4 p-2 px-4 rounded-md w-full"
        placeholder="Find a drink"
      />
      <Suspense fallback={<div>Loading drinks...</div>}>
        <DrinkList query={query} />
      </Suspense>
    </main>
  );
}
