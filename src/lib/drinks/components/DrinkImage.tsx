import Image from "next/image";
import Drink from "../types/drink";

interface DrinkImageProps {
  drink: Drink;
}

export default function DrinkImage({ drink }: DrinkImageProps) {
  return drink.imageUrl ? (
    <Image alt={drink.name} height={500} src={drink.imageUrl} width={500} />
  ) : null;
}
