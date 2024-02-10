import React from "react";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  price: string;
  onAddToCart: () => void;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, price, onAddToCart }) => {
  return (
    <div className="flex flex-col items-center bg-white w-fit h-fit m-[10px] hover:bg-beige_text hover:cursor-pointer">
      <div className="m-[20px]">
        <Image src={imageUrl} alt={title} width={300} height={300} />
      </div>
      <p className="font-serif text-xl font-bold whitespace-break-spaces text-blue1">
        {title}
      </p>
      <p className="font-serif text-xl font-bold whitespace-break-spaces text-brown1">
        {price}
      </p>
      <button
        className="font-serif text-dark_blue bg-peach1 hover:text-peach1 hover:bg-dark_blue p-[7px] m-[10px] rounded-sm"
        onClick={onAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
