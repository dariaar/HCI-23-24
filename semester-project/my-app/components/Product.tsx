// Product component
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  imageUrl: string;
  category: string;
  title: string;
  price: string;
  onAddToCart: () => void;
}

const Product: React.FC<ProductProps> = ({ imageUrl, category, title, price, onAddToCart }) => {
  const urlNew = title.trim().replaceAll(" ", "-");

  return (
    <div className="flex flex-col items-center w-fit h-fit mx-[15px]">
      

      <div className="mb-3 rounded overflow-hidden">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={title}
            width={400} 
            height={400} 
            className="rounded-xl"
          />
          <div className="text-terra absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
        </div>
      </div>

      <p className="font-serif text-xl font-bold whitespace-break-spaces text-terra mb-3">
        {price}
      </p>

      <div>
        <Link href={"/shop/" + category + "/" + urlNew}>
          <button
            className="font-serif text-green2 bg-terra hover:text-terra hover:bg-peach p-[7px] m-[10px] rounded-xl"
            onClick={onAddToCart}
          >
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;