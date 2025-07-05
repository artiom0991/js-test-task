import React from "react";

export const Switch = ({ children }) => {
  const validMatch = React.Children.toArray(children).find(
    (child) => child?.props?.when
  );
  return validMatch || null;
};

export const Match = ({ when, children }) => {
  return when ? children : null;
};
