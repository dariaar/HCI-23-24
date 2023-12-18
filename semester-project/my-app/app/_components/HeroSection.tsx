import Image from "next/image";
import prva from "@/public/hero/prva.png";
import drugaSlika from "@/public/hero/drugaSlika.png";
import trecaSlika from "@/public/hero/trecaSlika.png";
import cetvrtaSlika from "@/public/hero/cetvrtaSlika.png";


const HeroSection = () => (
  <section className="container flex-row justify-content w-screen">
    <div className="flex flex-row justify-center gap-5 w-full">
      <h1 className="font-playfair text-l text-center lg:text-center xl:text-2xl font-extrabold text-terra whitespace-break-spaces px-2 py-2">
        Unlock Your Best Skin: <br />
        Your Journey to Beauty and Confidence Begins Here.
      </h1>
    </div>

    <div className="lg:flex flex-shrink-0">
  <div className="flex flex-col relative">
    <Image src={prva} alt="prva slika" className="w-screen" />
    <div className="absolute inset-0  bg-white opacity-75 w-2/3 h-3/4 mx-auto my-auto"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl text-terra">TERRA ORGANICA COLLECTION</h1>
      <a href="/collections/newest">
      <button className="border rounded-2xl border-terra px-6 py-2 text-terra mt-4 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-xl">
        DISCOVER NOW
      </button>
      </a>
    </div>
  </div>
</div>



    
<div className="lg:flex flex-shrink-0">
  <div className="flex flex-col lg:flex-row ml-6 mt-6">
    <div className="flex items-center flex-1 lg:w-1/2">
      <div className="flex flex-col lg:flex-row lg:items-center">
        
        <Image src={drugaSlika} alt="druga slika" className="scale-30 pb-8 pr-8 w-full lg:w-auto rounded-2xl" />
        <div className="flex flex-col items-center justify-center text-center ml-8 mt-8">
          <p className="font-roboto text-terra text-base lg:text-xl text-center ">
            At AZALA, we take skincare to the next level. <br/>Our products undergo extensive testing in advanced laboratories. <br/>These efforts have translated into helping many people achieve healthier, more radiant skin.
          </p>
          <a href ="/aboutus">
          <button className="relative border rounded-2xl border-terra text-xl text-terra mt-3 px-6 py-2 lg:self-center ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-2xl">
            ABOUT US
          </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


    <div className="flex flex-row bg-green2 py-2">
        <div className="flex flex-col flex-1">
        <Image src={trecaSlika} alt="treca slika" className="rounded-2xl w-100 h-auto mx-auto my-4 " />
        <div className="flex flex-col  items-center">
          <p className="font-roboto text-base text-center text-terra ml-2">
          Uncertain about your skin type? <br/>
From sensitive to combination skin, we've got the <br />
answers and solutions you're looking for. 


          </p>
          <a href="/blog">
          <button className=" relative self-center border rounded-2xl border-terra text-terra w-max px-3 py-2 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-xl">
          READ THE BLOG
        </button>
        </a>
        </div>
        </div>

        <div className="flex flex-col  flex-1">
        <Image src={cetvrtaSlika} alt="cetvrta slika" className="w-100 h-auto rounded-2xl mx-auto my-4" />
        <div className="flex flex-col items-center">
          <h1 className="font-roboto text-base text-center text-terra ml-8">
          All of our products are:
          <li>fragrance free</li>
          <li>oil free</li>
          <li>paraben free</li>

          </h1>
          <a href="/shop/shop-all">
          <button className="relative self-center border rounded-2xl border-terra text-terra w-max px-3 py-2 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-xl">
          SHOP NOW
        </button>
        </a>
        </div>

        </div>

    </div>
  </section>
);

export default HeroSection;
