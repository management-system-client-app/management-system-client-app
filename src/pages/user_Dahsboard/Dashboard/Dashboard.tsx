// src/pages/user_Dahsboard/Dashboard/Dashboard.tsx
import { useState } from "react";
import { Sidebar } from "../Layouts/sidebar";
import { Footer } from "../Layouts/footer";
import {
  Search,
  Bell,
  Menu,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sidebar items (same list for dropdown)
const dashboardLinks = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "My Booking", path: "/booking" },
  { label: "My Listing", path: "/listing" },
  { label: "Add Tour", path: "/add-tour" },
  { label: "My Favorites", path: "/favorites" },
  { label: "My Profile", path: "/profile" },
];

export const Dashboard = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* ===== Navbar ===== */}
        <div className="w-full bg-[#071c2b] px-6 py-4 flex items-center justify-between">
          
          {/* Left */}
          <div className="flex items-center gap-4">
            <Menu size={22} className="text-white cursor-pointer" />

            <div className="flex items-center bg-[#0d2a3a] px-4 py-2 rounded-full w-[300px]">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search tours"
                className="bg-transparent outline-none text-sm text-white ml-2 w-full placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-white text-[15px] font-medium">

              <span onClick={() => navigate("/")} className="cursor-pointer hover:text-[#4da528]">
                Home
              </span>

              <span className="cursor-pointer hover:text-[#4da528]">
                Tour
              </span>

              <span className="cursor-pointer hover:text-[#4da528]">
                Destination
              </span>

              <span className="cursor-pointer hover:text-[#4da528]">
                Blog
              </span>

              {/* ===== Dashboard Dropdown ===== */}
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex items-center gap-1 hover:text-[#4da528]"
                >
                  Dashboard
                  <ChevronDown size={16} />
                </button>

                {openDropdown && (
                  <div className="absolute top-8 right-0 bg-white text-black w-48 rounded-md shadow-lg py-2 z-50">
                    {dashboardLinks.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          navigate(item.path);
                          setOpenDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <span className="cursor-pointer hover:text-[#4da528]">
                Contact
              </span>
            </nav>

            <Bell size={20} className="text-white cursor-pointer" />

            {/* Profile */}
            <img
              src="/user.jpg"
              alt="user"
              className="w-9 h-9 rounded-full object-cover border-2 border-white"
            />
          </div>
        </div>

        {/* ===== Main Content ===== */}
        <main className="bg-[#f5f7fa] flex-1 p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            There are many variations of passages of Lorem Ipsum
          </p>

          
        </main>

        {/* ===== Footer ===== */}
        <Footer />
      </div>
    </div>
  );
};