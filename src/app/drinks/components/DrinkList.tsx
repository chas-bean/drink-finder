import fetchDrinks from "../api/fetchDrinks";
import DrinkListItem from "./DrinkListItem";

export default async function DrinkList() {
  const drinks = await fetchDrinks("");

  return (
    <div>
      {drinks.map((drink) => {
        return <DrinkListItem key={drink.id} />;
      })}
    </div>
  );
}
