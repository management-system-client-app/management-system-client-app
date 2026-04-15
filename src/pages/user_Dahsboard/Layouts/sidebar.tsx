// src/pages/user_Dahsboard/Layouts/sidebat.tsx
import { LayoutDashboard, CalendarCheck, List, PlusSquare, Heart, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "My Booking", icon: CalendarCheck, path: "/booking" },
  { label: "My Listing", icon: List, path: "/listing" },
  { label: "Add Tour", icon: PlusSquare, path: "/add-tour" },
  { label: "My Favorites", icon: Heart, path: "/favorites" },
  { label: "My Profile", icon: User, path: "/profile" },
  { label: "Logout", icon: LogOut, path: "/logout" },
];

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-[260px] h-screen bg-[#071c2b] text-white flex flex-col">
      
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <img src="/logo.png" alt="logo" className="w-32" />
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-2 mt-6 px-4">
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-md text-left transition-all
                ${
                  i === 0
                    ? "bg-[#0d2a3a] text-white"
                    : "text-gray-300 hover:bg-[#0d2a3a] hover:text-white"
                }`}
            >
              <Icon size={18} className="text-[#4da528]" />
              <span className="text-[15px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};