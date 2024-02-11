import Link from "next/link"
import dr2 from "@/public/hero/dr2.png"
import Image from "next/image";
import mature from "@/public/hero/mature.png"

function Blog4Page()
{
    return (
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
                <address className="flex justify-center mt-8 mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-terra ">
                        <Image className="mr-4 w-16 h-16 rounded-full" src={dr2} alt={"dr2"}/>
                        <div>
                            <a href="#" rel="author" className="text-xl font-bold text-terra ">Dr. Hannah Barkley</a>
                            <p className="text-base text-green1 ">Doctor</p>
                            <p className="text-base text-green1 ">Feb. 1, 2024</p>
                        </div>
                    </div>
                </address>
                <h1 className="mb-4 text-3xl text-center font-extrabold leading-tight text-terra lg:mb-6 lg:text-4xl ">
                        
                Ageless Beauty: Navigating Skincare Through the Years</h1>
            </header>
            <p className="lead text-center text-lg text-terra">

            Beauty, like fine wine, evolves and matures with time. As we traverse the various chapters of our lives, our skin undergoes transformations, demanding a skincare routine that adapts to the changing needs of each stage. In this exploration of ageless beauty, we unravel the secrets to maintaining radiant skin through the years.

</p>
            
            <figure><Image className="mt-5" src={mature} alt="mature"/>
                <figcaption className="text-center text-green1">Mature Skin</figcaption>
            </figure>
           
            <ol className="text-terra text-center mt-6">
                <li className="m-5 text-lg"><strong className="text-xl">Teenage Radiance: Laying the Foundation<br/></strong>. 
                            
                            <p>The journey to ageless beauty often begins in our teenage years—a time of newfound independence and hormonal fluctuations.
                                 Addressing the unique concerns of teenage skin, from acne breakouts to establishing a basic skincare routine, lays the foundation 
                                 for a lifetime of healthy habits.
                                 Dive into the world of gentle cleansers, non-comedogenic moisturizers, and the importance of sun protection.</p>
                            <strong>Guidance for Teenagers: Embracing Skincare as Self-Care</strong>
                            <p>Empower teenagers with insights into skincare as a form of self-care. Provide guidance on establishing
                                 a routine that not only addresses acne but also nurtures a positive relationship with their evolving selves.
                             </p>
                              
                </li>
                <li className="m-5 text-lg"><strong className="text-xl">Adulting Gracefully: A Holistic Approach to Skincare<br/></strong>.
                
                <p>As we enter adulthood, the skincare landscape shifts. Stress, environmental factors,
                     and lifestyle choices play a significant role in skin health. Explore the importance of
                      a holistic approach, incorporating elements like stress management,
                     a balanced diet, and personalized skincare routines that cater to individual concerns.</p>
                <strong>Adapting to Individual Needs: Customizing Your Routine</strong>
                <p>Discuss the importance of customizing skincare routines based on individual needs. Whether combating fine lines, 
                    managing dryness, or addressing hyperpigmentation, understanding your skin's
                     unique requirements becomes paramount in the pursuit of ageless beauty.</p>
                </li>

                <li className="m-5 text-lg"><strong className="text-xl">Golden Years: Embracing Mature Beauty<br/></strong>.
                
                <p>Mature skin exudes a unique beauty, and the key lies in embracing the aging process with grace. 
                    Explore the benefits of incorporating anti-aging ingredients like retinoids and peptides, along with the 
                    significance of hydration and collagen support.
                     Shift the narrative from fighting signs of aging to celebrating the wisdom and experience etched into every line.</p>
                <strong>Caring for Mature Skin: Wisdom Beyond Wrinkles</strong>
                <p>Encourage a positive perspective on mature skin, emphasizing the beauty that comes with experience.
                     Share skincare tips for maintaining elasticity,
                     preventing sun damage, and cultivating a skincare routine that honors the passage of time.</p>
                </li>
                <li className="m-5 text-lg"><strong className="text-xl">Skincare Through the Ages: A Lifelong Journey<br/></strong>In the symphony of ageless beauty, each stage plays a distinct note. From the vibrancy of youth to the grace of maturity, our skincare journey is a lifelong adventure. Embrace the changes, celebrate the milestones, and let your skincare routine be a testament to the beauty that accompanies you through the years—a testament to ageless beauty in every phase of life.</li>
               
            </ol>
            </article>

</div>
    );
}

export default Blog4Page;