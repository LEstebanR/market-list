import React from "react";

type Props = {
  children: React.ReactNode;
  gradient?: boolean;
  style?: any;
  color?: string;
};

export const Title: React.FC<Props> = ({ children, gradient }) => {
  const h1Styles = gradient
    ? {
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : {};
  return (
    <h1
      className={`text-center text-7xl font-bold text-black dark:text-white ${
        gradient ? "bg-gradient-to-r from-primary to-secondary" : ""
      }`}
      style={h1Styles}
    >
      {children}
    </h1>
  );
};

export const Body: React.FC<Props> = ({ children }) => {
  return (
    <p className="text-left text-xl font-medium text-black dark:text-white">
      {children}
    </p>
  );
};

export const Subtitle: React.FC<Props> = ({ children, color }) => {
  return (
    <h2
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`text-3xl font-bold 
      ${color ? `text-${color}` : "text-black dark:text-white"}
      `}
    >
      {children}
    </h2>
  );
};
