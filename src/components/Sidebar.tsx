import React from "react";
import { Fuel, Store, Car, BarChart3, Settings, ClipboardList } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export const Sidebar = () => {
  const location = useLocation();
  return <div className="w-64 bg-[#001e00] h-screen text-white p-4">
      <div className="mb-8 px-2">
        <h1 className="text-xl font-bold text-white">Gas Station Manager</h1>
      </div>
      <nav className="space-y-1">
        <SidebarItem icon={<BarChart3 />} text="Dashboard" to="/" active={location.pathname === "/"} />
        <SidebarItem icon={<Fuel />} text="Pump Sales" to="/pump-sales" active={location.pathname === "/pump-sales"} />
        <SidebarItem icon={<Store />} text="Shop" to="/shop" active={location.pathname === "/shop"} />
        <SidebarItem icon={<Car />} text="Auto Care" to="/auto-care" active={location.pathname === "/auto-care"} />
        <SidebarItem icon={<ClipboardList />} text="Work Orders" to="/work-orders" active={location.pathname === "/work-orders"} />
        <SidebarItem icon={<Settings />} text="Settings" to="/settings" active={location.pathname === "/settings"} />
      </nav>
    </div>;
};
const SidebarItem = ({
  icon,
  text,
  to,
  active = false
}) => {
  return <Link to={to}>
      <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors
        ${active ? "bg-[#14a800] text-white" : "text-[#9aaa97] hover:bg-[#14a800] hover:bg-opacity-10 hover:text-white"}`}>
        {icon}
        <span className="font-medium">{text}</span>
      </div>
    </Link>;
};