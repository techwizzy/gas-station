import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { PumpSales } from "./components/pages/PumpSales";
import { Shop } from "./components/pages/Shop";
import { AutoCare } from "./components/pages/AutoCare";
import { WorkOrders } from "./components/pages/WorkOrders";
import { NewWorkOrder } from "./components/pages/NewWorkOrder";
import { Settings } from "./components/pages/Settings";
export function App() {
  return <Router>
      <div className="flex w-full min-h-screen bg-[#f7faf7]">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pump-sales" element={<PumpSales />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auto-care" element={<AutoCare />} />
          <Route path="/work-orders" element={<WorkOrders />} />
          <Route path="/work-orders/new" element={<NewWorkOrder />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>;
}