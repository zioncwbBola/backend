// src/components/layout.tsx
"use client";

//import { useState } from "react";
import Sidebar from "./Sidebar/SidebarIconTooltips";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
