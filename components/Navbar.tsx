"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // === STATE LOGIN DUMMY === //
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  // ubah jadi true untuk testing

  // === SCROLL LISTENER === //
  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  // === DINAMIS STYLE === //
  const activeStyle = transparent
    ? scrolled
      ? "bg-white shadow-md text-black"
      : "bg-transparent text-white"
    : "bg-white shadow-md text-black";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${activeStyle}`}
    >
      <div className="container max-w-full mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* === LOGO & TEXT === */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_lpi.jpg"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <span className="font-bold text-xl tracking-wide">
            <strong>Baitunnaim</strong>
          </span>
        </Link>

        {/* === DESKTOP MENU === */}
        <div className="hidden md:flex space-x-6 font-medium items-center px-4">
          <Link href="/accommodation" className="hover:opacity-70 transition">
            Home
          </Link>
          <Link href="/" className="hover:opacity-70 transition">
            LPI
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition">
            TPA
          </Link>
          <Link href="/accommodation" className="hover:opacity-70 transition">
            KB
          </Link>
          <Link href="/about" className="hover:opacity-70 transition">
            TK
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition">
            MI
          </Link>
          <Link href="/accommodation" className="hover:opacity-70 transition">
            PUBLIKASI
          </Link>
          <Link href="/about" className="hover:opacity-70 transition">
            HUBUNGI KAMI
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition">
            SPMB
          </Link>          
        </div>

        {/* === MOBILE MENU TOGGLE === */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === MOBILE MENU === */}
      {open && (
        <div
          className={`md:hidden px-4 pb-4 space-y-3 transition-all duration-300
            ${
              scrolled || !transparent
                ? "bg-white text-black shadow-md"
                : "bg-black/70 text-white backdrop-blur-sm py-4"
            }
          `}
        >
          <Link href="/accommodation" onClick={() => setOpen(false)} className="block">
            LPI
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            KB
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">
            TK
          </Link>
           <Link href="/accommodation" onClick={() => setOpen(false)} className="block">
            MI
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            PUBLIKASI
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">
            HUBUNGI KAMI
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">
            SPMB
          </Link>

        </div>
      )}
    </nav>
  );
}
