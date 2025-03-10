import React from "react";
import { Settings as SettingsIcon, User, Building2, CreditCard, Bell, Shield, ChevronRight } from "lucide-react";
export const Settings = () => {
  return <div className="flex-1 p-8 bg-[#f7faf7]">
      <h2 className="text-2xl font-bold text-[#001e00] mb-6">Settings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-[#e4ebe4]">
              <h3 className="text-lg font-semibold text-[#001e00]">
                Business Settings
              </h3>
              <p className="text-sm text-[#5e6d55]">
                Manage your business information and preferences
              </p>
            </div>
            <div className="divide-y divide-[#e4ebe4]">
              <SettingsItem icon={<Building2 />} title="Business Information" description="Update your business details and contact information" />
              <SettingsItem icon={<CreditCard />} title="Payment Settings" description="Manage payment methods and transaction settings" />
              <SettingsItem icon={<Bell />} title="Notifications" description="Configure your notification preferences" />
              <SettingsItem icon={<Shield />} title="Security" description="Manage security settings and permissions" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm mt-6">
            <div className="p-6 border-b border-[#e4ebe4]">
              <h3 className="text-lg font-semibold text-[#001e00]">
                System Settings
              </h3>
              <p className="text-sm text-[#5e6d55]">
                Configure system-wide preferences
              </p>
            </div>
            <div className="divide-y divide-[#e4ebe4]">
              {systemSettings.map(setting => <div key={setting.id} className="p-6 flex items-center justify-between hover:bg-[#f7faf7]">
                  <div className="flex-1">
                    <h4 className="font-medium text-[#001e00]">
                      {setting.name}
                    </h4>
                    <p className="text-sm text-[#5e6d55]">
                      {setting.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#5e6d55]">
                      {setting.value}
                    </span>
                    <button className="text-[#5e6d55] hover:text-[#001e00]">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm h-fit">
          <div className="p-6 border-b border-[#e4ebe4]">
            <h3 className="text-lg font-semibold text-[#001e00]">
              User Management
            </h3>
            <p className="text-sm text-[#5e6d55]">
              Manage user accounts and roles
            </p>
          </div>
          <div className="p-6 space-y-4">
            {users.map(user => <div key={user.id} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#14a800] flex items-center justify-center text-white">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-[#001e00]">{user.name}</h4>
                  <p className="text-sm text-[#5e6d55]">{user.role}</p>
                </div>
                <button className="text-[#5e6d55] hover:text-[#001e00]">
                  <ChevronRight size={18} />
                </button>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
const SettingsItem = ({
  icon,
  title,
  description
}) => {
  return <div className="p-6 flex items-center hover:bg-[#f7faf7]">
      <div className="w-10 h-10 rounded-lg bg-[#14a800]/10 flex items-center justify-center text-[#14a800] mr-4">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-[#001e00]">{title}</h4>
        <p className="text-sm text-[#5e6d55]">{description}</p>
      </div>
      <button className="text-[#5e6d55] hover:text-[#001e00]">
        <ChevronRight size={18} />
      </button>
    </div>;
};
const systemSettings = [{
  id: 1,
  name: "Time Zone",
  description: "Set your local time zone",
  value: "UTC-5 (Eastern Time)"
}, {
  id: 2,
  name: "Currency",
  description: "Set your primary currency",
  value: "USD ($)"
}, {
  id: 3,
  name: "Language",
  description: "Choose your preferred language",
  value: "English"
}];
const users = [{
  id: 1,
  name: "John Smith",
  role: "Administrator"
}, {
  id: 2,
  name: "Sarah Johnson",
  role: "Manager"
}, {
  id: 3,
  name: "Mike Davis",
  role: "Staff"
}];