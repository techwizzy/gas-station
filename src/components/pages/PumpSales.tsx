import React, { useState } from "react";
import { Fuel, DollarSign, Clock, AlertCircle, Play, Pause, RefreshCw, Plus } from "lucide-react";
import { SalesEntryDrawer } from "../SalesEntryDrawer";
export const PumpSales = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return <div className="flex-1 p-8 bg-[#f7faf7]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#001e00]">Pump Sales</h2>
        <div className="flex gap-3">
          <button onClick={() => setIsDrawerOpen(true)} className="px-4 py-2 bg-[#14a800] text-white rounded-lg flex items-center gap-2 hover:bg-[#14a800]/90">
            <Plus size={16} />
            Add Sales Entry
          </button>
          <button className="px-4 py-2 bg-[#1f57c3] text-white rounded-lg flex items-center gap-2 hover:bg-[#1f57c3]/90">
            <Play size={16} />
            Start All
          </button>
          <button className="px-4 py-2 bg-[#bc511b] text-white rounded-lg flex items-center gap-2 hover:bg-[#bc511b]/90">
            <Pause size={16} />
            Stop All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ActivePumps />
        <CurrentTransactions />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FuelTypeBreakdown />
        <TransactionHistory />
      </div>
      <SalesEntryDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>;
};
const ActivePumps = () => {
  const pumps = [{
    id: 1,
    status: "active",
    customer: "John D.",
    amount: 45.5,
    time: "5:23",
    fuelType: "Regular"
  }, {
    id: 2,
    status: "available",
    customer: null,
    amount: 0,
    time: "0:00",
    fuelType: null
  }, {
    id: 3,
    status: "maintenance",
    customer: null,
    amount: 0,
    time: "0:00",
    fuelType: null
  }, {
    id: 4,
    status: "active",
    customer: "Sarah M.",
    amount: 32.75,
    time: "2:45",
    fuelType: "Premium"
  }];
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Active Pumps</h3>
      <div className="space-y-4">
        {pumps.map(pump => <div key={pump.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Pump {pump.id}</span>
              <StatusBadge status={pump.status} />
            </div>
            {pump.status === "active" && <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Customer: {pump.customer}</div>
                <div>Amount: ${pump.amount}</div>
                <div>Time: {pump.time}</div>
                <div>Fuel: {pump.fuelType}</div>
              </div>}
          </div>)}
      </div>
    </div>;
};
const StatusBadge = ({
  status
}) => {
  const styles = {
    active: "bg-[#14a800]/10 text-[#14a800]",
    available: "bg-[#1f57c3]/10 text-[#1f57c3]",
    maintenance: "bg-[#bc511b]/10 text-[#bc511b]"
  };
  return <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>;
};
const CurrentTransactions = () => {
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Current Transactions</h3>
      <div className="space-y-4">
        {[{
        id: 1,
        pump: 1,
        amount: 45.5,
        time: "5:23",
        status: "In Progress"
      }, {
        id: 2,
        pump: 4,
        amount: 32.75,
        time: "2:45",
        status: "In Progress"
      }].map(transaction => <div key={transaction.id} className="flex items-center justify-between border-b py-2">
            <div>
              <div className="font-medium">Pump {transaction.pump}</div>
              <div className="text-sm text-gray-600">${transaction.amount}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">{transaction.time}</div>
              <div className="text-sm text-green-600">{transaction.status}</div>
            </div>
          </div>)}
      </div>
    </div>;
};
const FuelTypeBreakdown = () => {
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Fuel Type Sales</h3>
      <div className="space-y-4">
        {[{
        type: "Regular",
        amount: 2345.5,
        percentage: 45
      }, {
        type: "Premium",
        amount: 1567.75,
        percentage: 30
      }, {
        type: "Diesel",
        amount: 1321.25,
        percentage: 25
      }].map(fuel => <div key={fuel.type} className="space-y-2">
            <div className="flex justify-between">
              <span>{fuel.type}</span>
              <span>${fuel.amount}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{
            width: `${fuel.percentage}%`
          }} />
            </div>
          </div>)}
      </div>
    </div>;
};
const TransactionHistory = () => {
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-3">
        {[{
        id: 1,
        time: "14:30",
        pump: 2,
        amount: 45.5,
        type: "Regular"
      }, {
        id: 2,
        time: "14:15",
        pump: 1,
        amount: 65.25,
        type: "Premium"
      }, {
        id: 3,
        time: "14:00",
        pump: 3,
        amount: 85.75,
        type: "Diesel"
      }, {
        id: 4,
        time: "13:45",
        pump: 4,
        amount: 35.5,
        type: "Regular"
      }].map(transaction => <div key={transaction.id} className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center gap-3">
              <div className="text-gray-600">{transaction.time}</div>
              <div>Pump {transaction.pump}</div>
            </div>
            <div className="text-right">
              <div className="font-medium">${transaction.amount}</div>
              <div className="text-sm text-gray-600">{transaction.type}</div>
            </div>
          </div>)}
      </div>
    </div>;
};