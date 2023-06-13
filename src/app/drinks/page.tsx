import SearchInput from "../common/components/SearchInput";
import DrinkList from "./components/DrinkList";

export default async function DrinksPage() {
  return (
    <>
      <SearchInput placeholder="Find a drink" />
      <DrinkList />
    </>
  );
}
