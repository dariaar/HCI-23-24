import React from 'react';
import Image from 'next/image';
import profile from '@/public/hero/profile.png';

const ProfilePage = () => (
  <section className="bg-beige flex font-medium items-center justify-center h-screen">

    {/* Sidebar/Navigation */}
    <section className="w-1/4 mx-auto bg-terra rounded-2xl px-6 py-10 shadow-lg ml-8">
      <div className="flex flex-col space-y-4">
        <ul className="space-y-2">
          <li><button className="py-2 bg-terra text-peach hover:text-terra hover:bg-peach rounded-md w-full">Account</button></li>
          <li><button className="py-2 bg-terra text-peach hover:text-terra hover:bg-peach rounded-md w-full">Profile</button></li>
          <li><button className="py-2 bg-terra text-peach hover:text-terra hover:bg-peach rounded-md w-full">Wishlist</button></li>
          <li><button className="py-2 bg-terra text-peach hover:text-terra hover:bg-peach rounded-md w-full">Orders</button></li>
        </ul>
      </div>
    </section>

    {/* Profile Information */}
    <section className="w-1/2 mx-auto bg-terra rounded-2xl px-8 py-6 shadow-lg ml-8">
      <div className="flex items-center justify-between">
        <span className="text-peach text-sm">2d ago</span>
        <span className="text-green1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </span>
      </div>
      <div className="mt-6 w-fit mx-auto">
        <Image src={profile} className="rounded-full w-28 " alt="profile picture" />
      </div>

      <div className="mt-8">
        <h2 className="text-peach font-bold text-2xl tracking-wide">Anna <br/> Smith</h2>
      </div>
      <p className="text-green1 font-semibold mt-2.5">
        Five purchases
      </p>

      <div className="h-1 w-full bg-black mt-8 rounded-full">
        <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
      </div>
      <div className="mt-3 text-peach text-sm">
        <span className="text-green1 font-semibold">Bonus points: </span>
        <span>400</span>
      </div>
    </section>

    {/* Additional Sections on Right as Buttons */}
    <section className="w-1/4 mx-auto bg-terra rounded-2xl px-6 py-10 shadow-lg ml-8 mr-8 mt-8 mb-8">
      <div className="flex flex-col space-y-4">
        <button className="py-2 bg-terra text-peach hover:text-terra hover:bg-peach rounded-md w-full">Membership Program</button>
        <p className="text-center text-green1">Join our exclusive membership for extra benefits!</p>
        
        <button className="py-2 bg-terra text-peach hover:text-terra hover:bg-peach rounded-md w-full">Skincare Routine Planner</button>
        <p className="text-center text-green1">Create a personalized skincare routine.</p>
        
        <button className="py-2 bg-terra text-peach hover:text-terra hover:bg-peach rounded-md w-full">Exclusive Offer</button>
        <p className="text-center text-green1">Limited-time offer only for our members.</p>
        
        <button className="py-2 bg-terra text-peach hover:text-terra hover:bg-peach rounded-md w-full">FAQ</button>
        <p className="text-center text-green1">Find answers to common questions.</p>
      </div>
    </section>
  </section>
);

export default ProfilePage;
