import Image from "next/image";
import prvaSlika from "@/public/hero/prvaSlika.png";
import drugaSlika from "@/public/hero/drugaSlika.png";
import trecaSlika from "@/public/hero/trecaSlika.png";
import cetvrtaSlika from "@/public/hero/cetvrtaSlika.png";


const HeroSection = () => (
  <section className="container flex-row justify-content w-screen mb-3">
    <div className="flex flex-row justify-center gap-5 w-full">
      <h1 className="font-playfair text-l text-center lg:text-center xl:text-2xl font-extrabold text-terra whitespace-break-spaces">
        Unlock Your Best Skin: <br />
        Your Journey to Beauty and Confidence Begins Here.
      </h1>
    </div>

    <div className="hidden lg:flex flex-shrink-0">
      <div className="flex flex-col">
        <div className="flex items-center">
          <Image src={prvaSlika} alt="prva slika" className="scale-100" />
          <h1 className="absolute text-3xl text-terra top-1/2 left-1/2 -translate-x-1/2 translate-y-1">
            TERRA ORGANICA COLLECTION
          </h1>  
          <button className="absolute border border-terra mt-8 px-6 py-2 text-terra top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 py-[15px] mx-[15px] ">DISCOVER NOW </button>
        </div>
        
          
      </div>
    </div>

    <div className="hidden lg:flex flex-shrink-0">
      <div className="flex flex-col ml-8 mt-8">
        <div className="flex items-center">
          <Image src={drugaSlika} alt="druga slika" className="scale-30 pb-8 pr-8" />
          <div className="flex flex-col">
          <p className="font-roboto text-terra text-base ml-2">
            At AZALA, we take skincare to the next level. Our products undergo extensive testing in advanced laboratories. These efforts have translated into helping many people achieve healthier, more radiant skin.
          </p>
          <button className="border border-terra mt-2 px-3 py-2 top-1/2 left-1/2 -translate-x-100 translate-y-20 text-terra">
          ABOUT US
        </button>
        </div>
        </div>
        
      </div>
    </div>


    <div className="flex flex-row bg-green2">
        <div className="flex flex-col">
        <Image src={trecaSlika} alt="treca slika" className="scale-1 px-8 py-4 ml-30" />
        <div className="flex flex-col">
          <p className="font-roboto text-base text-center text-terra ml-2">
          Uncertain about your skin type?
From sensitive to combination skin, we've got the <br />
answers and solutions you're looking for. 


          </p>
          <button className="border border-terra text-terra">
          READ THE BLOG
        </button>
        </div>
        </div>

        <div className="flex flex-col">
        <Image src={cetvrtaSlika} alt="cetvrta slika" className="scale-20 px-8 py-4 mr-30" />
        <div className="flex flex-col">
          <h1 className="font-roboto text-base text-center text-terra ml-8">
          All of our products are:
          <li>fragrance free</li>
          <li>oil free</li>
          <li>paraben free</li>

          </h1>
          <button className="border border-terra text-terra">
          SHOP NOW
        </button>
        </div>

        </div>

    </div>
  </section>
);

export default HeroSection;
