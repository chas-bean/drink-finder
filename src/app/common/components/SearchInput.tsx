import { InputHTMLAttributes } from "react";

interface SearchInputProps {
  placeholder: InputHTMLAttributes<HTMLInputElement>["placeholder"];
}

export default function SearchInput({ placeholder }: SearchInputProps) {
  return <input placeholder={placeholder} />;
}
