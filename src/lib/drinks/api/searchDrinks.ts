import Drink from "../types/drink";
import RawDrink from "../types/rawDrink";
import adaptDrink from "../util/adaptDrink";

interface SearchDrinksResponse {
  drinks: RawDrink[] | null;
}

export default async function searchDrinks({
  query,
}: {
  query: string;
}): Promise<Drink[]> {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const body: SearchDrinksResponse = await response.json();
  const rawDrinks = body.drinks || [];

  return rawDrinks.map(adaptDrink);
}
