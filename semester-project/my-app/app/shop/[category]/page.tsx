"use client"
import React, { useState, useEffect } from "react";
import Card from "@/app/shop/shop-all/Card";
import { fetchGraphQL } from "@/app/utils/contentfulFetch";

const space_id = "oryvsd9mg11g";
const access_token = "lfsKVzhuOdUcubBJ7kSWzOzihmY7G-Lgn6ofML8Q-_g";

interface Shop {
    name: string;
    price: string;
    image: {
      id: string;
      title: string;
      description: string;
      contentType: string;
      url: string;
    };
    category: string;
  }

interface pageProps {
  params: {
    category: string;
    product: string;
  };
}

function Page({ params }: pageProps) {
  const [redirectToNotFound, setRedirectToNotFound] = useState<boolean>(false);
  const [shops, setProducts] = useState<Shop[]>([]);

  useEffect(() => {
    let query = "";

    if (params.category === 'all') {
      query = `
        query {
          shopCollection {
            items {
              name
              price
              image {
                title
                description
                contentType
                url
              }
              category
            }
          }
        }
      `;
    } else if (['face', 'body', 'hair'].includes(params.category)) {
      query = `
        query {
          shopCollection (where: {name_contains: "${params.category}"}) {
            items {
              name
              price
              image {
                title
                description
                contentType
                url
              }
              category
            }
          }
        }
      `;
    } 
    else {
      // Redirect to not-found page
      setRedirectToNotFound(true);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetchGraphQL(query, space_id, access_token);
        const data = await response.json();
        console.log(data.data.shopCollection.items);
        setProducts(data.data.shopCollection.items);
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      }
    };

    fetchData();
  }, [params.category]);

  const handleAddToCart = () => {
    // Handle adding to cart logic
    console.log("Added to cart!");
  };

  if (redirectToNotFound) {
    // Redirect to not-found page
    window.location.href = '/404';
    return null; // You can also return a loading spinner or any other component
  }

  return (
    <div className="container mx-auto md:p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-15 text-center text-dark_blue font-serif m-[20px] mt-[30px]">
        {params.category === "all" ? (
          // Render if params.category is "all"
          params.category[0].toUpperCase() + params.category.slice(1) + " products"
        ) : (
          // Render if params.category is not "all"
          params.category[0].toUpperCase() + params.category.slice(1) + "s"
        )}
      </h1>
      <div className="flex justify-center">
        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          {shops.map((shop, item) => (
            <Card
              imageUrl={shop.image.url}
              title={shop.name}
              price={shop.price}
              onAddToCart={handleAddToCart}
              key={item}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Page;