import React, { useState } from "react";
import { X, Plus, Save, Trash2, Clock } from "lucide-react";
export const SalesEntryDrawer = ({
  isOpen,
  onClose
}) => {
  const [entries, setEntries] = useState([createEmptyEntry()]);
  const [shiftType, setShiftType] = useState("day");
  function createEmptyEntry() {
    return {
      id: Date.now(),
      startMeter: "",
      endMeter: "",
      liters: "",
      amount: "",
      customerType: "walk-in",
      customerName: "",
      pumpNumber: "",
      fuelType: "regular"
    };
  }
  const addNewEntry = () => {
    setEntries([...entries, createEmptyEntry()]);
  };
  const removeEntry = id => {
    setEntries(entries.filter(entry => entry.id !== id));
  };
  return <div className={`fixed inset-y-0 right-0 w-[1000px] bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-[#f8f9fa]">
          <h2 className="text-xl font-semibold">Enter Pump Sales</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={20} />
          </button>
        </div>
        {/* Form Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          {/* Attendant, Shift, and Date Info */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pump Attendant
              </label>
              <select className="w-full border rounded-lg p-2 bg-white">
                <option>Select Attendant</option>
                <option>John Smith</option>
                <option>Maria Garcia</option>
                <option>David Chen</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shift Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="shiftType" value="day" checked={shiftType === "day"} onChange={e => setShiftType(e.target.value)} className="mr-2" />
                  <Clock size={16} className="mr-1" />
                  Day Shift (6AM - 6PM)
                </label>
                <label className="flex items-center">
                  <input type="radio" name="shiftType" value="night" checked={shiftType === "night"} onChange={e => setShiftType(e.target.value)} className="mr-2" />
                  <Clock size={16} className="mr-1" />
                  Night Shift (6PM - 6AM)
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shift Date
              </label>
              <input type="date" className="w-full border rounded-lg p-2" />
            </div>
          </div>
          {/* Excel-like Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f8f9fa] select-none">
                  <th className="border-b border-r border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Pump #
                  </th>
                  <th className="border-b border-r border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Fuel Type
                  </th>
                  <th className="border-b border-r border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Start Meter
                  </th>
                  <th className="border-b border-r border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    End Meter
                  </th>
                  <th className="border-b border-r border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Liters
                  </th>
                  <th className="border-b border-r border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="border-b border-r border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Customer Type
                  </th>
                  <th className="border-b border-r border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Customer Name
                  </th>
                  <th className="border-b border-gray-300 px-4 py-3 w-12"></th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => <tr key={entry.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border-r border-b border-gray-300 px-2 py-1">
                      <select className="w-full border-0 bg-transparent focus:ring-2 focus:ring-blue-500 rounded p-1">
                        <option value="">Select</option>
                        <option value="1">Pump 1</option>
                        <option value="2">Pump 2</option>
                        <option value="3">Pump 3</option>
                        <option value="4">Pump 4</option>
                      </select>
                    </td>
                    <td className="border-r border-b border-gray-300 px-2 py-1">
                      <select className="w-full border-0 bg-transparent focus:ring-2 focus:ring-blue-500 rounded p-1">
                        <option value="regular">Regular</option>
                        <option value="premium">Premium</option>
                        <option value="diesel">Diesel</option>
                      </select>
                    </td>
                    <td className="border-r border-b border-gray-300 px-2 py-1">
                      <input type="number" className="w-full border-0 bg-transparent focus:ring-2 focus:ring-blue-500 rounded p-1" placeholder="0.00" />
                    </td>
                    <td className="border-r border-b border-gray-300 px-2 py-1">
                      <input type="number" className="w-full border-0 bg-transparent focus:ring-2 focus:ring-blue-500 rounded p-1" placeholder="0.00" />
                    </td>
                    <td className="border-r border-b border-gray-300 px-2 py-1">
                      <input type="number" className="w-full border-0 bg-transparent focus:ring-2 focus:ring-blue-500 rounded p-1" placeholder="0.00" />
                    </td>
                    <td className="border-r border-b border-gray-300 px-2 py-1">
                      <input type="number" className="w-full border-0 bg-transparent focus:ring-2 focus:ring-blue-500 rounded p-1" placeholder="0.00" />
                    </td>
                    <td className="border-r border-b border-gray-300 px-2 py-1">
                      <select className="w-full border-0 bg-transparent focus:ring-2 focus:ring-blue-500 rounded p-1">
                        <option value="walk-in">Walk-in</option>
                        <option value="corporate">Corporate</option>
                      </select>
                    </td>
                    <td className="border-r border-b border-gray-300 px-2 py-1">
                      <input type="text" className="w-full border-0 bg-transparent focus:ring-2 focus:ring-blue-500 rounded p-1" placeholder="Enter name" />
                    </td>
                    <td className="border-b border-gray-300 px-2 py-1 text-center">
                      <button onClick={() => removeEntry(entry.id)} className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <button onClick={addNewEntry} className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg">
            <Plus size={16} />
            Add New Entry
          </button>
          {/* Summary Section */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium mb-2">Shift Summary</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Total Entries:</span>
                <span className="ml-2 font-medium">{entries.length}</span>
              </div>
              <div>
                <span className="text-gray-600">Shift Type:</span>
                <span className="ml-2 font-medium capitalize">{shiftType}</span>
              </div>
              <div>
                <span className="text-gray-600">Total Amount:</span>
                <span className="ml-2 font-medium">$0.00</span>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="p-4 border-t bg-[#f8f9fa]">
          <div className="flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Save size={16} />
              Save Entries
            </button>
          </div>
        </div>
      </div>
    </div>;
};