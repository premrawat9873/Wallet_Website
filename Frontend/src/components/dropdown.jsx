import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function DropdownButton() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
    const handleLogout = () => {
    localStorage.removeItem("token");  // clear token
    navigate("/signin");               // redirect to signin
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-10 h-10 rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        PR

          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.094l3.71-3.862a.75.75 0 111.08 1.04l-4.25 4.425a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
 
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        >
          <div className="py-1">
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => navigate('/signin')}
            >
              Profile
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => navigate('/signup')}
            >
              Update
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={handleLogout}
            >
            Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
