import Link from "next/link"
import infl2 from "@/public/hero/infl2.png"
import Image from "next/image";
import nature from "@/public/hero/nature.png"

function Blog3Page()
{
    return (
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
                <address className="flex justify-center mt-8 mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-terra ">
                        <Image className="mr-4 w-16 h-16 rounded-full" src={infl2} alt={"infl2"}/>
                        <div>
                            <a href="#" rel="author" className="text-xl font-bold text-terra ">Taylor Sanders</a>
                            <p className="text-base text-green1 ">Skincare Enthusiast</p>
                            <p className="text-base text-green1 ">Feb. 3, 2024</p>
                        </div>
                    </div>
                </address>
                <h1 className="mb-4 text-3xl text-center font-extrabold leading-tight text-terra lg:mb-6 lg:text-4xl ">
                        
                Unlocking the Secrets of Natural Radiance</h1>
            </header>
            <p className="lead text-center text-lg text-terra">

            In a world inundated with skincare options, the allure of natural radiance has never been more enticing. Beyond the promises of laboratory-developed concoctions, the beauty of nature beckons, offering 
            a myriad of ingredients that can transform your skincare routine into a journey of self-care and rejuvenation.</p>
            
            <figure><Image className="mt-5" src={nature} alt="nature"/>
                <figcaption className="text-center text-green1">Natural Beuty</figcaption>
            </figure>
           
            <ol className="text-terra text-center mt-6">
                <li className="m-5 text-lg"><strong className="text-xl">The Botanical Symphony: Nature's Gift to Your Skin<br/></strong>. 
                            
                            <p>Nature has long been regarded as the ultimate apothecary, providing an array of botanical treasures
                             that harness the power of vitamins, antioxidants, and essential oils. From the calming properties of
                              chamomile to the revitalizing effects of green tea, each plant boasts a unique contribution to skincare.
                               Dive into the botanical symphony and discover how incorporating these natural ingredients can nurture
                                your skin.</p>
                            <strong>DIY Skincare Recipes: Crafting Elixirs in Your Kitchen</strong>
                            <p>Apply a soothing, alcohol-free toner to balance the skin's pH levels. 
                                This helps tighten pores and enhances the absorption of subsequent products.Embark on a
                                 culinary adventure for your skin by exploring DIY skincare recipes. Learn how to whip up nourishing 
                                 face masks, hydrating serums, and exfoliating scrubs using ingredients straight from your kitchen. Unveil 
                                 the secrets of at-home pampering,
                                 allowing you to tailor your skincare routine to your skin's ever-changing needs.
                             </p>
                              
                </li>
                <li className="m-5 text-lg"><strong className="text-xl">The Rise of Plant-Based Products: Embracing Green Beauty<br/></strong>.
                
                <p>As the demand for clean beauty rises, so does the popularity of plant-based skincare products. 
                    Delve into the world of green beauty, where natural and organic ingredients take center stage.
                     Discover the benefits of incorporating plant-based 
                    cleansers, moisturizers, and serums into your routine, offering your skin a pure and unadulterated treat.</p>
                <strong>Holistic Skincare Rituals: Balancing the Mind, Body, and Spirit</strong>
                <p>Beyond the tangible benefits, natural skincare fosters holistic wellness. Explore the connection between skincare rituals and overall well-being.
                     From the calming effects of essential oils to the mindfulness of applying natural products, uncover the intimate link between
                      caring for your skin and nurturing your soul.</p>
                </li>
                <li className="m-5 text-lg"><strong className="text-xl">Embark on Your Natural Radiance Journey<br/></strong>In the pursuit of natural radiance, the key lies in unlocking the secrets nature has bestowed upon us. Embrace the simplicity and purity of natural skincare, turning your routine into a celebration of the earth's abundance. As you embark on this journey, let the wisdom of nature guide you to a radiant, healthy glow—an outward reflection of the beauty within.</li>
               
            </ol>
            </article>

</div>
    );
}

export default Blog3Page;