import Link  from "next/link"
import Image from "next/image";
import prva from "@/public/hero/prva.png"

function NewestPage()  

{
    return (
        <div className="ml-20 mr-20">
        <div className="m-4">
        <h1 className="text-3xl text-terra font-bold relative text-center m-5"> Experience Radiance: Unveiling Our Newest Collection! </h1>
        <p className="text-terra text-lg text-center">


       


At AZALA, we're delighted to introduce our latest collection that promises to elevate your skincare journey to new heights. Immerse yourself in the beauty of transformation as we unveil a range of meticulously crafted products designed to enhance your natural radiance.

<br/></p>
        </div>
        <div className="flex flex-row m-2 justify-center ">
        <Image className =" m-2 mr-8 rounded-xl w-2/3 h-auto " src={prva} alt={"prva"} />
        
        </div>
        <div className="m-2">
        <h2 className="text-xl font-medium text-terra text-center"> Discover the Power of Innovation:</h2>
        <p className="text-terra text-lg text-center">Our new collection is a testament to innovation, featuring cutting-edge formulations that harness the latest advancements in skincare technology. From revitalizing serums to nourishing elixirs, each product is a blend of science and luxury, promising transformative results.<br/><br/></p>
        <h2 className="text-xl font-medium text-terra text-center">Indulge in Luxurious Self-Care:</h2>
        <p className="text-terra text-lg text-center"> Elevate your self-care routine with a touch of luxury. Our new collection is more than skincare; it's a journey of indulgence and self-love. Imbibe the feeling of luxury with each application, transforming your skincare routine into a daily ritual of pampering.<br/><br/></p>
        </div>
        <h2 className="text-xl font-medium text-terra text-center">A Gift to Your Skin, From Us to You:</h2>
        <p className="text-terra text-lg text-center">Join us in celebrating the launch of our new collection. As a special gift, receive 20% of with the code "NEW20" for your next purchase. It's our way of saying thank you for choosing AZALA for your skincare journey.<br/><br/></p>
    </div>
    );
    
}

export default NewestPage;