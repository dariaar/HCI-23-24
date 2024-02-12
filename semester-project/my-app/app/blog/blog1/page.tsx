"use client"
import Link from "next/link"
import dr from "@/public/hero/dr.png"
import blog2 from "@/public/hero/blog2.png"
import Image from "next/image";

function Blog1Page()
{
    return (
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <div className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
                <address className="flex justify-center mt-8 mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-terra ">
                        <Image className="mr-4 w-16 h-16 rounded-full" src={dr} alt={"dr"}/>
                        <div>
                            <a  className="text-xl font-bold text-terra ">Dr. Olivia Bennett</a>
                            <p className="text-base text-green1 ">Dermatologist at London Clinic</p>
                            <p className="text-base text-green1 ">Feb. 8, 2024</p>
                        </div> 
                    </div>
                </address>
                <h1 className="mb-4 text-3xl text-center font-extrabold leading-tight text-terra lg:mb-6 lg:text-4xl ">
                        The Ultimate Guide to Understanding Your Skin Type</h1>
            </header>
            <p className="lead text-center text-lg text-terra">

                Your skin is a unique canvas, and deciphering its needs is the key to unlocking a radiant complexion. From oily to dry, sensitive to combination, 
                each skin type comes with its characteristics and requires a tailored approach to skincare. In this comprehensive guide,
                we will walk you through the various skin types, helping you decode the language your skin speaks.</p>
            
            <figure><Image className="mt-5 rounded-xl" src={blog2} alt="blog2"/>
                <figcaption className="text-center text-green1">Different Skin Types</figcaption>
            </figure>
           
            <div className="text-terra text-center mt-6">
                <div className="text-lg">
                <p className="m-5 text-lg"><strong className="text-xl">1. Identifying Your Skin Type</strong>. Understanding your skin type is the first step towards crafting an 
                            effective skincare routine. Here are the common skin types:<br/></p>
                            <strong>Normal Skin:</strong>
                            <ul>
                            <li>Balanced sebum production.</li>
                            <li>Few imperfections.</li>
                            <li>Well-hydrated.</li>
                            </ul>
                            <strong>Oily Skin:</strong>
                            <ul>
                            <li>Excess sebum production.</li>
                            <li>Prone to acne and enlarged pores.</li>
                            </ul>
                            <strong>Dry Skin:</strong>
                            <ul>
                            <li>Insufficient sebum production.</li>
                            <li>Flaky or rough texture.</li>
                            <li>Prone to fine lines and red patches.</li>
                            </ul>
                            
                            </div>
                 <div>          
                <p className="m-5 text-lg"><strong className="text-xl">2. Environmental Factors and Lifestyle Choices</strong>. Consider external factors that may impact your skin:<br/></p>
               <ul className="text-lg">
                <li><strong>Climate:</strong>Adjust your routine based on the climate (e.g., humid or dry weather).</li>
                <li><strong>Diet:</strong>Stay hydrated and incorporate foods rich in antioxidants.</li>
                <li><strong>Stress:</strong>Manage stress levels, as stress can impact skin health.</li>
                </ul>
                </div> 
                <p className="m-5 text-lg"><strong className="text-xl">3. Consulting a Dermatologist</strong>. If in doubt about your skin type or if you have persistent skin concerns, consult with a dermatologist. They can provide professional insights and recommend specific treatments tailored to your unique skin profile.
<br/><br/>
Understanding your skin type is the foundation for a radiant and healthy complexion. With this ultimate guide, embark on a skincare journey that celebrates your skin's uniqueness, bringing out the best in its natural beauty. Remember, a well-informed approach to skincare is the secret to glowing confidence.</p>
               
            </div>
            </div>

</div>
    );
}

export default Blog1Page;