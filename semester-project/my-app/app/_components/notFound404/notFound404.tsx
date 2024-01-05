import React from 'react';
import Image from 'next/image';
import face from "@/public/hero/face.png";

const NotFound404: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beige">
      <div className="text-center flex items-center justify-center flex-wrap">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-green1">404</h1>
          <p className="mt-2 text-2xl font-medium text-terra">Page Not Found</p>
          <p className="mt-4 text-lg text-terra ">
            Oh, dear! It seems the skincare route you're after is taking a short hiatus. <br/> Head back to our Homepage and embark on a renewed quest <br/> to uncover the secrets of vibrant skin.
          </p>
          <a href="/">
            <button className="border rounded-2xl border-terra text-terra w-max px-3 py-2 mt-4 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-xl">
              GO TO HOMEPAGE
            </button>
          </a>
        </div>
        <div className="flex justify-end ml-20">
          <Image src={face} alt="face picture" width={420} height={420} />
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
