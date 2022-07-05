import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import HamburgerMenu from "../../../assets/icon/hamburger-menu.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky z-50 top-0 w-full h-14 p-3 bg-beachbrown-900 flex flex-row justify-between items-center">
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
          "absolute mt-14 left-[-100%] top-0 w-full h-screen bg-orange-500 transition-all",
          isMenuOpen && "left-0 transition-all"
        )}
      ></div>
    </nav>
  );
};

export default Navbar;
