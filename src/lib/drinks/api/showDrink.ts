import Drink from "../types/drink";
import RawDrink from "../types/rawDrink";
import adaptDrink from "../util/adaptDrink";

interface ShowDrinkResponse {
  drinks: RawDrink[] | null;
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
  const rawDrink = (body.drinks || []).at(0);

  return rawDrink ? adaptDrink(rawDrink) : null;
}
