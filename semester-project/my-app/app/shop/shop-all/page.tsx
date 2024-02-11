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
  const faceQuery = `
    query {
      shopCollection(where: { category_contains: "face" }) {
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

  const hairQuery = `
    query {
      shopCollection(where: { category_contains: "hair" }) {
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

  const [faceShops, setFaceShops] = useState<Shop[]>([]);
  const [bodyShops, setBodyShops] = useState<Shop[]>([]);
  const [hairShops, setHairShops] = useState<Shop[]>([]);

  useEffect(() => {
    const fetchData = async (query: string, setFunction: React.Dispatch<React.SetStateAction<Shop[]>>) => {
      try {
        const response = await fetchGraphQL(query, space_id, access_token);
        const data = await response.json();

        console.log("Products GraphQL Response:", data);

        if (response.ok) {
          setFunction(data.data.shopCollection.items);
        } else {
          console.error("Products GraphQL Errors:", data.errors);
        }
      } catch (error) {
        console.error("Error fetching Products:", error);
      }
    };

    fetchData(faceQuery, setFaceShops);
    fetchData(bodyQuery, setBodyShops);
    fetchData(hairQuery, setHairShops);
  }, [faceQuery, bodyQuery, hairQuery]);

  const handleAddToCart = (title: string) => {
    console.log('Added to cart:', title);
  };

  return (
    <div className="container mx-auto md:p-8">
      <h1 className="text-3xl md:text-6xl font-bold mb-15 text-center text-terra m-[20px]">
        Face
      </h1>
      <div className="flex justify-center">
        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          {faceShops.map((shop, index) => (
            <Card
              imageUrl={shop.image.url}
              title={shop.name}
              price={shop.price}
              onAddToCart={() => handleAddToCart(shop.name)}
              key={index}
            />
          ))}
        </section>
      </div>

      <h1 className="text-3xl md:text-6xl font-bold mb-15 text-center text-terra m-[20px]">
        Body
      </h1>
      <div className="flex justify-center">
        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          {bodyShops.map((shop, index) => (
            <Card
              imageUrl={shop.image.url}
              title={shop.name}
              price={shop.price}
              onAddToCart={() => handleAddToCart(shop.name)}
              key={index}
            />
          ))}
        </section>
      </div>

      <h1 className="text-3xl md:text-6xl font-bold mb-15 text-center text-terra m-[20px]">
        Hair
      </h1>
      <div className="flex justify-center">
        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          {hairShops.map((shop, index) => (
            <Card
              imageUrl={shop.image.url}
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
