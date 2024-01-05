import type { Metadata } from "next";
import clsx from "clsx";
import {
  Inter,
  Roboto,
  Roboto_Condensed,
  Playfair_Display,
} from "next/font/google";
import NavBar from "@/components/NavBar";
//import Footer from "@/components/Footer";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "AZALA | %s",
    default: "AZALA",
  },
  description: "AZALA webshop",
};

const pages: Record<string, `/${string}`> = {
  home: "/",
  shop: "/shop",
  collections: "/collections",
  blog: "/blog",
  aboutus: "/aboutus",
  profile: "/profile",
  shoppingcart: "/shoppingcart",
}; // ili dodajte "as const" ovdje
const adjustedPages: Record<string, `/${string}`> = {
  home: "/",
  shop: "/shop",
  collections: "/collections",
  blog: "/blog",
  'about us': "/aboutus",
  profile: "/profile",
  'shopping cart': "/shoppingcart",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          roboto.variable,
          roboto_condensed.variable,
          playfairDisplay.variable
        )}
      >
        <NavBar pages={adjustedPages} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}