"use client";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import React from "react";

const Search = ({ initialValues = "" }: { initialValues?: string }) => {
  const [search, setSearch] = React.useState(initialValues);
  // navigate nextjs
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() === "") return;
    if (search === initialValues) return;
    router.push(`/search/${search}`);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 ">
      <h1 className="text-3xl font-bold text-center md:text-4xl">
        Welcome to <span className="text-red-500">Movie Search</span>
      </h1>
      <p className="mt-4 text-lg text-center md:text-xl">
        Search for your favorite movies
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center w-full gap-2 mt-8"
      >
        <input
          onChange={handleChange}
          required
          value={search}
          type="text"
          placeholder="Search movies"
          className="w-full h-12 px-4 text-white bg-transparent rounded-md shadow-lg md:w-1/2 xl:w-1/3 focus:outline-none ring-2 shadow-red-500 ring-red-500 focus:ring-opacity-100 ring-opacity-50"
        />
        {search.trim() !== "" ? (
          <button type="reset" onClick={() => setSearch("")}>
            <XMarkIcon className="w-6 h-6 -ml-10 text-white" />
          </button>
        ) : (
          <button type="submit">
            <MagnifyingGlassIcon className="w-6 h-6 -ml-10 text-white" />
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
