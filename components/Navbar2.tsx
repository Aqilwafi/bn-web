"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar2() {
  const [active, setActive] = useState("Berita");

  const links = [
    "Berita",
    "Agenda",
    "Prestasi",
    "Profil Lulusan",
    "Kurikulum",
    "Kesiswaan",
    "Fasilitas",
    "SDM",
    "Tulisan Inspirasi",
    "School Tour",
  ];

  return (
    <nav className="bg-white border border-yellow-100 py-3 px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo & text kiri */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_lpi.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="font-bold tracking-wide text-base sm:text-lg md:text-xl text-teal-800">
            Baitun Na'im Full Day School
          </span>
        </Link>

        {/* Links kanan */}
        <div className="hidden md:flex space-x-6 text-teal-800 font-medium">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`px-3 py-1 rounded-full transition ${
                active === link
                  ? "bg-teal-800 text-white"
                  : "hover:bg-teal-100"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
