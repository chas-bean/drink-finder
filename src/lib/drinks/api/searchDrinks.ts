import Drink from "../types/drink";

interface SearchDrinksResponse {
  drinks:
    | {
        idDrink: string;
        strDrink: string;
      }[]
    | null;
}

export default async function searchDrinks({
  query,
}: {
  query: string;
}): Promise<Drink[]> {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
    {
      cache: "no-cache",
      next: {
        revalidate: 60,
      },
    }
  );

  const body: SearchDrinksResponse = await response.json();
  const drinks = body.drinks || [];

  return drinks.map((drink) => ({
    id: drink.idDrink,
    name: drink.strDrink,
  }));
}
