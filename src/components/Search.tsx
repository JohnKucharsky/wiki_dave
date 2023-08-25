"use client";

import { FormEventHandler, SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={"w-50 flex justify-center md:justify-between"}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className={"bg-white p-2 w-80 text-xl rounded-xl"}
        placeholder={"Search"}
      />
      <button className={"p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold"}>
        Go
      </button>
    </form>
  );
}
