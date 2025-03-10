import React, { useState } from "react";
import { X, Calendar, Clock, User, Car } from "lucide-react";
export const ServiceScheduleForm = ({
  isOpen,
  onClose,
  onSave
}) => {
  const [schedule, setSchedule] = useState({
    service: "",
    date: "",
    time: "",
    customer: "",
    vehicle: "",
    notes: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    onSave(schedule);
    onClose();
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[600px] max-h-[80vh] flex flex-col">
        <div className="p-6 border-b border-[#e4ebe4] flex justify-between items-center">
          <h3 className="text-xl font-semibold text-[#001e00]">
            Schedule Service
          </h3>
          <button onClick={onClose} className="text-[#5e6d55] hover:text-[#001e00]">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#001e00] mb-1">
                Service
              </label>
              <select className="w-full border border-[#e4ebe4] rounded-lg p-2" value={schedule.service} onChange={e => setSchedule({
              ...schedule,
              service: e.target.value
            })} required>
                <option value="">Select a service</option>
                <option value="oil_change">Oil Change</option>
                <option value="tire_rotation">Tire Rotation</option>
                <option value="brake_service">Brake Service</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Date
                </label>
                <div className="relative">
                  <input type="date" className="w-full border border-[#e4ebe4] rounded-lg p-2 pl-10" value={schedule.date} onChange={e => setSchedule({
                  ...schedule,
                  date: e.target.value
                })} required />
                  <Calendar className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Time
                </label>
                <div className="relative">
                  <input type="time" className="w-full border border-[#e4ebe4] rounded-lg p-2 pl-10" value={schedule.time} onChange={e => setSchedule({
                  ...schedule,
                  time: e.target.value
                })} required />
                  <Clock className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Customer Name
                </label>
                <div className="relative">
                  <input type="text" className="w-full border border-[#e4ebe4] rounded-lg p-2 pl-10" value={schedule.customer} onChange={e => setSchedule({
                  ...schedule,
                  customer: e.target.value
                })} required />
                  <User className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Vehicle
                </label>
                <div className="relative">
                  <input type="text" className="w-full border border-[#e4ebe4] rounded-lg p-2 pl-10" placeholder="Make & Model" value={schedule.vehicle} onChange={e => setSchedule({
                  ...schedule,
                  vehicle: e.target.value
                })} required />
                  <Car className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#001e00] mb-1">
                Notes
              </label>
              <textarea className="w-full border border-[#e4ebe4] rounded-lg p-2 h-24" value={schedule.notes} onChange={e => setSchedule({
              ...schedule,
              notes: e.target.value
            })} />
            </div>
          </div>
        </form>
        <div className="p-6 border-t border-[#e4ebe4] bg-[#f7faf7]">
          <div className="flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 border border-[#e4ebe4] rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-[#14a800] text-white rounded-lg hover:bg-[#14a800]/90">
              Schedule Service
            </button>
          </div>
        </div>
      </div>
    </div>;
};