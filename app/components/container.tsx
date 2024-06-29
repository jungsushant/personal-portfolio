import React from "react";
import LeftSidebar from "./l-sidebar";
import RightSidebar from "./r-sidebar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  grow  justify-between scrollbar-hide">
      <LeftSidebar />
      {children}
      <RightSidebar />
    </div>
  );
};

export default Container;
