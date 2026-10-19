import { useState } from "react";
import { Button } from "antd";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/product", label: "PRODUCT" },
    { to: "/contact", label: "CONTACT" },
  ];

  const linkClass = ({ isActive }) =>
    `block py-3 font-semibold transition-colors ${
      isActive ? "text-[#52734D]" : "text-[#183D2B] hover:text-[#52734D]"
    }`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-[100] w-full bg-white/95 shadow-md backdrop-blur-md">
      <div className="flex h-20 items-center justify-between gap-3 px-3 sm:px-5 lg:px-10">
        <Link to="/" className="shrink-0" onClick={closeMenu}>
          <img
            className="w-28 sm:w-36 lg:w-52"
            src="/download.png"
            alt="Montio logo"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 font-bold text-[#183D2B] xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${
                      isActive ? "text-[#52734D]" : "hover:text-[#52734D]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 lg:flex-none lg:gap-5">
          <div className="relative flex h-9 min-w-0 max-w-105 flex-1 items-center gap-2 rounded-xl bg-gray-50 px-2 shadow-sm sm:h-10 lg:w-105 lg:flex-none">
            <IoIosSearch className="shrink-0 text-[#183D2B]" />
            <input
              type="search"
              placeholder="Search..."
              className="h-full w-full min-w-0 bg-transparent text-sm outline-none"
            />
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <Link to="/login">
              <Button type="primary" size="small" className="sm:!h-8">
                Login
              </Button>
            </Link>

            <Link to="/register">
              <Button size="small" className="sm:!h-8">
                Sign in
              </Button>
            </Link>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#183D2B] transition-colors hover:bg-[#52734D]/10 sm:ml-1 lg:hidden"
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 pb-5 pt-2 shadow-lg lg:hidden">
          <nav>
            <ul className="flex flex-col divide-y divide-gray-100">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={linkClass}
                    end={link.to === "/"}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 flex gap-3 sm:hidden">
            <Link to="/login" onClick={closeMenu} className="flex-1">
              <Button type="primary" block className="!h-10 !bg-[#183D2B]">
                Login
              </Button>
            </Link>

            <Link to="/register" onClick={closeMenu} className="flex-1">
              <Button block className="!h-10 !border-[#183D2B] !text-[#183D2B]">
                Sign in
              </Button>
            </Link>
          </div>

          <div className="mt-4 hidden gap-3 sm:flex lg:hidden">
            <Link to="/login" onClick={closeMenu}>
              <Button type="primary" className="!bg-[#183D2B]">
                Login
              </Button>
            </Link>

            <Link to="/register" onClick={closeMenu}>
              <Button className="!border-[#183D2B] !text-[#183D2B]">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
