"use client"
import { FC, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo2 from "../public/hero/logo2.png";

interface NavbarProps {
  pages: Record<string, `/${string}`>;
}

const baseClass =
  "uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-xl hover:bg-terra hover:text-green1";

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const pathName = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showCollectionsDropdown, setShowCollectionsDropdown] = useState(false);

  const handleShopDropdown = () => {
    setShowShopDropdown(!showShopDropdown);
    setShowCollectionsDropdown(false); // Close other dropdown
  };

  const handleCollectionsDropdown = () => {
    setShowCollectionsDropdown(!showCollectionsDropdown);
    setShowShopDropdown(false); // Close other dropdown
  };

  return (
    <nav className="bg-green1">
      <div className="flex items-center justify-between lg:justify-center p-4">
        <Link legacyBehavior href="/">
          <a>
            <Image src={logo2} alt="logo2" width={180} height={180} />
          </a>
        </Link>
        {/* Hamburger Menu Icon */}
        <button
          className="block lg:hidden text-terra"
          onClick={toggleMobileMenu}
        >
          &#9776;
        </button>
      </div>
      {/* Mobile Menu */}
    {showMobileMenu && (
      <nav className="flex flex-col items-center">
        {/* Render the menu items */}
        {Object.entries(pages).map(([name, path]) => (
          <div key={name}>
            {name === 'shop' || name === 'collections' ? (
              <div className="relative" onMouseEnter={name === 'shop' ? handleShopDropdown : handleCollectionsDropdown} onMouseLeave={name === 'shop' ? handleShopDropdown : handleCollectionsDropdown}>
                <span className={clsx(baseClass, { "bg-terra text-green1 pointer-events-none py-1": path === pathName, "text-terra": path !== pathName })} onClick={() => setShowMobileMenu(false)}>
                  {name}
                </span>
                {name === 'shop' && showShopDropdown && (
                  <div className="absolute z-10 flex flex-col bg-green1 p-2 top-full left-0 rounded-xl">
                    <Link legacyBehavior href="/shop/shop-all"><a className="text-terra hover:text-green1 hover:bg-terra">Shop All</a></Link>
                    <Link legacyBehavior href="/shop/face"><a className="text-terra hover:text-green1 hover:bg-terra">Face</a></Link>
                    <Link legacyBehavior href="/shop/body"><a className="text-terra hover:text-green1 hover:bg-terra">Body</a></Link>
                    <Link legacyBehavior href="/shop/hair"><a className="text-terra hover:text-green1 hover:bg-terra ">Hair</a></Link>
                  </div>
                )}
                {name === 'collections' && showCollectionsDropdown && (
                  <div className="absolute z-10 flex flex-col bg-green1 p-2 top-full left-0 rounded-xl">
                    <Link legacyBehavior href="/collections/newest"><a className="text-terra hover:text-green1 hover:bg-terra">New Collection</a></Link>
                    <Link legacyBehavior href="/collections/acne"><a className="text-terra hover:text-green1 hover:bg-terra">Acne-prone</a></Link>
                    <Link legacyBehavior href="/collections/anti-aging"><a className="text-terra hover:text-green1 hover:bg-terra">Anti-aging</a></Link>
                    <Link legacyBehavior href="/collections/sensitive"><a className="text-terra hover:text-green1 hover:bg-terra">Sensitive Skin</a></Link>
                  </div>
                )}
              </div>
            ) : (
              <Link href={path} key={name}>
                <span className={clsx(baseClass, { "bg-terra text-green1 pointer-events-none py-1": path === pathName, "text-terra": path !== pathName })} onClick={() => setShowMobileMenu(false)}>
                  {name}
                </span>
              </Link>
            )}
          </div>
        ))}
        {/* Search Bar */}
       {/* Aligns to the right */}
            <div className="relative pb-2">
              <input
                type="text"
                className="px-3 py-2 rounded-xl bg-beige text-terra border border-terra placeholder-terra"
                placeholder="Search..."
              />
              <Link legacyBehavior href="/404" className="flex">

              <button className="absolute right-0 top-0 bottom-2 px-3 py-2 bg-terra text-green1 rounded-xl hover:text-terra hover:bg-peach">GO</button>
              </Link>
              </div>
              {/* ... */}
         
          
        {/* ... */}
      </nav>
    )}
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center p-4">
        <ul className="flex gap-2 flex-wrap sm:flex-nowrap">
          {Object.entries(pages).map(([name, path]) => (
            <li key={name}>
              {/* Your existing navigation links */}
              {name === "shop" ? (
                <div className="relative" onMouseEnter={handleShopDropdown} onMouseLeave={handleShopDropdown}>
                  <span className={clsx(baseClass, { "bg-terra text-green1 pointer-events-none": path === pathName, "text-terra": path !== pathName, })}>
                    {name}
                  </span>
                  {showShopDropdown && (
                    <div className="absolute z-10 flex flex-col bg-green1 p-2 top-full left-0 rounded-xl">
                      <Link legacyBehavior href="/shop/shop-all"><a className="text-terra hover:text-green1 hover:bg-terra">Shop All</a></Link>
                      <Link legacyBehavior href="/shop/face"><a className="text-terra hover:text-green1 hover:bg-terra">Face</a></Link>
                      <Link legacyBehavior href="/shop/body"><a className="text-terra hover:text-green1 hover:bg-terra">Body</a></Link>
                      <Link legacyBehavior href="/shop/hair"><a className="text-terra hover:text-green1 hover:bg-terra ">Hair</a></Link>
                    </div>
                  )}
                </div>
              ) : name === "collections" ? (
                <div className="relative" onMouseEnter={handleCollectionsDropdown} onMouseLeave={handleCollectionsDropdown}>
                  <span className={clsx(baseClass, { "bg-terra text-green1 pointer-events-none": path === pathName, "text-terra": path !== pathName, })}>
                    {name}
                  </span>
                  {showCollectionsDropdown && (
                    <div className="absolute z-10 flex flex-col bg-green1 p-2 top-full left-0 rounded-xl">
                      <Link legacyBehavior href="/collections/newest"><a className="text-terra hover:text-green1 hover:bg-terra">New Collection</a></Link>
                      <Link legacyBehavior href="/collections/acne"><a className="text-terra hover:text-green1 hover:bg-terra">Acne-prone</a></Link>
                      <Link legacyBehavior href="/collections/anti-aging"><a className="text-terra hover:text-green1 hover:bg-terra">Anti-aging</a></Link>
                      <Link legacyBehavior href="/collections/sensitive"><a className="text-terra hover:text-green1 hover:bg-terra">Sensitive Skin</a></Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={path}>
                  <span className={clsx(baseClass, { "bg-terra text-green1 pointer-events-none": path === pathName, "text-terra": path !== pathName, })}>
                    {name}
                  </span>
                </Link>
              )}
            </li>
          ))}
          {/* Search Bar */}
          <li className="ml-auto" style={{ marginTop: "-8px", marginLeft: "-3px" }}> {/* Aligns to the right */}
            <div className="relative">
              <input
                type="text"
                className="px-3 py-2 rounded-xl bg-beige text-terra border border-terra placeholder-terra"
                placeholder="Search..."
              />
              <Link legacyBehavior href="/404" className="flex">

              <button className="absolute right-0 top-0 bottom-0 px-3 py-2 bg-terra text-green1 rounded-xl hover:text-terra hover:bg-peach">GO</button>
              </Link>
              </div>
              {/* ... */}
            </li>
          
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
