import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation
import ToggleButton from "./ToggleButton"; // Assuming this is for the theme toggle

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar state
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleLogoClick = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const handleLoginClick = () => {
    navigate("/auth/login"); // ✅ Navigate to the login page
  };

  return (
    <div className="w-full bg-white shadow-md">
      <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src="https://imgs.search.brave.com/oZYPjK1Ng15jmvpQuFpYODALGUDnMyocOatW9U9oa_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcmVk/LWFuaW1lLXVjaGlo/YS1pdGFjaGktc3c2/ZHE2emw4ODByM2Rp/NS5qcGc"
            className="h-8 w-8 rounded-xl"
            alt="logo"
          />
          <span className="text-lg font-semibold text-blue-600">
            HairCoaction
          </span>
        </div>

        <nav className="hidden lg:flex gap-6 p-3 text-sm font-medium text-gray-700">
          <a
            href="/"
            className="px-3 py-1 rounded-md bg-blue-100 text-blue-700"
          >
            Home
          </a>
          <a href="/events" className="hover:text-blue-600 transition-colors">
            Events
          </a>
          <a
            href="/consultation"
            className="hover:text-blue-600 transition-colors"
          >
            Consultation
          </a>
          <a
            href="/community"
            className="hover:text-blue-600 transition-colors"
          >
            Community
          </a>
          <a href="education" className="hover:text-blue-600 transition-colors">
            Education
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={handleLoginClick} // ✅ Add click handler
            className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login/Register
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
