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
        <div className="flex flex-col md:flex-row items-center w-fit h-fit mx-[15px]">
          <div className="flex">
            <div className="relative mt-[30px] mr-[30px]">
                <Image
                src={imageUrl}
                alt={title}
                width={400} 
                height={400} 
                />
                <div className=" text-terra absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
            </div>
            </div>
    
          <div className="flex flex-col">
               
                <p className="font-serif text-xl font-bold whitespace-break-spaces text-terra">
                    {price}
                </p>
                <Link href={"/shop/" + category + "/" + urlNew}>
                    <button
                    className="font-serif text-dark_blue bg-peach1 hover:text-peach1 hover:bg-dark_blue p-[7px] m-[10px] rounded-sm"
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