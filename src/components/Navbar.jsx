import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, ArrowLeft } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-bg/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Left: Branding */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            id="nav-logo"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <span className="font-serif text-xl font-bold tracking-tight">
              Catalog<span className="text-primary">X</span>
            </span>
          </Link>

          {!isHome && (
            <Link
              to="/"
              className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} />
              Return
            </Link>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="flex items-center gap-3 px-4 py-1.5 border border-border rounded-full hover:bg-surface hover:border-primary transition-all duration-300 text-muted hover:text-primary group shadow-sm active:scale-95"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <>
                <Sun
                  size={14}
                  className="group-hover:rotate-12 transition-transform"
                />
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">
                  Light
                </span>
              </>
            ) : (
              <>
                <Moon
                  size={14}
                  className="group-hover:-rotate-12 transition-transform"
                />
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">
                  Dark
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
