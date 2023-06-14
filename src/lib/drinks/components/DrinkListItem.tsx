import Link from "next/link";
import Drink from "../types/drink";

interface DrinkListItemProps {
  drink: Drink;
}

export default function DrinkListItem({ drink }: DrinkListItemProps) {
  return (
    <Link className="flex" href={`/drinks/${drink.id}`}>
      {drink.name}
    </Link>
  );
}
