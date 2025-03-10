import React, { useState } from "react";
import { ClipboardList, Search, Filter, Plus, Clock, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
export const WorkOrders = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  const navigate = useNavigate();
  return <div className="flex-1 p-8 bg-[#f7faf7]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#001e00]">Work Orders</h2>
        <button onClick={() => navigate("/work-orders/new")} className="px-4 py-2 bg-[#14a800] text-white rounded-lg flex items-center gap-2 hover:bg-[#14a800]/90">
          <Plus size={16} />
          New Work Order
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={<ClipboardList />} title="Active Orders" value="15" trend="+3 today" />
        <StatCard icon={<CheckCircle2 />} title="Completed" value="48" trend="This week" />
        <StatCard icon={<Clock />} title="Avg. Completion" value="3.2 hrs" trend="-45 min" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            {["all", "pending", "in_progress", "completed"].map(status => <button key={status} className={`px-4 py-2 rounded-lg ${filterStatus === status ? "bg-[#14a800] text-white" : "bg-white border border-[#e4ebe4] text-[#5e6d55] hover:border-[#14a800] hover:text-[#14a800]"}`} onClick={() => setFilterStatus(status)}>
                {status.replace("_", " ").charAt(0).toUpperCase() + status.slice(1)}
              </button>)}
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <input type="text" placeholder="Search orders..." className="pl-9 pr-4 py-2 border border-[#e4ebe4] rounded-lg" />
              <Search className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
            </div>
            <button className="p-2 border border-[#e4ebe4] rounded-lg">
              <Filter size={18} className="text-[#5e6d55]" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e4ebe4]">
                <th className="text-left py-4 px-4 text-[#5e6d55] font-medium">
                  Order ID
                </th>
                <th className="text-left py-4 px-4 text-[#5e6d55] font-medium">
                  Customer
                </th>
                <th className="text-left py-4 px-4 text-[#5e6d55] font-medium">
                  Service
                </th>
                <th className="text-left py-4 px-4 text-[#5e6d55] font-medium">
                  Status
                </th>
                <th className="text-left py-4 px-4 text-[#5e6d55] font-medium">
                  Date
                </th>
                <th className="text-right py-4 px-4 text-[#5e6d55] font-medium">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {workOrders.map(order => <tr key={order.id} className="border-b border-[#e4ebe4] hover:bg-[#f7faf7]">
                  <td className="py-4 px-4">#{order.id}</td>
                  <td className="py-4 px-4">{order.customer}</td>
                  <td className="py-4 px-4">{order.service}</td>
                  <td className="py-4 px-4">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="py-4 px-4">{order.date}</td>
                  <td className="py-4 px-4 text-right">${order.amount}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
const StatCard = ({
  icon,
  title,
  value,
  trend
}) => {
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[#14a800]">{icon}</div>
        <span className="text-[#5e6d55] text-sm">{trend}</span>
      </div>
      <h3 className="text-[#5e6d55] text-sm mb-1">{title}</h3>
      <p className="text-2xl font-semibold text-[#001e00]">{value}</p>
    </div>;
};
const StatusBadge = ({
  status
}) => {
  const styles = {
    pending: "bg-[#bc511b]/10 text-[#bc511b]",
    "in progress": "bg-[#1f57c3]/10 text-[#1f57c3]",
    completed: "bg-[#14a800]/10 text-[#14a800]"
  };
  return <span className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>;
};
const workOrders = [{
  id: "WO001",
  customer: "John Smith",
  service: "Oil Change",
  status: "completed",
  date: "2024-01-20",
  amount: 39.99
}, {
  id: "WO002",
  customer: "Sarah Johnson",
  service: "Brake Service",
  status: "in progress",
  date: "2024-01-20",
  amount: 149.99
}, {
  id: "WO003",
  customer: "Mike Davis",
  service: "Tire Rotation",
  status: "pending",
  date: "2024-01-21",
  amount: 29.99
}];