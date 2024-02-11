import Link  from "next/link"
import Image from "next/image";
import face2 from "@/public/hero/face2.jpeg"
import matureserum from "@/public/hero/matureserum.png"

function AntiAgingPage()  

{
    return (
        <div className="ml-20 mr-20">
            <div className="m-4">
            <h1 className="text-2xl text-terra font-bold relative text-center">  Discover Timeless Radiance: Our Anti-Aging Marvels for Mature Skin!</h1>
            <p className="text-terra text-lg text-center">


At AZALA, we recognize the beauty that comes with age, and our curated skincare collection is designed to celebrate and enhance the radiance of mature skin. Introducing our anti-aging range, where science meets luxury to deliver unparalleled benefits for timeless beauty.<br/></p>
            </div>
            <div className="flex flex-row m-2 justify-center ">
            <Image className =" m-2 mr-8 rounded-xl w-1/3 h-auto " src={face2} alt={"face2"} />
            <Image className ="m-2 mr-8 rounded-xl w-1/3 h-full" src={matureserum} alt={"matureserum"} />
            </div>
            <div className="m-2">
            <h2 className="text-xl font-medium text-terra text-center">Age-Defying Elegance:</h2>
            <p className="text-terra text-lg text-center">Our products are meticulously crafted to address the unique needs of mature skin, offering a harmonious blend of potent anti-aging ingredients. Indulge in formulations that help combat fine lines, wrinkles, and the visible signs of aging, leaving your skin with a renewed sense of vibrancy and elegance.<br/><br/></p>
            <h2 className="text-xl font-medium text-terra text-center">  Intensive Hydration for Resilience:</h2>
            <p className="text-terra text-lg text-center">Embrace the power of hydration with our products that go beyond the surface, replenishing your skin's moisture reservoir. Experience a surge of resilience as our deeply hydrating serums lock in moisture, promoting plumpness and a youthful suppleness that lasts throughout the day.<br/><br/></p>
            </div>
            <h2 className="text-xl font-medium text-terra text-center">Revitalize and Restore:</h2>
            <p className="text-terra text-lg text-center">Rediscover the joy of vibrant skin with our revitalizing formulations. Our products are tailored to stimulate collagen production, promoting skin elasticity and firmness. Immerse yourself in the luxurious ritual of renewal, revealing a complexion that radiates with newfound energy.<br/><br/></p>
        </div>
    );
    
}

export default AntiAgingPage;