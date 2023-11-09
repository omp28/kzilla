// components/Layout.js
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" bg-black flex flex-col h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
