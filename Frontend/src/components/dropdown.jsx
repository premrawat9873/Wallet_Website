import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from "recoil";
import { tokenState } from "./atoms/tokenAtom"; // Import tokenState

export default function DropdownButton() {
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenState); // Add this line
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
    localStorage.removeItem("token");  // Clear token from localStorage
    setToken(null);                   // Update Recoil state - THIS IS THE KEY FIX
    setIsOpen(false);                 // Close dropdown
    navigate("/signin");              // Redirect to signin
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
        {/* You had an incomplete SVG here - adding a simple dropdown arrow */}
        <svg 
          className="ml-1 h-3 w-3" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.094l3.71-3.862a.75.75 0 111.08 1.04l-4.25 4.425a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        >
          <div className="py-1">
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => {
                setIsOpen(false);
                navigate('/profile'); // Changed from '/signin' to '/profile' - makes more sense
              }}
            >
              Profile
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => {
                setIsOpen(false);
                navigate('/update'); // Changed from '/signup' to '/update' - makes more sense
              }}
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