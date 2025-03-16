import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Avatar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full bg-blue-gray-50 text-blue-gray-900 dark:bg-blue-gray-900 dark:text-gray-200 py-4 px-6 fixed top-0 left-0 right-0 shadow-md z-50  ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left - Logo */}
        <h1 className="text-2xl font-bold">DHEERAONE</h1>

        {/* Center - Search Bar (Desktop) */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 w-40 md:w-56 transition-all"
          />
        </div>

        {/* Right - Navigation, Search (Mobile), and Profile */}
        <div className="flex items-center space-x-4">
          {/* Navigation - Visible on Desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/Home"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/FixedDepositPage"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              Fixed Deposit
            </Link>
            <Link
              to="/Contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Search Button */}
          <button
            className="md:hidden"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={24} />
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)}>
              <div className="flex items-center space-x-3">
                <Avatar
                  src="https://i.pravatar.cc/50"
                  alt="User Avatar"
                  size="sm"
                  className="border"
                />
                <Typography className="hidden md:block font-medium text-gray-700">
                  John Doe
                </Typography>
              </div>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 shadow-lg rounded-md z-50">
                <Link
                  to="/Settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  onClick={() => setProfileOpen(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="md:hidden px-6 py-2 bg-white dark:bg-gray-900 shadow-md">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      )}
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-4 flex flex-col space-y-3 z-50">
          <Link
            to="/Home"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/FixedDepositPage"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Fixed Deposit
          </Link>
          <Link
            to="/Contact"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}{" "}
    </header>
  );
}

export default Header;
