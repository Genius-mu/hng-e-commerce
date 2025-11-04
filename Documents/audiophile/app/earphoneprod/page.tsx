"use client";

import { useState } from "react";
import Link from "next/link";
import Section2 from "@/components/Section2";
import Section6 from "@/components/Section6";

// --- Product Data (Static for now) ---
const product = {
  id: "xx99-mark1",
  name: "XX99 Mark I Headphones",
  description:
    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  price: 1750,
  image: "/images/img3.png",
  features:
    "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
  features2:
    "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound.",
  inTheBox: [
    { qty: 1, item: "Headphone Unit" },
    { qty: 2, item: "Replacement Earcups" },
    { qty: 1, item: "User Manual" },
    { qty: 1, item: "3.5mm Audio Cable" },
  ],
};

// --- Format currency ---
function formatCurrency(amount: number) {
  return `$${amount.toLocaleString()}`;
}

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<any[]>([]);

  // --- Add to cart logic ---
  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Increase quantity if already in cart
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      // Add new product
      setCart([
        ...cart,
        { id: product.id, name: product.name, price: product.price, quantity },
      ]);
    }

    alert(`${quantity} × ${product.name} added to cart ✅`);
  };

  // --- Update quantity safely ---
  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const [MoreProd] = useState([
    { imgVal: "/images/img7.png", h2Val: "XX99 MARK II" },
    { imgVal: "/images/img9.png", h2Val: "XX99 MARK II" },
    { imgVal: "/images/img10.png", h2Val: "XX99 MARK II" },
  ]);

  return (
    <>
      <section className="w-full pt-9 pb-8 flex justify-center items-center h-fit">
        <div className="w-[80%] flex flex-col gap-y-9">
          {/* Back Button */}
          <div className="mt-12">
            <Link
              href="/"
              className="text-sm pb-3 pt-3 pl-5 pr-5 text-gray-600 hover:text-black transition"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
            {/* Product Image */}
            <div className="rounded-2xl overflow-hidden h-[30em] flex justify-center items-center bg-[#f1f1f1]">
              <img src={product.image} alt={product.name} />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-y-4">
              <h3 className="tracking-[7px] text-[#D87D4A] uppercase">
                new product
              </h3>
              <h1 className="text-3xl font-bold text-slate-900 max-w-[250px]">
                {product.name}
              </h1>
              <p className="text-gray-600">{product.description}</p>

              <p className="text-2xl font-semibold">
                {formatCurrency(product.price)}
              </p>

              {/* Quantity + Add to Cart */}
              <div className="w-fit h-fit flex gap-x-3 items-center">
                <div className="flex items-center bg-[#f1f1f1] rounded">
                  <button
                    onClick={decrement}
                    className="px-4 py-2 text-gray-700 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={increment}
                    className="px-4 py-2 text-gray-700 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-fit px-6 py-3 bg-[#D87D4A] text-white rounded hover:opacity-90 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* FEATURES + BOX */}
          <section className="flex justify-between flex-col md:flex-row mt-10">
            <div className="flex flex-col gap-y-6 md:w-[55%]">
              <h2 className="text-lg font-semibold uppercase">Features</h2>
              <p className="text-gray-700 text-[15px]">{product.features}</p>
              <p className="text-gray-700 text-[15px]">{product.features2}</p>
            </div>

            <div className="md:w-[40%] flex flex-col gap-y-2 mt-10 md:mt-0">
              <h2 className="text-lg font-semibold uppercase">In the Box</h2>
              <ul className="space-y-2">
                {product.inTheBox.map((box, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#d87d4a] font-bold">{box.qty}x</span>
                    <span className="text-gray-700">{box.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* GALLERY */}
          <div className="w-full flex gap-x-6 mt-10">
            <div className="w-[50%] h-[30em] flex flex-col gap-y-6">
              <img
                src="/images/img13.png"
                alt={product.name}
                className="rounded-2xl object-cover h-[50%]"
              />
              <img
                src="/images/img14.png"
                alt={product.name}
                className="rounded-2xl object-cover h-[50%]"
              />
            </div>
            <div className="w-[50%] h-[30em]">
              <img
                src="/images/img15.png"
                alt={product.name}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          {/* You May Also Like */}
          <div className="flex flex-col gap-y-5 items-center mt-16">
            <h2 className="uppercase text-3xl text-black">You may also like</h2>
            <div className="w-full flex justify-center items-center gap-x-8">
              {MoreProd.map((prod, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full justify-center items-center gap-y-4"
                >
                  <div className="rounded-2xl bg-[#f1f1f1] w-full overflow-hidden h-[15em] flex justify-center items-center">
                    <img
                      src={prod.imgVal}
                      alt={prod.h2Val}
                      className="w-[5em] h-[5em] object-center"
                    />
                  </div>
                  <h2 className="uppercase text-xl font-semibold text-black">
                    {prod.h2Val}
                  </h2>
                  <Link
                    href=""
                    className="w-fit px-6 py-2 bg-[#D87D4A] text-white rounded hover:opacity-90 transition"
                  >
                    see product
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <Section2 />
      <Section6 />
    </>
  );
}
