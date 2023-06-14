import Drink from "../types/drink";
import Ingredient from "../types/ingredient";
import RawDrink from "../types/rawDrink";
import adaptMeasurement from "./adaptMeasurement";

export default function adaptDrink(raw: RawDrink): Drink {
  let ingredients: Ingredient[] = [];

  for (let i = 1; i < 16; i++) {
    const measure = raw[`strMeasure${i}` as keyof RawDrink];
    const name = raw[`strIngredient${i}` as keyof RawDrink];

    if (name && measure) {
      const measurement = adaptMeasurement(measure);

      // @note Skip measurement if not supported unit
      if (measurement) {
        ingredients.push({
          measurement,
          name,
        });
      }
    }
  }

  return {
    id: raw.idDrink,
    imageUrl: raw.strDrinkThumb,
    ingredients,
    instructions: raw.strInstructions,
    name: raw.strDrink,
  };
}
