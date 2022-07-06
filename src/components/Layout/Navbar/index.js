import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import HamburgerMenu from "../../../assets/icon/hamburger-menu.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky z-50 top-0 w-full h-14 p-3 bg-beachbrown-900 drop-shadow-lg flex flex-row justify-between items-center">
      <Link href="/" passHref>
        <div className="flex flex-row cursor-pointer">
          <div className="kkn-logo relative w-8 h-8 items-center">
            <Image
              src="/logo/logo-morodonorojo.webp"
              alt="Logo KKN-PPM UGM 2022 Periode 2 Moro Donorojo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="font-bold m-auto text-white">
            Tanaman Konservasi
          </span>
        </div>
      </Link>
      <div>
        <HamburgerMenu
          className="scale-125 cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      <div
        className={clsx(
          "absolute mt-14 left-[-100%] p-2 top-0 w-full h-screen bg-beachbrown-500 transition-all",
          isMenuOpen && "left-0 transition-all"
        )}
      >
        <ul className="child:text-white child:flex child:mb-1 child-hover:bg-white/20 child:p-2 child:rounded-lg child:cursor-pointer child:child:w-full child:child:h-full">
          <li>
            <Link href="/#">Menu Utama</Link>
          </li>
          <li>
            <Link href="/##">Kelapa</Link>
          </li>
          <li>
            <Link href="/">Cemara</Link>
          </li>
          <li>
            <Link href="/">Ketapang</Link>
          </li>
          <li>
            <Link href="/">Nyamplung</Link>
          </li>
          <li>
            <Link href="/">Waru Laut</Link>
          </li>
          <li>
            <Link href="/">Pandan Laut</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
