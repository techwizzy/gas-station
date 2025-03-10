import React, { useState } from "react";
import { Wrench, Clock, Calendar, Plus, Search, Filter, ChevronRight } from "lucide-react";
import { ServiceForm } from "../ServiceForm";
import { ServiceScheduleForm } from "../ServiceScheduleForm";
import { ScheduleCalendar } from "../ScheduleCalendar";
export const AutoCare = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const handleSaveService = service => {
    // Handle saving the service
    console.log("Save service:", service);
  };
  const handleSaveSchedule = schedule => {
    // Handle saving the schedule
    console.log("Save schedule:", schedule);
  };
  return <div className="flex-1 p-8 bg-[#f7faf7]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#001e00]">Auto Care</h2>
        <button onClick={() => setShowServiceForm(true)} className="px-4 py-2 bg-[#14a800] text-white rounded-lg flex items-center gap-2 hover:bg-[#14a800]/90">
          <Plus size={16} />
          New Service
        </button>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={<Wrench />} title="Active Services" value="12" trend="+3 this week" />
        <StatCard icon={<Clock />} title="Avg. Service Time" value="2.5 hrs" trend="-30 min" />
        <StatCard icon={<Calendar />} title="Scheduled Today" value="8" trend="4 completed" />
      </div>
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="flex border-b">
          <button className={`px-6 py-3 font-medium ${activeTab === "services" ? "text-[#14a800] border-b-2 border-[#14a800]" : "text-[#5e6d55]"}`} onClick={() => setActiveTab("services")}>
            Services
          </button>
          <button className={`px-6 py-3 font-medium ${activeTab === "schedule" ? "text-[#14a800] border-b-2 border-[#14a800]" : "text-[#5e6d55]"}`} onClick={() => setActiveTab("schedule")}>
            Schedule
          </button>
        </div>
      </div>
      {activeTab === "services" ? <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Available Services</h3>
                <div className="flex gap-2">
                  <div className="relative">
                    <input type="text" placeholder="Search services..." className="pl-9 pr-4 py-2 border border-[#e4ebe4] rounded-lg" />
                    <Search className="absolute left-3 top-2.5 text-[#5e6d55]" size={18} />
                  </div>
                  <button className="p-2 border border-[#e4ebe4] rounded-lg">
                    <Filter size={18} className="text-[#5e6d55]" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {services.map(service => <ServiceCard key={service.id} service={service} />)}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Today's Schedule</h3>
            <div className="space-y-4">
              {schedule.map(appointment => <AppointmentCard key={appointment.id} appointment={appointment} />)}
            </div>
          </div>
        </div> : <ScheduleCalendar appointments={[{
      id: 1,
      day: 15,
      service: "Oil Change"
    }, {
      id: 2,
      day: 15,
      service: "Tire Rotation"
    }, {
      id: 3,
      day: 16,
      service: "Brake Service"
    }]} onSelectSlot={() => setShowScheduleForm(true)} />}
      <ServiceForm isOpen={showServiceForm} onClose={() => setShowServiceForm(false)} onSave={handleSaveService} />
      <ServiceScheduleForm isOpen={showScheduleForm} onClose={() => setShowScheduleForm(false)} onSave={handleSaveSchedule} />
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
        <div className="text-[#14a800]">{icon}</div>
        <span className="text-[#5e6d55] text-sm">{trend}</span>
      </div>
      <h3 className="text-[#5e6d55] text-sm mb-1">{title}</h3>
      <p className="text-2xl font-semibold text-[#001e00]">{value}</p>
    </div>;
};
const ServiceCard = ({
  service
}) => {
  return <div className="flex items-center justify-between p-4 border border-[#e4ebe4] rounded-lg hover:border-[#14a800] transition-colors">
      <div>
        <h4 className="font-medium text-[#001e00]">{service.name}</h4>
        <p className="text-sm text-[#5e6d55]">{service.duration}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-medium text-[#001e00]">${service.price}</span>
        <ChevronRight size={18} className="text-[#5e6d55]" />
      </div>
    </div>;
};
const AppointmentCard = ({
  appointment
}) => {
  return <div className="p-4 border border-[#e4ebe4] rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-[#001e00]">{appointment.service}</h4>
        <span className={`px-2 py-1 rounded-full text-xs ${appointment.status === "In Progress" ? "bg-[#14a800]/10 text-[#14a800]" : "bg-[#1f57c3]/10 text-[#1f57c3]"}`}>
          {appointment.status}
        </span>
      </div>
      <p className="text-sm text-[#5e6d55] mb-2">{appointment.customer}</p>
      <div className="flex items-center gap-2 text-sm text-[#5e6d55]">
        <Clock size={14} />
        <span>{appointment.time}</span>
      </div>
    </div>;
};
const services = [{
  id: 1,
  name: "Oil Change",
  duration: "30 mins",
  price: 39.99
}, {
  id: 2,
  name: "Tire Rotation",
  duration: "45 mins",
  price: 29.99
}, {
  id: 3,
  name: "Brake Service",
  duration: "1.5 hrs",
  price: 149.99
}, {
  id: 4,
  name: "Engine Tune-up",
  duration: "2 hrs",
  price: 199.99
}, {
  id: 5,
  name: "AC Service",
  duration: "1 hr",
  price: 89.99
}];
const schedule = [{
  id: 1,
  service: "Oil Change",
  customer: "John Smith",
  time: "10:00 AM",
  status: "Completed"
}, {
  id: 2,
  service: "Brake Service",
  customer: "Sarah Johnson",
  time: "11:30 AM",
  status: "In Progress"
}, {
  id: 3,
  service: "Tire Rotation",
  customer: "Mike Davis",
  time: "2:00 PM",
  status: "Scheduled"
}];