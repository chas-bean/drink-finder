import Drink from "../types/drink";
import RawDrink from "../types/rawDrink";

export default function adaptDrink(raw: RawDrink): Drink {
  return {
    id: raw.idDrink,
    name: raw.strDrink,
  };
}
