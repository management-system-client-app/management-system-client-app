import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Topbar } from "./Topbar";
import { Menu, X, Search, Globe, Mail, Phone, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaVimeoV } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";  

const navlink = [
  { href: "/", label: "Home" },
  { href: "/tour", label: "Tour" },
  { href: "/destination", label: "Destination" },
  { href: "/blog", label: "Blog" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const navigate = useNavigate();
  const location = useLocation();

  const languages = [
    { code: "EN", name: "English" },
    { code: "BN", name: "Bangla" },
    { code: "HI", name: "Hindi" },
  ];

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
    { code: "INR", symbol: "₹", name: "Indian Rupee" },
  ];

  const isContactPage = location.pathname === "/contact";

  return (
    <header className="animate-fade-in m-0">
      <Topbar />
      <nav className="mx-auto pr-4 flex justify-between items-center">
        <div className="bg-[#081e2a] py-8 px-18 [clip-path:polygon(0_0,80%_0,100%_100%,0_100%)]">
          <img src="/logo.png" alt="logo" className="w-32 h-auto" />
        </div>

        <div className="hidden md:flex gap-5 px-3">
          {navlink.map((link, index) => (
            <button
              key={index}
              onClick={() => navigate(link.href)}
              className="font-jakarta font-semibold text-[16px] px-3 hover:text-[#4da528] rounded-full duration-300 text-[#081e7d] tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsLangOpen(!isLangOpen);
                setIsCurrencyOpen(false);
              }}
              className="flex items-center gap-1 text-[#081e7d] hover:text-[#4da528] transition-colors"
            >
              <Globe size={18} className="text-[#4da528]" />
              <span className="text-sm font-semibold">{selectedLang}</span>
              <ChevronDown size={14} className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
            </button>
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 min-w-[140px] border">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.name);
                      setIsLangOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#4da528] hover:text-white transition-colors"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsCurrencyOpen(!isCurrencyOpen);
                setIsLangOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-semibold text-[#081e7d] hover:text-[#4da528] transition-colors"
            >
              <span>{selectedCurrency}</span>
              <ChevronDown size={14} className={`transition-transform ${isCurrencyOpen ? "rotate-180" : ""}`} />
            </button>
            {isCurrencyOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 min-w-[120px] border">
                {currencies.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      setSelectedCurrency(curr.code);
                      setIsCurrencyOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#4da528] hover:text-white transition-colors"
                  >
                    {curr.code} - {curr.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="text-[#081e7d] hover:text-[#4da528] transition-colors">
            <Search size={20} />
          </button>

          <ModeToggle />

          {/* Conditional Login/Register - ONLY on Contact Page */}
          {isContactPage && (
            <div className="flex items-center gap-3">
              <Button 
                className="bg-[#ff970d] hover:bg-[#e08600] text-white"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
              <Button 
                className="bg-[#4da528] hover:bg-[#ff970d] text-white"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </div>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="bg-[#ff970d] hover:bg-[#e08600] p-2 rounded-lg transition-colors"
          >
            <Menu size={22} className="text-white" />
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="bg-[#ff970d] p-2 rounded-lg"
          >
            <Menu size={22} className="text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 animate-in slide-in-from-right duration-300">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <div className="p-6 pt-16 flex flex-col gap-6">
              <div className="flex justify-center mb-4">
                <img src="/logo.png" alt="logo" className="w-28 h-auto" />
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                The world's first and largest digital market for crypto collectibles and non-fungible
              </p>

              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Mail size={18} className="text-[#4da528]" />
                  <span className="text-sm">Info@webmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Phone size={18} className="text-[#4da528]" />
                  <span className="text-sm">684 555-0102 490</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <span className="text-sm">6391 Elgin St. Celina, NYC 10299</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a href="#" className="w-10 h-10 rounded-full bg-[#4da528]/20 flex items-center justify-center hover:bg-[#4da528] hover:text-white transition-colors">
                  <FaFacebookF className="text-[#4da528] hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#4da528]/20 flex items-center justify-center hover:bg-[#4da528] hover:text-white transition-colors">
                  <FaXTwitter className="text-[#4da528] hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#4da528]/20 flex items-center justify-center hover:bg-[#4da528] hover:text-white transition-colors">
                  <FaVimeoV className="text-[#4da528] hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#4da528]/20 flex items-center justify-center hover:bg-[#4da528] hover:text-white transition-colors">
                  <FaLinkedinIn className="text-[#4da528] hover:text-white" />
                </a>
              </div>

              {/* Mobile menu teo conditional buttons */}
              {isContactPage && (
                <div className="flex flex-col gap-3 mt-2">
                  <Button 
                    className="w-full bg-[#ff970d] hover:bg-[#e08600] text-white"
                    onClick={() => {
                      navigate("/login");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="w-full bg-[#4da528] hover:bg-[#ff970d] text-white"
                    onClick={() => {
                      navigate("/register");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Register
                  </Button>
                </div>
              )}

              <div className="flex flex-col gap-3 mt-4">
                {navlink.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      navigate(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-center py-2 text-gray-700 dark:text-gray-300 hover:text-[#4da528] font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};