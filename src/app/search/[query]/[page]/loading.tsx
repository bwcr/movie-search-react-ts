import React from "react";

const Loading = () => {
  return (
    // Tailwind Spinner
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-16 h-16 border-4 border-red-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
