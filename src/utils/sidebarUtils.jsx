// sidebarUtils.js
import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(true);
  };

  return { isSidebarOpen, toggleSidebar, closeSidebar };
};
