"use client"
import React, { useState, useEffect } from "react";
import Product from "@/components/Product"
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
  const [shop, setProduct] = useState<Shop>({} as Shop);
  const productName = params.product.replace(/-/g, " ");

  useEffect(() => {
    console.log(productName)
    const query = `
    query {
      shopCollection (where: {name: "${productName}"}) {
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

    const fetchData = async () => {
      try {
        const response = await fetchGraphQL(query, space_id, access_token);
        const data = await response.json();
        console.log(data.data.shopCollection.items[0]);
        setProduct(data.data.shopCollection.items[0]);
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
  console.log(shop)

  return (
    <div className="container mx-auto md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-15 text-center text-terra font-roboto-condensed m-[20px] mt-[30px]">
          {shop.name}
      </h1>
      <div className="flex justify-center">
        <section>
            {shop.image && shop.image.url && <Product
                      imageUrl={shop.image.url}
                      category={shop.category}
                      title={shop.name}
                      price={shop.price}
                      onAddToCart={handleAddToCart}
                                  />  }
        </section>
      </div>
    </div>
  );
}

export default Page;