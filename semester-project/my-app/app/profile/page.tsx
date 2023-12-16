
import Image from "next/image"
import profile from "@/public/hero/profile.png"


const ProfilePage = () => (

<section className=" bg-green2 flex font-medium items-center justify-center h-screen">

    <section className="w-64 mx-auto bg-terra rounded-2xl px-8 py-6 shadow-lg">
        <div className="flex items-center justify-between">
            <span className="text-peach text-sm">2d ago</span>
            <span className="text-green1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div className="mt-6 w-fit mx-auto">
            <Image src={profile} className="rounded-full w-28 " alt="profile picture"/>
        </div>

        <div className="mt-8 ">
            <h2 className="text-peach font-bold text-2xl tracking-wide">Anna <br/> Smith</h2>
        </div>
        <p className="text-green1 font-semibold mt-2.5" >
            Five purchases
        </p>

        <div className="h-1 w-full bg-black mt-8 rounded-full">
            <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
        </div>
        <div className="mt-3 text-peach text-sm">
            <span className="text-green1 font-semibold">Bonus points:</span>
            <span>400</span>
        </div>

    </section>


</section>
);

export default ProfilePage