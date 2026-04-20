import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Logo from "@/assets/logo.png";
import { Topbar } from "./Topbar";
import { Menu, X, Search, Mail, Phone } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaVimeoV, FaLinkedinIn } from "react-icons/fa"; 

// ✅ RTK Query Auth
import {
  authApi,
  useLogoutMutation,
  // useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { FaXTwitter } from "react-icons/fa6";

const navlink = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/tours", label: "Tours", role: "PUBLIC" }
];
 

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const navigate = useNavigate();

  // ✅ Auth state from first code
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const user = data?.data;

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
    navigate("/");
  };

  return (
    <header className="animate-fade-in m-0">
      <Topbar />

      <nav className="mx-auto pr-4 flex justify-between items-center">
        {/* Logo */}
        <div className="bg-[#081e2a] py-8 px-18 [clip-path:polygon(0_0,80%_0,100%_100%,0_100%)]">
          <img src={Logo}alt="logo" className="w-32 h-auto" />
        </div>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex gap-5 px-3">
          {navlink.map((link, index) => {
          
            return (
              <button
                key={index}
                onClick={() => navigate(link.href)}
                className="font-jakarta font-semibold text-[16px] px-3 hover:text-[#4da528] rounded-full duration-300 text-[#081e7d] dark:text-white"
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* ===== Right Section ===== */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-[#081e7d] dark:text-white hover:text-[#4da528]">
            <Search size={20} />
          </button>

          <ModeToggle />

          {/* 🔥 AUTH UI - Applied from first code logic */}
          <div className="flex items-center gap-3">
            {user?.email ? (
              <>
                <span className="text-sm text-gray-600 dark:text-gray-300 hidden lg:block">
                  {user.email}
                </span>

                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="text-sm"
                >
                  Logout
                </Button>
              </>
            ) : (
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
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="bg-[#ff970d] p-2 rounded-lg"
          >
            <Menu size={22} className="text-white" />
          </button>
        </div>

        {/* ===== Mobile ===== */}
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

      {/* ===== Mobile Sidebar ===== */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 animate-in slide-in-from-right duration-300">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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
                  <FaXTwitter  className="text-[#4da528] hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#4da528]/20 flex items-center justify-center hover:bg-[#4da528] hover:text-white transition-colors">
                  <FaVimeoV className="text-[#4da528] hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#4da528]/20 flex items-center justify-center hover:bg-[#4da528] hover:text-white transition-colors">
                  <FaLinkedinIn className="text-[#4da528] hover:text-white" />
                </a>
              </div>

              {/* Mobile Menu Login/Logout Buttons - Updated with first code logic */}
              <div className="flex flex-col gap-3 mt-2">
                {user?.email ? (
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full text-sm"
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button
                      asChild
                      className="w-full bg-[#ff970d] hover:bg-[#e08600] text-white"
                    >
                      <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-[#4da528] hover:bg-[#ff970d] text-white"
                    >
                      <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                        Register
                      </Link>
                    </Button>
                  </>
                )}
              </div>

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