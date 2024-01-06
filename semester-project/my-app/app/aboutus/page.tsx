import Image from "next/image";
import about1 from "@/public/hero/about1.png"
import about2 from "@/public/hero/about2.png"
import about3 from "@/public/hero/about3.png"

function AboutPage()
{
    return (
        <div className="relative overflow-hidden bg-beige pt-16 pb-32 space-y-24">
        <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
    
                    <div>
                       
    
                        <div className="mt-6">
                            <h2 className="text-3xl font-bold tracking-tight text-terra">
                                About Us
                            </h2>
                            <p className="mt-4 text-lg text-terra">
                            At AZALA, we believe that skincare is more than just a routine—it's a journey toward embracing your unique beauty and confidence. Founded on the principle that everyone deserves to feel comfortable and empowered in their own skin, we curate a collection of premium skincare products designed to unlock your skin's potential.
<br/>
<br/>
Our passion for skincare goes beyond selling products; it's about fostering a community where beauty meets self-care. We understand that each individual's skin is as unique as they are, which is why we offer a carefully selected range of products that cater to diverse skin types and concerns.

                            </p>
                           
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="-mr-48 pl-6 md:-mr-16 px-6 w-full  h-auto lg:relative lg:m-0 lg:h-full lg:px-0">
                        <Image loading="lazy" width="647" height="486"
                            className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none "
                            src={about1} alt={"about1"}/>
                    </div>
                </div>
            </div>
        </div>
    
    
    
        <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                    <div>
                        
                        <div className="mt-6">
                            
                            <p className="mt-4 text-lg text-terra">
                            Our commitment extends beyond offering exceptional skincare solutions. We aim to be your trusted partner on your skincare journey, providing not just products but also expert advice, helpful tips, and a supportive community that celebrates the beauty in every skin tone and texture.
<br/>
<br/>
Whether you're looking to address specific skincare needs or simply pamper yourself, AZALA is here to guide you. Join us in unlocking your best skin and embarking on a transformative experience where beauty and confidence intertwine.
<br/>
<br/>
Thank you for choosing AZALA as your companion on this exciting journey to radiant, healthy skin. Together, let's discover the beauty that's uniquely yours.
                            </p>
                           
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="mr-48 pr-6 md:-ml-16 px-6 w-full h-auto lg:relative lg:m-0 lg:h-full lg:px-0">
                        <Image alt="Inbox user interface" loading="lazy" width="647" height="486"
                            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                             src={about2}/>
                    </div>
                </div>
            </div>
        </div>
    
    
    
        <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                    <div>
                        
                        <div className="mt-6">
                            <h2 className="text-3xl font-bold tracking-tight text-terra">
                                Our Founders
                            </h2>
                            <p className="mt-4 text-lg text-terra">
                            Meet Mia and Daria, the visionary founders whose unwavering dedication and love for skincare inspired the creation of a brand committed to making high-quality skincare accessible to all.<br/><br/>
                            Driven by their fervor to bridge the gap between premium skincare and affordability, Mia and Daria ventured into uncharted territories. They spent endless hours researching ingredients, meticulously testing formulations, and consulting with experts. Their dedication wasn't just about creating products; it was about curating a collection that resonated with every individual's unique skincare needs.
                            </p>
                           
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="-mr-48 pl-6 md:-mr-16 px-6 w-full h-auto lg:relative lg:m-0 lg:h-full lg:px-0">
                        <Image loading="lazy" width="646" height="485"
                            className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"

                            src={about3} alt={"about3"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    
}

export default AboutPage;