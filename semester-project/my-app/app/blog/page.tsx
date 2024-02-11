import Link from "next/link";
import Image from "next/image";
import dr from "@/public/hero/dr.png"
import dr2 from "@/public/hero/dr2.png"
import infl from "@/public/hero/infl.png"
import infl2 from "@/public/hero/infl2.png"


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async (): Promise<Post[]> => {
  const data = await fetch(`${BASE_API_URL}/posts`);
  return data.json();
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <section className="bg-beige">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-terra">AZALA Blog</h2>
          <p className="font-light text-terra sm:text-xl dark:text-gray-400">Dive into a treasure trove of skincare wisdom, where every article is a key to unlocking radiant, healthy skin.</p>
      </div> 
      <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 bg-green1 rounded-lg border border-green1 shadow-md">
              <div className="flex justify-between items-center mb-5 text-beige">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Article
                  </span>
                  <span className="text-sm">6 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-terra"><a href="#">The Ultimate Guide to Understanding Your Skin Type</a></h2>
              <p className="mb-5 font-light text-terra dark:text-gray-400">Your skin is as unique as you are, and deciphering its needs is the first step toward achieving a radiant complexion.  In this guide, we'll delve into the characteristics of various skin types, offering personalized insights to help you identify and care for your skin more effectively.</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <Image className="w-7 h-7 rounded-full" src={dr} alt={"dr"} />
                      <span className="font-medium text-terra">
                      Dr. Olivia Bennett
                      </span>
                  </div>
                 <Link href="/blog/blog1" className="inline-flex items-center font-medium text-beige hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
              </div>
          </article> 
          <article className="p-6 bg-green1 rounded-lg border border-green1 shadow-md">
              <div className="flex justify-between items-center mb-5 text-beige">
                  <span className="bg-primary-100 text-beige text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Article
                  </span>
                  <span className="text-sm">8 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-terra "><a href="#">Morning vs. Night: Crafting Your Perfect Skincare Routine.</a></h2>
              <p className="mb-5 font-light text-terra">Unlock the secrets to a flawless complexion by tailoring your skincare routine to the rhythms of your day. Mornings and nights offer distinct opportunities to care for your skin, and understanding how to optimize each routine is key to achieving healthy, glowing skin. </p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <Image className="w-7 h-7 rounded-full" src={infl} alt={"infl"} />
                      <span className="font-medium text-terra">
                      Ella Harper
                      </span>
                  </div>
                  <Link href="/blog/blog2" className="inline-flex items-center font-medium text-beige hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
              </div>
          </article>       
          <article className="p-6 bg-green1 rounded-lg border border-green1 shadow-md">
              <div className="flex justify-between items-center mb-5 text-beige">
                  <span className="bg-primary-100 text-beige text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Article
                  </span>
                  <span className="text-sm">11 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-terra "><a href="#">Beauty in Nature:Unlocking the Secrets of Natural Radiance.</a></h2>
              <p className="mb-5 font-light text-terra">Explore the wonders of natural ingredients for skincare. From botanical extracts to herbal infusions, delve into the power of nature in achieving radiant skin.DIY skincare recipes, the benefits of plant-based products, and how embracing the goodness of nature can transform your skincare routine.</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <Image className="w-7 h-7 rounded-full" src={infl2} alt={"infl2"} />
                      <span className="font-medium text-terra">
                      Taylor Sanders
                      </span>
                  </div>
                  <Link href="/blog/blog3" className="inline-flex items-center font-medium text-beige hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
              </div>
          </article>    
          <article className="p-6 bg-green1 rounded-lg border border-green1 shadow-md">
              <div className="flex justify-between items-center mb-5 text-beige">
                  <span className="bg-primary-100 text-beige text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Article
                  </span>
                  <span className="text-sm">13 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-terra "><a href="#">Ageless Beauty: Navigating Skincare Through the Years</a></h2>
              <p className="mb-5 font-light text-terra">Journey through the evolving needs of skincare at different life stages. Skincare concerns specific to each age group, from teenage acne to adult skincare routines and mature skin rejuvenation. Tips, product recommendations, and expert advice on maintaining ageless beauty at every phase of life.</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <Image className="w-7 h-7 rounded-full" src={dr2} alt={"dr2"} />
                      <span className="font-medium text-terra">
                      Dr. Hannah Barkley
                      </span>
                  </div>
                  <Link href="/blog/blog4" className="inline-flex items-center font-medium text-beige hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
              </div>
          </article>                  
      </div>  
  </div>
</section>
  );
}