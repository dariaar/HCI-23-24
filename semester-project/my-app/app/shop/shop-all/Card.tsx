import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      <p className="text-xl whitespace-break-spaces text-terra">
        {title}
      </p>
      <p className="text-xl font-bold whitespace-break-spaces text-terra">
        {price}
      </p>
      <Link legacyBehavior href={`/shop-all/${encodeURIComponent(title.trim().replaceAll(" ", "-"))}`}>
        <a
          className="font-roboto-condensed rounded-xl text-green1 bg-terra hover:text-terra hover:bg-peach p-[7px] m-[10px] "
          onClick={onAddToCart}
        >
          Add to cart
        </a>
      </Link>
    </div>
  );
};

export default Card;
