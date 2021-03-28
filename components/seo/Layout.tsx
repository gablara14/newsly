import React from "react";
import Meta from "./Meta";

import styles from "../styles/Layout.module.css";

const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <Meta />
      <div>{children}</div>
    </>
  );
};

export default Layout;
