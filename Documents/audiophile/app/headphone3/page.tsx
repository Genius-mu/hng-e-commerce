"use client";

import Section2 from "@/components/Section2";
import Section6 from "@/components/Section6";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const product = {
  id: "xx99-mark-ii",
  name: "XX59 Headphones",
  description:
    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  price: 899,
  image: "/images/img9.png",
  features:
    "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
  features2:
    "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
  inTheBox: [
    { qty: 1, item: "Headphone Unit" },
    { qty: 2, item: "Replacement Earcups" },
    { qty: 1, item: "User Manual" },
    { qty: 1, item: "3.5mm Audio Cable" },
  ],
};

function formatCurrency(amount: number) {
  return `$${amount.toLocaleString()}`;
}

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [MoreProd] = useState([
    { imgVal: "/images/img7.png", h2Val: "XX99 MARK II" },
    { imgVal: "/images/img8.png", h2Val: "XX99 MARK II" },
    { imgVal: "/images/img4.png", h2Val: "XX99 MARK II" },
  ]);

  // ✅ Single Convex mutation hook (removed duplicate)
  const addOrUpdateCartItem = useMutation(api.cart.addOrUpdateCartItem);

  // This ID will uniquely identify your session/cart
  const cartId = "R2Cat"; // you can later generate it from auth or uuid

  const totalPrice = product.price * quantity;

  // ✅ Add to Convex cart
  const addToCart = async () => {
    try {
      await addOrUpdateCartItem({
        cartId,
        item: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
        },
      });
      alert(
        `${product.name} added to Convex cart 🛒 | Total: ${formatCurrency(totalPrice)}`
      );
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("❌ Failed to add to Convex cart. Check console.");
    }
  };

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

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
            <div className="rounded-2xl overflow-hidden h-[30em] flex justify-center items-center bg-[#f1f1f1]">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="flex flex-col gap-y-4">
              <h3 className="tracking-[7px] text-[#D87D4A] uppercase">
                new product
              </h3>
              <h1 className="text-3xl font-bold text-slate-900 max-w-[250px]">
                {product.name}
              </h1>
              <p className="text-gray-600">{product.description}</p>

              <p className="text-2xl font-semibold text-black">
                {formatCurrency(totalPrice)}
              </p>

              {/* Quantity + Add */}
              <div className="w-fit h-fit flex gap-x-3 items-center">
                <div className="flex bg-[#f1f1f1] rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-5 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={addToCart}
                  className="w-fit px-6 py-3 bg-[#D87D4A] text-white rounded hover:opacity-90 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <section className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0">
            <div className="flex flex-col gap-y-6">
              <h2 className="text-lg font-semibold uppercase">Features</h2>
              <p className="text-gray-700 max-w-[540px] text-[15px]">
                {product.features}
              </p>
              <p className="text-gray-700 max-w-[540px] text-[15px]">
                {product.features2}
              </p>
            </div>

            <div className="lg:w-[40%] flex flex-col gap-y-2">
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

          {/* Gallery */}
          <div className="w-full flex gap-x-6 mt-10">
            <div className="w-[50%] h-[30em] flex flex-col gap-y-6">
              <div className="w-full flex justify-center overflow-hidden items-center">
                <img
                  src="/images/img17.png"
                  alt={product.name}
                  className="rounded-2xl h-full w-full object-cover"
                />
              </div>
              <div className="w-full flex justify-center overflow-hidden items-center">
                <img
                  src="/images/img16.png"
                  alt={product.name}
                  className="rounded-2xl h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-[50%] h-[30em]">
              <img
                src="/images/img18.png"
                alt={product.name}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Related */}
          <div className="flex justify-center flex-col gap-y-5 items-center mt-16">
            <h2 className="uppercase text-3xl text-black">You may also like</h2>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
              {MoreProd.map((prod, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full justify-center items-center gap-y-4"
                >
                  <div className="rounded-2xl bg-[#f1f1f1] w-full overflow-hidden h-[15em] flex justify-center items-center">
                    <img
                      src={prod.imgVal}
                      alt={product.name}
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

      <Section2 />
      <Section6 />
    </>
  );
}
