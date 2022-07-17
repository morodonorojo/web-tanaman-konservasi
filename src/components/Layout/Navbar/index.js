import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import HamburgerMenu from "../../../assets/icon/hamburger-menu.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex h-14 w-full flex-row items-center justify-between bg-beachbrown-900 p-3 drop-shadow-lg">
      <Link href="/" passHref>
        <div className="flex cursor-pointer flex-row">
          <div className="kkn-logo relative h-8 w-8 items-center">
            <Image
              src="/logo/logo-morodonorojo.webp"
              alt="Logo KKN-PPM UGM 2022 Periode 2 Moro Donorojo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="m-auto font-semibold text-white">
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
          "absolute top-0 mt-14 h-screen w-full bg-beachbrown-500 p-2 transition-all",
          isMenuOpen ? "left-0 transition-all" : "left-[-100%]"
        )}
      >
        <ul className="font-body child:mb-1 child:flex child:child:h-full child:child:w-full child:cursor-pointer child:rounded-lg child:p-2 child:text-white child-hover:bg-white/20">
          <li>
            <Link href="/">Menu Utama</Link>
          </li>
          <li>
            <Link href="/tanaman/kelapa">Kelapa</Link>
          </li>
          <li>
            <Link href="/tanaman/cemara">Cemara Laut</Link>
          </li>
          <li>
            <Link href="/tanaman/ketapang">Ketapang</Link>
          </li>
          <li>
            <Link href="/tanaman/nyamplung">Nyamplung</Link>
          </li>
          <li>
            <Link href="/tanaman/waru">Waru Laut</Link>
          </li>
          <li>
            <Link href="/tanaman/pandan">Pandan Laut</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
