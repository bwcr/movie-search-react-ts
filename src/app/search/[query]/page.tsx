"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = ({ params }: { params: { query: string } }) => {
  const { query } = params;
  const router = useRouter();
  return router.push(`/search/${query}/1`, undefined, { shallow: true });
};

export default Page;
