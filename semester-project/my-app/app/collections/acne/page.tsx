import Link  from "next/link"
import face1 from "@/public/hero/face1.jpeg"
import acneserum from "@/public/hero/acneserum.png"
import Image from "next/image";

function AcnePage()  

{
    return (
        <div className="ml-20 mr-20">
            <div className="m-4">
            <h1 className="text-2xl text-terra font-bold relative text-center"> Introducing Our Acne-Prone Skin Collection: Your Path to Clear Confidence!</h1>
            <p className="text-terra text-lg text-center">At AZALA, we understand the unique challenges that come with acne-prone skin, and we're thrilled to present a skincare collection designed to empower you on your journey to a clear and confident complexion.<br/></p>
            </div>
            <div className="flex flex-row m-2 justify-center ">
            <Image className =" m-2 mr-8 rounded-xl w-1/3 h-auto " src={face1} alt={"face1"} />
            <Image className ="m-2 mr-8 rounded-xl w-1/3 h-full" src={acneserum} alt={"acneserum"} />
            </div>
            <div className="m-2">
            <h2 className="text-xl font-medium text-terra text-center">Gentle, Yet Powerful Formulations:</h2>
            <p className="text-terra text-lg text-center">Our products feature meticulously crafted formulations that are gentle on sensitive skin yet pack a powerful punch against acne. With science-backed ingredients known for their soothing and purifying properties, our collection is your go-to solution for managing breakouts without compromising on gentleness.<br/><br/></p>
            <h2 className="text-xl font-medium text-terra text-center"> Balancing Act for Radiant Skin:</h2>
            <p className="text-terra text-lg text-center">Achieve balance with our specially curated products that target acne at its source. From clarifying cleansers to calming serums, each product is meticulously formulated to address acne concerns while promoting overall skin health. Experience the perfect balance for a radiant and blemish-free complexion.<br/><br/></p>
            </div>
            <h2 className="text-xl font-medium text-terra text-center">Customer-Tested, Dermatologist-Approved:</h2>
            <p className="text-terra text-lg text-center">Our products have been put to the test by our community, receiving rave reviews for their efficacy. Dermatologist-approved and recommended, you can trust our collection to be your skincare ally in the journey to clearer and healthier skin.<br/><br/></p>
        </div>
     
    );
    
}

export default AcnePage;