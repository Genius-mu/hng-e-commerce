// "use client";

// import Section2 from "@/components/Section2";
// import Section6 from "@/components/Section6";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// // Product data
// const product = {
//   id: "xx99-mark-ii",
//   name: "XX99 Mark II Headphones",
//   description:
//     "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
//   price: 2999,
//   image: "/images/img7.png",
//   features:
//     "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
//   features2:
//     "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17-hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
//   inTheBox: [
//     { qty: 1, item: "Headphone Unit" },
//     { qty: 2, item: "Replacement Earcups" },
//     { qty: 1, item: "User Manual" },
//     { qty: 1, item: "3.5mm Audio Cable" },
//   ],
// };

// // Format currency
// function formatCurrency(amount: number) {
//   return `$${amount.toLocaleString()}`;
// }

// export default function Page() {
//   const [quantity, setQuantity] = useState(1);
//   const [cart, setCart] = useState<any[]>([]);
//   const [MoreProd] = useState([
//     { imgVal: "/images/img7.png", h2Val: "XX99 MARK II" },
//     { imgVal: "/images/img9.png", h2Val: "XX99 MARK II" },
//     { imgVal: "/images/img10.png", h2Val: "XX99 MARK II" },
//   ]);

//   const totalPrice = product.price * quantity;

//   // Load cart
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) setCart(JSON.parse(storedCart));
//   }, []);

//   // Save cart
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Add to cart
//   const addToCart = () => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     let updatedCart;

//     if (existingItem) {
//       updatedCart = cart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + quantity }
//           : item
//       );
//     } else {
//       updatedCart = [
//         ...cart,
//         {
//           id: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image,
//           quantity,
//         },
//       ];
//     }

//     setCart(updatedCart);
//     alert(
//       `${product.name} added to cart 🛒 | Total: ${formatCurrency(totalPrice)}`
//     );
//   };

//   return (
//     <>
//       <section className="w-full pt-9 pb-8 flex justify-center items-center h-fit">
//         <div className="w-[80%] flex flex-col gap-y-9">
//           {/* Back Button */}
//           <div className="mt-12">
//             <Link
//               href="/"
//               className="text-sm pb-3 pt-3 pl-5 pr-5 text-gray-600 hover:text-black transition"
//             >
//               ← Back to Home
//             </Link>
//           </div>

//           {/* Product Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
//             <div className="rounded-2xl overflow-hidden h-[30em] flex justify-center items-center bg-[#f1f1f1]">
//               <img src={product.image} alt={product.name} />
//             </div>

//             <div className="flex flex-col gap-y-4">
//               <h3 className="tracking-[7px] text-[#D87D4A] uppercase">
//                 new product
//               </h3>
//               <h1 className="text-3xl font-bold text-slate-900 max-w-[250px]">
//                 {product.name}
//               </h1>
//               <p className="text-gray-600">{product.description}</p>

//               {/* ✅ Live-updating price */}
//               <p className="text-2xl font-semibold text-black">
//                 {formatCurrency(totalPrice)}
//               </p>

//               {/* Quantity & Add to Cart */}
//               <div className="w-fit h-fit flex gap-x-3 items-center">
//                 <div className="flex bg-[#f1f1f1] rounded">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="px-3 py-2 hover:bg-gray-300"
//                   >
//                     -
//                   </button>
//                   <span className="px-5 py-2">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="px-3 py-2 hover:bg-gray-300"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button
//                   onClick={addToCart}
//                   className="w-fit px-6 py-3 bg-[#D87D4A] text-white rounded hover:opacity-90 transition"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Features + In the Box */}
//           <section className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0">
//             <div className="flex flex-col gap-y-6">
//               <h2 className="text-lg font-semibold uppercase">Features</h2>
//               <p className="text-gray-700 max-w-[540px] text-[15px]">
//                 {product.features}
//               </p>
//               <p className="text-gray-700 max-w-[540px] text-[15px]">
//                 {product.features2}
//               </p>
//             </div>

//             <div className="lg:w-[40%] flex flex-col gap-y-2">
//               <h2 className="text-lg font-semibold uppercase">In the Box</h2>
//               <ul className="space-y-2">
//                 {product.inTheBox.map((box, index) => (
//                   <li key={index} className="flex gap-3">
//                     <span className="text-[#d87d4a] font-bold">{box.qty}x</span>
//                     <span className="text-gray-700">{box.item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>

//           {/* Related Products */}
//           <div className="flex justify-center flex-col gap-y-5 items-center mt-16">
//             <h2 className="uppercase text-3xl text-black">You may also like</h2>
//             <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
//               {MoreProd.map((prod, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col w-full justify-center items-center gap-y-4"
//                 >
//                   <div className="rounded-2xl bg-[#f1f1f1] w-full overflow-hidden h-[15em] flex justify-center items-center">
//                     <img
//                       src={prod.imgVal}
//                       alt={product.name}
//                       className="imgPrd w-[5em] h-[5em] object-center"
//                     />
//                   </div>
//                   <h2 className="uppercase text-xl font-semibold text-black">
//                     {prod.h2Val}
//                   </h2>
//                   <Link
//                     href=""
//                     className="w-fit px-6 py-2 bg-[#D87D4A] text-white rounded hover:opacity-90 transition"
//                   >
//                     see product
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Section2 />
//       <Section6 />
//     </>
//   );
// }

"use client";

import Section2 from "@/components/Section2";
import Section6 from "@/components/Section6";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from "uuid";

// Product data
const product = {
  id: "xx99-mark-ii",
  name: "XX99 Mark II Headphones",
  description:
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  price: 2999,
  image: "/images/img7.png",
  features:
    "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
  features2:
    "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17-hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
  inTheBox: [
    { qty: 1, item: "Headphone Unit" },
    { qty: 2, item: "Replacement Earcups" },
    { qty: 1, item: "User Manual" },
    { qty: 1, item: "3.5mm Audio Cable" },
  ],
};

// Format currency
function formatCurrency(amount: number) {
  return `$${amount.toLocaleString()}`;
}

// Get or create cart ID
function getCartId() {
  if (typeof window === "undefined") return "";

  let cartId = localStorage.getItem("cartId");
  if (!cartId) {
    cartId = uuidv4();
    localStorage.setItem("cartId", cartId);
  }
  return cartId;
}

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [MoreProd] = useState([
    { imgVal: "/images/img7.png", h2Val: "XX99 MARK II" },
    { imgVal: "/images/img9.png", h2Val: "XX59" },
    { imgVal: "/images/img10.png", h2Val: "ZX9 SPEAKER" },
  ]);

  // Convex mutation
  const addOrUpdateCartItem = useMutation(api.cart.addOrUpdateCartItem);

  const totalPrice = product.price * quantity;

  // Add to Convex cart
  const addToCart = async () => {
    try {
      const cartId = getCartId();

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
        `${product.name} added to cart 🛒 | Total: ${formatCurrency(totalPrice)}`
      );
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("❌ Failed to add to cart. Check console.");
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

              {/* Quantity & Add to Cart */}
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

          {/* Features + In the Box */}
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

          {/* Related Products */}
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
                      className="imgPrd w-[5em] h-[5em] object-center"
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
