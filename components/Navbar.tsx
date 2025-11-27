"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type LinkType = {
  name: string;
  href?: string;
  isDropdown?: boolean;
  external?: boolean;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lembagaOpen, setLembagaOpen] = useState(false);

 const pathname = usePathname() || "/";

  const links: LinkType[] = [
    { name: "HOME", href: "/" },
    { name: "LPI", href: "/lpi" },
    { name: "lembaga", isDropdown: true },
    { name: "PUBLIKASI", href: "/publikasi" },
    { name: "HUBUNGI KAMI", href: "/contact" },
    { name: "SPMB", href: "https://spmbbaitunnaim.com/", external: true },
  ];

  const lembagaLinks: LinkType[] = [
    { name: "TPA", href: "/tpa" },
    { name: "KB", href: "/kb" },
    { name: "TK", href: "/tk" },
    { name: "MI", href: "/mi" },
  ];

  const linkClass = "px-2 py-1 w-full text-left whitespace-nowrap transition"; // kotak & 1 baris

  const isActive = (href?: string) => href && pathname === href;

  return (
    <nav className="fixed top-0 max-w-full z-50 bg-white shadow-md text-black border border-yellow-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & text */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image
            src="/logo_lpi.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="font-bold tracking-wide text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
            Baitun Na'im Full Day School
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">
          {links.map((link) =>
            link.isDropdown ? (
              <div
                key="lembaga"
                className="relative"
                onMouseEnter={() => setLembagaOpen(true)}
                onMouseLeave={() => setLembagaOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-2 py-1 cursor-pointer ${
                    lembagaLinks.some((l) => pathname === l.href)
                      ? "bg-teal-800 text-white"
                      : "hover:bg-teal-100"
                  }`}
                >
                  LEMBAGA <ChevronDown size={14} />
                </button>

                {lembagaOpen && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-md mt-1 z-50 w-36">
                    {lembagaLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href!}
                        className={`block px-2 py-1 hover:bg-teal-100 ${
                          isActive(item.href) ? "bg-teal-800 text-white" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2 py-1 ${
                  isActive(link.href) ? "bg-teal-800 text-white" : "hover:bg-teal-100"
                } whitespace-nowrap`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href!}
                className={`px-2 py-1 ${
                  isActive(link.href) ? "bg-teal-800 text-white" : "hover:bg-teal-100"
                } whitespace-nowrap`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle: selalu ada */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center cursor-pointer"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 py-3 space-y-1 bg-white shadow-md">
          {[...links, ...lembagaLinks]
            .filter((link) => !link.isDropdown)
            .map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-2 py-1 ${
                    isActive(link.href) ? "bg-teal-800 text-white" : "hover:bg-teal-100"
                  } whitespace-nowrap`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href!}
                  className={`block px-2 py-1 ${
                    isActive(link.href) ? "bg-teal-800 text-white" : "hover:bg-teal-100"
                  } whitespace-nowrap`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
        </div>
      )}
    </nav>
  );
}
