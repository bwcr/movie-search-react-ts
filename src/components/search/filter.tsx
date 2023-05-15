import { getRegions } from "@/services/region.service";
import { ListRegion, Region } from "@/types/regions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface FiltersProps {
  regions: ListRegion;
  filters: {
    include_adult: boolean;
    year: string;
    region: string;
    primary_release_year: string;
  };
  router: any;
  pathname: string;
}

const Filters = () => {
  const {
    data: regions,
    isLoading,
    isError,
  } = useQuery<ListRegion, Error>(["regions"], () => getRegions());
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  const filters = {
    include_adult: search.get("include_adult") === "true",
    year: search.get("year") || "",
    region: search.get("region") || "",
    primary_release_year: search.get("primary_release_year") || "",
  };
  const [filter, setFilter] = useState(filters);

  useEffect(() => {
    setFilter(filters);
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "include_adult") {
      setFilter((prev) => ({ ...prev, include_adult: e.target.checked }));
    } else {
      setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("include_adult", filter.include_adult.toString());
    params.set("year", filter.year);
    params.set("region", filter.region);
    params.set("primary_release_year", filter.primary_release_year);
    router.push(`${pathname}?${params.toString()}`);
  }, [filter]);

  const handleClearFilter = () => {
    setFilter({
      include_adult: false,
      year: "",
      region: "",
      primary_release_year: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-between w-full gap-4 mb-4 md:flex-row">
      <div className="flex flex-col items-center w-full mb-4 md:items-start md:w-1/2 md:mb-0">
        <label htmlFor="year" className="mb-2 text-lg font-bold">
          Year
        </label>
        <select
          name="year"
          value={filters.year}
          onChange={handleOnChange}
          className="w-full px-4 py-2 bg-transparent border border-red-500 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
          <option value="">Select a year</option>
          {/* Year from 1900 to now */}
          {Array.from(Array(new Date().getFullYear() - 1900).keys())
            .map((year) => year + 1900)
            .reverse()
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col items-center w-full mb-4 md:items-start md:w-1/2 md:mb-0">
        <label htmlFor="region" className="mb-2 text-lg font-bold">
          Region
        </label>
        {!isLoading && !isError && (
          <select
            name="region"
            value={filters.region}
            onChange={handleOnChange}
            className="w-full px-4 py-2 bg-transparent border border-red-500 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">Select a region</option>
            {regions?.results.map((region: Region) => (
              <option key={region.iso_3166_1} value={region.iso_3166_1}>
                {region.english_name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="flex flex-col items-center w-full mb-4 md:items-start md:w-1/2 md:mb-0">
        <label
          htmlFor="primary_release_year"
          className="mb-2 text-lg font-bold"
        >
          Primary Release Year
        </label>
        <select
          name="primary_release_year"
          onChange={handleOnChange}
          className="w-full px-4 py-2 bg-transparent border border-red-500 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
          <option value="">Select a year</option>
          {/* Year from 1900 to now */}
          {Array.from(Array(new Date().getFullYear() - 1900).keys())
            .map((year) => year + 1900)
            .reverse()
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>
      {/* Tailwind checkbox */}
      <div className="flex items-center w-full mb-4 md:items-start md:w-1/2 md:mb-0">
        <input
          type="checkbox"
          name="include_adult"
          onChange={handleOnChange}
          className="w-5 h-5 text-red-500 rounded-md focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          checked={filter.include_adult}
        />
        <label htmlFor="include_adult" className="ml-2 text-lg font-bold">
          Include Adult
        </label>
      </div>
      {/* Clear filter */}
      {filter.year !== "" ||
      filter.region !== "" ||
      filter.primary_release_year !== "" ||
      filter.include_adult ? (
        <button
          onClick={handleClearFilter}
          className="px-4 py-2 font-bold text-white bg-red-500 rounded-md text-md"
        >
          Clear
        </button>
      ) : null}
    </div>
  );
};

export default Filters;
