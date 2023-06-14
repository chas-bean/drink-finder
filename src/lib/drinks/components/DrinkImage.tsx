import Image, { ImageProps } from "next/image";
import Drink from "../types/drink";

interface DrinkImageProps extends Omit<ImageProps, "alt" | "src"> {
  drink: Drink;
}

export default function DrinkImage({ drink, ...rest }: DrinkImageProps) {
  return drink.imageUrl ? (
    <Image
      alt={drink.name}
      height={500}
      src={drink.imageUrl}
      width={500}
      {...rest}
    />
  ) : null;
}
