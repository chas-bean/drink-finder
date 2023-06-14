"use client";

import { InputHTMLAttributes, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchBar(props: SearchInputProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const [isPending, startTransition] = useTransition();

  const [text, setText] = useState(searchParams.get("q") || "");

  const handleChange = (value: string) => {
    setText(value);

    const params = new URLSearchParams(searchParams as any);
    params.set("q", value);

    startTransition(() => {
      router.replace(pathname + `?${params.toString()}`);
    });
  };

  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="search"
        value={text}
        {...props}
      />
      {isPending && <span> Searching...</span>}
    </div>
  );
}
