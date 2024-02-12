import Link from "next/link"
import infl from "@/public/hero/infl.png"
import skincare from "@/public/hero/skincare.png"
import Image from "next/image";

function Blog2Page()
{
    return (
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
                <address className="flex justify-center mt-8 mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-terra ">
                        <Image className="mr-4 w-16 h-16 rounded-full" src={infl} alt={"dr"}/>
                        <div>
                            <a  className="text-xl font-bold text-terra ">Ella Harper</a>
                            <p className="text-base text-green1 ">Skincare Influencer</p>
                            <p className="text-base text-green1 ">Feb. 5, 2024</p>
                        </div>
                    </div>
                </address>
                <h1 className="mb-4 text-3xl text-center font-extrabold leading-tight text-terra lg:mb-6 lg:text-4xl ">
                        
                Morning vs. Night: Crafting Your Perfect Skincare Routine</h1>
            </header>
            <p className="lead text-center text-lg text-terra">

            Skincare is not just a routine; it's a ritual that nourishes your skin and boosts your confidence. As you embark on the journey to healthier, glowing skin, understanding the nuances between morning and nighttime skincare routines is crucial. Each phase of the day presents unique challenges and opportunities for your skin, and tailoring your regimen accordingly can make a significant difference.
             In this guide, we delve into the intricacies of morning and nighttime skincare to help you curate the perfect routine.</p>
            
            <figure><Image className="mt-5 rounded-xl" src={skincare} alt="skincare"/>
                <figcaption className="text-center text-green1">Skincare</figcaption>
            </figure>
           
            <div className="text-terra text-center mt-6">
                <div>
                <p className="m-5 text-lg"><strong className="text-xl">Morning Skincare: Protect and Energize.<br/></strong> </p>
                            <strong>1. Cleansing:</strong>
                            <p>Begin your morning routine with a gentle cleanser. This clears away overnight impurities,
                                 excess oils, and prepares your skin for the day ahead.</p>
                            <strong>2. Toning:</strong>
                            <p>Apply a soothing, alcohol-free toner to balance the skin's pH levels. 
                                This helps tighten pores and enhances the absorption of subsequent products.
                             </p>
                            <strong>3. Serum:</strong>
                            <p>Introduce a vitamin C serum. Packed with antioxidants, it protects against environmental 
                                pollutants and promotes collagen synthesis for a radiant complexion.</p>
                            <strong>4. Moisturizing:</strong>
                            <p>Hydrate your skin with a lightweight, non-comedogenic moisturizer. This creates a protective barrier and
                                 ensures your skin stays supple throughout the day</p>
                             <strong>5. Sunscreen:</strong>
                            <p>The most critical step in the morning routine—apply a broad-spectrum SPF. Shielding your skin from UV
                                 rays is essential for preventing premature aging and maintaining overall skin health.</p>
                
                </div>
                <div>
                <p className="m-5 text-lg"><strong className="text-xl">Nighttime Skincare: Repair and Rejuvenate.<br/></strong></p>
                <strong>1. Makeup Removal and Cleansing:</strong>
                <p>Start your evening routine by removing makeup and cleansing your skin thoroughly. This rids the skin of pollutants accumulated throughout the day.</p>
                <strong>2. Exfoliation (2-3 Times a Week):</strong>
                <p>Exfoliate to slough off dead skin cells. This promotes cell turnover, unclogs pores, and enhances the effectiveness of other skincare products.</p>
                <strong>3. Toning:</strong>
                <p>Reapply a toner to balance the skin and prepare it for the next steps.</p>
                <strong>4. Treatment Products (Serums, Retinoids, etc.):</strong>
                <p>Incorporate treatment products like serums containing active ingredients such as retinoids. These work to repair and rejuvenate your skin overnight.</p>
                <strong>5. Eye Cream:</strong>
                <p>If you use an eye cream, apply it before your moisturizer. This area is delicate and benefits from specialized care.</p>
                <strong>6. Moisturizing:</strong>
                <p>Choose a richer moisturizer for the night to deeply hydrate and replenish your skin as you sleep.</p>
                <strong>7. Lip Care:</strong>
                <p>Don't forget to apply a nourishing lip balm to keep your lips hydrated.</p>
                
                </div>
                <p className="m-5 text-lg"><strong className="text-xl">Crafting a Ritual of Self-Care<br/></strong>. Morning and nighttime skincare routines are not just about products; they are rituals of self-care. Each step is an investment in the health and vitality of your skin. By understanding the unique requirements of morning and nighttime skincare, you empower yourself to curate a routine that enhances your skin's natural beauty, day and night. So, embrace the ritual, cherish the process, and let your radiant skin be a reflection of your dedication to self-care.</p>
               
          </div>
            </article>

</div>
    );
}

export default Blog2Page;