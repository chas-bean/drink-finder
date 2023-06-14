import Ingredient from "./ingredient";

export default interface Drink {
  id: string;
  imageUrl: string;
  ingredients: Ingredient[];
  name: string;
}
