import React from "react";

const CompOne = async () => {

  await new Promise((resolve) => setTimeout(resolve, 5000))

  return <div className="text-green-500">Loaded after 5 second</div>;
};

export default CompOne;
