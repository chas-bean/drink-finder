import Ingredient from "./ingredient";

export default interface Drink {
  id: string;
  imageUrl: string | null;
  ingredients: Ingredient[];
  instructions: string;
  name: string;
}
