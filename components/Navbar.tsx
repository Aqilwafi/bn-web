"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  const linkClass = "hover:text-teal-600 transition-colors duration-200 font-semibold";

  return (
  <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${activeStyle}`}>
    <div className="container max-w-full mx-auto px-6 md:px-12 py-3 md:py-4 flex justify-between items-center">
      
      {/* === LOGO & TEXT === */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo_lpi.png"
          alt="Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <span className="font-bold tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
          Baitun Na'im Full Day School
        </span>
      </Link>

      {/* === DESKTOP MENU === */}
      <div className="hidden md:flex space-x-6 items-center text-md tracking-wide">
        <Link href="/" className={linkClass}>Home</Link>
        <Link href="/lpi" className={linkClass}>LPI</Link>
        <Link href="/tpa" className={linkClass}>TPA</Link>
        <Link href="/kb" className={linkClass}>KB</Link>
        <Link href="/tk" className={linkClass}>TK</Link>
        <Link href="/mi" className={linkClass}>MI</Link>
        <Link href="/publikasi" className={linkClass}>Publikasi</Link>
        <Link href="/contact" className={linkClass}>Hubungi Kami</Link>
        {/* External link */}
        <a href="https://spmbbaitunnaim.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
          SPMB
        </a>
      </div>

      {/* === MOBILE MENU TOGGLE === */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {/* === MOBILE MENU === */}
    {open && (
      <div
        className={`md:hidden px-6 py-4 space-y-3 transition-all duration-300
          ${scrolled || !transparent
            ? "bg-white text-black shadow-md"
            : "bg-black/70 text-white backdrop-blur-sm py-4"
          }`}
      >
        <Link href="/" onClick={() => setOpen(false)} className={linkClass + " block"}>Home</Link>
        <Link href="/lpi" onClick={() => setOpen(false)} className={linkClass + " block"}>LPI</Link>
        <Link href="/tpa" onClick={() => setOpen(false)} className={linkClass + " block"}>TPA</Link>
        <Link href="/kb" onClick={() => setOpen(false)} className={linkClass + " block"}>KB</Link>
        <Link href="/tk" onClick={() => setOpen(false)} className={linkClass + " block"}>TK</Link>
        <Link href="/mi" onClick={() => setOpen(false)} className={linkClass + " block"}>MI</Link>
        <Link href="/publikasi" onClick={() => setOpen(false)} className={linkClass + " block"}>Publikasi</Link>
        <Link href="/contact" onClick={() => setOpen(false)} className={linkClass + " block"}>Hubungi Kami</Link>
        {/* External link */}
        <a
          href="https://spmbbaitunnaim.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass + " block"}
          onClick={() => setOpen(false)}
        >
          SPMB
        </a>
      </div>
    )}
  </nav>
);
}
