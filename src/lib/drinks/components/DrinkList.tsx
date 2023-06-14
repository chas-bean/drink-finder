import searchDrinks from "../api/searchDrinks";
import DrinkListItem from "./DrinkListItem";

interface DrinkListProps {
  query: string;
}

export default async function DrinkList({ query = "" }: DrinkListProps) {
  const drinks = await searchDrinks({ query });

  return (
    <ul className="list-none">
      {drinks.map((drink) => {
        return (
          <DrinkListItem
            key={drink.id}
            // @fix TailwindCSS is not fully working in part of DOM tree
            style={{
              height: "60px",
              marginBottom: "4px",
              padding: "4px 16px",
            }}
            drink={drink}
          />
        );
      })}
    </ul>
  );
}
