// src/pages/user_Dahsboard/Layouts/navbar.tsx
import { Search, Bell, Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full bg-[#071c2b] px-6 py-4 flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        <Menu size={22} className="text-white cursor-pointer" />

        {/* Search */}
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
          <span className="cursor-pointer hover:text-[#4da528]">Home</span>
          <span className="cursor-pointer hover:text-[#4da528]">Tour</span>
          <span className="cursor-pointer hover:text-[#4da528]">Destination</span>
          <span className="cursor-pointer hover:text-[#4da528]">Blog</span>
          <span className="cursor-pointer hover:text-[#4da528]">Pages</span>
          <span className="cursor-pointer hover:text-[#4da528]">Dashboard</span>
          <span className="cursor-pointer hover:text-[#4da528]">Contact</span>
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
  );
};