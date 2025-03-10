import React, { useState } from "react";
import { X, Plus, Save, Car, User, Search } from "lucide-react";
export const WorkOrderDrawer = ({
  isOpen,
  onClose,
  onSave
}) => {
  const [workOrder, setWorkOrder] = useState({
    customer: "",
    vehicle: "",
    services: [],
    products: [],
    notes: "",
    technician: "",
    estimatedTime: "",
    status: "pending"
  });
  const [showProductSearch, setShowProductSearch] = useState(false);
  const handleAddService = service => {
    setWorkOrder({
      ...workOrder,
      services: [...workOrder.services, service]
    });
  };
  const handleAddProduct = product => {
    setWorkOrder({
      ...workOrder,
      products: [...workOrder.products, {
        ...product,
        quantity: 1
      }]
    });
    setShowProductSearch(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSave(workOrder);
    onClose();
  };
  return <div className={`fixed inset-y-0 right-0 w-[800px] bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-[#e4ebe4] flex justify-between items-center bg-[#f8f9fa]">
          <h2 className="text-xl font-semibold">Create Work Order</h2>
          <button onClick={onClose} className="text-[#5e6d55] hover:text-[#001e00]">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#001e00] mb-1">
                  Customer Name
                </label>
                <div className="relative">
                  <input type="text" className="w-full border border-[#e4ebe4] rounded-lg p-2 pl-10" value={workOrder.customer} onChange={e => setWorkOrder({
                  ...workOrder,
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
                  <input type="text" className="w-full border border-[#e4ebe4] rounded-lg p-2 pl-10" placeholder="Make & Model" value={workOrder.vehicle} onChange={e => setWorkOrder({
                  ...workOrder,
                  vehicle: e.target.value
                })} required />
                  <Car className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-[#001e00]">
                  Services
                </label>
                <button type="button" className="text-[#14a800] text-sm hover:text-[#14a800]/80 flex items-center gap-1" onClick={() => {
                /* Show service selection */
              }}>
                  <Plus size={16} />
                  Add Service
                </button>
              </div>
              <div className="border border-[#e4ebe4] rounded-lg divide-y">
                {workOrder.services.map((service, index) => <div key={index} className="p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{service.name}</p>
                      <p className="text-sm text-[#5e6d55]">
                        {service.duration}
                      </p>
                    </div>
                    <p className="font-medium">${service.price}</p>
                  </div>)}
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-[#001e00]">
                  Parts & Products
                </label>
                <button type="button" className="text-[#14a800] text-sm hover:text-[#14a800]/80 flex items-center gap-1" onClick={() => setShowProductSearch(true)}>
                  <Plus size={16} />
                  Add Product
                </button>
              </div>
              <div className="border border-[#e4ebe4] rounded-lg divide-y">
                {workOrder.products.map((product, index) => <div key={index} className="p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-[#5e6d55]">
                        Qty: {product.quantity}
                      </p>
                    </div>
                    <p className="font-medium">${product.price}</p>
                  </div>)}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#001e00] mb-1">
                Notes
              </label>
              <textarea className="w-full border border-[#e4ebe4] rounded-lg p-2 h-32" value={workOrder.notes} onChange={e => setWorkOrder({
              ...workOrder,
              notes: e.target.value
            })} />
            </div>
          </form>
        </div>
        <div className="p-6 border-t border-[#e4ebe4] bg-[#f8f9fa]">
          <div className="flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 border border-[#e4ebe4] rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-[#14a800] text-white rounded-lg hover:bg-[#14a800]/90 flex items-center gap-2">
              <Save size={16} />
              Create Work Order
            </button>
          </div>
        </div>
      </div>
    </div>;
};