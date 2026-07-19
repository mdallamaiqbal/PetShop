"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PawPrint, LogIn, LogOut, Menu, X, LayoutDashboard } from "lucide-react";

import Image from "next/image";
import { Button } from "@heroui/react";
import avatar from "../../../public/assets/avatar.jpeg";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {data:session, isPending}=useSession()
  const pathname = usePathname();
  const user=session?.user
  const userRole = user?.role;

  const handleSignout = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Collection", href: "/collection" },
    { label: "About Us", href: "/about" },
    { 
      label: "Dashboard", 
      href: "/dashboard", 
      icon: <LayoutDashboard className="h-5 w-5" />, 
      allowedRoles: ["admin", "moderator"] 
    },
  ];

  const visibleMenuItems = menuItems.filter((item) => {
    if (!item.allowedRoles) return true;
    return userRole && item.allowedRoles.includes(userRole);
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Mobile Toggle & Logo */}
        <div className="flex items-center gap-4">
          <button
            className="sm:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <PawPrint className="h-7 w-7 text-emerald-600" />
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Pet<span className="text-emerald-600">Shop</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {visibleMenuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label} 
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center">
          {isPending ? (
            <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <Image src={user?.image || avatar} alt="avatar" className="rounded-full" width={32} height={32} />
              <Button onClick={handleSignout} variant="light" size="sm" className="text-slate-600">Logout</Button>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-all"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="sm:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-2">
          {visibleMenuItems.map((item) => (
            <Link key={item.label} href={item.href} className="block px-3 py-2 text-slate-700 hover:bg-emerald-50 rounded-md" onClick={toggleMenu}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}