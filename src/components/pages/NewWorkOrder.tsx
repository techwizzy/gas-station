import React, { useState } from "react";
import { Car, User, Package, Calendar, Clock, ChevronLeft, Plus, X, DollarSign } from "lucide-react";
import { ServiceQuotation } from "../ServiceQuotation";
export const NewWorkOrder = () => {
  const [showQuotation, setShowQuotation] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [workOrder, setWorkOrder] = useState({
    customer: "",
    vehicle: "",
    services: [],
    products: [],
    notes: "",
    scheduledDate: "",
    scheduledTime: "",
    estimatedDuration: "",
    technician: "",
    status: "pending"
  });
  return <div className="flex-1 p-8 bg-[#f7faf7]">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => window.history.back()} className="p-2 hover:bg-white rounded-lg">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-2xl font-bold text-[#001e00]">New Work Order</h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {/* Customer & Vehicle Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">
              Customer & Vehicle Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Customer Name
                </label>
                <div className="relative">
                  <input type="text" className="w-full border border-[#e4ebe4] rounded-lg p-2 pl-10" value={workOrder.customer} onChange={e => setWorkOrder({
                  ...workOrder,
                  customer: e.target.value
                })} />
                  <User className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Vehicle
                </label>
                <div className="relative">
                  <input type="text" className="w-full border border-[#e4ebe4] rounded-lg p-2 pl-10" placeholder="Make & Model" value={workOrder.vehicle} onChange={e => setWorkOrder({
                  ...workOrder,
                  vehicle: e.target.value
                })} />
                  <Car className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
                </div>
              </div>
            </div>
          </div>
          {/* Services */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <button onClick={() => setShowQuotation(true)} className="text-[#14a800] text-sm hover:text-[#14a800]/80 flex items-center gap-1">
                <Plus size={16} />
                Add Service
              </button>
            </div>
            <div className="space-y-3">
              {workOrder.services.map((service, index) => <div key={index} className="flex items-center justify-between p-4 border border-[#e4ebe4] rounded-lg">
                  <div>
                    <h4 className="font-medium">{service.name}</h4>
                    <p className="text-sm text-[#5e6d55]">{service.duration}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium">${service.price}</span>
                    <button onClick={() => {
                  const newServices = [...workOrder.services];
                  newServices.splice(index, 1);
                  setWorkOrder({
                    ...workOrder,
                    services: newServices
                  });
                }}>
                      <X size={16} className="text-red-500" />
                    </button>
                  </div>
                </div>)}
              {workOrder.services.length === 0 && <div className="text-center py-8 text-[#5e6d55]">
                  <div size={24} className="mx-auto mb-2" />
                  <p>No services added yet</p>
                </div>}
            </div>
          </div>
          {/* Products */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Parts & Products</h3>
              <button className="text-[#14a800] text-sm hover:text-[#14a800]/80 flex items-center gap-1">
                <Plus size={16} />
                Add Product
              </button>
            </div>
            <div className="space-y-3">
              {workOrder.products.map((product, index) => <div key={index} className="flex items-center justify-between p-4 border border-[#e4ebe4] rounded-lg">
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-[#5e6d55]">
                      Quantity: {product.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium">${product.price}</span>
                    <button onClick={() => {
                  const newProducts = [...workOrder.products];
                  newProducts.splice(index, 1);
                  setWorkOrder({
                    ...workOrder,
                    products: newProducts
                  });
                }}>
                      <X size={16} className="text-red-500" />
                    </button>
                  </div>
                </div>)}
              {workOrder.products.length === 0 && <div className="text-center py-8 text-[#5e6d55]">
                  <Package size={24} className="mx-auto mb-2" />
                  <p>No products added yet</p>
                </div>}
            </div>
          </div>
          {/* Notes */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Notes</h3>
            <textarea className="w-full border border-[#e4ebe4] rounded-lg p-3 h-32" placeholder="Add any additional notes or instructions..." value={workOrder.notes} onChange={e => setWorkOrder({
            ...workOrder,
            notes: e.target.value
          })} />
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Schedule */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Schedule</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Date
                </label>
                <div className="relative">
                  <input type="date" className="w-full border border-[#e4ebe4] rounded-lg p-2 pl-10" value={workOrder.scheduledDate} onChange={e => setWorkOrder({
                  ...workOrder,
                  scheduledDate: e.target.value
                })} />
                  <Calendar className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Time
                </label>
                <div className="relative">
                  <input type="time" className="w-full border border-[#e4ebe4] rounded-lg p-2 pl-10" value={workOrder.scheduledTime} onChange={e => setWorkOrder({
                  ...workOrder,
                  scheduledTime: e.target.value
                })} />
                  <Clock className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Estimated Duration
                </label>
                <input type="text" className="w-full border border-[#e4ebe4] rounded-lg p-2" placeholder="e.g. 2 hours" value={workOrder.estimatedDuration} onChange={e => setWorkOrder({
                ...workOrder,
                estimatedDuration: e.target.value
              })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Assign Technician
                </label>
                <select className="w-full border border-[#e4ebe4] rounded-lg p-2" value={workOrder.technician} onChange={e => setWorkOrder({
                ...workOrder,
                technician: e.target.value
              })}>
                  <option value="">Select Technician</option>
                  <option value="john">John Smith</option>
                  <option value="sarah">Sarah Johnson</option>
                  <option value="mike">Mike Wilson</option>
                </select>
              </div>
            </div>
          </div>
          {/* Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#5e6d55]">Services Total</span>
                <span className="font-medium">
                  $
                  {workOrder.services.reduce((sum, s) => sum + parseFloat(s.price), 0).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#5e6d55]">Parts Total</span>
                <span className="font-medium">
                  $
                  {workOrder.products.reduce((sum, p) => sum + parseFloat(p.price) * p.quantity, 0).toFixed(2)}
                </span>
              </div>
              <div className="pt-3 border-t border-[#e4ebe4] flex justify-between">
                <span className="font-medium">Total</span>
                <span className="text-lg font-semibold">
                  $
                  {(workOrder.services.reduce((sum, s) => sum + parseFloat(s.price), 0) + workOrder.products.reduce((sum, p) => sum + parseFloat(p.price) * p.quantity, 0)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="flex gap-3">
            <button onClick={() => window.history.back()} className="flex-1 px-4 py-2 border border-[#e4ebe4] rounded-lg hover:bg-white">
              Cancel
            </button>
            <button onClick={() => {
            /* Handle save */
          }} className="flex-1 px-4 py-2 bg-[#14a800] text-white rounded-lg hover:bg-[#14a800]/90">
              Create Work Order
            </button>
          </div>
        </div>
      </div>
      <ServiceQuotation isOpen={showQuotation} onClose={() => setShowQuotation(false)} service={selectedService} />
    </div>;
};