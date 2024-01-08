import Image from "next/image";
import logo2 from "@/public/hero/logo2.png"
type TitleProps = {
  children: string;
};

type ListProps = {
  title: string;
  items: string[];
};

const FooterListTitle = ({ children }: TitleProps) => (
  <div className="font-roboto-condensed font-bold text-2xl whitespace-nowrap text-green2 mb-1 lg:mb-5">
    {children}
  </div>
);

const FooterList = ({ title, items }: ListProps) => {
  return (
    <div>
      <FooterListTitle>{title}</FooterListTitle>
      <ul className="font-roboto text-peach">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <div className="bg-terra">
    <div className="container flex flex-col py-10 items-center gap-10 self-stretch md:max-lg:px-10">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start self-stretch">
        <div>
            <div>
            <Image src={logo2} alt="logo2" className="w-40 h-15 ml-2" />
          <div className="hidden md:block text-peach mt-3 ml-4 font-playfair">
            Unlock Your Best Skin.
          </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-11 md:gap-0 md:justify-center md:w-3/5 text-center md:text-left">
          <FooterList
            title="Sitemap"
            items={[
              "Home",
              "Shop",
              "Collections",
              "Blog",
              "About Us",
            ]}
          />
        </div>
        <div className="flex flex-col items-start md:items-end md:w1/5 mr-5">
        <div className="text-center md:text-left">
            <FooterListTitle>Contact Us</FooterListTitle>
            <ul className="font-roboto text-peach mb-4 text-center justify-center lg:text-left">
              <li>Ruđera Boškovića 32</li>
              <li>21000, Split, Croatia</li>
            </ul>
            <ul className="font-roboto text-peach mb-4 ">
              <li className="flex gap-2 items-center text-center justify-center lg:justify-start">
                +385 123 4567
              </li>
              <li className="flex gap-2 items-center text-center justify-center lg:justify-start">
                info@azala.hr
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="font-roboto text-peach text-base sm:text-lg text-center">
        Copyright @ 2023 AZALA. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;