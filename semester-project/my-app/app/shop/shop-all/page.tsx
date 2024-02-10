"use client"
import React, { useState, useEffect } from 'react';
import { fetchGraphQL } from '@/app/utils/contentfulFetch';
import Card from './Card';

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
  const query = `
  query {
    shopCollection(where: { name_contains: "face" }) {
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

  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetchGraphQL(query, space_id, access_token);
          const data = await response.json();
      
          console.log("Contentful GraphQL Response:", data);
      
          if (response.ok) {
            setShops(data.data.shopCollection.items);
          } else {
            console.error("Contentful GraphQL Errors:", data.errors);
          }
        } catch (error) {
          console.error("Error fetching Contentful data:", error);
        }
      };
      
    fetchData();
  }, []);

  const productData = {
    imageUrl: '/pictures/ring.png',
    title: 'RingEarring',
    price: '5.00',
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', productData.title);
  };

  return (
    <div className="container mx-auto md:p-8">
      <h1 className="text-3xl md:text-6xl font-bold mb-15 text-center text-dark_blue font-serif m-[20px]">
        Rings
      </h1>
      <div></div>
      <div className="flex justify-center">
        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          {shops.map((Shop, index) => (
            <Card
              imageUrl={Shop.image.url}
              title={Shop.name}
              price={Shop.price}
              onAddToCart={handleAddToCart}
              key={index}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Shop;
