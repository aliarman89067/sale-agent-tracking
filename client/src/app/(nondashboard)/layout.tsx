import { Navbar } from "@/components/Navbar";
import React from "react";

const NonDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col">
      <Navbar />
      {children}
    </main>
  );
};

export default NonDashboardLayout;
