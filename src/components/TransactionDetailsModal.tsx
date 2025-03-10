import React, { useEffect, useState } from "react";
import { X, Trash2, AlertCircle } from "lucide-react";
import { AdminPasswordModal } from "./AdminPasswordModal";
export const TransactionDetailsModal = ({
  isOpen,
  onClose,
  transaction
}) => {
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminAction, setAdminAction] = useState({
    type: "",
    itemId: null
  });
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (transaction?.items) {
      setItems(transaction.items.split(", ").map((item, index) => ({
        id: index + 1,
        name: item,
        price: (Math.random() * 10).toFixed(2),
        quantity: 1
      })));
    }
  }, [transaction]);
  if (!isOpen || !transaction) return null;
  const handleVoidSale = () => {
    setAdminAction({
      type: "void_sale",
      itemId: null
    });
    setShowAdminModal(true);
  };
  const handleRemoveItem = itemId => {
    setAdminAction({
      type: "remove_item",
      itemId
    });
    setShowAdminModal(true);
  };
  const handleAdminConfirm = () => {
    if (adminAction.type === "void_sale") {
      console.log("Sale voided");
      onClose();
    } else if (adminAction.type === "remove_item") {
      setItems(items.filter(item => item.id !== adminAction.itemId));
    }
    setShowAdminModal(false);
  };
  return <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white rounded-lg w-[800px] max-h-[80vh] flex flex-col">
          <div className="p-6 border-b border-[#e4ebe4] flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#001e00]">
                Transaction Details
              </h3>
              <p className="text-sm text-[#5e6d55]">
                Transaction #{transaction.id}
              </p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-2">Transaction Information</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-[#5e6d55]">Date & Time:</span>{" "}
                    {transaction.datetime}
                  </p>
                  <p>
                    <span className="text-[#5e6d55]">Payment Method:</span>{" "}
                    {transaction.paymentMethod}
                  </p>
                  <p>
                    <span className="text-[#5e6d55]">Total Amount:</span> $
                    {transaction.amount.toFixed(2)}
                  </p>
                  <p>
                    <span className="text-[#5e6d55]">Status:</span>{" "}
                    <span className="text-[#14a800]">Completed</span>
                  </p>
                </div>
              </div>
            </div>
            <h4 className="font-medium mb-4">Items</h4>
            <div className="border border-[#e4ebe4] rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f7faf7]">
                    <th className="text-left p-4 text-sm font-medium text-[#5e6d55]">
                      Item
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-[#5e6d55]">
                      Quantity
                    </th>
                    <th className="text-right p-4 text-sm font-medium text-[#5e6d55]">
                      Price
                    </th>
                    <th className="text-right p-4 text-sm font-medium text-[#5e6d55]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => <tr key={item.id} className="border-t border-[#e4ebe4]">
                      <td className="p-4">{item.name}</td>
                      <td className="p-4">{item.quantity}</td>
                      <td className="p-4 text-right">${item.price}</td>
                      <td className="p-4 text-right">
                        <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-6 border-t border-[#e4ebe4] bg-[#f7faf7]">
            <div className="flex items-center justify-between">
              <button onClick={handleVoidSale} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2">
                <AlertCircle size={16} />
                Void Sale
              </button>
              <div className="text-right">
                <span className="text-[#5e6d55]">Total Amount: </span>
                <span className="text-xl font-semibold ml-2">
                  ${transaction.amount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminPasswordModal isOpen={showAdminModal} onClose={() => setShowAdminModal(false)} onConfirm={handleAdminConfirm} action={adminAction.type === "void_sale" ? "void this sale" : "remove this item"} />
    </>;
};