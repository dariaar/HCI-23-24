"use client"
import React, { useState, useEffect } from 'react';
import { fetchGraphQL } from '@/app/utils/contentfulFetch';
import Card from "@/app/shop/shop-all/Card";

const space_id = 'oryvsd9mg11g';
const access_token = 'lfsKVzhuOdUcubBJ7kSWzOzihmY7G-Lgn6ofML8Q-_g';

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

const Shop = () => {
  const bodyQuery = `
    query {
      shopCollection(where: { category_contains: "body" }) {
        items {
          name
          price
          image {
            sys {
              id
            }
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

  const [bodyShops, setBodyShops] = useState<Shop[]>([]);

  useEffect(() => {
    const fetchBodyData = async () => {
      try {
        const response = await fetchGraphQL(bodyQuery, space_id, access_token);
        const data = await response.json();

        console.log("Body Products GraphQL Response:", data);

        if (response.ok) {
          setBodyShops(data.data.shopCollection.items);
        } else {
          console.error("Body Products GraphQL Errors:", data.errors);
        }
      } catch (error) {
        console.error("Error fetching Body Products:", error);
      }
    };

    fetchBodyData();
  }, [bodyQuery]);

  const handleAddToCart = (title: string) => {
    console.log('Added to cart:', title);
  };

  return (
    <div className="container mx-auto md:p-8">
      <h1 className="text-3xl md:text-6xl font-roboto-condensed font-bold mb-15 text-center text-terra m-[20px]">
        Body
      </h1>
      <div className="flex justify-center">
        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          {bodyShops.map((shop, index) => (
            <Card
              imageUrl={shop.image.url}
              category = {shop.category}
              title={shop.name}
              price={shop.price}
              onAddToCart={() => handleAddToCart(shop.name)}
              key={index}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
export default Shop;
