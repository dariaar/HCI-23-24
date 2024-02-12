"use client";
// SearchBar component
import React, { useRef, useState } from "react";
import { fetchGraphQL } from "@/app/utils/contentfulFetch";
import Link from "next/link";

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

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<Shop[]>([]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = `
      query {
        shopCollection (where: {name_contains: "${e.target.value}"}) {
          items {
            name
            price
            category
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

    if (e.target.value !== "") {
      try {
        const response = await fetchGraphQL(query, space_id, access_token);
        const data = await response.json();
        setSearchResults(data.data.shopCollection.items);
      } catch (error) {
        console.log("Error fetching Contentful data:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="hidden md:flex lg:flex items-center justify-evenly shrink-5 relative">
      <input
        ref={inputRef}
        onChange={handleInputChange}
        type="text"
        className="px-3 py-2 rounded-xl bg-beige text-terra border border-terra placeholder-terra"
        placeholder="Search..."
      />
      <button className="absolute right-0 top-0 bottom-0 px-3 py-2 bg-terra text-green1 rounded-xl hover:text-terra hover:bg-peach">
        GO
      </button>

      {searchResults.length > 0 && (
        <div className="absolute w-full bg-beige max-h-64 h-content top-full z-10 rounded-xl overflow-y-scroll text-terra">
          {searchResults.map((product, index) => (
            <Link
              onClick={() => {
                if (inputRef.current !== null) {
                  inputRef.current.value = "";
                }
                setSearchResults([]);
              }}
              href={`/shop/${product.category}/${product.name.trim().replaceAll(" ", "-")}`}
              key={index}
            >
              <div className="font-roboto-condensed text-sm my-1" key={index}>
                {product.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
