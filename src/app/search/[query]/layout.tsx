import Search from "@/components/homepage/search";
import React from "react";

const Layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { query: string };
}) => {
  const { query } = params;
  return (
    <main className="min-h-screen">
      <Search initialValues={decodeURIComponent(query)} />
      {children}
    </main>
  );
};

export default Layout;
