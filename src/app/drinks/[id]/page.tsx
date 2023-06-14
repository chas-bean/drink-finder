import showDrink from "@/lib/drinks/api/showDrink";
import { Metadata } from "next";

interface DrinkPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: DrinkPageProps): Promise<Metadata> {
  const drink = await showDrink({ id: params.id });

  return {
    title: drink?.name,
  };
}

export default async function DrinkPage({ params }: DrinkPageProps) {
  const drinkId = params.id;
  const drink = await showDrink({ id: drinkId });

  return <div>{drink?.name}</div>;
}
