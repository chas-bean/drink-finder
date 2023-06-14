"use client";

import Link from "next/link";
import Drink from "../types/drink";
import { HTMLAttributes } from "react";
import Image from "next/image";
import DrinkImage from "./DrinkImage";

interface DrinkListItemProps extends HTMLAttributes<HTMLLIElement> {
  drink: Drink;
}

export default function DrinkListItem({ drink, ...rest }: DrinkListItemProps) {
  return (
    <Link href={`/drinks/${drink.id}`}>
      <li className="block bg-white flex flex-row items-center" {...rest}>
        <DrinkImage
          drink={drink}
          height={40}
          style={{ borderRadius: "100%", marginRight: "16px" }}
          width={40}
        />
        <p style={{ flex: 1 }}>{drink.name}</p>
        <p style={{ justifySelf: "flex-end" }}>&raquo;</p>
      </li>
    </Link>
  );
}
