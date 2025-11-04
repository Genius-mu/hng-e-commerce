"use client";

import Image from "next/image";
import { useState } from "react";

type BoxItem = {
  quantity: number;
  item: string;
};

type ProductGallery = {
  first: string;
  second: string;
  third: string;
};

type ProductSuggestion = {
  name: string;
  image: string;
  slug: string;
};

interface ProductDetailsProps {
  name: string;
  description: string;
  price: number;
  features: string;
  includes: BoxItem[];
  image: string;
  gallery: ProductGallery;
  others: ProductSuggestion[];
}

export default function ProductDetails({
  name,
  description,
  price,
  features,
  includes,
  image,
  gallery,
  others,
}: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`${quantity} ${name} added to cart`);
  };

  return (
    <main className="w-full flex flex-col items-center text-[#101010] px-6 md:px-20 lg:px-32 py-16">
      {/* Product Info Section */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        <div className="flex-1">
          <Image
            src={image}
            alt={name}
            width={540}
            height={560}
            className="rounded-lg object-cover w-full"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="text-4xl font-bold uppercase">{name}</h2>
          <p className="text-gray-600">{description}</p>
          <p className="text-lg font-bold tracking-widest">
            $ {price.toLocaleString()}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-gray-100 rounded-md">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 font-semibold"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 font-semibold"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-[#D87D4A] text-white uppercase tracking-wider px-6 py-3 font-semibold hover:bg-[#FBAF85] transition rounded-md"
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* Features and Box */}
      <section className="w-full flex flex-col lg:flex-row justify-between gap-20 mb-20">
        <div className="flex-1">
          <h3 className="text-2xl font-bold uppercase mb-6">Features</h3>
          <p className="text-gray-600 leading-7 whitespace-pre-line">
            {features}
          </p>
        </div>

        <div className="flex-1 lg:max-w-[300px]">
          <h3 className="text-2xl font-bold uppercase mb-6">In the box</h3>
          <ul className="space-y-2">
            {includes.map((item, index) => (
              <li key={index}>
                <span className="text-[#D87D4A] font-semibold mr-2">
                  {item.quantity}x
                </span>
                <span className="text-gray-600">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <div className="flex flex-col gap-6">
          <Image
            src={gallery.first}
            alt="Gallery image 1"
            width={445}
            height={280}
            className="rounded-lg object-cover w-full"
          />
          <Image
            src={gallery.second}
            alt="Gallery image 2"
            width={445}
            height={280}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <Image
          src={gallery.third}
          alt="Gallery image 3"
          width={635}
          height={592}
          className="rounded-lg object-cover w-full h-full"
        />
      </section>

      {/* You may also like */}
      <section className="w-full mb-20 text-center">
        <h3 className="text-2xl font-bold uppercase mb-10">
          You may also like
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {others.map((item) => (
            <div key={item.slug} className="flex flex-col items-center gap-6">
              <Image
                src={item.image}
                alt={item.name}
                width={350}
                height={318}
                className="rounded-lg object-cover"
              />
              <h4 className="text-xl font-bold uppercase">{item.name}</h4>
              <button className="bg-[#D87D4A] text-white uppercase tracking-wider px-6 py-3 font-semibold hover:bg-[#FBAF85] transition rounded-md">
                See Product
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 mt-20">
        <div className="flex-1">
          <h2 className="text-4xl font-bold uppercase mb-6">
            Bringing you the <br />
            <span className="text-[#D87D4A]">best</span> audio gear
          </h2>
          <p className="text-gray-600 leading-7">
            Located at the heart of New York City, Audiophile is the premier
            store for high-end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Best audio gear"
            width={540}
            height={588}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </section>
    </main>
  );
}
