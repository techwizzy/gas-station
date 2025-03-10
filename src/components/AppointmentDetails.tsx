import React from "react";
import { X, Car, User, Calendar, Clock, FileText, Phone } from "lucide-react";
export const AppointmentDetails = ({
  isOpen,
  onClose,
  appointment
}) => {
  if (!isOpen || !appointment) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[800px] max-h-[80vh] flex flex-col">
        <div className="p-6 border-b border-[#e4ebe4] flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-[#001e00]">
              Appointment Details
            </h3>
            <p className="text-sm text-[#5e6d55]">Service #{appointment.id}</p>
          </div>
          <button onClick={onClose} className="text-[#5e6d55] hover:text-[#001e00]">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#14a800]/10 flex items-center justify-center text-[#14a800]">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#5e6d55]">Customer</p>
                  <p className="font-medium">{appointment.customer}</p>
                  <p className="text-sm text-[#5e6d55]">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#14a800]/10 flex items-center justify-center text-[#14a800]">
                  <Car size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#5e6d55]">Vehicle</p>
                  <p className="font-medium">{appointment.vehicle}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#14a800]/10 flex items-center justify-center text-[#14a800]">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#5e6d55]">Date & Time</p>
                  <p className="font-medium">{appointment.date}</p>
                  <p className="text-sm text-[#5e6d55]">{appointment.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#14a800]/10 flex items-center justify-center text-[#14a800]">
                  <div size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#5e6d55]">Service</p>
                  <p className="font-medium">{appointment.service}</p>
                  <p className="text-sm text-[#5e6d55]">
                    Duration: {appointment.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f7faf7] rounded-lg p-4 mb-6">
            <h4 className="font-medium mb-2">Notes</h4>
            <p className="text-sm text-[#5e6d55]">
              {appointment.notes || "No notes provided"}
            </p>
          </div>
          <div className="border-t border-[#e4ebe4] pt-6">
            <h4 className="font-medium mb-4">Service Details</h4>
            <div className="bg-white rounded-lg border border-[#e4ebe4] overflow-hidden">
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{appointment.service}</p>
                  <p className="text-sm text-[#5e6d55]">Standard service</p>
                </div>
                <p className="font-medium">${appointment.price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-[#e4ebe4] bg-[#f7faf7]">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-[#e4ebe4] rounded-lg hover:bg-white flex items-center gap-2">
                <Phone size={16} />
                Contact Customer
              </button>
              <button className="px-4 py-2 border border-[#e4ebe4] rounded-lg hover:bg-white flex items-center gap-2">
                <FileText size={16} />
                Create Work Order
              </button>
            </div>
            <button className="px-4 py-2 bg-[#14a800] text-white rounded-lg hover:bg-[#14a800]/90">
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>;
};