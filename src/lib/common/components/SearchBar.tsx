"use client";

import { InputHTMLAttributes, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchBar(props: SearchBarProps) {
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
    <>
      <input
        aria-label="Type to search drinnks"
        onChange={(e) => handleChange(e.target.value)}
        type="search"
        value={text}
        {...props}
      />
      {/* {isPending && <span className=""> Searching...</span>} */}
    </>
  );
}
