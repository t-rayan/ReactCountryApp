import React from "react";
import Spinner from "../Spinner/Spinner";

const Layout = ({ children, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return <div className="container">{children}</div>;
};

export default Layout;
