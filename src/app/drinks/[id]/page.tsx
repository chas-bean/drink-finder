import PieChart from "@/lib/common/components/PieChart";
import showDrink from "@/lib/drinks/api/showDrink";
import DrinkImage from "@/lib/drinks/components/DrinkImage";
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

  if (!drink) {
    return null;
  }

  let data: (string | number)[][] = [["Ingredient", "Tsp"]];

  for (let i = 0; i < drink.ingredients.length; i++) {
    const ingredient = drink.ingredients[i];
    data.push([
      ingredient.name + ` (${ingredient.measurement.text})`,
      ingredient.measurement.teaspoons,
    ]);
  }

  return (
    <main className="bg-white container flex flex-col max-w-md min-h-screen mx-auto">
      <DrinkImage
        drink={drink}
        height={160}
        width={160}
        style={{ alignSelf: "center", borderRadius: "100%", marginTop: "30px" }}
      />
      <p
        className="text-2xl"
        style={{ alignSelf: "center", paddingTop: "8px" }}
      >
        {drink.name}
      </p>
      <PieChart data={data} title="Ingredients (Tsp)" />
      <p className="mb-24 px-16 text-base">{drink.instructions}</p>
    </main>
  );
}
