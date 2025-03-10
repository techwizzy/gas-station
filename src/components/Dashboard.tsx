import React from "react";
import { Fuel, ShoppingBag, Wrench, TrendingUp } from "lucide-react";
export const Dashboard = () => {
  return <div className="flex-1 p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Fuel className="text-blue-600" />} title="Fuel Sales Today" value="$5,234.50" trend="+12.3%" />
        <StatCard icon={<ShoppingBag className="text-green-600" />} title="Shop Revenue" value="$1,234.00" trend="+5.7%" />
        <StatCard icon={<Wrench className="text-purple-600" />} title="Auto Care Jobs" value="8 Active" trend="2 Completed" />
        <StatCard icon={<TrendingUp className="text-orange-600" />} title="Total Revenue" value="$6,468.50" trend="+8.4%" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PumpStatus />
        <ActiveWorkOrders />
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
        {icon}
        <span className="text-green-600 text-sm">{trend}</span>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>;
};
const PumpStatus = () => {
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Pump Status</h3>
      <div className="space-y-4">
        {[1, 2, 3, 4].map(pump => <div key={pump} className="flex items-center justify-between">
            <span>Pump {pump}</span>
            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              Available
            </span>
          </div>)}
      </div>
    </div>;
};
const ActiveWorkOrders = () => {
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Active Work Orders</h3>
      <div className="space-y-4">
        {[{
        id: 1,
        service: "Oil Change",
        vehicle: "Toyota Camry",
        status: "In Progress"
      }, {
        id: 2,
        service: "Tire Rotation",
        vehicle: "Honda Civic",
        status: "Waiting"
      }, {
        id: 3,
        service: "Brake Check",
        vehicle: "Ford F-150",
        status: "In Progress"
      }].map(order => <div key={order.id} className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">{order.service}</p>
              <p className="text-sm text-gray-600">{order.vehicle}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
              {order.status}
            </span>
          </div>)}
      </div>
    </div>;
};