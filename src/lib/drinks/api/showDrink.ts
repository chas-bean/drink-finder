import Drink from "../types/drink";

interface ShowDrinkResponse {
  drinks:
    | {
        idDrink: string;
        strDrink: string;
      }[]
    | null;
}

export default async function showDrink({
  id,
}: {
  id: string;
}): Promise<Drink | null> {
  const response = await fetch(
    `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    {
      cache: "no-cache",
    }
  );

  const body: ShowDrinkResponse = await response.json();
  const drink = (body.drinks || []).at(0);

  return drink
    ? {
        id: drink.idDrink,
        name: drink.strDrink,
      }
    : null;
}
