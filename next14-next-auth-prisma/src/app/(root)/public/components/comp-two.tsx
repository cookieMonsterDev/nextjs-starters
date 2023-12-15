import React from "react";

const CompTwo = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10000))

  return <div className="text-green-500">Loaded after 10 second</div>;
};

export default CompTwo;
