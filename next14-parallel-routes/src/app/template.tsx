import React from "react";

const Template: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="animate-fade animate-ease-in animate-once">{children}</div>
  );
};

export default Template;
