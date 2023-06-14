import searchDrinks from "../api/searchDrinks";
import DrinkListItem from "./DrinkListItem";

interface DrinkListProps {
  query: string;
}

export default async function DrinkList({ query = "" }: DrinkListProps) {
  const drinks = await searchDrinks({ query });

  return (
    <div>
      {drinks.map((drink) => {
        return <DrinkListItem key={drink.id} drink={drink} />;
      })}
    </div>
  );
}
