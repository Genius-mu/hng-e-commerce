"use client";

import Image from "next/image";
import Link from "next/link";

// Product data (you can replace this later with API or CMS)
const products = {
  headphones: {
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones feature a new driver unit for unparalleled clarity and precision sound. Experience your music like never before.",
    price: 2999,
    image: "/images/headphones.png",
    features:
      "The XX99 Mark II offers superior sound isolation, studio-grade comfort, and premium build quality.",
    inTheBox: [
      { qty: 1, item: "Headphone Unit" },
      { qty: 2, item: "Replacement Earcups" },
      { qty: 1, item: "User Manual" },
      { qty: 1, item: "3.5mm Audio Cable" },
    ],
  },

  speakers: {
    name: "ZX9 Speaker",
    description:
      "Upgrade your sound system with the ZX9 speaker. It's a high-fidelity speaker built to deliver room-filling sound with unmatched depth and clarity.",
    price: 4500,
    image: "/images/speakers.png",
    features:
      "The ZX9 is built with two custom-built 8-inch woofers and a midrange driver that produce exceptional sound reproduction.",
    inTheBox: [
      { qty: 2, item: "Speaker Units" },
      { qty: 1, item: "Remote Control" },
      { qty: 1, item: "User Manual" },
      { qty: 1, item: "3.5mm Audio Cable" },
    ],
  },

  earphones: {
    name: "YX1 Wireless Earphones",
    description:
      "The YX1 Wireless Earphones combine performance and design, providing crystal-clear sound with a minimalist look and all-day comfort.",
    price: 999,
    image: "/images/earphones.png",
    features:
      "Experience freedom from wires, noise-canceling performance, and powerful bass in a compact design.",
    inTheBox: [
      { qty: 1, item: "Earphone Unit" },
      { qty: 2, item: "Replacement Ear Tips" },
      { qty: 1, item: "Charging Cable" },
      { qty: 1, item: "User Manual" },
    ],
  },
};

// Simple currency formatter
function formatCurrency(amount: number) {
  return `$${amount.toLocaleString()}`;
}

export default function ProductPageClient({ id }: { id: string }) {
  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <main className="flex justify-center items-center min-h-[80vh] text-center">
        <div>
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <p className="mt-4 text-gray-500">We couldn’t find this product.</p>
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-lg"
          >
            Go Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <p className="mt-6 text-2xl font-semibold">
            {formatCurrency(product.price)}
          </p>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition">
            Add to Cart
          </button>

          {/* Features */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <p className="text-gray-700">{product.features}</p>
          </div>

          {/* In The Box */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">In the Box</h2>
            <ul className="space-y-2">
              {product.inTheBox.map((box, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#d87d4a] font-bold">{box.qty}x</span>
                  <span className="text-gray-700">{box.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-12">
        <Link
          href="/"
          className="text-sm text-gray-600 hover:text-black transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
