"use client"

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import logo2 from "../public/hero/logo2.png";
import Image from "next/image";
import Logo from "./Logo";


interface NavbarProps {
  // Record of string keys and string values where each value is a path starting with a slash
  pages: Record<string, `/${string}`>;
}

const baseClass =
  "uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-xl text-terra hover:bg-terra hover:text-green1";

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const pathName = usePathname();

  return (
    <nav className=" bg-green1">
      <div className="flex items-center justify-center">
        <Image src={logo2} alt="logo2" width={180} height={180} />
      </div>
    <nav className="flex items-center justify-center p-4 bg-green1">
      
      <ul className="flex gap-2">
        {Object.entries(pages).map(([name, path]) => (
          <li key={name}>
            <Link href={path}>
              <span
                className={clsx(baseClass, {
                  "bg-terra text-green1 pointer-events-none":
                    path === pathName,
                })}
              >
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      
    </nav>
    </nav>
  );
};
export default Navbar;