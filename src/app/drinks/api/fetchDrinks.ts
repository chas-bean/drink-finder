import Drink from "../types/drink";

export default async function fetchDrinks(name: string): Promise<Drink[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([]);
    }, 500);
  });
}
