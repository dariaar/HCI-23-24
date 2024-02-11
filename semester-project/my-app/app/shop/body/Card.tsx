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
    <div className="font-roboto-condensed flex flex-col items-center rounded-xl bg-green2 w-fit h-fit m-[10px] hover:bg-beige_text hover:cursor-pointer">
      <div className="m-[20px]">
        <Image className="rounded-2xl" src={imageUrl} alt={title} width={300} height={300} />
      </div>
      <p className=" text-xl font-bold whitespace-break-spaces text-terra">
        {title}
      </p>
      <p className=" text-xl font-bold whitespace-break-spaces text-terra">
        {price}
      </p>
      <button
        className=" text-terra bg-green1 rounded-xl p-[7px] m-[10px] "
        onClick={onAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
