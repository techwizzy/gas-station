import React, { useState } from "react";
import { KeyRound, X } from "lucide-react";
export const AdminPasswordModal = ({
  isOpen,
  onClose,
  onConfirm,
  action
}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = () => {
    // In a real app, this would be validated against a backend
    if (password === "admin123") {
      // This is just for demo purposes
      onConfirm();
      setPassword("");
      setError("");
    } else {
      setError("Invalid admin password");
    }
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Admin Authorization Required
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <p className="text-[#5e6d55] mb-4">
          Admin password is required to {action}.
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Admin Password
          </label>
          <div className="relative">
            <input type="password" className="w-full border border-[#e4ebe4] rounded-lg p-2 pr-10" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter admin password" />
            <KeyRound className="absolute right-3 top-2.5 text-[#5e6d55]" size={20} />
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 px-4 py-2 border border-[#e4ebe4] rounded-lg hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={handleSubmit} className="flex-1 px-4 py-2 bg-[#14a800] text-white rounded-lg hover:bg-[#14a800]/90">
            Confirm
          </button>
        </div>
      </div>
    </div>;
};