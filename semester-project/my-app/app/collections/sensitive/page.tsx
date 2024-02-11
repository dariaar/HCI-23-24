import Link  from "next/link"
import Image from "next/image";
import face3 from "@/public/hero/face3.png"
import sensitiveserum from "@/public/hero/sensitiveserum.png"


function SensitivePage()  

{
    return (
        <div className="ml-20 mr-20">
            <div className="m-4">
            <h1 className="text-2xl text-terra font-bold relative text-center"> Nurturing Beauty: Our Gentle Skincare for Sensitive Skin!</h1>
            <p className="text-terra text-lg text-center">


            At AZALA, we understand the unique needs of sensitive skin, and our skincare collection is thoughtfully crafted to provide a gentle touch that nurtures and revitalizes. Embrace the beauty of tranquility with our specially formulated products designed to care for your delicate skin.

<br/></p>
            </div>
            <div className="flex flex-row m-2 justify-center ">
            <Image className =" m-2 mr-8 rounded-xl w-1/3 h-auto " src={face3} alt={"face3"} />
            <Image className ="m-2 mr-8 rounded-xl w-1/3 h-full" src={sensitiveserum} alt={"sensitiveserum"} />
            </div>
            <div className="m-2">
            <h2 className="text-xl font-medium text-terra text-center">Hypoallergenic Formulations:</h2>
            <p className="text-terra text-lg text-center">Our products feature hypoallergenic formulations that prioritize the well-being of sensitive skin. We have carefully selected ingredients known for their soothing properties, ensuring a skincare routine that nurtures without irritation.<br/><br/></p>
            <h2 className="text-xl font-medium text-terra text-center"> Calm and Comfort for Redness:</h2>
            <p className="text-terra text-lg text-center"> Our skincare collection addresses redness and irritation with calming serums enriched with botanical extracts. Let your skin revel in the gentle embrace of our formulations, designed to reduce redness and promote a more even-toned complexion.<br/><br/></p>
            </div>
            <h2 className="text-xl font-medium text-terra text-center">Soothing Hydration, All Day Long:</h2>
            <p className="text-terra text-lg text-center">Indulge in the luxury of continuous hydration with our moisturizing elixirs. Crafted to provide lasting moisture without clogging pores, our products are designed to soothe and nourish, leaving your skin feeling supple and revitalized.<br/><br/></p>
        </div>
    );
    
}

export default SensitivePage;