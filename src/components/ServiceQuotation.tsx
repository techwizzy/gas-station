import React, { useState } from "react";
import { Plus, Minus, X, DollarSign, Clock } from "lucide-react";
export const ServiceQuotation = ({
  isOpen,
  onClose,
  service
}) => {
  const [products, setProducts] = useState([]);
  const [laborHours, setLaborHours] = useState(1);
  const [laborRate] = useState(75); // Per hour
  const addProduct = product => {
    setProducts([...products, {
      ...product,
      quantity: 1
    }]);
  };
  const updateQuantity = (index, delta) => {
    const newProducts = [...products];
    newProducts[index].quantity = Math.max(1, newProducts[index].quantity + delta);
    setProducts(newProducts);
  };
  const removeProduct = index => {
    setProducts(products.filter((_, i) => i !== index));
  };
  const calculateTotal = () => {
    const partsTotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
    const laborTotal = laborHours * laborRate;
    return partsTotal + laborTotal;
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[800px] max-h-[80vh] flex flex-col">
        <div className="p-6 border-b border-[#e4ebe4] flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-[#001e00]">
              Service Quotation
            </h3>
            <p className="text-sm text-[#5e6d55]">{service?.name}</p>
          </div>
          <button onClick={onClose} className="text-[#5e6d55] hover:text-[#001e00]">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium mb-4">Service Details</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#14a800]/10 flex items-center justify-center text-[#14a800]">
                    <div size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#5e6d55]">Service Type</p>
                    <p className="font-medium">{service?.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#14a800]/10 flex items-center justify-center text-[#14a800]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#5e6d55]">Labor Hours</p>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setLaborHours(Math.max(0.5, laborHours - 0.5))} className="p-1 hover:bg-[#f7faf7] rounded">
                        <Minus size={16} />
                      </button>
                      <span className="font-medium">{laborHours} hrs</span>
                      <button onClick={() => setLaborHours(laborHours + 0.5)} className="p-1 hover:bg-[#f7faf7] rounded">
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Parts & Materials</h4>
                <button className="text-[#14a800] text-sm hover:text-[#14a800]/80 flex items-center gap-1" onClick={() => {
                /* Show product selection */
              }}>
                  <Plus size={16} />
                  Add Product
                </button>
              </div>
              <div className="space-y-2">
                {products.map((product, index) => <div key={index} className="flex items-center justify-between p-3 border border-[#e4ebe4] rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-[#5e6d55]">
                        ${product.price} each
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(index, -1)} className="p-1 hover:bg-[#f7faf7] rounded">
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">
                          {product.quantity}
                        </span>
                        <button onClick={() => updateQuantity(index, 1)} className="p-1 hover:bg-[#f7faf7] rounded">
                          <Plus size={16} />
                        </button>
                      </div>
                      <button onClick={() => removeProduct(index)} className="text-red-500 hover:text-red-600">
                        <X size={16} />
                      </button>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          <div className="border-t border-[#e4ebe4] pt-6">
            <h4 className="font-medium mb-4">Quotation Summary</h4>
            <div className="bg-[#f7faf7] rounded-lg p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#5e6d55]">Parts & Materials</span>
                <span className="font-medium">
                  $
                  {products.reduce((sum, p) => sum + p.price * p.quantity, 0).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#5e6d55]">
                  Labor ({laborHours} hrs @ ${laborRate}/hr)
                </span>
                <span className="font-medium">
                  ${(laborHours * laborRate).toFixed(2)}
                </span>
              </div>
              <div className="pt-3 border-t border-[#e4ebe4] flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium text-lg">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-[#e4ebe4] bg-[#f7faf7]">
          <div className="flex justify-between items-center">
            <button className="px-4 py-2 border border-[#e4ebe4] rounded-lg hover:bg-white">
              Save as Draft
            </button>
            <div className="flex gap-3">
              <button onClick={onClose} className="px-4 py-2 border border-[#e4ebe4] rounded-lg hover:bg-white">
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#14a800] text-white rounded-lg hover:bg-[#14a800]/90">
                Create Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};