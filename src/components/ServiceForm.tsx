import React, { useState } from "react";
import { X, Plus, Save } from "lucide-react";
export const ServiceForm = ({
  isOpen,
  onClose,
  onSave
}) => {
  const [service, setService] = useState({
    name: "",
    duration: "",
    price: "",
    description: "",
    category: "maintenance"
  });
  const handleSubmit = e => {
    e.preventDefault();
    onSave(service);
    onClose();
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[600px] max-h-[80vh] flex flex-col">
        <div className="p-6 border-b border-[#e4ebe4] flex justify-between items-center">
          <h3 className="text-xl font-semibold text-[#001e00]">
            Add New Service
          </h3>
          <button onClick={onClose} className="text-[#5e6d55] hover:text-[#001e00]">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#001e00] mb-1">
                Service Name
              </label>
              <input type="text" className="w-full border border-[#e4ebe4] rounded-lg p-2" value={service.name} onChange={e => setService({
              ...service,
              name: e.target.value
            })} required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Duration
                </label>
                <input type="text" className="w-full border border-[#e4ebe4] rounded-lg p-2" placeholder="e.g. 1 hour" value={service.duration} onChange={e => setService({
                ...service,
                duration: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Price ($)
                </label>
                <input type="number" className="w-full border border-[#e4ebe4] rounded-lg p-2" value={service.price} onChange={e => setService({
                ...service,
                price: e.target.value
              })} required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#001e00] mb-1">
                Category
              </label>
              <select className="w-full border border-[#e4ebe4] rounded-lg p-2" value={service.category} onChange={e => setService({
              ...service,
              category: e.target.value
            })}>
                <option value="maintenance">Maintenance</option>
                <option value="repair">Repair</option>
                <option value="inspection">Inspection</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#001e00] mb-1">
                Description
              </label>
              <textarea className="w-full border border-[#e4ebe4] rounded-lg p-2 h-32" value={service.description} onChange={e => setService({
              ...service,
              description: e.target.value
            })} required />
            </div>
          </div>
        </form>
        <div className="p-6 border-t border-[#e4ebe4] bg-[#f7faf7]">
          <div className="flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 border border-[#e4ebe4] rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-[#14a800] text-white rounded-lg hover:bg-[#14a800]/90 flex items-center gap-2">
              <Save size={16} />
              Save Service
            </button>
          </div>
        </div>
      </div>
    </div>;
};