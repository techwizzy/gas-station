import React, { useState } from "react";
import { ShoppingBag, Plus, Search, CreditCard, Trash2, Receipt, Calendar, Wallet, CreditCard as CreditCardIcon, Smartphone, ChevronDown, Download, BoxIcon } from "lucide-react";
import { TransactionDetailsModal } from "../TransactionDetailsModal";
export const Shop = () => {
  const [showTransactions, setShowTransactions] = useState(false);
  return <div className="flex-1 bg-[#f7faf7]">
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#001e00]">Shop Management</h2>
          <button onClick={() => setShowTransactions(!showTransactions)} className="px-4 py-2 bg-white border border-[#e4ebe4] rounded-lg hover:border-[#14a800] text-[#14a800] flex items-center gap-2">
            {showTransactions ? "Show POS" : "View Transactions"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard icon={<ShoppingBag />} title="Today's Sales" value="$1,234.50" trend="+15.3%" />
          <StatCard icon={<Receipt />} title="Total Transactions" value="48" trend="+8.2%" />
          <StatCard icon={<CreditCard />} title="Average Sale" value="$25.70" trend="+3.7%" />
        </div>
      </div>
      <div className="bg-white flex-1">
        {showTransactions ? <TransactionHistory /> : <POSSystem />}
      </div>
    </div>;
};
const StatCard = ({
  icon,
  title,
  value,
  trend
}) => {
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="text-blue-600">{icon}</div>
        <span className="text-green-600 text-sm">{trend}</span>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>;
};
const TransactionHistory = () => {
  const [dateRange, setDateRange] = useState({
    start: "",
    end: ""
  });
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  return <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <div>
            <label className="block text-sm text-[#5e6d55] mb-1">
              Start Date
            </label>
            <input type="date" className="border border-[#e4ebe4] rounded-lg p-2" value={dateRange.start} onChange={e => setDateRange({
            ...dateRange,
            start: e.target.value
          })} />
          </div>
          <div>
            <label className="block text-sm text-[#5e6d55] mb-1">
              End Date
            </label>
            <input type="date" className="border border-[#e4ebe4] rounded-lg p-2" value={dateRange.end} onChange={e => setDateRange({
            ...dateRange,
            end: e.target.value
          })} />
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-[#e4ebe4] rounded-lg hover:border-[#14a800] text-[#14a800]">
          <Download size={16} />
          Export
        </button>
      </div>
      <div className="bg-white rounded-lg border border-[#e4ebe4]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e4ebe4] bg-[#f7faf7]">
              <th className="text-left p-4 text-[#5e6d55] font-medium">
                Date & Time
              </th>
              <th className="text-left p-4 text-[#5e6d55] font-medium">
                Transaction ID
              </th>
              <th className="text-left p-4 text-[#5e6d55] font-medium">
                Items
              </th>
              <th className="text-left p-4 text-[#5e6d55] font-medium">
                Payment Method
              </th>
              <th className="text-right p-4 text-[#5e6d55] font-medium">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => <tr key={transaction.id} className="border-b border-[#e4ebe4] hover:bg-[#f7faf7] cursor-pointer" onClick={() => setSelectedTransaction(transaction)}>
                <td className="p-4">{transaction.datetime}</td>
                <td className="p-4">#{transaction.id}</td>
                <td className="p-4">{transaction.items}</td>
                <td className="p-4">{transaction.paymentMethod}</td>
                <td className="p-4 text-right">
                  ${transaction.amount.toFixed(2)}
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
      <TransactionDetailsModal isOpen={selectedTransaction !== null} onClose={() => setSelectedTransaction(null)} transaction={selectedTransaction} />
    </div>;
};
const PaymentModal = ({
  isOpen,
  onClose,
  total,
  onComplete
}) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const paymentMethods = [{
    id: "cash",
    name: "BoxIcon",
    icon: <div size={20} />
  }, {
    id: "credit",
    name: "Credit Card",
    icon: <CreditCardIcon size={20} />
  }, {
    id: "debit",
    name: "Debit Card",
    icon: <CreditCardIcon size={20} />
  }, {
    id: "mobile",
    name: "Mobile Payment",
    icon: <Smartphone size={20} />
  }];
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <h3 className="text-xl font-semibold mb-4">Complete Payment</h3>
        <div className="space-y-3 mb-6">
          {paymentMethods.map(method => <button key={method.id} className={`w-full p-4 rounded-lg border flex items-center gap-3 transition-colors ${selectedMethod === method.id ? "border-[#14a800] bg-[#14a800]/5" : "border-[#e4ebe4] hover:border-[#14a800]"}`} onClick={() => setSelectedMethod(method.id)}>
              {method.icon}
              <span>{method.name}</span>
            </button>)}
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg">Total Amount:</span>
          <span className="text-2xl font-semibold">${total.toFixed(2)}</span>
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 px-4 py-2 border border-[#e4ebe4] rounded-lg hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={() => {
          if (selectedMethod) onComplete(selectedMethod);
        }} disabled={!selectedMethod} className="flex-1 px-4 py-2 bg-[#14a800] text-white rounded-lg hover:bg-[#14a800]/90 disabled:opacity-50">
            Complete Payment
          </button>
        </div>
      </div>
    </div>;
};
const POSSystem = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [dateRange, setDateRange] = useState({
    start: "",
    end: ""
  });
  const [selectedMethod, setSelectedMethod] = useState(null);
  const addToCart = product => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? {
        ...item,
        quantity: item.quantity + 1
      } : item));
    } else {
      setCart([...cart, {
        ...product,
        quantity: 1
      }]);
    }
  };
  const removeFromCart = productId => {
    setCart(cart.filter(item => item.id !== productId));
  };
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item => item.id === productId ? {
      ...item,
      quantity
    } : item));
  };
  const handlePaymentComplete = method => {
    console.log(`Payment completed with ${method}`);
    setShowPayment(false);
    setCart([]); // Clear cart after successful payment
  };
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <div className="flex h-[calc(100vh-240px)]">
      <div className="flex-1 p-6 border-r border-[#e4ebe4]">
        <div className="mb-6">
          <div className="relative">
            <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 border border-[#e4ebe4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14a800] focus:border-transparent" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            <Search className="absolute left-3 top-2.5 text-[#5e6d55]" size={20} />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-2 mb-4">
            {["All", "Snacks", "Drinks", "Automotive", "Others"].map(category => <button key={category} className="px-4 py-2 rounded-lg bg-white border border-[#e4ebe4] hover:border-[#14a800] hover:text-[#14a800] transition-colors">
                  {category}
                </button>)}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => <div key={product.id} className="border border-[#e4ebe4] rounded-lg p-4 cursor-pointer hover:border-[#14a800] transition-colors bg-white" onClick={() => addToCart(product)}>
              <div className="text-center mb-2">
                <img src={product.image} alt={product.name} className="w-20 h-20 mx-auto mb-2" />
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </div>)}
        </div>
      </div>
      <div className="w-96 bg-white border-l border-[#e4ebe4] flex flex-col">
        <div className="p-6 border-b border-[#e4ebe4]">
          <h3 className="text-lg font-semibold text-[#001e00] mb-2">
            Current Sale
          </h3>
          <p className="text-sm text-[#5e6d55]">
            Select products to add to cart
          </p>
        </div>
        <div className="flex-1 overflow-auto p-6">
          {cart.map(item => <div key={item.id} className="flex items-center gap-4 mb-4 bg-[#f7faf7] p-3 rounded-lg">
              <img src={item.image} alt={item.name} className="w-12 h-12" />
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 border rounded" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button className="px-2 py-1 border rounded" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
                <button className="text-red-500 ml-2" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>)}
        </div>
        <div className="p-6 border-t border-[#e4ebe4] bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-medium text-[#001e00]">Total</span>
            <span className="text-xl font-semibold text-[#001e00]">
              ${total.toFixed(2)}
            </span>
          </div>
          <button onClick={() => setShowPayment(true)} className="w-full bg-[#14a800] text-white py-3 rounded-lg hover:bg-[#14a800]/90 flex items-center justify-center gap-2">
            <Wallet size={20} />
            Process Payment
          </button>
        </div>
      </div>
      <PaymentModal isOpen={showPayment} onClose={() => setShowPayment(false)} total={total} onComplete={handlePaymentComplete} />
    </div>;
};
const products = [{
  id: 1,
  name: "Coca Cola",
  price: 1.99,
  category: "Drinks",
  image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&h=200&fit=crop"
}, {
  id: 2,
  name: "Lay's Classic",
  price: 2.49,
  category: "Snacks",
  image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=200&h=200&fit=crop"
}, {
  id: 3,
  name: "Mobil 1 Oil",
  price: 24.99,
  category: "Automotive",
  image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=200&fit=crop"
}, {
  id: 4,
  name: "Red Bull",
  price: 3.99,
  category: "Drinks",
  image: "https://images.unsplash.com/photo-1551975620-5f8b3f782b9c?w=200&h=200&fit=crop"
}, {
  id: 5,
  name: "Snickers",
  price: 1.49,
  category: "Snacks",
  image: "https://images.unsplash.com/photo-1600070077671-5d1769789f6e?w=200&h=200&fit=crop"
}, {
  id: 6,
  name: "Windshield Fluid",
  price: 4.99,
  category: "Automotive",
  image: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=200&h=200&fit=crop"
}];
const transactions = [{
  id: "TRX001",
  datetime: "2024-01-20 14:30",
  items: "Coca Cola, Chips, Snickers",
  paymentMethod: "Credit Card",
  amount: 8.47
}, {
  id: "TRX002",
  datetime: "2024-01-20 15:15",
  items: "Motor Oil, Windshield Fluid",
  paymentMethod: "BoxIcon",
  amount: 29.98
}, {
  id: "TRX003",
  datetime: "2024-01-20 16:00",
  items: "Red Bull, Snickers",
  paymentMethod: "Mobile Payment",
  amount: 5.48
}];