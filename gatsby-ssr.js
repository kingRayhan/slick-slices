import React from "react";
import Layout from "./src/compoents/Layout";
import "normalize.css";

export const wrapRootElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
