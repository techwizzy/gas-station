import React from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
export const ScheduleCalendar = ({
  appointments,
  onSelectSlot
}) => {
  const hours = Array.from({
    length: 12
  }, (_, i) => i + 8); // 8 AM to 8 PM
  return <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-[#e4ebe4] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#f7faf7] rounded-lg">
            <ChevronLeft size={20} className="text-[#5e6d55]" />
          </button>
          <h3 className="text-lg font-semibold">January 2024</h3>
          <button className="p-2 hover:bg-[#f7faf7] rounded-lg">
            <ChevronRight size={20} className="text-[#5e6d55]" />
          </button>
        </div>
        <button onClick={() => onSelectSlot()} className="px-4 py-2 bg-[#14a800] text-white rounded-lg flex items-center gap-2">
          Schedule Service
        </button>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-4 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <div key={day} className="text-center font-medium text-[#5e6d55]">
              {day}
            </div>)}
        </div>
        <div className="grid grid-cols-7 gap-4">
          {Array.from({
          length: 35
        }, (_, i) => <div key={i} className={`aspect-square border border-[#e4ebe4] rounded-lg p-2 ${i >= 3 && i <= 32 ? "hover:border-[#14a800] cursor-pointer" : "opacity-50"}`}>
                <span className="block text-sm mb-1">{i - 2}</span>
                {appointments.filter(apt => apt.day === i - 2).map(apt => <div key={apt.id} className="text-xs p-1 mb-1 rounded bg-[#14a800]/10 text-[#14a800]">
                      {apt.service}
                    </div>)}
              </div>)}
        </div>
      </div>
    </div>;
};