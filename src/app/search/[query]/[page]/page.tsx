"use client";
import { Results } from "@/components/search/results";
import React from "react";
import { useSearchParams } from "next/navigation";
import Filters from "@/components/search/filter";

const Page = async ({
  params,
}: {
  params: { query: string; page: string };
}) => {
  const search = useSearchParams();
  const filter = {
    include_adult: search.get("include_adult") === "true",
    year: search.get("year") ?? "",
    region: search.get("region") ?? "",
    primary_release_year: search.get("primary_release_year") ?? "",
  };

  return (
    <>
      <div className="px-6 mx-auto md:px-24">
        <h2 className="text-xl font-bold md:text-2xl">Search Results</h2>
      </div>
      <div className="flex justify-between px-6 mt-8 md:px-24">
        <Filters />
      </div>
      <Results filter={filter} params={params} />
    </>
  );
};

export default Page;
